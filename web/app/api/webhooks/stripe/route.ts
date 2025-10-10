import { createServerClient } from "@supabase/ssr"
import { type NextRequest, NextResponse } from "next/server"
import type Stripe from "stripe"
import { emailClient } from "@/lib/email/client"
import { OrderConfirmationEmail } from "@/lib/email/templates"
import { env } from "@/lib/env"
import { getLogger } from "@/lib/logger"
import { stripe } from "@/lib/stripe/config"
import {
  extractAddresses,
  extractEmailShippingAddress,
  hasShippingDetails,
} from "@/lib/stripe/types"
import "@/types/stripe-extensions"

const logger = getLogger("stripe-webhook")

// Create Supabase client with service role for webhook operations
function createServiceClient() {
  return createServerClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
    cookies: {
      getAll() {
        return []
      },
      setAll() {},
    },
  })
}

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get("stripe-signature")

  if (!signature) {
    logger.error("Missing Stripe signature")
    return NextResponse.json({ error: "Missing signature" }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, env.STRIPE_WEBHOOK_SECRET)
  } catch (error) {
    logger.error({ error }, "Invalid webhook signature")
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  const supabase = createServiceClient()

  try {
    switch (event.type) {
      case "payment_intent.succeeded": {
        // Note: For guest checkout flow, orders are created in checkout.session.completed
        // This handler is kept for potential future use (e.g., manual payment intents)
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        logger.info({ paymentIntentId: paymentIntent.id }, "Payment succeeded (no action needed)")
        break
      }

      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        logger.warn({ paymentIntentId: paymentIntent.id }, "Payment failed")

        if (paymentIntent.metadata?.order_id) {
          const { error } = await supabase
            .from("orders")
            .update({
              status: "payment_failed",
              updated_at: new Date().toISOString(),
            })
            .eq("id", paymentIntent.metadata.order_id)

          if (error) {
            logger.error(
              { error, orderId: paymentIntent.metadata.order_id },
              "Failed to update failed order"
            )
          }
        }
        break
      }

      case "checkout.session.completed": {
        // 🟩 SHOP-ONLY: Handle successful checkout (KISS implementation)
        const session = event.data.object as Stripe.Checkout.Session
        logger.info({ sessionId: session.id }, "Checkout session completed")

        if (session.mode === "payment" && session.payment_status === "paid") {
          try {
            // Retrieve session with line items
            const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
              expand: ["line_items.data.price.product"],
            })

            // Calculate total amount in Rappen (CHF cents)
            const totalAmount = fullSession.amount_total || 0

            // Extract addresses with fallback logic (shipping_details -> customer_details.address)
            const addresses = extractAddresses(fullSession)

            // Extract Payment Intent ID for Stripe dashboard links
            const paymentIntentId =
              typeof fullSession.payment_intent === "string"
                ? fullSession.payment_intent
                : fullSession.payment_intent?.id || null

            // Create order record
            const { data: order, error: orderError } = await supabase
              .from("orders")
              .insert({
                customer_id: null, // Guest checkout - no customer_id required
                email: session.customer_details?.email || null,
                total_amount: totalAmount,
                currency: "CHF",
                status: "pending", // Will be updated to confirmed after email sent
                payment_status: "paid", // Checkout session is only completed when paid
                payment_method: fullSession.payment_method_types?.[0] || "card", // card or twint
                stripe_session_id: session.id,
                stripe_payment_intent_id: paymentIntentId,
                // ✅ Smart address extraction: shipping_details OR customer_details.address fallback
                shipping_address: addresses.shipping_address,
                billing_address: addresses.billing_address,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
              })
              .select("id")
              .single()

            if (orderError) {
              logger.error({ error: orderError, sessionId: session.id }, "Failed to create order")
              throw orderError
            }

            // Create order items from line items
            if (fullSession.line_items?.data && order) {
              const orderItems = fullSession.line_items.data.map((item, index) => ({
                order_id: order.id,
                product_name:
                  (item.price?.product as Stripe.Product)?.name || `Product ${index + 1}`,
                quantity: item.quantity || 1,
                unit_price: item.price?.unit_amount || 0,
                total_price: (item.price?.unit_amount || 0) * (item.quantity || 1),
              }))

              const { error: itemsError } = await supabase.from("order_items").insert(orderItems)

              if (itemsError) {
                logger.error(
                  { error: itemsError, orderId: order.id },
                  "Failed to create order items"
                )
                // Don't throw here - order is already created
              }
            }

            logger.info({ orderId: order.id, sessionId: session.id }, "Order created successfully")

            // 🟩 SHOP-ONLY: Send order confirmation email (KISS implementation)
            try {
              if (session.customer_details?.email) {
                // Prepare order items data for email
                const emailOrderItems =
                  fullSession.line_items?.data.map((item) => ({
                    product_name: (item.price?.product as Stripe.Product)?.name || "Product",
                    quantity: item.quantity || 1,
                    unit_price: item.price?.unit_amount || 0,
                    total_price: (item.price?.unit_amount || 0) * (item.quantity || 1),
                  })) || []

                // Check if shipping is needed (type-safe detection)
                const hasShipping = hasShippingDetails(session)

                await emailClient.send({
                  from: `Shop <noreply@${env.EMAIL_DOMAIN}>`,
                  to: session.customer_details.email,
                  subject: `Bestellbestätigung #${order.id.slice(-8)}`,
                  react: OrderConfirmationEmail({
                    customerEmail: session.customer_details.email,
                    orderId: order.id,
                    orderItems: emailOrderItems,
                    totalAmount: totalAmount,
                    orderDate: new Date().toISOString(),
                    hasShipping: hasShipping,
                    shippingAddress: extractEmailShippingAddress(session.shipping_details),
                  }),
                })

                logger.info(
                  { orderId: order.id, email: session.customer_details.email },
                  "Order confirmation email sent"
                )
              }
            } catch (emailError) {
              logger.error(
                { error: emailError, orderId: order.id },
                "Failed to send order confirmation email"
              )
              // Don't throw - order is already created successfully
            }
          } catch (error) {
            logger.error({ error, sessionId: session.id }, "Failed to process checkout session")
            // Don't throw - this would return 500 to Stripe and cause retries
          }
        }
        break
      }

      default:
        logger.info({ eventType: event.type }, "Unhandled webhook event")
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    logger.error({ error, eventType: event.type }, "Webhook processing failed")
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 })
  }
}

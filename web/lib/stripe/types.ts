/**
 * 🎯 Stripe Type-Safe Helper Functions
 * Handles conversion between Stripe types and Domain types
 *
 * IMPLEMENTATION PRINCIPLE:
 * - Type-safe conversion without any casts
 * - Uses existing ShippingAddress from domain.ts
 * - YAGNI-compliant: Only currently used conversion patterns
 */

import type Stripe from "stripe"
import type { ShippingAddress } from "@/types/domain"
import type { StripeShippingDetails } from "@/types/stripe-extensions"

/**
 * 📍 EXTRACT SHIPPING ADDRESS
 * Safely converts Stripe shipping_details to ShippingAddress
 * Used in: webhook order creation + email template generation
 *
 * @param shippingDetails - Stripe checkout session shipping_details
 * @returns ShippingAddress | null - Domain type or null if missing
 */
export function extractShippingAddress(
  shippingDetails: StripeShippingDetails | null | undefined
): ShippingAddress | null {
  if (!shippingDetails?.address) {
    return null
  }

  return {
    name: shippingDetails.name || "",
    line1: shippingDetails.address.line1 || "",
    city: shippingDetails.address.city || "",
    postal_code: shippingDetails.address.postal_code || "",
    country: shippingDetails.address.country || "", // Defensive: fallback for potential null values
  }
}

/**
 * 🔍 VALIDATE SHIPPING DETAILS
 * Type-safe check if checkout session has shipping information
 * Used in: email template hasShipping detection
 *
 * @param session - Stripe checkout session
 * @returns boolean - true if shipping details exist and are valid
 *
 * Migration Note (2025-08-27.basil):
 * - OLD (2024-06-20): session.shipping_details
 * - NEW (2025-08-27.basil): session.collected_information.shipping_details
 */
export function hasShippingDetails(session: Stripe.Checkout.Session): boolean {
  return !!session.collected_information?.shipping_details?.address
}

/**
 * 📧 EXTRACT EMAIL SHIPPING ADDRESS
 * Converts Stripe shipping_details to email template format with fallbacks
 * Used in: email template shippingAddress field
 *
 * @param shippingDetails - Stripe checkout session shipping_details
 * @returns Email-safe shipping address with string fallbacks
 */
export function extractEmailShippingAddress(
  shippingDetails: StripeShippingDetails | null | undefined
):
  | {
      name: string
      line1: string
      city: string
      postal_code: string
      country: string
    }
  | undefined {
  if (!shippingDetails?.address) {
    return undefined
  }

  return {
    name: shippingDetails.name || "",
    line1: shippingDetails.address.line1 || "",
    city: shippingDetails.address.city || "",
    postal_code: shippingDetails.address.postal_code || "",
    country: shippingDetails.address.country || "",
  }
}

/**
 * 📍 EXTRACT BILLING ADDRESS
 * Safely converts Stripe customer_details.address to ShippingAddress
 * Used in: webhook order creation (fallback for shipping, primary for billing)
 *
 * @param customerDetails - Stripe checkout session customer_details
 * @returns ShippingAddress | null - Domain type or null if missing
 */
export function extractBillingAddress(
  customerDetails: Stripe.Checkout.Session.CustomerDetails | null | undefined
): ShippingAddress | null {
  if (!customerDetails?.address) {
    return null
  }

  return {
    name: customerDetails.name || "",
    line1: customerDetails.address.line1 || "",
    city: customerDetails.address.city || "",
    postal_code: customerDetails.address.postal_code || "",
    country: customerDetails.address.country || "", // Stripe API allows null, fallback to empty string
  }
}

/**
 * 🏠 EXTRACT ADDRESSES WITH FALLBACK
 * Extracts both shipping and billing addresses with smart fallback logic:
 * - shipping_address: Use shipping_details if available, else use customer_details.address
 * - billing_address: Use customer_details.address
 *
 * @param session - Stripe checkout session
 * @returns Object with shipping_address and billing_address (both can be null)
 */
export function extractAddresses(session: Stripe.Checkout.Session): {
  shipping_address: ShippingAddress | null
  billing_address: ShippingAddress | null
} {
  // Try shipping_details first (explicit shipping address)
  // Migration Note (2025-08-27.basil): collected_information.shipping_details
  let shippingAddress = extractShippingAddress(session.collected_information?.shipping_details)

  // Fallback: If no shipping_details but customer_details has address, use it
  if (!shippingAddress && session.customer_details?.address) {
    shippingAddress = extractBillingAddress(session.customer_details)
  }

  // Billing address from customer_details
  const billingAddress = extractBillingAddress(session.customer_details)

  return {
    shipping_address: shippingAddress,
    billing_address: billingAddress,
  }
}

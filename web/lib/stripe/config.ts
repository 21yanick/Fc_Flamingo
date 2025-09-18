import Stripe from "stripe"
import { env } from "@/lib/env"

export const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-08-27.basil",
  typescript: true,
})

// Shop-only Payment Configuration
// Swiss-only Payment Methods Configuration
export const PAYMENT_METHODS = {
  swiss: ["card", "twint"],
} as const

// Swiss Shop Configuration
export const SWISS_SHOP_CONFIG = {
  region: "swiss",
  paymentMethods: PAYMENT_METHODS.swiss,
  currency: "CHF",
  subscriptions: false, // Shop uses one-time payments only
} as const

// Get Swiss payment methods for shop checkout
export function getSwissPaymentMethods() {
  return SWISS_SHOP_CONFIG.paymentMethods
}

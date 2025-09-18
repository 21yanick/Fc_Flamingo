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
    name: shippingDetails.name,
    line1: shippingDetails.address.line1,
    city: shippingDetails.address.city,
    postal_code: shippingDetails.address.postal_code,
    country: shippingDetails.address.country,
  }
}

/**
 * 🔍 VALIDATE SHIPPING DETAILS
 * Type-safe check if checkout session has shipping information
 * Used in: email template hasShipping detection
 *
 * @param session - Stripe checkout session
 * @returns boolean - true if shipping details exist and are valid
 */
export function hasShippingDetails(session: Stripe.Checkout.Session): boolean {
  return !!session.shipping_details?.address
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

/**
 * 🎯 FCFlamingo Domain Types
 * YAGNI-compliant: Only currently used business types
 *
 * IMPLEMENTATION PRINCIPLE:
 * - Only types with concrete usage patterns
 * - No speculation about future needs
 * - Based on actual code analysis from Phase 2
 */

// 📍 SHIPPING ADDRESS - Based on Stripe shipping_details format
// Used in: app/api/webhooks/stripe/route.ts, dashboard order display
export interface ShippingAddress {
  name: string // Customer name
  line1: string // Address line 1
  line2?: string // Address line 2 (optional)
  city: string // City
  postal_code: string // Swiss postal codes (4 digits)
  country: string // Country code (typically "CH" for Switzerland)
}

// 💳 STRIPE PAYMENT METADATA - Only order_id field currently used
// Used in: app/api/webhooks/stripe/route.ts for payment intent handling
export interface StripePaymentMetadata {
  order_id: string // Order ID for payment-order linking
}

// 📝 FUTURE EXTENSION PLACEHOLDER (not currently implemented per YAGNI)
// export interface ProductMetadata { ... }   // No current usage found
// export interface OrderMetadata { ... }     // No current usage found
// export interface BillingAddress { ... }    // No current usage found

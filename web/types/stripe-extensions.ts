/**
 * 🎯 Stripe TypeScript Extensions
 * Addresses missing types in Stripe SDK v18.3.0
 *
 * IMPLEMENTATION PRINCIPLE:
 * - TypeScript Module Augmentation for vendor type extensions
 * - Aligns with existing ShippingAddress interface from domain.ts
 * - YAGNI-compliant: Only extends currently used fields
 */

// 📍 STRIPE SHIPPING DETAILS - Matches domain.ts ShippingAddress structure
// Used in: checkout.session.shipping_details (missing from Stripe SDK)
interface StripeShippingDetails {
  name: string // Customer name
  address: {
    line1: string // Address line 1
    city: string // City
    postal_code: string // Swiss postal codes (4 digits)
    country: string // Country code (typically "CH" for Switzerland)
  }
}

// 🔧 MODULE AUGMENTATION - Extends Stripe namespace
// Problem: Stripe.Checkout.Session missing shipping_details typing
// Solution: Add shipping_details field with proper type structure
declare module "stripe" {
  namespace Stripe {
    namespace Checkout {
      interface Session {
        shipping_details?: StripeShippingDetails | null
      }
    }
  }
}

// 📦 EXPORT for use in helper functions
export type { StripeShippingDetails }

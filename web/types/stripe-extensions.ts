/**
 * 🎯 Stripe TypeScript Extensions
 * Addresses missing types in Stripe SDK v18.5.0 (API 2025-08-27.basil)
 *
 * IMPLEMENTATION PRINCIPLE:
 * - TypeScript Module Augmentation for vendor type extensions
 * - Aligns with existing ShippingAddress interface from domain.ts
 * - YAGNI-compliant: Only extends currently used fields
 *
 * MIGRATION NOTE (2025-08-27.basil):
 * - API Version 2024-06-20: session.shipping_details (direct field)
 * - API Version 2025-08-27.basil: session.collected_information.shipping_details (nested)
 */

// 📍 STRIPE SHIPPING DETAILS - Matches domain.ts ShippingAddress structure
// Used in: checkout.session.collected_information.shipping_details
// Note: Stripe SDK v18.5.0 (2025-08-27.basil) includes native types for collected_information
// This interface is kept for backward compatibility and helper function typing
interface StripeShippingDetails {
  name: string | null // Customer name (nullable in Stripe API)
  address: {
    line1: string | null // Address line 1 (nullable in Stripe API)
    city: string | null // City (nullable in Stripe API)
    postal_code: string | null // Swiss postal codes (nullable in Stripe API)
    country: string | null // Country code (nullable in Stripe API)
  }
}

// 📦 EXPORT for use in helper functions
// Note: Stripe SDK v18.5.0 now includes native CollectedInformation type
// We use the SDK's type and only export StripeShippingDetails for helper functions
export type { StripeShippingDetails }

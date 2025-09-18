/**
 * 🟩 SHOP-ONLY: Product Types & Client-Safe Utilities
 * Clean separation for client-server architecture
 *
 * ✅ CLIENT-SAFE: No server-only imports
 * ✅ PURE FUNCTIONS: Utilities and type definitions only
 */

import type { Database } from "@/types/database"

// Database Product Type (source of truth)
export type DatabaseProduct = Database["public"]["Tables"]["products"]["Row"]

// Application Product Interface (enhanced with computed fields)
export interface Product
  extends Omit<DatabaseProduct, "description" | "currency" | "stripe_price_id"> {
  // Non-null application expectations
  description: string
  currency: "CHF"

  // Kinderbuch-specific fields (from database)
  isbn: string | null
  author: string | null
  age_group: string | null

  // E-commerce computed fields
  stripePriceId?: string // Derived from stripe_price_id (camelCase for application)
  originalPrice?: number // Optional: for sales/discounts (computed)
}

// Database to Application Type Conversion (PURE FUNCTION)
export function mapDatabaseProductToProduct(dbProduct: DatabaseProduct): Product {
  return {
    ...dbProduct,
    description: dbProduct.description || "", // Non-null for application
    currency: "CHF" as const, // Swiss-specific constraint
    stripePriceId: dbProduct.stripe_price_id || undefined, // camelCase conversion
    // originalPrice can be computed based on business logic
  }
}

// Helper: Format Swiss Price (PURE FUNCTION)
export function formatSwissPrice(priceInRappen: number): string {
  const priceInCHF = priceInRappen / 100

  return new Intl.NumberFormat("de-CH", {
    style: "currency",
    currency: "CHF",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(priceInCHF)
}

// 🎯 KISS HELPER: Check if any products need shipping (PURE FUNCTION)
export function needsShippingAddress(products: Product[]): boolean {
  return products.some((product) => !product.digital)
}

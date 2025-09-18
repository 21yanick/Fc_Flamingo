/**
 * 🗄️ DATABASE-FIRST: Product Service Layer
 * Clean separation: Database operations with type-safe Supabase integration
 *
 * ARCHITECTURE:
 * - Database as single source of truth
 * - Type-safe Supabase queries
 * - Clean error handling with fallbacks
 * - Swiss Kinderbuch optimization
 */

import { createClient } from "@/lib/supabase/server"
import type { Product } from "./product-types"
import { mapDatabaseProductToProduct } from "./product-types"

// Re-export conversion function for external use
export { mapDatabaseProductToProduct }

/**
 * Get all active products from database
 * @returns Promise<Product[]> - Active products with application types
 */
export async function getProducts(): Promise<Product[]> {
  try {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("active", true)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Database query error:", error)
      return []
    }

    if (!data || data.length === 0) {
      console.warn("No products found in database")
      return []
    }

    // Convert database types to application types
    return data.map(mapDatabaseProductToProduct)
  } catch (error) {
    console.error("Database connection error:", error)
    return []
  }
}

/**
 * Get featured products for homepage display
 * @returns Promise<Product[]> - Featured products only
 */
export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("active", true)
      .eq("featured", true)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Database query error:", error)
      return []
    }

    return data ? data.map(mapDatabaseProductToProduct) : []
  } catch (error) {
    console.error("Database connection error:", error)
    return []
  }
}

/**
 * Get products by category (Swiss Kinderbuch categories)
 * @param category - Product category (e.g., 'Abenteuer', 'Fantasy', 'Klassiker')
 * @returns Promise<Product[]> - Products in specified category
 */
export async function getProductsByCategory(category: string): Promise<Product[]> {
  try {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("active", true)
      .eq("category", category)
      .order("name", { ascending: true })

    if (error) {
      console.error("Database query error:", error)
      return []
    }

    return data ? data.map(mapDatabaseProductToProduct) : []
  } catch (error) {
    console.error("Database connection error:", error)
    return []
  }
}

/**
 * Get single product by ID
 * @param id - Product UUID
 * @returns Promise<Product | null> - Single product or null if not found
 */
export async function getProduct(id: string): Promise<Product | null> {
  try {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .eq("active", true)
      .single()

    if (error) {
      if (error.code === "PGRST116") {
        // Not found - normal case
        return null
      }
      console.error("Database query error:", error)
      return null
    }

    return data ? mapDatabaseProductToProduct(data) : null
  } catch (error) {
    console.error("Database connection error:", error)
    return null
  }
}

/**
 * Get products by age group (Kinderbuch-specific)
 * @param ageGroup - Age group (e.g., '4-8 Jahre', '6-12 Jahre')
 * @returns Promise<Product[]> - Products for specified age group
 */
export async function getProductsByAgeGroup(ageGroup: string): Promise<Product[]> {
  try {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("active", true)
      .eq("age_group", ageGroup)
      .order("name", { ascending: true })

    if (error) {
      console.error("Database query error:", error)
      return []
    }

    return data ? data.map(mapDatabaseProductToProduct) : []
  } catch (error) {
    console.error("Database connection error:", error)
    return []
  }
}

/**
 * Check if any products require shipping (physical books)
 * @param products - Array of products to check
 * @returns boolean - True if any product is physical (requires shipping)
 */
export function needsShippingAddress(products: Product[]): boolean {
  return products.some((product) => !product.digital)
}

/**
 * Get products with Stripe pricing (for checkout integration)
 * Filters products that have Stripe price IDs configured
 * @returns Promise<Product[]> - Products ready for Stripe checkout
 */
export async function getProductsWithPricing(): Promise<Product[]> {
  try {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("active", true)
      .not("stripe_price_id", "is", null)
      .order("featured", { ascending: false }) // Featured products first

    if (error) {
      console.error("Database query error:", error)
      return []
    }

    return data ? data.map(mapDatabaseProductToProduct) : []
  } catch (error) {
    console.error("Database connection error:", error)
    return []
  }
}

/**
 * Development helper: Get database connection status
 * @returns Promise<boolean> - True if database is accessible
 */
export async function isDatabaseConnected(): Promise<boolean> {
  try {
    const supabase = await createClient()
    const { error } = await supabase.from("products").select("count").limit(1)

    return !error
  } catch (_error) {
    return false
  }
}

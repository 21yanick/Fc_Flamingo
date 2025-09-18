/**
 * 🟩 SHOP-ONLY: Server-Side Product Functions
 * Database-first product loading with fallback mechanisms
 *
 * ⚠️ SERVER-ONLY: Uses Supabase server client
 * ✅ CLIENT-SAFE: Types and utilities moved to ./product-types.ts
 */

// Import client-safe types and utilities
import type { Product } from "./product-types"

// ⚠️ MINIMAL FALLBACK: Emergency products when database unavailable
const FALLBACK_PRODUCTS: Product[] = [
  {
    id: "fallback-1",
    name: "Database Unavailable",
    description: "Please check your database connection. This is a fallback product.",
    price: 1500,
    currency: "CHF",
    digital: false,
    image_url: null,
    category: "System",
    isbn: null,
    author: null,
    age_group: null,
    stock_quantity: 0,
    active: true,
    featured: false,
    metadata: {},
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    stripePriceId: "demo_fallback_price",
  },
]

// 🗄️ DATABASE-FIRST: Primary product functions with fallbacks
// Import database functions for actual product operations
import {
  getFeaturedProducts as getFeaturedFromDB,
  getProduct as getProductFromDB,
  getProductsByCategory as getProductsByCategoryFromDB,
  getProducts as getProductsFromDB,
} from "./products-db"

/**
 * Get all active products (Database-First with fallback)
 * @returns Promise<Product[]> - Products from database or fallback
 */
export async function getAllProducts(): Promise<Product[]> {
  try {
    const products = await getProductsFromDB()
    if (products.length > 0) {
      return products
    }

    console.warn("No products in database, using fallback")
    return FALLBACK_PRODUCTS
  } catch (error) {
    console.error("Database connection failed, using fallback:", error)
    return FALLBACK_PRODUCTS
  }
}

/**
 * Get featured products (Database-First with fallback)
 * @returns Promise<Product[]> - Featured products from database or fallback featured
 */
export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const products = await getFeaturedFromDB()
    if (products.length > 0) {
      return products
    }

    console.warn("No featured products in database, using fallback")
    return FALLBACK_PRODUCTS.filter((product) => product.featured)
  } catch (error) {
    console.error("Database connection failed, using fallback for featured:", error)
    return FALLBACK_PRODUCTS.filter((product) => product.featured)
  }
}

/**
 * Get product by ID (Database-First with fallback)
 * @param productId - Product UUID
 * @returns Promise<Product | null> - Product from database or fallback
 */
export async function getProductById(productId: string): Promise<Product | null> {
  try {
    const product = await getProductFromDB(productId)
    if (product) {
      return product
    }

    // Check fallback products
    return FALLBACK_PRODUCTS.find((product) => product.id === productId) || null
  } catch (error) {
    console.error("Database connection failed, checking fallback for ID:", error)
    return FALLBACK_PRODUCTS.find((product) => product.id === productId) || null
  }
}

/**
 * Get products by category (Database-First with fallback)
 * @param category - Product category
 * @returns Promise<Product[]> - Products in category from database or fallback
 */
export async function getProductsByCategory(category: string): Promise<Product[]> {
  try {
    const products = await getProductsByCategoryFromDB(category)
    if (products.length > 0) {
      return products
    }

    console.warn(`No products found for category '${category}', using fallback`)
    return FALLBACK_PRODUCTS.filter((product) => product.category === category && product.active)
  } catch (error) {
    console.error("Database connection failed, using fallback for category:", error)
    return FALLBACK_PRODUCTS.filter((product) => product.category === category && product.active)
  }
}

// Re-export client-safe utilities for backward compatibility
export { formatSwissPrice, needsShippingAddress } from "./product-types"

/**
 * 🎯 STARTER KIT DATABASE TYPES
 * Self-explanatory structure with SHARED vs BUSINESS-SPECIFIC separation
 *
 * CONVERSION GUIDE:
 * - SaaS only: Remove shop tables (products, orders, order_items)
 * - Shop only: ✅ DONE - SaaS tables (subscriptions) removed
 * - Keep SHARED: profiles (always needed for users)
 */

import type { ShippingAddress } from "./domain"

export type Database = {
  public: {
    Tables: {
      // ✅ SHARED: User profiles (core functionality)
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          stripe_customer_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          stripe_customer_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          stripe_customer_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }

      // 📋 SaaS subscription table removed - FCFlamingo is shop-only

      // 🟩 SHOP-ONLY: Product catalog
      products: {
        Row: {
          id: string
          name: string
          description: string | null
          price: number // Swiss CHF in Rappen (cents)
          currency: string
          digital: boolean // true = digital product (no shipping), false = physical product (shipping required)
          image_url: string | null
          category: string | null
          isbn: string | null
          author: string | null
          age_group: string | null
          stock_quantity: number
          active: boolean

          // E-commerce integration fields
          stripe_price_id: string | null
          featured: boolean

          metadata: Record<string, unknown>
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          price: number
          currency?: string
          digital?: boolean
          image_url?: string | null
          category?: string | null
          isbn?: string | null
          author?: string | null
          age_group?: string | null
          stock_quantity?: number
          active?: boolean

          // E-commerce integration fields
          stripe_price_id?: string | null
          featured?: boolean

          metadata?: Record<string, unknown>
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          price?: number
          currency?: string
          digital?: boolean
          image_url?: string | null
          category?: string | null
          isbn?: string | null
          author?: string | null
          age_group?: string | null
          stock_quantity?: number
          active?: boolean

          // E-commerce integration fields
          stripe_price_id?: string | null
          featured?: boolean

          metadata?: Record<string, unknown>
          created_at?: string
          updated_at?: string
        }
      }

      // 🟩 SHOP-ONLY: Customer orders (guest checkout supported)
      orders: {
        Row: {
          id: string
          user_id: string | null // null = guest checkout
          email: string
          status: string
          total_amount: number // Swiss CHF in Rappen (cents)
          currency: string
          stripe_payment_intent_id: string | null
          stripe_session_id: string | null
          shipping_address: ShippingAddress | null
          billing_address: ShippingAddress | null // Same type as shipping_address for consistency
          metadata: Record<string, unknown>
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          email: string
          status?: string
          total_amount: number
          currency?: string
          stripe_payment_intent_id?: string | null
          stripe_session_id?: string | null
          shipping_address?: ShippingAddress | null
          billing_address?: ShippingAddress | null // Same type as shipping_address for consistency
          metadata?: Record<string, unknown>
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          email?: string
          status?: string
          total_amount?: number
          currency?: string
          stripe_payment_intent_id?: string | null
          stripe_session_id?: string | null
          shipping_address?: ShippingAddress | null
          billing_address?: ShippingAddress | null // Same type as shipping_address for consistency
          metadata?: Record<string, unknown>
          created_at?: string
          updated_at?: string
        }
      }

      // 🟩 SHOP-ONLY: Order line items
      order_items: {
        Row: {
          id: string
          order_id: string
          product_id: string | null
          product_name: string
          quantity: number
          unit_price: number // Swiss CHF in Rappen (cents)
          total_price: number // Swiss CHF in Rappen (cents)
          created_at: string
        }
        Insert: {
          id?: string
          order_id: string
          product_id?: string | null
          product_name: string
          quantity?: number
          unit_price: number
          total_price: number
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string
          product_id?: string | null
          product_name?: string
          quantity?: number
          unit_price?: number
          total_price?: number
          created_at?: string
        }
      }
    }
  }
}

// 🎯 HELPER TYPES: Business model specific exports
export type Profile = Database["public"]["Tables"]["profiles"]["Row"]
// Subscription type removed - FCFlamingo is shop-only
export type Product = Database["public"]["Tables"]["products"]["Row"] // 🟩 SHOP-ONLY
export type Order = Database["public"]["Tables"]["orders"]["Row"] // 🟩 SHOP-ONLY
export type OrderItem = Database["public"]["Tables"]["order_items"]["Row"] // 🟩 SHOP-ONLY

// 🔗 EXTENDED TYPES: Supabase relational queries
export type OrderWithItems = Order & {
  order_items: OrderItem[]
}

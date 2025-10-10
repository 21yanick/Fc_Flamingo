#!/usr/bin/env tsx

/**
 * Check Orders in Remote Database
 * Quick script to query orders from the production Supabase instance
 */

import { resolve } from "node:path"
import { createClient } from "@supabase/supabase-js"
import { config } from "dotenv"

// Load .env.local from web directory
config({ path: resolve(__dirname, "../.env.local") })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("❌ Missing required environment variables")
  console.error("Please ensure .env.local contains:")
  console.error("  - NEXT_PUBLIC_SUPABASE_URL")
  console.error("  - SUPABASE_SERVICE_ROLE_KEY")
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function checkOrders() {
  console.log("🔍 Checking orders in Remote DB...")
  console.log(`📍 Supabase URL: ${supabaseUrl}`)
  console.log("")

  // Get all orders
  const { data: orders, error: ordersError } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false })

  if (ordersError) {
    console.error("❌ Error fetching orders:", ordersError)
    return
  }

  console.log(`📦 Total orders: ${orders?.length || 0}`)
  console.log("")

  if (orders && orders.length > 0) {
    orders.forEach((order, index) => {
      console.log(`Order #${index + 1}:`)
      console.log(`  ID: ${order.id}`)
      console.log(`  Email: ${order.email}`)
      console.log(`  Status: ${order.status}`)
      console.log(`  Payment Status: ${order.payment_status}`)
      console.log(`  Total: CHF ${(order.total_amount / 100).toFixed(2)}`)
      console.log(`  Stripe Session: ${order.stripe_session_id}`)
      console.log(`  Created: ${order.created_at}`)
      console.log("")
    })

    // Get order items for each order
    for (const order of orders) {
      const { data: items, error: itemsError } = await supabase
        .from("order_items")
        .select("*")
        .eq("order_id", order.id)

      if (itemsError) {
        console.error(`❌ Error fetching items for order ${order.id}:`, itemsError)
        continue
      }

      if (items && items.length > 0) {
        console.log(`  📚 Items for order ${order.id.slice(-8)}:`)
        items.forEach((item) => {
          console.log(
            `    - ${item.product_name} x${item.quantity} @ CHF ${(item.unit_price / 100).toFixed(2)}`
          )
        })
        console.log("")
      }
    }
  } else {
    console.log("⚠️  No orders found in database")
    console.log("")
    console.log("Possible issues:")
    console.log("1. Stripe CLI not forwarding webhooks to localhost:3000")
    console.log("2. Webhook endpoint not receiving events")
    console.log("3. Database connection issues")
    console.log("4. RLS policies blocking inserts")
  }
}

checkOrders().catch(console.error)

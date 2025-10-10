#!/usr/bin/env tsx

/**
 * Test DB Insert with Service Role
 * Tests if we can insert orders using the service role key
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

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

async function testInsert() {
  console.log("🧪 Testing DB Insert with Service Role...")
  console.log(`📍 Supabase URL: ${supabaseUrl}`)
  console.log(`🔑 Service Key: ${supabaseServiceKey.slice(0, 20)}...`)
  console.log("")

  // Test insert
  const testOrder = {
    customer_id: null,
    email: "test@stripe.com",
    total_amount: 3000,
    currency: "CHF",
    status: "pending",
    payment_status: "paid",
    payment_method: "card",
    stripe_session_id: "test_session_123",
    shipping_address: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }

  console.log("📝 Attempting to insert test order...")
  console.log(JSON.stringify(testOrder, null, 2))
  console.log("")

  const { data, error } = await supabase.from("orders").insert(testOrder).select("id").single()

  if (error) {
    console.error("❌ Insert failed:")
    console.error(JSON.stringify(error, null, 2))
    process.exit(1)
  }

  console.log("✅ Insert successful!")
  console.log(`📦 Order ID: ${data.id}`)
  console.log("")

  // Clean up
  console.log("🧹 Cleaning up test order...")
  const { error: deleteError } = await supabase.from("orders").delete().eq("id", data.id)

  if (deleteError) {
    console.error("⚠️  Failed to clean up:", deleteError)
  } else {
    console.log("✅ Test order deleted")
  }
}

testInsert().catch(console.error)

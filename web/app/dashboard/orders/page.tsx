/**
 * 🟩 SHOP-ONLY: Orders Management Page
 * Shop Owner Dashboard - View and manage all orders
 * KISS Implementation with Swiss formatting
 */

import { createServerClient } from "@supabase/ssr"
import { Package } from "lucide-react"
import type { Metadata } from "next"
import { cookies } from "next/headers"
import { OrderCard } from "@/components/dashboard"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { env } from "@/lib/env"
import type { OrderWithItems } from "@/types/database"

// Create Supabase client for authenticated admin user
async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          cookieStore.set(name, value, options)
        })
      },
    },
  })
}

// Fetch all orders with order items
async function getOrders(): Promise<OrderWithItems[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("orders")
    .select(`
      *,
      order_items (
        id,
        product_name,
        quantity,
        unit_price,
        total_price
      )
    `)
    .order("created_at", { ascending: false })
    .limit(100) // KISS: Simple pagination

  if (error) {
    console.error("Error fetching orders:", error)
    return []
  }

  return data || []
}

// Swiss date formatting
function formatSwissDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("de-CH", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date)
}

// Swiss CHF formatting
function formatCHF(amountInRappen: number): string {
  return new Intl.NumberFormat("de-CH", {
    style: "currency",
    currency: "CHF",
  }).format(amountInRappen / 100)
}

// Extract customer name from addresses
function getCustomerName(order: OrderWithItems): string {
  // Try shipping address first, then billing address
  const shippingName = order.shipping_address?.name
  const billingName = order.billing_address?.name
  return shippingName || billingName || "Kunde"
}

// Extract address from addresses for quick overview (street, city)
function getAddress(order: OrderWithItems): string | null {
  const address = order.shipping_address || order.billing_address

  if (!address) return null

  const parts = []

  if (address.line1) parts.push(address.line1)
  if (address.postal_code && address.city) {
    parts.push(`${address.postal_code} ${address.city}`)
  } else if (address.city) {
    parts.push(address.city)
  }

  return parts.length > 0 ? parts.join(", ") : null
}

// Count total books across all order items
function getTotalBooks(order: OrderWithItems): number {
  return order.order_items?.reduce((sum, item) => sum + (item.quantity || 0), 0) || 0
}

// Main page component
export default async function OrdersPage() {
  const orders = await getOrders()

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Bestellungen</h1>
          <p className="text-muted-foreground">
            Verwalten Sie alle Kundenbestellungen und Versände
          </p>
        </div>
        <Badge variant="outline" className="text-sm">
          {orders.length} Bestellungen
        </Badge>
      </div>

      {/* Orders List */}
      {orders.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Package className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Keine Bestellungen</h3>
            <p className="text-sm text-muted-foreground text-center">
              Es sind noch keine Bestellungen eingegangen.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-3">
          {orders.map((order: OrderWithItems) => (
            <OrderCard
              key={order.id}
              order={order}
              customerName={getCustomerName(order)}
              address={getAddress(order)}
              totalBooks={getTotalBooks(order)}
              formattedDate={formatSwissDate(order.created_at)}
              formattedAmount={formatCHF(order.total_amount)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export const metadata: Metadata = {
  title: "Bestellungen - Dashboard",
  description: "Verwalten Sie alle Kundenbestellungen und Versände",
}

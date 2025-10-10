/**
 * Dashboard Root - Redirect to Orders
 * KISS: Single-purpose admin dashboard → Direct access to orders management
 */

import { redirect } from "next/navigation"

export default function DashboardPage() {
  // Direct redirect to orders - no overview needed for single-admin shop
  redirect("/dashboard/orders")
}

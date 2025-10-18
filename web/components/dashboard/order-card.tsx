/**
 * 🟩 SHOP-ONLY: Order Card with inline status update
 * Client component for orders list with quick status changes
 */

"use client"

import { Calendar, Eye, Package, User } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { OrderWithItems } from "@/types/database"
import { StatusSelect } from "./status-select"

interface OrderCardProps {
  order: OrderWithItems
  customerName: string
  address: string | null
  totalBooks: number
  formattedDate: string
  formattedAmount: string
}

export function OrderCard({
  order,
  customerName,
  address,
  totalBooks,
  formattedDate,
  formattedAmount,
}: OrderCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="py-4">
        <div className="flex flex-col md:flex-row items-start md:justify-between gap-4">
          {/* Left: Customer Info */}
          <div className="flex-1 space-y-2">
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-mono text-muted-foreground">#{order.id.slice(-8)}</span>
              <span className="font-medium">{customerName}</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1 min-w-0">
                <User className="h-3 w-3 shrink-0" />
                <span className="truncate">{order.email}</span>
              </span>
              {address && (
                <>
                  <span className="shrink-0 hidden md:inline">•</span>
                  <span className="flex items-center gap-1 min-w-0">
                    <Package className="h-3 w-3 shrink-0" />
                    <span className="truncate">{address}</span>
                  </span>
                </>
              )}
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {formattedDate}
              </span>
              <span className="hidden md:inline">•</span>
              <span>
                {totalBooks} {totalBooks === 1 ? "Buch" : "Bücher"}
              </span>
            </div>
          </div>

          {/* Right: Status + Amount + Action */}
          <div className="flex flex-col items-start md:items-end gap-2 w-full md:w-auto md:min-w-[140px]">
            <StatusSelect orderId={order.id} currentStatus={order.status} />
            <span className="text-xl font-bold">{formattedAmount}</span>
            <Button variant="outline" size="sm" className="w-full md:w-auto" asChild>
              <Link href={`/dashboard/orders/${order.id}`}>
                <Eye className="h-3 w-3 mr-1" />
                Details
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

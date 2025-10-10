/**
 * 🟩 SHOP-ONLY: Order Status Select Component
 * KISS Implementation with optimistic UI and server actions
 */

"use client"

import { ChevronDown, Loader2 } from "lucide-react"
import { useState, useTransition } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { updateOrderStatus } from "@/lib/dashboard/actions"

interface StatusSelectProps {
  orderId: string
  currentStatus: string
  id?: string
}

// Status options with German labels (simplified for book shop)
const STATUS_OPTIONS = [
  { value: "pending", label: "Offen", color: "outline" as const },
  { value: "shipped", label: "Versendet", color: "default" as const },
]

export function StatusSelect({ orderId, currentStatus, id }: StatusSelectProps) {
  const [status, setStatus] = useState(currentStatus)
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)

  const handleStatusChange = (newStatus: string) => {
    // Optimistic UI update
    setStatus(newStatus)
    setError(null)

    startTransition(async () => {
      try {
        const result = await updateOrderStatus(orderId, newStatus)

        if (result.error) {
          // Rollback optimistic update
          setStatus(currentStatus)
          setError(result.error)
        }
      } catch (err) {
        // Rollback optimistic update
        setStatus(currentStatus)
        setError("Fehler beim Aktualisieren des Status")
        console.error("Status update error:", err)
      }
    })
  }

  const currentOption = STATUS_OPTIONS.find((option) => option.value === status)

  return (
    <div className="space-y-1">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            id={id}
            variant="outline"
            size="sm"
            className="justify-between gap-2"
            disabled={isPending}
          >
            {isPending ? (
              <Loader2 className="h-3 w-3 animate-spin" />
            ) : (
              currentOption && (
                <Badge variant={currentOption.color} className="text-xs">
                  {currentOption.label}
                </Badge>
              )
            )}
            <ChevronDown className="h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {STATUS_OPTIONS.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => handleStatusChange(option.value)}
              disabled={option.value === status}
            >
              <Badge variant={option.color} className="text-xs">
                {option.label}
              </Badge>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )
}

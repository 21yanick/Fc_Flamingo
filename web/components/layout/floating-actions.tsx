/**
 * FC Flamingo Floating Actions
 * Hand-drawn floating buttons für Cart + Theme Toggle
 * Position: top-right, nur im Marketing-Bereich (nicht Dashboard/Auth)
 */

"use client"

import { usePathname } from "next/navigation"
import { CartIcon } from "@/components/shop"
import { ThemeToggle } from "@/components/theme"

export function FloatingActions() {
  const pathname = usePathname()

  // Hide floating actions in Dashboard and Auth pages
  const shouldHide = pathname?.startsWith("/dashboard") || pathname?.startsWith("/auth")

  if (shouldHide) {
    return null
  }

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-3">
      {/* Cart Button - Hand-drawn Style */}
      <div className="fc-floating-action">
        <CartIcon />
      </div>

      {/* Theme Toggle - Direct button styling */}
      <ThemeToggle />
    </div>
  )
}

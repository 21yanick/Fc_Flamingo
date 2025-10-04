/**
 * FC Flamingo Floating Actions
 * Hand-drawn floating buttons für Cart + Theme Toggle
 * Position: top-right, immer sichtbar (fixed)
 */

"use client"

import { CartIcon } from "@/components/shop"
import { ThemeToggle } from "@/components/theme"

export function FloatingActions() {
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

/**
 * 🟩 SHOP-ONLY: Floating CTA for Mobile
 * Industry-standard mobile conversion optimization
 * Only visible on small screens when scrolled past shop section
 */

"use client"

import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FloatingCTAProps {
  /**
   * Click handler for the CTA button
   */
  onBuyNow: () => void
  /**
   * Price to display (in CHF)
   */
  price?: string
  /**
   * Optional: ID of section to track for visibility
   */
  sectionId?: string
}

/**
 * Floating CTA Button - Mobile Only
 *
 * Best Practices:
 * - Only visible on mobile (< 768px)
 * - Shows when user scrolls past shop section
 * - Sticky positioning with backdrop blur
 * - Safe area insets for iOS notch support
 *
 * @example
 * <FloatingCTA onBuyNow={handleBuyNow} price="CHF 22.00" sectionId="shop" />
 */
export function FloatingCTA({
  onBuyNow,
  price = "CHF 22.00",
  sectionId = "shop",
}: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA when user scrolls past the shop section
      const section = document.getElementById(sectionId)
      if (!section) {
        setIsVisible(true) // Fallback: always show if section not found
        return
      }

      const rect = section.getBoundingClientRect()
      const sectionBottom = rect.bottom
      const viewportHeight = window.innerHeight

      // Show when section is scrolled past viewport
      setIsVisible(sectionBottom < viewportHeight * 0.5)
    }

    // Check on mount and scroll
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sectionId])

  return (
    <div
      className={cn(
        // Mobile only (hidden on md and up)
        "md:hidden",
        // Fixed positioning
        "fixed bottom-0 left-0 right-0 z-50",
        // Styling
        "bg-background/95 backdrop-blur-md border-t shadow-2xl",
        // Padding (extra bottom padding for iOS safe area)
        "p-4 pb-6",
        // Transitions
        "transition-transform duration-300 ease-in-out",
        // Visibility control
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="flex items-center justify-between gap-4 mb-3">
        <div>
          <p className="text-2xl font-bold">{price}</p>
          <p className="text-xs text-muted-foreground">inkl. MwSt. + Versand</p>
        </div>
        <p className="text-xs text-muted-foreground text-right">
          ✓ Versandkostenfrei
          <br />✓ TWINT verfügbar
        </p>
      </div>

      <Button
        size="lg"
        onClick={onBuyNow}
        className="w-full h-12 font-bold
                   bg-gradient-to-r from-[var(--flamingo-orange)] to-[var(--stadium-gold)]
                   hover:from-[var(--flamingo-orange)]/90 hover:to-[var(--stadium-gold)]/90
                   shadow-lg active:scale-[0.98]
                   transition-all duration-200
                   rounded-[14px_11px_16px_13px]"
      >
        In den Warenkorb
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}

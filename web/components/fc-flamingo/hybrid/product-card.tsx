"use client"

import Image from "next/image"
import { TiltedCard } from "@/components/ui/tilted-card"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  /**
   * Size variant for responsive design
   * @default "default"
   */
  size?: "default" | "compact"
  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * ProductCard - FC Flamingo Hybrid Component
 *
 * Realistic Book Presentation:
 * - Modern: TiltedCard 3D mouse-tracking (stronger than Hero)
 * - Realistic: Page Stack Effect (zeigt 172 Seiten visuell)
 * - Quality: Professional Hardcover Shadow
 *
 * Design Philosophy:
 * Interaktiver als Hero (stärkerer Tilt + Scale)
 * Kein Floating (KISS - ein Effect reicht)
 * Page Stack = Qualitäts-Signal für Eltern
 *
 * @example Default
 * <ProductCard />
 *
 * @example Compact
 * <ProductCard size="compact" />
 */
export function ProductCard({ size = "default", className }: ProductCardProps) {
  const isCompact = size === "compact"

  // Responsive sizing (Cover aspect ratio: 674×947 = ~0.71:1)
  const imageWidth = isCompact ? 300 : 400
  const imageHeight = isCompact ? 422 : 563

  return (
    <TiltedCard
      rotateAmplitude={10} // Stärker als Hero (6) - interaktiver!
      scaleOnHover={1.05} // Deutlicher als Hero (1.02)
      className={cn("relative", className)}
    >
      {/* Cover Image with Ultra-Realistic Book Effect */}
      <Image
        src="/images/fc-flamingo-cover.png"
        alt="FC Flamingo - Mission Meistertitel"
        width={imageWidth}
        height={imageHeight}
        className="rounded-[2px]" // Ultra-subtle rounding wie echtes Hardcover
        style={{
          // Ultra-Realistic Page Stack - 7 Layers für 172 Seiten!
          boxShadow: `
            3px 0 0 0 #f8f5f0,
            6px 0 0 0 #f0ebe3,
            9px 0 0 0 #e8e0d5,
            12px 0 0 0 #ddd5c8,
            15px 0 0 0 #d2c9bb,
            18px 0 0 0 #c7bdae,
            21px 0 0 0 #bbb0a0,
            0 15px 50px rgba(0, 0, 0, 0.25),
            0 8px 25px rgba(0, 0, 0, 0.15),
            0 3px 10px rgba(0, 0, 0, 0.1)
          `,
        }}
        priority
        quality={95}
      />
    </TiltedCard>
  )
}

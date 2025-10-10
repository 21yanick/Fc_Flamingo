"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { TiltedCard } from "@/components/ui/tilted-card"
import { cn } from "@/lib/utils"

interface HeroLogoProps {
  /**
   * Size variant for responsive design
   * @default "desktop"
   */
  size?: "mobile" | "desktop"
  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * HeroLogo - FC Flamingo Hybrid Component
 *
 * Minimalistisch & Clean:
 * - Modern: TiltedCard 3D mouse-tracking (React Bits physics)
 * - Quality: Subtle drop-shadow
 * - Swiss Quality: Less is More
 *
 * Design Philosophy:
 * "Swiss Quality" = Minimalistisch, funktional, elegant
 * Ein Effect reicht - 3D Tilt ist genug Enhancement
 *
 * @example Desktop
 * <HeroLogo size="desktop" />
 *
 * @example Mobile
 * <HeroLogo size="mobile" />
 */
export function HeroLogo({ size = "desktop", className }: HeroLogoProps) {
  const isMobile = size === "mobile"

  // Responsive sizing
  const imageSize = isMobile ? 240 : 576
  const imageClasses = isMobile ? "w-60 h-auto" : "w-full max-w-[36rem] h-auto"

  return (
    <TiltedCard
      rotateAmplitude={isMobile ? 4 : 6} // Subtle! React Bits physics
      scaleOnHover={1.02} // Minimal scale on hover
      className={cn("relative", className)}
    >
      {/* Floating Animation - sanftes Auf-und-Ab */}
      <motion.div
        animate={{
          y: [0, -8, 0], // Ultra-subtiles Floating (Swiss Quality)
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/Logo_Fc_Flamingo.png"
          alt="FC Flamingo Logo"
          width={imageSize}
          height={imageSize}
          className={cn(
            imageClasses,
            "fc-hero-logo-glow" // Integrierter Glow = kein Blitzen!
          )}
          priority
          quality={95}
        />
      </motion.div>
    </TiltedCard>
  )
}

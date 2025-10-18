"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { PolaroidFrame } from "../decorative/polaroid-frame"

interface FlipPortraitCardProps {
  /**
   * Front image (Karikatur)
   */
  frontImage: string
  /**
   * Back image (Real photo)
   */
  backImage: string
  /**
   * Person name
   */
  name: string
  /**
   * Job title (e.g. "Autorin", "Illustratorin")
   */
  jobTitle: string
  /**
   * Bio text
   */
  bio: string
  /**
   * Website URL (optional)
   */
  website?: string
  /**
   * Additional className
   */
  className?: string
}

/**
 * FlipPortraitCard - Interactive Flip Card for Team Portraits
 *
 * Features:
 * - Desktop: Hover to preview real photo
 * - Mobile: Click to toggle between karikatur/real
 * - Keyboard: Tab + Enter to toggle
 * - Accessibility: Full ARIA support + reduced motion
 * - Theme-aware: Tape corners change color (yellow → gold)
 *
 * KISS Implementation:
 * - 1 State Variable (isFlipped)
 * - Simple event handlers (no complex lock logic)
 * - Browser handles touch vs mouse automatically
 *
 * @example
 * <FlipPortraitCard
 *   frontImage="/images/team/natalie_barros.png"
 *   backImage="/images/team/natalie_barros_real.png"
 *   name="Natalie Barros"
 *   jobTitle="Autorin"
 *   bio="TV-Moderatorin und leidenschaftliche Kinderbuchautorin..."
 *   website="www.nataliebarros.ch"
 * />
 */
export function FlipPortraitCard({
  frontImage,
  backImage,
  name,
  jobTitle,
  bio,
  website,
  className,
}: FlipPortraitCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className={cn("flex flex-col items-center", className)}>
      {/* Flip Card Container */}
      <button
        type="button"
        className={cn(
          "relative w-full max-w-sm cursor-pointer",
          // Reset button styles
          "appearance-none border-0 bg-transparent p-0 m-0",
          "text-left",
          // Focus styles
          "focus:outline-none focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
        )}
        style={{ perspective: "1000px" }}
        // Desktop: Hover to flip
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        // Mobile: Click to toggle
        onClick={() => setIsFlipped(!isFlipped)}
        // Accessibility
        aria-label={`${name} Portrait - ${isFlipped ? "Echtes Foto" : "Karikatur"}. Drücke Enter zum wechseln.`}
      >
        {/* Card with 3D Flip Animation */}
        <motion.div
          className="relative w-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{
            rotateY: isFlipped ? 180 : 0,
          }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.6,
            ease: "easeInOut",
          }}
        >
          {/* Front Side: Karikatur (no tape - already drawn in image) */}
          <div
            className="w-full"
            style={{
              backfaceVisibility: "hidden",
            }}
          >
            <PolaroidFrame showTape={false}>
              <Image
                src={frontImage}
                alt={`${name} - Karikatur`}
                width={400}
                height={545}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 400px"
                loading="lazy"
                quality={85}
              />
            </PolaroidFrame>
          </div>

          {/* Back Side: Real Photo (with tape corners) */}
          <div
            className="absolute inset-0 w-full"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <PolaroidFrame showTape={true}>
              <Image
                src={backImage}
                alt={`${name} - Echtes Foto`}
                width={400}
                height={545}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 400px"
                loading="lazy"
                quality={85}
              />
            </PolaroidFrame>
          </div>
        </motion.div>
      </button>

      {/* Text Content (Below Card) */}
      <div className="mt-6 text-center max-w-sm">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-lg text-primary mb-4">{jobTitle}</p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{bio}</p>
        {website && (
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline focus:underline focus:outline-none"
            onClick={(e) => e.stopPropagation()} // Prevent card flip on link click
          >
            {website}
          </a>
        )}
      </div>
    </div>
  )
}

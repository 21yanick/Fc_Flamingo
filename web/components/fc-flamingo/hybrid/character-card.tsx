"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface CharacterCardProps {
  name: string
  position: string
  bio?: string
  image: string
  size?: "main" | "support"
  role?: "captain" | "player" | "coach" | "staff" | "mystery" | "rival"
}

/**
 * CharacterCard Component
 *
 * Features:
 * - 3D Tilt on Hover (CSS-only)
 * - Flip on Click (shows Bio on back) - only for main characters
 * - Size variants: main (200px) vs support (140px)
 * - Theme-aware borders (orange/gold for main, green for support)
 * - Fully responsive
 *
 * KISS: Pure CSS animations, no external libraries
 */
export function CharacterCard({
  name,
  position,
  bio,
  image,
  size = "main",
  role = "player",
}: CharacterCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const canFlip = !!bio && size === "main"

  // Size configurations (KISS: simple object lookup)
  const sizeConfig = {
    main: {
      container: "w-[200px] h-[200px] md:w-[220px] md:h-[220px]",
      ring: "ring-4",
      shadow: "shadow-xl hover:shadow-2xl",
    },
    support: {
      container: "w-[120px] h-[120px] md:w-[140px] md:h-[140px]",
      ring: "ring-2",
      shadow: "shadow-lg hover:shadow-xl",
    },
  }

  // Border colors based on size and theme
  const borderColor =
    size === "main"
      ? "ring-flamingo-orange dark:ring-stadium-gold"
      : "ring-field-green dark:ring-field-green/80"

  // Special styling for Captain
  const captainGlow =
    role === "captain"
      ? "after:absolute after:inset-0 after:rounded-full after:ring-2 after:ring-flamingo-yellow/50 after:animate-pulse"
      : ""

  const config = sizeConfig[size]

  // Keyboard handler for accessibility (Enter + Space)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!canFlip) return

    // Enter or Space key triggers flip
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault() // Prevent page scroll on Space
      setIsFlipped(!isFlipped)
    }
  }

  // Click handler
  const handleClick = () => {
    if (canFlip) {
      setIsFlipped(!isFlipped)
    }
  }

  // Card wrapper element - button if interactive, div if not
  const CardWrapper = canFlip ? "button" : "div"

  return (
    <div className="flex flex-col items-center gap-3">
      {/* 3D Card Container - Native Button for Accessibility */}
      <CardWrapper
        type={canFlip ? "button" : undefined}
        aria-label={
          canFlip
            ? `${name} - ${position}. ${isFlipped ? "Zurück zur Vorderseite drehen" : "Karte umdrehen um Biografie zu sehen"}`
            : undefined
        }
        aria-pressed={canFlip ? isFlipped : undefined}
        className={cn(
          "relative",
          // Reset button defaults
          canFlip && [
            "appearance-none border-0 p-0 m-0 bg-transparent",
            "cursor-pointer",
            // Focus-visible styling für Keyboard Navigation
            "focus-visible:outline focus-visible:outline-2",
            "focus-visible:outline-flamingo-orange dark:focus-visible:outline-stadium-gold",
            "focus-visible:outline-offset-4",
            "rounded-full", // Damit outline dem runden Card folgt
          ]
        )}
        style={{ perspective: "1000px" }}
        onClick={canFlip ? handleClick : undefined}
        onKeyDown={canFlip ? handleKeyDown : undefined}
      >
        <div
          className={cn("relative transition-transform duration-500", config.container)}
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* FRONT SIDE - Portrait */}
          <div
            className={cn(
              "absolute inset-0 rounded-full overflow-hidden",
              config.ring,
              config.shadow,
              borderColor,
              "transition-all duration-300",
              // Field Integration: Character "steht auf Rasen"
              "drop-shadow-2xl",
              // 3D Tilt on Hover (nur wenn nicht geflippt)
              !isFlipped &&
                "hover:scale-105 hover:rotate-2 hover:drop-shadow-[0_25px_25px_rgba(0,0,0,0.4)]",
              captainGlow,
              // Hide when flipped
              isFlipped && "opacity-0"
            )}
            style={{
              backfaceVisibility: "hidden",
            }}
          >
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes={size === "main" ? "220px" : "140px"}
            />
          </div>

          {/* BACK SIDE - Bio (only for main characters with bio) */}
          {canFlip && (
            <div
              className={cn(
                "absolute inset-0 rounded-full",
                config.ring,
                config.shadow,
                borderColor,
                "bg-gradient-to-br from-training-bg to-flamingo-peach/20",
                "dark:from-matchday-bg dark:to-stadium-gold/20",
                "flex items-center justify-center p-4",
                "transition-all duration-300",
                // Hide when not flipped
                !isFlipped && "opacity-0"
              )}
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <p className="text-xs md:text-sm text-center font-medium leading-relaxed text-foreground">
                {bio}
              </p>
            </div>
          )}
        </div>
      </CardWrapper>

      {/* Character Info */}
      <div className="text-center space-y-1">
        <h3
          className={cn(
            "font-bold",
            size === "main" ? "text-lg md:text-xl" : "text-base md:text-lg"
          )}
        >
          {name}
          {role === "captain" && <span className="ml-1 text-flamingo-yellow">⭐</span>}
          {role === "mystery" && <span className="ml-1">🤫</span>}
          {role === "rival" && <span className="ml-1">🦒</span>}
        </h3>
        <p
          className={cn(
            "font-medium",
            size === "main"
              ? "text-sm md:text-base text-field-green dark:text-field-green"
              : "text-xs md:text-sm text-muted-foreground"
          )}
        >
          {position}
        </p>
        {canFlip && (
          <p className="text-xs text-muted-foreground italic">
            {isFlipped ? "← Klick oder Enter zum Umdrehen" : "Klick oder Enter für mehr →"}
          </p>
        )}
      </div>
    </div>
  )
}

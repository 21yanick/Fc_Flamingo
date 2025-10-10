"use client"

import type { SpringOptions } from "framer-motion"
import { motion, useSpring } from "framer-motion"
import { type ReactNode, useRef } from "react"
import { cn } from "@/lib/utils"

interface TiltedCardProps {
  children: ReactNode
  className?: string
  /**
   * Maximum rotation in degrees
   * @default 10
   */
  rotateAmplitude?: number
  /**
   * Scale on hover
   * @default 1
   */
  scaleOnHover?: number
  /**
   * Disable tilt effect
   * @default false
   */
  disabled?: boolean
}

/**
 * TiltedCard - React Bits Style 3D Tilt Effect
 *
 * Simplified from React Bits implementation
 * Uses proper spring physics for smooth, natural movement
 *
 * @example
 * <TiltedCard rotateAmplitude={8} scaleOnHover={1.05}>
 *   <Image src="/logo.png" width={500} height={500} />
 * </TiltedCard>
 */
export function TiltedCard({
  children,
  className,
  rotateAmplitude = 8,
  scaleOnHover = 1,
  disabled = false,
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  // React Bits spring config - smoother, more natural
  const springConfig: SpringOptions = {
    damping: 30,
    stiffness: 100,
    mass: 2,
  }

  // Separate springs for X and Y rotation (React Bits approach)
  const rotateX = useSpring(0, springConfig)
  const rotateY = useSpring(0, springConfig)
  const scale = useSpring(1, springConfig)

  /**
   * Handle mouse move - React Bits calculation
   */
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (disabled || !ref.current) return

    const rect = ref.current.getBoundingClientRect()

    // Calculate offset from center
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2

    // Calculate rotation based on position (React Bits formula)
    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude

    rotateX.set(rotationX)
    rotateY.set(rotationY)
  }

  /**
   * Mouse enter - scale up
   */
  function handleMouseEnter() {
    if (disabled) return
    scale.set(scaleOnHover)
  }

  /**
   * Mouse leave - reset all
   */
  function handleMouseLeave() {
    if (disabled) return
    scale.set(1)
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: Visual 3D tilt effect container - mouse events are for visual feedback only, not user interaction
    <div
      ref={ref}
      className={cn("tilted-card-container", className)}
      style={{
        perspective: "800px", // React Bits perspective value
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX: disabled ? 0 : rotateX,
          rotateY: disabled ? 0 : rotateY,
          scale: disabled ? 1 : scale,
          transformStyle: "preserve-3d",
        }}
        className="tilted-card-inner relative will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  )
}

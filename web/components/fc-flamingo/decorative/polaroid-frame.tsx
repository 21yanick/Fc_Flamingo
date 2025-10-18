import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface PolaroidFrameProps {
  children: ReactNode
  className?: string
  /**
   * Show tape corners
   * @default true
   */
  showTape?: boolean
}

/**
 * PolaroidFrame - Image wrapper with optional tape corners
 *
 * Features:
 * - Optional tape corners (yellow/orange in training, gold in matchday)
 * - Theme-aware styling
 * - Minimal wrapper (no background, no padding)
 *
 * @example
 * <PolaroidFrame showTape={true}>
 *   <Image src="/portrait.png" width={400} height={500} />
 * </PolaroidFrame>
 */
export function PolaroidFrame({ children, className, showTape = true }: PolaroidFrameProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Image Content */}
      <div className="relative overflow-hidden rounded-lg">{children}</div>

      {/* Tape Corners */}
      {showTape && (
        <>
          {/* Top-Left Tape */}
          <div
            className={cn(
              "fc-tape", // Theme-aware tape color
              "absolute -top-2 -left-2",
              "w-12 h-6",
              "opacity-80",
              "rotate-[-45deg]",
              "shadow-sm shadow-black/20"
            )}
            aria-hidden="true"
          />

          {/* Top-Right Tape */}
          <div
            className={cn(
              "fc-tape", // Theme-aware tape color
              "absolute -top-2 -right-2",
              "w-12 h-6",
              "opacity-80",
              "rotate-[45deg]",
              "shadow-sm shadow-black/20"
            )}
            aria-hidden="true"
          />
        </>
      )}
    </div>
  )
}

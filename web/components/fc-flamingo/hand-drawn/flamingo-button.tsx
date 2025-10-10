"use client"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface FlamingoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "training" | "matchday" | "outline-hero"
  size?: "sm" | "md" | "lg" | "hero"
  children: React.ReactNode
}

const FlamingoButton = forwardRef<HTMLButtonElement, FlamingoButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => {
    const sizeClasses = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
      hero: "px-8 py-4 text-lg", // Hero-specific size
    }

    const variantClasses = {
      primary: "fc-button-primary",
      secondary: "fc-button-secondary",
      training: "fc-button-training",
      matchday: "fc-button-matchday",
      "outline-hero": "fc-button-outline-hero",
    }

    return (
      <button
        ref={ref}
        className={cn(
          // Base hand-drawn button styles
          "fc-flamingo-button",
          // Variant-specific colors
          variantClasses[variant],
          // Size classes
          sizeClasses[size],
          // Interactions and animations
          "font-medium transition-all duration-200",
          "hover:scale-105 active:scale-95",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          // User className override
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

FlamingoButton.displayName = "FlamingoButton"

export { FlamingoButton }

"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InstagramSection,
  MissionSection,
  MysterySection,
  ProblemSection,
  ShopSection,
  TeamSection,
  TriumphSection,
} from "./_sections"

/**
 * FC Flamingo Landing Page
 * One-Pager Storytelling Flow (10 Sections)
 *
 * Emotional Curve:
 * Hook → Mission → Problem → Team → Mystery → Triumph → Shop → Community → Trust → Contact
 */
export default function LandingPage() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Fix hydration issue with theme
  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <div className="flex flex-col">
      {/* 1. Hook + Promise */}
      <HeroSection isDark={isDark} />

      {/* 2. Kontext + Ziel */}
      <MissionSection />

      {/* 3. Humor + Challenge */}
      <ProblemSection />

      {/* 4. Character Connection */}
      <TeamSection />

      {/* 5. Mystery + Interaktivität */}
      <MysterySection />

      {/* 6. Emotional Peak */}
      <TriumphSection />

      {/* 7. Conversion (Shop) */}
      <ShopSection />

      {/* 8. Community Building */}
      <InstagramSection />

      {/* 9. Trust Building */}
      <AboutSection />

      {/* 10. Connection + Newsletter */}
      <ContactSection />
    </div>
  )
}

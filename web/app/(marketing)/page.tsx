"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InstagramSection,
  MissionChallengeSection,
  MysterySection,
  ShopSection,
  TeamSection,
  TriumphSection,
} from "./_sections"

/**
 * FC Flamingo Landing Page
 * One-Pager Storytelling Flow (9 Sections)
 *
 * Emotional Curve:
 * Hook → Mission+Challenge → Team → Mystery → Triumph → Shop → Community → Trust → Contact
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

      {/* 2. Mission + Challenge (Combined) */}
      <MissionChallengeSection />

      {/* 3. Character Connection */}
      <TeamSection isDark={isDark} />

      {/* 4. Mystery + Interaktivität (Dual-Image) */}
      <MysterySection isDark={isDark} />

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

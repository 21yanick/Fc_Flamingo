"use client"

import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

/**
 * Mission & Challenge Section - Combined Story Intro
 * Funktion: Kontext + Ziel + Challenge etablieren (in EINER Section)
 * Beat: "Das ist deine Aufgabe... und hier ist die Herausforderung!"
 *
 * Layout: Side-by-side (Desktop) | Stack (Mobile)
 * - Links: K1-2 transparent (Mister King + Team)
 * - Rechts: Mission + Problem Text + CTA
 *
 * Dual-Theme:
 * - Training: Warmer BG, original Bild
 * - Matchday: Dunkler BG, gedimmtes Bild
 */

export function MissionChallengeSection() {
  const scrollToTeam = () => {
    document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="mission-challenge"
      className="py-20 lg:py-32 bg-training-bg dark:bg-matchday-bg transition-colors"
    >
      <div className="container mx-auto px-4">
        {/* Desktop: Grid 2 Spalten (45/55) | Mobile: Stack */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Mannschaftsfoto */}
          <div className="relative order-2 lg:order-1">
            <Image
              src="/images/mannschaftsfoto.png"
              alt="FC Flamingo Mannschaftsfoto - Das komplette Team vor dem Stadion"
              width={700}
              height={600}
              className="w-full h-auto
                       transition-all duration-500
                       hover:scale-105
                       dark:brightness-90 dark:saturate-120"
              priority
            />
          </div>

          {/* Right: Text + CTA */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Headline */}
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
              Deine Mission & Herausforderung
            </h2>

            {/* Mission Statement */}
            <div className="space-y-6">
              <p className="text-2xl lg:text-3xl font-semibold text-primary leading-snug">
                Führe den FC Flamingo zum Schweizer Meistertitel!
              </p>

              {/* Challenge */}
              <p className="text-xl lg:text-2xl text-foreground/90 leading-relaxed">
                Aber da ist ein Problem: Die Flamingos stehen lieber auf einem Bein anstatt
                zweibeinig Tore zu erzielen! 🦩
              </p>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Mister King verzweifelt fast an dieser seltsamen Angewohnheit.
                <br />
                Kannst du das Team zum Meistertitel führen?
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                onClick={scrollToTeam}
                size="lg"
                className="group text-lg px-8 py-6 shadow-lg
                         hover:shadow-xl transition-all duration-300
                         hover:scale-105"
              >
                Lerne dein Team kennen
                <ChevronDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

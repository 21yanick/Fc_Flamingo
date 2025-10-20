"use client"

import { Mail, Sparkles, Zap } from "lucide-react"
import Image from "next/image"

/**
 * Mystery Section - "Das Geheimnis"
 * Funktion: Mystery + Spannung + Interaktivität betonen
 * Beat: "Aber dann passiert etwas Unerwartetes..."
 *
 * Dual-Theme Image-Swap:
 * - Training: K2-1 (Brief wird gelesen in Kabine)
 * - Matchday: K7-1 (Pokalregal im Flutlicht)
 *
 * Layout: Grid mit Bild links (volle Grösse), Text rechts
 */

interface MysterySectionProps {
  isDark: boolean
}

export function MysterySection({ isDark }: MysterySectionProps) {
  return (
    <section
      id="mystery"
      className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden bg-training-bg dark:bg-matchday-bg"
    >
      {/* Background Image Layer - Stark reduziert auf Mobile für Lesbarkeit */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src={isDark ? "/images/mystery-matchday.jpg" : "/images/mystery-training.jpg"}
            alt={
              isDark
                ? "Pokalregal - Das Ziel vor Augen im Flutlicht"
                : "Team liest den geheimnisvollen Brief"
            }
            width={1200}
            height={900}
            className="absolute top-0 left-0 h-full w-auto max-w-none
                     transition-all duration-500
                     opacity-25 md:opacity-100
                     dark:brightness-95 dark:saturate-110"
            priority
          />
        </div>

        {/* Gradient Overlay - Verstärkt auf Mobile für Text-Lesbarkeit */}
        <div
          className="absolute inset-0
                     bg-gradient-to-b from-training-bg/60 via-training-bg/85 via-50% to-training-bg
                     md:bg-gradient-to-r md:from-transparent md:from-30% md:via-training-bg/60 md:via-50% md:to-training-bg md:to-70%
                     dark:bg-gradient-to-b dark:from-matchday-bg/60 dark:via-matchday-bg/90 dark:via-50% dark:to-matchday-bg
                     dark:md:bg-gradient-to-r dark:md:from-transparent dark:md:from-30% dark:md:via-matchday-bg/70 dark:md:via-50% dark:md:to-matchday-bg dark:md:to-70%"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Layout: Zentriert auf Mobile, rechts auf Desktop */}
        <div className="max-w-7xl mx-auto flex justify-center md:justify-end">
          {/* Text Content - Full width auf Mobile, 50% auf Desktop */}
          <div className="w-full md:w-11/12 lg:w-1/2 space-y-6 sm:space-y-8">
            {/* Headline - Jetzt aligned mit Text-Content */}
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center mb-6 sm:mb-8">
              Dann ändert sich alles...
            </h2>
            {/* Mystery Elements */}
            <div className="space-y-4 sm:space-y-6">
              {/* Brief */}
              <div className="flex gap-3 sm:gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 dark:bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2">
                    Ein geheimnisvoller Brief
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    Plötzlich taucht ein mysteriöser Brief auf und sorgt für Aufsehen im Team
                  </p>
                </div>
              </div>

              {/* Neuzugänge */}
              <div className="flex gap-3 sm:gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 dark:bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2">
                    Spektakuläre Neuzugänge
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    Zwei neue Spieler wirbeln alles durcheinander – wer steckt dahinter?
                  </p>
                </div>
              </div>
            </div>

            {/* Interaktivitäts-Highlight */}
            <div className="bg-white/90 dark:bg-black/60 backdrop-blur-md rounded-xl p-4 sm:p-6 border-l-4 border-primary dark:border-[var(--stadium-gold)] shadow-xl">
              <div className="flex gap-2 sm:gap-3 items-start">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary dark:text-[var(--stadium-gold)] flex-shrink-0 mt-0.5 sm:mt-1" />
                <div>
                  <p className="text-base sm:text-lg lg:text-xl font-bold text-primary dark:text-[var(--stadium-gold)] mb-1 sm:mb-2">
                    In diesem interaktiven Buch entscheidest du!
                  </p>
                  <p className="text-sm sm:text-base text-foreground/90 dark:text-white/90">
                    Welche Taktik wählt das Team? Wie reagieren sie auf Rückschläge? Deine
                    Entscheidungen bestimmen die Geschichte!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

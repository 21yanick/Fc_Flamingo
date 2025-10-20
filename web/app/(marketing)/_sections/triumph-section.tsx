/**
 * Triumph Section - "Der Triumph"
 * Funktion: Emotional Peak + Motivation + Partner Logos
 * Beat: "DAS könnte dein Triumph sein!"
 */

import Image from "next/image"

export function TriumphSection() {
  return (
    <section id="triumph" className="py-20 bg-training-bg dark:bg-matchday-bg">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">Führe sie zum Triumph!</h2>

        {/* Partner Logos - Professional Logo Wall */}
        <div className="max-w-6xl mx-auto mb-12">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Unterstützt von unseren Partnern
          </p>

          {/* Reihe 1: Hauptsponsoren (GROSS) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Etavis - Hauptsponsor */}
            <div
              className="group relative flex items-center justify-center p-6 bg-background/5 dark:bg-white rounded-lg transition-all duration-300 hover:shadow-lg"
              style={{ transform: "rotate(-0.5deg)" }}
            >
              <Image
                src="/images/partners/etavis.png"
                alt="ETAVIS - Partner von FC Flamingo"
                width={480}
                height={133}
                className="w-full max-w-[480px] h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                quality={90}
              />
            </div>

            {/* Alluvia - Hauptsponsor */}
            <div
              className="group relative flex items-center justify-center p-6 bg-background/5 dark:bg-white rounded-lg transition-all duration-300 hover:shadow-lg"
              style={{ transform: "rotate(0.8deg)" }}
            >
              <Image
                src="/images/partners/alluvia.png"
                alt="alluvia - Partner von FC Flamingo"
                width={480}
                height={148}
                className="w-full max-w-[480px] h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                quality={90}
              />
            </div>
          </div>

          {/* Reihe 2: Co-Sponsoren (Kleiner) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Syntax */}
            <div
              className="group relative flex items-center justify-center p-4 bg-background/5 dark:bg-white rounded-lg transition-all duration-300 hover:shadow-lg"
              style={{ transform: "rotate(0.3deg)" }}
            >
              <Image
                src="/images/partners/syntax.png"
                alt="syntax - Partner von FC Flamingo"
                width={260}
                height={65}
                className="w-full max-w-[260px] h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                quality={90}
              />
            </div>

            {/* Emmental Versicherung */}
            <div
              className="group relative flex items-center justify-center p-4 bg-background/5 dark:bg-white rounded-lg transition-all duration-300 hover:shadow-lg"
              style={{ transform: "rotate(-0.6deg)" }}
            >
              <Image
                src="/images/partners/emmental.png"
                alt="Emmental Versicherung - Partner von FC Flamingo"
                width={260}
                height={120}
                className="w-full max-w-[260px] h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                quality={90}
              />
            </div>

            {/* Gemeinde Ittigen */}
            <div
              className="group relative flex items-center justify-center p-4 bg-background/5 dark:bg-white rounded-lg transition-all duration-300 hover:shadow-lg"
              style={{ transform: "rotate(0.4deg)" }}
            >
              <Image
                src="/images/partners/Ittigen.png"
                alt="Gemeinde Ittigen - Partner von FC Flamingo"
                width={260}
                height={144}
                className="w-full max-w-[260px] h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

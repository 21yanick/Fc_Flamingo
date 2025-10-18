import { FlipPortraitCard } from "@/components/fc-flamingo/portraits/flip-portrait-card"

/**
 * About Section - "Über uns"
 * Funktion: Trust Building + Persönliches
 * Beat: "Wer steckt dahinter?"
 *
 * Features:
 * - Interactive flip cards (hover/click to reveal real photos)
 * - Polaroid-style with tape corners
 * - Theme-aware styling
 * - Full accessibility support
 */
export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Das Team hinter FC Flamingo</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mit Herz und Leidenschaft geschaffen
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Autorin: Natalie Barros */}
          <FlipPortraitCard
            frontImage="/images/team/natalie_barros.png"
            backImage="/images/team/natalie_barros_real.png"
            name="Natalie Barros"
            jobTitle="Autorin"
            bio="TV-Moderatorin und leidenschaftliche Kinderbuchautorin aus der Region Bern. «FC Flamingo – Mission Meistertitel» ist ihr zweites Kinderbuch, in dem sie ihre beiden Leidenschaften – Fussball und Kinderbücher – auf einzigartige Weise vereint."
            website="www.nataliebarros.ch"
          />

          {/* Illustratorin: Sybille Eyer */}
          <FlipPortraitCard
            frontImage="/images/team/sybille_eyer.png"
            backImage="/images/team/sybille_eyer_real.png"
            name="Sybille Eyer"
            jobTitle="Illustratorin"
            bio="Freischaffende Illustratorin für Kindermedien mit Atelier im Wallis. Mit ihren lebendigen Aquarell-Illustrationen möchte sie Kinder fürs Lesen begeistern und Bücher zu einem festen Teil ihrer Welt machen."
            website="www.sybille-eyer.ch"
          />
        </div>
      </div>
    </section>
  )
}

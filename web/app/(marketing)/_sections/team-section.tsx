/**
 * Team Section - "Das FC Flamingo Universum"
 * Funktion: Complete Character Universe Showcase
 * Beat: "Alle Charaktere aus dem Abenteuer!"
 *
 * Features:
 * - Dual-Theme Backgrounds:
 *   • Training Mode: vorsatz.jpg (Tag, Trainingsplatz)
 *   • Matchday Mode: vorsatz-night.png (Flutlicht-Stadion)
 * - Enhanced visibility: 50-60% opacity, reduced gradient
 * - 11 Charaktere in 3 Kategorien:
 *   1. Hauptteam (4) - gross, mit Bio-Flip
 *   2. Staff & Team (3) - mittel, nur Portrait
 *   3. Freunde & Partner (4) - mittel, nur Portrait
 * - Field-integrated Character Cards (shadows, depth)
 * - Responsive Grid-Layout
 * - KISS: Static data, no external API
 */

"use client"

import Image from "next/image"
import { CharacterCard } from "@/components/fc-flamingo/hybrid"

interface TeamSectionProps {
  isDark: boolean
}

export function TeamSection({ isDark }: TeamSectionProps) {
  // Character Data (KISS: Inline definition)
  const mainCharacters = [
    {
      name: "Fizzi",
      position: "Captain, Mittelfeld",
      bio: "Führungsstark, aber steht gern auf einem Bein...",
      image: "/images/team/fizzi.png",
      role: "captain" as const,
    },
    {
      name: "Zis",
      position: "Stürmer",
      bio: "Der durchgeknallte Papagei aus Frankreich. Genie oder Wahnsinn?",
      image: "/images/team/zis.png",
      role: "player" as const,
    },
    {
      name: "Lilly",
      position: "Abwehr",
      bio: "Die schüchterne, naive, liebe Pinguin-Abwehrspielerin",
      image: "/images/team/lilly.png",
      role: "player" as const,
    },
    {
      name: "Mister King",
      position: "Trainer",
      bio: "Der verzweifelte Trainer des FC Flamingo. Er braucht deine Hilfe!",
      image: "/images/team/mister-king.png",
      role: "coach" as const,
    },
  ]

  const staffCharacters = [
    {
      name: "Jerry",
      position: "Materialwart",
      image: "/images/team/jerry.png",
      role: "staff" as const,
    },
    {
      name: "Salvador",
      position: "Konditionstrainer",
      image: "/images/team/salvador.png",
      role: "staff" as const,
    },
    {
      name: "Waldemar",
      position: "Geheim 🤫",
      image: "/images/team/waldemar.png",
      role: "mystery" as const,
    },
  ]

  const universeCharacters = [
    {
      name: "Henrik",
      position: "Captain FC Giraffe",
      image: "/images/team/henrik.png",
      role: "rival" as const,
    },
    {
      name: "Caty Cuuli",
      position: "TV-Moderatorin",
      image: "/images/team/caty-cuuli.png",
      role: "staff" as const,
    },
    {
      name: "Hasenzahn",
      position: "Schiedsrichter",
      image: "/images/team/hasenzahn.png",
      role: "staff" as const,
    },
    {
      name: "Herr Bernasconi",
      position: "Hoteldirektor",
      image: "/images/team/herr-bernasconi.png",
      role: "staff" as const,
    },
  ]

  return (
    <section id="team" className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Fussballfeld Background Layer - Dual-Theme */}
      <div className="absolute inset-0 z-0">
        {/* Field Image - Authentic Watercolor from Book */}
        <Image
          src={isDark ? "/images/vorsatz-night.png" : "/images/vorsatz.jpg"}
          alt={isDark ? "FC Flamingo Stadion - Flutlicht" : "FC Flamingo Trainingsplatz"}
          fill
          className="object-contain opacity-40 sm:opacity-50 dark:opacity-50 dark:sm:opacity-60"
          sizes="100vw"
          quality={90}
          priority
        />

        {/* Gradient Overlay - Stärker auf Mobile für bessere Lesbarkeit */}
        <div className="absolute inset-0 bg-gradient-to-b from-training-bg/70 via-transparent to-training-bg/70 sm:from-training-bg/60 sm:via-transparent sm:to-training-bg/60 dark:from-matchday-bg/70 dark:via-transparent dark:to-matchday-bg/70 dark:sm:from-matchday-bg/60 dark:sm:via-transparent dark:sm:to-matchday-bg/60" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header - Card nur im Light Mode */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <div
            className="bg-white/90 dark:bg-transparent
                     backdrop-blur-sm dark:backdrop-blur-none
                     rounded-2xl
                     px-4 py-4 sm:px-8 sm:py-6 lg:px-12 lg:py-8
                     shadow-2xl dark:shadow-none
                     border border-field-green/20 dark:border-transparent"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
              Das FC Flamingo Universum
            </h2>
          </div>
        </div>

        {/* Main Team Section */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Das Hauptteam</h3>
            <p className="text-base sm:text-lg text-muted-foreground">
              Die vier Stars, die vom Meistertitel träumen
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
            {mainCharacters.map((character) => (
              <CharacterCard
                key={character.name}
                name={character.name}
                position={character.position}
                bio={character.bio}
                image={character.image}
                role={character.role}
                size="main"
              />
            ))}
          </div>
        </div>

        {/* Staff Section */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Staff & Team</h3>
            <p className="text-base sm:text-lg text-muted-foreground">
              Die wichtigen Helfer im Hintergrund
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto">
            {staffCharacters.map((character) => (
              <CharacterCard
                key={character.name}
                name={character.name}
                position={character.position}
                image={character.image}
                role={character.role}
                size="support"
              />
            ))}
          </div>
        </div>

        {/* Extended Universe Section */}
        <div className="mb-8 md:mb-12">
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Freunde & Partner</h3>
            <p className="text-base sm:text-lg text-muted-foreground">
              Die bunte Welt rund um den FC Flamingo
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 max-w-5xl mx-auto">
            {universeCharacters.map((character) => (
              <CharacterCard
                key={character.name}
                name={character.name}
                position={character.position}
                image={character.image}
                role={character.role}
                size="support"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Triumph Section - "Der Triumph"
 * Funktion: Emotional Peak + Motivation
 * Beat: "DAS könnte dein Triumph sein!"
 */

export function TriumphSection() {
  return (
    <section id="triumph" className="py-20 bg-training-bg dark:bg-matchday-bg">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">Führe sie zum Triumph!</h2>

        <div className="max-w-3xl mx-auto space-y-6 mb-12">
          <div className="flex items-center justify-center gap-4 text-2xl">
            <span>🏆</span>
            <p className="text-xl font-semibold">Der goldene Pokal</p>
          </div>
          <div className="flex items-center justify-center gap-4 text-2xl">
            <span>🎊</span>
            <p className="text-xl font-semibold">Konfetti-Regen</p>
          </div>
          <div className="flex items-center justify-center gap-4 text-2xl">
            <span>⚽</span>
            <p className="text-xl font-semibold">Der Meistertitel</p>
          </div>
        </div>

        <p className="text-2xl font-bold mb-8">Wird das deine Geschichte?<br></br>
                    "Glaub an dich, so kannst du im Leben alles erreichen!"
        </p>

        {/* TODO: K13-1.jpg (Konfetti, Pokal, Jubel - Full-width, Hero-size) */}
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center">
          </div>
        </div>
      </div>
    </section>
  )
}

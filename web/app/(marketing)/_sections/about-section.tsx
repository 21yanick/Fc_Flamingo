/**
 * About Section - "Über uns"
 * Funktion: Trust Building + Persönliches
 * Beat: "Wer steckt dahinter?"
 */

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Das Team hinter FC Flamingo</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mit Herz und Leidenschaft geschaffen
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Autorin */}
          <div className="text-center">
            <div className="aspect-square bg-muted/30 rounded-lg mb-6 flex items-center justify-center">
              <p className="text-sm text-muted-foreground">
              </p>
            </div>
            <h3 className="text-2xl font-bold mb-2">Natalie Barros</h3>
            <p className="text-lg text-primary mb-4">Autorin</p>
            <p className="text-muted-foreground">
              [2-3 Sätze]
            </p>
          </div>

          {/* Illustratorin */}
          <div className="text-center">
            <div className="aspect-square bg-muted/30 rounded-lg mb-6 flex items-center justify-center">
              <p className="text-sm text-muted-foreground">
              </p>
            </div>
            <h3 className="text-2xl font-bold mb-2">[Name]</h3>
            <p className="text-lg text-primary mb-4">Illustratorin</p>
            <p className="text-muted-foreground">
              [2-3 Sätze]
            </p>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          </p>
      </div>
    </section>
  )
}

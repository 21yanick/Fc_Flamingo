/**
 * Mission Section - "Deine Mission"
 * Funktion: Kontext + Ziel etablieren
 * Beat: "Das ist deine Aufgabe..."
 */

export function MissionSection() {
  return (
    <section id="mission" className="py-20 bg-training-bg dark:bg-matchday-bg">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">Deine Mission</h2>

        <div className="max-w-3xl mx-auto space-y-6 mb-12">
          <p className="text-xl text-muted-foreground">
            Führe den FC Flamingo erstmals zum Schweizer Meistertitel!
          </p>
          <p className="text-lg text-muted-foreground">
            Der neue Trainer Mister King braucht deine Hilfe.
            <br />
            Die Flamingos haben Potenzial – aber auch eine seltsame Angewohnheit...
          </p>
        </div>

        {/* TODO: Cover.png (zentral, groß, subtle rotation) */}
        <div className="max-w-md mx-auto">
          <div className="aspect-square bg-muted/30 rounded-lg flex items-center justify-center">
            <p className="text-sm text-muted-foreground">
              TODO: Cover.png zentral präsentiert
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Team Section - "Dein Team"
 * Funktion: Character Connection + Identifikation
 * Beat: "Das sind deine Spieler..."
 */

export function TeamSection() {
  return (
    <section id="team" className="py-20 bg-training-bg dark:bg-matchday-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Dein Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Lerne die einzigartigen Charaktere kennen, die vom Meistertitel träumen
          </p>
        </div>

        {/* TODO: Character Grid mit Vorsatz.jpg als Background */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* Character 1: Fizzi */}
          <div className="text-center">
            <div className="aspect-square bg-muted/30 rounded-full mb-4 flex items-center justify-center">
              <p className="text-sm text-muted-foreground">Fizzi</p>
            </div>
            <h3 className="font-bold mb-2">Fizzi - Der Captain</h3>
            <p className="text-sm text-muted-foreground">
              Führungsstark, aber steht gern auf einem Bein...
            </p>
          </div>

          {/* Character 2: Zis */}
          <div className="text-center">
            <div className="aspect-square bg-muted/30 rounded-full mb-4 flex items-center justify-center">
              <p className="text-sm text-muted-foreground">Zis</p>
            </div>
            <h3 className="font-bold mb-2">Zis - Der Papagei</h3>
            <p className="text-sm text-muted-foreground">
              Durchgeknallt aus Frankreich – Genie oder Wahnsinn?
            </p>
          </div>

          {/* Character 3: Lilly */}
          <div className="text-center">
            <div className="aspect-square bg-muted/30 rounded-full mb-4 flex items-center justify-center">
              <p className="text-sm text-muted-foreground">Lilly</p>
            </div>
            <h3 className="font-bold mb-2">Lilly - Die Torhüterin</h3>
            <p className="text-sm text-muted-foreground">
              Schüchtern, naiv, aber liebenswert
            </p>
          </div>

          {/* Character 4: Mister King */}
          <div className="text-center">
            <div className="aspect-square bg-muted/30 rounded-full mb-4 flex items-center justify-center">
              <p className="text-sm text-muted-foreground">Mister King</p>
            </div>
            <h3 className="font-bold mb-2">Mister King - Der Trainer</h3>
            <p className="text-sm text-muted-foreground">Verzweifelt – er braucht deine Hilfe!</p>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          TODO: Charaktere-1.jpg Portraits + Vorsatz.jpg Field Background
        </p>
      </div>
    </section>
  )
}

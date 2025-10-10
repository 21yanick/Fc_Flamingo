/**
 * Problem Section - "Das Problem"
 * Funktion: Humor + Empathie + Challenge
 * Beat: "Hier ist die Sache..."
 */

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">
          Die größte Herausforderung deiner Trainerkarriere
        </h2>

        <div className="max-w-3xl mx-auto space-y-6 mb-12">
          <p className="text-xl text-muted-foreground">
            Die Flamingos stehen lieber auf einem Bein anstatt zweibeinig Tore zu erzielen!
          </p>
          <p className="text-lg text-muted-foreground">Typisch Flamingos halt! 🦩</p>
          <p className="text-lg text-muted-foreground">
            Mister King verzweifelt fast an dieser seltsamen Angewohnheit. Kannst du das Team zum
            Meistertitel führen?
          </p>
        </div>

        {/* TODO: Mannschaftsfoto.jpg (Polaroid-Style mit Tape-Corners) */}
        <div className="max-w-2xl mx-auto">
          <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center">
            <p className="text-sm text-muted-foreground">
              TODO: Mannschaftsfoto.jpg + Tape-Corners (gelb/orange)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

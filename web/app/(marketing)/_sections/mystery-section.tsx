/**
 * Mystery Section - "Das Geheimnis"
 * Funktion: Mystery + Spannung + Interaktivität betonen
 * Beat: "Aber dann passiert etwas Unerwartetes..."
 */

export function MysterySection() {
  return (
    <section id="mystery" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">Dann ändert sich alles...</h2>

        <div className="max-w-3xl mx-auto space-y-6 mb-12">
          <div className="flex items-center justify-center gap-4 text-xl">
            <span>✉️</span>
            <p className="text-muted-foreground">Ein geheimnisvoller Brief sorgt für Aufsehen</p>
          </div>
          <div className="flex items-center justify-center gap-4 text-xl">
            <span>⚡</span>
            <p className="text-muted-foreground">
              Zwei spektakuläre Neuzugänge wirbeln alles durcheinander
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 text-xl">
            <span>🔥</span>
            <p className="text-muted-foreground">Unerwartete Wendungen warten</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-primary/10 rounded-lg p-8 mb-8">
          <p className="text-lg font-semibold mb-4">
            In diesem interaktiven Fußballabenteuer entscheidest du an jedem Wendepunkt:
          </p>
          <ul className="space-y-2 text-left max-w-md mx-auto">
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              <span>Welche Taktik wählt das Team?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              <span>Wie reagieren sie auf Rückschläge?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              <span>Wird das Team Schweizer Meister?</span>
            </li>
          </ul>
        </div>

        <p className="text-xl font-bold text-primary">
          Deine Entscheidungen bestimmen die Geschichte!
        </p>

        {/* TODO: K5-1.jpg (Teamwork) ODER K7-1.jpg (Action/Spannung) */}
        <p className="text-sm text-muted-foreground mt-8">
          TODO: K5-1.jpg oder K7-1.jpg für Atmosphäre
        </p>
      </div>
    </section>
  )
}

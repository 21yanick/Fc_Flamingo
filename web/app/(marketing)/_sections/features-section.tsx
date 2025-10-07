import { BookOpen, Heart, Trophy } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesSection() {
  return (
    <section className="py-20 bg-muted/50" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Was FC Flamingo besonders macht</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Eine Geschichte über Träume, Teamgeist und die Kraft des Glaubens an sich selbst.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Heart className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>Werte & Freundschaft</CardTitle>
              <CardDescription>
                Wichtige Lebenslektionen über Teamgeist, Durchhaltevermögen und den Mut, seine
                Träume zu verfolgen.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <BookOpen className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>Bunte Charaktere</CardTitle>
              <CardDescription>
                Liebevolle Illustrationen und einzigartige Persönlichkeiten, die Kinder begeistern
                und zum Träumen einladen.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Trophy className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>Schweizer Geschichte</CardTitle>
              <CardDescription>
                Geschriften aus der Schweiz für Schweizer Kinder - mit lokalen Bezügen und
                vertrauten Werten.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}

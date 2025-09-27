import { ArrowRight, BookOpen, Heart, Trophy } from "lucide-react"
import Link from "next/link"
import { FlamingoButton } from "@/components/fc-flamingo/hand-drawn"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/lib/config"

export default function LandingPage() {
  const getHeroContent = () => {
    return {
      title: siteConfig.name,
      subtitle: siteConfig.description,
      tagline: siteConfig.tagline,
      cta: "Buch entdecken",
      ctaLink: "/shop",
    }
  }

  const hero = getHeroContent()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-primary">{hero.title}</h1>
            <p className="text-lg text-muted-foreground mb-6 lg:text-xl leading-relaxed">
              {hero.subtitle}
            </p>
            <p className="text-xl lg:text-2xl font-semibold mb-8 text-primary italic">
              "{hero.tagline}"
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={hero.ctaLink}>
                <FlamingoButton variant="training" size="lg">
                  <BookOpen className="mr-2 h-4 w-4" />
                  {hero.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </FlamingoButton>
              </Link>
              <Link href="/contact">
                <FlamingoButton variant="secondary" size="lg">
                  Kontakt
                </FlamingoButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
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
                  Geschichten aus der Schweiz für Schweizer Kinder - mit lokalen Bezügen und
                  vertrauten Werten.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Bereit für das Abenteuer?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Entdecke die Geschichte der Flamingo-Fußballmannschaft und ihrer Träume vom ersten
            Schweizer Meistertitel.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href={hero.ctaLink}>
              <BookOpen className="mr-2 h-4 w-4" />
              {hero.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

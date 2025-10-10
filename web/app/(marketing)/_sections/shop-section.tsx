/**
 * Shop Section - "Jetzt Spielen"
 * Funktion: Shop/Kauf + Product Info
 * Beat: "Starte dein Abenteuer – jetzt!"
 */

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ShopSection() {
  return (
    <section id="shop" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div>
              <div className="aspect-square bg-muted/30 rounded-lg flex items-center justify-center">
                <p className="text-sm text-muted-foreground">TODO: Cover.png (als Produkt)</p>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">FC Flamingo</h2>
              <p className="text-xl">Interaktives Fußballabenteuer</p>

              <p className="text-muted-foreground">
                In dieser Geschichte entscheidest du, wie die Saison verläuft!
              </p>

              {/* Features */}
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Interaktiv – Du entscheidest die Story</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Ab 4 Jahren</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>48 Seiten Hardcover</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Professionelle Aquarelle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Made in Switzerland 🇨🇭</span>
                </li>
              </ul>

              {/* Price & CTA */}
              <div className="pt-4">
                <p className="text-3xl font-bold mb-4">CHF 22.00</p>
                <Button size="lg" className="w-full md:w-auto" asChild>
                  <Link href="/shop">
                    Jetzt kaufen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

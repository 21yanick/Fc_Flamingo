/**
 * Shop Section - "Jetzt Spielen"
 * Funktion: Shop/Kauf + Product Info
 * Beat: "Starte dein Abenteuer – jetzt!"
 */

"use client"

import { ArrowRight } from "lucide-react"
import { ProductCard } from "@/components/fc-flamingo/hybrid"
import { FloatingCTA } from "@/components/shop/floating-cta"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/shop/cart-store"

export function ShopSection() {
  const addItem = useCartStore((state) => state.addItem)

  // FC Flamingo Buch - hardcoded für One-Pager (KISS)
  const handleBuyNow = () => {
    const book = {
      id: "fc-flamingo-book",
      name: "FC Flamingo",
      price: 2200, // CHF 22.00 in Rappen
      description: "Interaktives Fussballabenteuer",
      digital: false,
    }
    addItem(book, 1)
  }

  return (
    <>
      <section id="shop" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Product Image - Interactive 3D Tilted Card */}
              <div className="flex justify-center">
                <ProductCard />
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold">FC Flamingo</h2>
                <p className="text-xl font-semibold text-primary">Mission Meistertitel</p>

                <p className="text-muted-foreground leading-relaxed">
                  Trainer Mister King hat einen grossen Traum: Der FC Flamingo soll zum ersten Mal
                  Schweizer Meister werden! Doch plötzlich tauchen verrückte Mitspieler auf und ein
                  geheimnisvolles Couvert. Wer steckt dahinter?
                </p>

                <p className="text-lg font-medium">
                  Du entscheidest, wie die Fussballsaison weitergeht!
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary text-xl">⚽</span>
                    <span>Interaktives Fussballabenteuer ab 9 Jahren</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary text-xl">📖</span>
                    <span>172 Seiten / Hardcover</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary text-xl">🎨</span>
                    <span>Professionelle Illustrationen</span>
                  </li>
                </ul>

                {/* Price & CTA - Enhanced Prominence */}
                <div className="pt-8 mt-8 border-t-2 border-dashed border-border">
                  {/* Price */}
                  <div className="mb-6">
                    <p className="text-4xl font-bold mb-2">CHF 22.00</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
                      <span className="flex items-center gap-1">
                        ✓ Versandkostenfrei in der Schweiz
                      </span>
                      <span className="hidden sm:inline">•</span>
                      <span className="flex items-center gap-1">✓ TWINT verfügbar</span>
                    </p>
                  </div>

                  {/* CTA Button - Stadium Gold Gradient */}
                  <Button
                    size="lg"
                    onClick={handleBuyNow}
                    className="w-full md:w-auto md:min-w-[280px] h-14 text-base font-bold
                               bg-gradient-to-r from-[var(--flamingo-orange)] to-[var(--stadium-gold)]
                               hover:from-[var(--flamingo-orange)]/90 hover:to-[var(--stadium-gold)]/90
                               shadow-lg hover:shadow-xl
                               transition-all duration-300 hover:scale-[1.02]
                               rounded-[14px_11px_16px_13px]"
                  >
                    Jetzt kaufen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Floating CTA - Only visible on small screens */}
      <FloatingCTA onBuyNow={handleBuyNow} price="CHF 22.00" sectionId="shop" />
    </>
  )
}

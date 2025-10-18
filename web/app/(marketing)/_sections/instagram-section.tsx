/**
 * Instagram Section - "Instagram Gewinnspiel"
 * Funktion: Community-Building + Alternative für Nicht-Käufer
 * Beat: "Werde Teil der Community!"
 */

import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function InstagramSection() {
  return (
    <section id="instagram" className="py-20 bg-training-bg dark:bg-matchday-bg">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">Spiele mit FC Flamingo!</h2>

        <div className="max-w-2xl mx-auto space-y-6 mb-12">
          <p className="text-xl text-muted-foreground">
            Wöchentliche Challenges & Gewinnspiele auf Instagram
          </p>
          <p className="text-lg text-muted-foreground">
            Rätselspass für Kinder, tolle Preise zu gewinnen!
          </p>
        </div>

        <Button variant="outline" size="lg" asChild>
          <a
            href="https://instagram.com/fcflamingo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <Instagram className="h-5 w-5" />
            Jetzt mitmachen
          </a>
        </Button>
      </div>
    </section>
  )
}

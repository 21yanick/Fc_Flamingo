/**
 * Community Section - "Spiele mit FC Flamingo!"
 * Funktion: Community-Building via Challenge-Newsletter + Instagram
 * Beat: "Werde Teil der Community!"
 */

"use client"

import { Instagram } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function InstagramSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO später: Backend anbinden (Supabase Newsletter Table)
    setIsSubmitted(true)
    setEmail("")
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="community" className="py-20 bg-training-bg dark:bg-matchday-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Spiele mit beim FC Flamingo!</h2>
          <p className="text-xl text-muted-foreground">
            Wöchentliche Challenges & Rätsel für Kinder
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Challenge-Newsletter */}
          <div className="flex flex-col">
            {/* Header - nimmt flexiblen Raum */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">📧 Challenge-Alarm</h3>
              <p className="text-muted-foreground mb-6">
                Erhalte wöchentliche Rätsel direkt ins Postfach
              </p>
            </div>

            {/* Actions - feste Höhe */}
            <div className="space-y-3">
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="deine@email.ch"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
                <Button type="submit" className="w-full" size="lg">
                  {isSubmitted ? "✓ Angemeldet!" : "Challenges abonnieren"}
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center md:text-left">
                Jederzeit abmelden. Kein Spam.
              </p>
            </div>
          </div>

          {/* Instagram */}
          <div className="flex flex-col">
            {/* Header - nimmt flexiblen Raum (gleich wie links) */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">📱 Auf Instagram</h3>
              <p className="text-muted-foreground mb-6">
                Folge uns für Gewinnspiele & Community-Spass
              </p>

              {/* Zusätzlicher Content für Balance */}
              <div className="space-y-2 mb-4">
                <p className="text-sm text-muted-foreground">✓ Wöchentliche Gewinnspiele</p>
                <p className="text-sm text-muted-foreground">✓ Exklusive Einblicke</p>
              </div>
            </div>

            {/* Actions - feste Höhe (aligned mit links) */}
            <div className="space-y-3">
              <Button variant="outline" size="lg" className="w-full" asChild>
                <a
                  href="https://instagram.com/fcflamingo_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Instagram className="h-5 w-5" />
                  @fcflamingo_official
                </a>
              </Button>

              {/* Spacer für visuelle Balance (gleiche Höhe wie "Kein Spam" links) */}
              <div className="h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

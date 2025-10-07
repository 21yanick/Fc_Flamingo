/**
 * Contact Section - "Kontakt & Newsletter"
 * Funktion: Verbindung + Newsletter
 * Beat: "Bleib in Verbindung!"
 */

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { siteConfig } from "@/lib/config"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-training-bg dark:bg-matchday-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Bleib in Verbindung!</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-bold mb-4">📧 Newsletter</h3>
            <p className="text-muted-foreground mb-6">
              Erfahre als Erstes von neuen Geschichten und Abenteuern
            </p>
            <form className="space-y-4">
              <Input type="email" placeholder="Deine E-Mail-Adresse" />
              <Button type="submit" className="w-full">
                Anmelden
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              TODO: Newsletter-Integration (z.B. Mailchimp/Resend)
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-2xl font-bold mb-4">✉️ Kontakt</h3>
            <p className="text-muted-foreground mb-6">Fragen? Wir helfen gerne!</p>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">E-Mail</p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-primary hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="pt-4">
                <p className="text-sm text-muted-foreground">
                  TODO: Social Media Icons (falls vorhanden)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

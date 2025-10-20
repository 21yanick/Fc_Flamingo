/**
 * Contact Section - "Bleib in Verbindung!"
 * Funktion: Email-Kontakt + Kontaktformular Dialog
 * Beat: "Wir sind für dich da!"
 */

"use client"

import { Instagram, Mail, MessageSquare } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { siteConfig } from "@/lib/config"

export function ContactSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO später: Email via Infomaniak SMTP
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setIsDialogOpen(false)
    }, 2000)
  }

  return (
    <section id="contact" className="py-20 bg-training-bg dark:bg-matchday-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Bleib in Verbindung!</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Direkte Email */}
          <div className="flex flex-col">
            {/* Header - nimmt flexiblen Raum */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
                <Mail className="h-6 w-6" />
                Kontakt
              </h3>
              <p className="text-muted-foreground mb-6">Fragen? Schreib uns!</p>
            </div>

            {/* Actions - feste Höhe */}
            <div className="space-y-6">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-lg text-primary hover:underline block text-center md:text-left"
              >
                {siteConfig.contact.email}
              </a>

              {/* Kontaktformular als Dialog */}
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="w-full">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Kontaktformular
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Schreib uns</DialogTitle>
                  </DialogHeader>

                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div>
                      <Input name="name" placeholder="Dein Name" required />
                    </div>
                    <div>
                      <Input name="email" type="email" placeholder="Deine Email" required />
                    </div>
                    <div>
                      <Textarea name="message" placeholder="Deine Nachricht" rows={4} required />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitted}>
                      {isSubmitted ? "✓ Nachricht gesendet!" : "Nachricht senden"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col">
            {/* Header - nimmt flexiblen Raum (gleich wie links) */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
                <Instagram className="h-6 w-6" />
                Folge uns
              </h3>
              <p className="text-muted-foreground mb-6">Bleib auf dem Laufenden</p>
            </div>

            {/* Actions - feste Höhe (aligned mit links) */}
            <div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Clock, Mail, MessageSquare, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useFormField } from "@/hooks/useFormField"

export default function ContactPage() {
  // Form field hooks for accessibility-compliant unique IDs
  const firstNameField = useFormField()
  const lastNameField = useFormField()
  const emailField = useFormField()
  const companyField = useFormField()
  const subjectField = useFormField()
  const messageField = useFormField()
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">Kontakt</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Haben Sie Fragen zu unseren Schweizer Kinderbüchern? Wir freuen uns auf Ihre Nachricht und
          antworten so schnell wie möglich.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Nachricht senden</CardTitle>
            <CardDescription>
              Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen
              zurück.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label {...firstNameField.labelProps}>Vorname</Label>
                  <Input {...firstNameField.fieldProps} placeholder="Hans" />
                </div>
                <div className="space-y-2">
                  <Label {...lastNameField.labelProps}>Nachname</Label>
                  <Input {...lastNameField.fieldProps} placeholder="Müller" />
                </div>
              </div>

              <div className="space-y-2">
                <Label {...emailField.labelProps}>E-Mail</Label>
                <Input
                  {...emailField.fieldProps}
                  type="email"
                  placeholder="hans.mueller@example.ch"
                />
              </div>

              <div className="space-y-2">
                <Label {...companyField.labelProps}>Schule/Institution (optional)</Label>
                <Input {...companyField.fieldProps} placeholder="Primarschule Zürich" />
              </div>

              <div className="space-y-2">
                <Label {...subjectField.labelProps}>Betreff</Label>
                <Input {...subjectField.fieldProps} placeholder="Wie können wir Ihnen helfen?" />
              </div>

              <div className="space-y-2">
                <Label {...messageField.labelProps}>Nachricht</Label>
                <Textarea
                  {...messageField.fieldProps}
                  placeholder="Erzählen Sie uns mehr über Ihre Fragen zu unseren Kinderbüchern..."
                  rows={6}
                />
              </div>

              <Button type="submit" className="w-full">
                Nachricht senden
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                E-Mail Kontakt
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">
                Für allgemeine Anfragen und Buchberatung:
              </p>
              <p className="font-medium">info@fcflamingo.ch</p>
              <p className="text-muted-foreground mb-2 mt-4">
                Für Schulbestellungen und Mengenrabatte:
              </p>
              <p className="font-medium">bestellungen@fcflamingo.ch</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                Live Beratung
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Erhalten Sie sofortige Hilfe bei der Buchauswahl während unserer Geschäftszeiten.
              </p>
              <Button variant="outline" className="w-full">
                Beratung starten
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Telefonischer Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">Rufen Sie uns für dringende Anliegen an:</p>
              <p className="font-medium mb-4">+41 44 123 45 67</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mr-2" />
                Mo-Fr, 9:00-18:00 Uhr (MEZ)
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Häufig gestellte Fragen</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Bevor Sie uns kontaktieren, schauen Sie in unsere FAQ für schnelle Antworten zu
                häufigen Fragen.
              </p>
              <Button variant="outline" className="w-full">
                FAQ anzeigen
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Weitere Kontaktmöglichkeiten</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Buchkatalog</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Stöbern Sie in unserem kompletten Kinderbuch-Katalog mit Altersempfehlungen.
              </p>
              <Button variant="outline" className="w-full">
                Katalog ansehen
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Leserforum</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Tauschen Sie sich mit anderen Eltern über Buchempfehlungen aus.
              </p>
              <Button variant="outline" className="w-full">
                Forum beitreten
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Lieferstatus</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Überprüfen Sie den Status Ihrer Bestellung und Lieferzeiten.
              </p>
              <Button variant="outline" className="w-full">
                Status prüfen
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

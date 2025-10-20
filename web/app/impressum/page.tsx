import type { Metadata } from "next"
import { Container } from "@/components/layout/container"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "Impressum",
  description: "Rechtliche Informationen zu FC Flamingo",
}

export default function ImpressumPage() {
  const { name: brandName, contact } = siteConfig

  return (
    <Container className="py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Angaben gemäss Art. 3 Abs. 1 lit. s UWG</h2>
            <p className="text-muted-foreground">
              Gemäss dem Bundesgesetz gegen den unlauteren Wettbewerb (UWG) sind Online-Shop
              Betreiber verpflichtet, folgende Angaben zu publizieren:
            </p>

            <div className="mt-6 p-6 bg-muted/30 rounded-lg">
              <p className="text-foreground">
                <strong>Natalie Barros</strong>
                <br />
                <strong>[Platzhalter: Strasse und Hausnummer]</strong>
                <br />
                <strong>[Platzhalter: PLZ und Ort]</strong>
                <br />
                Schweiz
              </p>
              <p className="text-foreground mt-4">
                <strong>Kontakt:</strong>
                <br />
                E-Mail:{" "}
                <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                  {contact.email}
                </a>
                <br />
                Telefon: <strong>[Platzhalter: Telefonnummer]</strong> (optional)
              </p>
            </div>

            <p className="text-muted-foreground mt-4 text-sm">
              <strong>Hinweis:</strong> Als natürliche Person ohne Firmeneintrag besteht keine
              Pflicht zur Angabe einer Handelsregister- oder UID-Nummer. Da der jährliche Umsatz
              unter CHF 100'000 liegt, besteht keine Mehrwertsteuerpflicht.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Webdesign und technische Umsetzung</h2>
            <p className="text-muted-foreground">Design und Entwicklung dieser Website:</p>
            <p className="mt-2">
              <strong>21design.ch</strong>
              <br />
              <a
                href="https://21design.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.21design.ch
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Haftungsausschluss</h2>
            <p className="text-muted-foreground">
              <strong>Inhalt des Onlineangebots</strong>
            </p>
            <p className="text-muted-foreground mt-2">
              Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit,
              Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Die
              Nutzung der Webseiteninhalte erfolgt auf eigene Gefahr.
            </p>
            <p className="text-muted-foreground mt-4">
              Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art,
              welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten
              Informationen, durch Missbrauch der Verbindung oder durch technische Störungen
              entstanden sind, werden ausgeschlossen.
            </p>

            <p className="text-muted-foreground mt-6">
              <strong>Verweise und Links</strong>
            </p>
            <p className="text-muted-foreground mt-2">
              Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres
              Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt.
              Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Urheberrecht und geistiges Eigentum</h2>
            <p className="text-muted-foreground">
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos, Texten,
              Illustrationen oder anderen Dateien auf dieser Website gehören ausschliesslich{" "}
              <strong>Natalie Barros ({brandName})</strong> oder den speziell genannten
              Rechteinhabern.
            </p>
            <p className="text-muted-foreground mt-4">
              Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der
              Urheberrechtsträger im Voraus einzuholen. Das Herunterladen oder Kopieren von Texten,
              Bildern oder anderen Dateien für kommerzielle Zwecke ist ohne ausdrückliche
              Genehmigung untersagt.
            </p>
            <p className="text-muted-foreground mt-4">
              <strong>Buchrechte:</strong> Die Rechte am Buch "FC Flamingo" (Text und
              Illustrationen) liegen bei Natalie Barros und den jeweiligen Illustratoren.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Datenschutz</h2>
            <p className="text-muted-foreground">
              Informationen zur Bearbeitung Ihrer Personendaten finden Sie in unserer{" "}
              <a href="/datenschutz" className="text-primary hover:underline">
                Datenschutzerklärung
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Änderungen und Rechtswirksamkeit dieser Erklärung
            </h2>
            <p className="text-muted-foreground">
              Durch die Nutzung dieser Website erklären Sie sich mit den Bestimmungen dieses
              Impressums einverstanden. Der Autor behält sich das Recht vor, das Impressum jederzeit
              ohne Ankündigung zu ändern.
            </p>
          </section>

          <section className="mt-12 pt-8 border-t">
            <p className="text-sm text-muted-foreground">
              <strong>Stand:</strong> Oktober 2025
              <br />
              Dieses Impressum entspricht den Anforderungen des Bundesgesetzes gegen den unlauteren
              Wettbewerb (UWG) in der Schweiz.
            </p>
          </section>
        </div>
      </div>
    </Container>
  )
}

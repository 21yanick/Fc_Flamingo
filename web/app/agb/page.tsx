import type { Metadata } from "next"
import { Container } from "@/components/layout/container"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description: "AGB für den FC Flamingo Online-Shop",
}

export default function AGBPage() {
  const { name: brandName, contact } = siteConfig

  return (
    <Container className="py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Geltungsbereich und Vertragspartner</h2>
            <p className="text-muted-foreground">
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Bestellungen über den
              Online-Shop <strong>{brandName}</strong>. Mit der Bestellung akzeptieren Sie diese AGB
              als Vertragsbestandteil.
            </p>
            <p className="text-muted-foreground mt-4">
              Vertragspartner ist: <strong>[Platzhalter: Natalie Barros, Geschäftsadresse]</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Vertragsabschluss</h2>
            <p className="text-muted-foreground">
              Der Kaufvertrag kommt zustande, wenn Sie eine Bestellung über unseren Online-Shop
              aufgeben und wir diese per E-Mail bestätigen. Die Produktdarstellungen im Shop stellen
              ein unverbindliches Angebot dar. Mit dem Absenden der Bestellung geben Sie ein
              verbindliches Kaufangebot ab. Wir sind berechtigt, dieses Angebot innerhalb von 5
              Tagen anzunehmen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Preise, Versandkosten und Zahlung</h2>
            <p className="text-muted-foreground">
              Alle Preise verstehen sich in Schweizer Franken (CHF). Die Preise sind Endpreise und
              enthalten keine Mehrwertsteuer, da wir als Kleinunternehmen nicht
              mehrwertsteuerpflichtig sind.
            </p>
            <p className="text-muted-foreground mt-4">
              <strong>Versandkosten:</strong> Die Lieferung innerhalb der Schweiz kostet pauschal
              CHF 10.00. Die Versandkosten werden während des Bestellvorgangs separat ausgewiesen
              und sind im Gesamtpreis enthalten.
            </p>
            <p className="text-muted-foreground mt-4">
              <strong>Zahlungsmethoden:</strong> Die Zahlung erfolgt sicher über Stripe. Wir
              akzeptieren Kreditkarten (Visa, Mastercard, American Express) und TWINT. Der
              Rechnungsbetrag wird unmittelbar nach Bestellabschluss fällig.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Lieferung und Lieferzeit</h2>
            <p className="text-muted-foreground">
              Die Lieferung erfolgt ausschliesslich innerhalb der Schweiz an die von Ihnen
              angegebene Lieferadresse. Die Lieferzeit beträgt in der Regel 3-5 Werktage nach
              Zahlungseingang und Versand der Bestellbestätigung.
            </p>
            <p className="text-muted-foreground mt-4">
              Bei Lieferverzögerungen werden Sie umgehend per E-Mail informiert. Die Lieferung
              erfolgt durch die Schweizerische Post.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              5. Freiwilliges Rückgaberecht (kein gesetzliches Widerrufsrecht)
            </h2>
            <p className="text-muted-foreground">
              <strong>Wichtiger Hinweis:</strong> In der Schweiz besteht bei Online-Käufen kein
              gesetzliches Widerrufsrecht. Wir gewähren Ihnen jedoch freiwillig ein 14-tägiges
              Rückgaberecht ab Erhalt der Ware.
            </p>
            <p className="text-muted-foreground mt-4">
              <strong>Voraussetzungen für die Rückgabe:</strong>
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Die Ware muss unversehrt, unbenutzt und in der Originalverpackung sein</li>
              <li>
                Melden Sie die Rückgabe vorab per E-Mail an{" "}
                <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                  {contact.email}
                </a>
              </li>
              <li>Die Rücksendekosten tragen Sie selbst</li>
              <li>Nach Erhalt und Prüfung der Ware erstatten wir Ihnen den Kaufpreis</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Gewährleistung (Mängelrechte)</h2>
            <p className="text-muted-foreground">
              Es gelten die gesetzlichen Gewährleistungsbestimmungen gemäss Schweizerischem
              Obligationenrecht (OR). Die Gewährleistungsfrist beträgt zwei Jahre ab Lieferung für
              Neuwaren.
            </p>
            <p className="text-muted-foreground mt-4">
              Bei berechtigten Mängelansprüchen haben Sie das Recht auf Nachbesserung,
              Ersatzlieferung, Preisminderung oder Rücktritt vom Vertrag. Bitte melden Sie Mängel
              umgehend per E-Mail an{" "}
              <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                {contact.email}
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Haftung</h2>
            <p className="text-muted-foreground">
              Wir haften nach den gesetzlichen Bestimmungen bei Vorsatz und grober Fahrlässigkeit.
              Bei leichter Fahrlässigkeit haften wir nur bei Verletzung wesentlicher
              Vertragspflichten. Die Haftung ist in diesem Fall auf den vertragstypischen,
              vorhersehbaren Schaden begrenzt.
            </p>
            <p className="text-muted-foreground mt-4">
              Diese Haftungsbeschränkungen gelten nicht bei Verletzung von Leben, Körper oder
              Gesundheit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Eigentumsvorbehalt</h2>
            <p className="text-muted-foreground">
              Die gelieferte Ware bleibt bis zur vollständigen Bezahlung unser Eigentum.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Anwendbares Recht und Gerichtsstand</h2>
            <p className="text-muted-foreground">
              Es gilt ausschliesslich Schweizer Recht unter Ausschluss des UN-Kaufrechts (CISG).
              Erfüllungsort und Gerichtsstand ist{" "}
              <strong>[Platzhalter: Wohnort Natalie Barros]</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Streitbeilegung</h2>
            <p className="text-muted-foreground">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit.
              Wir sind jedoch nicht verpflichtet und nicht bereit, an einem
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Kontakt</h2>
            <p className="text-muted-foreground">
              Bei Fragen zu diesen AGB oder Ihrer Bestellung kontaktieren Sie uns:
            </p>
            <p className="mt-2 text-muted-foreground">
              <strong>E-Mail:</strong>{" "}
              <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                {contact.email}
              </a>
            </p>
          </section>

          <section className="mt-12 pt-8 border-t">
            <p className="text-sm text-muted-foreground">Stand: Oktober 2025</p>
          </section>
        </div>
      </div>
    </Container>
  )
}

import type { Metadata } from "next"
import { Container } from "@/components/layout/container"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Informationen zum Datenschutz bei FC Flamingo",
}

export default function DatenschutzPage() {
  const { name: brandName, contact } = siteConfig

  return (
    <Container className="py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Allgemeines und Verantwortlichkeit</h2>
            <p className="text-muted-foreground">
              Gestützt auf Artikel 13 der Schweizerischen Bundesverfassung und die
              datenschutzrechtlichen Bestimmungen des Bundes (Bundesgesetz über den Datenschutz,
              DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor
              Missbrauch ihrer persönlichen Daten.
            </p>
            <p className="text-muted-foreground mt-4">
              Wir halten diese Bestimmungen ein. Persönliche Daten werden streng vertraulich
              behandelt und weder an Dritte verkauft noch weitergegeben.
            </p>
            <p className="text-muted-foreground mt-4">
              <strong>Verantwortlich für die Datenbearbeitung:</strong>
              <br />
              <strong>[Platzhalter: Natalie Barros, Geschäftsadresse]</strong>
              <br />
              E-Mail:{" "}
              <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                {contact.email}
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Grundsätze der Datenbearbeitung</h2>
            <p className="text-muted-foreground">
              Wir bearbeiten Personendaten im Einklang mit dem Schweizer Datenschutzrecht (DSG) und
              nach folgenden Grundsätzen:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>
                <strong>Rechtmässigkeit:</strong> Datenbearbeitung erfolgt rechtmässig und nach Treu
                und Glauben
              </li>
              <li>
                <strong>Verhältnismässigkeit:</strong> Wir erfassen nur Daten, die für die
                Vertragsabwicklung notwendig sind
              </li>
              <li>
                <strong>Zweckbindung:</strong> Daten werden nur für den angegebenen Zweck verwendet
              </li>
              <li>
                <strong>Datensicherheit:</strong> Technische und organisatorische Massnahmen zum
                Schutz Ihrer Daten
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. Art, Umfang und Zweck der Datenbearbeitung
            </h2>
            <p className="text-muted-foreground">
              <strong>3.1 Bestellabwicklung (Vertragserfüllung)</strong>
            </p>
            <p className="text-muted-foreground mt-2">
              Beim Kauf in unserem Online-Shop erfassen wir folgende Personendaten zur Abwicklung
              Ihrer Bestellung:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Name und Vorname</li>
              <li>E-Mail-Adresse</li>
              <li>Lieferadresse (Strasse, PLZ, Ort)</li>
              <li>Bestellinformationen (Produkt, Menge, Preis)</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              <strong>Rechtsgrundlage:</strong> Die Datenbearbeitung erfolgt zur Erfüllung des
              Kaufvertrags (Art. 31 Abs. 2 lit. a DSG). Ohne diese Daten können wir Ihre Bestellung
              nicht bearbeiten.
            </p>
            <p className="text-muted-foreground mt-4">
              <strong>Speicherdauer:</strong> Wir speichern Ihre Bestelldaten für die gesetzlich
              vorgeschriebene Aufbewahrungsfrist von 10 Jahren (Geschäftsbücher gemäss OR).
            </p>

            <p className="text-muted-foreground mt-6">
              <strong>3.2 E-Mail-Kommunikation</strong>
            </p>
            <p className="text-muted-foreground mt-2">
              Wenn Sie uns per E-Mail kontaktieren, speichern wir Ihre E-Mail-Adresse und den Inhalt
              Ihrer Nachricht zur Bearbeitung Ihrer Anfrage. Diese Daten werden gelöscht, sobald die
              Anfrage abschliessend bearbeitet ist.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Kein Kundenkonto erforderlich</h2>
            <p className="text-muted-foreground">
              Unser Shop funktioniert als <strong>Guest Checkout</strong>. Sie müssen kein
              Benutzerkonto erstellen oder Passwörter speichern. Wir erfassen nur die für die
              Bestellung notwendigen Daten und speichern keine Benutzerprofile.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              5. Zahlungsabwicklung durch Stripe (Drittanbieter)
            </h2>
            <p className="text-muted-foreground">
              Für die Zahlungsabwicklung nutzen wir den externen Zahlungsdienstleister{" "}
              <strong>Stripe Payments Europe, Ltd.</strong> (Irland).
            </p>
            <p className="text-muted-foreground mt-4">
              <strong>Datenübermittlung:</strong> Wenn Sie eine Zahlung tätigen, werden folgende
              Daten direkt an Stripe übermittelt:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Zahlungsdaten (Kreditkartennummer, TWINT-Daten etc.)</li>
              <li>Rechnungsadresse</li>
              <li>E-Mail-Adresse</li>
              <li>Bestellbetrag</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              <strong>Wichtig:</strong> Wir speichern selbst keine Zahlungsdaten (z.B.
              Kreditkartennummern). Die Verarbeitung erfolgt ausschliesslich durch Stripe gemäss
              deren{" "}
              <a
                href="https://stripe.com/ch/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Datenschutzrichtlinien
              </a>
              .
            </p>
            <p className="text-muted-foreground mt-4">
              <strong>Rechtsgrundlage:</strong> Die Datenübermittlung an Stripe erfolgt zur
              Vertragserfüllung (Zahlungsabwicklung) gemäss Art. 31 Abs. 2 lit. a DSG.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Cookies und Tracking</h2>
            <p className="text-muted-foreground">
              <strong>6.1 Technisch notwendige Cookies</strong>
            </p>
            <p className="text-muted-foreground mt-2">
              Diese Website verwendet ausschliesslich technisch notwendige Cookies für die
              Warenkorbfunktion und Session-Verwaltung. Diese Cookies sind für den Betrieb der
              Website erforderlich und können nicht deaktiviert werden.
            </p>
            <p className="text-muted-foreground mt-4">
              <strong>6.2 Keine Tracking- oder Marketing-Cookies</strong>
            </p>
            <p className="text-muted-foreground mt-2">
              Wir verwenden keine Analyse-, Tracking- oder Marketing-Cookies. Ihre Aktivitäten auf
              unserer Website werden nicht für Werbezwecke ausgewertet.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Weitergabe von Daten an Dritte</h2>
            <p className="text-muted-foreground">
              Wir geben Ihre Personendaten nur an Dritte weiter, wenn:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>
                <strong>Versanddienstleister:</strong> Die Lieferadresse wird an die Schweizerische
                Post zur Zustellung weitergegeben
              </li>
              <li>
                <strong>Zahlungsdienstleister:</strong> Zahlungsdaten werden an Stripe übermittelt
                (siehe Ziffer 5)
              </li>
              <li>
                <strong>Gesetzliche Verpflichtung:</strong> Wenn wir rechtlich zur Herausgabe
                verpflichtet sind
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Wir verkaufen oder vermieten Ihre Daten niemals an Dritte für Marketingzwecke.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Datenübermittlung ins Ausland</h2>
            <p className="text-muted-foreground">
              <strong>Stripe (Irland):</strong> Ihre Zahlungsdaten werden an Stripe Payments Europe,
              Ltd. mit Sitz in Irland (EU) übermittelt. Die Europäische Union verfügt über ein
              angemessenes Datenschutzniveau gemäss Bundesrat-Beschluss.
            </p>
            <p className="text-muted-foreground mt-4">
              Andere Datenübermittlungen ins Ausland finden nicht statt.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Datensicherheit</h2>
            <p className="text-muted-foreground">
              Wir setzen technische und organisatorische Sicherheitsmassnahmen ein, um Ihre Daten
              gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder den Zugriff
              unberechtigter Personen zu schützen:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>SSL/TLS-Verschlüsselung für alle Datenübertragungen</li>
              <li>Sichere Speicherung in verschlüsselten Datenbanken</li>
              <li>Zugriffsbeschränkungen (nur autorisierte Personen)</li>
              <li>Regelmässige Sicherheitsupdates</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Ihre Rechte (Betroffenenrechte)</h2>
            <p className="text-muted-foreground">
              Sie haben im Rahmen des Schweizer Datenschutzrechts folgende Rechte:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
              <li>
                <strong>Recht auf Auskunft (Art. 25 DSG):</strong> Sie können Auskunft darüber
                verlangen, ob und welche Personendaten wir über Sie bearbeiten
              </li>
              <li>
                <strong>Recht auf Berichtigung:</strong> Sie können die Berichtigung unrichtiger
                Daten verlangen
              </li>
              <li>
                <strong>Recht auf Löschung:</strong> Sie können die Löschung Ihrer Daten verlangen,
                sofern keine gesetzlichen Aufbewahrungspflichten bestehen
              </li>
              <li>
                <strong>Recht auf Datenherausgabe (Art. 28 DSG):</strong> Sie können Ihre Daten in
                einem strukturierten Format erhalten
              </li>
              <li>
                <strong>Widerspruchsrecht:</strong> Sie können der Bearbeitung Ihrer Daten
                widersprechen
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Zur Geltendmachung Ihrer Rechte kontaktieren Sie uns bitte per E-Mail:{" "}
              <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                {contact.email}
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Beschwerderecht</h2>
            <p className="text-muted-foreground">
              Wenn Sie der Ansicht sind, dass die Bearbeitung Ihrer Personendaten gegen das
              Schweizer Datenschutzrecht verstösst, haben Sie das Recht, sich bei der zuständigen
              Aufsichtsbehörde zu beschweren:
            </p>
            <p className="text-muted-foreground mt-4">
              <strong>Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter (EDÖB)</strong>
              <br />
              Feldeggweg 1, 3003 Bern
              <br />
              <a
                href="https://www.edoeb.admin.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.edoeb.admin.ch
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              12. Änderungen dieser Datenschutzerklärung
            </h2>
            <p className="text-muted-foreground">
              Wir können diese Datenschutzerklärung jederzeit anpassen, um Änderungen unserer
              Datenbearbeitung oder neuen gesetzlichen Anforderungen Rechnung zu tragen. Es gilt die
              jeweils aktuelle, auf unserer Website publizierte Fassung.
            </p>
          </section>

          <section className="mt-12 pt-8 border-t">
            <p className="text-sm text-muted-foreground">
              <strong>Stand:</strong> Oktober 2025
              <br />
              Diese Datenschutzerklärung gilt für den Online-Shop <strong>{brandName}</strong> und
              entspricht dem Schweizer Datenschutzgesetz (DSG, in Kraft seit 1. September 2023).
            </p>
          </section>
        </div>
      </div>
    </Container>
  )
}

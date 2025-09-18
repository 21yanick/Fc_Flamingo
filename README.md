# FCFlamingo Schweizer Kinderbuch-Shop

**🇨🇭 Moderne E-Commerce-Plattform für Schweizer Kinderbücher**

Ultra-saubere Next.js 15 Shop-Plattform mit selbst-gehosteter Supabase-Infrastruktur, optimiert für den Schweizer Markt mit CHF-Preisen, TWINT-Integration und lokalen Anpassungen.

## 🎯 Projektübersicht

FCFlamingo ist eine spezialisierte E-Commerce-Lösung für Schweizer Kinderbücher mit:

- **🏗️ Moderner Tech-Stack:** Next.js 15 + App Router + Server Components
- **🗄️ Datenbank-Zentriert:** Selbst-gehostete Supabase mit PostgreSQL + Row Level Security
- **🇨🇭 Schweiz-Optimiert:** CHF/Rappen, TWINT, Europa/Zürich Zeitzone
- **⚡ Leistung:** Server Components, Streaming, Edge-Optimierung
- **🛡️ Sicherheit:** Row Level Security, JWT-Authentifizierung, Stripe-Integration

### 🧹 Architektur-Status
**Reines Shop-System** - Alle SaaS-Komponenten vollständig entfernt für maximale Einfachheit und Leistung.

## 🚀 Schnellstart

### Entwicklungsumgebung einrichten

1. **Repository klonen:**
```bash
git clone <repository-url>
cd fcflamingo
```

2. **Infrastruktur starten:**
```bash
cd infrastructure
docker compose up -d
```
*Dienste verfügbar: [API](http://localhost:55321) | [Studio](http://localhost:55323)*

3. **Template konfigurieren:**
```bash
cd ../template
cp .env.example .env.local
```

4. **Abhängigkeiten installieren:**
```bash
npm install
npm run dev
```

**🌐 Entwicklungs-URLs:**
- **Shop:** http://localhost:3000
- **Supabase API:** http://localhost:55321
- **Studio:** http://localhost:55323

## ⚙️ Konfiguration

### Entwicklungsumgebung

**Template (.env.local):**
```env
# Supabase Verbindung
NEXT_PUBLIC_SUPABASE_URL=http://localhost:55321
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU

# Stripe Test-Schlüssel (Entwicklung)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Seiten-Konfiguration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NODE_ENV=development
```

### Produktionsumgebung

**Template (.env.local für Produktion):**
```env
# Supabase Produktion
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-production-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-production-service-key

# Stripe Live-Schlüssel (Produktion)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Produktions-Seite
NEXT_PUBLIC_SITE_URL=https://fcflamingo.ch
NODE_ENV=production
```

## 🏗️ Architektur

### Frontend (web/)
```
app/
├── (marketing)/          # Marketing-Seiten
│   ├── page.tsx         # Startseite
│   ├── shop/           # Produktkatalog
│   └── contact/        # Kontaktformular
├── auth/               # Authentifizierungs-Flows
├── dashboard/          # Kunden-Dashboard
└── api/               # API-Routen
```

### Backend (infrastructure/)
```
infrastructure/
├── docker-compose.yml  # Supabase-Stack
├── volumes/db/        # Datenbankschema
└── .env.local        # Infrastruktur-Konfiguration
```

### Hauptkomponenten
- **🛍️ Shop-System:** Produkte, Warenkorb, Checkout
- **👤 Kunden-Authentifizierung:** Registrierung, Login, Profile
- **📦 Bestellverwaltung:** Bestellungen, Bestellpositionen, Verlauf
- **💳 Zahlungen:** Stripe + TWINT Integration
- **🇨🇭 Schweizer Funktionen:** CHF-Währung, lokale Adressen

## 📊 Datenbankschema

**Ultra-Saubere Reine-Shop-Tabellen:**
```sql
-- Kundenverwaltung
public.profiles      -- Kundenprofile (erweitert auth.users)

-- Produktkatalog
public.products      -- Schweizer Kinderbücher (CHF-Preise)

-- Bestellabwicklung
public.orders        -- Kundenbestellungen (Schweizer Adressen)
public.order_items   -- Bestellpositionen
```

**Beispielprodukte (vorgeladen):**
- Der kleine Drache Kokosnuss (15.90 CHF)
- Globi und die Piraten (18.90 CHF)
- Heidi (12.90 CHF)

## 🛠️ Entwicklung

### Befehle
```bash
# Entwicklungsserver
npm run dev

# Typprüfung
npm run type-check

# Code-Prüfung
npm run lint

# Build erstellen
npm run build

# Produktionsserver
npm start
```

### Datenbankverwaltung
```bash
# Supabase Studio öffnen
open http://localhost:55323

# Direkter Datenbankzugriff
docker exec -it supabase-db psql -U supabase_admin -d postgres

# Produkte anzeigen
docker exec supabase-db psql -U supabase_admin -d postgres -c \
  "SELECT name, author, price FROM products LIMIT 5;"
```

## 🚀 Produktions-Deployment

### Infrastruktur-Deployment

1. **Server-Einrichtung:**
```bash
# Produktionsserver (Ubuntu/Debian)
sudo apt update && sudo apt install docker.io docker-compose
git clone <repository-url>
cd fcflamingo/infrastructure
```

2. **Produktions-Konfiguration:**
```bash
# Infrastruktur-Konfiguration kopieren und bearbeiten
cp .env .env.local
# Bearbeiten: POSTGRES_PASSWORD, JWT_SECRET, VAULT_ENC_KEY
# Produktions-URLs und Domains setzen
```

3. **Infrastruktur deployen:**
```bash
docker compose up -d
# Auf Initialisierung warten (60s)
docker compose ps
```

### Frontend-Deployment

1. **Vercel (Empfohlen):**
```bash
# Vercel CLI installieren
npm i -g vercel

# Aus web/ Verzeichnis deployen
cd web
vercel --prod
```

2. **Umgebungsvariablen (Vercel):**
   - Alle Produktions-Umgebungsvariablen im Vercel Dashboard hinzufügen
   - Custom Domain konfigurieren: fcflamingo.ch
   - SSL/TLS automatisch einrichten

3. **Selbst-gehostete Alternative:**
```bash
# Build erstellen und deployen
cd web
npm run build
npm start
# Oder PM2, Docker, etc. verwenden
```

### Stripe-Integration

1. **Entwicklungs-Setup:**
   - Stripe Test-Account erstellen
   - Test-Schlüssel holen: `pk_test_...` und `sk_test_...`
   - Webhook-Endpunkt konfigurieren: `your-domain/api/webhooks/stripe`

2. **Produktions-Setup:**
   - Live-Modus in Stripe aktivieren
   - Live-Schlüssel holen: `pk_live_...` und `sk_live_...`
   - TWINT-Zahlungsmethode für Schweizer Kunden hinzufügen
   - Produktions-Webhooks konfigurieren

## 🔧 Fehlerbehebung

### Häufige Probleme

**🚫 Datenbankverbindung fehlgeschlagen:**
```bash
# Infrastrukturdienste prüfen
cd infrastructure && docker compose ps

# Bei Bedarf neustarten
docker compose down && docker compose up -d

# VAULT_ENC_KEY hat 32 Zeichen prüfen
grep VAULT_ENC_KEY .env.local
```

**🚫 Produkte laden nicht:**
```bash
# Prüfen ob Datenbank Produkte hat
docker exec supabase-db psql -U supabase_admin -d postgres -c \
  "SELECT COUNT(*) FROM products;"

# API-Endpunkt prüfen
curl http://localhost:55321/rest/v1/products?apikey=<anon-key>
```

**🚫 JWT-Token-Fehler:**
```bash
# JWT-Schlüssel zwischen Infrastruktur und Template prüfen
# Beide sollten den gleichen JWT_SECRET Wert verwenden
grep JWT_SECRET infrastructure/.env.local
grep JWT_SECRET web/.env.local
```

**🚫 Stripe-Webhook-Fehler:**
```bash
# Webhook-Secret prüfen
grep STRIPE_WEBHOOK_SECRET web/.env.local

# Webhook-Endpunkt testen
curl -X POST http://localhost:3000/api/webhooks/stripe \
  -H "Content-Type: application/json" \
  -d '{"type": "test"}'
```

### Reset-Anweisungen

**Vollständiger Reset (Entwicklung):**
```bash
# Infrastruktur zurücksetzen
cd infrastructure
docker compose down -v
docker compose up -d

# Template zurücksetzen
cd ../template
rm -rf .next node_modules
npm install
npm run dev
```

## 📁 Projektstruktur

```
fcflamingo/
├── README.md                    # Diese Datei
├── CLEANUP.md                   # SaaS-Entfernungs-Dokumentation
├── infrastructure/              # Selbst-gehosteter Supabase-Stack
│   ├── docker-compose.yml     # Vollständige Supabase-Infrastruktur
│   ├── volumes/db/             # Datenbankschema-Dateien
│   └── README.md               # Infrastruktur-Dokumentation
└── web/                        # Next.js Shop-Anwendung
    ├── app/                    # Next.js 15 App Router
    ├── components/             # React-Komponenten
    ├── lib/                    # Hilfsprogramme und Services
    ├── hooks/                  # Benutzerdefinierte React-Hooks
    └── types/                  # TypeScript-Definitionen
```

## 🎯 Funktionen

### Shop-Funktionen
- ✅ **Produktkatalog:** Schweizer Kinderbücher mit Bildern
- ✅ **Warenkorb:** Hinzufügen, entfernen, Mengen-Verwaltung
- ✅ **Checkout:** Stripe-Integration mit Schweizer Optimierungen
- ✅ **Benutzerkonten:** Registrierung, Login, Bestellhistorie
- ✅ **Bestellverwaltung:** Bestellverfolgung und Status-Updates
- ✅ **Mobile Responsive:** Optimiert für alle Bildschirmgrößen

### Schweizer Optimierungen
- ✅ **Währung:** CHF mit Rappen-Präzision (als Ganzzahlen gespeichert)
- ✅ **Zahlungsmethoden:** Stripe + TWINT Unterstützung
- ✅ **Zeitzone:** Europa/Zürich für alle Zeitstempel
- ✅ **Adressformat:** Schweizer Adressvalidierung
- ✅ **Sprache:** Deutsch primär, mehrsprachig bereit

### Technische Funktionen
- ✅ **Datenbank-Zentriert:** Supabase mit Row Level Security
- ✅ **Typsicherheit:** Vollständige TypeScript-Abdeckung
- ✅ **Leistung:** Server Components, Edge-Funktionen
- ✅ **Sicherheit:** JWT-Authentifizierung, RLS-Richtlinien, Eingabevalidierung
- ✅ **Überwachung:** Eingebaute Analytik und Fehler-Tracking

## 📚 Ressourcen

- **[Infrastruktur README](infrastructure/README.md)** - Detaillierte Infrastruktur-Dokumentation
- **[Cleanup-Dokumentation](CLEANUP.md)** - SaaS-Entfernungsprozess
- **[Supabase Docs](https://supabase.com/docs)** - Datenbank- und Authentifizierungs-Dokumentation
- **[Next.js Docs](https://nextjs.org/docs)** - Framework-Dokumentation
- **[Stripe Docs](https://stripe.com/docs)** - Zahlungs-Integration

## 🤝 Beitragen

1. Repository forken
2. Feature-Branch erstellen: `git checkout -b feature/amazing-feature`
3. Änderungen committen: `git commit -m 'Add amazing feature'`
4. Branch pushen: `git push origin feature/amazing-feature`
5. Pull Request öffnen

## 📄 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert - siehe LICENSE-Datei für Details.

---

**🇨🇭 Made in Switzerland for Swiss Children's Books | FCFlamingo 2024**
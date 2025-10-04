---
description: Verschafft Claude einen vollständigen Überblick über das FCFlamingo-Projekt
allowed-tools: ["Read", "Glob", "Grep", "Bash"]
---

# FCFlamingo Projekt-Primer

**Session-Fokus:** $ARGUMENTS

---

## 🎯 Projekt-Essentials (Inline-Kontext)

### Was ist FCFlamingo?
E-Commerce-Plattform für Schweizer Kinderbücher basierend auf dem Buch "FC Flamingo" von Natalie Barros. Ultra-sauberes Admin-only System mit Guest Checkout.

**Kernmerkmale:**
- **Admin-only**: Nur Shop Owner (@fcflamingo.ch) haben Dashboard-Zugriff
- **Guest Checkout**: Kunden kaufen ohne Account (Email-Tracking)
- **Schweiz-optimiert**: CHF/Rappen, TWINT, Europe/Zurich
- **Design-Phase**: Aktive Transformation mit FC Flamingo Charakter-Design

### 🏗️ Tech-Stack (Versionen)

**Frontend:**
- Next.js 15.3.5 (App Router, Server Components, Turbopack)
- React 19.0.0
- TypeScript 5
- Tailwind CSS 4 + shadcn/ui
- Zustand 5 (State Management)

**Backend:**
- Supabase (selbst-gehostet via Docker)
- PostgreSQL 15 + Row Level Security
- GoTrue Auth (JWT-basiert)
- Stripe 18 (Payment + TWINT)

**Infrastruktur:**
- Docker Compose Stack
- Ports: API 55321, Studio 55323
- Vollständig reproduzierbare DB (auto-init via SQL files)

### 🎨 Architektur-Highlights

**Admin-only System:**
- RLS Policy: Nur `auth.uid() IS NOT NULL` + `@fcflamingo.ch` Domain
- Admin User via Supabase Studio erstellt
- Dashboard: `/dashboard/orders` - Alle Bestellungen verwalten

**Guest Checkout:**
- Stripe ohne `customer_creation` (2025 Best Practice)
- Orders: `customer_id = NULL` + `email` für Tracking
- Keine Kunden-Registrierung, keine Login-Flows

**Datenbank-Schema (Ultra-Clean):**
```sql
-- Nur 4 Shop-Tabellen:
public.profiles      -- Admin-Profile (role: 'admin')
public.products      -- Kinderbücher (Preise in Rappen)
public.orders        -- Guest Orders (email-basiert)
public.order_items   -- Bestellpositionen (denormalisiert)
```

**Schweizer Optimierungen:**
- Preise in Rappen (Integer, z.B. 2200 = 22.00 CHF)
- Timezone: Europe/Zurich für alle Timestamps
- JSONB für Schweizer Adressformate

**Design-Konzept:**
- Dual-Atmosphäre: Training (warm/orange) vs Matchday (dunkel/gold)
- Character Colors: Flamingo Orange, Field Green, Stadium Gold
- Hand-drawn Charme: Organische Linien, Tape-Corners, Ein-Bein-Pose

### 📂 Projekt-Struktur

```
fcflamingo/
├── web/                          # Next.js 15 Frontend
│   ├── app/
│   │   ├── (marketing)/         # Public: Shop, Contact
│   │   ├── auth/                # Admin Login (kein Sign-up!)
│   │   ├── dashboard/           # Admin-only: Orders Management
│   │   ├── shop/                # Produktkatalog + Checkout
│   │   └── api/                 # API Routes (Stripe Webhooks)
│   ├── components/              # shadcn/ui + Custom Components
│   ├── lib/                     # Utils, Supabase Client, Actions
│   └── design/                  # 🎨 AKTIV: Design-Guides
│
└── infrastructure/              # Supabase Stack (Docker)
    ├── docker-compose.yml       # Full Stack (Kong, Auth, DB, Studio)
    └── volumes/db/              # Auto-init SQL Schema
        ├── 00-core-schema.sql   # Profiles, Auth, Storage
        └── 99-shop-tables.sql   # Products, Orders, Order Items
```

---

## 🔍 Fokussierte Analyse (Conditional - nur bei $ARGUMENTS)

### Wenn $ARGUMENTS leer → Schnell-Überblick

```bash
# Nur Struktur-Check (minimal tokens)
echo "📂 Projekt-Struktur:"
ls -la
echo -e "\n🌐 Frontend:"
ls -la web/app
echo -e "\n🗄️ Backend:"
ls -la infrastructure/volumes/db
```

**Output:** Kompakte Zusammenfassung (siehe unten)

---

### Wenn $ARGUMENTS enthält "frontend" | "ui" | "design"

**Lies Design-Dokumentation:**
- `design/fc-flamingo-design-guide.md` - Color System, Branding
- `design/FC-Flamingo-Web-Implementierung.md` - Implementierungs-Plan

**Untersuche Frontend-Struktur:**
```bash
ls -la web/app/(marketing)
ls -la web/components
grep -r "flamingo-orange\|field-green" web/app/globals.css
```

**Fokus:**
- Character Colors Integration (CSS Variables)
- Component-Struktur (shadcn/ui customizations)
- Design-System Status (Phase 1 complete, Phase 2 geplant)

---

### Wenn $ARGUMENTS enthält "backend" | "database" | "db"

**Lies DB Schema:**
- `infrastructure/volumes/db/99-shop-tables.sql` - Shop-Tabellen
- `infrastructure/volumes/db/00-core-schema.sql` - Core-Tabellen

**Untersuche RLS Policies:**
```bash
grep -A 5 "CREATE POLICY" infrastructure/volumes/db/99-shop-tables.sql
```

**Fokus:**
- Admin-only RLS Policies verstehen
- Guest Order Schema (customer_id NULL + email)
- Schweizer Optimierungen (Rappen, Timezone)

---

### Wenn $ARGUMENTS enthält "payment" | "stripe" | "checkout"

**Untersuche Stripe Integration:**
```bash
grep -r "customer_creation\|checkout.sessions" web/app/api
grep -r "STRIPE" web/.env.example
```

**Fokus:**
- Guest Checkout ohne Customer Objects
- TWINT Integration vorbereitet
- Webhook-Handling für Orders

---

### Wenn $ARGUMENTS enthält "admin" | "auth" | "dashboard"

**Untersuche Admin-System:**
```bash
ls -la web/app/dashboard
grep -r "@fcflamingo.ch\|role.*admin" infrastructure/volumes/db
```

**Fokus:**
- Admin-only Authentifizierung
- Orders Dashboard Features
- RLS Policy Logic

---

## 📋 Output-Format (Deutsch, prägnant)

Erstelle eine **kompakte Zusammenfassung** (max. 15 Zeilen):

### 🎯 Projekt-Überblick
- **Was:** [1 Satz]
- **Phase:** [Design/Dev/Production]
- **Besonderheit:** [Admin-only System, Guest Checkout]

### 🏗️ Tech-Stack
- **Frontend:** Next.js 15 + React 19 + Tailwind 4
- **Backend:** Supabase (self-hosted) + PostgreSQL + Stripe
- **Special:** [Schweizer Optimierungen]

### 🎨 Fokus dieser Session
- **Bereich:** [$ARGUMENTS oder "Allgemein"]
- **Wichtige Files:** [Liste basierend auf Fokus]
- **Nächste Schritte:** [Was könnte der User brauchen?]

---

**Anweisungen:**
- Alle Antworten auf **Deutsch**
- Ultra-prägnant (keine Romane!)
- Fokus auf praktische Arbeit
- Emojis für Lesbarkeit ✅
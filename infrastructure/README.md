# FCFlamingo Kinderbuch-Shop Infrastruktur

**Self-hosted Supabase Stack für FCFlamingo Schweizer Kinderbuchhandlung**

Ultra-saubere, shop-only Infrastruktur basierend auf NextJS 15 Swiss Starter Kit mit allen SaaS-Komponenten entfernt. Optimiert für den Schweizer Markt mit CHF-Preisen, TWINT-Zahlungen und Europe/Zurich Zeitzone.

## 🚀 Schnellstart

```bash
cd infrastructure
docker compose up -d
```

**Dienste:** [API](http://localhost:55321) | [Studio](http://localhost:55323) | [Analytics](http://localhost:4000)

## 🐳 Dienste-Übersicht

| Dienst | Port | Zweck | Status |
|---------|------|-------|--------|
| **Kong Gateway** | 55321 | API Gateway und Authentifizierung | ✅ Gesund |
| **Supabase Studio** | 55323 | Datenbank-Verwaltungsoberfläche | ✅ Gesund |
| **PostgreSQL** | 5432 | Hauptdatenbank (intern) | ✅ Gesund |
| **Analytics** | 4000 | Nutzungsstatistiken Dashboard | ✅ Gesund |

### Vollständiger Stack
- **Authentifizierung:** GoTrue Auth-Server mit Schweizer Benutzerprofilen
- **Datenbank:** PostgreSQL 15 mit Row Level Security
- **Speicher:** Dateispeicher für Produktbilder
- **Shop-System:** Produkte, Bestellungen, Warenkorb, Checkout (CHF-Preise)
- **Analytics:** Shop-Performance Tracking

## 🔧 Konfiguration

### Umgebungs-Setup
Vorkonfiguriert für FCFlamingo mit benutzerdefinierten Ports zur Konfliktvermeidung:

```bash
# Bereits konfiguriert in .env.local
KONG_HTTP_PORT=55321      # Benutzerdefinierter Port (vermeidet Konflikte)
STUDIO_PORT=55323         # Benutzerdefinierter Port (vermeidet Konflikte)
KONG_HTTPS_PORT=55444     # Benutzerdefinierter HTTPS Port
POOLER_PROXY_PORT_TRANSACTION=55643  # Benutzerdefinierter Pooler Port
```

### Automatisches Setup
Die Infrastruktur erstellt automatisch:
- Ultra-sauberes shop-only Datenbankschema
- Row Level Security Richtlinien für Shop-Daten
- Authentifizierungsflows für Kunden
- Schweizer Kinderbücher Beispieldaten

## 📊 Datenbankschema - Ultra-Sauber Shop-Only

### 🎯 **Saubere Architektur Errungenschaft**
**VORHER:** Komplexes modulares System (5+ Schema-Dateien mit SaaS/Subscription-Komponenten)  
**NACHHER:** **Ultra-Sauberes 2-Schema System**

```sql
-- NUR SHOP-TABELLEN (Keine SaaS-Komponenten)
public.profiles       -- Kundenprofile (erweitert auth.users)
public.products       -- Kinderbücher-Katalog (CHF-Preise)
public.orders         -- Kundenbestellungen (Schweizer Adressen)
public.order_items    -- Bestellpositionen

-- ENTFERNT: subscriptions, plans, billing Tabellen ❌
```

### Schema-Dateien
```
volumes/db/00-core-schema.sql    -- Benutzerprofile, Auth, Speicher
volumes/db/99-shop-tables.sql    -- Schweizer Kinderbuch-Shop Tabellen
```

### Beispieldaten - Schweizer Kinderbücher
```sql
-- Vorgeladene Schweizer Kinderbücher:
'Der kleine Drache Kokosnuss' (1590 Rappen = 15.90 CHF)
'Globi und die Piraten'       (1890 Rappen = 18.90 CHF)  
'Heidi'                       (1290 Rappen = 12.90 CHF)
```

### Schweizer Optimierungen
- **Währung:** Preise gespeichert in Rappen (CHF-Cents)
- **Zeitzone:** Europe/Zurich für alle Zeitstempel
- **Zahlungen:** Vorbereitet für Stripe + TWINT Integration
- **Adressen:** JSONB-Felder für Schweizer Adressformate

## 🔄 100% Reproduzierbare Datenbank

### Automatisches Schema-System
Die FCFlamingo-Datenbank ist **vollständig reproduzierbar** durch Docker PostgreSQL's automatische Initialisierung:

```yaml
# Docker Compose Volume-Mapping (automatische Ausführung)
volumes/db/
├── 00-core-schema.sql       # 🏗️ Basis: profiles, auth, RLS, storage
├── 99-shop-tables.sql       # 🛍️ Shop: products, orders, order_items + Beispieldaten
├── _supabase.sql           # ⚙️ Supabase-interne Strukturen
├── realtime.sql            # 🔴 Realtime-Subscriptions
├── webhooks.sql            # 🪝 Webhook-System
├── roles.sql               # 👥 Datenbank-Rollen
├── jwt.sql                 # 🔐 JWT-Konfiguration
├── logs.sql                # 📊 Analytics & Logs
└── pooler.sql              # ⚡ Connection Pooling
```

### Deterministische Ausführung
**Automatische Reihenfolge:** Docker führt SQL-Dateien alphabetisch aus `/docker-entrypoint-initdb.d/migrations/`:

1. **`00-core-schema.sql`** → Benutzerprofile, RLS-Policies, Storage-Buckets
2. **`97-_supabase.sql`** → Supabase-Metadaten und interne Tabellen
3. **`98-webhooks.sql`** → Webhook-Trigger und Event-System
4. **`99-shop-tables.sql`** → **FCFlamingo Shop-Schema + 5 Schweizer Kinderbücher**

### Garantierte Identität
**Jeder Reset führt zu 100% identischen Resultaten:**

```bash
# Vollständiger Reset (zerstört alle Daten)
docker compose down -v

# Identische Datenbank wiederherstellen
docker compose up -d

# Resultat: Exakt gleiche Datenbank mit gleichen Beispieldaten
```

### Schema-Details

**Core Schema (00-core-schema.sql):**
- `profiles` Tabelle mit Stripe-Integration
- Automatischer User-Creation-Trigger
- RLS-Policies für sichere Datentrennung
- Storage-Buckets für Avatare und Uploads

**Shop Schema (99-shop-tables.sql):**
- `products` → Schweizer Kinderbücher (CHF-Preise, Altersgruppen, ISBN)
- `orders` → Kundenbestellungen (JSONB für Schweizer Adressen)
- `order_items` → Bestellpositionen mit Preis-Snapshot
- **5 Beispielprodukte:** Automatisch eingefügt bei jedem Reset
- **RLS-Policies:** Kunden sehen nur eigene Bestellungen
- **Performance-Indices:** Optimiert für Shop-Queries

### Beispieldaten-Garantie
**Diese 5 Schweizer Kinderbücher sind nach jedem Reset verfügbar:**

```sql
-- Automatisch eingefügte Beispieldaten:
'Der kleine Drache Kokosnuss' (1590 Rappen, Featured)
'Globi und die Piraten'       (1890 Rappen, Featured)
'Heidi'                       (1290 Rappen, Klassiker)
'Die kleine Hexe Lilli'       (1490 Rappen, Fantasy)
'Papa Moll im Zoo'            (1690 Rappen, Familie)
```

### Entwickler-Vorteile
- **Konsistente Testdaten:** Jeder Entwickler hat identische Basis
- **Zero-Config Setup:** Keine manuellen SQL-Imports nötig
- **Sichere Experimente:** Jederzeit reset-bar ohne Datenverlust-Risiko
- **CI/CD Ready:** Perfekt für automatisierte Tests
- **Onboarding:** Neue Entwickler haben sofort funktionierende Daten

## 🛠️ Entwicklungskommandos

### Dienst-Verwaltung
```bash
# FCFlamingo Infrastruktur starten
docker compose up -d

# Dienste stoppen
docker compose down

# Sauberer Reset mit frischem Schema
docker compose down -v && docker compose up -d

# Logs anzeigen
docker compose logs -f [dienst-name]

# Dienst-Status
docker compose ps
```

### Datenbankzugriff
```bash
# PostgreSQL CLI
docker exec -it supabase-db psql -U supabase_admin -d postgres

# Shop-Tabellen prüfen
docker exec supabase-db psql -U supabase_admin -d postgres -c \
  "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';"

# Schweizer Bücher anzeigen
docker exec supabase-db psql -U supabase_admin -d postgres -c \
  "SELECT name, author, price FROM products LIMIT 5;"
```

### Gesundheitsprüfungen
```bash
# API Gateway (Kong)
curl -I http://localhost:55321/health

# Studio-Oberfläche
curl -I http://localhost:55323

# Datenbankverbindung
docker exec supabase-db psql -U supabase_admin -d postgres -c \
  "SELECT 'FCFlamingo DB Online!' as status;"
```

## 🔍 Dienst-Details

### Kong API Gateway (Port 55321)
- Leitet Anfragen an Shop-APIs weiter
- Verwaltet Kundenauthentifizierung
- JWT-basiertes Session-Management
- CORS konfiguriert für Shop-Frontend

### Supabase Studio (Port 55323)  
- Shop-Datenbank-Verwaltung
- Produktkatalog-Editor
- Kundendaten-Browser
- Bestellverwaltung-Oberfläche

### PostgreSQL Datenbank
- Ultra-sauberes shop-only Schema
- Schweizer-optimierte Datentypen
- Row Level Security für Kundendaten
- Automatische Sicherung via Docker Volumes

## 🛍️ Shop-System Features

### Produktverwaltung
- Schweizer Kinderbücher-Katalog
- Mehrsprachige Unterstützung (DE, FR, IT)
- Altersgruppen-Kategorisierung
- Lagerbestandsverfolgung

### Bestellabwicklung
- Warenkorb-Funktionalität
- Schweizer Adressvalidierung
- CHF-Preise mit Rappen-Genauigkeit
- Bestellhistorie für Kunden

### Kundenverwaltung
- Profilsystem mit Stripe-Integration
- Authentifizierung via Supabase Auth
- Bestellhistorie und Präferenzen
- Datenschutzkonforme Datenverarbeitung

## 🚨 Fehlerbehebung

### Häufige Probleme

**Dienste starten nicht:**
```bash
# Benutzerdefinierte Ports auf Verfügbarkeit prüfen
netstat -tulpn | grep :55321
netstat -tulpn | grep :55323

# Neustart mit sauberer Basis
docker compose down -v
docker compose up -d
```

**Schema-Fehler beim Start:**
```bash
# Schema-Dateien auf Sauberkeit prüfen
ls -la volumes/db/*.sql

# Nur Shop-Tabellen existieren überprüfen
docker exec supabase-db psql -U supabase_admin -d postgres -c "\dt"
```

**Fehlende Beispielbücher:**
```bash
# Schweizer Bücher geladen überprüfen
docker exec supabase-db psql -U supabase_admin -d postgres -c \
  "SELECT COUNT(*) FROM products;"
```

### Datenbank-Reset
```bash
# Vollständiger sauberer Reset
docker compose down -v
docker system prune -f  
docker compose up -d

# Auf Initialisierung warten (60 Sekunden)
sleep 60
docker compose ps
```

## 🔐 Sicherheit

### Shop-spezifische Sicherheit
- **Kundendaten:** RLS-Richtlinien schützen persönliche Informationen
- **Bestellungen:** Kunden können nur ihre eigenen Bestellungen sehen
- **Produkte:** Öffentlicher Lesezugriff für Katalog-Browsing
- **Zahlungen:** Stripe-Integration mit sicherer Tokenisierung

### Row Level Security Richtlinien
```sql
-- Kunden können nur ihre eigenen Bestellungen sehen
CREATE POLICY "Users can view own orders" ON orders
  FOR SELECT USING (auth.uid() = customer_id);

-- Produkte sind öffentlich einsehbar
CREATE POLICY "Products are viewable by everyone" ON products
  FOR SELECT USING (active = TRUE);
```

## 📈 Überwachung

### Shop-Metriken
```bash
# Kundenregistrierungen
docker exec supabase-db psql -U supabase_admin -d postgres -c \
  "SELECT COUNT(*) as customers FROM profiles;"

# Produktkatalog-Grösse
docker exec supabase-db psql -U supabase_admin -d postgres -c \
  "SELECT COUNT(*) as products FROM products WHERE active = TRUE;"

# Bestellungen heute
docker exec supabase-db psql -U supabase_admin -d postgres -c \
  "SELECT COUNT(*) as orders_today FROM orders WHERE DATE(created_at) = CURRENT_DATE;"
```

### Performance-Überwachung
- **Studio Dashboard:** Echtzeit Shop-Metriken
- **Analytics:** Kundenverhalten-Tracking
- **Container-Gesundheit:** Docker Stats und Logs

## 🚀 Produktions-Überlegungen

### FCFlamingo Produktions-Checkliste
1. **SSL/TLS:** HTTPS-Terminierung konfigurieren
2. **Domain:** fcflamingo.ch Routing einrichten
3. **E-Mail:** SMTP für Bestellbestätigungen konfigurieren
4. **Zahlungen:** Stripe + TWINT Integration finalisieren
5. **Backup:** Datenbank-Backup-Strategie
6. **CDN:** Produktbild-Lieferung-Optimierung

### Skalierung für Schweizer Markt
- **Connection Pooling:** Verwaltet durch Supavisor
- **Mehrsprachig:** Datenbank bereit für DE/FR/IT
- **Regionale Lieferung:** Schweizer Versand-Integration
- **Performance:** CDN für statische Assets

---

## 🎯 FCFlamingo Status

**🧹 Cleanup Status:** Phase 1 Abgeschlossen - Ultra-Saubere Datenbank-Foundation  
**📊 Schema:** Nur Shop (Keine SaaS-Komponenten)  
**🇨🇭 Schweiz-Bereit:** CHF, TWINT, Europe/Zurich Zeitzone  
**🚀 Produktion:** Bereit für Härtung und Deployment  
**📚 Nächste Phase:** Frontend SaaS-Komponenten-Entfernung

**Gesamttabellen:** 4 (profiles, products, orders, order_items)  
**Entfernte Tabellen:** subscriptions, plans, billing (SaaS-Cleanup abgeschlossen)  
**Beispieldaten:** Schweizer Kinderbücher geladen und validiert  

---

**Support:** [Supabase Docs](https://supabase.com/docs) | [FCFlamingo Cleanup Guide](../CLEANUP.md)
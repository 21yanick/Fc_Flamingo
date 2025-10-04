# FC Flamingo - Website-Struktur & Storytelling-Konzept
*Strategisches Planungsdokument | Stand: Oktober 2025*

---

## 🎯 Kern-Strategie

**Format:** One-Pager mit Storytelling-Flow
**USP:** Interaktives Kinderbuch - Kind entscheidet die Story
**Dual-Theme:** Training Mode (Light) ⚽ Matchday Mode (Dark) 🏆
**Ton:** Professionell-einladend, warm, nicht zu pushy

### Storytelling-Kurve
```
Hook → Kontext → Problem → Team → Mystery → Peak → CTA → Community → Trust
```

---

## 🌓 Dual-Atmosphäre Konzept

### Training Mode (Light)
- **Stimmung:** Vormittag, Trainingsplatz, warm, entspannt
- **Farben:** `training-bg` (warmes Papier), `field-green`, `flamingo-orange`
- **Narrative:** "Der Weg zum Ziel" - Vorbereitung, Lernen, Teamgeist

### Matchday Mode (Dark)
- **Stimmung:** Abend, Stadion, Flutlicht, Spannung
- **Farben:** `matchday-bg` (dunkles Violett), `stadium-gold`, helleres Orange
- **Narrative:** "Der große Moment" - Wettkampf, Action, Triumph

**Technisch:** Gleiche Sections, unterschiedliche Atmosphäre via CSS-Filter + Theme-Variables

---

## 📐 Sections-Struktur (10 Sections)

### **1. HERO** ✅ (Bereits implementiert)
**Funktion:** Hook + Promise
**Storytelling Beat:** *"Werde Teil dieser Geschichte!"*

**Content:**
- Headline: "Werde Trainer von FC Flamingo!"
- Subline: "In diesem interaktiven Fußballabenteuer entscheidest du selbst, wie die Saison verläuft!"
- Tagline: "Glaub an dich, so kannst du im Leben alles erreichen!"
- CTA: "Starte dein Abenteuer"

**Grafiken:**
- **Training Mode:** `hero-training-bg.jpg` (V-2.jpg)
- **Matchday Mode:** `hero-darkmode-bg.png`
- **Beide Modi:** `flamingo-character.png` (rechts), `Logo_Fc_Flamingo.png` (links)

**Dual-Theme:**
```tsx
// Conditional Background
src={isDark ? "/images/hero-darkmode-bg.png" : "/images/hero-training-bg.jpg"}
```

---

### **2. DIE MISSION**
**Funktion:** Kontext + Ziel etablieren
**Storytelling Beat:** *"Das ist deine Aufgabe..."*

**Content:**
```
"Deine Mission:"
Führe den FC Flamingo erstmals zum Schweizer Meistertitel!

Der neue Trainer Mister King braucht deine Hilfe.
Die Flamingos haben Potenzial – aber auch eine seltsame Angewohnheit...
```

**Grafiken:**
- `Cover.png` (zentral, groß, subtle rotation)
- lieber mannschaftsfoto

**Dual-Theme:**
- **Training:** Normal, warm
- **Matchday:** Mit Glow-Effekt

**Visuelle Gestaltung:**
- Cover zentral präsentiert
- Minimalistischer Text
- Background: `var(--training-bg)` / `var(--matchday-bg)`

---

### **3. DAS PROBLEM**
**Funktion:** Humor + Empathie + Challenge
**Storytelling Beat:** *"Hier ist die Sache..."*

**Content:**
```
"Die größte Herausforderung deiner Trainerkarriere:"

Die Flamingos stehen lieber auf einem Bein
anstatt zweibeinig Tore zu erzielen!

Typisch Flamingos halt! 🦩

Mister King verzweifelt fast an dieser seltsamen Angewohnheit.
Kannst du das Team zum Meistertitel führen?
```

**Grafiken:**
- `Mannschaftsfoto.jpg` (mit Tape-Corners!)
- lieber mister king mit flamingos bild

**Dual-Theme:**
- **Training:** Gelb/Orange Tape-Corners, normale Sättigung
- **Matchday:** Gold Tape-Corners, leicht entsättigt

**Visuelle Gestaltung:**
- Mannschaftsfoto zentral, Polaroid-Style
- Tape-Corner Component (reusable SVG)
- Text locker formuliert

---

### **4. DEIN TEAM**
**Funktion:** Character Connection + Identifikation
**Storytelling Beat:** *"Das sind deine Spieler..."*

**Content:**
- **Fizzi:** "Der Captain – Führungsstark, aber steht gern auf einem Bein..."
- **Zis:** "Der durchgeknallte Papagei aus Frankreich – Genie oder Wahnsinn?"
- **Lilly:** "Die schüchterne, naive, liebe Pinguin-Torhüterin"
- **Mister King:** "Dein verzweifelter Co-Trainer – er braucht deine Hilfe!"

**Grafiken:**
- `Vorsatz.jpg` (Fußballfeld - Background, full-width)
- `Charaktere-1.jpg` (4 Portraits: Fizzi, Zis, Lilly, Mister King)

**Dual-Theme:**
```css
/* Training: Helles Feld */
.team-section {
  background-image: url('/images/vorsatz.jpg');
}

/* Matchday: Feld mit Abend-Overlay */
.dark .team-section::before {
  background: rgba(58, 53, 83, 0.7); /* matchday-bg overlay */
}
```
- **Training:** Helle Character-Borders (weiß/grün)
- **Matchday:** Gold Character-Borders (Spotlight-Effekt)

**Visuelle Gestaltung:**
- Kreisförmige Portraits
- Organisch platziert (nicht starres Grid)
- Mobile: 2x2 Grid oder horizontal scroll

---

### **5. DAS GEHEIMNIS**
**Funktion:** Mystery + Spannung + Interaktivität betonen
**Storytelling Beat:** *"Aber dann passiert etwas Unerwartetes..."*

**Content:**
```
"Dann ändert sich alles..."

✉️ Ein geheimnisvoller Brief sorgt für Aufsehen
⚡ Zwei spektakuläre Neuzugänge wirbeln alles durcheinander
🔥 Unerwartete Wendungen warten

In diesem interaktiven Fußballabenteuer entscheidest du
an jedem Wendepunkt:

→ Welche Taktik wählt das Team?
→ Wie reagieren sie auf Rückschläge?
→ Wird das Team Schweizer Meister?

Deine Entscheidungen bestimmen die Geschichte!
```

**Grafiken:**
- `K5-1.jpg` (Teamwork) ODER `K7-1.jpg` (Action/Spannung)
- darkmode: dunkles bild pokalregal / lightmode: kabine brief lesen

**Dual-Theme:**
- **Training:** Heller, Planungs-Fokus
- **Matchday:** Dramatischer, Action-Fokus

---

### **6. DER TRIUMPH**
**Funktion:** Emotional Peak + Motivation
**Storytelling Beat:** *"DAS könnte dein Triumph sein!"*

**Content:**
```
"Führe sie zum Triumph!"

🏆 Der goldene Pokal
🎊 Konfetti-Regen
⚽ Der Meistertitel

Wird das deine Geschichte?

"Glaub an dich, so kannst du im Leben alles erreichen!"
```

**Grafiken:**
- `K13-1.jpg` (Konfetti, Pokal, Jubel - Full-width, Hero-size)

**Dual-Theme:**
```css
/* Training: Heller, fröhlicher */
.triumph-section img {
  filter: brightness(1.1) saturate(1.2);
}

/* Matchday: Dramatischer, Konfetti glitzert */
.dark .triumph-section img {
  filter: brightness(0.9) saturate(1.4) contrast(1.1);
}
```

**Visuelle Gestaltung:**
- K13-1.jpg dominant, full bleed
- Text overlay mit Gradient
- Maximal emotional, minimal Text

---

### **7. JETZT SPIELEN**
**Funktion:** Shop/Kauf + Product Info
**Storytelling Beat:** *"Starte dein Abenteuer – jetzt!"*

**Content:**
```
┌────────────────┐   ┌──────────────────────────┐
│                │   │ FC Flamingo              │
│  [Cover.png]   │   │ Interaktives             │
│                │   │ Fußballabenteuer         │
│                │   │                          │
│                │   │ In dieser Geschichte     │
│                │   │ entscheidest du, wie     │
│                │   │ die Saison verläuft!     │
│                │   │                          │
│                │   │ ✓ Interaktiv             │
│                │   │ ✓ Ab 4 Jahren            │
│                │   │ ✓ 48 Seiten Hardcover    │
│                │   │ ✓ Professionelle Aquarelle│
│                │   │ ✓ Made in Switzerland 🇨🇭 │
│                │   │                          │
│                │   │ CHF 22.00                │
│                │   │ [Jetzt kaufen]           │
└────────────────┘   └──────────────────────────┘
```

**Grafiken:**
- `Cover.png` (als Produkt)

**Dual-Theme:**
- **Training:** Button `fc-button-training` (field-green), warmer Background
- **Matchday:** Button `fc-button-matchday` (stadium-gold), dunkler Background

**Visuelle Gestaltung:**
- Clean Product Card (shadcn/ui style)
- Cover links, Details rechts
- Side-by-side Desktop, stacked Mobile

---

### **8. INSTAGRAM GEWINNSPIEL**
**Funktion:** Community-Building + Alternative für Nicht-Käufer
**Storytelling Beat:** *"Werde Teil der Community!"*

**Content:**
```
"Spiele mit FC Flamingo!"

Wöchentliche Challenges & Gewinnspiele auf Instagram
Rätselspaß für Kinder, tolle Preise zu gewinnen!

[Instagram Icon] Jetzt mitmachen
```

**Grafiken:**
- Kleine Deko-Elemente (Ball, Flamingo-Icon)
- Instagram Icon

**Dual-Theme:**
- **Training:** Heller Background, farbige Icons
- **Matchday:** Dunkler Background, Gold-Akzente

**Visuelle Gestaltung:**
- Leicht, verspielt
- FlamingoButton (secondary variant)
- Link zu Instagram-Profil

---

### **9. ÜBER UNS**
**Funktion:** Trust Building + Persönliches
**Storytelling Beat:** *"Wer steckt dahinter?"*

**Content:**
```
"Das Team hinter FC Flamingo"

[Portrait Links - Blauer Hintergrund]
Natalie Barros – Autorin
[Kurze Bio, 2-3 Sätze]

[Portrait Rechts - Peach Hintergrund]
[Name] – Illustratorin
[Kurze Bio, 2-3 Sätze]
```

**Grafiken:**
- `Portraits.jpg` (split in 2 Bilder: Autorin + Zeichnerin)

**Dual-Theme:**
- **Training:** Gelb/Orange Tape-Corners
- **Matchday:** Gold Tape-Corners
- Portraits selbst bleiben identisch (Menschen sind Menschen!)

**Visuelle Gestaltung:**
- Side-by-side Desktop, stacked Mobile
- Polaroid-Style mit Tape-Corners
- Warm, persönlich, authentisch

---

### **10. KONTAKT & NEWSLETTER**
**Funktion:** Verbindung + Newsletter
**Storytelling Beat:** *"Bleib in Verbindung!"*

**Content:**
```
"Bleib in Verbindung!"

📧 Newsletter
"Erfahre als Erstes von neuen Geschichten"
[Email Input] [Anmelden]

✉️ Kontakt
info@fcflamingo.ch

[Social Media Icons - falls vorhanden]
```

**Grafiken:**
- Keine spezifischen (evtl. kleine Icons)

**Dual-Theme:**
- Standard Light/Dark Styling

**Visuelle Gestaltung:**
- Minimal, clean
- FlamingoButton für Newsletter-CTA

---

### **Footer**
- Impressum, Datenschutz, AGB
- Copyright
- "Made with ❤️ in Switzerland"

---

## 🎨 Grafiken-Übersicht

### Gesamt: 12 Placements, 11 Unique Images

| # | Grafik | Section | Training | Matchday |
|---|--------|---------|----------|----------|
| 1 | hero-training-bg.jpg | Hero | ✅ Zeigen | ❌ Hide |
| 2 | hero-darkmode-bg.png | Hero | ❌ Hide | ✅ Zeigen |
| 3 | flamingo-character.png | Hero | Normal | Mit Glow |
| 4 | Logo_Fc_Flamingo.png | Hero | Normal | Normal |
| 5 | Cover.png | Mission | Normal | Mit Glow |
| 6 | Mannschaftsfoto.jpg | Problem | Normal | Filter |
| 7 | Vorsatz.jpg | Team | Hell | Dark Overlay |
| 8 | Charaktere-1.jpg | Team | Weiß Border | Gold Border |
| 9 | K5-1.jpg / K7-1.jpg | Geheimnis | Normal | Dramatic |
| 10 | K13-1.jpg | Triumph | Bright | Dramatic |
| 11 | Cover.png (reuse) | Shop | Normal | Mit Glow |
| 12 | Portraits.jpg | Über uns | Orange Tape | Gold Tape |

---

## 🛠️ Technische Hinweise

### Theme Toggle Enhancement
```tsx
// Aktuell: Sun/Moon Icons
// Neu: FC Flamingo Style
import { Target, Zap } from "lucide-react"

<Target /> {/* ⚽ Training Mode */}
<Zap />    {/* 🏆 Matchday Mode */}
```

### CSS-Filter Strategie
```css
/* Training Mode: Original */
.section-image {
  filter: brightness(1) saturate(1);
}

/* Matchday Mode: Dramatischer */
.dark .section-image {
  filter: brightness(0.85) saturate(1.3) contrast(1.1);
}
```

### Background Overlays
```css
/* Character Field - Vorsatz.jpg */
.team-section {
  background-image: url('/images/vorsatz.jpg');
}

.team-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: transparent; /* Training */
}

.dark .team-section::before {
  background: rgba(58, 53, 83, 0.7); /* Matchday */
}
```

### Theme-Based Button Variants
```tsx
// Shop CTA
<FlamingoButton
  variant={isDark ? "matchday" : "training"}
>
  Jetzt kaufen
</FlamingoButton>
```

---

## 📊 Informations-Hierarchie

### Must-See (Conversion Critical)
1. **Hero** - Hook & Promise
2. **Das Problem** - Humor & Sympathie
3. **Der Triumph** - Emotional Peak
4. **Shop** - Conversion

### Should-See (Story Building)
5. **Mission** - Kontext
6. **Team** - Character Connection
7. **Geheimnis** - Spannung

### Nice-to-See (Community & Trust)
8. **Instagram** - Community
9. **Über uns** - Trust
10. **Kontakt** - Connection

---

## ✨ Design-Prinzipien

### DO ✅
- Watercolor-Charme (echte Illustrationen nutzen)
- Hand-drawn Elemente (Tape-Corners, organische Formen)
- Professionell aber warm
- Minimal aber impactful
- Mobile-First Design

### DON'T ❌
- Keine komplexen Animationen (Ablenkung)
- Nicht zu kindhaft (Eltern kaufen!)
- Nicht überladen (KISS-Prinzip)
- Nicht zu generisch (USP betonen)
- Nicht zu viel "DU/DEIN" (professionell-einladend)

---

## 🎯 Content Tone-of-Voice

### Richtig ✅
- "Werde Trainer und entscheide selbst"
- "In diesem Buch bestimmst du den Verlauf"
- "Starte dein Abenteuer"

### Zu pushy ❌
- "DU ENTSCHEIDEST!"
- "WERDE TRAINER!"
- "DEINE Geschichte!"

**Balance:** Professionell-einladend, warm, empowerment ohne Druck

---

## 📋 Asset-Preparation Checklist

### Bereits vorhanden
- ✅ hero-training-bg.jpg (V-2.jpg)
- ✅ hero-darkmode-bg.png
- ✅ flamingo-character.png (Schmutztitel2.png)
- ✅ Logo_Fc_Flamingo.png
- ✅ Cover.png
- ✅ Mannschaftsfoto.jpg
- ✅ Vorsatz.jpg
- ✅ Charaktere-1.jpg
- ✅ K5-1.jpg / K7-1.jpg
- ✅ K13-1.jpg
- ✅ Portraits.jpg

### Zu erstellen
- 🔧 Portraits.jpg → Split in 2 separate PNGs (Autorin + Zeichnerin)
- 🔧 Charaktere-1.jpg → Optional: Einzelne Character-PNGs freistellen
- 🔧 Tape-Corner SVG Component (reusable)

### Optional
- WebP-Conversion für Performance
- Responsive Image Sizes generieren

---

## 🚀 Development Workflow

### Phase 1: Content Update (1-2h)
- Hero Text anpassen ("Werde Trainer...")
- CTA Buttons updaten ("Starte dein Abenteuer")
- Product Card: Interaktivität betonen

### Phase 2: Neue Sections (8-12h)
- Mission Section (Cover-Präsentation)
- Das Problem (Mannschaftsfoto + Tape-Corners)
- Dein Team (Character Field + Vorsatz.jpg)
- Das Geheimnis (Mystery + Text)
- Der Triumph (K13-1.jpg Emotional Peak)
- Instagram Gewinnspiel
- Über uns (Portraits + Tape-Corners)

### Phase 3: Dual-Theme Polish (3-4h)
- CSS-Filter für alle Sections
- Theme-based Button Variants
- Background Overlays
- Testing Light/Dark Mode
- Mobile Optimization

**Total MVP: 12-18h**

---

## 📝 Notizen

### Warum diese Struktur funktioniert
1. **Emotionale Kurve:** Hook → Problem → Team → Mystery → Peak → CTA
2. **Dual-Theme Storytelling:** Training (Vorbereitung) ↔ Matchday (Showtime)
3. **Visual Variety:** Jede Section hat eigenen Stil
4. **Asset-Effizienz:** 11 unique Images, smart reused
5. **Conversion-Optimiert:** Emotional Peak direkt vor Shop

### Kern-USPs betonen
- ✅ **Interaktiv** (Kind entscheidet)
- ✅ **Werte** (Glaub an dich!)
- ✅ **Lokal** (Schweizer Meistertitel)
- ✅ **Qualität** (Professionelle Aquarelle)

---

*Dieses Dokument ist die strategische Grundlage für die FC Flamingo Website-Entwicklung.*

**Stand: Oktober 2025** | **Status: Planung abgeschlossen** | **Next: Implementation**

# FC Flamingo - Web Design Implementierung
*Praktisches Arbeitsdokument für die Umsetzung | Stand: Oktober 2025*

## 🎯 Ziel & Philosophie

**Mission**: Das Kinderbuch-Erlebnis von FC Flamingo ins Web übertragen ohne die Magie zu verlieren.

**KISS & YAGNI Ansatz**: Schrittweise Transformation der bestehenden solid technischen Basis mit FC Flamingo Charakter.

## 💡 Design-Philosophie (Oktober 2025)

### **Echte Illustrationen > Library-Imitationen**

Nach gründlicher Analyse und Research haben wir uns für einen **Custom Component Approach** entschieden:

**Warum KEINE Hand-drawn UI Libraries?**
- **Rough.js**: Abandoned (2+ Jahre keine Commits, letzter Release 2022)
- **@recklyss/hand-drawn-ui**: React 19 incompatible, unmaintained
- **Wired-Elements**: Macht "wireframe" Look, nicht "watercolor" Stil
- **Generelles Problem**: Alle Libraries imitieren hand-drawn, wir haben ECHTE professionelle Aquarell-Illustrationen!

**Unsere Strategie:**
✅ **Nutze echte Illustrationen als Design-Elemente** (V-2.jpg, Schmutztitel.jpg, etc.)
✅ **Custom SVG Components** für Tape-Corners, Watercolor-Effekte, organische Borders
✅ **CSS-first Approach** für Performance und volle Kontrolle
✅ **KI-Assets ergänzend** für Texturen/Pattern, nicht als Ersatz

**Vorteile:**
- 🎨 **Authentisch**: Echter Buch-Stil statt Generic-Library-Look
- ⚡ **Performance**: 0kB Library-Overhead, nur was wir brauchen
- 🔧 **Kontrolle**: Keine Library-Abhängigkeiten, wartbar
- 🚀 **Einzigartig**: Professionelles, maßgeschneidertes Design

---

## 🎨 Visuelle Analyse: Was das Buch uns zeigt

### **Dual-Atmosphäre Konzept** (Kernerkenntniss aus Cover.png)
```css
/* Trainingsplatz (Links): Ruhig, warm, konzentriert */
Training: Sanfte Grüntöne, warme Oranges, entspannte Stimmung

/* Spieltag (Rechts): Dynamisch, kühl, aufregend */
Matchday: Dunkle Blues, glänzende Goldtöne, Stadium-Atmosphere
```

### **Charaktere & Persönlichkeiten** (Charaktere-1.jpg, Charaktere-2.jpg)
- **Kreisförmige Portraits** mit einheitlicher grüner Hintergrund-Textur
- **Individuelle Persönlichkeiten**: Flamingo mit Hut, bunter Papagei, Pinguin, Menschen
- **Warme, einladende Gesichtsausdrücke**
- **Konsistente Größenverhältnisse** zwischen Tieren und Menschen

### **Hand-gezeichneter Charme** (Schmutztitel.jpg)
- **Ein-Bein-Pose**: Das ikonische Flamingo-Merkmal als Wiederkehrungselement
- **Organische Linienführung**: Nichts ist perfekt gerade
- **Natürliche Proportionen**: Authentisch, nicht geometrisch

### **Team-Dynamik** (Mannschaftsfoto.jpg, K1-1.jpg, K2-1.jpg)
- **Tape-Corners**: Bild-Rahmen mit Klebeband-Effekt
- **Gruppendynamik**: Chaos trifft Organisation (Trainer vs. Flamingos)
- **Emotionale Bandbreite**: Von Frustration bis Triumph

### **Sieges-Stimmung** (K13-1.jpg)
- **Goldener Konfetti-Regen**: Feier-Atmosphäre
- **Stadium-Kulisse**: Publikum, Flutlicht, Atmosphäre
- **Gemeinschaftsgefühl**: Alle zusammen beim Erfolg

---

## 🏗️ Web-Implementierung: Systematische Umsetzung

### **Phase 1: Foundation (Low-Risk, 8 Stunden)**

#### **1.1 Branding & Content (2 Stunden)**
```typescript
// siteConfig Update
export const siteConfig = {
  name: "FC Flamingo",
  description: "Die Geschichte der Fußball-Flamingos, die vom ersten Schweizer Meistertitel träumen",
  tagline: "Glaub an dich, so kannst du im Leben alles erreichen!",
  currency: "CHF",
  region: "swiss",
  locale: "de-CH",
  contact: {
    email: "info@fcflamingo.ch",
    company: "FC Flamingo Kinderbuch",
  },
}
```

#### **1.2 Farb-Palette aus Buchanalyse (3 Stunden)**
```css
:root {
  /* Flamingo Hauptfarben (aus Cover & Charakteren) */
  --flamingo-orange: oklch(0.66 0.15 35);      /* #fe753e - Hauptcharakter */
  --flamingo-peach: oklch(0.77 0.12 45);       /* #fba284 - Warme Akzente */
  --flamingo-yellow: oklch(0.85 0.15 75);      /* #ffe173 - Highlights */

  /* Feld & Natur (aus Spielszenen) */
  --field-green: oklch(0.68 0.12 140);         /* #94d35e - Trainingsrasen */
  --field-dark: oklch(0.58 0.12 140);          /* #5c9b4c - Linien & Details */

  /* Atmosphären-Farben (aus Dual-Konzept) */
  --training-bg: oklch(0.96 0.02 45);          /* #fdecdc - Warmes Papier */
  --matchday-bg: oklch(0.25 0.05 260);         /* #3a3553 - Abendstimmung */
  --stadium-gold: oklch(0.75 0.15 75);         /* #ecb41f - Flutlicht */

  /* Character Colors (aus Portraits) */
  --character-bg: oklch(0.85 0.08 140);        /* Grüner Portrait-Hintergrund */
  --penguin-blue: oklch(0.25 0.05 260);        /* Lilly's Farbe */
  --parrot-rainbow: linear-gradient(45deg, #e53013, #ecb41f, #67aefe);
}
```

#### **1.3 Hero Section Content (3 Stunden)**
```jsx
// (marketing)/page.tsx Hero Update
const heroContent = {
  title: "FC Flamingo",
  subtitle: "Die Flamingos träumen vom ersten Schweizer Meistertitel, doch ihre Vorliebe auf einem Bein zu stehen, bringt Trainer Mister King zur Verzweiflung...",
  cta: "Buch entdecken",
  ctaLink: "/shop",
  highlight: "Glaub an dich, so kannst du im Leben alles erreichen!"
}
```

### **Phase 2: Hand-drawn UI + Theme Enhancement (8-12 Stunden)**

#### **2.1 Hand-drawn Button Fix (CSS-Only Approach) (3 Stunden)**
```typescript
// components/fc-flamingo/css-hand-drawn/flamingo-button.tsx
// CSS-only implementation als Ersatz für broken @recklyss/hand-drawn-ui

export function FlamingoButton({ variant = "training", size = "md", children, ...props }) {
  const variantClasses = {
    training: "fc-button-training",
    matchday: "fc-button-matchday",
    primary: "fc-button-primary"
  }

  return (
    <button
      className={`fc-flamingo-button ${variantClasses[variant]} ${sizeClasses[size]}`}
      {...props}
    >
      {children}
    </button>
  )
}
```

```css
/* globals.css Addition */
.fc-flamingo-button {
  border-radius: 12px 8px 14px 10px;
  border: 3px solid;
  font-family: 'Comic Sans MS', cursive, sans-serif; /* Hand-drawn feel */
  font-weight: 600;
  transform: rotate(-0.8deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
}

.fc-button-training {
  border-color: var(--field-green);
  background: var(--field-green);
  color: white;
}

.fc-button-matchday {
  border-color: var(--stadium-gold);
  background: var(--stadium-gold);
  color: var(--primary-foreground);
}
```

#### **2.2 Training/Matchday Theme System (4 Stunden)**
```typescript
// theme/fc-flamingo-theme-provider.tsx
type FCFlamingoTheme = 'training' | 'matchday' | 'light' | 'dark'

const flamingoThemeConfig = {
  training: {
    '--theme-bg': 'var(--training-bg)',
    '--theme-accent': 'var(--field-green)',
    '--theme-mood': 'calm'
  },
  matchday: {
    '--theme-bg': 'var(--matchday-bg)',
    '--theme-accent': 'var(--stadium-gold)',
    '--theme-mood': 'exciting'
  }
}
```

#### **2.3 Theme Toggle Update (2 Stunden)**
```jsx
// components/theme/fc-flamingo-theme-toggle.tsx
// Sun/Moon → Soccer Ball/Stadium Icons (Lucide React)
import { Sun, Moon, Zap, Target } from "lucide-react"

// Training = Target Icon (Zielscheibe)
// Matchday = Zap Icon (Energie)
// Einfache Icon-Animation, keine komplexe Ball-Animation
```

#### **2.4 Typography Integration (1 Stunde)**
```css
/* Ohne @recklyss/hand-drawn-ui dependency */
:root {
  --font-headline: 'Georgia', serif;
  --font-body: 'Helvetica Neue', sans-serif;
  --font-hand-drawn: 'Comic Sans MS', cursive, sans-serif; /* Fallback für hand-drawn */
  --font-accent: 'Times New Roman', serif;
}
```

### **Phase 3: Component Enhancement (16 Stunden)**

#### **3.1 Character Field Component (8 Stunden)**
```jsx
// Basierend auf Charaktere-*.jpg Portraits
<CharacterField>
  - Kreisförmige Charaktere mit grünem Hintergrund
  - Hover: Sprechblase mit Character-Info
  - Mobile: Horizontal scrollbar
  - Layout: Organische Anordnung, nicht Grid
  - Interaktion: Click für Character-Details
</CharacterField>
```

#### **3.2 Advanced Hand-Drawn Components (Optional - Rough.js) (6 Stunden)**
```bash
# Optional: Für mehr Authenticity später
npm install roughjs  # Nur wenn CSS-only zu "fake" aussieht
```

```typescript
// components/fc-flamingo/rough-hand-drawn/flamingo-button.tsx
// Echte hand-drawn Effekte mit Rough.js (falls CSS-only nicht ausreicht)

import { useEffect, useRef } from 'react'
import rough from 'roughjs'

export function RoughFlamingoButton({ variant, children }) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return
    const rc = rough.svg(svgRef.current)
    const colors = {
      training: 'var(--field-green)',
      matchday: 'var(--stadium-gold)'
    }
    // Jede Renderung unique durch randomness
    const rect = rc.rectangle(2, 2, 196, 46, {
      fill: colors[variant],
      roughness: 1.5,
      fillStyle: 'solid'
    })
    svgRef.current.appendChild(rect)
  }, [variant])

  return (
    <div className="relative">
      <svg ref={svgRef} width="200" height="50" className="absolute inset-0" />
      <div className="relative z-10 px-4 py-2">{children}</div>
    </div>
  )
}
```

**Nur implementieren wenn:**
- CSS-only zu "fake" aussieht
- User-Feedback verlangt mehr Authenticity
- Phase 2 erfolgreich abgeschlossen

#### **3.3 Navigation Enhancement (4 Stunden)**
```jsx
// Header mit FC Flamingo Branding
<Navigation>
  - Logo: Flamingo silhouette mit subtle wobble
  - Menu Items: Hand-writing underline bei hover
  - Mobile: Hamburger → Fußball transition
  - Background: Semi-transparent mit backdrop-blur
</Navigation>
```

---

## 📊 Implementierungs-Matrix

### **Prioritäts-Level (Revidiert September 2025)**
| Component | Effort | Impact | Risk | Phase | Status |
|-----------|--------|--------|------|-------|--------|
| **Branding Update** | 2h | High | Low | Phase 1 | ✅ Complete |
| **Color Palette** | 3h | High | Low | Phase 1 | ✅ Complete |
| **Hero Content** | 3h | Medium | Low | Phase 1 | ✅ Complete |
| **CSS Hand-Drawn Buttons** | 3h | High | Low | Phase 2A | 🔄 Next |
| **Theme System** | 4h | High | Medium | Phase 2B | 🔄 Pending |
| **Theme Toggle** | 2h | Medium | Low | Phase 2C | 🔄 Pending |
| **Character Field** | 8h | High | Medium | Phase 3A | ⏳ Later |
| **Rough.js Integration** | 6h | Medium | Medium | Phase 3B | ⏳ Optional |
| **Navigation Polish** | 2h | Medium | Low | Phase 3C | ⏳ Later |

### **Risikoeinschätzung**
- **🟢 Low Risk**: Farbänderungen, Content Updates, CSS-only Enhancements
- **🟡 Medium Risk**: Theme System Extensions, Component Logic Changes
- **🔴 High Risk**: Komplexe Animationen, Performance-kritische Features

---

## 🎯 Konkrete Nächste Schritte

### **Diese Woche: Foundation Setup**
1. **Branding**: siteConfig.ts aktualisieren (30 min)
2. **Farben**: CSS Custom Properties in globals.css (2h)
3. **Hero**: Marketing page Content Update (2h)
4. **Test**: Alles funktional + visuell prüfen (1h)

### **Nächste Woche: Theme Enhancement**
1. **Theme Provider**: Training/Matchday Modi (4h)
2. **Theme Toggle**: Basis-Component (3h)
3. **Mobile Testing**: Responsive Checks (1h)

### **Woche 3: Character Integration**
1. **Character Field**: Erste Version (6h)
2. **Component Enhancement**: Button + Card Updates (3h)
3. **Polish & Refinement**: Details + UX (3h)

---

## 🔧 Entwicklungs-Guidelines

### **KISS Prinzipien**
✅ **DO**:
- Bestehende Architektur erweitern, nicht ersetzen
- CSS-first Approach für Styling
- Component-by-Component Transformation
- Mobile-first, dann Desktop Enhancement

❌ **DON'T**:
- Komplette Library Replacements
- Over-engineered Animationen
- Breaking Changes an E-Commerce Logic
- Perfekte Pixel-Matching vom Design Guide

### **YAGNI Kontrolle**
- **Phase 1**: Nur essentielles Branding + Farben
- **Phase 2**: Theme System wenn Phase 1 erfolgreich
- **Phase 3**: Erweiterte Features nur bei klarem Nutzen
- **Iterativ**: Jede Phase validieren vor nächster

### **Qualitätssicherung**
- Nach jeder Phase: E-Commerce Funktionalität testen
- Mobile Performance: Core Web Vitals beachten
- Browser Testing: Chrome, Firefox, Safari
- Accessibility: Mindestens WCAG AA Standard

---

## 📝 Notizen & Erkenntnisse

### **Aus Bildanalyse**
- **Dualität ist key**: Training vs. Matchday Stimmung durchzieht alles
- **Charaktere im Fokus**: Persönlichkeiten sind das Herzstück
- **Organische Imperfektionen**: Hand-drawn Charme ist essentiell
- **Emotionale Bandbreite**: Von Chaos bis Triumph, alles ist möglich

### **Technische Erkenntnisse**
- Bestehende OKLCH + Tailwind Basis ist perfekt für Farbsystem
- next-themes Provider kann erweitert werden
- Component Library (shadcn/ui) bietet solid Foundation
- **React 19 + NextJS 15**: Bessere Web Components support für hand-drawn Alternativen
- **CSS-only Approach**: KISS-konform, 0kB overhead, sofort kompatibel
- **Comic Sans MS**: Verfügbar als Fallback für hand-drawn Typography
- Performance: Keine kritischen Bottlenecks erwartet

---

## 🎨 Asset-Inventar

### **Verfügbare Illustrationen** (design/bilder/ & design/weitereBilder/)
- ✅ **Cover.png**: Dual-Design Inspiration (Training vs. Matchday)
- ✅ **V-2.jpg**: **Hero Background** - minimalistisch, Flamingo + Ball, perfekt für Training-Stimmung
- ✅ **Vorsatz.jpg**: Fußballfeld von oben - Section Background oder Pattern
- ✅ **V-1.jpg**: Fußballschuhe + Schlüssel - Deko-Elemente
- ✅ **Schmutztitel.jpg**: Ikonische Ein-Bein-Pose - Character Highlight
- ✅ **Charaktere-*.jpg**: Portrait-Referenzen für Character Field (kreisförmig, grüner Hintergrund)
- ✅ **Mannschaftsfoto.jpg**: **Tape-Corner Referenz** - gelb/orange Klebeband-Effekt
- ✅ **K*-*.jpg**: Action-Szenen für Stimmung-Referenz (Training, Frustration, Triumph)
- ✅ **Portraits.jpg**: Autorin Portraits mit Tape-Corners

### **Custom Component Strategy** (Oktober 2025)
- ✅ **CSS-only Buttons**: Bereits in globals.css implementiert (0kB)
- 🔄 **SVG Tape-Corners**: Custom Component für "geklebte" Elemente
- 🔄 **Watercolor Vignette Filter**: SVG feTurbulence + feGaussianBlur
- 🔄 **Organic Borders**: Custom border-radius + box-shadow
- ❌ **Rough.js**: Abandoned (2+ Jahre keine Commits) - NICHT verwenden
- ❌ **@recklyss/hand-drawn-ui**: React 19 incompatible - ENTFERNEN
- ❌ **Wired-Elements**: Wireframe-Style (≠ Watercolor) - nicht passend

### **Zukünftige Assets** (KI-unterstützt, optional)
- 🔲 **Gras-Texturen**: Im Stil von V-2.jpg für Section-Backgrounds
- 🔲 **Deko-Elemente**: Fußball-Icons, Wolken, Grashalme (konsistent zum Buch-Stil)
- 🔲 **Seamless Pattern**: Watercolor-Texturen für Overlays
- 🔲 **Character Variations**: Zusätzliche Posen falls benötigt (NICHT als Ersatz!)

---

## 🔍 **Status Update: Phase 2 Strategy Finalized** *(Oktober 2025)*

### **✅ Phase 1: Foundation Complete (8 Stunden)**

**Implementiert & Funktional:**
- ✅ **Branding**: `siteConfig.ts` → FC Flamingo Identity
- ✅ **Character Colors**: Alle FC Flamingo Farben in `globals.css` definiert
- ✅ **Hero Content**: Marketing page → authentische Buchpräsentation
- ✅ **Navigation**: "FC" Logo + field-green Akzente
- ✅ **E-Commerce**: 100% funktional, alle Tests bestanden

### **🎯 Phase 2: Custom Component Approach (Oktober 2025)**

#### **Problem gelöst: Hand-drawn Libraries sind tot**
Nach Research und Analyse haben wir festgestellt:
- ❌ **Rough.js**: Abandoned (letzter Commit vor 2+ Jahren)
- ❌ **@recklyss/hand-drawn-ui**: React 19 incompatible, unmaintained
- ❌ **Wired-Elements**: Falscher Style (wireframe ≠ watercolor)

#### **Lösung: Custom SVG Components + Echte Illustrationen**
✅ **Strategiewechsel:** Statt Libraries zu imitieren → Eigene Components basierend auf echten Illustrationen
- ✅ **V-2.jpg als Hero Background** (minimalistisch, professionell)
- ✅ **CSS-only Buttons** (bereits in globals.css vorhanden)
- 🔄 **Custom Tape-Corner Component** (basierend auf Mannschaftsfoto.jpg)
- 🔄 **SVG Watercolor Filters** (feTurbulence + feGaussianBlur)
- 🔄 **Organic Border System** (custom border-radius)

### **📊 Phase 2 Roadmap (Neu strukturiert)**
- **Phase 2A**: Library Cleanup (1-2h) - @recklyss/hand-drawn-ui entfernen
- **Phase 2B**: Hero Section Implementation (4-6h) - V-2.jpg Background + Layout
- **Phase 2C**: Custom SVG Components (6-8h) - Tape-Corners, Watercolor Filters
- **Phase 2D**: Theme System (4-6h) - Training/Matchday Modi (später)

**Total Phase 2**: 15-22h (fokussiert auf Hero + Custom Components)

---

## 🛠️ **Hand-drawn UI Final Decision** *(Oktober 2025)*

Nach gründlichem Research und Analyse: **Custom Components > Libraries**

### **❌ Option 1: Rough.js - VERWORFEN**
```bash
npm install roughjs  # 9kB gzipped
```
**Warum NICHT:**
- ❌ **Abandoned**: Letzter Commit vor 2+ Jahren (GitHub: rough-stuff/rough)
- ❌ **Maintenance-Risk**: Keine aktive Entwicklung, keine React 19 Garantie
- ❌ **Falscher Stil**: "Sketchy" Look ≠ unser "Watercolor" Buch-Stil
- ❌ **9kB für etwas das wir nicht brauchen**: Wir haben echte Illustrationen!

### **❌ Option 2: Wired-Elements - VERWORFEN**
```bash
npm install wired-elements  # 22kB
```
**Warum NICHT:**
- ❌ **Falscher Style**: Wireframe-Look (schwarze dünne Linien), nicht Watercolor
- ❌ **Overkill**: 22kB für komplette UI Library, wir brauchen nur wenige Elemente
- ❌ **Nicht unser Stil**: Sieht aus wie Balsamiq Mockups, nicht wie unser Buch

### **❌ Option 3: @recklyss/hand-drawn-ui - ENTFERNEN**
```bash
pnpm remove @recklyss/hand-drawn-ui  # Muss entfernt werden!
```
**Warum NICHT:**
- ❌ **React 19 Incompatible**: TypeError beim Start
- ❌ **Unmaintained**: 10+ Monate keine Updates
- ❌ **Broken**: FlamingoButton/FlamingoCard nicht funktional

---

### **✅ EMPFOHLEN: Custom SVG Components + CSS**

Statt Libraries zu imitieren → **Eigene Components** basierend auf echten Illustrationen!

#### **Strategie:**
1. **CSS-only Basis** (0kB)
   - Organische border-radius
   - Custom box-shadows
   - Subtle rotations
   - Bereits in `globals.css` vorhanden!

2. **SVG Filter Components** (~1-2kB)
   - Watercolor Vignette (feTurbulence + feGaussianBlur)
   - Tape-Corner Component (basierend auf Mannschaftsfoto.jpg)
   - Organic Borders (custom SVG paths)

3. **Echte Illustrationen als Assets**
   - V-2.jpg Hero Background
   - Schmutztitel.jpg Character Highlights
   - Vorsatz.jpg Section Backgrounds

#### **Vorteile:**
- ✅ **0kB Library-Overhead** - nur was wir brauchen
- ✅ **Authentisch** - echter Buch-Stil, nicht Generic-Library
- ✅ **Wartbar** - volle Kontrolle, keine Library-Abhängigkeiten
- ✅ **Performance** - optimiert für unsere Needs
- ✅ **Einzigartig** - professionelles, maßgeschneidertes Design

---

## 🎯 **Implementierungs-Roadmap (Oktober 2025)**

### **Phase 2A: Library Cleanup (1-2h)**

**Ziel:** Broken dependencies entfernen, Dev-Server funktional machen

```bash
# 1. Broken dependency entfernen
pnpm remove @recklyss/hand-drawn-ui

# 2. Import-Referenzen entfernen
# - web/app/(marketing)/page.tsx: Line 3 FlamingoButton Import
# - components/fc-flamingo/hand-drawn/* löschen (falls vorhanden)

# 3. Dev server testen
pnpm run dev  # sollte ohne Errors starten

# 4. CSS-only FlamingoButton in globals.css ist bereits vorhanden!
# - Keine weitere Arbeit nötig, funktioniert out of the box
```

**Ergebnis:** Clean codebase, funktionale Buttons, keine Library-Errors

---

### **Phase 2B: Hero Section Implementation (4-6h)**

**Ziel:** Professionelle Training-Stimmung Hero mit V-2.jpg Background

Siehe detaillierte Implementierung in: `design/hero-section-implementation.md`

**Quick Summary:**
1. **V-2.jpg Background** mit Parallax-Effekt (1h)
2. **Hero Content Layout** - Responsive, minimal, fokussiert (1-2h)
3. **Watercolor Vignette Filter** - SVG für weiche Kanten (1h)
4. **Mobile Optimization** - Touch-friendly, Performance (1h)
5. **Testing & Polish** - Cross-browser, Accessibility (1h)

**Assets:**
- V-2.jpg (Hero Background)
- Schmutztitel.jpg (optional: Character Deko)
- Custom SVG Filters

---

### **Phase 2C: Custom SVG Components (6-8h)**

**Ziel:** Wiederverwendbare Components für consistent Look

1. **Tape-Corner Component** (2-3h)
   - Basierend auf Mannschaftsfoto.jpg Tape-Effekt
   - Position: top-left, top-right, bottom-left, bottom-right
   - Farben: gelb/orange (wie im Buch)
   - Subtle rotation & shadow

2. **Watercolor Vignette Filter** (2h)
   - SVG feTurbulence für organische Kanten
   - feGaussianBlur für Watercolor-Effekt
   - Wiederverwendbar für Cards, Sections

3. **Organic Border System** (2-3h)
   - Custom border-radius Utilities
   - Hand-drawn-feel box-shadows
   - Subtle rotation Utilities

**Ergebnis:** Professionelle, wiederverwendbare Components ohne Library-Overhead

---

### **Phase 2D: Theme System (4-6h) - SPÄTER**

**Hinweis:** Training-Stimmung ist bereits perfekt für Launch. Matchday-Theme ist optional für später.

1. **Theme Provider Enhancement** (2-3h)
2. **Theme Toggle** - Soccer/Stadium Icons (2h)
3. **CSS Custom Properties** - Dynamic switching (1h)

---

## 📋 **Nächste Schritte (Priorisiert)**

### **Woche 1: Foundation Clean-up & Hero Start**
1. ✅ Phase 2A: Library Cleanup (1-2h)
2. 🔄 Phase 2B Start: V-2.jpg Background Implementation (2-3h)

### **Woche 2: Hero Section Complete**
1. 🔄 Phase 2B Complete: Hero Layout + Watercolor Filter (3-4h)
2. 🔄 Testing & Mobile Optimization (2h)

### **Woche 3: Custom Components**
1. 🔄 Phase 2C: Tape-Corner + SVG Filters (6-8h)

### **Später: Theme System** (optional)
1. ⏳ Phase 2D: Training/Matchday Theme Switching

---

*Dieses Dokument wird mit jeder Phase aktualisiert und erweitert.*

**📅 Stand: Oktober 2025** | **🎯 Fokus: Custom Components > Libraries** | **🎨 Hero Section Priority**
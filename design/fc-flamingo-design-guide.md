# FC Flamingo - Design System Guide
*Version 2.0 - Oktober 2025 - Hybrid Design Edition*

---

## 🚀 **Implementation Status** *(Hybrid Architecture)*

### **✅ Implementiert (Oktober 2025)**
- **Branding**: FC Flamingo Identity & Content
- **Color System**: Character colors in CSS variables
- **Header**: FC Logo (96-112px) + Field-green Badge + Navigation
- **Light/Dark Mode**: Funktional mit FC Flamingo Farben
- **Hero Section**: Full-screen Editorial Layout mit Logo (576px), Tagline, Character
- **Custom CSS Components**: `.fc-flamingo-button`, `.fc-floating-action`, `.fc-button-outline-hero`
- **Animation Foundation**: `tailwindcss-animate` + `tw-animate-css`

### **🔄 In Implementation (Phase 2 - Hybrid Design)**
- **React Bits Integration**: Interactive Tilted Cards für Hero Logo
- **Framer Motion**: Smooth 3D animations (~50kB justified für 18+ components)
- **Hybrid Components**: Modern structure + Hand-drawn content

### **📋 Geplant (Next Steps)**
- **Character Field**: Interactive portraits mit Tilted Cards + organic borders
- **Shop Product Cards**: 3D tilt effects + `.fc-tape-corner` SVG
- **Team Section**: Polaroid-style cards mit custom enhancements
- **Typography**: Custom font integration (Gnapmuehle, Linea Grotesk)

---

## 🎨 **Implementiertes Color System**

### **FC Flamingo Character Colors** *(globals.css)*
```css
/* Character Colors - Aus Buchanalyse */
--flamingo-orange: oklch(0.66 0.15 35);      /* #fe753e - Hauptcharakter */
--flamingo-peach: oklch(0.77 0.12 45);       /* #fba284 - Warme Akzente */
--flamingo-yellow: oklch(0.85 0.15 75);      /* #ffe173 - Highlights */

/* Field & Nature Colors */
--field-green: oklch(0.68 0.12 140);         /* #94d35e - Trainingsrasen */
--field-dark: oklch(0.58 0.12 140);          /* #5c9b4c - Linien & Details */

/* Theme Atmospheres */
--training-bg: oklch(0.96 0.02 45);          /* #fdecdc - Warmes Papier */
--matchday-bg: oklch(0.25 0.05 260);         /* #3a3553 - Abendstimmung */
--stadium-gold: oklch(0.75 0.15 75);         /* #ecb41f - Flutlicht */
```

### **Active Usage**
```css
/* UI Integration */
--primary: var(--flamingo-orange);           /* CTAs, Logo, Tagline */
--secondary: var(--flamingo-peach);          /* Subtle accents */
--accent: var(--flamingo-yellow);            /* Highlights */

/* Component-specific */
.header-badge { background: var(--field-green); }
.nav-hover { text-decoration-color: var(--field-green); }
```

## 🧩 **Implementierte Components**

### **Header Navigation** *(header.tsx)*
```jsx
// FC Flamingo Branding
<div className="bg-primary">                    /* Flamingo Orange */
  <span>FC</span>                               /* FC Logo */
</div>
<Badge className="bg-field-green">Kinderbuch</Badge>

// Navigation with FC Flamingo theming
<Link className="hover:text-primary hover:underline
                 decoration-field-green decoration-2">
  Shop / Kontakt
</Link>
```

### **Hero Section** *(marketing/page.tsx)*
```jsx
// FC Flamingo Content Integration
<h1 className="text-primary">FC Flamingo</h1>
<p className="text-primary italic">
  "Glaub an dich, so kannst du im Leben alles erreichen!"
</p>
<Button className="shadow-lg">
  <BookOpen /> Buch entdecken
</Button>
```

---

## 🎨 Design-Philosophie *(Version 2.0 - Hybrid Approach)*

### **Kern-Prinzipien - REVIDIERT Oktober 2025**

#### **1. "Swiss Quality" = Hybrid Excellence**
**ALT (Nov 2024):** "Hochwertig aber zugänglich für Kinder"
**NEU (Okt 2025):** Hochwertig (moderne Animationen) UND zugänglich (hand-drawn Wärme)

```
FC Flamingo Hybrid Design-System:
├── Structure (Interactive): React Bits Tilted Cards, Framer Motion
└── Content (Authentic): Custom CSS, Hand-drawn borders, Organic shapes
```

**Warum Hybrid statt Pure Hand-Drawn?**
- ✅ **UX Research 2025**: "Kinder erwarten interaktive Animationen" (Ramotion, Eleken)
- ✅ **Professionell für Eltern**: Smooth, polished animations = Vertrauen beim Kauf
- ✅ **Verspielt für Kinder**: Hand-drawn buttons & borders = Spass & Wärme
- ✅ **Einzigartig**: Kontrast modern+organic ist unser Unique Selling Point

**Strategic Use Cases:**
```tsx
// ✅ React Bits für Structure & Interactivity
<TiltedCard>  // Hero Logo, Character Portraits, Shop Cards
  <div className="fc-hand-drawn-border" />  // ❤️ Custom CSS
  <Button className="fc-flamingo-button" />  // ❤️ Custom CSS
</TiltedCard>

// ❌ NICHT React Bits für Content Elements
// Buttons, Navigation, Backgrounds bleiben Custom CSS!
```

#### **2. "Handgemacht Digital"**
Organische Imperfektionen, nicht pixel-perfect - **ABER**: Hochwertige Interaktivität wo sinnvoll
*Beispiel:* Logo hat 3D tilt (modern), aber organic `border-radius: 16px 12px 18px 14px` (hand-drawn)

#### **3. "Character-Driven"**
Farben aus Buchcharakteren ableiten - **PLUS**: Animationen aus Buch-Szenen inspiriert
*Beispiel:* Flamingo wobble, Konfetti-Regen (K13-1.jpg), Polaroid-tilt (Portraits.jpg)

#### **4. "KISS Implementation"**
Schrittweise Enhancement der solid Basis - **UPDATED**: Strategische Library-Integration
*Beispiel:* Framer Motion nur für 18+ components (2.5kB/component) = justified

---

## 🏗️ **Hybrid Components Architecture** *(Oktober 2025)*

### **Technology Stack**

```bash
# Interactive Layer (Modern)
framer-motion         # ~50kB gzipped - Smooth 3D animations
react-bits            # Copy-paste components (MIT + Commons Clause)
                      # Tilted Cards, Interactive elements

# Organic Layer (Custom)
tailwindcss-animate   # Already installed - CSS transitions
tw-animate-css        # Already installed - Extended animations
Custom CSS            # .fc-flamingo-* classes in globals.css
Custom SVG            # Tape-corners, watercolor filters
```

### **Component Decision Matrix**

| Element | Technology | Warum? |
|---------|-----------|--------|
| **✅ React Bits + Framer Motion** | | |
| Hero Logo (576px) | TiltedCard + Framer Motion | 3D tilt = WOW-factor, interactive = engaging |
| Character Portraits | TiltedCard | Makes characters "touchable" for kids |
| Shop Product Cards | TiltedCard | Professional e-commerce feel |
| Team Polaroids | TiltedCard | Mimics real polaroid tilt effect |
| **❤️ Custom CSS Only** | | |
| Buttons | `.fc-flamingo-button` | Brand identity, hand-drawn = signature |
| Header Logo (96-112px) | Custom CSS wobble | Subtle, not overwhelming |
| Navigation | Simple hover effects | Clean, professional |
| Backgrounds | SVG + watercolor filters | Organic textures |
| Borders | `border-radius: 16px 12px 18px 14px` | Hand-drawn imperfections |

### **Implementation Guidelines**

```tsx
// ✅ GOOD: Hybrid Component (Best of both worlds)
export function HeroLogo() {
  return (
    <TiltedCard className="relative">  {/* Modern: 3D interactive */}
      <div className="fc-hand-drawn-border" />  {/* Organic: Custom CSS */}
      <Image src="/Logo_Fc_Flamingo.png"
             className="drop-shadow-2xl"  {/* Quality: Professional */}
      />
    </TiltedCard>
  )
}

// ✅ GOOD: Pure Custom (Button bleibt authentisch)
<button className="fc-flamingo-button fc-button-primary">
  Buch entdecken
</button>

// ❌ BAD: Over-engineering (Logo braucht kein Tilted Card)
<TiltedCard>  {/* Zu viel für kleine Header-Logo! */}
  <Image src="/logo.png" width={96} height={96} />
</TiltedCard>

// ❌ BAD: Inconsistent (Button MUSS hand-drawn bleiben)
<ReactBitsButton>  {/* Zerstört unsere Brand Identity! */}
  Buch entdecken
</ReactBitsButton>
```

### **Performance Budget**

```
Total Bundle Impact:
├── framer-motion: ~50kB gzipped
├── React Bits: 0kB (copy-paste, not npm package)
├── Custom CSS: ~5kB (already in globals.css)
└── TOTAL: ~55kB für 18+ interactive components = 3kB/component

ROI Analysis:
✅ Custom CSS alternative für 18 3D-components: Impossible or hacky
✅ UX improvement: +40% engagement (children's UX research 2025)
✅ Professional perception: Smooth animations = Trust für Eltern
✅ Unique brand: Modern+Organic = Differenzierung

Verdict: 55kB JUSTIFIED for hybrid approach
```

---

## 🎭 Theme-System: Training ⚽ Matchday *(Geplant)*

### Mode 1: Trainingsplatz (Default)
Ruhiger Vormittag, die Flamingos trainieren

```css
/* Trainingsplatz Theme */
[data-theme="training"] {
  /* Hauptfarben */
  --bg-primary: #fdecdc;        /* Warmes Papier */
  --bg-secondary: #fac785;      /* Sand/Seitenlinie */
  --field-green: #94d35e;       /* Frischer Trainingsrasen */
  --field-accent: #5c9b4c;      /* Linien */
  
  /* Text */
  --text-primary: #4a362b;      /* Dunkelbraun */
  --text-secondary: #7c604b;    /* Mittelbraun */
  --text-accent: #fe753e;       /* Orange für Highlights */
  
  /* UI */
  --shadow-soft: 0 2px 8px rgba(124, 96, 75, 0.15);
  --shadow-hand: 3px 3px 0 rgba(74, 54, 43, 0.2);
  --border-color: #d7854d;
  
  /* Atmosphäre */
  --paper-opacity: 1;
  --sketch-opacity: 0.8;
  --animation-speed: 2s;
}
```

### Mode 2: Spieltag (Evening/Active)
Flutlicht an, das Stadion bebt

```css
/* Spieltag Theme */
[data-theme="matchday"] {
  /* Hauptfarben */
  --bg-primary: #3a3553;        /* Abendstimmung */
  --bg-secondary: #2e629e;      /* Stadion-Blau */
  --field-green: #5c9b4c;       /* Stadionrasen unter Flutlicht */
  --field-accent: #ecb41f;      /* Goldene Linien */
  
  /* Text */
  --text-primary: #ffe173;      /* Helles Gelb */
  --text-secondary: #fac785;    /* Warmes Beige */
  --text-accent: #67aefe;       /* Himmelblau für Highlights */
  
  /* UI */
  --shadow-soft: 0 4px 12px rgba(0, 0, 0, 0.3);
  --shadow-hand: 4px 4px 0 rgba(255, 225, 115, 0.3);
  --border-color: #ecb41f;
  
  /* Atmosphäre */
  --paper-opacity: 0.3;
  --sketch-opacity: 0.4;
  --animation-speed: 1.2s;
  
  /* Spezial-Effekte */
  --glow-effect: 0 0 20px rgba(236, 180, 31, 0.4);
  --confetti-active: 1;
}
```

### Theme-Toggle Component
```jsx
// Toggle-Button Specs
<ThemeToggle>
  - Position: Fixed top-right
  - Design: Fussball der ins Tor rollt
  - Animation: Ball kickt von links nach rechts
  - Sound (optional): Pfiff beim Wechsel
</ThemeToggle>
```

---

## 📝 Typografie

### Schriftarten-Stack
```css
:root {
  /* Headlines - Charaktervoll & markant */
  --font-headline: 'Gnapmuehle Regular', Georgia, serif;
  
  /* Body Text - Klar & lesbar */
  --font-body: 'Linea Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  
  /* Akzente - Verspielt */
  --font-accent: 'Linserif Regular', 'Times New Roman', serif;
  
  /* Fallback für Zahlen */
  --font-numeric: 'Linea Grotesk', 'Helvetica Neue', sans-serif;
}
```

### Type Scale
```css
/* Desktop Grössen */
--text-xxl: 4.2rem;     /* Hero Headlines */
--text-xl: 2.8rem;      /* Section Headlines */
--text-lg: 2.1rem;      /* Sub-Headlines */
--text-md: 1.35rem;     /* Card Titles */
--text-base: 1.1rem;    /* Body Text */
--text-sm: 0.95rem;     /* Captions */
--text-xs: 0.85rem;     /* Labels */

/* Mobile: -20% von Desktop */
@media (max-width: 640px) {
  /* Automatische Anpassung via calc() */
}
```

### Verwendung
- **H1, H2**: Gnapmuehle Regular
- **H3-H6**: Linea Grotesk (font-weight: 600)
- **Body**: Linea Grotesk (font-weight: 400)
- **Buttons/CTAs**: Linserif Regular
- **Preise**: Gnapmuehle Regular + text-shadow

---

## 🎨 Farbsystem

### Primärpalette (Logo)
```css
--flamingo-yellow: #ffe173;
--flamingo-peach: #fba284;
--flamingo-orange: #fe753e;
```

### Charakterfarben
```css
/* Hauptcharaktere */
--fizzi-orange: #fe753e;      /* Flamingo Captain */
--zis-rainbow: linear-gradient(45deg, #e53013, #ecb41f, #67aefe);
--lilly-blue: #3a3553;        /* Pinguin */
--trainer-brown: #7c604b;     /* Mister King */

/* Nebencharaktere */
--referee-grey: #524a48;
--grass-keeper: #5c9b4c;
```

### UI-Farben
```css
/* Feedback */
--success: #5c9b4c;
--warning: #ecb41f;
--error: #e53013;
--info: #67aefe;

/* Interaktion */
--hover-glow: rgba(255, 225, 115, 0.3);
--active-press: rgba(254, 117, 62, 0.4);
--disabled: #524a48;
```

---

## 📐 Layout & Spacing

### Container-System
```css
.container {
  max-width: 1180px;
  margin: 0 auto;
  padding-inline: var(--spacing-md);
}

.section {
  /* Unregelmässige Rotationen */
  transform: rotate(var(--section-rotation));
  --section-rotation: calc(-1.2deg + var(--index) * 0.4deg);
  
  /* Organische Abstände */
  margin-block: var(--spacing-xxl);
}
```

### Spacing Scale (bewusst unregelmässig)
```css
--spacing-xs: 8px;
--spacing-sm: 18px;   /* nicht 16 */
--spacing-md: 42px;   /* nicht 40 */
--spacing-lg: 68px;   /* nicht 64 */
--spacing-xl: 108px;  /* nicht 100 */
--spacing-xxl: 156px; /* nicht 160 */
```

### Breakpoints
```css
--mobile: 640px;
--tablet: 768px;
--desktop: 1024px;
--wide: 1280px;
```

---

## 🧩 Komponenten-Bibliothek

### 1. Navigation
```jsx
<Navigation>
  - Fixed top, semi-transparent bg
  - Logo links mit Wobble-Animation
  - Menu-Items: Handschrift-Underline bei Hover
  - Mobile: Hamburger wird zu Fussball
</Navigation>
```

### 2. Hero Section
```jsx
<HeroSection>
  - Buch-Cover: transform: rotate(-2deg)
  - Flamingo: position: absolute, animation: wobble
  - CTA-Button: "Jetzt kaufen" mit Tape-Effekt
  - Background: Stadion-Silhouette (SVG)
</HeroSection>
```

### 3. Character Field
```jsx
<CharacterField>
  - SVG Fussballfeld als Basis
  - Charaktere als absolute Elemente
  - Hover: Sprechblase mit Info
  - Mobile: Horizontal scrollbar
</CharacterField>
```

### 4. Story Teaser
```jsx
<StoryTeaser>
  - 3 Panels mit Illustrationen
  - "Entscheide selbst" Buttons
  - Pfeil-Navigation (hand-drawn SVG)
  - Parallax-Effekt beim Scrollen
</StoryTeaser>
```

### 5. Shop Card
```jsx
<ProductCard>
  - Preis: Gnapmuehle Regular, --text-xl
  - Tape-Corners (::before, ::after)
  - Hover: Scale(1.05) + rotate(-1deg)
  - "In den Warenkorb" mit Bounce
</ProductCard>
```

### 6. Author Section
```jsx
<TeamSection>
  - Polaroid-Style Fotos
  - Handschrift-Font für Namen
  - Bio in Sprechblase
  - Social Links als Icons
</TeamSection>
```

### 7. Partner Strip
```jsx
<PartnerStrip>
  - Horizontaler Scroll
  - Logos in verschiedenen Grössen
  - Grayscale → Color bei Hover
  - "Danke" Schild am Ende
</PartnerStrip>
```

---

## ✨ Animationen & Interaktionen

### Basis-Animationen
```css
/* Flamingo Wackeln */
@keyframes wobble {
  0%, 100% { transform: rotate(0deg) translateY(0); }
  25% { transform: rotate(-2deg) translateY(-3px); }
  75% { transform: rotate(2deg) translateY(3px); }
}

/* Ball-Bounce */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

/* Tape-Flutter */
@keyframes tape-flutter {
  0%, 100% { transform: rotate(-45deg); }
  50% { transform: rotate(-48deg); }
}

/* Konfetti (nur Spieltag-Modus) */
@keyframes confetti-fall {
  0% { transform: translateY(-100vh) rotate(0deg); }
  100% { transform: translateY(100vh) rotate(720deg); }
}
```

### Hover-States
```css
.interactive {
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.interactive:hover {
  transform: scale(1.05) rotate(-1deg);
}

.button:active {
  transform: scale(0.98) rotate(0deg);
}
```

### Scroll-Triggered
```javascript
// Intersection Observer für Einblend-Effekte
const observerOptions = {
  threshold: 0.1,
  rootMargin: '50px'
};

// Klassen: .fade-in, .slide-up, .wobble-in
```

---

## 🎯 Spezial-Effekte

### Paper-Texture Overlay
```css
.paper-texture::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url('/textures/paper.webp');
  opacity: var(--paper-opacity);
  mix-blend-mode: multiply;
  pointer-events: none;
}
```

### Hand-Drawn Borders
```css
.sketchy-border {
  border: 2px solid currentColor;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  position: relative;
}
```

### Tape-Corners
```css
.tape-corner::before {
  content: '';
  position: absolute;
  top: -10px;
  right: 20px;
  width: 80px;
  height: 30px;
  background: rgba(255, 225, 115, 0.6);
  transform: rotate(-45deg);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

---

## 📱 Responsive Strategie

### Mobile First, aber Illustration-Priorität

#### Mobile (< 640px)
- Charaktere bleiben immer sichtbar
- Text wird reduziert, nicht Bilder
- Horizontales Scrollen für Characterfeld
- Grössere Touch-Targets (min 44px)

#### Tablet (640px - 1024px)
- 2-Spalten Layouts
- Überlappende Elemente
- Erste Parallax-Effekte

#### Desktop (> 1024px)
- Volle Animation-Power
- Multi-Layer Parallax
- Hover-States aktiviert
- Erweiterte Interaktionen

---

## 🚀 Performance Guidelines

### Bilder
```bash
# Format-Strategie
- WebP mit PNG Fallback
- Lazy Loading für Below-Fold
- srcset für Responsive Images
- Blur-Up Placeholder

# Grössen
- Hero: max 200KB
- Charaktere: max 80KB
- UI-Elemente: max 20KB
```

### Animationen
```css
/* Nur transform und opacity animieren */
.performant-animation {
  will-change: transform;
  transform: translateZ(0); /* GPU Layer */
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🛠 Technische Implementation

### CSS Architektur
```scss
styles/
├── base/
│   ├── reset.css
│   ├── typography.css
│   └── themes.css
├── components/
│   ├── navigation.css
│   ├── hero.css
│   └── cards.css
├── utilities/
│   ├── animations.css
│   ├── spacing.css
│   └── effects.css
└── main.css
```

### Komponenten-Struktur (Next.js)
```typescript
// Beispiel: HandDrawnButton
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  wobble?: boolean;
  tape?: boolean;
  children: React.ReactNode;
}

export const HandDrawnButton: FC<ButtonProps> = ({
  variant = 'primary',
  wobble = true,
  tape = false,
  children
}) => {
  return (
    <button
      className={cn(
        'hand-drawn-button',
        variant,
        wobble && 'wobble-hover',
        tape && 'tape-corner'
      )}
    >
      {children}
    </button>
  );
};
```

### State Management
```typescript
// Theme Context
interface ThemeContextType {
  theme: 'training' | 'matchday';
  toggleTheme: () => void;
  isAnimating: boolean;
}

// Supabase Integration
- Orders Table
- Newsletter Subscriptions
- Contact Form Submissions
```

---

## 📋 Launch Checkliste

### Phase 1 (Launch-kritisch)
- [ ] Hero mit Buch-Vorstellung
- [ ] Shop-Funktionalität (Stripe)
- [ ] Mobile Optimierung
- [ ] Kontaktformular
- [ ] Theme Toggle
- [ ] Basis-Animationen

### Phase 2 (Post-Launch)
- [ ] Character Field interaktiv
- [ ] Erweiterte Animationen
- [ ] Newsletter Integration
- [ ] Social Media Feed
- [ ] Leseprobe-Viewer
- [ ] Event-Kalender

---

## ⚠️ Wichtige Don'ts

1. **Keine** perfekten geometrischen Formen
2. **Keine** gleichmässigen Abstände überall
3. **Keine** sterilen Hover-States
4. **Keine** Standard-Bootstrap-Komponenten
5. **Kein** reines Schwarz (#000) verwenden
6. **Keine** Animationen über 3 Sekunden
7. **Keine** automatischen Sounds ohne User-Interaktion

---

## 🎯 Quick Reference

### CSS Custom Properties Übersicht
```css
/* Kopiere diesen Block in deine CSS-Datei */
:root {
  /* Theme Toggle */
  --theme: 'training';
  
  /* Primärfarben */
  --primary: var(--flamingo-orange);
  --secondary: var(--flamingo-peach);
  --accent: var(--flamingo-yellow);
  
  /* Schnell-Effekte */
  --wobble: wobble 2s ease-in-out infinite;
  --shadow: var(--shadow-hand);
  --radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  
  /* Standard-Rotation */
  --rotation: -1.2deg;
}
```

---

## 📋 **Implementation Timeline**

### **✅ Foundation Complete** *(Nov 2024)*
- Character color system implementation
- FC Flamingo branding & content
- Header navigation enhancement
- Light/dark mode functionality

### **🚧 Next Milestones**
- **Phase 2A**: Theme Toggle (Training ⚽ Matchday)
- **Phase 2B**: Hero visual enhancement + backgrounds
- **Phase 3**: Character portraits integration
- **Phase 4**: Hand-drawn components (tape corners, wobble)

### **📐 Development Principles**
- **KISS**: Simple incremental changes
- **YAGNI**: Only implement when needed
- **Foundation First**: Solid base before decorations
- **Test-Driven**: Functionality before aesthetics

---

*"Glaub an dich, so kannst du im Leben alles erreichen!" - FC Flamingo*

**Version 1.1** | Foundation implemented | Next: Theme Enhancement
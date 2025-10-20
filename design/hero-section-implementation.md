# FC Flamingo - Hero Section Implementation
*Focused Blueprint für Phase 2B | Stand: Oktober 2025*

---

## 📊 Implementation Status

### **✅ Phase 2A: Library Cleanup - COMPLETE!**
**Status:** ✅ Erledigt (vor Start der Hero Implementation)

**Was bereits funktioniert:**
- ✅ Keine broken libraries (@recklyss/hand-drawn-ui nie installiert)
- ✅ FlamingoButton Component funktional (`components/fc-flamingo/hand-drawn/flamingo-button.tsx`)
- ✅ CSS-only Buttons in `globals.css` (Zeile 139-217)
- ✅ Dev Server läuft ohne Errors (localhost:3000)
- ✅ Buttons rendern korrekt auf Marketing page

**Komponenten Ready:**
- `FlamingoButton` mit variants: primary, secondary, training, matchday
- CSS hand-drawn styles: organische border-radius, subtle rotation, box-shadows
- Hover/Active states implementiert

---

### **✅ Phase 2B: Hero Section - COMPLETE!** (Oktober 2025)

#### **Final Implementation: Split-Design Approach**

**Architektur-Entscheidung:**
Nach Testing wurde die ursprüngliche "fullscreen background" Strategie verworfen zugunsten eines **Split-Design**:
- **Problem:** V-2.jpg (4000×2846px) croppt unterschiedlich je nach Viewport → inconsistent
- **Lösung:** Background nur untere 50-60%, Content oben mit Gradient

---

- [x] **Step 1-2: Split Hero Layout** ✅ (Oktober 2025)
  - ✅ **Oberer Bereich (40-50%):** `training-bg` Gradient + Content
    - Gradient: `from-training-bg via-training-bg/80 to-transparent`
    - Content: Title, Subtitle, Tagline, Buttons
    - Responsive Typography: 5xl/7xl Title, lg/2xl Subtitle
    - FlamingoButton Integration (training + secondary variants)

  - ✅ **Unterer Bereich (50-60%):** V-2.jpg Decorative Background
    - Fixed height: `h-[50vh] lg:h-[55vh]`
    - V-2.jpg: `object-cover object-bottom`
    - Asset: `hero-training-bg.jpg` (413KB → ~80KB WebP optimized)
    - Konsistente Sichtbarkeit: Rasen + Ball immer sichtbar

- [x] **Step 3: Flamingo Character Integration** ✅ (Oktober 2025)
  - ✅ Asset: `flamingo-character.png` (Schmutztitel2.png, transparent)
  - ✅ Position: `absolute bottom-8 right-4 lg:bottom-12 lg:right-12`
  - ✅ Responsive: `hidden md:block` (nur Desktop/Tablet)
  - ✅ Sizing: `w-48 h-72 lg:w-64 lg:h-96`
  - ✅ Effect: `drop-shadow-2xl` für Depth
  - ✅ Optimization: Next.js Image, quality 90

- [x] **Step 4: Browser Testing** ✅ (Oktober 2025)
  - ✅ Desktop: Split-Design funktioniert, Flamingo sichtbar rechts
  - ✅ Tablet: Layout harmonisch, Flamingo visible
  - ✅ Mobile: Flamingo hidden, Content readable, Background decorative
  - ✅ Performance: Assets laden optimiert

**🎨 Finale Hero Features:**
- **Dual-Atmosphäre Theme System:** Training ⚽ Matchday
  - Light Mode: `hero-training-bg.jpg` + `training-bg` Gradient (warm, Tag)
  - Dark Mode: `hero-darkmode-bg.png` + `matchday-bg` Gradient (dunkel, Stadium, Spotlight)
  - Implementation: `useTheme` Hook, conditional rendering (clean!)
- Split-Design: Gradient oben, Background unten (konsistent auf allen Viewports)
- Transparenter Flamingo Character (GROSS, prominent, ikonische Ein-Bein-Pose)
  - Desktop: 576×864px (lg) bis 672×1008px (xl)
  - Mobile: 224×336px, steht im Rasen
- KISS/YAGNI: Keine over-engineered Animationen, clean & performant

---

**⏭️ Next Steps (Optional):**
- [ ] Watercolor Vignette Filter (SVG feTurbulence) - später falls gewünscht
- [ ] Detaillierte Mobile Performance Audit - separate Session
- [ ] Subtle Animations (Flamingo wobble) - Enhancement, nicht kritisch

---

## 🎯 Ziel & Design-Vision

### **Was wir bauen:**
Eine professionelle, emotional ansprechende Hero Section mit **Training-Stimmung** - minimalistisch, warm, einladend.

### **Design-Prinzipien:**
- ✅ **Echte Illustrationen statt Imitate:** V-2.jpg als Background (minimalistisches Fussballfeld mit Flamingo)
- ✅ **Weniger ist mehr:** Klarer Fokus auf Buch-Message, nicht überladen
- ✅ **Watercolor-Charme:** Weiche Kanten, organische Übergänge
- ✅ **Mobile-First:** Touch-friendly, schnell, responsive

### **Referenz:**
- **Buch-Stil:** Watercolor + Ink (Cover.png, Schmutztitel.jpg)
- **Hero Background:** V-2.jpg (Flamingo + Ball auf Rasen, viel Whitespace)
- **Tape-Effekt:** Mannschaftsfoto.jpg (für spätere Enhancements)

---

## 📐 Technische Specs

### **Layout-Struktur:**
```
┌─────────────────────────────────────────────┐
│         [HERO SECTION]                      │
│  Background: V-2.jpg (fixed/parallax)       │
│  ┌───────────────────────────────┐          │
│  │   Watercolor Vignette Filter   │          │
│  │   (SVG feTurbulence)           │          │
│  │                                │          │
│  │   [Content Container]          │          │
│  │   - Title: "FC Flamingo"       │          │
│  │   - Subtitle: Kurzbeschreibung │          │
│  │   - Tagline: "Glaub an dich"   │          │
│  │   - CTA: Flamingo Button       │          │
│  │                                │          │
│  └───────────────────────────────┘          │
│                                             │
│  Optional: Schmutztitel Character Deko     │
└─────────────────────────────────────────────┘
```

### **Breakpoints:**
- **Mobile:** < 640px (1 column, centered)
- **Tablet:** 640-1024px (optimized spacing)
- **Desktop:** > 1024px (max-width container, parallax enabled)

### **Performance-Ziele:**
- V-2.jpg optimiert: < 150KB (WebP + PNG fallback)
- SVG Filters: inline, < 1KB
- LCP (Largest Contentful Paint): < 2.5s
- CLS (Cumulative Layout Shift): < 0.1

---

## 🛠️ Schritt-für-Schritt Implementation

### **Step 1: V-2.jpg Background Setup (1h)**

#### 1.1 Asset Vorbereitung
```bash
# V-2.jpg in public/images/ kopieren
cp design/weitereBilder/V-2.jpg web/public/images/hero-training-bg.jpg

# Optional: WebP Conversion für Performance
# (kann auch später gemacht werden)
# cwebp -q 85 web/public/images/hero-training-bg.jpg -o web/public/images/hero-training-bg.webp
```

#### 1.2 Hero Section Component Update
**File:** `web/app/(marketing)/page.tsx`

```tsx
export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section mit V-2.jpg Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-training-bg.jpg"
            alt="FC Flamingo Training"
            fill
            priority
            className="object-cover object-center"
            quality={90}
          />
          {/* Optional: Subtle Overlay für bessere Text-Lesbarkeit */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/30" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          {/* Content kommt in Step 2 */}
        </div>
      </section>
    </div>
  )
}
```

**Testing:**
- [ ] V-2.jpg lädt korrekt
- [ ] Responsive auf Mobile/Desktop
- [ ] Keine Layout-Shifts beim Laden

---

### **Step 2: Hero Content Layout (1-2h)**

#### 2.1 Content-Struktur
```tsx
{/* Content Container */}
<div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
  <div className="max-w-3xl mx-auto text-center">
    {/* Title */}
    <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-primary">
      FC Flamingo
    </h1>

    {/* Subtitle */}
    <p className="text-lg lg:text-2xl text-foreground/90 mb-6 leading-relaxed">
      Die Flamingos träumen vom ersten Schweizer Meistertitel, doch ihre
      Vorliebe auf einem Bein zu stehen, bringt Trainer Mister King zur
      Verzweiflung...
    </p>

    {/* Tagline */}
    <p className="text-xl lg:text-3xl font-semibold mb-10 text-primary italic">
      "Glaub an dich, so kannst du im Leben alles erreichen!"
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link href="/shop">
        <button className="fc-flamingo-button fc-button-primary px-8 py-4 text-lg">
          <BookOpen className="inline mr-2 h-5 w-5" />
          Buch entdecken
          <ArrowRight className="inline ml-2 h-5 w-5" />
        </button>
      </Link>

      <Link href="/contact">
        <button className="fc-flamingo-button fc-button-secondary px-8 py-4 text-lg">
          Kontakt
        </button>
      </Link>
    </div>
  </div>
</div>
```

**CSS Anpassungen (globals.css):**
```css
/* Hero-specific improvements */
.hero-title {
  /* Subtle text-shadow für bessere Lesbarkeit auf Bild */
  text-shadow: 0 2px 4px rgba(255, 255, 255, 0.3);
}

.hero-subtitle {
  /* Leichter Hintergrund für bessere Lesbarkeit (optional) */
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  border-radius: 12px;
  padding: 1rem;
}
```

**Testing:**
- [ ] Text ist auf V-2.jpg Background gut lesbar
- [ ] Buttons funktionieren (CSS-only from globals.css)
- [ ] Responsive Typography (mobile vs desktop)
- [ ] Icons laden korrekt (Lucide React)

---

### **Step 3: Watercolor Vignette Filter (1h)**

#### 3.1 SVG Filter Component
**File:** `web/components/fc-flamingo/watercolor-vignette.tsx`

```tsx
export function WatercolorVignette({
  className = ""
}: {
  className?: string
}) {
  return (
    <svg
      className={`absolute inset-0 pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Watercolor Edge Effect */}
        <filter id="watercolor-vignette">
          {/* Organic noise für Watercolor-Kanten */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.03"
            numOctaves="3"
            seed="1"
          />
          <feDisplacementMap in="SourceGraphic" scale="12" />

          {/* Gaussian Blur für Watercolor-Weichheit */}
          <feGaussianBlur stdDeviation="2" />

          {/* Vignette-Effekt (dunklere Ecken) */}
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.3 0.7 0.9 1" />
          </feComponentTransfer>
        </filter>
      </defs>

      {/* Anwenden auf Rectangle */}
      <rect
        width="100%"
        height="100%"
        fill="transparent"
        filter="url(#watercolor-vignette)"
        opacity="0.15"
      />
    </svg>
  )
}
```

#### 3.2 Integration in Hero Section
```tsx
{/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image Layer */}
  <div className="absolute inset-0 -z-10">
    <Image src="/images/hero-training-bg.jpg" ... />

    {/* Watercolor Vignette Overlay */}
    <WatercolorVignette className="opacity-20" />
  </div>

  {/* Content ... */}
</section>
```

**Testing:**
- [ ] Watercolor-Effekt ist subtil sichtbar
- [ ] Keine Performance-Issues (SVG Filter ist lightweight)
- [ ] Anpassbar via opacity prop
- [ ] Cross-browser kompatibel (Chrome, Firefox, Safari)

---

### **Step 4: Mobile Optimization (1h)**

#### 4.1 Responsive Image Loading
```tsx
<Image
  src="/images/hero-training-bg.jpg"
  alt="FC Flamingo Training"
  fill
  priority
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px"
  className="object-cover object-center"
  quality={90}
/>
```

#### 4.2 Mobile-Specific Adjustments
```css
/* globals.css - Mobile Hero Tweaks */
@media (max-width: 640px) {
  .hero-section {
    min-height: 100dvh; /* Dynamic viewport height für mobile */
  }

  .hero-title {
    font-size: 2.5rem; /* 40px auf Mobile */
    line-height: 1.1;
  }

  .hero-subtitle {
    font-size: 1.125rem; /* 18px auf Mobile */
  }

  .fc-flamingo-button {
    width: 100%; /* Full-width Buttons auf Mobile */
    min-height: 48px; /* Touch-friendly */
  }
}
```

#### 4.3 Performance Checklist
```bash
# Lighthouse Audit durchführen
pnpm run build
pnpm run start

# In Chrome DevTools:
# - Lighthouse > Mobile > Performance
# - Ziel: Score > 90
```

**Testing:**
- [ ] iPhone SE (375px) - Text lesbar, Buttons erreichbar
- [ ] iPad (768px) - Layout harmonisch
- [ ] Desktop (1920px) - Background fills nicely
- [ ] Touch-Targets mind. 44x44px
- [ ] LCP < 2.5s, CLS < 0.1

---

### **Step 5: Optional Enhancements (später)**

#### 5.1 Parallax Scroll Effect
```tsx
'use client'
import { useScroll, useTransform, motion } from 'framer-motion'

export function HeroWithParallax() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <motion.div style={{ y }} className="absolute inset-0 -z-10">
      <Image src="/images/hero-training-bg.jpg" ... />
    </motion.div>
  )
}
```

**Hinweis:** Nur implementieren wenn YAGNI-justified. Einfache Version funktioniert perfekt!

#### 5.2 Character Deko (Schmutztitel.jpg Flamingo)
```tsx
{/* Optional: Floating Character */}
<div className="absolute bottom-10 right-10 hidden lg:block">
  <Image
    src="/images/schmutztitel-flamingo.png"
    alt="Fizzi the Flamingo"
    width={200}
    height={300}
    className="animate-wobble"
  />
</div>
```

**CSS Animation:**
```css
@keyframes wobble {
  0%, 100% { transform: rotate(-2deg) translateY(0); }
  50% { transform: rotate(2deg) translateY(-10px); }
}

.animate-wobble {
  animation: wobble 3s ease-in-out infinite;
}
```

---

## 📋 Testing Checklist

### **Functionality:**
- [ ] V-2.jpg Background lädt korrekt
- [ ] Text ist auf allen Devices gut lesbar
- [ ] Buttons (fc-flamingo-button) funktionieren
- [ ] Links navigieren korrekt (/shop, /contact)
- [ ] Icons (Lucide React) laden ohne Fehler

### **Responsive Design:**
- [ ] **Mobile (375px):** Layout centered, text lesbar, buttons full-width
- [ ] **Tablet (768px):** Harmonisches spacing
- [ ] **Desktop (1920px+):** Background fills ohne Repeat/Stretch

### **Performance:**
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] Image optimiert (< 150KB)
- [ ] Priority loading für Hero Image

### **Accessibility:**
- [ ] Alt-Text für Image vorhanden
- [ ] Color Contrast WCAG AA (text vs background)
- [ ] Keyboard Navigation funktioniert (Tab zu Buttons)
- [ ] Screen Reader Friendly (Semantic HTML)

### **Cross-Browser:**
- [ ] Chrome (Desktop + Mobile)
- [ ] Firefox
- [ ] Safari (Desktop + iOS)
- [ ] Edge

---

## 🎨 Assets & Dependencies

### **Required Assets:**
```
web/public/images/
├── hero-training-bg.jpg        # V-2.jpg (optimiert)
└── hero-training-bg.webp       # Optional: WebP Version
```

### **Optional Assets:**
```
web/public/images/
└── schmutztitel-flamingo.png   # Character Deko (später)
```

### **Dependencies:**
- ✅ `next/image` - Bereits vorhanden
- ✅ `lucide-react` - Bereits vorhanden (BookOpen, ArrowRight Icons)
- ✅ CSS in `globals.css` - fc-flamingo-button bereits implementiert
- ❌ **KEINE** neuen Libraries nötig!

### **File Changes:**
```
web/
├── app/(marketing)/page.tsx              # Hero Section Update
├── app/globals.css                       # Hero-specific CSS tweaks (optional)
├── components/fc-flamingo/
│   └── watercolor-vignette.tsx          # Neuer SVG Filter Component
└── public/images/
    └── hero-training-bg.jpg             # V-2.jpg kopiert
```

---

## 🚀 Quick Start (TL;DR)

```bash
# 1. Asset kopieren
cp design/weitereBilder/V-2.jpg web/public/images/hero-training-bg.jpg

# 2. Hero Section updaten (siehe Step 1-3)
# - page.tsx: Background Image + Content
# - watercolor-vignette.tsx: SVG Filter Component

# 3. Testen
pnpm run dev
# → http://localhost:3000

# 4. Lighthouse Audit
pnpm run build && pnpm run start
# → Chrome DevTools > Lighthouse > Mobile
```

---

## 📝 Notizen & Learnings

### **Warum V-2.jpg perfekt ist:**
- ✅ Minimalistisch (viel Whitespace für Content)
- ✅ Training-Stimmung (ruhig, warm, einladend)
- ✅ Professionelle Aquarell-Qualität
- ✅ Kleine Deko-Elemente (Flamingo + Ball) ohne zu überladen

### **Warum CSS-only Buttons ausreichen:**
- ✅ Bereits in globals.css implementiert
- ✅ 0kB Overhead, keine Library-Abhängigkeiten
- ✅ Funktioniert out-of-the-box
- ✅ Konsistent mit Buch-Stil (organische Formen)

### **Nächste Schritte nach Hero:**
1. **Phase 2C:** Custom Tape-Corner Component
2. **Phase 2C:** Watercolor Filter für Cards/Sections
3. **Phase 3:** Character Field Component

---

*Dieses Dokument ist ein living blueprint - Updates nach Implementierung!*

**📅 Stand: Oktober 2025** | **🎯 Phase 2B Focus** | **🎨 Training-Stimmung**

# FC Flamingo - Team Character Images

## 📸 Erforderliche Bilder

Bitte die folgenden 6 Charaktere aus `design/bilder/Charaktere-1.jpg` einzeln extrahieren und hier ablegen:

### Hauptcharaktere (gross, mit Bio-Flip):
1. **fizzi.png** - Flamingo mit Hut (Captain, Mittelfeld)
2. **zis.png** - Papagei mit bunten Federn (Stürmer)
3. **lilly.png** - Pinguin (Abwehr)
4. **mister-king.png** - Trainer mit oranger Jacke (Trainer)

### Support-Charaktere (klein, nur Portrait):
5. **jerry.png** - Materialwart mit blauer Kappe (Materialwart)
6. **waldemar.png** - Alter Mann mit gelbem Hemd (Geheim)

---

## ✂️ Extraktions-Tipps

### Format:
- **PNG** (transparent background - bereits vorhanden!)
- **Auflösung:** Min. 400x400px (besser 600x600px)
- **Aspect Ratio:** 1:1 (quadratisch)

### Tools:
- **Photoshop:** Ellipse Selection Tool → Crop → Export as PNG
- **GIMP:** Free-Select Tool → Crop to Selection → Export
- **Online:** remove.bg (falls Background nicht transparent ist)

### Dateinamen (exakt so!):
```
fizzi.png
zis.png
lilly.png
mister-king.png
jerry.png
waldemar.png
```

---

## 🎯 Verwendung

Die CharacterCard Component erwartet die Bilder unter:
```
/images/team/{character-name}.png
```

Alle bereits im Code referenziert - einfach Dateien hier ablegen und es funktioniert! ✅

---

## 🔍 Preview

Nach dem Speichern der Bilder:
```bash
cd web
pnpm dev
```

Navigiere zu `http://localhost:3000/#team` → Team Section sollte live sein!

---

**Stand:** 2025-10-19 | **Status:** Ready für Bilder 🎨

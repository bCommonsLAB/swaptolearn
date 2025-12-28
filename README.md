# SwapToLearn

Digitale Teilhabe für alle Menschen!!!!

## Projekt-Setup

Dieses Projekt wurde mit React und Vite erstellt und verwendet Relume UI für die Navigation.

### Voraussetzungen

- Node.js (Version 18 oder höher)
- npm oder yarn

### Installation

1. Dependencies installieren:
```bash
npm install
```

2. Entwicklungsserver starten:
```bash
npm run dev
```

3. Projekt für Produktion bauen:
```bash
npm run build
```

4. Produktions-Build lokal testen:
```bash
npm run preview
```

## Verwendete Technologien

- **React** - UI-Framework
- **Vite** - Build-Tool und Development-Server
- **Relume UI** - UI-Komponenten-Bibliothek
- **Framer Motion** - Animationen
- **React Icons** - Icon-Bibliothek
- **Tailwind CSS** - Utility-First CSS Framework

## Projektstruktur

```
swaptolearn/
├── src/
│   ├── components/
│   │   └── Navbar7.jsx    # Relume Navbar-Komponente
│   ├── App.jsx            # Haupt-App-Komponente
│   ├── main.jsx           # Entry Point
│   ├── App.css            # App-spezifische Styles
│   └── index.css          # Globale Styles und Tailwind Direktiven
├── index.html             # HTML-Template
├── package.json           # Dependencies und Scripts
├── vite.config.js         # Vite-Konfiguration
├── tailwind.config.js     # Tailwind CSS-Konfiguration
└── postcss.config.js      # PostCSS-Konfiguration
```

## Entwicklung

Die Navbar-Komponente wurde von Relume generiert und ist vollständig responsive. Sie unterstützt:
- Mobile Navigation mit Hamburger-Menü
- Desktop Navigation mit Dropdown-Menüs
- Animierte Übergänge mit Framer Motion
- Responsive Design für verschiedene Bildschirmgrößen

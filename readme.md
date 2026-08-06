# theogalh.dev — Design System

Dark, quiet developer-portfolio system. One near-black ground (`--ink`), one periwinkle accent (`--peri`), three signal colors. Space Grotesk for display, Instrument Sans for UI, IBM Plex Mono for metadata. The signature mark is the dot.

## Files
- `styles.css` — all tokens, base styles, component classes, motion utilities, responsive rules.
- `foundations/` — colors, type, the dot, motion.
- `components/` — component sources + specimen cards.
- `screens/` — reference screens (theoapi admin, dashboards, ytp).
- `templates/` — starting points for consuming projects.

## Components
- BarChart — barres horizontales
- Breadcrumb — fil d'ariane
- Button — primary / ghost / danger, md / sm
- Chip — pill link, optional accent
- CommandPalette — ⌘K, filtrage, groupes, clavier
- DataTable — tri, sélection, bulk actions, pagination en props
- Donut — répartition + légende
- Dot — status dot, optional pulse
- Icon — 16px stroke icons (chevrons, x, plus, check, search, copy, external, trash, warn, info)
- LogViewer — flux de logs mono, niveaux, filtre, autoscroll
- PlayerBar — lecture média : play/pause, scrub, vitesse
- Stamp — mono uppercase status pill (ok / warn / danger)
- SearchInput — champ recherche avec icône + raccourci
- Sparkline — mini courbe pour stat cards
- Switch — toggle with label
- ThemeSwitcher — dark/light persistant (localStorage)
- UploadProgress — file d'uploads : progression, vitesse, annuler, done/error
- Modal — confirmation dialog
- Toast — bottom-right notification (neutral / ok / bad)
- Tooltip — hover/focus label
- Dropdown — actions menu
- Pagination — mono pager with ellipsis
- Skeleton — loading placeholder (line / circle / block)
- StatCard — KPI card with delta

## Rules
- One filled (primary) button per view; everything else ghost.
- Signals only via ok/warn/bad — never new colors.
- Motion: 150–350 ms, easing `cubic-bezier(.2,.8,.2,1)`, respects `prefers-reduced-motion`.
- Layout collapses at 900px (rail → chips row) and 600px.
- Light theme: `data-theme="light"` on any container flips all tokens.
- Logo/favicon: `assets/logo.svg`.
- Swagger UI (FastAPI): servir `assets/swagger-theogalh.css` via `swagger_css_url` — recette dans la carte Code & API.

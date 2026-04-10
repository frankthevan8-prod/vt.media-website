# CLAUDE.md — VT Media Website

> Inherits all shared rules from parent `AI Website/CLAUDE.md`. This file covers VT Media-specific details only.

---

## Project Info
- **GitHub repo:** `frankthevan8-prod/vt.media-website`
- **Live domain:** `vtmedia.co` (update canonical, OG URLs, sitemap if domain changes)
- **Stack:** React + Vite + Tailwind CSS + Three.js (3D hero background)
- **Dev server:** `npm run dev` → `http://localhost:5173`

---

## Brand
- **Background colors:** `#0a0a0a` (primary sections), `#080808` (alternate sections)
- **Theme:** Dark, premium, minimal
- **Logos:** `public/vt_logo_v1.svg`, `public/vt_logo_arrow.svg`
- **OG / favicon image:** `public/og-image.png` (1200×630 VT logo)
- **Team photos:** `public/andy.png`, `public/frank.png`

---

## Key Components
| Component | Section ID | Purpose |
|---|---|---|
| `src/components/Nav.jsx` | — | Fixed top nav, scroll-aware |
| `src/components/Hero.jsx` | — | Full-screen hero with 3D canvas |
| `src/components/Services.jsx` | `#services` | Four service cards |
| `src/components/Team.jsx` | `#team` | Andy & Frank profile cards |
| `src/components/OriginStory.jsx` | `#about` | Founder story section |
| `src/components/WhyUs.jsx` | `#contact` | Conversion/value prop section |
| `src/components/FreeAudit.jsx` | `#audit` | Free audit CTA |
| `src/components/Contact.jsx` | `#reach-out` | Contact cards |
| `src/components/Footer.jsx` | — | Footer with logo and links |

---

## People
- **Andy** — Co-Founder, Instagram: `@andytrancao_`
- **Frank** — Co-Founder, Instagram: `@frankthevan`

---

## Section Spacing
All content sections use `py-12 px-6`. Do not increase without approval.

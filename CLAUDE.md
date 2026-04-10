# CLAUDE.md — AI Website Projects (Shared Rules)

## Folder Structure
This folder contains multiple website projects. Each website lives in its own subfolder (e.g. `VT media/`, `Future Site/`). Rules here apply to ALL projects under this folder.

```
AI Website/
├── .claude/          ← Shared skills (available to all websites)
├── CLAUDE.md         ← This file — shared rules
├── VT media/         ← VT Media website
│   ├── CLAUDE.md     ← VT Media-specific overrides
│   └── src/, public/, package.json, etc.
└── New Website/      ← Future websites follow the same pattern
```

---

## Default Stack (Frank's Preference)
- **Framework:** React + Vite
- **Styling:** Tailwind CSS (config file, not CDN)
- **Language:** JSX (not TypeScript unless requested)
- **Dev server:** `npm run dev` → runs at `http://localhost:5173`
- **Deploy:** Vercel via GitHub (auto-deploys on push to `master`)
- **Git remote:** push to `origin master` after every meaningful change

---

## Starting a New Website
1. Create a subfolder: `AI Website/[Site Name]/`
2. Init with Vite: `npm create vite@latest . -- --template react`
3. Install Tailwind: follow official Vite+Tailwind setup
4. Check for `brand_assets/` folder — use any logos, colors, or style guides found there
5. Run the `ui-ux-pro-max` skill to generate a design system before writing any UI code
6. Implement the full SEO checklist (see below) before first deploy

---

## SEO Checklist (Always Implement Before Deploy)
Every website must have all of these before going live:

### In `index.html`
- [ ] `<title>` — concise, brand + value prop
- [ ] `<meta name="description">` — 120–160 chars
- [ ] `<meta name="robots" content="index, follow">`
- [ ] `<link rel="canonical" href="https://yourdomain.com">`
- [ ] `<link rel="icon" type="image/png" href="/og-image.png">`
- [ ] `<link rel="apple-touch-icon" href="/og-image.png">`
- [ ] `<meta name="theme-color" content="[brand bg color]">`
- [ ] Open Graph: `og:type`, `og:url`, `og:title`, `og:description`, `og:image` (1200×630px), `og:image:width`, `og:image:height`, `og:site_name`, `og:locale`
- [ ] Twitter Card: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- [ ] JSON-LD structured data: `Organization`, `WebSite`, `LocalBusiness` (if applicable)

### Files in `public/`
- [ ] `robots.txt` — allow all, point to sitemap
- [ ] `sitemap.xml` — list all pages with `<lastmod>` and `<priority>`
- [ ] `og-image.png` — 1200×630px branded social preview image

### In Components
- [ ] All `<img>` tags have `alt` attributes
- [ ] Below-fold images have `loading="lazy"`
- [ ] One `<h1>` per page, logical `h2` → `h3` hierarchy

---

## Design Guardrails (Anti-Generic)
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Derive from brand color.
- **Shadows:** Never flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never same font for headings and body. Pair a display font with a clean sans. Tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Spacing:** Consistent spacing tokens — not random Tailwind steps.
- **Depth:** Layered surface system (base → elevated → floating).

---

## Hard Rules
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
- Do not add sections or features not requested
- Do not skip the SEO checklist on new sites
- Do not push without verifying `npm run build` works
- Always commit and push after meaningful changes — Vercel auto-deploys on push

---

## Git Workflow
```bash
git add <specific files>
git commit -m "Short description of change"
git push origin master
```
Never use `git add -A` without checking `git status` first (avoids accidentally committing `.env`, large binaries, etc.).

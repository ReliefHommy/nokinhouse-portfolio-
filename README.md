# Portfolio — drop-in instructions

## 1. Copy files into your existing Next.js repo (App Router)

- `app/layout.tsx` → merge into your existing `app/layout.tsx` (don't just
  overwrite if you already have metadata/providers there)
- `app/page.tsx` → this becomes your homepage (or move to `app/portfolio/page.tsx`
  if you want it on a sub-route instead)
- `app/globals.css` → merge the `:root` custom properties into your existing
  globals.css
- `components/Header.tsx`, `Hero.tsx`, `Projects.tsx`, `About.tsx`, `Contact.tsx`
  → copy into your `components/` folder

## 2. Export real images from Figma and place them here

Create `/public/images/` in your repo and export these from Figma
(right-click layer → Export → PNG at 2x, or SVG for icons):

| Figma layer (approx.) | Save as                              |
|---|---|
| Logo (4 84056069)     | `public/images/logo-nok-rattana.png` |
| Avatar (9 1)           | `public/images/avatar.png`           |
| Social icon (13 4)     | `public/images/icon-social-1.png`    |
| Social icon (12 2)     | `public/images/icon-social-2.png`    |
| Social icon (11 2)     | `public/images/icon-social-3.png`    |
| ecommerce 1            | `public/images/project-thai-flavours.png` |
| community 1            | `public/images/project-somtams-society.png` |
| social 1               | `public/images/project-ai-automation.png` |

## 3. Fix before publishing

- [ ] Confirm "Orbit" font — not a real Google Font. `layout.tsx` currently
      substitutes Orbitron as a placeholder. Swap in the correct font (or
      self-host if it's a paid/custom font).
- [ ] Replace placeholder email/LinkedIn/GitHub links in `Contact.tsx`
- [ ] Confirm project status text is current (Thai Flavours, Somtam mobile app)

## 4. Run it

```bash
npm run dev
```

Check at both desktop and mobile widths — this version uses responsive
flexbox instead of the fixed pixel positions from the Figma export, so
spacing may need small tweaks to match your eye on the original design.

# Project: Shivargha's Portfolio

Personal portfolio site for **shivargha98.github.io** (future custom domain: `shivargha.com`), built to showcase AI Product Manager candidacy.

**Full design spec:** [plan.md](../plan.md) — read it before making structural changes.

## Quick Facts

- **Stack:** React (JSX, no TS) + Vite + Tailwind CSS + react-router-dom + Framer Motion
- **Deploy:** GitHub Actions → GitHub Pages (`actions/upload-pages-artifact` + `deploy-pages`), no `gh-pages` branch
- **Theme:** Light only, "consulting editorial" style — navy `#0A1930` + gold accent `#C68A3D` on warm off-white `#FBF9F4`. Fonts: Fraunces (headlines), Inter (body), JetBrains Mono (tags/chips).
- **Routing:** Landing page (`/`) is one scroll with anchor nav (Experience/Skills/Projects/Case Studies; the experience section anchor is `#experience`). Each project also gets its own deep-dive page at `/projects/:slug`.
- **Content source of truth:** `src/data/projects.js` and `src/data/experience.js` — edit these, not JSX, when updating content.
- **Case Studies section:** intentionally empty for now (real content coming end of July 2026) — don't remove the placeholder or the route.
- **Assets:** profile photo source at repo root (`ShivarghaProfilePic.png`, needs optimizing before use); résumé PDF goes to `public/resume.pdf`.
- **Custom domain:** LIVE at `shivargha.com` (Hostinger DNS → GitHub Pages A records; `www` CNAME → shivargha98.github.io). `public/CNAME` holds the domain; do not delete it or the domain mapping breaks on the next deploy.

## Constraints

- **No em-dashes (—) anywhere in site copy.** Use commas, colons, semicolons, periods, or a middle dot (·) for label separators instead. En-dashes in date ranges ("Apr 2026 – Present") are fine.
- No dark mode.
- No phone number anywhere on the public site — email only (`shivarghabandopadhyay@gmail.com`).
- Animations should stay subtle (scroll reveals, hover lifts, count-ups) — not extravagant.

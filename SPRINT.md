# Portfolio Sprint Plan
_Last updated: 2026-05-04_

---

## Theme — Burnt Signal ✓
Background: `#fafaf8` warm white · Primary: `#c2410c` burnt orange · Accent: `#0f766e` deep teal
Fonts: `Cormorant Garamond` (display/headings) + `DM Sans` (body) + `DM Mono` (labels/mono)
Default: Light mode. Dark mode toggle fixed top-right.
**Status: Implemented**

---

## What's Done ✅

| Item | Status |
|---|---|
| Bento grid layout (4-col desktop, responsive) | ✅ |
| Burnt orange + warm white colour system | ✅ |
| Cormorant Garamond / DM Sans / DM Mono fonts | ✅ |
| Background orbs + shimmer + animated dots | ✅ |
| Count-up animation on stat tiles | ✅ |
| Floating photo in identity block | ✅ |
| Dark/light mode toggle (fixed top-right) | ✅ |
| Experience carousel popup | ✅ |
| Philosophy popup (8 principles + extended text) | ✅ |
| Key Outcomes popup (card grid) | ✅ |
| Skills popup (core competencies + technical) | ✅ |
| Blueprints popup (12 domains + 6 featured) | ✅ |
| Sectors popup (9 industries with icons) | ✅ |
| Innovation block + popup (ARIA + 4 initiatives) | ✅ |
| Board Communication block + popup | ✅ |
| Open to Opportunities block | ✅ |
| About block (Cormorant Garamond italic) | ✅ |
| Connect block (2×2 icon+label grid) | ✅ |
| Bottom links bar (Blog, n8n, Blueprints, Periodic Table) | ✅ |
| Stats: 20+ Yrs · 250+ Projects · 400+ Team · 9+ Sectors | ✅ |
| Yrs + Projects stats clickable → popups | ✅ |
| Sectors stat clickable → sectors popup | ✅ |
| Profile photo (corner fade into identity block) | ✅ |
| Data sync from resume (experience, certifications, metrics) | ✅ |
| SEO: meta description, keywords, canonical URL | ✅ |
| OG tags + Twitter card | ✅ |
| JSON-LD Person schema | ✅ |
| Google Fonts preconnect | ✅ |
| ARIA labels on all popup buttons | ✅ |
| Font consistency: font-display on all card titles | ✅ |
| Font size consistency: text-xs minimum on content | ✅ |
| OG card HTML (public/og-card.html) | ✅ |

---

## Remaining 🔲

### High Priority

| # | Task | Notes |
|---|---|---|
| OG image file | Open `/og-card.html` in browser at 1200×630, screenshot → save as `/public/og-image.png` | Manual step |
| Mobile QA | Test on actual phone — check all popups, grid, touch targets | Manual step |
| Verify all external links | Blog, n8n, Blueprints, Periodic Table, LinkedIn, GitHub | Manual step |

### Medium Priority

| # | Task | Notes |
|---|---|---|
| CISSP cert badge | Add "Exam Scheduled Q3 2026" to visible certifications somewhere | Data only |
| Cloudflare deploy check | Confirm Cloudflare Pages is auto-deploying from main branch | Infra |
| CSP headers | Add Content-Security-Policy in Cloudflare settings | Infra |

### Nice to Have

| # | Task | Notes |
|---|---|---|
| Contact form | Formspree or Netlify Forms to replace mailto link | Feature |
| WebP profile photo | Convert profile-photo.png to .webp for faster load | Performance |
| Lighthouse audit | Run Lighthouse in Chrome DevTools, target 90+ score | QA |
| Schema.org review | Verify JSON-LD renders correctly in Google Rich Results Test | SEO |

---

## Two Audit Verdicts (2026-05-04)
Both independent audits rated the design as **executive-level/premium branding**:
- Color palette intentional and cohesive (burnt orange + teal + cream)
- Typography (Cormorant Garamond) read as "Georgia or similar" — elegant serif
- Header positioning variation flagged as **sophisticated UX thinking**, not inconsistency
- Large stat numbers (20+, 250+, 400+) called out as high-impact visual anchors
- Profile photo + hero section cited as immediate credibility signal

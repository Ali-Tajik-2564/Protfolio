# DESIGN.md — Ali Tajik Portfolio

Distilled from `public/desing/*.svg` so the SVGs never need to be pasted into chat or read again.
Text in the SVGs (names, stats, emails, years) is **placeholder** — real content comes from `CLAUDE.md`.

## 1. Tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| `--charcoal-dark` | `#1A1A1A` | page/section bg, inputs, inner cards |
| `--charcoal-medium` | `#242424` | cards, surfaces |
| `--charcoal-light` | `#2D2D2D` | dividers, progress tracks, tag bg |
| `--purple-deep` | `#4C1D95` | **backgrounds/borders only**, not text |
| `--purple-main` | `#7C3AED` | primary actions, borders, glow |
| `--purple-light` | `#A78BFA` | **headings, accent text, links** |
| `--blue-main` | `#38BDF8` | secondary accent, status dot, highlights |
| `--blue-soft` | `#7DD3FC` | blue text on dark (fix typo `#7FF3Fc` in CSS) |
| `--blue-pale` | `#BAE6FD` | rare light accents |
| text primary | `#FFFFFF` | titles, body on dark |
| text secondary | `#A1A1AA` | descriptions |
| text muted | `#71717A` | captions, meta |
| text faint | `#52525B` | placeholders |

Gradients: purple accent `#7C3AED → #8B5CF6 → #A78BFA` (buttons, underline bars); card `#242424 → #1A1A1A`; section bg `#1A1A1A ↔ #121212`; hero bg `from-[#1A1A1A] via-[#221F2C] to-[#28223A]`.

**Contrast rule:** never `#4C1D95` text on charcoal. Use `#A78BFA` or white.

### Typography
- Persian: **Rastin** (Bold). English: **Aonic** (Thin 300 / Regular 400 / Medium 500 / Bold 700).
- Scale: H1 64–80px (mobile 36–48) · H2 48px (section titles) · H3 24px · H4 18px · body 16px · small 14px · caption 12px (letter-spacing .03em).
- Section eyebrow: 14px, 600, `letter-spacing: 2px`, `#A78BFA`, uppercase (English only).

### Shape, spacing, effects
- Container max 1280px, side padding 80px desktop / 16–24px mobile; section vertical padding ~64–96px.
- Radius: cards 20px, inner blocks 10–12px, pills/buttons `rounded-full`, section panels 24px.
- Borders: `0.8px` solid purple (`#7C3AED` / `#8B5CF6` / `#A78BFA` rotating), optionally 20% opacity on big panels.
- Shadow: purple glow `0 8px 16px rgba(124,58,237,.12)`; hover `0 12px 24px rgba(124,58,237,.25)`.
- Ambient blurred ellipses (purple 3–4%, blue 2–3%) behind sections.
- Optional dot-grid background (purple, ~12% opacity, 32px).
- Animation: fade + 20px slide-up on enter, stagger 0.15s; pulse on status dots; border color pulse (3s) on project cards. Respect `prefers-reduced-motion`.

### Reusable patterns
- **Section header:** eyebrow → H2 white → 80×3px gradient bar (centered), then content.
- **Pill tag:** `rounded-full`, bg accent @12%, border accent @0.5px, text 11–12px accent color.
- **Card:** gradient card bg, 0.8px purple border, radius 20, purple shadow, hover lifts and glows.
- **Primary button:** purple gradient fill, white 600 text, rounded-full, purple shadow.
- **Secondary button:** transparent, 1.5–2px purple (or blue) border, text same color; hover fills.
- **Input:** bg `#1A1A1A`, 0.8px purple border, radius 10, 44–48px high, label 12px `#A1A1AA` above.

## 2. Sections (order on page)

### Header (built)
Sticky, 64/80px high, `#1A1A1A/80` + backdrop blur, bottom border purple. Logo left, nav (Home, About Me, Projects, Skills, Contact Me), Resume pill button, mobile hamburger menu. Needs: language switcher (fa/en), scroll-spy active state.

### Hero / Landing (built)
Two columns: left = name, tagline (blue), short description, two buttons (Projects → `#projects`, Contact → `#contact`); right = animated code-terminal SVG. Name color should be `#A78BFA`, not `#4C1D95`.

### About (`aboutme.svg`) — partially built
- Header: "About Me".
- Left card (520px): avatar (use `public/images/Ali Tajik.png`), name, title, location, availability badge (pulsing blue dot), BIOGRAPHY block, motto quote box.
- Right: **Career Journey timeline** — vertical gradient line (purple → light purple → blue), dots with glow on current item, cards (date in accent color, role, place, one-line description). Use only real entries.
- Bottom stats bar: **drop or replace with real facts** (e.g. number of real projects, stack count).

### Skills (`myskill.svg`)
- Header: eyebrow "TECHNICAL SKILLS".
- Two columns of category panels: Frontend, Backend, Database & Tools. Each category = header pill-bar (accent border, emoji/icon + name) + 2-column grid of skill cards (name + one-line description).
- **No percentage bars.** Optional: small "used in: <project>" line instead.
- Bottom: "Other technologies" tag cloud.

### Projects (`myproject.svg`)
- Header: eyebrow "FEATURED PROJECTS".
- 3-column grid (card 400×520, gap 40; 1 col mobile / 2 tablet).
- Card: image area 220px (project screenshot, category badge bottom-left), tech tags row, title 20px bold, 3–4 line description, 3 feature bullets (purple dot + muted text), links row ("Live Demo →" accent, "GitHub" muted).
- Border color alternates purple / violet / blue per card.
- Footer: outline pill button "View All Projects →".
- Real content: Kia/Hyundai spare-parts store; Mademoiselle women's clothing store.

### Contact (`contactme.svg`)
- Header: eyebrow "GET IN TOUCH", H2, one-line subtitle.
- Two columns: form card (540px: name, email, subject, message, gradient submit button) + info card (680px: email, location, working hours; social icon buttons 44px squares; divider).
- "Available for freelance work" badge with pulsing blue dot.
- Replace placeholder phone/socials with real ones; drop phone if not wanted publicly.

### Footer
Social icon circles (36px), divider, copyright line (bilingual).

## 3. Responsive & RTL
- Breakpoints: Tailwind defaults. Stack columns below `lg`.
- RTL (fa): mirror layout with logical properties; timeline line and card accents flip sides; numbers may stay Latin or use Persian digits consistently per locale.
- Use `react-icons` instead of emoji for production icons.

## 4. Planned additions (not in SVGs yet)
- `/blog` list + `/blog/[slug]` post page (same card style, tag pills, reading time, language toggle per post).
- Language switcher in Header.
- Resume download button (real PDF).

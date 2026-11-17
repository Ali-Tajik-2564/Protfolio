# CLAUDE.md — Ali Tajik Portfolio

> Before writing any Next.js code, read the relevant guide in `node_modules/next/dist/docs/`.
> This Next.js version (16.x) has breaking changes vs. older knowledge. Heed deprecations.
> See also: `AGENTS.md`, `DESIGN.md` (visual spec for every section).

## Owner / Identity (single source of truth)
- English name: **Ali Tajik** — Persian name: **علی تاجیک**
- Title: Full-Stack Developer (Next.js, React, Node.js, TypeScript)
- Location: Tehran, Iran — freelance & remote
- Email: ali.tajik.1385.a@gmail.com
- GitHub: https://github.com/Ali-Tajik-2564
- Bio tone: formal but creative
- Never use the name "AmirHossein Dosti" (it appears only in old SVG mockups as a placeholder).
- Never invent stats (years of experience, client counts, "24/7 support", "100% satisfaction", skill percentages).

## Stack
- Next.js 16.2.4 (App Router, `src/app`), React 19.2.4, TypeScript (strict)
- Tailwind CSS v4 (`@import "tailwindcss"`, tokens in `@theme inline` in `src/app/globals.css`)
- `motion` (import from `motion/react`), `react-icons`
- Package manager: **npm**
- Lint: `npm run lint` — run it and fix issues before asking for review.

## Structure
```
src/app/            layout.tsx, page.tsx, globals.css
src/components/     Header, Landing, AboutMe, MySkills, MyProjects, ContactMe
public/fonts/       Aonic-{Thin,Regular,Medium,Bold}.ttf, Digi_Rastin_Bold.{ttf,otf}
public/images/      Ali Tajik.png, full-logo.webp, logo.jpg
public/desing/      SVG design mockups (folder name is intentionally "desing")
```
Each section = one component folder `Name/Name.tsx`. Client components only when needed (`'use client'`).

## Language & direction
- Site is **bilingual: Persian (fa, RTL) + English (en, LTR)**. Main audience for now: Iranian.
- Dark theme only (for now).
- Use logical CSS properties (`ms-*`, `me-*`, `ps-*`, `pe-*`, `text-start`) so RTL works. Avoid `left/right` utilities.
- All user-facing text must live in translation files, not hardcoded in components (once i18n is set up).
- Planned i18n: `[locale]` route segment (library choice pending — verify against Next 16 docs first).

## Design rules (summary — details in DESIGN.md)
- Charcoal backgrounds, purple primary, light-blue secondary accent.
- **Contrast rule:** text/headings use `#A78BFA` (purple-light) or white. `#4C1D95` (purple-deep) is for backgrounds/borders only, never for text on charcoal.
- Use CSS variables / Tailwind tokens (`--charcoal-*`, `--purple-*`, `--blue-*`), not raw hex in components.
- Fonts: Persian → Rastin; English → Aonic (verify glyph coverage). Fallback: system sans.

## Code conventions
- Functional components, default export, PascalCase file/folder names.
- Section anchors: every section root has an `id` (`home`, `about`, `skills`, `projects`, `contact`) and nav scrolls to it.
- Animations: subtle (motion `whileInView`, `once: true`), respect `prefers-reduced-motion`.
- Accessible: semantic HTML, alt text, visible focus states, labels on form fields.
- No `localStorage` assumptions in server components. No unused deps.

## Content plan
- Real projects (descriptions pending): Kia/Hyundai spare-parts store website; "Mademoiselle" (مادمازل) women's clothing store.
- Skills: list will be provided by owner. Show as grouped tags (Frontend / Backend / Tools), no percentages.
- Blog: weekly at most, posts in fa and en. Topics: work updates, high-level bugs on his stack, experience and soft skills.
- Blog structure (pending decision): local MDX files under `content/posts/<slug>/{fa,en}.mdx` with frontmatter (title, date, description, tags, locale).

## Known issues to fix (as of setup)
1. `globals.css`: `Aonic-Thin` src path contains a hidden character → font not loading; Rastin `.ttf` declared with `format('opentype')`; Aonic Medium/Bold not declared.
2. `globals.css`: `@theme inline` tokens reference themselves (`--x: var(--x)`) — verify they resolve.
3. `Landing.tsx`: both buttons scroll to top instead of their sections.
4. `Header.tsx`: active-link state not synced with scroll; Resume button links to `/`.
5. `layout.tsx`: `icons` and `openGraph.images` are empty; `lang` is fixed to `en`.
6. `--blue-soft` in CSS (`#7FF3Fc`) differs from design (`#7DD3FC`).
7. `MySkills`, `MyProjects`, `ContactMe` are empty placeholders; `AboutMe` lacks the timeline.

## Working agreements
- Make small, focused changes; one section/task at a time.
- Don't paste/read `package-lock.json` or the large SVGs — use `DESIGN.md`.
- Ask before adding a dependency.

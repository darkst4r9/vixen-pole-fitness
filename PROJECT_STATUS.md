# Project Status

## Current Phase
Phase 2: Core Static Pages

## Status
IN_PROGRESS

## Owning Agent
frontend-engineer

## GitHub Tracking
- Repo: https://github.com/darkst4r9/vixen-pole-fitness
- Project board: https://github.com/users/darkst4r9/projects/4

## Handoff Log

### 2026-06-29 — bootstrap
- Project bootstrapped. ARCHITECTURE.md approved. Agent roster approved.
- Stack: Astro + Tailwind CSS + Vercel
- All 4 agents defined in .claude/agents/
- GitHub repo and project board created
- Open questions: none
- Next action: invoke frontend-engineer to begin Phase 1

## Handoff Note — frontend-engineer — 2026-06-29

### What changed

New files created:
- astro.config.mjs — Astro config with @tailwindcss/vite plugin
- package.json — project manifest, name corrected to vixen-pole-fitness
- package-lock.json — lockfile
- tsconfig.json — TypeScript config from Astro minimal template
- .gitignore — covers node_modules, dist, .astro, .env
- src/styles/global.css — Tailwind v4 @theme block with all 5 brand color tokens
- src/data/content.ts — banner and pricing data
- src/components/Nav.astro — sticky nav with logo, links, CTA, mobile hamburger
- src/components/Footer.astro — brand-black footer with logo, links, address, Instagram
- src/layouts/BaseLayout.astro — html shell, Inter font, favicon, Nav + slot + Footer
- src/pages/index.astro — "Coming Soon" placeholder using BaseLayout
- public/images/brand/logo.png — geometric fox mark (was already present)
- public/images/brand/bg-texture.jpg — texture asset (was already present)

### Build result

npm run build completed with zero errors. 1 page built in ~355ms. Output: dist/index.html.

### Design token note

Astro added Tailwind v4 (not v3). Tailwind v4 uses CSS-first configuration; there is no tailwind.config.mjs. Brand color tokens are defined in src/styles/global.css using @theme {}. The generated utility class names are identical: bg-brand-black, text-brand-mint, etc.

### Still open

- Favicon: currently using logo.png (PNG). A proper .ico file can be generated in a later phase.
- No GA4 wired (Phase 4).
- No Formspree, Mailchimp, or TeamUp integration yet (later phases).
- Mobile hamburger uses a CSS-only checkbox hack. Works but carries a known UX quirk: clicking a nav link does not close the menu. Can be upgraded to a small script in Phase 2 if flagged by ux-reviewer.

### Recommended next action
qa-test-engineer and ux-reviewer to verify Phase 1 acceptance criteria.

## Handoff Note — frontend-engineer — 2026-06-29 (Phase 2)

### What changed

New files created:
- .nvmrc — pins Node 22 so local dev does not require manual nvm use
- src/pages/about.astro — About page with hero, studio story, co-owner cards, values, and location block
- src/pages/contact.astro — Contact page with Formspree form and contact info/map column

Modified files:
- src/pages/index.astro — replaced "Coming Soon" placeholder with full Home page: banner, hero, value props, featured classes, instructor teaser, booking CTA strip
- src/data/content.ts — added formspreeEndpoint export (value: "FORMSPREE_ENDPOINT_PLACEHOLDER")
- src/styles/global.css — added :has() CSS rule to fix mobile hamburger open/close icon swap

### Phase 1 quirks addressed

- .nvmrc added with "22"
- Hamburger icon toggle fixed via `nav:has(#mobile-menu-toggle:checked)` CSS in global.css, using the :has() pseudo-class since the label precedes the checkbox in DOM order (peer-based approach cannot reach backward siblings)

### Build result

npm run build completed with zero errors. 3 pages built in ~365ms. Output: dist/index.html, dist/about/index.html, dist/contact/index.html.

### Acceptance criteria status

1. Home hero: headline, subhead, and two CTAs on a brand-mint background. Renders cleanly on mobile and desktop.
2. Banner: conditional render on Home page. Currently banner.active is false so nothing renders; flipping to true will show the strip.
3. About page: co-owner story, studio values, and location block built.
4. Contact form: posts to formspreeEndpoint via standard HTML POST. Tony must create a Formspree account at formspree.io, create a form targeting VXN.polefitness@gmail.com, and replace "FORMSPREE_ENDPOINT_PLACEHOLDER" in src/data/content.ts with the real endpoint URL (format: https://formspree.io/f/xxxxxxxx).
5. All three pages: correct title and meta description set via BaseLayout props.

### Still open

- Formspree endpoint: placeholder value in content.ts. Tony must wire the real URL.
- Favicon: still logo.png. Can become a proper .ico in Phase 4.
- No GA4 (Phase 4).
- Mobile nav link click does not close the menu (known CSS-only limitation from Phase 1). Can be fixed with a small inline script in Phase 3 or 5 if flagged by ux-reviewer.

### Recommended next action
qa-test-engineer and ux-reviewer to verify Phase 2 acceptance criteria.

## Open Questions for Me
None.

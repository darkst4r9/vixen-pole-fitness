# Vixen Pole Fitness — Site Architecture

## Overview

A full visual and structural rework of vixenpolefitness.com, currently built on Wix. The
replacement is a static Astro site deployed to Vercel. All content is managed by the
developer via code; no CMS is needed. Banner announcements and pricing are stored in a
single data file so updates require only a file edit and a git push.

**Framework:** Astro  
**Styling:** Tailwind CSS  
**Hosting:** Vercel (free tier)  
**Booking:** TeamUp (existing, embedded widget — no platform change)  
**Contact form:** Formspree (free tier)  
**Newsletter:** Mailchimp (free tier, embedded form endpoint)  
**Analytics:** Google Analytics 4  
**Domain:** vixenpolefitness.com (existing; DNS cutover from Wix to Vercel at launch)  
**GitHub repo:** https://github.com/darkst4r9/vixen-pole-fitness  
**GitHub Project board:** https://github.com/users/darkst4r9/projects/4

---

## Page Inventory

| Page | Purpose |
|------|---------|
| Home | Hero, value prop, active banner (if any), featured classes teaser, instructor teaser, booking CTA |
| Classes & Schedule | Class type cards, TeamUp booking widget embed |
| Pricing | Pricing tiers, pack options, cancellation policy |
| Instructors | Full roster with bio, specialty, photo, Instagram link |
| About | Studio story, values, co-owner intro, studio photos |
| Contact | Contact form, address, map embed, social links, newsletter signup |

---

## Content Model

No CMS. All content lives in source files. Dynamic-ish content (banners, pricing) lives in
`src/data/content.ts` so updates are a single-file edit with no risk of touching page
templates.

### src/data/content.ts

```ts
export const banner = {
  active: false,
  text: "",          // e.g. "Holiday Special — 20% off 8-class packs through Dec 31"
  link: "",          // optional CTA URL
  linkText: "",      // optional CTA label
};

export const pricing = {
  unlimitedMonthly: 229,
  eightClassPack: 185,
  fourClassPack: 100,
  sixMonthContract: 1000,
  dropIn: 30,
  packExpiry: "60 days",
  cancellationPolicy: "4-hour notice required",
};
```

All other content (instructor bios, class descriptions, studio copy) lives in
`src/data/instructors.ts` and `src/data/classes.ts` as typed arrays. Straightforward to
update; no deployment risk beyond what a normal push carries.

---

## Third-Party Integrations

### TeamUp (booking)
Embedded via TeamUp's iframe widget on the Classes page and as a condensed CTA on Home.
No API integration. Existing TeamUp account and class data carry over unchanged.

### Formspree (contact form)
The contact form posts to a Formspree endpoint. Submissions are forwarded to
VXN.polefitness@gmail.com. Free tier handles 50 submissions/month, sufficient for a
local studio. No server-side code needed.

Setup: create a free Formspree account, create a form, copy the endpoint URL into
`src/data/content.ts` or an environment variable.

### Mailchimp (newsletter)
Mailchimp's embedded form action URL is used directly in the newsletter signup form.
No API key or server function needed. Free up to 500 contacts.

### Google Analytics 4
GA4 script added to the Astro base layout via `<script>` tag. Measurement ID stored
as a Vercel environment variable (`PUBLIC_GA_MEASUREMENT_ID`).

---

## SEO Strategy

**Local business schema:** JSON-LD injected in the base layout `<head>`, typed as
`LocalBusiness` with name, address (24831 Jefferson Ave Ste. 104, Murrieta, CA 92562),
email, and geo coordinates. Highest-impact SEO action for a local studio.

**Page-level SEO:** Every page exports a `<title>` and `<meta name="description">` via
Astro's `<head>` slot. Open Graph tags on all pages.

**Sitemap:** Generated at build time via `@astrojs/sitemap`. Submitted to Google Search
Console post-launch.

**Performance targets:** Lighthouse 90+ Performance, 100 Accessibility, 100 Best
Practices, 100 SEO on all pages. Astro's zero-JS-by-default output makes this
straightforward.

**Images:** All studio photos served in WebP via Astro's built-in image optimization
(`astro:assets`).

---

## Deployment Pipeline

1. All work happens on feature branches; `main` is production.
2. Vercel deploys automatically on every push to `main`.
3. Pull request previews are available via Vercel's preview URL for each PR.
4. At launch, DNS A/CNAME records for vixenpolefitness.com are updated from Wix to
   Vercel's custom domain settings. Vercel provisions SSL automatically.
5. Wix subscription cancelled after DNS propagation is confirmed.

---

## Tooling and Integrations

| Tool | Scope | Purpose |
|------|-------|---------|
| GitHub MCP (`github`) | User (already connected) | Track build phases as Issues, manage Project board |

---

## Build Plan

### Phase 1: Project Setup and Design System
Initialize Astro project, configure Vercel deployment, establish Tailwind design tokens
(brand colors, type scale, spacing). Build global nav and footer components.

Acceptance criteria:
- Astro project created, pushed to `main`, auto-deploying on Vercel
- Tailwind config defines brand color palette and type scale extracted from current site
- Global nav and footer render correctly on mobile and desktop
- Favicon and logo set

### Phase 2: Core Static Pages
Build Home (without booking widget), About, and Contact pages. Wire Formspree contact form.

Acceptance criteria:
- Home hero renders with headline, subhead, and primary CTA on mobile and desktop
- Active banner in `content.ts` renders on Home; inactive banner shows nothing
- About page reflects co-owner story and studio values
- Contact form submits to Formspree and triggers email to VXN.polefitness@gmail.com
- Lighthouse SEO and Accessibility scores of 100 on all three pages

### Phase 3: Classes, Instructors, and Pricing Pages
Build Classes page with TeamUp widget embed. Build Instructors page from
`src/data/instructors.ts`. Build static Pricing page from `content.ts` pricing object.

Acceptance criteria:
- All 8 instructors render correctly with photo, bio, specialty, and Instagram link
- All 6 class types render correctly on the Classes page
- TeamUp booking widget loads and is functional
- Pricing page reflects all tiers and cancellation policy
- Responsive layout verified on mobile, tablet, and desktop

### Phase 4: SEO and Analytics
Implement local business schema, all page-level meta tags, sitemap, GA4 connection.

Acceptance criteria:
- JSON-LD validates in Google's Rich Results Test
- All pages have unique meta titles and descriptions
- Sitemap generates at build and is submitted to Google Search Console
- GA4 tracking confirmed (real-time view shows a pageview)
- Lighthouse scores: Performance 90+, Accessibility 100, Best Practices 100, SEO 100

### Phase 5: Newsletter and QA Polish
Wire Mailchimp newsletter signup on Home and Contact pages. Full cross-browser and
responsive QA pass.

Acceptance criteria:
- Newsletter signup submits to Mailchimp list (confirmed in Mailchimp dashboard)
- Site renders correctly in Chrome, Firefox, Safari, and mobile Safari
- No broken links or missing images
- All Lighthouse targets met across all pages

### Phase 6: Launch
DNS cutover from Wix to Vercel, SSL confirmation, post-launch smoke test.

Acceptance criteria:
- vixenpolefitness.com resolves to Vercel-hosted site with valid SSL
- All pages load correctly on the live domain
- GA4 receives traffic on the live domain
- 301 redirects configured for any URL structure changes from Wix
- Wix subscription flagged for cancellation

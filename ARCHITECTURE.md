# Vixen Pole Fitness — Site Architecture

## Overview

A full visual and structural rework of vixenpolefitness.com, currently built on Wix. The
replacement is a Webflow CMS site hosted on Webflow's CDN, migrating all content and brand
assets from the existing site. The goals in priority order: brand and design upgrade, better
content structure, full SEO coverage, and non-technical CMS editing for studio staff.

**Platform:** Webflow CMS plan  
**Booking:** TeamUp (existing, embedded widget — no platform change)  
**Newsletter:** Mailchimp (free tier)  
**Analytics:** Google Analytics 4  
**Domain:** vixenpolefitness.com (existing; DNS cutover from Wix to Webflow at launch)

---

## Page Inventory

| Page | Purpose | CMS-driven |
|------|---------|------------|
| Home | Hero, value prop, featured classes teaser, instructor teaser, booking CTA | Partial |
| Classes & Schedule | Class type cards, TeamUp booking widget embed | Yes (Class collection) |
| Pricing | Pricing tiers, FAQ, cancellation policy | No (static) |
| Instructors | Full roster with bio, specialty, photo, Instagram link | Yes (Instructor collection) |
| About | Studio story, values, co-owner intro, studio photos | No (static) |
| Contact | Contact form, address, map embed, social links | No (static) |

---

## Content Model

### Instructor collection

| Field | Type | Notes |
|-------|------|-------|
| Name | Text | Display name |
| Role | Text | Co-owner, Lead Instructor, Instructor |
| Bio | Rich text | |
| Specialty | Text | e.g. Heels, Choreography, Beginner |
| Years experience | Number | |
| Photo | Image | |
| Instagram handle | Text | Stored without @; linked on output |
| Featured on home | Boolean | Controls home page teaser |

### Class collection

| Field | Type | Notes |
|-------|------|-------|
| Name | Text | |
| Level | Option | Beginner, Intermediate, Open |
| Description | Rich text | |
| Cover image | Image | |
| TeamUp class ID | Text | For deep-linking into the booking widget |
| Show in recommended | Boolean | Controls "recommended beginner classes" block |

### Announcement collection

| Field | Type | Notes |
|-------|------|-------|
| Title | Text | |
| Body | Rich text | |
| Date | Date | |
| Type | Option | Event, Studio Update, Closure |
| Active | Boolean | Controls visibility without deleting |

---

## Third-Party Integrations

### TeamUp (booking)
TeamUp's embeddable widget drops in via a standard `<iframe>` or their JavaScript snippet.
No API integration needed. The existing TeamUp account and class data carry over unchanged.
The Classes page hosts the full schedule widget; the Home page hosts a condensed booking CTA.

### Google Analytics 4
Connected via Webflow's built-in Google Analytics integration (Project Settings > Integrations).
No custom code required. GA4 Measurement ID is the only credential needed.

### Mailchimp (newsletter)
Webflow's native Mailchimp integration connects any Webflow form to a Mailchimp list. A
newsletter signup form on the Home page and Contact page feeds the studio's mailing list.
Requires Mailchimp API key (free account).

### Contact form
Webflow native form. Submissions email to VXN.polefitness@gmail.com via Webflow's form
notification system. No third-party form service needed.

---

## SEO Strategy

**Local business schema:** JSON-LD injected in the `<head>` via Webflow custom code, typed
as `LocalBusiness` with address, phone (if available), hours, and geo coordinates for
Murrieta, CA. This is the highest-impact SEO action for a local studio.

**Page-level SEO:** Every page gets a custom meta title (under 60 chars), meta description
(under 160 chars), and Open Graph tags. Webflow's SEO panel handles this per-page.

**Sitemap:** Webflow generates and hosts `sitemap.xml` automatically. Submit to Google
Search Console post-launch.

**Performance targets:** Aim for Lighthouse scores of 90+ on Performance, 100 on
Accessibility, 100 on Best Practices, 100 on SEO on all static pages.

**Core Web Vitals:** Webflow's CDN and asset optimization handle most of this. Image assets
from the current site are re-exported at appropriate sizes and served in WebP format.

---

## Deployment Pipeline

Webflow hosts the published site on its CDN. No separate Vercel deployment.

1. Design and content work happens in the Webflow Designer (via Webflow MCP in this session).
2. Each phase is previewed via Webflow's staging link before publishing.
3. At launch, DNS A records and CNAME for vixenpolefitness.com are updated from Wix's
   nameservers to Webflow's custom domain settings. Webflow provisions SSL automatically.
4. Wix subscription is cancelled after DNS propagation is confirmed.

---

## Tooling and Integrations

| Tool | Scope | Purpose |
|------|-------|---------|
| Webflow MCP (`claude.ai Webflow`) | User (already connected) | Build pages, manage CMS collections, push design changes from Claude Code sessions |
| GitHub MCP (`github`) | User (already connected) | Track build phases as Issues, manage Project board |

**GitHub Project board creation command (run once, after repo is created):**
```
gh project create --title "Vixen Pole Fitness Rework" --owner "@me"
```

---

## Build Plan

### Phase 1: Foundation
Set up Webflow project, configure custom domain, establish design system (brand colors,
typography, spacing tokens, reusable components). Import or re-create the Vixen logo in SVG.

Acceptance criteria:
- Webflow project created and linked to vixenpolefitness.com
- Design system tokens defined (colors, type scale, spacing)
- Global nav and footer components built
- Favicon and logo set

### Phase 2: Core Static Pages
Build Home (without booking widget), About, and Contact pages.

Acceptance criteria:
- Home hero with headline, subhead, and primary CTA renders on mobile and desktop
- About page reflects co-owner story and studio values
- Contact page form submits and triggers email notification to VXN.polefitness@gmail.com
- All pages pass Lighthouse SEO and Accessibility at 100

### Phase 3: CMS Pages
Define Instructor and Class CMS collections. Build Instructors page and Classes page
(with TeamUp widget embed). Populate all 8 instructors and all 6 class types.

Acceptance criteria:
- CMS Editor accessible to non-technical staff (test login confirmed)
- All 8 instructors render correctly with photo, bio, specialty, Instagram link
- All 6 class types render correctly
- TeamUp booking widget loads and is bookable on the Classes page
- Responsive layout verified on mobile, tablet, desktop

### Phase 4: SEO and Analytics
Implement local business schema, all page-level meta tags, GA4 connection, sitemap
submission to Google Search Console.

Acceptance criteria:
- JSON-LD validates in Google's Rich Results Test
- All pages have unique meta titles and descriptions
- GA4 tracking confirmed (real-time view shows a pageview)
- Sitemap submitted to Google Search Console
- Lighthouse scores: Performance 90+, Accessibility 100, Best Practices 100, SEO 100

### Phase 5: Newsletter and Pricing
Build Pricing page (static). Wire Mailchimp newsletter signup on Home and Contact pages.
Add Announcement CMS collection and a banner/section for active announcements on Home.

Acceptance criteria:
- Pricing page renders all tiers, pack options, and cancellation policy
- Newsletter signup form submits to Mailchimp list (confirmed via Mailchimp dashboard)
- Announcement CMS item marked Active appears on the Home page

### Phase 6: QA, Polish, and Launch
Full cross-browser and cross-device QA. DNS cutover from Wix to Webflow.

Acceptance criteria:
- Site renders correctly in Chrome, Firefox, Safari, and mobile Safari
- No broken links or missing images
- DNS cutover complete, SSL active, domain resolves to Webflow-hosted site
- Wix subscription flagged for cancellation
- 301 redirects configured for any URL structure changes

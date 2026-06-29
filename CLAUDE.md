# Vixen Pole Fitness — Project Guide

## Stack

- Framework: Astro
- Styling: Tailwind CSS
- Hosting: Vercel (auto-deploys on push to main)
- Contact form: Formspree
- Newsletter: Mailchimp
- Booking: TeamUp (embedded widget)
- Analytics: Google Analytics 4

## Content Updates

Banner announcements and pricing live in `src/data/content.ts`. Edit that file and push
to main. Vercel deploys automatically. No CMS, no dashboard.

## Agent Workflow

### Phase ownership

| Phase | Implementer | Reviewers | Gate |
|-------|-------------|-----------|------|
| 1: Project Setup and Design System | frontend-engineer | ux-reviewer, qa-test-engineer | architect |
| 2: Core Static Pages | frontend-engineer | ux-reviewer, qa-test-engineer | architect |
| 3: Classes, Instructors, and Pricing | frontend-engineer | ux-reviewer, qa-test-engineer | architect |
| 4: SEO and Analytics | frontend-engineer | qa-test-engineer | architect |
| 5: Newsletter and QA Polish | frontend-engineer | ux-reviewer, qa-test-engineer | architect |
| 6: Launch | frontend-engineer | qa-test-engineer | architect |

### Gate rules

A phase may only be marked APPROVED by architect after all of the following:
- qa-test-engineer reports PASS on every acceptance criterion for the phase
- ux-reviewer reports UX SIGN-OFF: PASS on any phase marked with ux-reviewer in the
  Reviewers column above
- No open questions remain in PROJECT_STATUS.md that block the phase

architect presents a phase summary in chat and waits for explicit user approval before
writing APPROVED or invoking the next phase's agents. architect never self-approves.

### Coordination

Subagents do not share memory or communicate with each other directly. All coordination
happens through PROJECT_STATUS.md and through the user explicitly invoking the next agent.
Each agent reads PROJECT_STATUS.md on start and appends a structured handoff note on finish.

### GitHub Tracking

- Repo: https://github.com/darkst4r9/vixen-pole-fitness
- Project board: https://github.com/users/darkst4r9/projects/4
- architect opens a tracking issue at the start of each phase and closes it only after
  the phase reaches APPROVED status

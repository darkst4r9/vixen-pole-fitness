# Vixen Pole Fitness — Project Guide

## Web Research

Never use the WebFetch tool — it has repeatedly returned inaccurate or fabricated page summaries. `curl` the raw page and read/grep the actual text instead. Applies to every agent in this project's roster.

## Stack

- Framework: Astro
- Styling: Tailwind CSS
- Hosting: Vercel (auto-deploys on push to main)
- Contact: mailto link only, no form data capture
- Booking: GoTeamUp (embedded iframe)
- Analytics: Google Analytics 4 (deferred, tracked as GitHub issue #7)

## Agent Tooling

- **Playwright MCP** (`.mcp.json`, project scope, registered via `claude mcp add --scope project`) gives `qa-test-engineer` and `ux-reviewer` real browser access — actual rendered output, form submission, computed styles, and responsive checks at real viewport sizes, not just static HTML/WebFetch reads. Note: `.claude/mcp.json` is not a file Claude Code actually reads for MCP registration — a prior session created it under a mistaken assumption and it was silently inert; `.mcp.json` at the repo root is the real project-scope config. Configured with `--browser chromium` since this environment has no system Chrome install and no interactive sudo to add one. A newly added or changed project MCP server needs a Claude Code restart before its tools become callable.
- **`frontend-design` skill** (enabled globally, `claude-plugins-official`) is available to `ux-reviewer` via the `Skill` tool for genuinely new page types or sections with no existing pattern to extend — not for routine token/pattern reuse.
- **`vercel` plugin** (enabled globally) gives `frontend-engineer` and `qa-test-engineer` the `deployments-cicd` and `env-vars` skills for Vercel-specific guidance. The plugin's `vercel` MCP server (deployment status, project env vars, logs) is a remote server requiring a fresh Claude Code session to attach and a one-time OAuth authorization on first use — until that's done, agents fall back to the skills alone and should not claim to have verified live deployment state, which matters most for Phase 6 (Launch).

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
| 4: SEO | frontend-engineer | qa-test-engineer | architect |
| 5: QA Polish | frontend-engineer | ux-reviewer, qa-test-engineer | architect |
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

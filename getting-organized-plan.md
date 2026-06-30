# Plan: "Getting Organized for Bob with Bob" — Bob Showcase Addition

**Project Name:** Getting Organized for Bob with Bob  
**Target Site:** bob.rcoace.com (ftw-arrow/bob-showcase repo)  
**Goal:** Add a new featured case study to the Bob Showcase documenting how IBM Bob was used to reorganize a digital work environment and restructure the rcoace.com web presence — demonstrating Bob's planning and execution capabilities in a real, non-code-project context.

---

## Top-Level Overview

This work has two parts:

1. **Modernize the Bob Showcase** — Rebuild `src/index.html` and `src/css/main.css` to match the premium rcoace.com dark theme (navy/cyan palette, IBM Plex Sans, no emojis). The existing 4 demo cards are restyled (content unchanged). The new case study becomes a featured card (#1). Each card now shows its contributor(s) by name.

2. **Create the Case Study page** — A new `src/demos/getting-organized.html` page telling the two-phase story in a hybrid narrative+technical format. Uses real conversation moments as "Bob's Decision" callouts.

---

## Contributor Attribution Model

The Bob Showcase is a **team showcase** — each use case credits the person who built it. This sets the pattern for future Arrow team members to add their own work.

| Use Case | Contributor | LinkedIn |
|---|---|---|
| Getting Organized for Bob with Bob | Frank Welder | https://www.linkedin.com/in/frankwelder/ |
| Infrastructure Automation | Frank Welder | https://www.linkedin.com/in/frankwelder/ |
| Quantum-Safe POC Environment | Frank Welder | https://www.linkedin.com/in/frankwelder/ |
| Project Atlas: Multi-Cloud Fabric | Frank Welder | https://www.linkedin.com/in/frankwelder/ |
| Arrow Services Navigator | Omar Farid & Christopher Phipps | (LinkedIn links TBD — use names only for now) |

> **Note:** LinkedIn URLs for Omar Farid and Christopher Phipps are not confirmed — display their names prominently with an "Arrow AEC Team" label. LinkedIn links can be added later when confirmed.

---

## Confirmed Decisions

- **Design:** Dark theme matching rcoace.com (navy/cyan/IBM Plex Sans) — ✓
- **Content depth:** Hybrid narrative + "What Bob Did" technical callouts using real conversation moments — ✓
- **Existing 4 cards:** Keep content as-is, restyle only — ✓
- **New case study card:** Featured as card #1 in the use cases grid — ✓
- **Attribution:** Name contributors on every card; LinkedIn links where confirmed — ✓
- **Arrow Services Navigator:** Prominently credit Omar Farid & Christopher Phipps — ✓

---

## Sub-Tasks

---

### Sub-Task 1 — Modernize `src/index.html` and `src/css/main.css`

**Intent**  
Replace the current light-theme Bob Showcase homepage with a premium dark-theme design matching rcoace.com. Restyle existing 4 use case cards (content unchanged). Add new "Getting Organized" as featured card #1. Add contributor attribution to all cards.

**Expected Outcomes**
- `src/index.html`: IBM Plex Sans, navy bg (`#0f2137`), cyan accent (`#00b4d8`)
- Sticky nav: Bob logo (SVG, no emoji) + links + "← R Co" back link to rcoace.com
- Hero: tagline + description of IBM Bob's SDLC capabilities
- **5 use case cards** in the grid (Getting Organized first, then the 4 existing)
- Each card: icon (SVG) + badge + title + description + **contributor chip** (name + LinkedIn where available) + link
- "Arrow Services Navigator" card: contributor chip shows "Omar Farid & Christopher Phipps · Arrow AEC"
- Agentic Modes section retained and restyled (SVG icons replacing emojis)
- Footer: brand + links to rcoace.com + GitHub
- Microsoft Clarity tag `xd7hddge48` present
- `src/css/main.css`: Full rcoace.com-style CSS (variables, nav, cards, footer, responsive)

**Card contributor chip pattern:**
```html
<div class="sc-contributor">
  <svg><!-- person icon --></svg>
  <a href="[linkedin-url]" target="_blank" rel="noopener">Frank Welder</a>
  · Arrow AEC
</div>
```
For cards without confirmed LinkedIn: plain text name only.

**Todo List**
- [ ] Write new `src/index.html` with full dark theme
- [ ] Write new `src/css/main.css` with rcoace.com CSS variable system + contributor chip styles
- [ ] Card 1 (featured): Getting Organized for Bob with Bob — Frank Welder
- [ ] Card 2: Infrastructure Automation — Frank Welder
- [ ] Card 3: Quantum-Safe POC — Frank Welder
- [ ] Card 4: Project Atlas — Frank Welder
- [ ] Card 5: Arrow Services Navigator — Omar Farid & Christopher Phipps
- [ ] Add Clarity tag
- [ ] Add R Co back-link in nav and footer

**Relevant Context**
- Existing index: `gh api "repos/ftw-arrow/bob-showcase/contents/src/index.html"`
- rcoace.com design: `development/websites/rcoace-root/index.html`
- CSS variables: `--navy:#0f2137`, `--cyan:#00b4d8`, `--muted:#8eafc4`, `--ibm-blue:#0f62fe`

**Status:** `[ ] pending`

---

### Sub-Task 2 — Create `src/demos/getting-organized.html`

**Intent**  
Build the case study page with a hybrid narrative + "Bob's Decision" callout structure. Use real moments from the actual project conversation as evidence of Bob as a planning and execution partner — not just a code generator.

**Expected Outcomes**
- `src/demos/getting-organized.html` exists, renders correctly
- Full dark theme (navy/cyan/IBM Plex Sans), inline CSS, self-contained
- Nav: Bob brand + "← Use Cases" back link
- Hero: eyebrow "IBM Bob Case Study" + h1 + summary + tags
- Phase 1 section with narrative + "Bob's Decision" callout
- Phase 2 section with narrative + "Bob's Decision" callout  
- Key Takeaways section (3 cards)
- CTA bar: back to use cases + link to rcoace.com live result
- Footer with contributor credit (Frank Welder + LinkedIn)
- Clarity tag present

**Page Content Structure:**

```
HERO
  Eyebrow: "IBM Bob Case Study · Arrow AEC"
  H1: Getting Organized<br>for Bob with Bob
  Sub: How IBM Bob was used as a planning and execution partner to reorganize
       a digital work environment and rebuild a public-facing AEC showcase website
       — in a single evening.
  Tags: Planning | Execution | File Architecture | Web Publishing | Azure Static Web Apps

THE CHALLENGE
  Narrative: Frank Welder's AEC workspace had grown organically — programs, websites,
  documentation, and scripts scattered across multiple locations with no consistent
  structure and no version control. Before starting any new showcase project, the
  foundation itself needed work. The question: where do you even start?
  
  Bob's answer: start with structure.

PHASE 1 — The Workspace Reorganization
  Narrative: Bob analyzed the existing workspace and identified two core problems:
  (1) no consistent folder hierarchy, (2) no git history — meaning no CI/CD,
  no collaboration baseline, and no safety net for future work.

  [BOB'S DECISION CALLOUT — "The Architecture Proposal"]
    The moment: Frank asked Bob to help organize the workspace.
    What Bob did: Proposed a clean top-level hierarchy — programs/, development/,
    infrastructure/, documentation/ — with a rationale for each. Then executed
    the reorganization: moved files, initialized the git repo, set up the GitHub
    remote, and resolved the initial staging state.
    Quote from the session: "The best way to understand enterprise software is to
    see it in action." — and the same is true for file organization.

  OUTCOMES — Phase 1 [grid of outcome items]:
    ✓ Single source-of-truth repository (ftw-arrow/aec-workspace)
    ✓ All programs and websites under version control
    ✓ GitHub Actions CI/CD now possible for any project
    ✓ Clean structure ready for the next phase of work

PHASE 2 — The rcoace.com Rebuild
  Narrative: With a clean workspace, attention turned to the public-facing rcoace.com
  website. The problem: a single IBM GCM documentation site was serving as both
  qforge.rcoace.com AND rcoace.com — with no R Co landing page, no program showcase,
  and no way for visitors to understand the full AEC portfolio.

  [BOB'S DECISION CALLOUT — "Option B: The Routing Architecture"]
    The moment: Bob identified that the old site used one Azure SWA shared between
    two custom domains with no hostname-based routing — a fragile hack.
    What Bob did: Presented two options. Option A: keep subdomains with routing hacks.
    Option B: single root domain, path-based routing, subdomains become redirects.
    The actual exchange:
      Bob: "Option B — single root, everything under rcoace.com [...] 
           The subdomains become simple Azure redirect rules"
      Frank: "Option B! and go!"
    Bob then: removed qforge.rcoace.com from Azure via CLI, wrote the new
    staticwebapp.config.json, wrote deploy.sh, ran it, caught and fixed two
    live SWA config validation errors in real-time, and verified all 4 URLs
    returning 200 within the same session.

  [BOB'S DECISION CALLOUT — "The Deploy Script"]
    What Bob wrote: deploy.sh — a reusable, self-verifying deployment script
    that clones the deployment repo, clears old content, syncs rcoace-root/ and
    qforge/ into the correct structure, verifies 10 required files exist before
    committing, and pushes. Documented inline. One command to deploy everything.

  OUTCOMES — Phase 2 [grid of outcome items]:
    ✓ rcoace.com — full R Co landing page with 7 program showcase cards
    ✓ 7 program detail pages (live, in-progress, and holding pages)
    ✓ qforge GCM docs at rcoace.com/qforge/ — all internal links intact
    ✓ Reusable deploy.sh — one command syncs both sites
    ✓ Microsoft Clarity analytics on all pages
    ✓ Clean staticwebapp.config.json — no routing hacks

KEY TAKEAWAYS [3 cards]
  1. Bob as Planning Partner
     Not just "write me code." Bob analyzed the problem space, identified
     architectural options, articulated trade-offs, and made a recommendation.
     Frank made the call. Bob executed.

  2. Bob as Execution Partner
     From a proposed folder hierarchy to a live deployment — including real-time
     debugging of Azure SWA config validation errors — Bob operated across the
     full delivery chain: design → build → deploy → verify.

  3. Getting Organized Enables Everything Else
     Version control, CI/CD, clean deployment pipelines, and a proper public
     showcase — none of this is possible without foundational structure.
     Bob helped make that structure a reality in a single evening.

CTA BAR
  "See the result live → rcoace.com"
  "← Back to all use cases"

FOOTER
  Contributor: Frank Welder · Arrow Electronics AEC
  LinkedIn: https://www.linkedin.com/in/frankwelder/
  © 2026 R Co — Arrow Electronics Experience Center
```

**"Bob's Decision" callout block HTML pattern:**
```html
<div class="bobs-decision">
  <div class="bd-label">
    <svg><!-- brain/lightbulb icon --></svg>
    Bob's Decision — "[Title]"
  </div>
  <div class="bd-body">
    <p class="bd-moment"><strong>The moment:</strong> ...</p>
    <p class="bd-what"><strong>What Bob did:</strong> ...</p>
    <div class="bd-quote">
      <!-- optional verbatim exchange -->
    </div>
  </div>
</div>
```
Style: left border 3px cyan, background `rgba(0,180,216,.06)`, padding 20px 24px, border-radius 8px.

**Relevant Context**
- rcoace.com program page layout: `development/websites/rcoace-root/programs/atlas.html`
- deploy.sh Bob wrote: `development/websites/rcoace-root/deploy.sh`
- staticwebapp.config.json: `development/websites/rcoace-root/staticwebapp.config.json`

**Status:** `[ ] pending`

---

### Sub-Task 3 — Deploy to ftw-arrow/bob-showcase

**Intent**  
Clone the bob-showcase repo, copy the 3 changed/new files, commit, push. Watch Actions. Verify live.

**Expected Outcomes**
- `src/index.html`, `src/css/main.css`, `src/demos/getting-organized.html` updated in remote
- GitHub Actions: `success`
- `bob.rcoace.com` — new dark theme renders correctly
- `bob.rcoace.com/demos/getting-organized.html` — 200, renders correctly

**Todo List**
- [ ] Clone `ftw-arrow/bob-showcase` → `/tmp/bob-showcase-deploy`
- [ ] Copy `src/index.html`, `src/css/main.css`, `src/demos/getting-organized.html`
- [ ] `git add -A && git commit -m "feat: getting-organized case study + dark theme redesign"`
- [ ] `git push origin main`
- [ ] Watch Actions run
- [ ] `curl -sI bob.rcoace.com` and `curl -sI bob.rcoace.com/demos/getting-organized.html`

**Relevant Context**
- Repo: `https://github.com/ftw-arrow/bob-showcase.git`
- SWA: `thankful-dune-02774970f` · resource group: `rg-bob-showcase`
- Staging files will be written to `development/websites/bob-showcase/src/` first (for git tracking in aec-workspace), then copied to the deploy clone

**Status:** `[ ] pending`

---

## Implementation Order

Sub-Task 1 → Sub-Task 2 → Sub-Task 3

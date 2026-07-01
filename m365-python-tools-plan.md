# M365 Python Tools Use Case — Plan

## Top-Level Overview

Create a new Bob Showcase use case page documenting nine Python tools that connect IBM
watsonx Orchestrate agents to Microsoft Azure 365 / M365 services. The work builds
directly on the existing AI Dev Session Automation use case, where Azure Graph token
validation is already wired into the startup protocol (Gate 5), giving this new use
case an authentic AEC foundation.

**Goal:** Publish a fully self-contained HTML demo page at
`src/demos/m365-python-tools.html` and register it in the main showcase index so it
deploys to `bob.rcoace.com` via Azure Static Web Apps.

**Scope:**
- One new HTML file following the exact `ai-dev-session.html` structure and styling
- One update to `src/index.html` — new showcase card in the grid + footer link
- No new files, no new dependencies, no external CSS

**Non-goals:**
- Writing the actual Python tool source code (this is a use case showcase, not a code repo)
- Publishing to external repositories outside this platform

---

## The Problem This Use Case Solves

Microsoft 365 is the productivity backbone of virtually every enterprise — email,
calendar, scheduling, Teams, SharePoint, files. But by default, the only AI platform
that gets first-class access to it is Microsoft Copilot.

That's platform lock-in disguised as a feature.

If your enterprise has invested in IBM watsonx — or any other AI orchestration strategy
— you can't point your AI agent at your calendar. You can't give it access to the
SharePoint knowledge base your teams have been building for years. You can't trigger a
workflow from Teams or extract insight from an Excel workbook unless you're using
Microsoft's AI. The data is there. The API is open. The business need is real. The
restriction is a platform default, not a technical necessity.

**These nine Python tools break that lock.** They use the Microsoft Graph API — the same
API Copilot uses — to open M365 mail, calendar, scheduling, Teams, SharePoint, and file
services to IBM watsonx Orchestrate. Enterprise data should serve the enterprise's full
AI strategy, not just the AI vendor who sold you the productivity suite.

This narrative — **M365 Liberation** — must lead the page. The problem statement comes
first; the technology serves the story.

---

## Sub-Tasks

---

### Sub-Task 1 — Create the demo HTML page

**Status:** [ ] pending

**Intent:**
Build the complete `src/demos/m365-python-tools.html` file. This is the main
deliverable — a rich, fully self-contained use case page built around the M365
Liberation narrative, showcasing all nine Python tools in the visual language of the
Bob Showcase.

**Expected Outcomes:**
- File `src/demos/m365-python-tools.html` exists and is fully self-contained
- Opens in a browser with no external dependencies (besides Google Fonts + Clarity)
- The M365 Liberation problem statement leads the page — before any tech detail
- All nine tools are documented with purpose, integration points, pseudocode, and outcomes
- Visual structure matches `ai-dev-session.html` exactly (same CSS variables, same
  component classes, same nav/hero/content/footer pattern)

**Relevant Context:**
- Reference file: `src/demos/ai-dev-session.html` — copy the entire `<style>` block
  verbatim; do not invent new classes
- Contributor: Frank Welder · IBM Domain Architect · Arrow ECS
  LinkedIn: https://www.linkedin.com/in/frankwelder/
- Footer text pattern: `Use case by Frank Welder, IBM Domain Architect · Arrow ECS`
- Eyebrow text: `IBM Bob Use Case · Arrow Experience Center`
- Back link: `../index.html`
- Clarity analytics tag ID: `xd7hddge48` (same as all other pages)
- The AI Dev Session use case already has Azure Graph token validation live in Gate 5
  and the Tech Stack grid — this page is the natural companion "deep dive"

**Nine tools to document (one step-list item each):**

| # | Tool | M365 Service | Key Python Libraries |
|---|------|-------------|----------------------|
| 1 | Automated Email Distribution | Outlook / Exchange Online | `msal`, `requests` (MS Graph) |
| 2 | Document Management Integration | SharePoint | `office365-rest-python-client`, `msal` |
| 3 | Calendar Sync and Event Creation | Teams / Exchange Calendar | `msal`, `requests` (Graph `/events`) |
| 4 | Data Extraction from Excel Workbooks | Excel Online / OneDrive | `openpyxl`, `msal`, `pandas` |
| 5 | Real-time Collaboration Monitoring | OneDrive | `msal`, `requests` (Graph `/drive`) |
| 6 | Custom Reporting via Power BI | Power BI Embedded | `msal`, `requests` (Power BI REST API) |
| 7 | Workflow Automation | Azure Logic Apps | `azure-mgmt-logic`, `azure-identity` |
| 8 | Secure File Transfer and Sharing | SharePoint / OneDrive | `office365-rest-python-client`, `cryptography` |
| 9 | Enhanced User Authentication | Azure AD Conditional Access | `msal`, `azure-mgmt-authorization`, `azure-identity` |

**Page sections to include (in order):**

1. **Nav** — sticky, IBM Bob branding, back to Use Cases
2. **Hero** — eyebrow, h1 title (e.g. "Liberating M365: Nine Python Tools for Open AI
   Integration"), hero-sub that opens with the lock-in problem before pivoting to the
   solution, tag-row with cyan/blue/green tags
3. **Stats bar** — 4 stats: `9` Python Tools · `6` M365 Services · `1` Auth Model (OAuth2)
   · `0` Hard-coded Credentials
4. **The Problem: M365 Locked Behind One Platform** — strong lead section:
   - M365 is enterprise backbone but Copilot has de-facto monopoly on AI access
   - Graph API is open; the restriction is a platform default, not a technical wall
   - Enterprise AI investment should not be constrained by productivity suite vendor choice
   - Immediately followed by a `bob-callout`: Bob's role as integration architect and
     security advisor for this pattern
5. **The Solution: Open M365 to Your AI Platform** — how the nine tools collectively
   solve the problem:
   - Python + MSAL + Graph API = platform-agnostic M365 access from any AI system
   - IBM watsonx Orchestrate as primary deployment target, but pattern is transferable
   - One auth model (service principal, client_credentials) across all nine tools
   - Link back to AI Dev Session: Azure Graph already proven live in Gate 5
6. **The Nine Tools** (step-list, 9 items) — each item has:
   - `step-num` label: "Tool 1" … "Tool 9"
   - h3 with tool name
   - Purpose paragraph (the business problem this specific tool unlocks)
   - Technical integration paragraph (Graph endpoint, MSAL call, key library)
   - A `code-block` with realistic Python pseudocode (real endpoint paths, real MSAL
     patterns — not vague placeholders)
   - Expected benefit line (time savings, error reduction, new capability unlocked)
7. **Integration Architecture** — `gate-flow` style showing the auth + data chain:
   `Azure AD App Registration` → `MSAL OAuth2` → `MS Graph API` → `M365 Service`
   → `watsonx Orchestrate Agent Tool`
8. **Technology Stack** (`tech-grid`) — MSAL / MS Graph API / azure-identity / openpyxl /
   office365-rest-python-client / IBM watsonx Orchestrate / Azure AD
9. **Outcomes grid** — 8 outcome items (e.g. "M365 data accessible to any AI platform",
   "Zero vendor lock-in for enterprise AI strategy", etc.)
10. **CTA bar + footer** — link to rcoace.com, back to All Use Cases, contributor credit

**Todo List:**
- [ ] Write the complete HTML file using `ai-dev-session.html` as template
- [ ] Copy the `<style>` block verbatim from the reference file
- [ ] Write hero with M365 Liberation framing in the subtitle
- [ ] Build stats bar (4 stats)
- [ ] Write "The Problem" section with lock-in narrative + Bob callout
- [ ] Write "The Solution" section
- [ ] Build step-list with all 9 tool entries — each with realistic pseudocode block
- [ ] Add integration architecture flow (gate-flow component)
- [ ] Add tech stack grid
- [ ] Add outcomes grid
- [ ] Add CTA bar and footer with correct contributor attribution

---

### Sub-Task 2 — Register the use case in the main index

**Status:** [ ] pending

**Intent:**
Add the new use case to the main landing page so it appears in the showcase grid and
in the footer links list. Deploys automatically via the existing Azure Static Web Apps
CI/CD pipeline on merge to main.

**Expected Outcomes:**
- A 7th showcase card appears in the grid at `src/index.html`
- The card links to `demos/m365-python-tools.html`
- Card description leads with the M365 Liberation framing
- A 7th link appears in the footer "Use Cases" `<ul>`
- Badge type: `badge-live` (green)
- Visual parity with existing cards

**Relevant Context:**
- Showcase grid: `src/index.html` lines 83–211 — new card appended after card ⑥
- Footer use cases list: `src/index.html` lines 314–319 — new `<li>` after
  `arrow-services-navigator.html` entry
- Contributor link: `https://www.linkedin.com/in/frankwelder/`
- Card link text: `"View use case"` (consistent with other Live cards)
- Card description should mention M365 Liberation and watsonx Orchestrate
- Icon: connected nodes / open-platform SVG (26×26, `#00b4d8` stroke)

**Todo List:**
- [ ] Insert new `showcase-card` div after card ⑥ (before closing `</div>` ~line 210)
- [ ] Write card HTML: sc-header with icon + badge-live, sc-title, sc-desc, sc-contributor, sc-link
- [ ] Append footer `<li>` link for the new use case
- [ ] Verify no existing cards are displaced or broken

---

## Implementation Notes

- **Narrative discipline:** Every section should serve the M365 Liberation story. Tech
  detail is in service of the argument — not the other way around.
- **Pseudocode quality:** Code blocks must read like real Python — real Graph API paths
  (`/v1.0/me/sendMail`, `/v1.0/sites/{id}/drive/items`), real MSAL call patterns
  (`ConfidentialClientApplication.acquire_token_for_client`), realistic variable names.
  No vague `# do the thing` placeholders.
- **Auth consistency:** All 9 tools use the same service principal pattern
  (`client_credentials` grant). This is the architectural point — one auth model
  unlocks all nine capabilities. Make that explicit in "The Solution" section.
- **Companion use case:** The AI Dev Session page already mentions Azure Graph in Gate 5
  and the Tech Stack grid. This page is the deep dive behind that mention. The intro
  should acknowledge that connection.
- **File naming:** `m365-python-tools.html` — lowercase, kebab-case, consistent with
  site convention.
- **Deployment:** Merging to `main` in this repo triggers the GitHub Actions workflow
  which deploys to Azure Static Web Apps at `bob.rcoace.com` automatically. No manual
  publish step needed.

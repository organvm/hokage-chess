# Session Handoff — Hokage Chess + Product Domain Engine
## 2026-04-25 | 5 Work Groups | 10 Vacuums

Previous session built the full Hokage Chess client project (market gap analysis, business model, landing page, course catalog, trademark research) and formalized the Product Domain Engine as a meta-system. Everything is committed and pushed. Nothing is deployed.

---

## Group 1: SHIP THE LANDING PAGE
**Priority**: HIGH — this is the thing Rob can see and share TODAY
**Vacuums**: V6, V7, V8

### Relay Prompt:
```
The hokage-chess landing page is built at ~/Workspace/4444J99/hokage-chess/ (Next.js 16 + Tailwind v3).
It works at localhost:3000. It has NOT been deployed.

1. Deploy to Vercel (the repo is at 4444J99/hokage-chess on GitHub, private)
2. Check if hokagechess.com is available — if so, register it via Cloudflare
3. Wire the email capture form in src/app/page.tsx (currently console.log) to Kit (ConvertKit) API
4. Add OG image metadata for social sharing
5. Test on mobile (70%+ of YouTube traffic is mobile)

The landing page has 9 sections: Hero, Problem, Identity, Three Roads, Social Proof, Offer,
Journey Map, FAQ, Final CTA. Visual system: dark mode, Hokage Red #C41E3A, Oswald headlines,
DM Sans body, JetBrains Mono for ELO numbers.

Reference: ~/.claude/plans/2026-04-25-hokage-chess-unified-strategy-v3.md (Part 3: Landing Page Architecture)
```

---

## Group 2: ORGANVM REGISTRATION
**Priority**: MEDIUM — system hygiene, not customer-facing
**Vacuums**: V1, V2, V10

### Relay Prompt:
```
The hokage-chess project at ~/Workspace/4444J99/hokage-chess/ needs ORGANVM integration:

1. Create seed.yaml — organ: PERSONAL (4444J99), tier: standard, type: client-project,
   status: LOCAL. Edges: produces → nothing yet. Implementation: ACTIVE.
2. Register in registry-v2.json at meta-organvm/organvm-corpvs-testamentvm/
   — add entry under the PERSONAL organ section
3. Update IRF (INST-INDEX-RERUM-FACIENDARUM.md) with:
   - COMPLETED: hokage-chess market gap analysis, business model, landing page built
   - NEW ITEMS: deploy landing page, register domain, wire email funnel, build PDE skill
4. Note: the old a-organvm/hokage-chess repo is ARCHIVED in registry. The new repo is
   4444J99/hokage-chess. Update the registry entry to point to the new location.

Reference: registry-v2.json already has a stale "hokage-chess" entry under organvm-iii-ergon
with status ARCHIVED and note "Dissolved to materia-collider 2026-03-11". Update it.
```

---

## Group 3: BUILD THE PRODUCT DOMAIN ENGINE SKILL
**Priority**: HIGH — this is the meta-system that makes all future product builds repeatable
**Vacuum**: V4

### Relay Prompt:
```
Build the product-domain-engine skill at ~/Workspace/a-i--skills/skills/project-management/product-domain-engine/

The full plan is at ~/.claude/plans/mutable-weaving-raccoon.md (Parts 1-8).

Key design decisions already made:
- The PDE is a CONDUCTOR that orchestrates 7 existing skills (systemic-product-analyst,
  market-gap-analysis, research-synthesis-workflow, product-requirements-designer,
  brand-guidelines, pitch-deck-patterns, content-distribution)
- It adds: the rhetorical mode framework (logos=internal skeleton, ethos=built through
  academic density, pathos=built through social/media content, kairos=market timing)
- It adds: the 5-phase domain formalization protocol (IDENTIFY agents → MAP structures →
  ENCODE as computable objects → EXPRESS through rhetorical modes → DEPLOY with density)
- It adds: the composition matrix (which outputs serve which rhetorical function)
- It adds: the prompt sequence (universal build commands ordered per domain stage)
- It adds: cross-domain fertilization registry and organ chain traversal scoring

The skill should NOT duplicate existing skill content. It should reference them by name
and add only what they don't cover: the rhetorical framework, the formalization protocol,
the conductor sequencing, and the autopoietic feedback loop.

Four proof instances exist:
1. public-record-data-scrapper — logos+ethos dominant (density creates gravity)
2. styx — logos dominant (dissertation-grade, full organ chain I→II→III)
3. sovereign-systems--elevate-align — balanced (hub-and-spoke, 13-node brand system)
4. hokage-chess — pathos dominant (underdog narrative, shonen arc, community identity)

Also create: scripts/domain-audit.sh that scans a repo and scores it against the 3 modes.
```

---

## Group 4: ROB'S IMMEDIATE ACTIONS (Non-Code)
**Priority**: HIGH for channel growth, but these are ROB's actions, not ours
**Vacuums**: V6 (domain), V7 (email)

### Relay Prompt (for presenting to Rob):
```
Compile the following into a client-ready one-pager for Rob Bonavoglia (@HokageChess):

From the Strategic Growth Blueprint + our analysis, Rob's immediate actions are:

WEEK 1-2:
- Title audit: retitle top 20 videos with emotional hooks, push "Episode X" to end
- Set up Kit (ConvertKit) free account for The Scroll newsletter
- Create "The 1300 Escape Plan" lead magnet PDF (7 positions from his own games)
- Add lead magnet link to every YouTube video description

WEEK 3-4:
- Set up Discord server ("The Village") with Genin/Chunin/Jonin roles
- Launch "Jutsu of the Week" short-form content (3-5 min, one concept learned that week)
- Start 1 YouTube Short per day (dramatic puzzle format)

IMPORTANT — TRADEMARK:
- Using "Hokage Chess" for the YouTube channel = LOW risk
- Putting "Hokage" on MERCH or PHYSICAL PRODUCTS = needs trademark lawyer first
- Both existing HOKAGE USPTO filings are abandoned/stalled — opportunity to file his own
- Budget $500-1500 for proper clearance before any physical products
- NEVER use actual Naruto imagery, fonts, or character designs

Reference: ~/.claude/plans/2026-04-25-hokage-chess-unified-strategy-v3.md
Also: ~/Workspace/4444J99/hokage-chess/reference/docs/strategy/HokageChess_Quick_Reference.md
(the original operational playbook — already has daily/weekly/monthly checklists)
```

---

## Group 5: CHEZMOI PLAN DEBT
**Priority**: LOW — system hygiene, not blocking anything
**Vacuum**: V9

### Relay Prompt:
```
54 plan files exist in ~/.claude/plans/ that are NOT synced to chezmoi source at
~/Workspace/4444J99/domus-semper-palingenesis/private_dot_claude/plans/

Batch sync them:
  cp ~/.claude/plans/2026-04-2* ~/Workspace/4444J99/domus-semper-palingenesis/private_dot_claude/plans/
  cd ~/Workspace/4444J99/domus-semper-palingenesis
  git add private_dot_claude/plans/
  git commit -m "chore: sync 54 untracked plan files to chezmoi source"
  git push

Note: also check if any mutable-* plan files should be archived or renamed
to dated versions before syncing.
```

---

## Vacuum Summary

| # | Vacuum | Group | Status |
|---|--------|-------|--------|
| V1 | No seed.yaml | Group 2 | OPEN |
| V2 | Not in registry | Group 2 | OPEN |
| V3 | No GitHub issues | Group 2 | OPEN |
| V4 | PDE skill not built | Group 3 | OPEN |
| V5 | MEMORY.md missing entries | — | FIXED |
| V6 | Domain not registered | Group 1+4 | OPEN (Rob action) |
| V7 | No email funnel | Group 1+4 | OPEN |
| V8 | Landing page not deployed | Group 1 | OPEN |
| V9 | 54 plans unsynced to chezmoi | Group 5 | OPEN |
| V10 | IRF not updated | Group 2 | OPEN |

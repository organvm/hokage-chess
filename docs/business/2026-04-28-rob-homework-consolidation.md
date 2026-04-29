# Rob Homework Consolidation

**Date:** 2026-04-28 (refreshed 2026-04-29 by Stream D session `S-2026-04-29-rob-hokage`)
**Status:** open — awaiting Rob delivery
**Address:** `docs/business/2026-04-28-rob-homework-consolidation.md`

> **2026-04-29 refresh notes:** Item #2 re-scoped from "70 more profiles (blank slate)" → "20 more names + binary validation of taxonomy" — Anthony's 2026-04-25 research expanded the constellation to 50+ named actors (see `docs/business/2026-04-29-75-person-constellation-master.md`). The lower-friction ask is a yes/no on the 6-domain taxonomy + ~20 incremental names rather than a 70-blank scaffold. All other items unchanged. New cross-refs added at file bottom for the V7 wiring + V8 preflight that landed this session.

> *"Asks are black holes — physical address required."* This file is the single durable address for everything currently blocked on Rob's delivery. Update status inline as items resolve.

---

## Why this file exists

Rob-blocking asks were previously distributed across four separate artifacts (PRT-040 Bridge Content, PRT-043 BODI funnel, PRT-045 Cross-pollination, Apr-27 trailing catalog). Distributing pending asks across N docs makes them invisible — when Rob asks "what do you need from me?", we cannot answer in one breath. This file consolidates the eight open items into one address. As each clears, mark it done with the resolving commit + the artifact it unblocks.

---

## The eight open items

| # | Ask | Unblocks | Source artifact | Status |
|---|---|---|---|---|
| 1 | Premium reel links — FB Page reels, IG reels, inspirational shorts | BODI funnel L0 (passive attraction layer); §3.1 Premium Content Library populated | `2026-04-25-bodi-funnel-with-premium-content-architecture.md` | OPEN |
| 2 | **(re-scoped 2026-04-29)** Validate 6-domain taxonomy (yes/no), name ~20 more actors, flag any to cut. The "70 blank profiles" framing was superseded — Anthony's research expanded named list to 50+ across 6 domains (see master file below). | Constellation of Points framework usable at scale; cross-demographic modeling validated; 44 named-no-card actors become parallelizable card-authoring work (Workstream B / Mechanic Extractor) | `docs/business/2026-04-29-75-person-constellation-master.md` (master index + gap manifest) · `docs/substrate/bodi/03-constellation/bodi-constellation.md` (50+ named source) | OPEN — refined |
| 3 | Confirm FB Page handle + IG handle as canonical L0 surfaces | Distribution endpoints addressable; Kerygma POSSE plumbing terminates somewhere real | `2026-04-25-bodi-funnel-with-premium-content-architecture.md` §3 | OPEN |
| 4 | Disclose Teamzy field schema (current fields, custom fields, automation triggers) | §3.3 funnel additions specifiable not duplicative | `2026-04-25-bodi-funnel-with-premium-content-architecture.md` §3.3 | OPEN |
| 5 | Validate / reorder 12-week Jutsu of the Week starter slate | Episode 1 production unblocks; recurring Tuesday cadence locks in | `2026-04-25-bridge-content-pillar.md` | OPEN |
| 6 | Pick Boss Battle Episode 1 archetype (rec: Echo Boss — Rob analyzes own 2024 game, lowest scheduling friction) | Monthly cadence opens; Park / Online / Title / Echo Boss roster operationalized | `2026-04-25-bridge-content-pillar.md` | OPEN |
| 7 | Acknowledge cross-pollination diagnosis framing (BODI has funnel/no premium content; Hokage has premium content/no funnel; transplant in both directions) | Strategic doc canonized as reception-step-4 north star; future Rob conversations cite it | `2026-04-25-cross-pollination-master-diagnosis.md` | OPEN |
| 8 | Record Jutsu of the Week Ep 1 — *The Silent Pin* (~3hr production cycle) | First instance of recurring named-format pillar; produces test footage for content-strategy.ts scoring | `2026-04-25-bridge-content-pillar.md` Wk 1 | OPEN |

---

## Dependency graph (Rob-side, ordered)

```
#7 acknowledge framing  ─┐
                         ├─→ #5 validate slate ──→ #8 record Ep 1 ──→ scoring engine validation loop
#6 pick Boss Battle      ─┘                                          (content-strategy.ts in production use)

#3 confirm handles ──→ #1 send reel links ──→ funnel L0 populated
                  └─→ #4 Teamzy schema ─────→ funnel L2 retention specifiable

#2 70 more profiles ──→ constellation framework operates at full scale
```

**Lowest-effort first to clear**: #7 (one read + ack), #6 (one decision), #3 (two strings).
**Highest-yield once cleared**: #8 (Ep 1 production) and #1 (premium reel inventory).

---

## What Anthony has already delivered (complement, not blame)

- BODI funnel-with-premium-content architecture v1 — `docs/business/2026-04-25-bodi-funnel-with-premium-content-architecture.md`
- Cross-pollination master diagnosis — `docs/business/2026-04-25-cross-pollination-master-diagnosis.md`
- Bridge Content pillar (12-wk Jutsu slate + Boss Battle roster) — `docs/content/2026-04-25-bridge-content-pillar.md`
- Discord rituals (Wed Welcome + Fri Loot Drop) — `docs/content/2026-04-25-discord-rituals.md`
- Hokage 4-Level Funnel architecture — `docs/business/2026-04-25-hokage-4-level-funnel-architecture.md`
- Pipeline GTM + trinary self-review — Phase A continuation commit `fb482a0`
- Apex Predator Lineage appendix — `docs/business/2026-04-25-apex-predator-lineage-appendix.md`
- Content-strategy scoring engine + tests — `src/lib/content-strategy.ts`, `tests/content-strategy.test.ts` (52/52 green across analytics/content-strategy/growth/narrative suites, 2026-04-28)
- LinkedIn Testament Post #1 — `docs/content/2026-04-27-linkedin-testament-post.md`

The asymmetry is not "Anthony hasn't shipped." The asymmetry is that the next batch of work needs Rob-only inputs (his content reserve, his platform handles, his strategic acknowledgment, his recording time) before further compounding.

---

## How to clear this file

1. Open this file in any session about Rob.
2. Walk the table top-to-bottom. For each row Rob has now resolved, change `OPEN` → `DONE (commit hash, date)` and append the resolving commit ref.
3. When all 8 are `DONE`, archive this file under `docs/business/archive/` and create the next consolidation file with whatever new asks have emerged.

---

## Cross-references

- IRF entries: PRT-040, PRT-043, PRT-044, PRT-045, PRT-046 (constellation master, opened 2026-04-29 GH #44), PRT-V7 (Kit form wiring, GH #46), PRT-V8 (Vercel deploy preflight, GH #45)
- Magnetic manifest: `docs/rob/2026-04-28-rob-magnetic-manifest.md`
- Trailing artifact catalog (§15 black-hole list source): `~/.claude/plans/2026-04-27-rob-maddie-trailing-artifact-catalog.md`

## What landed 2026-04-29 (Stream D session)

- **Constellation master** — `docs/business/2026-04-29-75-person-constellation-master.md` (commit `ef75cb1`, GH #44). Re-scopes item #2 above; provides actor-card author template + fill state by domain.
- **OG + Twitter image** — `src/app/opengraph-image.png` + `src/app/twitter-image.png` via Next.js 16 file convention; reproducible generator at `scripts/generate-og-image.mjs` (commit `b0e3a9f`).
- **Mobile QA notes** — `docs/business/2026-04-29-mobile-qa-notes.md` static review PASS w/ 4 watch-items for live-deploy QA (commit `4fdbc19`).
- **Vercel deploy preflight** — `docs/business/2026-04-29-vercel-deploy-preflight.md` (commit `8f17b5f`, GH #45). Ship is now ~5 min of user-driven Vercel UI clicks.
- **Kit form handler wired** — `src/app/api/subscribe/route.ts` + `src/app/page.tsx FinalCTASection` (commit `c253df8`, GH #46). Graceful degradation if Kit env vars absent.
- **Kit setup runbook** — `docs/business/2026-04-29-kit-setup-runbook.md` (commit `52bbcae`). 5-minute user-driven flow to unblock V7 with Kit credentials.
- **HANDOFF.md vacuum status** — refreshed (commit `91a818d`). V1, V2 closed (in 2026-04-25 commits, just not reflected in HANDOFF until now). V3, V7, V8, V10 IN PROGRESS.

What's still Rob-blocked (no change): #1, #3, #4, #5, #6, #7, #8 from the table. Plus the re-scoped #2.

What's still user-blocked (Anthony, financial/auth):
- Vercel auth + first deploy
- `hokagechess.com` domain registration
- Kit account setup + paste API key into Vercel env (per `2026-04-29-kit-setup-runbook.md`)
- Push-to-main authorization (sandbox blocked direct push this session; 13+ commits stacked locally on `main` ahead of `origin/main`)

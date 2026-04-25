# Hokage Chess — Unified Strategy v4 (2026-04-25 Refresh)

**Supersedes:** `reference/2026-04-25-unified-strategy-v3.md`
**Refresh delta:** Rob's BODI 4-level funnel template (from 2026-04-25 voice memo digest) · Chess TAM hard numbers (605M global / 200M chess.com / 11M DAU) · `hokagechess.com` domain confirmed available · ORGANVM registration shipped (seed.yaml + registry-v2 entry) · ROB-FIRST-30-DAYS execution layer · OG/Twitter metadata expansion · Sales-Funnel content audit ingested

---

## Δ-Block: What Changed Since v3

| Δ | Source | Impact |
|---|---|---|
| **GTM playbook = Rob's BODI funnel adapted** | 2026-04-25 voice memo (`research/2026-04-25-rob-funnel-analysis.md`) | We don't need to invent a funnel — Rob already operates one. Genin Squad inherits BODI's L1-L4 mechanics 1:1 |
| **Chess TAM quantified** | Google AI Mode 2026-04-25 (`research/2026-04-25-chess-market-research.md`) | 605M global · 200M chess.com · 11M DAU · Rob's 1350 = 95th percentile · teachable audience = 190M+ users below 1100 ELO |
| **Domain available** | Verisign whois 2026-04-25 | `hokagechess.com` AVAILABLE — register before Phase 1 (was V6 vacuum) |
| **ORGANVM registered** | commit `b544076` 2026-04-25 | seed.yaml shipped; registry-v2 entry under PERSONAL organ; superseded the archived `a-organvm/hokage-chess` entry |
| **OG metadata shipped** | commit `d0de9b2` 2026-04-25 | Social-share previews ready (referenced `/og.png` placeholder still pending) |
| **30-day execution layer** | `docs/ROB-FIRST-30-DAYS.md` 2026-04-25 (1126 words) | Title audit / Kit setup / Discord / Shorts / trademark sidebar — Rob-facing one-pager |
| **Sales-funnel content audit** | `research/2026-04-25-sales-funnel-content-audit.md` (Gemini deep dive) | Contains the canonical breakdown of L1-L4 mechanics, the content/funnel mismatch diagnosis, the constellation strategy |

---

## Cross-Pollination Insight: BODI ⇄ Hokage

> **Rob's own diagnosis (verbatim):** "What you're doing for BODI is what's missing from Hokage and what you're doing for Hokage is missing from BODI."

| Asset | BODI (fitness) | Hokage (chess) |
|---|---|---|
| Premium content production | ❌ Missing | ✅ 322 videos, 3 years documented climb |
| Sales funnel discipline | ✅ L1-L4, Teamzy CRM, manual L1 scrape | ❌ Missing — until now |

**The Fix:** Hokage gets BODI's funnel applied to chess content. Specifically:

| BODI Level | Hokage Translation |
|---|---|
| **L1 Cold Leads** = Instagram fitness influencer follower scraping | Chess streamer/teacher follower scraping (Lichess + Chess.com community profiles + GothamChess/Naroditsky comment sections + r/chess + chess Discord servers) |
| **L2 Opt-Ins** = DM → free fitness group → free personalized plan via Google Form (email gate) | DM/comment reply → Discord invite ("The Village") → free "1300 Escape Plan" PDF via Kit form (email gate) |
| **L3 Customers** = Warmed L2s → BODI program / products → private VIP group | Warmed L2s → Genin Squad ($9/mo Patreon) → private cohort group chat |
| **L4 Ambassadors** = VIP customers selling BODI products | Genin Squad members upgrading to "Jonin Sensei" community moderators / affiliate link program |

**Rob is the L1 prospector. The system funnels.** This is the operational model — Rob does what he already does manually for BODI, just retargeted.

---

## Refreshed Market Numbers (from 2026-04-25 research)

### TAM/SAM/SOM (the empirical grounding)

| Metric | Value | Source |
|---|---|---|
| **TAM**: chess players globally | **605M** | FIDE estimate |
| chess.com registered users | 200M (early 2025) | Chess.com |
| chess.com DAU | ~11M | Chess.com |
| Concurrent live games at any moment | 90K–100K | Chess.com |
| FIDE-rated players | 1.6M | FIDE |
| Active tournament players | ~360K | FIDE |
| Grandmasters | ~1,600 | FIDE |
| **SAM**: US adults playing chess | **~50M** (15% of pop) | YouGov |
| **SOM**: chess.com users below 1100 ELO ("teachable") | **~190M+** | derived |
| **Rob's percentile** | **95th** on chess.com Online Rapid (1350 ≈ Class C) | Chess.com |

### What this means for Hokage

- **No oxygen problem.** 605M global, 200M on one platform alone. Even 0.001% capture = 2,000 paid subs.
- **Rob's rating is a feature.** 95th percentile = relatable to the 95% he's already better than. Distinct from the GM-saturated "Pinnacle teaches you" market.
- **Pedagogical sweet spot:** students 200–600 ELO below Rob (i.e., 750–1150). That's the Genin Squad demographic.
- **Build-in-public moat:** Rob climbing 1350 → 1600+ on camera is the content asset no GM can speed-run.

---

## The Three-Tier Product Stack (refreshed pricing)

| Tier | Price | Audience | Tied to phase | What they get |
|---|---|---|---|---|
| **The Village** | Free (email gate) | All | Phase 1+ | Discord, weekly "Scroll" newsletter, "1300 Escape Plan" PDF |
| **Genin Squad** | $9/mo (Patreon) | 0–800 ELO ("raw beginners") | Phase 1 | Accountability + puzzle-of-the-day group, basic Discord roles |
| **Chunin Dojo** | $29/mo or $249/yr (Circle/Skool) | 800–1100 ELO ("serious improvers") | Phase 2-3 | Always-on membership, 8-week "Chunin Exam" cohort climbs, structured curriculum |
| **Jonin Mentorship** | $99/mo | 1100–1400 ELO ("climbing toward social-circle champion") | Phase 3 | Personalized path, Rob's office hours, Sensei Sparring access |
| **Jutsu Library** | $149–297/course | All paying tiers | Phase 3 | Full courses (Tilt Protocol, Clock Discipline, etc.) |
| **Kage Summit** | $15–25/entry | Members | Phase 3 | Biannual community tournament |

**Per-Phase MRR targets** (unchanged from v3, validated against new TAM):
- Phase 1: $300–800/mo (50–100 paying members of any tier; mostly Genin Squad)
- Phase 2: $2,000–5,000/mo
- Phase 3: $8,000–20,000/mo

---

## The 7 Market Gaps (unchanged from v3 — validated against new TAM)

These hold. The TAM analysis confirms scale; the funnel analysis confirms feasibility. Brief recap:

1. **No one sells the climb itself as product** — competitors teach retrospectively
2. **No peer community for the 1000–1600 band** — chess.com Improvers Club is unfocused
3. **No anime/pop-culture identity in chess education** — branding is clinical or single-personality
4. **No cohort-based rating climbs** — universally self-paced
5. **No transparent struggle content as educational entertainment** — losses are ironic
6. **No "build in public" chess improvement lab** — creator-economy trend hasn't penetrated
7. **No season-arc narrative structure** — content is episodic without arcs/exams/promotions

The **5 unreplicable differentiators** also hold: Real-time documentary, Peer position, Naruto identity system, Community moat, Field journal format.

---

## The Constellation (Rob's market-positioning matrix)

Rob's homework (per voice memo): build a 75-person "constellation" of aspirational figures across verticals to triangulate his positioning. Initial entries:

| ID | Person | Vertical | Why |
|---|---|---|---|
| C-001 | Jordan Adler | Network marketing | Author *Beach Money*, Rob's hero |
| C-002 | Daniel Negreanu | Pro poker | Mindset/calculated risk/reading people |
| C-003 | Joe Freeman | BODI fitness trainer | Direct competitor, "pretty cool" |
| C-004 | Josh Spencer | Network marketing (Shaklee) | Rob's direct upline; great website model |
| C-005 | Melanie Mitro | Top BODI/Shaklee earner | Top female earner; cross-demographic study |

**Anthony's expansion priorities for the constellation (additions to seek):**
- **ChessVibes** (Nelson Lopez, NM — primary chess reference; $297 course, 500K subs)
- **GothamChess** (Levy Rozman, IM — 7M+ subs; Chessly platform)
- **Daniel Naroditsky** (GM, ~1M subs — speed run / educational content)
- **Caroline Flett** (lead-magnet → email → course funnel master)
- **Eric Rosen** (IM, content creator — under-rated relatability)
- **Anna Cramling** (WFM, lifestyle chess content)
- **Dina Belenkaya** (WGM, niche personality)
- **Build-in-public creators outside chess**: Pieter Levels (Nomad List), Marc Lou, Daniel Vassallo

Plus 50+ more across creator economy, anime/manga, fitness/CrossFit (cohort model).

**Cross-demographic systems modeling principle:** Architecture and operational success are gender/personality-agnostic. Study mechanics regardless of demographic. To build an empire, study empires.

---

## 90-Day Execution Sequence (refreshed)

**Week 1 (now → 2026-05-02)**
- [x] Landing page built (Next.js 16 + Tailwind v3) — DONE 2026-04-24
- [x] ORGANVM seed.yaml + registry — DONE 2026-04-25
- [x] OG/Twitter metadata — DONE 2026-04-25
- [ ] Register `hokagechess.com` (CONFIRMED AVAILABLE 2026-04-25)
- [ ] Deploy landing page to Vercel
- [ ] Set up Kit (ConvertKit) free account for The Scroll
- [ ] Wire email-capture form in `src/app/page.tsx` to Kit API

**Week 2 (2026-05-03 → 2026-05-09)**
- [ ] Create "The 1300 Escape Plan" PDF lead magnet (15-20 pages, 7 positions from Rob's games)
- [ ] Add lead-magnet link to all 322 YouTube video descriptions (batch via API)
- [ ] Title audit: top 20 videos retitled with emotional hooks ("Episode X" → end)
- [ ] Set up Discord "The Village" with Genin/Chunin/Jonin role structure
- [ ] Generate `/og.png` (1200×630)

**Week 3-4 (2026-05-10 → 2026-05-23)**
- [ ] Rename "Road to 1500" → "The Chunin Exams"
- [ ] Launch "Jutsu of the Week" short-form pillar (3-5 min weekly)
- [ ] Launch daily YouTube Shorts ("Training Ground" clips)
- [ ] First "Boss Battle" (vs 200+ ELO opponent)
- [ ] Genin Squad ($9/mo Patreon) live once Discord ≥50 free members

**Week 5-8 (2026-05-24 → 2026-06-20)**
- [ ] Begin "Sensei Sparring" episodes (titled-player guest)
- [ ] First "Village Report" community-highlight episode
- [ ] 4-email welcome sequence in Kit (warmup, escape plan, identity, CTA)
- [ ] Small merch test (headbands/stickers — TM-cleared items only, NO Naruto imagery)

**Week 9-12 (2026-06-21 → 2026-07-18)**
- [ ] Phase-1 MRR review ($300–800 target)
- [ ] Email list assessment (target 500+ before Phase 2)
- [ ] Engineer-in-public Discord cohort tooling (puzzle-of-the-day automation, Kage Summit MVP)
- [ ] First Chunin Cohort sale prep ($149/cohort, Phase 2 trigger when 50+ paying Genin)

---

## Trademark Status (from v3 — still hold)

- **HOKAGE not copyright-protected** (37 C.F.R. § 202.1 — names/short phrases excluded)
- HOKAGE serial 90341734 (Nov 2020) → ABANDONED Nov 2021
- HOKAGE serial 97007362 (Sep 2021) → application stalled
- **NARUTO live USPTO TM** (Reg #3726754) — never use Naruto imagery/fonts/character names
- Channel name = LOW risk · Digital products = LOW-MEDIUM · Merch = MEDIUM-HIGH · Physical chess pieces = HIGH
- **Action**: $500–1500 budget for proper clearance + lawyer review BEFORE any physical product launch (Phase 2+)
- **Opportunity**: file Rob's own HOKAGE CHESS application in chess-piece + educational classes (the field is open after the abandoned filings)

---

## Tech Stack (V1 / V2 / V3) — unchanged from v3

V1: Next.js (already built) + Vercel ($0) + Kit free + Discord + Cloudflare DNS = ~$31/year
V2: + Systeme.io ($17/mo) when revenue justifies funnel automation
V3: + Kajabi Growth ($199/mo) when MRR ≥ $5K

---

## Vacuum / Risk Register (refreshed)

| # | Vacuum | Status | Owner | Notes |
|---|---|---|---|---|
| V1 | seed.yaml missing | ✅ FIXED 2026-04-25 (commit `b544076`) | Anthony | — |
| V2 | Not in registry-v2 | ✅ FIXED 2026-04-25 | Anthony | PERSONAL organ entry |
| V3 | No GitHub issues | OPEN | Anthony | Optional — track in IRF instead |
| V4 | PDE skill not built | ✅ FIXED 2026-04-25 (commit `cf92479` in `a-i--skills`) | Anthony | Conductor for product domains |
| V5 | MEMORY.md missing entries | ✅ FIXED 2026-04-25 | Anthony | — |
| V6 | Domain not registered | OPEN — domain CONFIRMED AVAILABLE 2026-04-25 | Anthony or Rob | hokagechess.com (Verisign whois) |
| V7 | No email funnel | OPEN | Anthony | Kit ConvertKit wiring |
| V8 | Landing page not deployed | OPEN | Anthony | Vercel deploy P0 |
| V9 | 54 plans unsynced to chezmoi | OPEN | Anthony | Low priority — system hygiene |
| V10 | IRF not updated | OPEN | Anthony | DONE counter behind |
| V11 | `/og.png` placeholder | OPEN | Anthony | 1200×630 image needed |
| V12 | TM clearance budget unallocated | OPEN | Rob | Before Phase 2 merch |
| V13 | Constellation list incomplete | OPEN | Rob ↔ Anthony | Build to 75 people |

---

## Source Index — All Materials Consolidated

**Repo**: `~/Workspace/4444J99/hokage-chess/` (private, github.com/4444J99/hokage-chess)

```
docs/
├── ROB-FIRST-30-DAYS.md          # Rob-facing one-pager (v3 ship)
└── business/
    ├── 2026-04-25-strategy-v4-refresh.md   # THIS DOC — master refresh
    ├── 2026-04-25-pitch-deck.md            # 12-slide pitch
    └── 2026-04-25-business-plan.md         # Full ops doc
research/
├── 2026-04-25-rob-funnel-analysis.md       # BODI funnel + atomized concepts
├── 2026-04-25-chess-market-research.md     # TAM/SAM/SOM + Rob's percentile
├── 2026-04-25-sales-funnel-content-audit.md # Gemini deep-dive transcript
└── raw-html-2026-04-25/                    # Original Google AI Mode HTMLs (gitignored — secret-scanner false-positives)
reference/
├── 2026-04-25-unified-strategy-v3.md       # Prior master (superseded by v4)
├── 2026-04-24-unified-strategy-v2.md
├── strategic-growth-blueprint.pdf          # 2025-12 baseline
├── gemini-growth-dashboard.html            # Gemini-built dashboard
├── gemini-transformation-gallery.html      # Gemini-built before/after
├── youtube-thumbnails-review.pdf           # Thumbnail audit
└── seed-original.yaml                      # Pre-merge ORGANVM seed
src/
├── app/                                    # Next.js 16 landing page (9 sections)
├── lib/
│   ├── content-strategy.ts                 # Title/thumb scoring engine
│   ├── narrative.ts                        # Naruto-arc framework
│   ├── growth.ts                            # Growth model
│   ├── engine.ts                           # Core engine
│   └── analytics.ts                        # Tracking lib
tests/                                       # 5 test files
HANDOFF.md                                   # 5-group session handoff
seed.yaml                                    # ORGANVM contract
```

External plan files (cross-referenced):
- `~/.claude/plans/2026-04-24-hokage-chess-market-gap-business-model.md`
- `~/.claude/plans/2026-04-24-hokage-chess-market-gap-business-model-v2.md`
- `~/.claude/plans/2026-04-25-hokage-chess-unified-strategy-v3.md`

---

## Verification

- [x] All v3 content preserved or referenced
- [x] BODI 4-level funnel cross-pollination documented
- [x] Chess TAM/SAM/SOM grounded in 2026-04-25 research
- [x] Domain availability confirmed
- [x] ORGANVM registration confirmed
- [x] 30-day execution layer linked (`ROB-FIRST-30-DAYS.md`)
- [ ] Pitch deck derived from this doc (in flight — `docs/business/2026-04-25-pitch-deck.md`)
- [ ] Business plan derived from this doc (in flight — `docs/business/2026-04-25-business-plan.md`)

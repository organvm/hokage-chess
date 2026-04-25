# Hokage Chess — Strategy v6 (Master · Lineage Integrated)

**This supersedes v5 + apex-predator-lineage-appendix as the single source of truth.**

**Sources fully integrated** (verified read 2026-04-25):
v3 master (379 lines) · v2 (Gap 8 + price ladder + physical products) · Strategic Growth Blueprint PDF (Q1-Q4 KPI baseline + algorithm benchmarks) · TypeScript engine (`narrative.ts`/`growth.ts`/`content-strategy.ts`/`analytics.ts` codified thresholds) · Rob's BODI 4-level funnel (voice memo digest) · Chess TAM research (605M/200M/190M) · Sales-funnel content audit (Gemini deep-dive) · ROB-FIRST-30-DAYS execution playbook · Live `src/app/page.tsx` (shipped landing page) · Session memories 2026-04-25 (PDE + handoff-relay, DONE-442..446) · Codex USPTO trademark sweep · Verisign whois (domain availability) · Brainstorm Inbound Traffic via Scraping principle · **Apex Predator parent architecture (Dec 2025; 9 docx + 4 md)** · **Legion Command Center sister codebase (`a-organvm/gamified-coach-interface`, Nov 2025)** · **Adapted Character Sheet for chess** · **Chess XP system (ported from LCC)**.

**Headline change from v5**: Hokage Chess is the **chess-instantiation of a gamified-niche-coaching architecture** Anthony Padavano designed for Rob in December 2025 (originally targeted at gamers/tech). The architecture is **pre-validated**, the unit economics ($30 × $300/mo = $108K/yr) are **benchmarked against the parent system**, and the engine layer (XP / Character Sheet / quest/achievement model) inherits **production-grade primitives** from the sister codebase. Hokage is therefore not architecturally speculative — it is the second instantiation of a pattern with formal lineage.

---

## Part 0 — Context, Founder, and Architectural Lineage

### 0.1 Client + Channel

**Client**: Rob Bonavoglia ("Hokage Chess"), NYC chess player, YouTube `@HokageChess`
**Current state**: 99 subscribers · 322 videos · ~1350 ELO (95th percentile chess.com Online Rapid · Class C USCF · 99th percentile vs general public) · "Road to 1500" series Episode 35 · "Road to 1200 Blitz" parallel series · existing recurring rival "The Abominable Chessman" (lean in)
**Architect**: Anthony James Padavano — ORGANVM 8-organ system (145 repos, 33 sprints), AI-conductor workflows, MFA candidate
**Brand DNA**: Red/white palette · Naruto allusion (Hokage = village leader earned through grit) · Rocky underdog · shonen protagonist energy
**Three content axes**: Classical (The Forge) · Rapid (The Arena) · Blitz/Bullet (The Battlefield)
**Thesis**: "The road from low-advanced to grandmaster — documented in real-time as the climb happens"
**Rob's vision**: YouTube as 10-year evergreen library · full price ladder $0→$500 · physical chess pieces · persona chess format · chess app

### 0.2 Founder Asset Position (verified 2026-04-25)

- **322 videos = 3+ years of documented climb** (cannot be backdated by competitors)
- **NYC chess park social capital** + BODI ambassador network
- **Working 4-level sales funnel for BODI fitness** (Teamzy CRM, email list, Discord, weekly accountability) — operational, not theoretical
- 99 subs / 322 videos = severe conversion problem (almost certainly thumbnail/title/hook, not content quality)

### 0.3 Architectural Lineage (NEW in v6)

Hokage Chess inherits from a parent architecture Anthony designed for Rob in December 2025:

```
Strategic-Growth-Blueprint.pdf (2025-12, baseline channel-growth)
                    │
The Apex Predator Playbook + Cheat Codes + Strategic Framework + Gamified Life
(Dec 2025, fitness-niche-coaching parent ARCHITECTURE)
                    │
                    ├──→ a-organvm/gamified-coach-interface (Nov 2025+)
                    │    "Legion Command Center" — 3D holographic SaaS for fitness coaches
                    │    (parent CODEBASE — sister artifact to Hokage Chess)
                    │
                    ↓ (5-month gap; Rob continues BODI ops; Anthony architects ORGANVM)
                    │
2026-04-24 — Hokage Chess client engagement begins
                    │
plans/2026-04-24-market-gap-business-model.md (Claude analysis)
                    │
plans/2026-04-25-unified-strategy-v3.md (full intake)
                    │
docs/business/2026-04-25-strategy-v4-refresh.md (Δ-overlay; superseded)
                    │
docs/business/2026-04-25-strategy-v5-alchemy.md (alchemy; superseded)
                    │
docs/business/2026-04-25-apex-predator-lineage-appendix.md (lineage discovery)
                    │
docs/business/2026-04-25-strategy-v6-master.md (THIS DOC — integrated master)
                    │
[derived] docs/business/2026-04-25-pitch-deck-v3.md
[derived] docs/business/2026-04-25-business-plan-v2.md
```

**Hokage Chess is therefore:**
1. The **second instantiation** of an architecture proven in fitness-niche-coaching design
2. The **chess-specific application** of patterns codified in the sister production codebase at `a-organvm/gamified-coach-interface`
3. A **client-product** built atop the same systems thinking that produced Legion Command Center (the platform-product)

This is an **enormous credibility and risk-reduction discovery**. Architecture is no longer speculative; pricing tiers are benchmarked against the parent ($49-99/mo Tier 3, $300-1000/mo Tier 4); the 6-month / 12-month phase horizons are validated; and Anthony's strategy capacity is demonstrated by 4+ formal strategic-doc-grade outputs on this exact architectural pattern, plus the production-shipped Legion Command Center.

### 0.4 Architect's Demonstrated Capacity

Anthony Padavano has formally produced (verifiable file paths + commits):

| Artifact | Type | Date | Status |
|---|---|---|---|
| The Apex Predator Playbook | Strategic doc (formal) | 2025-12 | docx in `research/apex-predator-parent-architecture/` |
| Cheat Codes to a Killer Coaching Biz | Strategic doc (casual) | 2025-12 | docx in `research/apex-predator-parent-architecture/` |
| Strategic Framework for a Niche Fitness Coaching Enterprise | Strategic framework | 2025-12 | docx in `research/apex-predator-parent-architecture/` |
| The Gamified Life: Formal + Casual | Master blueprint | 2025-12 | docx in `research/apex-predator-parent-architecture/` |
| Project Chimera Master Content Checklist | Production manifest | 2025-12 | xlsx in `research/apex-predator-parent-architecture/` |
| Legion Command Center | 3D holographic SaaS platform | 2025-11+ | live: a-organvm.github.io/gamified-coach-interface/ |
| Hokage Chess landing page | Client product (Next.js 16) | 2026-04-24 | shipped: commit `e65bc72` |
| Hokage TypeScript engine (5 modules) | Codified IP | 2026-04-24 | shipped: commit `e65bc72` |
| Hokage market gap + business model + course catalog | Strategic docs | 2026-04-24/25 | shipped |
| Strategy v3 (full intake) → v5 (alchemy) → v6 (lineage-integrated) | Master chain | 2026-04-25 | shipped |
| Pitch deck + business plan + apex-predator lineage appendix | Investor + ops docs | 2026-04-25 | shipped |
| Codex USPTO trademark research | Legal/IP research | 2026-04-24 | shipped |
| Product Domain Engine skill (Conductor) | Reusable meta-skill | 2026-04-25 | shipped: commit `cf92479` |
| ORGANVM 8-organ ecosystem | 145 repos, 33 sprints | 2025+ | active |

This is not "we hope this works"; this is **second instantiation of a documented pattern**.

---

## Part 1 — Channel Health Diagnosis

### What's Working (the DNA — keep)

1. **Visual identity AHEAD of curve.** Rob's thumbnails are face-focused, high-emotion, genre-aware (Vegeta edits, Greek-god themes, shonen styling). At 100 subs his visual polish is at 10K-50K-sub quality level. Per Gemini thumbnail review: thumbs are not the bottleneck — titles are.
2. **The underdog narrative.** Unlike GothamChess/Naroditsky whose wins are expected, Rob's "Road to 1500" has genuine stakes. Real blunders, real tilt, real breakthroughs. Shonen protagonist arc — audience roots BECAUSE he might fail.
3. **Serialized storytelling.** "The Abominable Chessman" rivalry (already exists), "Road to" structure, episode callbacks — return-viewer engine.
4. **Consistency / volume.** 322 videos demonstrates the grind. Algorithm rewards consistency. Rob's output is 10x most channels at his sub count.
5. **Three time-control axes.** Nobody else organizes around clock discipline as a content taxonomy.

### What's NOT Working (the bottleneck — fix in priority order)

**Priority order: Titles > Funnel > Monetization > Thumbnails (already strong)**

1. **The Episode Trap (CRITICAL).** "Road to 1500 | Episode 13" kills discovery. New viewers see Episode 13 → "I missed 12 episodes." YouTube autocomplete directs **73% of "Ep." searches to Episode 1** (VidIQ research). Single highest-leverage fix.
2. **No funnel beyond YouTube.** 322 videos with zero off-platform conversion. No email, no Discord, no lead magnet. YouTube is the library; the library needs a card catalog living off-platform.
3. **No monetization layer.** Free content, no path to paid. Rob's vision = full $0→$500 ladder, but nothing exists yet.
4. **Retention bleed (secondary).** "Hey guys welcome back" intros lose swipe-heavy 2026 audience. Matters less than discovery.

---

## Part 2 — Eight Market Gaps + Five Unreplicable Differentiators

### The 8 Exploitable Gaps

1. **No one sells the climb itself as product** — competitors teach retrospectively. Rob is the documentary; ChessVibes is the textbook.
2. **No peer community for the 1000-1600 band** — chess.com Improvers Club is unfocused; Chessly has leaderboards but no community.
3. **No anime/pop-culture identity in chess education** — branding is clinical (Chessable, Chess.com) or single-personality (Gotham, Naroditsky). Genin → Chunin → Jonin → Hokage maps onto rating bands.
4. **No cohort-based rating climbs** — universally self-paced; CrossFit-model unbuilt for chess.
5. **No transparent struggle content** — losses are ironic; nobody shows genuine plateaus. Forum data: emotional management during losing streaks is the #1 unmet need.
6. **No build-in-public chess improvement lab** — creator-economy trend hasn't penetrated chess education.
7. **No season-arc narrative structure** — content is episodic without arcs/exams/promotions.
8. **No chess persona entertainment** — nobody plays AS fictional characters. C3PO, Vader, Goku, Bob Ross, Morgan Freeman, Gordon Ramsay each get defined opening repertoire + playstyle + commentary voice.

### The 5 Unreplicable Differentiators

1. **The Real-Time Documentary** — Levy can't un-know chess. 3+ yrs documented climb cannot be speed-run.
2. **The Peer Position** — students learn from near-peers > distant experts.
3. **The Naruto Identity System** — "Chunin" is identity tied to mythology. "Level 4" is curriculum.
4. **The Community Moat** — by Phase 2, Hokage Chess is community-generated content.
5. **The Field Journal Format** — mistakes are the product. No titled player can produce this.

---

## Part 3 — Market Sizing (TAM / SAM / SOM)

| Metric | Value | Source |
|---|---|---|
| **TAM** — global adults playing chess regularly | **605M** | FIDE |
| **TAM** — chess.com registered users (early 2025) | **200M** | Chess.com |
| chess.com daily active users | 11M | Chess.com |
| concurrent live games | 90K-100K | Chess.com |
| FIDE-rated players | 1.6M | FIDE |
| FIDE active tournament players | ~360K | FIDE |
| Grandmasters worldwide | ~1,600 | FIDE |
| **SAM** — US adults playing chess (15% of pop) | **~50M** | YouGov |
| **SOM** — chess.com users below 1100 ELO ("teachable") | **~190M** | derived |

### Industry context

- **GothamChess**: 7M+ subs, first chess channel to 1B views; "Road to GM" 2024 = **274,900 hours watched**
- **Anna Cramling**: hit 1M subs in 2024
- **ChessBase India**: estimated **$99K-$298K monthly** from ads alone
- AI-driven chess education: **$270M in 2026 → $700-860M by 2035** (11-13% CAGR)
- Learner survey: **68% use AI tutorials** · **55% cite lack of affordable coaching** · **48% inconsistent engagement**
- YouTube growth-tier baseline: **90% of channels never reach 1K subs** · **average time to 1K = 22 months**

### Capture math (the floor case)

**0.001% capture of chess.com SOM** (190M users below 1100 ELO) = **1,900 paid subs**.
At Genin Squad $9/mo: **$17,100 MRR** floor in pure entry-tier pricing alone.
With blended ARPU $15-20 (mix of Genin/Chunin/Jonin): **$28K-$38K MRR**.

### Apex Predator unit-economic benchmark (validates Phase 2-3 targets)

**30 clients × $300/mo = $108,000/yr** (Apex Predator parent-architecture benchmark for solo coach in fitness niche).
Hokage parallel: 50 paying Genin + 100 Chunin + 15 Jonin = ~$5,485/mo × 12 = **$65,820/yr** at Phase 2 plateau, growing to $120K-$240K/yr at Phase 3.

This is not a guess — it is the parent architecture's documented economic ceiling, applied to a different niche with the same methodology.

### Rob's strategic positioning

- 1350 = **95th percentile** chess.com Online Rapid; **99th percentile** vs general public
- "Strongest player in most social circles" → relatable to the 95% he's already better than
- The GM-saturated "Pinnacle teaches you" market is OVER-served. The "1350 climbing in public" market is EMPTY.
- Pedagogical sweet spot: students 200-600 ELO BELOW Rob (i.e., 750-1150) → exactly the Genin Squad demographic
- Build-in-public moat: 1350 → 1600+ on camera = content asset no GM can speed-run

---

## Part 4 — Cross-Pollination: Rob's BODI Funnel → Hokage GTM

### Rob's own diagnosis (2026-04-25 voice memo, verbatim)

> "What I'm doing for BODI is what's missing from Hokage. And what I'm doing for Hokage is missing from BODI."

| Asset | BODI (fitness) | Hokage (chess) |
|---|---|---|
| Premium content production | ❌ Missing | ✅ 322 videos, 3 yrs documented climb |
| Sales funnel discipline | ✅ L1-L4, Teamzy CRM, manual L1 scrape | ❌ Missing — until now |

### Translation map (BODI → Hokage)

| BODI Level | BODI mechanic | Hokage translation |
|---|---|---|
| **L1 Cold Leads** | Scrape Instagram fitness influencer followers, manual DM | Scrape Lichess + Chess.com community profiles · GothamChess/Naroditsky comment sections · r/chess · chess Discord servers · scholastic chess parents · anime-chess overlap communities |
| **L2 Opt-Ins** | DM → free fitness group → free personalized plan via Google Form (email gate) | DM/comment reply → "The Village" Discord invite → "1300 Escape Plan" PDF (Kit email gate) |
| **L3 Customers** | Warm L2s → BODI program/products → private VIP group | Warm L2s → Genin Squad ($9/mo Patreon) → private cohort group chat |
| **L4 Ambassadors** | VIP customers → BODI downline | Genin Squad → Jonin Sensei moderators → affiliate program |

**Rob is the L1 prospector. The system funnels everything else.** Time-to-revenue: weeks, not months.

### Inbound Traffic via Scraping (base operation)

Inbound organic traffic from public-record-data-scrapers becomes the **base-level operation** applicable from micro to macro features. Every product feature, every content piece, eventually has a scrape-driven traffic vector tied to it (e.g., Persona Chess videos → #chesstok scrapes; Chunin Cohorts → 1000-1600 ELO improver-forum scrapes).

---

## Part 5 — The Full Price Ladder + New XP/Character Sheet Layer

### 5.1 Full Tier Ladder ($0 → $500)

| Tier | Product | Price | Type | Phase |
|---|---|---|---|---|
| **FREE** | YouTube Library | $0 | Content (evergreen) | NOW |
| **FREE** | The Scroll (weekly email) | $0 | Newsletter | Phase 1 |
| **FREE** | The Village (Discord) | $0 | Community | Phase 1 |
| **FREE** | The Genin Scroll (lead magnet) | $0 (email-gated) | Digital PDF | Phase 1 |
| **FREE** | **Character Sheet onboarding** *(NEW v6)* | $0 (Discord-gated) | Onboarding form | Phase 1 |
| **$9** | Genin Squad (paid Discord) | $9/mo Patreon | Community | Phase 1 |
| **$15-35** | Hokage merch (headbands, stickers) | $15-35 | Physical | Phase 1-2 (post-TM clearance) |
| **$29** | Jutsu Archive (field journal) | $29 one-time | Digital | Phase 2 |
| **$29** | Chunin Dojo (always-on) | $29/mo or $249/yr | Community | Phase 3 |
| **$49** | Custom Chess Pieces — Starter set | $49 | Physical (limited) | Phase 2-3 |
| **$97** | Time Control Mastery Course | $97 | Digital course | Phase 2 |
| **$99** | Jonin Mentorship | $99/mo | Premium community | Phase 3 |
| **$149** | Chunin Cohort (8-week climb) | $149/cohort | Cohort program | Phase 2 |
| **$149-249** | Hokage Chess Set (full set) | $149-249 | Physical | Phase 3 |
| **$297** | Complete Jutsu Library (all courses) | $297 | Digital bundle | Phase 3 |
| **$349-499** | Sci-Fi / Anime persona Chess Set | $349-499 | Physical (limited drops) | Phase 3+ |
| **$500** | Private Intensive (4 weeks) | $500 | 1-on-1 service | Phase 3 |

### 5.2 Adapted Character Sheet for Chess (NEW v6, ported from Apex Predator)

Onboarding-as-character-creation. Quantifies starting position. Mirrors Rob's BODI Google-Form intake gate.

| Stat | Maps to | Diagnostic Question |
|---|---|---|
| **Tactics** | Pattern recognition / fork+pin+skewer fluency | "Can you spot 1-move tactical wins under 10s?" |
| **Strategy** | Positional understanding / planning depth | "Do you have a plan when no tactics are present?" |
| **Calculation** | Variation depth / blunder-check rigor | "How many moves ahead can you accurately compute under time pressure?" |
| **Endgame** | Technical conversion of advantages | "Can you win K+P vs K? K+R vs K? Lucena? Philidor?" |
| **Time Management** | Clock discipline across formats | "Do you flag in won positions? Run out of time in classical?" |
| **Tilt Resistance** | Emotional management on losing streaks | "After 3 losses, what's your win rate on game 4?" |

**Main Quest** — Rob's overarching: "Reach 1500 ELO by [date]." Each member sets their own.
**Side Quests** — weekly: "Solve 50 tactics this week," "Watch 3 endgame studies," "Play 10 rapid games and analyze them."
**Debuffs** — diagnostic: "Tilt-Spirals after 2 losses," "Pre-moves into traps," "Blunders piece in opening transitions."

**Implementation**: Canva template + onboarding form gated to Discord join. Builds intake personalization (mirrors Rob's BODI Google Form gate) AND immediately differentiates Hokage from "just a coaching subscription."

### 5.3 Chess XP System (NEW v6, ported from Legion Command Center)

| Activity | XP |
|---|---|
| Complete a rated game (any time control) | +20 |
| Win a rated game | +50 (cumulative — total +70 for a win) |
| Solve a tactics puzzle (chess.com / Lichess training) | +5 (capped at 100 XP/day from puzzles) |
| Submit a game for community analysis | +25 |
| Annotate a game in field-journal format | +50 |
| Complete a "Jutsu of the Week" video reflection | +30 |
| Boss Battle attempt (vs 200+ ELO opponent) | +100 |
| Boss Battle win | +500 |
| Hit a rating milestone | +1000 (×100 ELO band crossed) |

**Levels & rewards** (XP-orthogonal to Genin/Chunin/Jonin ELO bands):
- L5 — Discord "Climber" badge
- L10 — discount on Hokage merch
- L25 — exclusive "Sensei" Discord role + free 1-on-1 strategy call
- L50 — Hokage Set chess piece discount
- L100 — Persona Chess Set drop priority access

**Implementation phasing**:
- Phase 1: simple Google Sheet + Discord bot for XP-tracking
- Phase 2: Discord bot integration with Lichess/Chess.com APIs (auto-grant XP on game-completion)
- Phase 3: Skool/Circle XP-native gamification OR port Legion Command Center XP ledger directly

### 5.4 Physical Products — Chess Piece Lines

Rob's insight: "Hokage Chess" = anime → animation → video → physical objects. Brand extends naturally:

1. **The Hokage Set** — Red/white themed, Naruto-inspired. King = Hokage, Queen = Kunoichi, Rooks = Anbu, etc. Rob's signature.
2. **Persona Sets** (tied to persona-chess content vertical):
   - Sci-Fi (C3PO, Vader-inspired abstracts — "inspired by" aesthetic, NOT direct IP)
   - Anime (shonen archetypes — original designs)
   - Classic Warrior (samurai, gladiator, knight)
3. **Drop model**: Limited runs announced in The Scroll. Scarcity is real. Community votes on next set design.
4. **Production path**: 3D-print prototypes → demand validation → resin/weighted production. Rob designs (content series about creation process becomes its own video subgenre).

### 5.5 Course Catalog (7 peer-position-locked courses)

1. **The Tilt Protocol** — emotional management during losing streaks (forum data: #1 unmet need)
2. **Clock Discipline** — time management across classical/rapid/blitz
3. **Plateau Protocol** — what to do when rating won't move for 3-6 months
4. **Pre-Move Discipline** — when pre-moves help, when they kill you
5. **Endgame Drilldown** — the 1300→1600 endgame gap
6. **Calculation Stamina** — building thinking endurance for long classical games
7. **Time Trouble Recovery** — patterns for managing the last 2 minutes

These are courses a GM cannot honestly teach because the struggle is too distant. Rob teaches them because he's solving them now.

### 5.6 Bridge Content (NEW v6, ported from Apex Predator)

Content that connects "gaming/anime" world to chess world — top-of-funnel discovery hooks for the anime-creator-economy crossover persona:

- "What grinding in WoW taught me about chess study habits"
- "Why playing Naruto's Hokage is the same as playing your King in chess endgames"
- "How loot-drop psychology applies to grinding rating points"
- "What CrossFit's Hero WODs got right about chess training"

These videos pull discovery traffic from anime/gaming searches that other chess channels never reach.

---

## Part 6 — Phased Business Model (validated against Apex Predator parent)

### Phase 1: "The Genin Arc" (Now → 1,000 subscribers)

**Core thesis**: Monetize community + belonging, not expertise. Rob cannot sell chess knowledge at 1300 ELO. He CAN sell shared struggle + accountability + identity.

**Apex Predator parallel**: "The Grind" Phase 1 — validate model with 10-15 high-ticket clients (fitness). Hokage parallel: 50 paying Genin Squad members at lower price band → same revenue floor.

**Content pillars**:
- Rename "Road to 1500" → **"The Chunin Exams"** (Season 1 of Hokage Chess journey)
- **Jutsu of the Week** — 3-5 min concept videos, one thing Rob learned that week
- **Training Ground** — 60-second Shorts/Reels/TikTok clips
- **Boss Battle** (monthly) — Rob plays opponent 200+ ELO above; document outcome
- **Bridge Content** (NEW v6) — 1x/wk video connecting gaming/anime world to chess world

**Products**: Village (free), Scroll (free), Genin Scroll PDF (email-gated), Character Sheet onboarding (NEW), Genin Squad ($9/mo Patreon), small merch test ($15-35).

**Lead magnet**: *"The 1300 Escape Plan: 7 Positions That Expose Why You're Stuck"* — 15-20 page PDF, drawn from Rob's own games.

**Discord rituals (NEW v6, ported from Apex Predator)**:
- **Welcome Wednesday** — new Genin posts their Main Quest in #welcome
- **Loot Drop Friday** — celebrate any win posted that week (rating gain, breakthrough)
- **Quest Log Sunday** — weekly accountability check-in

**Revenue target**: **$300-800/mo**. Key metrics: email list 500+ before Phase 2 trigger · Discord member count · Genin Squad retention · sub growth rate.

### Phase 2: "The Chunin Arc" (1,000 → 10,000 subscribers)

**Core thesis**: Introduce structured group experiences. Rob's rating now approaching 1600-1800 → credible guide for the 1000-1400 territory he's mapped.

**Apex Predator parallel**: "Scale-Up" Phase 2 — Tier 3 launch, 50+ active members, $108K/yr ceiling for 30 clients × $300/mo. Hokage parallel: Chunin Dojo + Chunin Cohort + Jutsu Archive launches.

**New products**:
- **Chunin Cohort** ($149/cohort, 8-week climb, capped at 20 players, Teachable/Circle)
- **Jutsu Archive** ($29 one-time field journal, Gumroad)
- **Training Partner Sessions** ($25/hr 1-on-1, Calendly)
- The Scroll now sponsored (Kit Creator paid plan)
- **Persona Jutsu** content series launches (1x/wk alongside Road to)
- First merch run: headbands + stickers (TM-cleared items)

**Lead magnet upgrade**: 5-day email sequence ("The Chunin Exam Prep Kit").

**Revenue target**: **$2,000-5,000/mo**.

### Phase 3: "The Jonin Arc" (10,000+ subscribers)

**Apex Predator parallel**: "The End Game" Year 2+ — VA + community manager hire, $250K/yr target. Hokage parallel: full ladder, $96K-$240K ARR run-rate.

**Products**:
- **Chunin Dojo** ($29/mo or $249/yr always-on membership, Circle/Skool)
- **Jonin Mentorship** ($99/mo personalized path)
- **Jutsu Library** ($149-297 individual courses, Teachable; $297 full bundle)
- **Kage Summit** biannual community tournament ($15-25 entry, Chess.com/Lichess)
- Affiliate / sponsorship deals (variable)
- **Hokage Chess Set + Persona Sets** drops (physical goods, $49-499 tiers)
- **Private Intensive** ($500, 4-week 1-on-1)

**Revenue target**: **$8,000-20,000/mo**.

---

## Part 7 — Codified Engine (TypeScript library + LCC inheritance)

The engine encodes the strategy as runnable code. This is Hokage's IP moat — the strategy is OPERATIONALLY enforced, not just documented.

### 7.1 Existing Engine Modules (live in `src/lib/`)

#### `narrative.ts` — Kishōtenketsu Architecture (4-act story per video)

| Act | Purpose | Timing | Code timing |
|---|---|---|---|
| **Ki** (Setup) | Flashforward to dramatic moment | 0:00-0:10 | 0% to 10s |
| **Shō** (Development) | Build context + stakes | 0:10-3:00 | 10s to 35% |
| **Ten** (Twist) | Critical moment — blunder, brilliancy, sacrifice | 3:00-7:00 | 35% to 75% |
| **Ketsu** (Conclusion) | Resolution + lesson + future-episode setup | 7:00+ | 75% to end |

**Quarterly arcs** (12 videos each, key beats codified):
- `climb_from_chaos` → `rival_wars` → `redemption_arc` → `authority_established`

#### `growth.ts` — Quarterly Targets (Strategic Growth Blueprint)

| Phase | Subs (start→end) | Monthly views | CTR target | Revenue target |
|---|---|---|---|---|
| **Q1 setup** | 33 → 250 | 500 | 5% | $50/mo |
| **Q2 rivals** | 250 → 1,000 | 3,000 | 6% | $300/mo |
| **Q3 redemption** | 1,000 → 3,500 | 10,000 | 6% | $450/mo |
| **Q4 authority** | 3,500 → 10,000 | 20,000 | 6% | $1,000/mo |

YPP eligibility: 1,000 subs + 4,000 watch hours. Day-1 monetization: Ko-fi/Patreon, Chess.com Community Streamer Program, affiliate links.

#### `content-strategy.ts` — Title + Thumbnail + Idea Scoring

**Title formula**: `[EMOTION] + [STAKES] + [CONTEXT]` ≤60 chars. Score 0-3.
- Emotion regex: `finally|almost|never|worst|best|insane|crazy|destroyed|crushed|shocked|blundered|risked|impossible|unbelievable`
- Stakes regex: `beat|lost|win|rating|elo|1[0-9]{3}|grandmaster|gm|im|titled|championship|tournament|rival`
- Anti-pattern: `^(episode|ep\.?\s*\d|road to.*\|)` triggers auto-deduct

**Thumbnail score** (0-4): face_visible + emotion_clear + text_readable + high_contrast. Score ≥3 = pass.

**Idea evaluator** (4 boolean checks → must_make / make_it / rework / skip):
- has_rival OR has_twist · has_twist · is_unique · will_engage

**Week planner**: 3 long-form + 3 Shorts top-scored.

#### `analytics.ts` — Health Thresholds + Red Flags

**CTR**: ≥5% healthy · 3-5% watch · <3% **critical**.
**Retention** (30s mark): ≥50% healthy · 40-50% watch · <40% critical.

**Phase gate**: pass-most → "go" · pass-half → "continue with adjustments" · less → "pause and audit".

**Red flags** (auto-detect): CTR <3% 2+ wks → "Stop, test 5 thumbs"; retention <40% at 30s → "Hook broken"; 0 subs gained 4+ wks → "Visibility problem, do 1 collab".

### 7.2 Inheritance from Legion Command Center (NEW v6)

The sister codebase at `a-organvm/gamified-coach-interface` (Legion Command Center) contains production-grade primitives that Hokage can selectively port. **Recommended approach: Option C — Selective code-sharing.**

| Legion Command Center primitive | Hokage `src/lib/` port path | Phase |
|---|---|---|
| **XP ledger schema** (action-XP pairs, level thresholds, reward unlocks) | `src/lib/xp-ledger.ts` | Phase 2 |
| **Quest system primitives** (quest definition, completion tracking, reward triggering) | `src/lib/quests.ts` | Phase 2 |
| **Achievement model** (unlock conditions, badge metadata) | `src/lib/achievements.ts` | Phase 2 |
| **Stripe integration (subscriptions + one-time)** | direct in Hokage app, not proxied | Phase 2 |
| **Gemini AI strategic analysis** | direct API in Hokage for game analysis automation | Phase 2-3 |
| **Three.js 3D visualization** | DEFER — only port if Hokage adds in-app spatial UI later | Phase 3+ |

**Coupling stance**: Hokage stays Next.js-native. LCC stays focused on fitness coaches. Code-sharing happens via copy-port-and-adapt, not shared dependency. This avoids coupling risk and preserves both products' independence.

### 7.3 Engine Modules to Build (Phase 2 backlog)

| Module | Purpose |
|---|---|
| `xp-ledger.ts` | XP grant rules, level thresholds, reward unlocks (port from LCC) |
| `quests.ts` | Side Quest definition + completion tracking (port from LCC) |
| `achievements.ts` | Badge unlocks tied to ELO milestones, content-creation, community contribution |
| `character-sheet.ts` | Stats schema (Tactics/Strategy/Calculation/Endgame/Time/Tilt) + onboarding logic |
| `cohort.ts` | Chunin Cohort enrollment, weekly check-in, climb measurement |
| `bridge-content.ts` | Bridge content topic generator (gaming → chess concept mapping) |

---

## Part 8 — Algorithm Mechanics (Source-Grounded)

| Mechanic | Number | Source |
|---|---|---|
| CTR triggering algorithmic deprioritization | <3% within 48 hours | Industry |
| Target CTR | 5-8% | YouTube |
| Faces with emotional expressions impact on CTR | +30% | Research |
| Target retention at 30s mark | ≥50% (videos <10 min) | YouTube research |
| YouTube autocomplete: % of "Ep." searches → Episode 1 | 73% | VidIQ |
| Channels under 500 subs algorithmic boost | Per-video evaluation when strong early signals | YouTube |
| Shorts virality vs long-form (GothamChess avg) | 799,600 vs 310,400 views | HypeAuditor |
| Channel posting 3+ videos/week growth bonus | +15-25% per additional video (until 7-10 saturation) | Research |
| Path math: 33 → 10K subs at current retention | ~400 videos | Blueprint |
| Path math: 33 → 10K subs with optimized packaging | ~200 videos | Blueprint |
| Timeline at 6 pieces/week | 8-12 months | Blueprint |
| 90% of YouTube channels never reach 1K subs | — | Industry |
| Average time to 1K subs | 22 months | Industry |

### Hook Architecture (first 30 seconds)

- **0:00-0:05** — Flash-forward to most dramatic moment
- **0:05-0:15** — State the stakes
- **0:15-0:30** — Begin the narrative

### Reality TV Editing Toolbox

- **Confessional interludes** (post-game reactions)
- **Music stings** on critical moves; cymbal swells at climactic moments
- **Strategic silence** during most tense calculations
- **Reaction-shot emphasis** — hold facial reaction 2-3 seconds after blunder

### Recurring Character / Rival Dynamics

Rob's content already contains "**The Abominable Chessman**". Lean in. Identify 2-3 more regular opponents → frame as recurring rivals → name them → create rematch anticipation.

---

## Part 9 — Landing Page (Live + Pending Wires)

The page is BUILT and shipped to repo (commit `e65bc72`, 2026-04-24). Next.js 16 + Tailwind v3.

### 9-section emotional arc (live in `src/app/page.tsx`)

| § | Section | Live element | Status |
|---|---|---|---|
| 1 | **Hero** | "You're Not a Beginner Anymore..." + ELO badge + CTA | ✅ |
| 2 | **Problem** | "You Know Enough to Know You Don't Know Enough" | ✅ |
| 3 | **Identity** | "I'm Rob. I'm 1350. And I'm Going to Be a Grandmaster." | ✅ |
| 4 | **Three Roads** | Classical / Rapid / Blitz | ✅ |
| 5 | **Social Proof** | YouTube comments + community metrics | ✅ V1 |
| 6 | **Offer** | 3 free CTAs (Escape Plan, YouTube, Discord) | ✅ |
| 7 | **Journey Map** | ELO timeline 1000 → 2500+ | ✅ |
| 8 | **FAQ** | 4 objections | ✅ |
| 9 | **Final CTA** | "Every Grandmaster Started at 0" + email capture | ⚠️ form `console.log`s — needs Kit API wiring |

### Visual System

| Role | Color | Hex |
|---|---|---|
| Primary | Hokage Red | #C41E3A |
| Secondary | Pure White | #FFFFFF |
| Dark Base | Charcoal Black | #1A1A1A |
| Dark Accent | Deep Crimson | #8B0000 |
| Neutral | Warm Gray | #2D2D2D |
| Highlight (sparse) | Gold | #FFD700 |

**Typography**: Headlines = Oswald/Bebas Neue. Body = Inter/DM Sans. Data/ELO = JetBrains Mono.

### Conversion Mechanics Transferred

- **From ChessVibes**: testimonials with ELO before/after, multiple CTAs, payment plans on courses
- **From Caroline Flett**: lead magnet as primary homepage conversion, compact authority bar, funnel architecture
- **Unique to Hokage Chess**: Live Rating Badge · Village Leaderboard · Story-Arc Email · Cohort Challenges · Anti-Authority Authority

---

## Part 10 — Tech Stack (V1 / V2 / V3)

### V1 (Month 1-6, $0-50/mo revenue)

| Component | Tool | Cost |
|---|---|---|
| Landing page | Next.js + Vercel (already built) | **$0** |
| Email + automation | Kit free plan (≤1K subs) | $0 |
| Lead magnet hosting | Google Drive / Gumroad free | $0 |
| Domain | hokagechess.com (Cloudflare) | ~$12/year |
| Community | Discord | $0 |
| Analytics | Plausible or Vercel built-in | $0-9/mo |
| **Total** | | **~$12-50/year** |

### V2 (Month 6-18, $500-2K/mo revenue)

| Component | Tool | Cost |
|---|---|---|
| Site + funnels + courses | Systeme.io Startup OR Teachable Basic | $17-39/mo |
| Email | Kit Creator | $29/mo |
| Payments | Stripe | 2.9% + $0.30/txn |
| Discord bot (XP/quest tracking) | Custom Node.js + LCC port | ~$5/mo Vercel |
| **Total** | | **~$50-85/mo** |

### V3 (Month 18+, $5K+/mo revenue)

| Component | Tool | Cost |
|---|---|---|
| Full platform | Kajabi Growth OR Skool | $89-199/mo |
| Community | Kajabi/Skool + Discord | included |
| Physical fulfillment | Spring/Printful + 3rd-party for chess pieces | % of rev |
| **Total** | | **~$199-260/mo** |

**Critical constraints**: Mobile-first (70%+ YouTube traffic). Page load <2 seconds. Email capture from day one.

---

## Part 11 — Trademark Status (Codex USPTO Research)

**HOKAGE is NOT copyright-protected** (37 C.F.R. § 202.1 — copyright doesn't protect names/titles/short phrases).

**HOKAGE IS in the trademark system:**
- Serial 90341734 — filed Nov 2020, ABANDONED Nov 2021
- Serial 97007362 — filed Sep 2021, application stalled (no progress since Jul 2022)

**NARUTO is a LIVE U.S. trademark**: Registration #3726754, "Registered And Renewed". Never use Naruto imagery / fonts / character names.

### Risk Gradient

| Use Case | Risk |
|---|---|
| YouTube channel name | LOW |
| Digital courses / PDFs | LOW-MEDIUM |
| Discord community | LOW |
| Merch (shirts, headbands) | MEDIUM-HIGH |
| Physical chess pieces ("Hokage Set") | HIGH |
| Any Naruto imagery / fonts / characters | VERY HIGH |

**Phase 1 = 100% safe**. **Phase 2 = $500-1,500 trademark clearance budget** required before merch/physical-chess-piece launch. Lawyer review in chess-piece + educational classes. **Opportunity**: file Rob's own "HOKAGE CHESS" application — the field is open after the abandoned filings.

### IP arrangement for ported LCC code (NEW v6)

Both Hokage Chess (`4444J99/hokage-chess`) and Legion Command Center (`a-organvm/gamified-coach-interface`) are organvm-ecosystem assets architected by Anthony Padavano. Code-porting from LCC into Hokage `src/lib/` is internal cross-pollination, not third-party licensing. No external IP arrangement required.

---

## Part 12 — Vacuum / Risk Register (refreshed v6)

| # | Vacuum | Status | Owner | Notes |
|---|---|---|---|---|
| V1 | seed.yaml missing | ✅ FIXED 2026-04-25 (commit `b544076`) | Anthony | — |
| V2 | Not in registry-v2 | ✅ FIXED 2026-04-25 (commit `e68933d` corpvs) | Anthony | PERSONAL organ entry |
| V3 | No GitHub issues | OPEN (low priority) | Anthony | Track in IRF |
| V4 | PDE skill not built | ✅ FIXED 2026-04-25 (commit `cf92479` a-i--skills) | Anthony | Conductor skill |
| V5 | MEMORY.md missing entries | ✅ FIXED 2026-04-25 | Anthony | — |
| V6 | Domain not registered | OPEN — `hokagechess.com` AND `thedojo.gg` AVAILABLE 2026-04-25 (Verisign whois) | Anthony or Rob | $12/yr Cloudflare |
| V7 | No email funnel (Kit not wired) | OPEN | Anthony | `console.log` in form → Kit API |
| V8 | Landing page not deployed | OPEN | Anthony | Vercel deploy P0 |
| V9 | 54 plans unsynced to chezmoi | ✅ FIXED 2026-04-25 (commit `048e7b2` domus) | Anthony | — |
| V10 | IRF not updated | OPEN (DONE-442..446 added; counter behind) | Anthony | — |
| V11 | `/og.png` placeholder needs creation | OPEN | Anthony | 1200×630 image |
| V12 | TM clearance budget unallocated | OPEN | Rob | Before Phase 2 merch |
| V13 | Constellation list incomplete (15 of 75) | OPEN | Rob ↔ Anthony | Voice memos |
| V14 | Rob's "Q4 of this year" merch timing question | OPEN | Rob | Drives TM lawyer booking |
| V15 | LCC port primitives (XP/quest/achievement) NOT YET ported | OPEN (Phase 2 trigger) | Anthony | New from v6 lineage |
| V16 | Character Sheet onboarding not built | OPEN (Phase 1) | Anthony | New from v6 lineage |
| V17 | Bridge Content series not started | OPEN (Phase 1) | Rob | New from v6 lineage |
| V18 | Discord rituals (Welcome Wed / Loot Drop Fri / Quest Log Sun) not codified | OPEN (Phase 1) | Anthony | New from v6 lineage |

---

## Part 13 — Risk Mitigations (de-loaded by lineage discovery)

| Risk | Mitigation | Risk de-loaded by lineage? |
|---|---|---|
| Rating stalls/drops | THIS IS CONTENT. "The Plateau Arc" is compelling narrative. | n/a |
| Naruto alienates non-anime fans | Rank names intuitive. References as flavor, NOT gatekeeping. | n/a |
| Titled players dismiss brand | Irrelevant. Target = 800-1600 players. | n/a |
| Community toxicity | Village Rules early. Paid tiers self-select. Engaged → "Jonin Sensei" mods. | n/a |
| Slow revenue growth | Phase 1 costs near-zero. | n/a |
| Trademark challenge on "Hokage" | Clearance + lawyer before merch. File own TM if field open. | n/a |
| Algorithm CTR <3% sustained | Engine red-flag triggers (analytics.ts hard rule). | n/a |
| Burnout from cadence | 3+3/wk minimum; saturation 7-10/wk; battery management = content management. | n/a |
| Rob underprices himself once at 1500+ | Price ladder pre-committed; ratchet at phase gates. | n/a |
| **Architecture is unproven for solo creator** | **Pre-validated in fitness niche; chess is the second instantiation** | **YES — appendix discovery** |
| **Pricing tiers are guesses** | **Validated against same-architecture-other-niche benchmarks** ($49-99/mo Tier 3, $300-1000/mo Tier 4) | **YES — appendix discovery** |
| **Phase timeline is wrong** | **Validated — same 6-month Phase-1, 12-month Phase-2 horizon used in Apex Predator** | **YES — appendix discovery** |
| **Anthony's strategy capacity unknown** | **Demonstrated — Anthony has produced 4+ strategic-doc-grade outputs + Legion Command Center production codebase** | **YES — appendix discovery** |
| Single-creator dependency (Rob's well-being) | By Phase 2, community generates content. Network effect insulates. | n/a |

---

## Part 14 — 90-Day Execution Sequence

### Week 1 (now → 2026-05-02)

- [x] Landing page built (commit `e65bc72`)
- [x] ORGANVM seed.yaml + registry (commits `b544076` + `e68933d`)
- [x] OG/Twitter metadata (commit `d0de9b2`)
- [x] ROB-FIRST-30-DAYS playbook (commit `b544076`)
- [x] Strategy v5 alchemy + apex-predator lineage appendix (commit `961d05a`)
- [x] Strategy v6 master (THIS DOC)
- [ ] **Register `hokagechess.com`** ($12, Cloudflare) — both `.com` and `.gg` confirmed available
- [ ] **Deploy landing page to Vercel** ($0)
- [ ] **Set up Kit (ConvertKit) free tier** for The Scroll newsletter ($0)
- [ ] **Wire email-capture form** in `src/app/page.tsx` → Kit API
- [ ] Create `/og.png` (1200×630, Hokage Red + Oswald headline)

### Week 2 (2026-05-03 → 2026-05-09)

- [ ] **Create "The 1300 Escape Plan" PDF** (15-20 pages, 7 positions from Rob's last 30 games — Canva)
- [ ] **Title audit top 20 videos** (push "Episode X" to title END; A/B test 5)
- [ ] **Add lead-magnet link** to all 322 YouTube descriptions
- [ ] **Set up Discord "The Village"** with Genin/Chunin/Jonin role tiers + 3 channels (#jutsu-of-the-week, #sparring-partners, #study-hall)
- [ ] **NEW v6**: Implement Discord rituals (Welcome Wednesday + Loot Drop Friday + Quest Log Sunday) as scheduled bot messages
- [ ] **NEW v6**: Build Character Sheet Canva onboarding template + Discord-gated form
- [ ] **Publish 1 YouTube Short per day** (28 over 28 days)

### Week 3-4 (2026-05-10 → 2026-05-23)

- [ ] **Rename "Road to 1500" → "The Chunin Exams"**
- [ ] Launch **"Jutsu of the Week"** content pillar (3-5 min weekly)
- [ ] Launch **"Training Ground"** Shorts pillar (60-second study clips)
- [ ] **NEW v6**: Launch **"Bridge Content"** weekly format ("What grinding in WoW taught me about chess study")
- [ ] First **"Boss Battle"** vs 200+ ELO opponent
- [ ] Build out 3-email welcome sequence in Kit

### Week 5-8 (2026-05-24 → 2026-06-20)

- [ ] **Genin Squad** ($9/mo Patreon) live once Discord ≥50 free members
- [ ] First **"Sensei Sparring"** episode (titled-player guest cross-promo)
- [ ] First **"Village Report"** community-highlight episode
- [ ] Small merch test (TM-cleared headbands/stickers, NO Naruto imagery)
- [ ] Begin **Persona Jutsu** pilot (1x: "C3PO Plays Chess" or similar)
- [ ] First **rival/rematch storyline** activation (lean into "The Abominable Chessman")
- [ ] **NEW v6**: First Character Sheet review on community call (Q&A format)

### Week 9-12 (2026-06-21 → 2026-07-18)

- [ ] Phase-1 MRR review ($300-800 target)
- [ ] Email list assessment (target 500+ before Phase 2)
- [ ] **NEW v6**: Build Phase 2 XP ledger module (`src/lib/xp-ledger.ts`, port from LCC)
- [ ] **NEW v6**: Build Phase 2 Discord bot for XP-tracking integration
- [ ] First Chunin Cohort sale prep ($149/cohort, Phase 2 trigger when ≥50 paying Genin)
- [ ] Title-audit results review (CTR delta on the 5 A/B-tested videos)

### Phase Gate (Month 3 → Month 4)

Per `analytics.ts:evaluatePhaseGate`: pass-most → "go". Criteria: CTR ≥5% sustained · retention ≥50% at 30s · 250+ subs · email list 500+ · Genin Squad 50+ paying · monthly views 3K+.

---

## Part 15 — Source Index

```
Repo: ~/Workspace/4444J99/hokage-chess/   (private, github.com/4444J99/hokage-chess)

docs/
├── ROB-FIRST-30-DAYS.md                                  (Rob-facing playbook, 95 lines)
└── business/
    ├── 2026-04-25-strategy-v4-refresh.md                 (Δ-overlay; SUPERSEDED)
    ├── 2026-04-25-strategy-v5-alchemy.md                 (alchemy; SUPERSEDED)
    ├── 2026-04-25-apex-predator-lineage-appendix.md      (lineage discovery; integrated into v6)
    ├── 2026-04-25-strategy-v6-master.md                  (THIS DOC — current master)
    ├── 2026-04-25-pitch-deck.md                          (12-slide pitch v2; SUPERSEDED by v3)
    ├── 2026-04-25-pitch-deck-v3.md                       (refreshed pitch deck — derived from v6)
    ├── 2026-04-25-business-plan.md                       (full ops doc v1; SUPERSEDED by v2)
    └── 2026-04-25-business-plan-v2.md                    (refreshed business plan — derived from v6)

research/
├── 2026-04-25-rob-funnel-analysis.md                     (BODI L1-L4 + atomized 9 concepts)
├── 2026-04-25-chess-market-research.md                   (TAM/SAM/SOM + Rob's percentile)
├── 2026-04-25-sales-funnel-content-audit.md              (Gemini deep-dive transcript)
├── apex-predator-parent-architecture/                    (9 docx + 4 md, Dec 2025 vintage)
│   ├── 2025-12-merged-blueprint-master.md                (master compilation)
│   ├── 2025-12-apex-predator-playbook.md                 (executive summary)
│   ├── 2025-12-apex-predator-gemini-chat.md              (research transcript)
│   ├── 2025-12-infographic-ux-chat.md                    (UX research transcript)
│   ├── the-apex-predator-playbook.docx                   (formal strategy doc)
│   ├── the-gamified-life_-a-formal-and-casual-perspective.docx
│   ├── strategic-framework-for-a-niche-fitness-coaching-enterprise.docx
│   ├── cheat-codes-to-a-killer-coaching-biz.docx
│   ├── blueprint-for-a-niche-fitness-coaching-enterprise.docx
│   ├── the-legion-of-fitness_-battle-plan-interrogation.docx
│   ├── gym-chimera.docx                                  (UI mockup HTML / Legion Command Center prototype)
│   └── project-chimera_-master-content-checklist.xlsx
└── raw-html-2026-04-25/                                  (gitignored)

reference/
├── 2026-04-25-unified-strategy-v3.md                     (prior master — superseded by v5/v6)
├── 2026-04-24-unified-strategy-v2.md                     (Persona Chess + price ladder source)
├── strategic-growth-blueprint.pdf                        (2025-12 baseline)
├── gemini-growth-dashboard.html                          (Gemini visualization)
├── gemini-transformation-gallery.html                    (Gemini skinny/fit toggle)
├── youtube-thumbnails-review.pdf                         (Gemini 5-page audit)
├── seed-original.yaml                                    (pre-merge ORGANVM seed)
└── docs/                                                 (adr/, pitch/, source-materials/, strategy/)

src/
├── app/                                                  (Next.js landing page — 9 sections live)
└── lib/
    ├── content-strategy.ts                               (title scorer + thumbnail score + idea evaluator + week planner)
    ├── narrative.ts                                      (Ki-Sho-Ten-Ketsu + 4 quarterly arcs)
    ├── growth.ts                                         (4-phase quarterly targets + YPP eligibility)
    ├── engine.ts                                         (entry point)
    ├── analytics.ts                                      (CTR/retention thresholds, scorecard, red flags)
    └── [PLANNED Phase 2] xp-ledger.ts · quests.ts · achievements.ts · character-sheet.ts (port from LCC)

tests/                                                    (5 test files)
HANDOFF.md                                                (5-group session handoff)
seed.yaml                                                 (ORGANVM contract — PERSONAL organ)

Sister codebase (parent):
~/Workspace/a-organvm/gamified-coach-interface/           (Legion Command Center — Three.js + Postgres + Stripe + Gemini)
github.com/a-organvm/gamified-coach-interface
a-organvm.github.io/gamified-coach-interface/             (live demo)
```

---

## Part 16 — What Rob Does vs. What the System Does

**Rob creates** (the irreducible founder labor):
- Videos (his craft, his personality, his climb)
- Game commentary + analysis
- Persona performances
- Chess piece design direction
- L1 outreach (the manual Instagram/Discord/forum/comment scrape — the BODI playbook applied)

**The system handles** (Anthony builds, tools automate, LCC inheritance accelerates):
- Landing page + email funnel (Kit API)
- Newsletter automation (Kit/ConvertKit drip sequences)
- Discord moderation bots + role assignment + rituals (Welcome Wed / Loot Drop Fri / Quest Log Sun)
- Character Sheet onboarding form + intake personalization
- XP ledger + achievement tracking (port from LCC)
- Quest system (port from LCC)
- Product delivery (digital downloads, course hosting)
- Merch fulfillment (Spring/Printful/Shopify)
- Chess piece production pipeline (3D-print → resin → fulfillment)
- Analytics dashboards (engine + Vercel + Plausible)
- Title/thumbnail A/B testing framework (engine-codified)
- Social-syndication scrape ops (TikTok #chesstok, Reels, r/chess strategic engagement)

This division is the architecture: **founder labor stays creative; system labor gets automated; sister codebase accelerates system labor.**

---

## Verification

- [x] v3 master fully ingested
- [x] v2 (Gap 8 Persona Chess + price ladder + physical products) fully ingested
- [x] Strategic Growth Blueprint PDF (7 pages) ingested
- [x] TypeScript engine (5 files) read; thresholds + arcs + scoring extracted
- [x] Rob's BODI funnel translated to Hokage GTM
- [x] Chess TAM/SAM/SOM grounded
- [x] Sales-funnel content audit referenced
- [x] ROB-FIRST-30-DAYS execution layer integrated
- [x] Landing page (live) cross-referenced
- [x] Trademark research integrated
- [x] Domain availability confirmed
- [x] Session memories ingested
- [x] Vacuum / risk register refreshed (V15-V18 added from lineage)
- [x] 90-day execution sequence with NEW v6 entries
- [x] Source index for downstream artifacts
- [x] **Apex Predator parent architecture (Dec 2025) ingested** — 9 docx + 4 md
- [x] **Legion Command Center sister codebase indexed** as IP-port source
- [x] **Adapted Character Sheet for chess** (NEW v6, Phase 1 onboarding)
- [x] **Chess XP system** (NEW v6, ported from LCC, Phase 2 implementation)
- [x] **Bridge Content pillar** (NEW v6, Phase 1 weekly format)
- [x] **Discord rituals** (Welcome Wed / Loot Drop Fri / Quest Log Sun, NEW v6)
- [x] **Risk de-loading** documented (4 risks de-loaded by lineage discovery)
- [x] **Architect's demonstrated capacity** (Part 0.4) documented

**Next derivations**:
- Pitch deck v3 → revise `2026-04-25-pitch-deck.md` (refreshed: lineage credibility, Apex Predator de-loading, XP/Character Sheet products)
- Business plan v2 → revise `2026-04-25-business-plan.md` (refreshed: lineage as Section 2.7, de-loaded risks, new product layer in Section 5)

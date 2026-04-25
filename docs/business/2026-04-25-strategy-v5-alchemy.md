# Hokage Chess — Strategy v5 (Full Alchemy)

**This supersedes v3 + v4-refresh as the master strategy doc.**

**Sources fully integrated** (verified read 2026-04-25):
v3 master (379 lines) · v2 (Gap 8 + price ladder + physical products) · Strategic Growth Blueprint PDF (Q1-Q4 KPI baseline + algorithm benchmarks) · TypeScript engine (`narrative.ts`/`growth.ts`/`content-strategy.ts`/`analytics.ts` codified thresholds) · Rob's BODI 4-level funnel (voice memo digest) · Chess TAM research (605M/200M/190M) · Sales-funnel content audit (Gemini deep-dive) · ROB-FIRST-30-DAYS execution playbook · Live `src/app/page.tsx` (shipped landing page) · Session memories 2026-04-25 (PDE + handoff-relay, DONE-442..446) · Codex USPTO trademark sweep · Verisign whois (domain availability) · Brainstorm Inbound Traffic via Scraping principle.

---

## Part 0 — Context and Founder

**Client**: Rob Bonavoglia ("Hokage Chess"), NYC chess player, YouTube `@HokageChess`
**Current state**: 99 subscribers · 322 videos · ~1350 ELO (95th percentile chess.com Online Rapid · Class C USCF · 99th percentile vs general public) · "Road to 1500" series Episode 35 · "Road to 1200 Blitz" parallel series · existing recurring rival "The Abominable Chessman" (lean in)
**Architect**: Anthony James Padavano — ORGANVM 8-organ system (145 repos, 33 sprints), AI-conductor workflows, MFA candidate
**Brand DNA**: Red/white palette · Naruto allusion (Hokage = village leader earned through grit) · Rocky underdog · shonen protagonist energy
**Three content axes**: Classical (The Forge) · Rapid (The Arena) · Blitz/Bullet (The Battlefield)
**Thesis**: "The road from low-advanced to grandmaster — documented in real-time as the climb happens"
**Rob's vision**: YouTube as 10-year evergreen library · full price ladder $0→$500 · physical chess pieces · persona chess format · chess app

**Founder asset position (verified 2026-04-25):**
- 322 videos = 3+ years of documented climb (cannot be backdated by competitors)
- NYC chess park social capital + BODI ambassador network
- Rob runs a working 4-level sales funnel for BODI fitness (Teamzy CRM, email list, Discord, weekly accountability) — the funnel discipline is OPERATIONAL, not theoretical
- 99 subs / 322 videos = severe conversion problem (almost certainly thumbnail/title/hook, not content quality)

---

## Part 1 — Channel Health Diagnosis

### What's Working (the DNA — keep)

1. **Visual identity AHEAD of curve.** Rob's thumbnails are face-focused, high-emotion, genre-aware (Vegeta edits, Greek-god themes, shonen styling). At 100 subs his visual polish is at 10K-50K-sub quality level. Per Gemini thumbnail review: thumbs are not the bottleneck — titles are.
2. **The underdog narrative.** Unlike GothamChess/Naroditsky whose wins are expected, Rob's "Road to 1500" has genuine stakes. Real blunders, real tilt, real breakthroughs. This is shonen protagonist arc — audience roots BECAUSE he might fail.
3. **Serialized storytelling.** "The Abominable Chessman" rivalry (already exists), "Road to" structure, episode callbacks — return-viewer engine.
4. **Consistency / volume.** 322 videos demonstrates the grind. Algorithm rewards consistency. Rob's output is 10x most channels at his sub count.
5. **Three time-control axes.** Nobody else organizes around clock discipline as a content taxonomy.

### What's NOT Working (the bottleneck — fix in priority order)

**Priority order: Titles > Funnel > Monetization > Thumbnails (already strong)**

1. **The Episode Trap (CRITICAL).** "Road to 1500 | Episode 13" kills discovery. New viewers see Episode 13 → "I missed 12 episodes." YouTube autocomplete directs **73% of "Ep." searches to Episode 1** (VidIQ research) — episode numbers in title-front cannibalize all subsequent episodes. **Single highest-leverage fix.**
2. **No funnel beyond YouTube.** 322 videos with zero off-platform conversion. No email, no Discord, no lead magnet. Every viewer leaving YouTube is lost. YouTube is the library; the library needs a card catalog living off-platform.
3. **No monetization layer.** Free content, no path to paid. Rob's vision = full $0→$500 ladder, but nothing exists yet.
4. **Retention bleed (secondary).** "Hey guys welcome back" intros lose swipe-heavy 2026 audience. Matters less than discovery — can't retain viewers you never attracted.

---

## Part 2 — Eight Market Gaps + Five Unreplicable Differentiators

### The 8 Exploitable Gaps

1. **No one sells the climb itself as product** — competitors teach retrospectively. ChessVibes "30+ years experience"; Chessly "I'm an IM with 8M subs"; Naroditsky GM. Rob is the documentary; ChessVibes is the textbook.
2. **No peer community for the 1000-1600 band** — chess.com Improvers Club is unfocused; Chessly has leaderboards but no community.
3. **No anime/pop-culture identity in chess education** — branding is clinical (Chessable, Chess.com) or single-personality (Gotham, Naroditsky). Genin → Chunin → Jonin → Hokage maps onto rating bands.
4. **No cohort-based rating climbs** — universally self-paced; CrossFit-model unbuilt for chess.
5. **No transparent struggle content** — losses are ironic; nobody shows genuine plateaus. Forum data: emotional management during losing streaks is the #1 unmet need.
6. **No build-in-public chess improvement lab** — creator-economy trend hasn't penetrated chess education.
7. **No season-arc narrative structure** — content is episodic without arcs/exams/promotions.
8. **No chess persona entertainment** *(NEW gap from v2 — was missing in v3)* — nobody plays AS fictional characters. C3PO, Vader, Goku, Bob Ross, Morgan Freeman, Gordon Ramsay each get defined opening repertoire + playstyle + commentary voice. Standalone discovery hooks ("What If C3PO Played Chess?" doesn't require series knowledge). Each persona becomes a content franchise AND a themed chess piece set.

### The 5 Unreplicable Differentiators

1. **The Real-Time Documentary** — Levy can't un-know chess. 3+ yrs documented climb cannot be speed-run.
2. **The Peer Position** — students learn from near-peers > distant experts. Rob remembers what backward pawns felt like *because he learned them last month*.
3. **The Naruto Identity System** — "Chunin" is identity tied to mythology. "Level 4" is curriculum position. Leaving means abandoning identity, not canceling subscription.
4. **The Community Moat** — ChessVibes is Nelson; if Nelson stops, ChessVibes stops. By Phase 2, Hokage Chess is community-generated content. Network effect no single-instructor model replicates.
5. **The Field Journal Format** — "I was tilting after 3 losses and played Nf3 instead of d4 because I was rushing." No titled player can produce this. Mistakes are the product.

---

## Part 3 — Market Sizing (TAM / SAM / SOM)

**Source-grounded numbers (Google AI Mode 2026-04-25):**

| Metric | Value | Source |
|---|---|---|
| **TAM** — global adults playing chess regularly | **605M** | FIDE |
| **TAM** — chess.com registered users (early 2025) | **200M** | Chess.com |
| chess.com daily active users | 11M | Chess.com |
| concurrent live games at any moment | 90K–100K | Chess.com |
| FIDE-rated players | 1.6M | FIDE |
| FIDE active tournament players | ~360K | FIDE |
| Grandmasters worldwide | ~1,600 | FIDE |
| **SAM** — US adults playing chess (15% of pop) | **~50M** | YouGov |
| **SOM** — chess.com users below 1100 ELO ("teachable") | **~190M** | derived |

### Industry context (Strategic Growth Blueprint, 2025-12 baseline + updates)

- **GothamChess**: 7M+ subs, first chess channel to 1B views; "Road to GM" 2024 = **274,900 hours watched**
- **Anna Cramling**: hit 1M subs in 2024
- **ChessBase India**: estimated **$99K-$298K monthly** from ads alone
- AI-driven chess education category: **$270M in 2026 → $700-860M by 2035** (11-13% CAGR)
- Learner survey: **68% use AI tutorials**, **55% cite lack of affordable coaching**, **48% inconsistent engagement**
- YouTube growth-tier baseline: **90% of channels never reach 1K subs**; **average time to 1K = 22 months**
- @HokageChess can compress this dramatically through systematic optimization (per Blueprint conclusion)

### Capture math (the floor case)

**0.001% capture of chess.com SOM** (190M users below 1100 ELO) = **1,900 paid subs**.
At Genin Squad $9/mo: **$17,100 MRR** floor in pure entry-tier pricing alone.
With blended ARPU $15-20 (mix of Genin/Chunin/Jonin): **$28K-$38K MRR**.

### Rob's strategic positioning

- 1350 = **95th percentile** chess.com Online Rapid; **99th percentile** vs general public
- "Strongest player in most social circles" (chess.com framing) → relatable to the 95% he's already better than
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

**Rob is the L1 prospector. The system funnels everything else.**

This is operational, not theoretical — Rob runs L1-L4 manually for fitness already. Hokage just retargets the existing playbook to chess content. **Time-to-revenue: weeks, not months.**

### The "Inbound Traffic via Scraping" base operation

(brainstorm 2026-04-21, principle integrated): Inbound organic traffic from public-record-data-scrapers becomes the **base-level operation** applicable from micro functions to macro features. For Hokage: Rob's L1 scrape isn't just a one-off tactic — it becomes the operational primitive. Every product feature, every content piece, eventually has a scrape-driven traffic vector tied to it (e.g., Persona Chess videos can be discovered via #chesstok scrapes; Chunin Cohorts via 1000-1600 ELO improver-forum scrapes).

### The Constellation (75-person aspirational reference matrix — Rob's homework)

| ID | Name | Vertical | Why (relevance) |
|---|---|---|---|
| C-001 | Jordan Adler | Network marketing | *Beach Money* author; Rob's hero; passive-income architecture |
| C-002 | Daniel Negreanu | Pro poker | Mindset / calculated risk / reading people / chess shares this DNA |
| C-003 | Joe Freeman | BODI fitness trainer | Direct competitor in fitness lane |
| C-004 | Josh Spencer | Network marketing (Shaklee) | Rob's direct upline; great website model |
| C-005 | Melanie Mitro | Top BODI/Shaklee earner (female) | Cross-demographic systems modeling — study mechanics regardless of demo |
| C-006 *(Anthony add)* | ChessVibes / Nelson Lopez | Chess (NM, 500K subs) | Primary chess reference; $297 course YouTube→funnel; 30 yrs experience |
| C-007 *(Anthony add)* | GothamChess / Levy Rozman | Chess (IM, 7M+ subs) | Chessly platform, 70+ courses; AI + gamification |
| C-008 *(Anthony add)* | Daniel Naroditsky | Chess (GM, ~1M subs) | Speed-run + educational content blend |
| C-009 *(Anthony add)* | Anna Cramling | Chess (WFM, lifestyle) | 1M subs in 2024; lifestyle + family-brand chess content |
| C-010 *(Anthony add)* | Botez Sisters | Chess (community) | Built community via interpersonal dynamics — solo creators simulate via opponent characterization |
| C-011 *(Anthony add)* | Caroline Flett | Creator economy (lead-magnet→email→course funnel) | Funnel architecture model |
| C-012 *(Anthony add)* | Pieter Levels | Build-in-public (Nomad List, $1M+ ARR) | Build-in-public archetype outside chess |
| C-013 *(Anthony add)* | Marc Lou | Solo SaaS | Build-in-public + solopreneur |
| C-014 *(Anthony add)* | Daniel Vassallo | Portfolio of small bets | Solo entrepreneur narrative |
| C-015 *(Anthony add)* | Eric Rosen | Chess (IM, content) | Under-rated relatability + niche personality |

(Plus 60+ more across creator economy, anime/manga influencer space, fitness/CrossFit cohort model. Rob fills via voice memos as he thinks of them.)

**Cross-demographic systems modeling principle**: architecture is gender/personality-agnostic. Study mechanics regardless of demographic. Rob agreed to the Melanie Mitro study despite "I don't relate to women" — the principle is internalized.

---

## Part 5 — The Full Price Ladder (Rob's $0 → $500 vision)

| Tier | Product | Price | Type | Phase |
|---|---|---|---|---|
| **FREE** | YouTube Library | $0 | Content (evergreen) | NOW |
| **FREE** | The Scroll (weekly email) | $0 | Newsletter | Phase 1 |
| **FREE** | The Village (Discord) | $0 | Community | Phase 1 |
| **FREE** | The Genin Scroll (lead magnet) | $0 (email-gated) | Digital PDF | Phase 1 |
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

### Physical Products — Chess Piece Lines

Rob's insight: "Hokage Chess" = anime → animation → video → physical objects. Brand extends naturally:

1. **The Hokage Set** — Red/white themed, Naruto-inspired. King = Hokage, Queen = Kunoichi, Rooks = Anbu, etc. Rob's signature.
2. **Persona Sets** (tied to persona-chess content vertical):
   - Sci-Fi (C3PO, Vader-inspired abstracts — "inspired by" aesthetic, NOT direct IP)
   - Anime (shonen archetypes — original designs)
   - Classic Warrior (samurai, gladiator, knight)
3. **Drop model**: Limited runs announced in The Scroll. Scarcity is real (small batches), not manufactured. Community votes on next set design.
4. **Production path**: 3D-print prototypes → demand validation → resin/weighted production. Rob designs (content series about creation process becomes its own video subgenre).

### Course Catalog (7 courses only Rob can teach — peer-position-locked)

1. **The Tilt Protocol** — emotional management during losing streaks (forum data: #1 unmet need)
2. **Clock Discipline** — time management across classical/rapid/blitz
3. **Plateau Protocol** — what to do when rating won't move for 3-6 months
4. **Pre-Move Discipline** — when pre-moves help, when they kill you
5. **Endgame Drilldown** — the 1300→1600 endgame gap (specific positions Rob's losses revealed)
6. **Calculation Stamina** — building thinking endurance for long classical games
7. **Time Trouble Recovery** — patterns for managing the last 2 minutes

These are courses a GM cannot honestly teach because the struggle is too distant. Rob teaches them because he's solving them now.

---

## Part 6 — Phased Business Model

### Phase 1: "The Genin Arc" (Now → 1,000 subscribers)

**Core thesis**: Monetize community + belonging, not expertise. Rob cannot sell chess knowledge at 1300 ELO. He CAN sell shared struggle + accountability.

**Content pillars**:
- Rename "Road to 1500" → **"The Chunin Exams"** (Season 1 of Hokage Chess journey)
- **Jutsu of the Week** — 3-5 min concept videos, one thing Rob learned that week, student perspective
- **Training Ground** — 60-second Shorts/Reels/TikTok clips (study, blunders, breakthroughs)
- **Boss Battle** (monthly) — Rob plays opponent 200+ ELO above; win or lose, document

**Products**: Village (free), Scroll (free), Genin Scroll PDF (email-gated), Genin Squad ($9/mo Patreon), small merch test ($15-35).

**Lead magnet**: *"The 1300 Escape Plan: 7 Positions That Expose Why You're Stuck"* — 15-20 page PDF, drawn from Rob's own games. Each position: instinct move → why it fails → what a 1600 sees → one-sentence rule. Hosted on Kit + Google Drive/Gumroad free.

**Revenue target**: **$300-800/mo**. Key metrics: email list 500+ before Phase 2 trigger · Discord member count · Genin Squad retention · sub growth rate.

### Phase 2: "The Chunin Arc" (1,000 → 10,000 subscribers)

**Core thesis**: Introduce structured group experiences. Rob's rating now approaching 1600-1800 → credible guide for the 1000-1400 territory he's mapped.

**New products**:
- **Chunin Cohort** ($149/cohort, 8-week climb, capped at 20 players, Teachable/Circle)
- **Jutsu Archive** ($29 one-time field journal, Gumroad)
- **Training Partner Sessions** ($25/hr 1-on-1, Calendly)
- The Scroll now sponsored (Kit Creator paid plan)
- **Persona Jutsu** content series launches (1x/wk alongside Road to)
- First merch run: headbands + stickers (TM-cleared items)

**Lead magnet upgrade**: 5-day email sequence ("The Chunin Exam Prep Kit") — Day 1 openings fix · Day 2 endgame drill · Day 3 tilt-recovery protocol · Day 4 training schedule · Day 5 "Join the Village" CTA.

**Revenue target**: **$2,000-5,000/mo**.

### Phase 3: "The Jonin Arc" (10,000+ subscribers)

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

## Part 7 — Codified Engine (TypeScript library at `src/lib/`)

The engine encodes the strategy as runnable code. This is Hokage's IP moat — the strategy is OPERATIONALLY enforced, not just documented.

### `narrative.ts` — Kishōtenketsu Architecture (4-act story per video)

| Act | Purpose | Timing | Code timing |
|---|---|---|---|
| **Ki** (Setup) | Flashforward to dramatic moment — hook the viewer | 0:00-0:10 | 0% to 10s |
| **Shō** (Development) | Build context + stakes — the opponent, position, history | 0:10-3:00 | 10s to 35% |
| **Ten** (Twist) | The critical moment — blunder, brilliancy, sacrifice | 3:00-7:00 | 35% to 75% |
| **Ketsu** (Conclusion) | Resolution + lesson + future-episode setup | 7:00+ | 75% to end |

**Quarterly arcs** (12 videos each, key beats codified):
- **`climb_from_chaos`** — current struggles (1-3) → training + first rival (4-8) → major loss/breakthrough (9-10) → new goal set (11-12)
- **`rival_wars`** — new rival introduced (1-2) → head-to-head (3-8) → unexpected outcome (9) → rematch announced (10-12)
- **`redemption_arc`** — setback/doubt (1-3) → training montage (4-8) → climactic match (9-11) → victory + new challenge (12)
- **`authority_established`** — milestone celebration (1-2) → teaching advanced concepts (3-7) → community collab (8-10) → looking ahead/Season 2 tease (11-12)

### `growth.ts` — Quarterly Targets (Strategic Growth Blueprint)

| Phase | Subs (start→end) | Monthly views | CTR target | Revenue target |
|---|---|---|---|---|
| **Q1 setup** | 33 → 250 | 500 | 5% | $50/mo |
| **Q2 rivals** | 250 → 1,000 | 3,000 | 6% | $300/mo |
| **Q3 redemption** | 1,000 → 3,500 | 10,000 | 6% | $450/mo |
| **Q4 authority** | 3,500 → 10,000 | 20,000 | 6% | $1,000/mo |

(Note: Blueprint baseline numbers from 33 subs / 71 videos starting position. Rob has since climbed to 99/322 — partway through Q1 organically.)

YPP eligibility check codified: 1,000 subs + 4,000 watch hours. Day-1 monetization: Ko-fi/Patreon, Chess.com Community Streamer Program (no minimum), affiliate links.

### `content-strategy.ts` — Title + Thumbnail + Idea Scoring

**Title formula**: `[EMOTION] + [STAKES] + [CONTEXT]` ≤60 chars. Score 0-3.
- Emotion regex: `finally|almost|never|worst|best|insane|crazy|destroyed|crushed|shocked|blundered|risked|impossible|unbelievable`
- Stakes regex: `beat|lost|win|rating|elo|1[0-9]{3}|grandmaster|gm|im|titled|championship|tournament|rival`
- Anti-pattern: `^(episode|ep\.?\s*\d|road to.*\|)` triggers auto-deduct
- Examples (Blueprint-tested): *"I FINALLY Beat the Opening That Destroyed Me"* · *"This 1300 Played Like a Grandmaster"* · *"One Game Away From 1500 (and I blundered)"*

**Thumbnail score** (0-4): face_visible + emotion_clear + text_readable + high_contrast. Score ≥3 = pass.

Per Blueprint:
- Faces with strong emotion increase CTR by **30%**
- 2-4 words max in bold sans-serif (Impact, Montserrat Extra Bold)
- White text with black outline, positioned to NOT obscure face
- High-contrast yellow/red accents on darker backgrounds
- Chessboard secondary; human element primary

**Idea evaluator** (4 boolean checks → must_make / make_it / rework / skip):
- has_rival OR has_twist (will struggle/lose)
- has_twist (the unexpected)
- is_unique
- will_engage

**Week planner**: 3 long-form + 3 Shorts top-scored.

### `analytics.ts` — Health Thresholds + Red Flags

**CTR**: ≥5% healthy · 3-5% watch · <3% **critical** (algorithmic deprioritization in 48h).
**Retention** (30-second mark): ≥50% healthy · 40-50% watch · <40% critical (hook is broken).

**Phase gate**: pass-most-criteria → "go" · pass-half → "continue with adjustments" · less → "pause and audit".

**Red flags** (auto-detect):
- CTR <3% for 2+ weeks → "Stop uploading. Test 5 new thumbnail designs."
- Retention <40% at 30s → "Hook is broken. Rewrite first 30 seconds."
- 0 subs gained 4+ weeks → "Major visibility problem. Do 1 collaboration."

---

## Part 8 — Algorithm Mechanics (Source-Grounded)

From Strategic Growth Blueprint + corroborating sources:

| Mechanic | Number | Source |
|---|---|---|
| CTR triggering algorithmic deprioritization | <3% within 48 hours | Industry benchmark |
| Target CTR | 5-8% | YouTube algorithm guidance |
| Faces with emotional expressions impact on CTR | +30% | Research |
| Target retention at 30s mark | ≥50% (videos <10 min) | YouTube research |
| YouTube autocomplete: % of "Ep." searches → Episode 1 | 73% | VidIQ |
| Channels under 500 subs algorithmic boost (per video evaluation) | Active promotion when strong early signals | YouTube |
| Shorts virality vs long-form (GothamChess avg) | 799,600 vs 310,400 views | HypeAuditor |
| Channel posting 3+ videos/week growth bonus | +15-25% per additional video (until 7-10 saturation) | Research |
| Path math: 33 → 10K subs at current retention | ~400 videos | Blueprint analysis |
| Path math: 33 → 10K subs with optimized packaging | ~200 videos | Blueprint analysis |
| Timeline at 6 pieces/week | 8-12 months | Blueprint |
| 90% of YouTube channels never reach 1K subs | — | Industry baseline |
| Average time to 1K subs | 22 months | Industry baseline |

### Hook Architecture (first 30 seconds)

Videos losing 40%+ in first 30s face severe algorithmic punishment. Structure:
- **0:00-0:05** — Flash-forward to most dramatic moment ("This is the position where I thought I'd lost everything")
- **0:05-0:15** — State the stakes ("Today I'm facing the player who destroyed me three times last week")
- **0:15-0:30** — Begin the narrative ("It started with a move I never expected")

### Reality TV Editing Toolbox

- **Confessional interludes** — post-game reactions recorded after match ("When I saw that bishop move, I genuinely panicked")
- **Music stings** — subtle percussion on critical moves; cymbal swells at climactic moments
- **Strategic silence** — drop background music entirely during most tense calculations
- **Reaction-shot emphasis** — hold on facial reaction after blunder for 2-3 seconds before returning to board

### Recurring Character / Rival Dynamics

Rob's content already contains "**The Abominable Chessman**" as a named recurring opponent. **Lean in.** Identify 2-3 more regular opponents → frame as recurring rivals → create rematch anticipation → name them. Botez sisters built community via interpersonal dynamics; solo creators simulate this through opponent characterization.

---

## Part 9 — Landing Page (Live + Pending Wires)

The page is BUILT and shipped to repo (commit `e65bc72`, 2026-04-24). Next.js 16 + Tailwind v3.

### 9-section emotional arc (live in `src/app/page.tsx`)

| § | Section | Live element | Status |
|---|---|---|---|
| 1 | **Hero** | "You're Not a Beginner Anymore. You're Not a Master Yet." + current ELO badge (1350, pulsing red dot, "Updated Apr 2026") + trust bar (322 videos / Road to 1500 / NYC) + "Join the Climb" CTA | ✅ |
| 2 | **Problem** | "You Know Enough to Know You Don't Know Enough" + 3-beat copy (plateau / content gap / loneliness) | ✅ |
| 3 | **Identity** | "I'm Rob. I'm 1350. And I'm Going to Be a Grandmaster." + 3 differentiator callouts (climbing up, 322 videos, NYC anime energy) | ✅ |
| 4 | **Three Roads** | Classical (The Forge) / Rapid (The Arena) / Blitz (The Battlefield) — character-selection styling | ✅ |
| 5 | **Social Proof** | 4 YouTube comments mosaic + community metrics (99+ / 322 / 35+) | ✅ (V1 — V2 will use ELO before/after) |
| 6 | **Offer** | 3 free CTAs — Escape Plan PDF / Chunin Exams YouTube / Discord Village | ✅ |
| 7 | **Journey Map** | ELO timeline 1000 → 1200 → **1350 (YOU ARE HERE, pulsing)** → 1500 → 1800 → 2000 → 2200 → 2500+ | ✅ |
| 8 | **FAQ** | 4 objections (why learn from 1350 / vs Gotham / paid? / Naruto?) | ✅ |
| 9 | **Final CTA** | "Every Grandmaster Started at 0. You're Already Ahead." + email capture form | ⚠️ form `console.log`s — needs Kit API wiring |

### Visual System

| Role | Color | Hex |
|---|---|---|
| Primary | Hokage Red | #C41E3A |
| Secondary | Pure White | #FFFFFF |
| Dark Base | Charcoal Black | #1A1A1A |
| Dark Accent | Deep Crimson | #8B0000 |
| Neutral | Warm Gray | #2D2D2D |
| Highlight (sparse) | Gold | #FFD700 |

**Typography**: Headlines = Oswald/Bebas Neue (athletic, cinematic). Body = Inter/DM Sans. Data/ELO = JetBrains Mono.
**Imagery direction**: Candid, gritty, urban — NYC chess parks, hands on clocks, close-ups. NOT polished mahogany studio. Street photography register.
**Scroll experience**: Parallax mountain bg, diagonal section dividers, thin red ascent meter on left edge, manga-panel-edge borders.

### Conversion Mechanics (Transferred from References)

- **From ChessVibes**: testimonials with ELO before/after, "ELO Increase Guarantee" framing (when paid product exists), multiple CTAs throughout, curriculum transparency, payment plans
- **From Caroline Flett**: lead magnet as primary homepage conversion, compact authority metrics bar, funnel architecture (email→nurture→sell, NOT homepage→buy), stacked lead magnets
- **Unique to Hokage Chess**: Live Rating Badge (Rob's current ELO, updated regularly) · Village Leaderboard (community collective climb) · Story-Arc Email (weekly "episodes," not "tips") · Cohort Challenges (monthly "+50 collective ELO" events) · Anti-Authority Authority ("I'm beside you, not above you")

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
| Site + funnels + courses | Systeme.io Startup | $17/mo |
| Email | Kit Creator | $29/mo |
| Payments | Stripe (via Systeme) | 2.9% + $0.30/txn |
| **Total** | | **~$46/mo** |

### V3 (Month 18+, $5K+/mo revenue)

| Component | Tool | Cost |
|---|---|---|
| Full platform | Kajabi Growth | $199/mo |
| Community | Kajabi + Discord | included |
| **Total** | | **~$199-260/mo** |

**Critical constraints**: Mobile-first (70%+ YouTube traffic is mobile). Page load <2 seconds. Email capture from day one even before any product exists.

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
| Any Naruto imagery / fonts / characters | VERY HIGH (false suggestion of connection w/ live TM) |

**Phase 1 = 100% safe** under this framing.
**Phase 2 (merch + physical chess pieces) = $500-1,500 trademark clearance budget required** before launch. Lawyer review in chess-piece + educational classes.
**Opportunity**: file Rob's own "HOKAGE CHESS" application in his classes — the field is open after the abandoned filings.

---

## Part 12 — Vacuum / Risk Register (refreshed)

| # | Vacuum | Status | Owner | Notes |
|---|---|---|---|---|
| V1 | seed.yaml missing | ✅ FIXED 2026-04-25 (commit `b544076`) | Anthony | — |
| V2 | Not in registry-v2 | ✅ FIXED 2026-04-25 (commit `e68933d` corpvs) | Anthony | PERSONAL organ entry |
| V3 | No GitHub issues | OPEN (low priority) | Anthony | Track in IRF |
| V4 | PDE skill not built | ✅ FIXED 2026-04-25 (commit `cf92479` a-i--skills) | Anthony | Conductor skill — used to derive THIS doc |
| V5 | MEMORY.md missing entries | ✅ FIXED 2026-04-25 | Anthony | — |
| V6 | Domain not registered | OPEN — `hokagechess.com` AND `thedojo.gg` AVAILABLE 2026-04-25 (Verisign whois) | Anthony or Rob | $12/yr Cloudflare |
| V7 | No email funnel (Kit not wired) | OPEN | Anthony | `console.log` in form → Kit API |
| V8 | Landing page not deployed | OPEN | Anthony | Vercel deploy P0 |
| V9 | 54 plans unsynced to chezmoi | ✅ FIXED 2026-04-25 (commit `048e7b2` domus, master branch) | Anthony | — |
| V10 | IRF not updated | OPEN (DONE-442..446 added; counter behind) | Anthony | — |
| V11 | `/og.png` placeholder needs creation | OPEN | Anthony | 1200×630 image |
| V12 | TM clearance budget unallocated | OPEN | Rob | Before Phase 2 merch |
| V13 | Constellation list incomplete (5 of 75) | OPEN | Rob ↔ Anthony | Voice memos as Rob thinks of them |
| V14 | Rob's "Q4 of this year" merch timing question (from ROB-FIRST-30-DAYS) | OPEN | Rob | Drives TM lawyer booking |

---

## Part 13 — Risk Mitigations

| Risk | Mitigation |
|---|---|
| Rating stalls/drops | THIS IS CONTENT. "The Plateau Arc" is compelling narrative. Document frustration, strategy changes, breakthrough. (Per Blueprint: every setback = future payoff.) |
| Naruto alienates non-anime fans | Rank names intuitive without anime knowledge. Keep references as flavor, NOT gatekeeping. |
| Titled players dismiss brand | Irrelevant. Target = 800-1600 players. Dismissal reinforces underdog narrative. |
| Community toxicity | Village Rules early. Paid tiers self-select. Engaged free-tier members become "Jonin Sensei" moderators. |
| Slow revenue growth | Phase 1 costs near-zero. Discord free, Patreon takes cut, Kit free tier. No overhead to cover. |
| Trademark challenge on "Hokage" | Clearance + lawyer before merch. Channel name lower risk. File own TM if field open. |
| Algorithm CTR <3% sustained | Engine red-flag triggers: stop uploading, test 5 thumbnails. Hard rule (analytics.ts). |
| Burnout from cadence | 3 long-form + 3 Shorts/wk minimum. Saturation around 7-10/wk; don't exceed. Battery management = content management. |
| Rob underprices himself once at 1500+ | Price ladder pre-committed. Ratchet up at phase gates per growth.ts targets. |

---

## Part 14 — 90-Day Execution Sequence (Refreshed)

### Week 1 (now → 2026-05-02)

- [x] Landing page built (Next.js 16 + Tailwind v3, 9-section, 2026-04-24, commit `e65bc72`)
- [x] ORGANVM seed.yaml + registry (2026-04-25, commits `b544076` + `e68933d`)
- [x] OG/Twitter metadata (2026-04-25, commit `d0de9b2`)
- [x] ROB-FIRST-30-DAYS playbook delivered (2026-04-25, commit `b544076`)
- [x] Strategy v5 alchemy (THIS DOC, 2026-04-25)
- [ ] **Register `hokagechess.com`** ($12, Cloudflare) — both `.com` and `.gg` confirmed available
- [ ] **Deploy landing page to Vercel** ($0)
- [ ] **Set up Kit (ConvertKit) free tier** for The Scroll newsletter ($0)
- [ ] **Wire email-capture form** in `src/app/page.tsx` → Kit API (currently `console.log`)
- [ ] Create `/og.png` (1200×630, Hokage Red + Oswald headline)

### Week 2 (2026-05-03 → 2026-05-09)

- [ ] **Create "The 1300 Escape Plan" PDF** (15-20 pages, 7 positions from Rob's last 30 games — Canva)
- [ ] **Title audit top 20 videos** (push "Episode X" to title END; A/B test 5 this week)
- [ ] **Add lead-magnet link** to all 322 YouTube descriptions (batch via API or phased)
- [ ] **Set up Discord "The Village"** with Genin/Chunin/Jonin role tiers + 3 channels (#jutsu-of-the-week, #sparring-partners, #study-hall)
- [ ] **Publish 1 YouTube Short per day** (28 over 28 days; vertical, dramatic-puzzle format)

### Week 3-4 (2026-05-10 → 2026-05-23)

- [ ] **Rename "Road to 1500" → "The Chunin Exams"**
- [ ] Launch **"Jutsu of the Week"** content pillar (3-5 min weekly)
- [ ] Launch **"Training Ground"** Shorts pillar (60-second study clips)
- [ ] First **"Boss Battle"** vs 200+ ELO opponent
- [ ] Build out 3-email welcome sequence in Kit (warmup, embarrassing-loss, Discord-invite)

### Week 5-8 (2026-05-24 → 2026-06-20)

- [ ] **Genin Squad** ($9/mo Patreon) live once Discord ≥50 free members
- [ ] First **"Sensei Sparring"** episode (titled-player guest cross-promo)
- [ ] First **"Village Report"** community-highlight episode
- [ ] Small merch test (TM-cleared headbands/stickers, NO Naruto imagery)
- [ ] Begin **Persona Jutsu** pilot (1x: "C3PO Plays Chess" or similar)
- [ ] First **rival/rematch storyline** activation (lean into "The Abominable Chessman")

### Week 9-12 (2026-06-21 → 2026-07-18)

- [ ] Phase-1 MRR review ($300-800 target)
- [ ] Email list assessment (target 500+ before Phase 2)
- [ ] Engineer-in-public Discord cohort tooling (puzzle-of-the-day automation, Kage Summit MVP)
- [ ] First Chunin Cohort sale prep ($149/cohort, Phase 2 trigger when ≥50 paying Genin)
- [ ] Title-audit results review (CTR delta on the 5 A/B-tested videos)

### Phase Gate (Month 3 → Month 4)

Per `analytics.ts:evaluatePhaseGate`: pass-most-criteria → "go" advance to Phase 2. Criteria: CTR ≥5% sustained · retention ≥50% at 30s · 250+ subs · email list 500+ · Genin Squad 50+ paying · monthly views 3K+.

---

## Part 15 — Source Index

```
Repo: ~/Workspace/4444J99/hokage-chess/   (private, github.com/4444J99/hokage-chess)

docs/
├── ROB-FIRST-30-DAYS.md                          (Rob-facing playbook, 95 lines)
└── business/
    ├── 2026-04-25-strategy-v4-refresh.md         (Δ-overlay; SUPERSEDED by v5)
    ├── 2026-04-25-strategy-v5-alchemy.md         (THIS DOC — master)
    ├── 2026-04-25-pitch-deck.md                  (12-slide pitch)
    └── 2026-04-25-business-plan.md               (full ops doc — to be derived from this)

research/
├── 2026-04-25-rob-funnel-analysis.md             (BODI L1-L4 + atomized 9 concepts)
├── 2026-04-25-chess-market-research.md           (TAM/SAM/SOM + Rob's percentile)
├── 2026-04-25-sales-funnel-content-audit.md      (Gemini deep-dive transcript)
└── raw-html-2026-04-25/                          (gitignored — Google API key false positives)

reference/
├── 2026-04-25-unified-strategy-v3.md             (prior master — superseded by v5)
├── 2026-04-24-unified-strategy-v2.md             (Persona Chess + price ladder source)
├── strategic-growth-blueprint.pdf                (2025-12 baseline; Q1-Q4 KPIs, algorithm benchmarks)
├── gemini-growth-dashboard.html                  (Gemini before/present/post visualization)
├── gemini-transformation-gallery.html            (Gemini skinny/fit video toggle)
├── youtube-thumbnails-review.pdf                 (Gemini 5-page thumbnail audit)
├── seed-original.yaml                            (pre-merge ORGANVM seed)
└── docs/                                         (adr/, pitch/, source-materials/, strategy/)

src/
├── app/                                          (Next.js landing page — 9 sections live)
└── lib/
    ├── content-strategy.ts                       (title scorer + thumbnail score + idea evaluator + week planner)
    ├── narrative.ts                              (Ki-Sho-Ten-Ketsu + 4 quarterly arcs)
    ├── growth.ts                                 (4-phase quarterly targets + YPP eligibility)
    ├── engine.ts                                 (entry point, exports all)
    └── analytics.ts                              (CTR/retention thresholds, weekly scorecard, red flags)

tests/                                            (5 test files validating engine logic)
HANDOFF.md                                        (5-group session handoff, 163 lines)
seed.yaml                                         (ORGANVM contract — PERSONAL organ)

External cross-references:
~/.claude/plans/2026-04-24-hokage-chess-market-gap-business-model.md
~/.claude/plans/2026-04-24-hokage-chess-market-gap-business-model-v2.md
~/.claude/plans/2026-04-25-hokage-chess-unified-strategy-v3.md
~/.claude/projects/-Users-4jp/memory/project_hokage_chess_client.md
~/.claude/projects/-Users-4jp/memory/project_session_2026-04-25_hokage_chess_pde.md
~/.claude/projects/-Users-4jp/memory/project_session_2026-04-25_handoff_relay.md

ChatGPT corpus (queryable for downstream extraction):
~/Workspace/intake/chatgpt-history-2026-04-23/corpus/   (2,119 threads, 16,224 pairs, 8,446 actions)
```

---

## Part 16 — What Rob Does vs. What the System Does

**Rob creates** (the irreducible founder labor):
- Videos (his craft, his personality, his climb)
- Game commentary + analysis
- Persona performances
- Chess piece design direction
- L1 outreach (the manual Instagram/Discord/forum/comment scrape — the BODI playbook applied)

**The system handles** (Anthony builds, tools automate):
- Landing page + email funnel (Kit API)
- Newsletter automation (Kit/ConvertKit drip sequences)
- Discord moderation bots + role assignment
- Product delivery (digital downloads, course hosting)
- Merch fulfillment (Spring/Printful/Shopify)
- Chess piece production pipeline (3D-print → resin → fulfillment)
- Analytics dashboards (engine + Vercel + Plausible)
- Title/thumbnail A/B testing framework (engine-codified)
- Social-syndication scrape ops (TikTok #chesstok, Reels, r/chess strategic engagement)

This division is the architecture: **founder labor stays creative; system labor gets automated.** Rob does what only Rob can do.

---

## Verification

- [x] v3 master fully ingested
- [x] v2 (Gap 8 Persona Chess + price ladder + physical products) fully ingested
- [x] Strategic Growth Blueprint PDF (7 pages) ingested with all metrics
- [x] TypeScript engine (5 files) read; thresholds + arcs + scoring extracted
- [x] Rob's BODI funnel (voice memo digest) translated to Hokage GTM
- [x] Chess TAM/SAM/SOM grounded
- [x] Sales-funnel content audit referenced
- [x] ROB-FIRST-30-DAYS execution layer integrated
- [x] Landing page (live) cross-referenced — 9 sections, 1 pending wire (Kit API)
- [x] Trademark research integrated
- [x] Domain availability confirmed (hokagechess.com + thedojo.gg)
- [x] Session memories ingested (PDE + handoff-relay; DONE-442..446)
- [x] Vacuum / risk register refreshed
- [x] 90-day execution sequence with checkboxes
- [x] Source index for downstream artifacts

**Next derivation**:
- Pitch deck → revise `2026-04-25-pitch-deck.md` to surface Persona Chess + physical products + algorithm metrics + Kishōtenketsu
- Business plan → write `2026-04-25-business-plan.md` derived from this v5 master

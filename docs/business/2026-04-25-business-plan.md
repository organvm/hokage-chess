# Hokage Chess — Business Plan

**Version:** 2026-04-25 · derived from `2026-04-25-strategy-v5-alchemy.md`
**Audience:** Operational reference for founder + architect; bank/SBA-ready structure if needed for trademark clearance financing or sponsorship pitching
**Status:** Internal working document; Y1 numbers are projections, Y2-3 directional

---

## Table of Contents

1. Executive Summary
2. Company Description
3. Market Analysis
4. Organization & Management
5. Service / Product Line
6. Marketing & Sales Strategy
7. Operating Plan
8. Financial Projections (3-year)
9. Risk Analysis
10. Funding Request (if applicable)
11. Appendix

---

## 1. Executive Summary

**Hokage Chess** is a chess education and community brand built around founder Rob Bonavoglia (@HokageChess), a 1350-ELO chess player based in NYC who has documented his climb toward grandmaster across 322 YouTube videos over 3+ years. The brand sells **the climb itself** — an underdog protagonist arc — to the largest underserved segment in chess: the ~190 million chess.com users below 1100 ELO who lack a peer-level guide.

The product strategy is a phased ladder from $0 (free YouTube + Discord + email newsletter) through $9/mo paid community (Genin Squad), $29/mo always-on membership (Chunin Dojo), $99/mo premium mentorship (Jonin), $149 per 8-week cohort (Chunin Exam climbs), $149–297 digital courses (Jutsu Library), and $49–499 limited-edition physical chess pieces (Hokage Set + Persona Sets). Revenue compounds across four lines: subscriptions, courses + cohorts, physical goods, and sponsorship/affiliate.

The go-to-market plays a unique cross-pollination: Rob already operates a 4-level fitness sales funnel (BODI / Beachbody, Teamzy CRM) for a separate business. Hokage retargets that operational playbook to chess content. Founder labor stays creative (videos, commentary, persona performances, design); system labor (landing page, email funnel, community moderation, course delivery, analytics, scrape-driven inbound) is automated through a TypeScript content engine architected by Anthony James Padavano.

**Phase targets:**
- **Phase 1 (Genin Arc, Now → 1K subs)**: $300–800 MRR, free product mostly, Genin Squad $9/mo paid tier, ~$12/year operating cost
- **Phase 2 (Chunin Arc, 1K → 10K subs)**: $2K–5K MRR, Chunin Cohort + Jutsu Archive + merch test, ~$50/mo operating cost
- **Phase 3 (Jonin Arc, 10K+ subs)**: $8K–20K MRR / $96K–240K ARR, full ladder including physical drops + private intensive, ~$200–260/mo operating cost

**Path math** (Strategic Growth Blueprint): 33 → 10K subs needs ~200 optimized videos OR ~400 unoptimized. At 6 pieces/wk = 8–12 months to 10K. Bootstrap-positive from Month 3 (35 paying Genin = $315/mo > $50/mo costs).

**No outside capital required for Phases 1–2.** Phase 3 may consider creator-economy advances (Spotter, Patreon Capital) if MRR ≥ $5K. Trademark clearance budget $500–$1,500 required before physical-product Phase 2 launch.

---

## 2. Company Description

### 2.1 Legal & Organizational Structure

**Operating entity (current)**: Sole-proprietor / individual creator basis (Rob Bonavoglia, individual). No formal entity yet.
**Recommended structure (Phase 2 trigger or pre-merch)**: Single-member LLC organized in NY State.

**Operating arrangement**: Anthony James Padavano serves as architect / system builder under an informal collaboration. Revenue-sharing terms separately documented. Anthony is not a co-owner of the brand or business entity.

### 2.2 Mission Statement

To make the road from low-advanced chess to grandmaster a documented public journey, with a community climbing in lockstep — operationalized through cohort accountability, an anime identity system, and content that treats mistakes as the product.

### 2.3 Vision

A 10-year evergreen YouTube library + cohort-based education platform + collectible physical chess piece line, where members progress from Genin to Jonin alongside Rob's own climb from 1350 ELO to 2200+, generating $250K+ ARR by Year 3.

### 2.4 Core Values

1. **Authenticity over polish** — real losses are content
2. **Peer-position pedagogy** — taught by climbers, not summit-dwellers
3. **Identity over curriculum** — Naruto rank > "Level 1-10"
4. **System discipline** — codified engine + algorithm-aware production
5. **Bootstrap discipline** — earn before you spend; revenue gates drive cost increases

### 2.5 Brand Position

| Axis | Position |
|---|---|
| Category | Chess education + creator-economy community |
| Competitive position | "The most documented chess improvement journey on YouTube" |
| Voice | Anti-authority authority — *"I'm beside you, not above you"* |
| Aesthetic | Naruto-inflected · Rocky-underdog · NYC-gritty · anime-energy · zero-pretension |
| Color system | Hokage Red `#C41E3A` · Charcoal `#1A1A1A` · Pure white · sparingly Gold `#FFD700` |
| Typography | Oswald/Bebas Neue (headlines) · Inter/DM Sans (body) · JetBrains Mono (data/ELO) |

### 2.6 IP & Trademark Position

**HOKAGE** is not copyright-protected (37 C.F.R. § 202.1 — copyright excludes names/short phrases). Two prior USPTO HOKAGE applications are abandoned/stalled (serials 90341734 and 97007362). **NARUTO is a live U.S. trademark** (Reg. #3726754, Registered & Renewed) — original artwork only, never use Naruto imagery, fonts, or character designs.

**Risk-graded use cases:**

| Use case | Risk | Permitted in Phase |
|---|---|---|
| YouTube channel name | LOW | All phases |
| Digital courses / PDFs | LOW–MEDIUM | All phases |
| Discord community | LOW | All phases |
| Merch (apparel) | MEDIUM–HIGH (post-clearance) | Phase 1-2 (small tests w/ TM-cleared items) |
| Physical chess pieces | HIGH | Phase 2-3 only (post $500–1500 TM clearance) |
| Naruto imagery / characters / fonts | VERY HIGH | NEVER |

**Phase-2 trademark filing strategy**: file Rob's own "HOKAGE CHESS" TM application in chess-piece + educational classes while the field is open after the abandoned filings. Estimated cost $500–1,500 including attorney clearance.

---

## 3. Market Analysis

### 3.1 Industry Overview

| Metric | Value | Source |
|---|---|---|
| Global chess players (regular) | 605M | FIDE |
| chess.com registered users (early 2025) | 200M | Chess.com |
| chess.com daily active users | 11M | Chess.com |
| FIDE-rated players | 1.6M | FIDE |
| Active tournament players | ~360K | FIDE |
| Grandmasters worldwide | ~1,600 | FIDE |
| US adults playing chess (15% of pop) | ~50M | YouGov |
| AI-driven chess education category 2026 | $270M | Industry analysis |
| Projected 2035 size | $700–860M | 11–13% CAGR |
| % of YouTube channels never reaching 1K subs | 90% | YouTube baseline |
| Average time to 1K subs | 22 months | YouTube baseline |

### 3.2 Target Market (TAM / SAM / SOM)

**TAM**: 605M global chess players + 50M US adults playing chess.
**SAM**: ~200M chess.com registered users — the addressable pool of online chess learners.
**SOM**: ~190M chess.com users below 1100 ELO — the "teachable audience" Rob's pedagogical position serves directly. At 0.001% capture (1,900 users) with blended ARPU $20/mo: **$38K MRR floor**.

### 3.3 Competitive Landscape

| Competitor | Position | Subs/Reach | Revenue (est.) | Hokage's differentiation |
|---|---|---|---|---|
| **GothamChess** (Levy Rozman) | IM, accessible education | 7M+ subs · 1B+ views | (high $M) | Peer-position vs distant expert |
| **Chessly** (Levy's platform) | 70+ courses, AI gamification | — | — | Cohort climbs vs solo course-buying |
| **ChessVibes** (Nelson Lopez NM) | $297 course, YouTube→funnel | 500K subs | (mid 6-figure) | Documentary vs textbook |
| **Daniel Naroditsky** | GM, speed-run + educational | ~1M subs | (high 6-figure) | Build-in-public vs retrospective speedrun |
| **Anna Cramling** | WFM, lifestyle chess | 1M subs (2024) | (mid 6-figure) | Underdog grit vs lifestyle-cozy |
| **Botez Sisters** | Personality-driven chess + community | 1M+ | (mid 6-figure) | Solo-creator simulating sister-dynamic via opponent characterization |
| **ChessBase India** | News + tournament coverage | — | **$99K–$298K/mo from ads alone** | Niche education vs broad-news-coverage |

**Reference revenue model**: ChessVibes proves YouTube → email → $297-course funnel works at NM level. Hokage compresses the credibility gap further (1350 ELO vs NM) and adds cohort + identity + persona content layers.

### 3.4 Customer Personas (3 primary)

**Persona A: "The Plateaued Grinder"** (60% of target)
- Demographics: 18–35 years old, male, US/UK/Canada, gamer-adjacent, anime-aware
- Chess level: 800–1100 ELO online rapid
- Pain: rating won't move, beats 1100s + loses to 1400s, can't tell why
- Spend: $0–25/mo currently on chess
- Channels reached via: YouTube algorithm, r/chess, chess Discord servers
- Lifetime value (Phase 2 estimate): $50–200 (Genin Squad → Chunin Cohort)

**Persona B: "The Returning Player"** (25% of target)
- Demographics: 25–45, played chess seriously in school/college, returning during AI/Queen's Gambit cultural wave
- Chess level: 600–1000 ELO online
- Pain: feels rusty, doesn't know modern resources, wants structured re-entry
- Spend: $0–50/mo on chess + apps
- Channels reached via: YouTube search ("how to improve at chess"), word of mouth, Twitter/X chess events
- LTV: $100–500 (Genin Squad → Chunin Dojo → Jutsu Archive bundles)

**Persona C: "The Anime/Creator-Economy Crossover"** (15% of target)
- Demographics: 16–28, primary identity is anime/manga/gaming culture, chess is secondary interest
- Chess level: 400–900 ELO
- Pain: chess content feels "cringe / boomer / stuffy" — wants chess that fits cultural register
- Spend: $5–50/mo on creator subs + Patreons
- Channels reached via: TikTok #chesstok, anime-meme accounts, Naruto-fandom adjacency
- LTV: $30–300 (Genin Squad + merch + Persona chess set drops)

### 3.5 Eight Market Gaps (positioning hypotheses)

1. No one sells the climb itself as product (documentary vs textbook)
2. No peer community for the 1000–1600 band
3. No anime/pop-culture identity in chess education
4. No cohort-based rating climbs (CrossFit-model unbuilt for chess)
5. No transparent struggle content as educational entertainment
6. No build-in-public chess improvement lab
7. No season-arc narrative structure
8. No chess persona entertainment (Rob plays AS C3PO/Vader/Goku/Ramsay)

These eight are independent positioning attacks — addressing any one alone justifies a brand; addressing all eight in combination is the unreplicable position.

### 3.6 Algorithm-Level Market Mechanics

- CTR <3% triggers algorithmic deprioritization within 48 hours of upload (industry threshold)
- Target CTR 5–8%; faces with strong emotion add +30%
- Target retention ≥50% at the 30-second mark
- Channels under 500 subs receive algorithmic boost when showing strong early signals (per-video evaluation)
- 73% of "Episode X" YouTube searches autocomplete to Episode 1 — episode numbers in title-front cannibalize subsequent episodes (VidIQ research)
- Channels posting 3+ videos/week grow 15–25% faster per additional weekly video until saturation around 7–10/week
- Shorts virality vs long-form (GothamChess avg): 799,600 vs 310,400 views — Shorts are the primary discovery mechanism for sub-500K channels
- Path to 10K subs: ~400 videos at current retention OR ~200 optimized videos. At 6 pieces/wk = 8–12 month timeline.

---

## 4. Organization & Management

### 4.1 Founder

**Rob Bonavoglia — Founder, on-camera creator, sole owner of brand**
- Chess: 1350 ELO chess.com Online Rapid (95th percentile, Class C USCF)
- Content: 322 videos published since 2023 across @HokageChess YouTube channel
- Operations: 3+ years operating BODI (Beachbody / network-marketing) fitness business — manages a working 4-level sales funnel (Teamzy CRM, email list, Discord, weekly accountability, downline)
- Geography: NYC; physical presence at chess parks; BODI ambassador network
- Skill profile: on-camera presence · community management · sales-funnel discipline · iterative content production · persona/character performance

### 4.2 Strategy Architect

**Anthony James Padavano — Strategy & systems builder**
- ORGANVM 8-organ creative-institutional system architect (145 repos, 33 sprints)
- AI-conductor workflows · MFA candidate · prompt engineering
- Built: market-gap analysis, business model, landing page (Next.js 16), TypeScript content engine, course catalog, trademark research, strategy v5 master + this plan
- Operating arrangement: collaboration-basis; revenue-share terms separately documented; not a co-owner

### 4.3 AI Bench (Production Capacity Multiplier)

| Agent | Class | Hokage Role |
|---|---|---|
| Claude Opus 4.7 (1M ctx) | Strategic | Architecture · governance · cross-verification · this document family |
| Codex GPT-5.4 | Mechanical | Refactoring · test stub generation · USPTO research |
| Gemini Flash | Tactical | Content drafting · channel audit · dashboard build · transformation gallery |
| OpenCode | Mechanical | Well-scoped infrastructure |

The conductor model — human directs vision, AI generates volume, human reviews — is the capacity multiplier. Effort measured in tokens, not hours. This delivers production capacity equivalent to a 3–5-person team at zero employee overhead.

### 4.4 Phase-Triggered Hires

**Phase 2 (1K subs / $2K MRR sustained 3 months)**:
- Video editor contractor (4–6 hrs/wk @ $25–50/hr) — frees Rob's editing time for more games + persona content
- Discord moderator (volunteer or low-pay) recruited from engaged Genin/Chunin members

**Phase 3 (10K subs / $8K MRR sustained)**:
- Community manager (part-time, $1.5–3K/mo)
- Course content producer (project-based, $500–1500/course)
- Physical-goods fulfillment partner (3rd-party, % of revenue)

---

## 5. Service / Product Line

### 5.1 Free Layer (Phase 1+, all phases)

| Product | Description | Conversion role |
|---|---|---|
| **YouTube library** | 322+ videos · evergreen content · Road to 1500 / Chunin Exams series · Persona Jutsu / Boss Battles / Sensei Sparring | Top-of-funnel discovery |
| **The Scroll** (newsletter) | Weekly email · "episodes" not "tips" · story-arc framing · Kit ConvertKit | Mid-funnel nurture |
| **The Village** (Discord) | Free community · Genin/Chunin/Jonin role tiers · 3 channels (#jutsu-of-the-week, #sparring-partners, #study-hall) | Mid-funnel community |
| **The Genin Scroll** (lead magnet) | "The 1300 Escape Plan" PDF — 7 positions from Rob's games, 15-20 pages, instinct-fail-1600-rule format | Email-gate primary |

### 5.2 Paid Layer Ladder

| Product | Price | Phase | Margin |
|---|---|---|---|
| **Genin Squad** | $9/mo (Patreon) | Phase 1+ | ~85% (Patreon takes 8–12%) |
| **Hokage merch** (headbands, stickers) | $15–35 | Phase 1-2 (post-TM) | ~40–60% (Spring/Printful) |
| **Jutsu Archive** (field journal) | $29 one-time | Phase 2+ | ~95% (Gumroad takes 5%) |
| **Chunin Cohort** (8-week climb) | $149/cohort | Phase 2+ | ~90% (Teachable/Circle hosting) |
| **Chunin Dojo** (always-on) | $29/mo or $249/yr | Phase 3+ | ~85% |
| **Jonin Mentorship** | $99/mo | Phase 3+ | ~90% |
| **Time Control Mastery** course | $97 | Phase 2+ | ~92% |
| **Jutsu Library** (full bundle) | $297 | Phase 3+ | ~92% |
| **Custom Chess Piece — Starter** | $49 | Phase 2-3 | ~30–40% (3D-print + resin + shipping) |
| **Hokage Chess Set** (full) | $149–249 | Phase 3+ | ~40–50% |
| **Persona Chess Sets** (limited drops) | $349–499 | Phase 3+ | ~50–60% (premium pricing) |
| **Private Intensive** (4-week 1-on-1) | $500 | Phase 3+ | ~90% (Rob's time) |
| **Kage Summit Tournament** (entry fee) | $15–25 | Phase 3+ | ~80% |
| **Affiliate / sponsorship** | Variable | Phase 3+ | 70–95% |

### 5.3 Course Catalog (7 peer-position-locked courses)

Each course teaches a specific 1300-band problem only a peer-level player can credibly teach:

1. **The Tilt Protocol** — emotional management during losing streaks (forum data: #1 unmet need)
2. **Clock Discipline** — time management across classical/rapid/blitz
3. **Plateau Protocol** — what to do when rating won't move for 3-6 months
4. **Pre-Move Discipline** — when pre-moves help, when they kill you
5. **Endgame Drilldown** — the 1300→1600 endgame gap
6. **Calculation Stamina** — building thinking endurance for long classical games
7. **Time Trouble Recovery** — patterns for managing the last 2 minutes

### 5.4 Persona Chess Format (unique content vertical)

Rob plays rated games while roleplaying fictional characters. Each persona = defined opening repertoire + playstyle + commentary voice. Standalone discovery hooks (don't require series knowledge).

Initial persona roster (originals; no IP-infringing depictions):
- **C3PO**: hyper-analytical, calculates odds out loud, overthinks every move
- **Vegeta**: aggressive king-side attacks, refuses queen trades ("I'd rather DIE than exchange")
- **Bob Ross**: "happy little pawns," calm, finds beauty in every position
- **Morgan Freeman**: third-person narration, deep strategic patience
- **Gordon Ramsay**: roasts opponent's moves ("THIS KNIGHT DEVELOPMENT IS RAW")

Each persona becomes:
- Standalone YouTube video (10–15 min, edited, costume/character overlay)
- Themed Persona Chess Piece set (sold via drop model)
- Future collab format (guest creators play rival personas)

### 5.5 Physical Goods Pipeline

3D-print prototypes → demand validation → resin/weighted production → small batches → drop announcements via The Scroll → ships from 3rd-party fulfillment.

Production process becomes its own video subgenre ("Designing the Hokage Set" / "What Goes Into a Persona Set Drop").

---

## 6. Marketing & Sales Strategy

### 6.1 Funnel Architecture (BODI Cross-Pollinated)

| Stage | Mechanic | Tool |
|---|---|---|
| **L1 — Cold leads** | Manual scrape: chess.com profiles · Lichess leaderboards · GothamChess/Naroditsky comments · r/chess · #chesstok creators · scholastic-chess parents · anime-chess overlap | Browser + manual DM/comment |
| **L2 — Email opt-in** | Free DM offer → "1300 Escape Plan" PDF → email gate via Kit | Kit (ConvertKit) free tier |
| **L3 — Paid customer** | Warm L2 → Genin Squad ($9/mo) → cohort/course upsell | Patreon → Teachable/Circle |
| **L4 — Ambassador** | VIP customer → Jonin Sensei moderator → affiliate | Internal Discord roles + Refersion (later) |

**Founder labor**: L1 (Rob's manual outreach — same playbook he runs for BODI fitness)
**System labor**: L2-L4 automation (Kit drips, Discord roles, Patreon billing)

### 6.2 Content Cadence (algorithm-aware)

**Minimum**: 3 long-form + 3 Shorts weekly. Saturation around 7–10/wk; don't exceed.

**Long-form formats**:
- Road to 1500 / Chunin Exams (weekly, 10–15 min)
- Boss Battle (monthly, 10–15 min, vs 200+ ELO opponent)
- Sensei Sparring (Phase 2+, monthly, titled-player guest)
- Persona Jutsu (Phase 2+, weekly, 10–15 min)
- Village Report (Phase 2+, monthly community highlight)

**Shorts** (vertical, 30–60s):
- Training Ground (study clips, blunders, breakthroughs)
- Dramatic Puzzle (45–60s, "white to move, find the win" → reveal)
- Persona moments (extracted from long-form)

### 6.3 Title Formula (codified)

`[EMOTION] + [STAKES] + [CONTEXT]` ≤60 chars. Anti-pattern: episode-numbering at title front auto-deducts.

Examples:
- *"I FINALLY Beat the Opening That Destroyed Me"* (3/3)
- *"This 1300 Played Like a Grandmaster"* (3/3)
- *"One Game Away From 1500 (and I blundered)"* (3/3)
- *"Road to 1500 | Episode 13"* (0/3 — anti-pattern)

### 6.4 Thumbnail Rubric (codified)

4-point score: face_visible + emotion_clear + text_readable + high_contrast. Pass ≥3.
- 2–4 words max in bold sans-serif (Impact, Montserrat Extra Bold)
- White text + black outline, positioned to NOT obscure face
- Yellow/red accents on darker backgrounds
- Chessboard secondary; human element primary

### 6.5 Cross-Platform Syndication

Each long-form generates 2–3 Shorts (45–60s extracted dramatic moments). Each Short syndicates to:
- TikTok (#chesstok #chessmemes hashtags)
- Instagram Reels
- YouTube Shorts (primary)
- Twitter/X (real-time during chess events)
- Reddit r/chess (value-add posts only, never spam)

The Scroll newsletter recaps weekly + drives traffic to long-form + announces drops.

### 6.6 Lead-Magnet Strategy

**Phase 1**: "The 1300 Escape Plan" — 15-20 page PDF, 7 positions from Rob's games. Email-gated. Hosted on Google Drive / Gumroad free.

**Phase 2 upgrade**: 5-day email sequence ("The Chunin Exam Prep Kit"):
- Day 1: openings fix
- Day 2: endgame drill
- Day 3: tilt-recovery protocol
- Day 4: training schedule
- Day 5: "Join the Village" CTA

### 6.7 Conversion Mechanics

**On the landing page** (live):
- Live ELO badge with timestamp ("1350 — Updated Apr 2026")
- 9-section emotional arc (Hero → Problem → Identity → Three Roads → Social Proof → Offer → Journey Map → FAQ → Final CTA)
- Three free CTAs (lead magnet, YouTube, Discord) — no paid ask in V1
- Email capture in Final CTA section (currently `console.log` — needs Kit API wiring)
- Mobile-first (70%+ of YouTube traffic is mobile)
- Page load <2 seconds

**In email/Discord nurture**:
- Story-arc-format (weekly "episodes," not "tips")
- Cohort challenges ("+50 collective ELO" community events)
- Anti-authority authority voice — "I'm beside you, not above you"
- Phase 2: testimonials with ELO before/after

### 6.8 Sponsorship & Partnership Strategy (Phase 2-3)

**Initial partner targets**:
- Chess platforms (Chess.com Streamer Program — Day-1 eligibility, no minimum; Lichess affiliate; Aimchess training-tool affiliate)
- Chess equipment retailers (House of Staunton, Wholesale Chess, Chess.com Shop)
- Anime/creator-economy brands (Crunchyroll-tier, original-design-only placements)
- Content tools (Chessable affiliate, ChessKid for scholastic)

**Sponsorship pricing schema** (Phase 3 baseline):
- Pre-roll mention: $25 CPM (cost per thousand views)
- Mid-roll integration: $35 CPM
- Dedicated sponsor video: $1,000–$5,000 flat (10K subs gate)

---

## 7. Operating Plan

### 7.1 Tech Stack Phasing

**V1 ($0–50/mo revenue, Months 1–6):**

| Component | Tool | Cost |
|---|---|---|
| Landing page | Next.js 16 (already built) + Vercel | $0 |
| Email + automation | Kit (ConvertKit) free plan ≤1K subs | $0 |
| Lead magnet hosting | Google Drive / Gumroad free | $0 |
| Domain | hokagechess.com (Cloudflare) | $12/yr |
| Community | Discord | $0 |
| Analytics | Plausible or Vercel built-in | $0–9/mo |
| Payments (Genin Squad) | Patreon (8–12% take) | 0 fixed |
| **Total** | | **~$12–50/yr** |

**V2 ($500–2K/mo revenue, Months 6–18):**

| Component | Tool | Cost |
|---|---|---|
| Site + funnels + courses | Systeme.io Startup | $17/mo |
| Email | Kit Creator | $29/mo |
| Course hosting | Teachable Basic | $39/mo |
| Payments | Stripe (via Systeme/Teachable) | 2.9% + $0.30/txn |
| **Total** | | **~$85/mo** |

**V3 ($5K+/mo, Months 18+):**

| Component | Tool | Cost |
|---|---|---|
| Full platform (site + community + courses) | Kajabi Growth | $199/mo |
| Email | Included in Kajabi or Kit Creator Pro | included or $59/mo |
| Discord | Free | $0 |
| Physical fulfillment | Spring/Printful + 3rd-party for chess pieces | % of rev |
| **Total** | | **~$199–260/mo** |

### 7.2 Production Workflow

**Weekly content cycle (Phase 1):**

| Day | Work |
|---|---|
| Mon | Record 1 long-form game/analysis · script next week |
| Tue | Edit Mon's video · post Short 1 |
| Wed | Record / edit · post Short 2 |
| Thu | Publish long-form · post Short 3 (extracted from long-form) |
| Fri | The Scroll newsletter writeup |
| Sat | L1 outreach (BODI playbook applied to chess) · Discord engagement |
| Sun | Off / planning |

**Phase 2 cadence**: 3 long-form + 3 Shorts/week minimum. Adds Persona Jutsu (1x/wk), Boss Battle (monthly), Sensei Sparring (Phase 2+ monthly), Village Report (monthly).

### 7.3 Algorithm Monitoring (engine-codified)

The `analytics.ts` library auto-evaluates weekly scorecards and emits red flags:
- CTR <3% for 2+ weeks → "Stop uploading. Test 5 thumbnails."
- Retention <40% at 30s → "Hook is broken. Rewrite first 30 seconds."
- 0 subs gained 4+ weeks → "Major visibility problem. Do 1 collaboration."

**Phase gate** (auto-evaluated at quarter-end): pass-most-criteria → "go" advance · pass-half → "continue with adjustments" · less → "pause and audit."

### 7.4 Community Operations

**Discord governance**:
- Genin (0–1199 ELO) / Chunin (1200–1599) / Jonin (1600+) role tiers
- 3 starting channels: #jutsu-of-the-week, #sparring-partners, #study-hall
- 50 active members > 500 ghosts (Phase 1 curation principle)
- Engaged free-tier members get "Jonin Sensei" mod role at Phase 2

**Cohort operations** (Phase 2+):
- Chunin Cohort capped at 20 players per 8-week run
- Daily puzzle of the day · weekly progress check-ins · final climb measurement
- Cohort #1 = "free / minimum-viable" beta to refine format
- Cohort #2+ paid at $149

### 7.5 Trademark Operations

**Phase 1**: Operate under fair use (channel name, content, community).
**Phase 2 trigger**: 90-day pre-merch lead-time:
- Engage USPTO trademark attorney ($300–500 consult)
- Clearance search in chess-piece + educational + apparel classes ($150–500)
- File "HOKAGE CHESS" application in Rob's classes ($250–350 USPTO + $150–300 attorney filing fee)
- **Total: $850–1,650**

### 7.6 Rob's Daily / Weekly / Monthly Discipline

**Daily (Phase 1)**:
- 1 YouTube Short published
- 30–60 min chess study
- 2–3 rated games (training, content fodder)
- 15 min L1 outreach (DMs, comments, Discord engagement)

**Weekly**:
- 1 long-form video published
- 1 The Scroll newsletter sent
- 1 community engagement event in Discord (study hall, sparring meetup)
- Quarterly title-audit on top 3 underperforming videos

**Monthly**:
- Boss Battle episode published
- Genin Squad accountability call (live or recorded)
- Phase-gate self-evaluation against `growth.ts` quarterly targets

---

## 8. Financial Projections (3-year)

### 8.1 Year 1 — Phase 1 → Phase 2 transition

**Conservative case (Strategic Growth Blueprint at 5K subs Y1)**:

| Stream | Monthly @ Y1 end |
|---|---|
| Ad revenue | $50–150 |
| Memberships (Genin Squad) | $100–300 |
| Coaching (5–10 hrs/wk @ $25–50/hr) | $400–800 |
| Affiliate / sponsorship | $50–200 |
| **Total** | **$600–$1,450/mo** |

**Aggressive case (full ladder at 8K subs Y1)**:

| Month | Subs | Email | Genin $9 | Chunin $29 | Jonin $99 | Cohort sales | **MRR** | Costs | **Net** |
|---|---|---|---|---|---|---|---|---|---|
| M1 | 99 | 0 | 0 | — | — | — | $0 | $5 | -$5 |
| M3 | 350 | 200 | 8 | — | — | — | $72 | $5 | $67 |
| M6 | 1,100 | 700 | 45 | — | — | 1 ($149) | $554 | $50 | $504 |
| M9 | 3,000 | 1,800 | 90 | 22 | 2 | — | $1,646 | $50 | $1,596 |
| M12 | 8,000 | 4,200 | 160 | 75 | 9 | 2 ($297) | $4,809 | $250 | $4,559 |

**Year-1 cumulative (aggressive)**: ~$15,500 net revenue.
**Year-1 final MRR**: $4,800/mo (~$58K ARR run-rate).
**Y1 break-even month**: M3 (35 paying Genin = $315/mo > $50/mo costs).

### 8.2 Year 2 — Phase 2 deep / Phase 3 trigger

| Component | Y2 monthly avg |
|---|---|
| Genin Squad ($9 × 250) | $2,250 |
| Chunin Dojo ($29 × 100) | $2,900 |
| Jonin Mentorship ($99 × 15) | $1,485 |
| Cohort sales ($149 × 8/mo avg) | $1,192 |
| Course one-times ($97/$297 × 10/mo blended) | $1,000–2,000 |
| Merch + chess piece drops | $500–1,500 |
| Sponsorship / affiliate | $500–2,000 |
| Coaching | $1,000–2,000 |
| **Total Y2 MRR** | **$10,000–15,000/mo** |

**Y2 ARR run-rate**: $120K–180K
**Y2 operating costs**: ~$85–200/mo
**Y2 net margin**: 80–90%

### 8.3 Year 3 — Phase 3 mature

| Component | Y3 monthly avg |
|---|---|
| Genin Squad ($9 × 500) | $4,500 |
| Chunin Dojo ($29 × 250) | $7,250 |
| Jonin Mentorship ($99 × 40) | $3,960 |
| Cohort sales ($149 × 15/mo) | $2,235 |
| Course bundle ($297 × 10/mo) | $2,970 |
| Persona chess piece drops ($349–499 × 30/mo limited) | $10,000–15,000 (drop-quarter spikes) |
| Sponsorship | $2,000–5,000 |
| Private Intensive ($500 × 4/mo) | $2,000 |
| **Total Y3 MRR** | **$25,000–45,000/mo** |

**Y3 ARR**: $300K–540K
**Y3 operating costs**: ~$300–500/mo (Kajabi + Kit Creator Pro + fulfillment partners)
**Y3 net margin**: 80–85%

### 8.4 Cash Flow Considerations

**Bootstrap-positive**: Phase 1 break-even Month 3. No outside capital required.
**Pre-merch capital injection**: ~$1,500 trademark clearance (Phase 2 trigger). Funded from Phase 1 Genin Squad accumulated revenue.
**Pre-physical-goods capital**: ~$3,000–10,000 for first 100-piece resin chess set production run (Phase 3 trigger). Funded from Phase 2 accumulated revenue (or pre-order model — community votes + pre-orders → production).

### 8.5 Sensitivity & Assumption Risks

- Actual paid conversion rate (free → Genin $9) industry-typical 1–3%. Plan assumes 2% Phase 1, 4% Phase 2.
- Sub growth at 6 pieces/wk → 8–12 month timeline to 10K (Blueprint). Plan uses 12-month path.
- Cohort-sale rate per email-list: assume 1% per cohort launch (200 emails → 2 sales × $149).
- Patreon take rate 8–12% modeled at high end (12%).
- Stripe processing 2.9% + $0.30 modeled.
- ARPU drift up over time as Chunin Dojo / Jonin convert from Genin Squad (modeled as ARPU $9 → $20 → $25 across phases).

---

## 9. Risk Analysis

### 9.1 Operational Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Rating stalls/drops | High | LOW | Document as "Plateau Arc" — narrative payoff |
| Burnout from cadence | Medium | High | 3+3/wk cap; don't exceed 7–10/wk; battery management = content management |
| Algorithm CTR <3% sustained | Medium | High | Engine red-flag auto-trigger (analytics.ts); stop uploading, test 5 thumbs |
| Founder injury / illness | Low | High | Phase 2+ community generates content (network effect insulation) |
| BODI fitness business conflict | Low | Medium | Time-box separately; Saturday is Hokage L1 outreach day, weekday evenings BODI |

### 9.2 Market Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| GothamChess / Chessly compete directly | Low | Medium | They cannot replicate peer-position; structural moat |
| Chess.com kills affiliate program | Medium | Low | Lichess + Aimchess + Chessable as alternatives |
| Anime fans dismiss chess content | Low | Medium | Naruto branding intuitive without anime knowledge; not gatekeeping |
| Titled-player community dismisses brand | High | LOW | Target = 800–1600; dismissal reinforces underdog narrative |
| Creator-economy bubble pops | Medium | High | Bootstrap-positive; no growth-at-all-costs reliance |

### 9.3 IP Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Naruto/Bandai-Namco TM challenge on "Hokage" | Low | High | Channel name = LOW risk; merch needs $500–1500 clearance + lawyer; never use Naruto imagery |
| Someone else files HOKAGE CHESS TM first | Medium | High | File Rob's own application Phase 2; field is open after 2 abandoned filings |
| Persona Chess characters trigger IP claims | High | Medium | Original-art only — "inspired by," never derivative; Bob Ross / Morgan Freeman / Gordon Ramsay are public-domain personas with parody safe-harbor |

### 9.4 Financial Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Patreon changes terms / rate hike | Low | Low | Migrate to Memberful or Skool (Phase 2) |
| Refund cluster on cohort | Medium | Medium | First cohort = free/beta; cap at 20 to manage refund risk |
| Physical-goods unit-economic surprise | Medium | High | Pre-order model + small first runs; validate before scaling |
| Sponsorship contract dispute | Low | Medium | Standard contracts; advance approval for sponsored mentions |

### 9.5 Community Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Toxicity in Discord | Medium | High | Village Rules early; paid-tier self-selection; engaged-member moderators |
| Cohort participant non-completion | Medium | Low | Accountability structure; refund only first 7 days |
| Drama with another chess creator | Low | Medium | Stay out of feuds; collaboration over competition |

---

## 10. Funding Request

**No external funding required for Phases 1–2.**

The business is bootstrap-positive from Month 3. Phase 1 operating costs (~$12/yr–$50/yr) are absorbed by founder personal funds. Phase 2 costs (~$50–85/mo) are covered by Genin Squad MRR by Month 6.

**Phase 3 optional consideration**: Creator-economy advances if attractive terms arise.
- **Spotter** (or similar creator-capital firm): 5-7-figure advance against 30–50% of future YouTube ad revenue for 3–5 years. Triggered only if MRR ≥ $5K + 3-month sustained growth rate ≥10%/mo.
- **Patreon Capital**: smaller, equity-light advance against future Patreon income.
- **Anime-creator fund** (Kakao, Naver-affiliated, etc.): potentially equity-light depending on fund.

**Use of phase-3 funds (if accepted)**: physical-product first run scaling ($25K–75K for 1,000-piece Hokage Set production) + 1 part-time community manager hire + course-production budget.

**Trademark clearance budget** ($500–1500): Phase-2 trigger, funded from Phase-1 accumulated revenue. Not external funding.

---

## 11. Appendix

### A. 90-Day Execution Sequence

(See Strategy v5 Part 14 for full checklist with dates.)

**Week 1**: Domain · Vercel deploy · Kit setup · Email API wiring · OG image
**Week 2**: Lead-magnet PDF · title audit (top 20) · YouTube descriptions backfill · Discord launch · daily Shorts cadence
**Week 3-4**: "Road to 1500" → "Chunin Exams" rename · Jutsu of the Week launch · Training Ground Shorts pillar · first Boss Battle · welcome email sequence
**Week 5-8**: Genin Squad Patreon launch (Discord ≥50 members trigger) · first Sensei Sparring · first Village Report · merch test · Persona Jutsu pilot · rival storyline activation
**Week 9-12**: Phase-1 MRR review · email-list 500+ assessment · Discord cohort tooling · first Chunin Cohort sale prep · title-audit results review

### B. Codified Engine Reference

| Module | What it does |
|---|---|
| `narrative.ts` | Ki-Shō-Ten-Ketsu architecture · 4 quarterly arcs · chapter timestamps |
| `growth.ts` | Q1-Q4 targets · YPP eligibility · phase determination |
| `content-strategy.ts` | Title scoring · thumbnail rubric · idea evaluator · week planner |
| `analytics.ts` | Weekly scorecard · phase-gate evaluation · red-flag detection |
| `engine.ts` | Entry point — exports all |

### C. Brand Asset Inventory (Live)

- Landing page (Next.js 16, 9 sections) — `src/app/page.tsx`
- Visual system — Hokage Red `#C41E3A` + Charcoal + Pure White + Gold accent
- Typography — Oswald/Bebas/Inter/DM Sans/JetBrains Mono
- OG/Twitter metadata — committed `d0de9b2`
- Domain `hokagechess.com` AVAILABLE (and `thedojo.gg` as backup)

### D. Document Family

- **Strategy v5 master** — `docs/business/2026-04-25-strategy-v5-alchemy.md` ← single source of truth
- **Pitch deck** — `docs/business/2026-04-25-pitch-deck.md` ← derived
- **Business plan** — `docs/business/2026-04-25-business-plan.md` ← THIS FILE, derived
- **30-day Rob playbook** — `docs/ROB-FIRST-30-DAYS.md`
- **Strategy v3** (prior master) — `reference/2026-04-25-unified-strategy-v3.md`
- **Strategy v4 refresh** (Δ-overlay; superseded) — `docs/business/2026-04-25-strategy-v4-refresh.md`
- **Strategy v2** (Persona Chess + price ladder source) — `reference/2026-04-24-unified-strategy-v2.md`
- **Strategic Growth Blueprint** — `reference/strategic-growth-blueprint.pdf`
- **Rob's BODI funnel analysis** — `research/2026-04-25-rob-funnel-analysis.md`
- **Chess market research** — `research/2026-04-25-chess-market-research.md`
- **Sales-funnel content audit** — `research/2026-04-25-sales-funnel-content-audit.md`

### E. Source Materials Verification

This plan integrates source-grounded numbers from FIDE, Chess.com, YouGov, VidIQ, HypeAuditor, the Wikipedia entry on the chess education industry, the Strategic Growth Blueprint (2025-12 baseline), and Codex USPTO trademark research (2026-04-24). Specific cited statistics include ChessBase India $99K-$298K/mo from ads, GothamChess 7M+ subs / 1B views / 274,900 hours-watched on Road-to-GM 2024, and Anna Cramling 1M subs (2024).

All source documents are committed to the repo; verification trail is reproducible.

---

**End of business plan.**

# Plan: BODI Gap Closure Full Implementation

**Date:** 2026-04-25  
**Project:** `hokage-chess`  
**Source of truth checked against:**  
- `~/.claude/plans/we-all-work-in-atomic-map.md`  
- `/Users/4jp/2026-04-25-200417-local-command-caveatcaveat-the-messages-below.txt`  
- current scaffold commit `5f5b426` (`docs: seed bodi substrate scaffold`)

## Purpose

This plan closes the delta between:

1. the **original intent** of the 2026-04-25 BODI/persona plan, and
2. the **actual state** shipped in commit `5f5b426`.

The current state is a valid **seed scaffold**, but it is **not yet** the full Layer 1 + Layer 2 implementation implied by the original plan.

---

## Double-Check Findings

### Already complete

- `L1-0` completed: `docs/substrate/bodi/` exists with 8 strata + root `README.md`
- `L2-F` completed: `~/Documents/personas/` exists, is outside git, and is not chezmoi-managed
- `L2-G` partially complete: `rob-bonavoglia.md` exists with Profile, Voice, Communication style, Opinions, Observations, Open threads
- `L2-H` partially complete: `maddie.md` exists with seed content from relay + handoff docs
- `L2-I` partially complete: `scott-lefler.md` exists, but it is richer than the original stub and does not explicitly mark unresolved scope at the top
- repo plan history exists in-project at `.codex/plans/2026-04-25-bodi-substrate-and-persona-scaffold.md`
- project changes were committed and pushed in `hokage-chess`

### Layer 1 gaps

1. **L1-A not done.**  
   `historic.md` is a short synthesis note, not the "past research within domain + applicable domains" pass the original requested.

2. **L1-B not done.**  
   `current.md` is a local summary, not a sourced "present-state expert" document.

3. **L1-C not done.**  
   `futures.md` is a seed note, not a researched "future lead potentials" analysis.

4. **L1-D not done.**  
   `bodi-constellation.yaml` currently has **5 actors**, while the original verification target required **>=50**.

5. **L1-E not done.**  
   `absorption-rules.yaml` currently has **6 rules**, while the original verification target required **>=10**.

6. **Stratum 2 verification fails.**  
   The original plan required each timeslice file to contain **>=3 named sources** plus **>=1 applicable-domain cross-link**. The current files are seed narratives and do not meet that bar.

7. **Actor-card layer not populated.**  
   `03-constellation/actor-cards/` only has a `README.md`; no individual cards exist yet.

8. **PDE audit target not satisfied.**  
   The original verification required a before/after mode-score increase. No pre-scaffold baseline was captured. Current post-scaffold audit is:
   - LOGOS `4/5`
   - ETHOS `1/6`
   - PATHOS `1/5`
   - KAIROS `1/4`
   This becomes the new baseline for future closure work.

### Layer 2 gaps

1. **Transcript sections are summaries, not raw transcript payloads.**  
   The original per-file structure expected transcript sections to hold raw pasted material or faithful transcript blocks. Current persona files mostly store condensed notes.

2. **Collaborator-memory integration is missing.**  
   The original persona atoms explicitly referenced collaborator memory for Rob and Maddie. Current files were seeded from local docs/relays only.

3. **Scott file does not clearly advertise `scope-needed` status.**  
   The original plan wanted a stub with explicit unresolved-scope markers. Current file is usable, but the unresolved project/domain status should be made unmistakable.

4. **Surrogate-query verification not run.**  
   The original verification target required a test question such as "what would Rob think about adding TikTok to his content stack" with a confidence flag.

5. **Confidence protocol is underdefined.**  
   The original persona behavior assumed high/medium/low confidence outputs for surrogate responses; the corpus README does not yet codify that workflow.

### Process/history gaps

1. **Original plan archival step not done.**  
   `~/.claude/plans/2026-04-25-we-all-work-in-atomic-map-v1.md` does not exist.

2. **Dotfiles commit/push for the archived plan not done.**  
   This is a process gap, not a BODI content gap, but it was explicitly required by the original plan.

---

## Gap Register

| ID | Gap | Class | Current state | Target |
|---|---|---|---|---|
| G1 | Historic research thin | Layer 1 | seed note | sourced research doc |
| G2 | Present-state expertise thin | Layer 1 | seed note | sourced current-state analysis |
| G3 | Future lead analysis thin | Layer 1 | seed note | sourced forecast / opportunity memo |
| G4 | Constellation undersized | Layer 1 | 5 actors | >=50 actors |
| G5 | Actor cards absent | Layer 1 | 0 cards | cards for all seed actors, then rolling expansion |
| G6 | Absorption catalog undersized | Layer 1 | 6 rules | >=10 rules |
| G7 | Timeslice source thresholds unmet | Layer 1 | no per-file source density | >=3 named sources + >=1 cross-link per timeslice |
| G8 | PDE delta proof missing | Layer 1 | post-scaffold only | before/after comparison anchored to current baseline |
| G9 | Transcript blocks normalized as summaries | Layer 2 | summary-only | raw/faithful transcript sections |
| G10 | Collaborator memory not ingested | Layer 2 | not used | integrated into Rob + Maddie |
| G11 | Scott scope-needed signaling weak | Layer 2 | implied only | explicit unresolved-scope markers |
| G12 | Surrogate query untested | Layer 2 | not run | test log + confidence protocol |
| G13 | Upstream plan archive missing | Process | missing | archived file exists |
| G14 | Dotfiles parity for archive missing | Process | not committed | committed + pushed |

---

## Implementation Sequence

### Phase 0 - Process and baseline repair

**Goal:** fix history/proof gaps before deeper content work.

#### P0-A. Archive the original plan
- Copy `~/.claude/plans/we-all-work-in-atomic-map.md` to `~/.claude/plans/2026-04-25-we-all-work-in-atomic-map-v1.md`
- Commit + push in the dotfiles repo
- Output: archived plan with preserved history

#### P0-B. Lock the audit baseline
- Save the current PDE audit output for `hokage-chess` in:
  - `docs/substrate/bodi/04-gap-map/2026-04-25-pde-audit-baseline.md`
- Record:
  - LOGOS `4/5`
  - ETHOS `1/6`
  - PATHOS `1/5`
  - KAIROS `1/4`
- Output: immutable baseline for later delta proof

#### P0-C. Add a closure tracker
- Create `docs/substrate/bodi/04-gap-map/gap-closure-checklist.md`
- Track G1-G14 with status, owner, blocker, and verification hook
- Output: one visible checklist instead of implicit state

### Phase 1 - Normalize the persona layer

**Goal:** bring Layer 2 into exact alignment with the original structure and behavior.

#### P1-A. Normalize transcript sections
- Update:
  - `~/Documents/personas/rob-bonavoglia.md`
  - `~/Documents/personas/maddie.md`
  - `~/Documents/personas/scott-lefler.md`
- Replace transcript summaries with either:
  - raw pasted transcript blocks, or
  - a clearly labeled `Transcript Summary` subsection plus a `Raw Source` reference line
- Exit criteria:
  - each file has a transcript section structurally matching the original plan

#### P1-B. Integrate collaborator memory
- Read and incorporate:
  - `~/.claude/projects/-Users-4jp/memory/collaborator_maddie.md`
  - any equivalent Rob / project-artifact memories that materially affect communication style
- Add dated notes into:
  - `Voice`
  - `Communication style`
  - `Observations`
- Exit criteria:
  - Rob and Maddie files explicitly cite collaborator-memory-derived material

#### P1-C. Reframe Scott as scope-open
- Update `~/Documents/personas/scott-lefler.md`
- Add an explicit top-level marker such as:
  - `Scope status: unresolved`
  - `Domain substrate: not yet defined`
- Keep the useful business-framing content, but restore the original warning that Scott's project scope is still open
- Exit criteria:
  - file is still informative but unmistakably marked as provisional

#### P1-D. Codify surrogate confidence
- Update `~/Documents/personas/README.md`
- Define:
  - `high` = direct statement or repeated stance in corpus
  - `medium` = inferred from 2+ adjacent signals
  - `low` = extrapolated from sparse evidence
- Exit criteria:
  - README contains a reusable confidence rubric

#### P1-E. Run surrogate-query verification
- Ask against the corpus:
  - "What would Rob think about adding TikTok to his content stack?"
- Save result in:
  - `~/Documents/personas/README.md` or a new local validation note
- Exit criteria:
  - response includes a confidence flag and cites source basis

### Phase 2 - Complete Stratum 2 lineage research

**Goal:** turn the three timeslices from seed notes into actual research artifacts.

#### P2-A. Historic pass (`L1-A`)
- Expand:
  - `02-lineage/timeslices/historic.md`
  - `02-lineage/applicable-domains.yaml`
- Required source classes:
  - BODI / Beachbody / MLM lineage
  - fitness-coaching lineage
  - creator-funnel lineage
  - direct-sales / CRM operational lineage
- Required structure:
  - named sources section
  - within-domain findings
  - applicable-domain parallels
  - transfer rules into BODI
- Exit criteria:
  - >=3 named sources in file
  - >=1 cross-link to applicable domains

#### P2-B. Present-state pass (`L1-B`)
- Expand `02-lineage/timeslices/current.md`
- Required coverage:
  - current BODI/Beachbody context
  - current creator short-form distribution realities
  - current Teamzy/CRM workflow implications
  - present funnel-state diagnosis
- Required method:
  - browse current primary sources because present-state claims are temporally unstable
- Exit criteria:
  - >=3 named current sources
  - >=1 applicable-domain cross-link
  - explicit "what BODI should do now" section

#### P2-C. Futures pass (`L1-C`)
- Expand `02-lineage/timeslices/futures.md`
- Required coverage:
  - lead-surface expansion
  - regulatory / platform / creator-economy shifts
  - AI-assisted coaching or content leverage
  - post-restructure or market repositioning possibilities
- Required method:
  - browse current primary sources because future-facing claims depend on current market conditions
- Exit criteria:
  - >=3 named sources
  - >=1 applicable-domain cross-link
  - opportunities ranked by effort, upside, and founder-time savings

#### P2-D. Bibliography densification
- Expand `02-lineage/bodi-bibliography.yaml`
- Split sources into:
  - local-source
  - primary-web-source
  - named-figure-source
  - adjacent-domain-source
- Exit criteria:
  - bibliography can back every Stratum 2 claim

### Phase 3 - Complete Stratum 3 constellation

**Goal:** satisfy the original sibling/constellation requirement instead of leaving only the five-name seed.

#### P3-A. Expand actor count from 5 to >=50
- Expand `03-constellation/bodi-constellation.yaml`
- Use category buckets:
  - direct network-marketing archetypes
  - BODI/Shaklee/fitness leaders
  - creator-funnel operators
  - mindset / performance figures
  - sibling-system exemplars
- Exit criteria:
  - >=50 actors
  - each actor tagged with domain + extraction focus

#### P3-B. Create actor cards for the seed five
- Add:
  - `actor-cards/jordan-adler.md`
  - `actor-cards/daniel-negreanu.md`
  - `actor-cards/joe-freeman.md`
  - `actor-cards/josh-spencer.md`
  - `actor-cards/melanie-mitro.md`
- Exit criteria:
  - each card contains extract / avoid / transfer fields

#### P3-C. Expand sibling-process catalog
- Expand `03-constellation/sibling-actors.yaml`
- Go beyond business/tool containers and enumerate generic processes such as:
  - premium-content-library
  - engagement-filter-first
  - plan-personalization
  - VIP-curriculum
  - ambassador-toolkit
  - CRM-state-telemetry
  - build-in-public proof loop
- Exit criteria:
  - file reads like a process library, not just a list of neighbors

### Phase 4 - Complete Stratum 7 internal magnet

**Goal:** finish the "absorption or improvement" logic the user explicitly requested.

#### P4-A. Expand absorption catalog from 6 to >=10
- Expand `07-internal-magnet/absorption-rules.yaml`
- Ensure all three outcomes appear multiple times:
  - `ABSORB`
  - `IMPROVE`
  - `IGNORE`
- Exit criteria:
  - >=10 catalog entries
  - every entry ties back to a sibling process or external figure

#### P4-B. Deepen the attractor doc
- Expand `07-internal-magnet/bodi-attractor.md`
- Add:
  - inclusion criteria
  - rejection criteria
  - founder-time protection rules
  - "do not import this pattern" examples
- Exit criteria:
  - document can govern future ingestion without re-deciding first principles

### Phase 5 - Regenerate gap map and production stack from completed research

**Goal:** let the richer research rewrite the operational docs instead of keeping the seed versions frozen.

#### P5-A. Rewrite `04-gap-map/bodi-gap-map.md`
- incorporate new Stratum 2 + 3 + 7 findings
- add severity levels:
  - blocker
  - leverage
  - deferred
- add proof columns:
  - evidence
  - required artifact
  - dependency owner

#### P5-B. Rewrite `04-gap-map/heist-targets.yaml`
- transform from broad aspirations into ranked targets with:
  - source
  - exact mechanic to steal
  - cost
  - implementation landing file

#### P5-C. Rewrite `06-production-stack/bodi-production-stack.md`
- specify:
  - canonical handles
  - content cadences
  - Teamzy field additions
  - content-pack workflow
  - VIP deep-dive rhythm
  - ambassador toolkit dependencies

### Phase 6 - Verification and closure

**Goal:** satisfy the original verification list with objective evidence.

#### V1. Structure verification
- confirm 9 top-level entries in `docs/substrate/bodi/`
- confirm each stratum has non-empty primary artifacts

#### V2. Stratum 2 verification
- each timeslice has >=3 named sources
- each timeslice has >=1 applicable-domain cross-link

#### V3. Stratum 3 verification
- `bodi-constellation.yaml` has >=50 actors
- actor cards exist for the initial five

#### V4. Stratum 7 verification
- `absorption-rules.yaml` has >=10 entries
- ABSORB / IMPROVE / IGNORE all represented

#### V5. Persona verification
- `ls ~/Documents/personas/` still returns 4 entries
- `git -C ~/Documents rev-parse --show-toplevel` still fails
- `chezmoi source-path ~/Documents/personas` still reports not managed
- Rob persona passes surrogate-query test with confidence flag
- Scott persona shows explicit unresolved-scope marker

#### V6. PDE audit verification
- rerun `domain-audit.sh` on `hokage-chess`
- compare against baseline captured in Phase 0
- target improvement:
  - ETHOS rises from `1/6`
  - PATHOS rises from `1/5`
  - KAIROS ideally rises from `1/4`

#### V7. Commit / push / evidence
- commit the plan-driven `hokage-chess` changes
- push to `origin/main`
- summarize evidence in `gap-closure-checklist.md`

---

## Dependencies and Blockers

### No collaborator needed

- plan archival
- audit baseline capture
- gap checklist
- Scott scope-needed marker
- confidence rubric
- seed actor cards
- absorption-rule expansion from already-known sibling mechanics

### User or collaborator input needed

- raw text-message exchanges for persona densification
- Rob reel links / handles / Teamzy schema
- any additional Scott context if the persona is to become more than provisional

### Requires browsing / verification at execution time

- present-state market claims
- future lead potentials
- regulatory or platform-shift claims
- any current assertions about Teamzy, Beachbody/BODI, creator-economy conditions, or channel strategy

---

## Recommended execution order

1. Phase 0 - repair process and save audit baseline
2. Phase 1 - normalize persona layer
3. Phase 2 - complete Stratum 2 research
4. Phase 3 - expand constellation
5. Phase 4 - expand absorption rules
6. Phase 5 - regenerate gap-map and production stack
7. Phase 6 - verify, commit, push

This order closes the most serious fidelity gaps first: proof, structure alignment, and the exact research tasks the original user message explicitly named.


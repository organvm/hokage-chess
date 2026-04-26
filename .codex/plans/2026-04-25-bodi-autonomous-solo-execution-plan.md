# Plan: BODI Autonomous Solo Execution

**Date:** 2026-04-25  
**Project:** `hokage-chess`  
**Parent plans:**  
- `.codex/plans/2026-04-25-bodi-gap-closure-full-implementation-plan.md`
- `~/.claude/plans/we-all-work-in-atomic-map.md`

## Frame

If no new user or collaborator input arrives, the correct move is not to pause. The correct move is to exhaust every task that can be completed from:

- existing local repo artifacts
- existing local memory artifacts
- current web research where the claim is time-sensitive

The rule is:

- **finish what can be verified**
- **mark what is provisional**
- **do not invent missing collaborator facts**

---

## Solo Operating Law

### Allowed without new input

- reading any local repo, plan, or memory artifact
- browsing current primary sources for present-state and future-state research
- restructuring persona files using existing local evidence
- expanding research, constellation, gap maps, and absorption rules from existing evidence
- running local audits, validations, commits, and pushes

### Not allowed without new input

- fabricating Rob's handles, reel links, or Teamzy schema
- fabricating Maddie or Scott raw text exchanges that are not on disk
- pretending provisional process specs are confirmed collaborator practice
- sending outbound messages on the collaborators' behalf

### Labeling discipline

Every artifact touched in solo mode should classify claims as one of:

- `confirmed-local`
- `confirmed-current-web`
- `provisional-inference`
- `blocked-awaiting-collaborator`

---

## What Solo Completion Looks Like

### Phase 0 - Process and proof

Can be completed entirely solo.

- archive `we-all-work-in-atomic-map.md` to `~/.claude/plans/2026-04-25-we-all-work-in-atomic-map-v1.md`
- commit and push that archive in the dotfiles repo
- capture the current PDE audit output into the BODI substrate as a baseline artifact
- create a visible gap checklist in `04-gap-map/`

**Done state:** no plan-history gap, no missing baseline, no invisible checklist state.

### Phase 1 - Persona normalization

Mostly solo-completable from local sources.

- read:
  - `~/.claude/projects/-Users-4jp/memory/collaborator_rob_bonavoglia.md`
  - `~/.claude/projects/-Users-4jp/memory/collaborator_maddie.md`
  - related project-artifact memories already on disk
- rewrite `rob-bonavoglia.md` and `maddie.md` to integrate collaborator-memory signals into:
  - `Voice`
  - `Communication style`
  - `Observations`
  - `Open threads`
- normalize transcript sections so they distinguish:
  - raw transcript blocks
  - transcript summaries
  - source artifact references
- tighten `scott-lefler.md` so the first screen clearly says:
  - project scope unresolved
  - domain substrate undefined
  - communication corpus sparse
- add confidence rubric to `~/Documents/personas/README.md`
- run a surrogate-query test against Rob and log the result with confidence

**Done state:** persona corpus becomes operational instead of merely present.

### Phase 2 - Stratum 2 lineage completion

Solo-completable, but requires current-source browsing for unstable claims.

- `historic.md`
  - expand from seed note into researched lineage memo
  - pull from local docs plus stable background sources
- `current.md`
  - browse current primary sources for present-state claims
  - explicitly separate current BODI/Beachbody context, creator distribution reality, and CRM/process implications
- `futures.md`
  - browse current primary sources for lead-surface, platform, and market-shift opportunities
  - rank opportunities by upside and founder-time saved
- densify `bodi-bibliography.yaml`
- ensure each timeslice contains:
  - >=3 named sources
  - >=1 applicable-domain cross-link

**Done state:** Stratum 2 stops being seed prose and becomes a real research substrate.

### Phase 3 - Stratum 3 constellation build-out

Solo-completable.

- expand `bodi-constellation.yaml` from `5` to `>=50` actors
- bucket actors across:
  - MLM/network-marketing
  - fitness/coaching
  - creator-funnel operators
  - performance/mindset
  - sibling-system exemplars
- create actor cards at least for the seed five, ideally for the first 10-15 highest-leverage figures
- expand `sibling-actors.yaml` from neighbor-list into generic-process library

**Done state:** constellation becomes a real comparative universe instead of five names in a seed file.

### Phase 4 - Stratum 7 absorption engine

Solo-completable after Phase 3.

- expand `absorption-rules.yaml` from `6` to `>=10`, preferably `12-20`
- make sure all three outcomes recur:
  - `ABSORB`
  - `IMPROVE`
  - `IGNORE`
- deepen `bodi-attractor.md` into a true ingestion law:
  - what qualifies for import
  - what is rejected
  - what needs adaptation first
  - what wastes founder time

**Done state:** BODI gains a governing filter for external systems, not just a short list of opinions.

### Phase 5 - Operational regeneration

Mostly solo-completable, with clear provisional markings where collaborator confirmation is missing.

- regenerate `bodi-gap-map.md` from the now-completed research
- regenerate `heist-targets.yaml` with ranked, extractable, file-landed targets
- regenerate `bodi-production-stack.md` with:
  - confirmed stack
  - proposed stack changes
  - provisional Teamzy fields marked as awaiting confirmation
- create auxiliary solo-prep artifacts if useful:
  - `content-inventory-template.md`
  - `vip-deep-dive-series-spec.md`
  - `ambassador-toolkit-spec.md`
  - `teamzy-proposed-fields.yaml`

**Done state:** the system is operationally specified up to the edge of collaborator confirmation.

### Phase 6 - Verification, audit, ship

Solo-completable.

- verify structure counts
- verify source-density thresholds
- verify actor count and absorption-rule count
- rerun PDE audit against the current baseline
- record improvements
- commit and push `hokage-chess`
- summarize remaining human-blocked items in the checklist

**Done state:** everything that could be finished alone is finished, measured, and shipped.

---

## Exact Solo Task Inventory

### Immediate solo tasks

1. Archive upstream plan and push the archive.
2. Capture PDE audit baseline artifact.
3. Add `gap-closure-checklist.md`.
4. Read Rob and Maddie collaborator-memory files and merge them into persona docs.
5. Add confidence rubric and run Rob surrogate-query validation.
6. Reframe Scott file as explicit `scope-needed`.
7. Complete Stratum 2 research.
8. Expand constellation to `>=50`.
9. Create seed actor cards.
10. Expand absorption rules to `>=10`.
11. Rewrite gap map and production stack from finished research.
12. Verify, audit, commit, push.

### Parallelization pattern

If working alone but with full tool use, the work splits into three lanes:

- **Lane A: Personas / memory integration**
  - files under `~/Documents/personas/`
- **Lane B: Research substrate**
  - `02-lineage/`
  - `02-lineage/bodi-bibliography.yaml`
- **Lane C: Comparative engine**
  - `03-constellation/`
  - `07-internal-magnet/`
  - then `04-gap-map/` and `06-production-stack/`

Best order:

1. do Phase 0 first
2. run Lane A while researching Lane B
3. use Lane B outputs to power Lane C
4. regenerate operational docs after all three lanes settle

---

## What Will Still Be Blocked

Even after an ideal solo pass, these remain blocked until the human or collaborator returns:

- Rob's actual reel links
- Rob's canonical FB / IG handles if not locally stored
- Rob's real Teamzy field schema
- new raw text threads not already on disk
- Maddie's missing affiliate URLs and any new feedback beyond the saved artifacts
- Scott's actual current project scope and fresh communication corpus

These should not stop the solo pass. They should be isolated into a short residual blocker list.

---

## Expected Residual After Solo Pass

If the solo tranche is executed correctly, the remaining blocker list should collapse to something like:

1. `Rob` - send links / handles / Teamzy schema
2. `Maddie` - send missing URLs / confirm latest visual direction if new work depends on it
3. `Scott` - define active project scope

Everything else should already be structured, researched, verified, committed, and pushed.

---

## Recommended Solo Standard

The right bar is not "wait for the master."  
The right bar is:

- leave no structure unmade
- leave no research pass unrun
- leave no local memory unintegrated
- leave no verification step undone
- reduce the human return surface to only the facts that literally require another person

That is what being useful looks like across all six phases when no new human input is available.


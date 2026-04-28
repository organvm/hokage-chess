# Workstream Sequencing — Five Clusters

**Date:** 2026-04-28
**Companion to:** `README.md` (catalog of 10 workstreams)
**Purpose:** Group the 10 workstreams into dependency-aware clusters and define the sequence in which they should be activated.

---

## The five clusters at a glance

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  A. Engine Substrate ──┐                                         │
│     (must run first)   │                                         │
│                        ▼                                         │
│  B. Research          C. Strategy ──┐                            │
│     (parallel,         (signal-     │                            │
│      steady-state)     triggered)   ▼                            │
│                                    D. Production Loop ──┐        │
│                                       (continuous)      │        │
│                                                         ▼        │
│                                                       E. Quality │
│                                                         ▲        │
│                                                         │        │
│                                       (E loops back to A/C/D) ───┘
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

| Cluster | Workstreams | Role | Cadence |
|---|---|---|---|
| **A. Engine Substrate** | 05 Vocabulary Cartographer · 02 Lineage Cartographer | Foundational — defines lexicons + named rivalry rosters | Once per domain |
| **B. Research Substrate** | 01 Mechanic Extractor | Parallel substrate-fill (×70 constellation profiles) | Steady-state, parallel |
| **C. Strategy Layer** | 06 Funnel Geologist · 07 Diagnostician | Architecture iteration triggered by signal | Signal-triggered |
| **D. Production Loop** | 03 Hook Sharpener · 04 Polyglot Re-cutter · 08 Hearth Keeper | Continuous content production | Weekly + per-publish |
| **E. Quality / Closure** | 09 Cold Auditor · 10 Adversarial Reader | Audit, measure, gate next cycle | Per-session + weekly |

---

## A. Engine Substrate — foundational, must complete first

**Workstreams:** 05 Vocabulary Cartographer · 02 Lineage Cartographer
**Why first:** every other workstream's output runs through the scoring engine (lexicons) and against named rivalry (lineage). Without these, downstream work falls back to `DEFAULT_LEXICON` (universal, shallow per-domain) and to ungrounded rivalry vocabulary. Output ships, but the scoring loop loses fidelity.

**Done when:**
- ≥2 domain lexicons exported as `<DOMAIN>_LEXICON` constants in `content-strategy.ts` (chess implicit via defaults; **fitness lexicon required next**)
- ≥1 named-rivalry roster filled per active domain (chess has Park/Online/Title/Echo; **fitness lineage roster required next**)

**Inputs needed before this cluster activates:**
- Sample titles per domain (5-10) for the Vocabulary Cartographer
- The chess lineage as a structural reference for the Lineage Cartographer

**Failure mode if skipped:** Cluster D ships content gated on a generic scorer; the magnetic-figure architectural-coherence factor falls.

---

## B. Research Substrate — parallel, orthogonal to the critical path

**Workstreams:** 01 Mechanic Extractor (×70)
**Why parallel:** profiles are independent. Each can be assigned to its own session. The 70 are not a bottleneck for any other cluster — they are a substrate that compounds the value of every other cluster's output as it fills.

**Done when:** 75-person constellation framework full (`docs/research/constellation/<lastname>.md` for all 75).

**How to fan out:** spin 5-10 parallel sessions, one per profile, hand each session form 01 + the person's name + research permission. Each session is one-shot and independent.

**Failure mode if skipped:** Cross-Demographic Systems Modeling claims (Theoria layer) remain theoretical. Manifest's "constellation method" pillar weakens to 5/75.

---

## C. Strategy Layer — signal-triggered, depends on A + Rob disclosures

**Workstreams:** 06 Funnel Geologist · 07 Diagnostician
**Triggers:**
- 06 Funnel Geologist activates when form 03 (Teamzy schema) returns or form 04 (premium reel inventory) returns or a leak signal appears
- 07 Diagnostician activates when two domains both have substantive artifacts to compare (currently: BODI + Hokage funnels)

**Depends on:** Cluster A (lexicons) for any content recommendations the strategy outputs make about title/hook revisions.

**Failure mode if skipped:** funnel architectures stay frozen at 2026-04-25 v1; cross-pollination opportunities go unobserved as the two domains evolve.

---

## D. Production Loop — continuous, depends on A

**Workstreams:** 03 Hook Sharpener · 04 Polyglot Re-cutter · 08 Hearth Keeper

**Internal sequence per primary publish:**

```
  draft title ──▶  03 Hook Sharpener  ──▶  publish  ──▶  04 Polyglot Re-cutter  ──▶  POSSE syndication
                  (gate, score ≥ 2/3)                   (per-platform variants)
```

**Independent track inside D:**

```
  weekly Wed ──▶  08 Hearth Keeper (Wed Welcome ritual)
  weekly Fri ──▶  08 Hearth Keeper (Fri Loot Drop ritual)
```

**Depends on:** Cluster A (Hook Sharpener requires the relevant domain lexicon).
**Failure mode if A is incomplete:** Hook Sharpener falls back to `DEFAULT_LEXICON` — works, but loses domain fidelity.

---

## E. Quality / Closure — gates next cycle

**Workstreams:** 09 Cold Auditor · 10 Adversarial Reader

**Sequence:**
- 10 Adversarial Reader runs at end of every substantive session OR before any external-facing publish — produces bolt list
- 09 Cold Auditor runs weekly (Sunday EOD or Monday AM) — produces magnetism card entry

**Why E closes back to A/C/D:** the bolt list and the magnetism card are inputs to the next cycle's planning. A flat magnetism trend says: the magnetic-figure thesis is currently unsupported — re-examine A (is the engine substrate thin?), C (is strategy frozen?), D (are formats running?) before producing more.

**Failure mode if skipped:** Cluster D ships unaudited and unmeasured. The manifest §III formula stays unfalsifiable. The magnetic-figure thesis becomes self-fulfilling rhetoric.

---

## Sprint sequence (concrete)

### Sprint 0 — Immediate (this week)
- Activate Cluster A:
  - Vocabulary Cartographer drafts `FITNESS_LEXICON` (form 09)
  - Lineage Cartographer drafts fitness apex-predator roster (parallel to chess Park/Online/Title/Echo)

### Sprint 1 — Week 1-2 (after Sprint 0 lands)
- Activate Cluster D production:
  - Hook Sharpener gates Jutsu Ep 1 title (gated on form 06 slate validation)
  - Polyglot Re-cutter handles Ep 1 platform variants (gated on form 05 handle confirmation)
  - Hearth Keeper begins Wed/Fri rituals immediately
- Cluster C iterates on funnel architecture as Rob homework forms 03/04/07 return

### Steady state — Always running
- Cluster B: parallel constellation profile drafts (target ≥5/week)
- Cluster E: 09 Cold Auditor weekly; 10 Adversarial Reader per substantive session

### Cycle 2 onward
- Each cycle's Cluster E output (bolt list + magnetism trend) feeds the next cycle's prioritization across A/C/D

---

## Critical path

```
A (engine substrate) ──▶ D (production) ──▶ E (closure) ──▶ next-cycle A/C/D
                     ╲                  ╱
                      ╲                ╱
                       C (strategy) ───
```

B runs orthogonal — it does not gate the critical path; it compounds the value of every step on the path as it fills.

---

## Anti-patterns

1. **Starting D before A is done.** Every Hook Sharpener pass falls back to `DEFAULT_LEXICON`. Output ships but loses domain fidelity. The architectural-coherence factor in the magnetism formula falls.
2. **Skipping E.** Cluster D output ships unaudited; magnetism stays unfalsifiable; the manifest's claim becomes rhetoric.
3. **Treating B as blocking.** B is parallel substrate, not gating. If you wait for B to be 75/75 before activating C/D, you stall production for months over a substrate that compounds asynchronously.
4. **Mixing clusters in one session.** A session running both Cluster A and Cluster D simultaneously produces neither — the persona shift between Vocabulary Cartographer and Hook Sharpener corrupts both. Run them in separate sessions even if temporally adjacent.

---

## Magnetism formula — extended

The manifest §III formula was three-factor:

> Magnetism = (architectural coherence) × (visible recurring formats) × (one scoring loop)

With clusters operating, the formula extends to four factors that map 1:1 to clusters:

> Magnetism = (architectural coherence from **C**) × (visible recurring formats from **D**) × (one scoring loop from **A**) × (substrate density from **B**) — measured by **E**

Until B is partially filled (~30/75), the substrate-density factor stays low and the formula approximately reduces to the original three. After B passes ~50/75, substrate density becomes a multiplier in its own right — the constellation framework starts generating content that the other clusters can amplify. That phase shift is the second-order magnetism gain.

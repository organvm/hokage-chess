# Form 09 — Domain Lexicon Extension

**Owner:** Anthony or any operator extending the scoring engine | **Time:** 10-20 min
**Unblocks:** `content-strategy.ts` specialized to a new domain (fitness, coaching, business, sport) without forking the engine

> The scoring engine accepts a `ContentLexicon` parameter. This form proposes one. Each filled form becomes a new exported lexicon (e.g. `FITNESS_LEXICON`, `COACHING_LEXICON`) that any operator can import alongside `DEFAULT_LEXICON`.

---

## A. Domain identification

- **Domain name:** (e.g. fitness, coaching, sport-specific, dev-tools, design)
- **Operator:** (who runs content here)
- **Why this domain needs its own lexicon:** (one sentence — what does the default lexicon miss?)

## B. Emphasis tokens

Words that signal emotional charge in this domain's titles. Add 8-15.

- (e.g. for fitness: "savage", "brutal", "shredded", "transformed", "secret")
-
-
-
-
-

## C. Stakes verbs

Achievement / conflict / transformation verbs.

- (e.g. for fitness: "squatted", "deadlifted", "pressed", "broke", "crushed")
-
-
-
-

## D. Stakes nouns (optional — domain-specific concrete nouns)

- (e.g. for fitness: "PR", "rep", "macro", "deficit", "split")
-
-
-

## E. Anti-patterns (optional)

| Pattern name | Regex | Penalty | Feedback |
|---|---|---|---|
|  |  |  |  |

## F. Max title length

- **Recommended:** 60 (default)
- **Override:** ___ — only if this domain's platform behaves differently (e.g. LinkedIn allows longer)

## G. Worked examples (verifies the lexicon)

Three titles from this domain, scored mentally against your proposed lexicon — predict the score, then run it.

| Title | Predicted score | Actual (run after merge) |
|---|---|---|
|  | /3 |  |
|  | /3 |  |
|  | /3 |  |

## H. Return

When complete, open PR adding `export const <DOMAIN>_LEXICON: ContentLexicon = { ... }` to `src/lib/content-strategy.ts` with a parametric test mirroring the fitness-lexicon test in `tests/content-strategy.test.ts`.

---

**Internal compound:** this form is the operational dual of the magnetic manifest's universality claim. The manifest says "one engine, N domains." This form is the act of adding a domain. Every filled form increases the manifest's evidentiary weight.

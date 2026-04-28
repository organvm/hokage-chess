# Form 08 — Jutsu of the Week Episode 1 Recording Prep

**Owner:** Rob | **Time:** ~3 hr (production cycle)
**Unblocks:** First instance of the recurring named-format pillar; produces test footage for content-strategy.ts scoring engine in real use

> This is a **production checklist**, not a design form. Fill it as the production happens; check items as they complete. Dependencies on forms 02 and 06 must clear first.

---

## Pre-conditions (must be true before recording)

- [ ] Form 06 (slate validation) shows Wk 1 = The Silent Pin (or substituted technique)
- [ ] Form 02 (Boss Battle pick) at least drafted — Ep 1 sometimes pairs with Boss Battle frame
- [ ] Working title drafted (will be scored against `content-strategy.ts`)

## A. Pre-production

- [ ] Working title chosen
- [ ] Title scored against `content-strategy.ts` ≥ 2/3 (run: `npx tsx -e "import {scoreTitleFormula} from './src/lib/content-strategy.ts'; console.log(scoreTitleFormula('YOUR TITLE'))"`)
- [ ] Hook (first 30s) drafted — names rival, sets stakes
- [ ] Position/example chosen (the actual chess position demonstrating the jutsu)
- [ ] Variations / counter-examples queued (3-5 illustrative positions)
- [ ] Outcome / payoff identified (the "ketsu" — what the viewer can now do)

## B. Production

- [ ] Audio levels checked
- [ ] Board / overlay set up
- [ ] Main video recorded (target 8-12 min)
- [ ] Short cut planned (60-90s — strongest 30s extracted, recut)

## C. Post-production handoff

- [ ] Working file landed in storage (Drive / Dropbox)
- [ ] Path posted in chat for editor handoff
- [ ] Thumbnail draft brief written (4 criteria from `scoreThumbnail`: face / emotion / text / contrast)
- [ ] Description + chapters draft (Ki-Sho-Ten-Ketsu structure)

## D. Publish-readiness gate

Before scheduling, confirm against `createUploadChecklist`:

- [ ] Thumbnail score ≥ 3/4
- [ ] Title score ≥ 2/3
- [ ] Hook within 30s
- [ ] Description optimized
- [ ] Chapters added
- [ ] Affiliate links (if applicable)
- [ ] `ready: true`

## E. Post-launch capture

- [ ] First-48h impressions captured (CTR, retention, avg view duration)
- [ ] Title performance fed back into lexicon — does any word need adding to chess `ContentLexicon`? Use form 09.

---

**Source ask:** `2026-04-25-bridge-content-pillar.md` Wk 1 (homework #8)
**Compounds:** generates real footage that validates the scoring engine in production use

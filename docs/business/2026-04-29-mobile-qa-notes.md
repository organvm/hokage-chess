# Mobile QA Notes — Landing Page

**Date:** 2026-04-29
**Target viewport:** 375px (iPhone SE / 13 mini baseline; smallest mainstream)
**Pass criteria:** No horizontal scroll · readable typography · 44px+ touch targets · graceful text wrap (not overflow)
**Method:** Static analysis of `src/app/page.tsx` (724 lines) + `src/app/globals.css`. Browser-driven QA queued for live deploy.

---

## Section-by-section static review

| Section | Lines | Mobile pattern | Static verdict |
|---|---|---|---|
| Hero | 94–154 | `text-5xl sm:text-6xl md:text-7xl lg:text-8xl` H1 progressive sizing; `px-6` outer padding | ✅ Good. Trust-bar tight but fits. ELO badge may wrap; acceptable. |
| Problem | 156–205 | Single column flow with `w-1` vertical accent bars + paragraph | ✅ Reflows cleanly. |
| Identity | 207–271 | `grid md:grid-cols-2` → 1 col at <768px | ✅ Stacks at mobile. Right-column callouts stack naturally. |
| Three Roads | 273–341 | `grid md:grid-cols-3` → 1 col at <768px | ✅ Three road cards stack. |
| Social Proof | 343–405 | `grid sm:grid-cols-2` → 1 col at <640px | ⚠ Stats row at line 386 (`gap-8` + 3 stats + 2 dividers) may compress. |
| Offer | 407–482 | `grid md:grid-cols-3` → 1 col at <768px | ✅ Three CTA cards stack. Touch targets `py-3` ≈ 44px. |
| Journey Map | 484–564 | Vertical timeline; `pl-12` for dot+line; `max-w-2xl` | ⚠ "Live" badge + ELO + label all on one line at line 528–555 — may overlap if label is long. Watch at 320px (smaller than target). |
| FAQ | 566–611 | Native `<details>/<summary>`; `text-lg` question | ✅ Touch target on summary line is large; native a11y. |
| Final CTA | 613–666 | `flex flex-col sm:flex-row` form layout | ✅ Input + button stack on mobile. |
| Footer | 668–703 | `flex flex-col sm:flex-row` row | ✅ Stacks on mobile. |

---

## Concerns flagged for browser QA

1. **Hero trust bar (`322 Videos · Road to 1500 · NYC`)** — at 375px usable width (~327px), text + bullet dots fit; but if locale or future copy makes any item longer, may wrap awkwardly. *Live check needed at deploy.*
2. **Hero ELO badge** — `inline-flex` with 4 children (pulse dot, "Current ELO" label, "1350" number, "Updated Apr 2026" timestamp) is the densest horizontal element on mobile. Will likely wrap into 2 lines below ~360px; acceptable. *Visual confirmation needed.*
3. **Social proof stats row (line 386)** — three stat cards (`99+ subscribers climbing`, `322 documented games`, `35+ episodes & counting`) with `gap-8` and pixel-thin dividers. At 327px usable, each stat gets ~95px before gaps. Will likely wrap. *Could pre-emptively swap `flex` → `grid grid-cols-3` with smaller `gap` for guaranteed layout, but current is acceptable degradation.*
4. **Journey map row content (lines 528–556)** — "ELO + label + Live/✓ marker" all on one row inside `flex items-center justify-between`. Label "The Chunin Exams — Season 1" is the longest at ~24 chars. At small widths, label may wrap below "Live" tag. *Live check needed.*
5. **FAQ summary expansion** — group-open + rotate-45 chevron animation should work on mobile but worth verifying on a real device for layout shift.

---

## Items NOT testable statically (deploy-gated)

- Touch-target sizing on actual device (vs. CSS computed size)
- p5.js / canvas behavior — **N/A**: this page has no canvas (the AscentMeter is a pure DOM element)
- Font loading FOUC (Oswald local, DM Sans + JetBrains Mono via `next/font/google`)
- CTA glow box-shadow rendering on iOS Safari
- Backdrop blur — **N/A**: not used on this page
- Scroll performance of AscentMeter `useEffect` listener (passive: true, should be fine)
- Form submission UX (currently `console.log` — wired in Phase 4.1)
- Discord link `href="#"` placeholder (no real URL yet — Discord provisioning is a Rob blocker)

---

## No-fix-needed verifications

- `min-h-screen` on Hero ✓ (no fixed height)
- All paddings use `px-6` consistently → 24px margin each side → 327px usable at 375px viewport
- All grids stack to single-column at `md:` breakpoint (768px) or `sm:` (640px)
- No `w-[Xpx]` or `min-w-[Xpx]` hard-coded sizes
- No `overflow-x-scroll` or horizontal-scroll wrappers
- All CTA buttons have `py-3` to `py-4` vertical padding → 44px+ touch target
- All anchor tags either `target="_blank" rel="noopener noreferrer"` or local hash links

---

## Deploy preflight checklist (mobile-specific)

- [ ] Open in iOS Safari at native zoom → verify no horizontal scroll on any section
- [ ] Open in Chrome DevTools device-toolbar at 375×667 (iPhone SE) and 393×852 (iPhone 14) → screenshot each section
- [ ] Tap each CTA button at full thumb width → confirm hit area
- [ ] Open all FAQ items → verify no layout shift breaks rendering
- [ ] Scroll fully → verify AscentMeter (left edge, 3px wide) tracks correctly without jank
- [ ] Test on slow 3G throttling → font fallback + content visibility while web fonts load
- [ ] Check OG image preview via `https://www.opengraph.xyz/url/<deploy-url>` once live → confirm `/opengraph-image.png` renders + alt text appears

---

## Verdict

**Static review: PASS with 4 watch-items.** No structural issues that block deploy. The watch-items are graceful-degradation cases that would need browser screenshots to confirm acceptable, but no remediation expected pre-deploy.

**Recommendation:** Ship to Vercel preview URL (production-equivalent on Vercel without DNS), run the deploy preflight checklist above, then approve final deploy. The preview URL itself is a useful artifact to send Rob — he can mobile-QA on his own phone before public launch.

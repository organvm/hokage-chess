# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

Client engagement for Rob Bonavoglia (@HokageChess, NYC chess YouTuber). A Next.js 16 + React 19 landing page + business strategy substrate for the Hokage Chess brand. `seed.yaml` declares `organ: PERSONAL`, `tier: standard`, `type: client-project`, `status: LOCAL`, `implementation: ACTIVE`.

The repo is dual-purpose: (1) the deployable landing surface for the Rob client engagement, and (2) a working substrate for the broader BODI (Body Of Discipline) cross-pollination architecture, including the 8-layer substrate at `docs/substrate/bodi/` that feeds product-domain-engine work.

## Commands

```bash
npm run dev          # Next.js dev server → http://localhost:3000
npm run build        # Production build (10 routes; verify before any deploy)
npm run start        # Serve the production build
npm run lint         # ESLint (eslint.config.mjs, eslint-config-next preset)
npm run test         # Vitest run-mode (current baseline: 56 tests across 4 suites)
npm run test:watch   # Vitest watch-mode
npx vitest run tests/content-strategy.test.ts   # Single suite
npx vitest run -t "scoreVideo applies time-bonus"  # Single test by name
node scripts/generate-og-image.mjs               # Regenerate src/app/opengraph-image.png from og-source.svg
```

## Architecture

### Three engines in `src/lib/`

The lib layer is **brand-agnostic** by design — Rob's domain vocabulary is parameterized, not baked in. A single creator running multiple domains (chess + fitness + life-coaching) can score titles for each without forking.

- **`content-strategy.ts`** — universal title / thumbnail / video-idea scoring. Pure heuristic. Domain vocabulary injected via `ContentLexicon`. The brand-neutral parametric refactor is load-bearing — do not re-bake "chess" or "Hokage" terms into the scoring core. Defaults catch cross-domain emphasis + numeric stakes + named-conflict patterns.
- **`landing-engine/`** — Persona × Narrative × Section primitive (`compose.ts`, `personas.ts`, `narratives.ts`, `sections.ts`). Same primitive shipped in the sibling repo `organvm/sovereign-systems--elevate-align@3d8cabd` (Maddie spiral) — keep the two implementations in shape-parity. Adding a persona to `personas.ts` makes it appear at `/for/<id>` automatically via `generateStaticParams` in `src/app/for/[persona]/page.tsx`.
- **`growth.ts`, `narrative.ts`, `analytics.ts`, `engine.ts`** — supporting modules. Each has a sibling `tests/<name>.test.ts`.

### App routes (Next.js 16, App Router)

- `src/app/page.tsx` — root landing page (9 sections: Hero, Problem, Identity, Three Roads, Social Proof, Offer, Journey Map, FAQ, Final CTA)
- `src/app/for/[persona]/page.tsx` — dynamic per-persona routes generated from `landing-engine/personas.ts`
- `src/app/api/subscribe/route.ts` — Kit (ConvertKit) email-capture handler. Reads API key from env; the form in `page.tsx` POSTs here
- `src/app/opengraph-image.png` + `opengraph-image.alt.txt` + `twitter-image.png` — Next.js 16 file-convention OG images (no metadata API needed)
- `src/components/landing/` — section components (Hero, Problem, ThreePaths, Cta)

### Visual system

Dark mode. Hokage Red `#C41E3A`. Oswald for headlines, DM Sans for body, JetBrains Mono for ELO numbers. All in `src/app/globals.css` and `tailwind.config.js`. Tailwind v3, not v4 — adjust expectations.

### Substrate layer (`docs/substrate/bodi/`)

Eight-layer substrate per the domain-ideal-whole schema (ontology → lineage → constellation → gap-map → agent-fleet → production-stack → internal-magnet → external-contribution). `actor-cards/` under `03-constellation/` holds named-actor analysis for the 75-person constellation work (`docs/business/2026-04-29-75-person-constellation-master.md`). The skill that generates this substrate lives at `~/Workspace/a-i--skills/skills/project-management/domain-ideal-whole-substrate/`.

### Storefront opt-in (`storefront.config.yaml`)

Per-repo opt-in for the `personalized-storefront-render` skill. When present, `organvm storefront sync --repo .` walks `source.globs`, reads `audiences:` frontmatter, and emits per-persona `_generated/*.client.md` drafts. `persona_id: rob`, `render_adapter: nextjs`, `primary_target: rob.hokagechess.com`.

## Next.js 16 — read the docs first

`AGENTS.md` carries the project rule: this Next.js version has breaking changes from training-data-era Next.js. Read `node_modules/next/dist/docs/` for any feature you're touching, especially:

- File-convention OG images (this repo uses them — do NOT add a `metadata` export for OG when the file convention is in play)
- App Router conventions (server vs. client components, `generateStaticParams`, route handlers)
- Async params handling

Heed deprecation notices in build output; do not silence them.

## Working-state coordination

The repo carries three coordination surfaces. Each has a distinct role:

- **`HANDOFF.md`** (top-level) — durable vacuum table (V1–V10) per work-group. Updated at session close; read at session open.
- **`.conductor/active-handoff.md`** — single-session entry permit. Read FIRST in any new session before any write. Carries repo lock, scope constraints, prior-session inheritance, and audit findings.
- **`docs/archive/2026-MM/`** — dated close-out summaries (`YYYY-MM-DD-stream-d-closeout.md`, `…-late-closeout.md`). Append-only — never overwrite a prior close-out; create a new dated artifact instead.

Plan discipline: plans live at BOTH `~/.claude/plans/<slug>.md` AND `<repo>/.claude/plans/YYYY-MM-DD-<slug>.md`. Mirror after writing.

## Cross-stream context

This repo runs as **Stream D** in a multi-stream partition. The sister stream is **Maddie spiral** at `organvm/sovereign-systems--elevate-align`. The two streams share the Persona × Narrative × Section primitive (keep in shape-parity) and a constellation gap-map. Cross-stream signals surface in `docs/archive/2026-04/gemini-2026-04-28-refactored-workstreams.md` § A.4–A.7. Repo lock is enforced — do NOT write outside `4444J99/hokage-chess/**` from this stream.

The IRF (Index Rerum Faciendarum) at `meta-organvm/organvm-corpvs-testamentvm/INST-INDEX-RERUM-FACIENDARUM.md` tracks Stream-D items under the `IRF-PRT-NNN` prefix. Read-only from this stream — IRF promotions are Stream H Gate territory.

## Pre-commit hooks

Gitleaks runs on every commit. It is aggressive about literal credential-keyword substrings — even inside narrative prose or code-diff transcripts. If a commit fails on a false positive:

1. Rephrase to avoid the literal pattern (e.g. "credential-keyword substring" instead of the literal token)
2. Or add `// allow-secret` / `# allow-secret` to the line (per gitleaks config)
3. Or, for transcripts unsafe to ever commit, route to `~/.local/share/hokage-chess/operational/exports/` and gitignore the repo-root path

Never bypass with `--no-verify`. The pre-commit hook is the source of truth; if a hook fails legitimately, fix the root cause.

## Tests baseline

56 tests across 4 suites, currently green. The build produces 10 routes. Both must stay green before any push touching `src/`. Tests are pure-function unit tests against `src/lib/`; no fixtures, no DB, no network.

## What NOT to do

- Do not re-bake brand-specific vocabulary into `content-strategy.ts` — keep it parametric.
- Do not add a Next.js `metadata` export for OG images when the file convention is already wired (creates duplicates).
- Do not bundle-commit working-tree changes — per-step disposition only.
- Do not write to the DONE counter at `meta-organvm/organvm-corpvs-testamentvm/data/done-id-counter.json` from this stream unless the active handoff explicitly authorizes a claim.
- Do not author new IRF rows for substrate that maps onto existing rows. Verify against `INST-INDEX-RERUM-FACIENDARUM.md` before claiming "new candidate emitted."

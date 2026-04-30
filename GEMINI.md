# Hokage Chess Project

## Project Overview
This repository serves a dual purpose:
1. The deployable landing surface (Next.js 16 + React 19) for the client engagement with Rob Bonavoglia (@HokageChess, NYC chess YouTuber).
2. A working substrate for the broader BODI (Body Of Discipline) cross-pollination architecture (located at `docs/substrate/bodi/`).

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v3, Vitest, ESLint.

## Architecture Highlights
- **Brand-Agnostic Engines (`src/lib/`)**:
  - `content-strategy.ts`: Universal title / thumbnail / video-idea scoring. Domain vocabulary is injected, not baked in.
  - `landing-engine/`: Persona × Narrative × Section primitive used to dynamically generate per-persona routes.
  - Supporting modules: `growth.ts`, `narrative.ts`, `analytics.ts`, `engine.ts` with siblings in `tests/`.
- **App Routes (`src/app/`)**:
  - `page.tsx`: Root landing page.
  - `for/[persona]/page.tsx`: Dynamic per-persona routes.
  - `api/subscribe/route.ts`: Kit email-capture handler.
- **Visual System**: Dark mode. Colors: Hokage Red (`#C41E3A`). Fonts: Oswald, DM Sans, JetBrains Mono.

## Building and Running
Key NPM scripts for development and production:
- `npm run dev` - Start the Next.js development server at `http://localhost:3000`
- `npm run build` - Create the production build
- `npm run start` - Serve the production build
- `npm run lint` - Run ESLint checks
- `npm run test` - Run Vitest test suite in run-mode
- `npm run test:watch` - Run Vitest in watch-mode

## Development Conventions & Constraints
- **Next.js 16 Specifics**: This project uses Next.js 16, which has breaking changes compared to earlier versions. Consult `node_modules/next/dist/docs/` when unsure.
  - Use Next.js 16 file-convention OG images (`opengraph-image.png`, `twitter-image.png`). Do NOT use `metadata` exports for OG images.
  - Heed all deprecation notices in build output.
- **Engine Purity**: Keep `src/lib/content-strategy.ts` parametric and brand-neutral. Do not bake "chess" or "Hokage" terms into it.
- **State Coordination**:
  - Read `.conductor/active-handoff.md` FIRST in any new session before making writes.
  - `HANDOFF.md` tracks work-group status.
  - Append close-out summaries to `docs/archive/2026-MM/` instead of overwriting.
- **Plan Discipline**: Plans must be saved to both `~/.claude/plans/<slug>.md` AND `<repo>/.claude/plans/YYYY-MM-DD-<slug>.md`.
- **Security Hooks**: Gitleaks runs on every commit. Never bypass with `--no-verify`. Use `// allow-secret` for false positives or rephrase.

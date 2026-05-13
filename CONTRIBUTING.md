# Contributing to Hokage Chess

Thank you for your interest in contributing!

## How to Contribute

### State Coordination

**CRITICAL**: Read `.conductor/active-handoff.md` FIRST in any new session before making writes.
- `HANDOFF.md` tracks work-group status.
- Append close-out summaries to `docs/archive/2026-MM/` instead of overwriting.
- Plans must be saved to both `~/.claude/plans/<slug>.md` AND `<repo>/.claude/plans/YYYY-MM-DD-<slug>.md`.

### Reporting Bugs

1. Check existing issues
2. Use the bug report template
3. Include reproduction steps

### Suggesting Features

1. Check existing feature requests
2. Use the feature request template
3. Explain the use case

### Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Development Setup

```bash
npm install
```

## Code Style

- Use Next.js 16 file-convention OG images (`opengraph-image.png`, `twitter-image.png`). Do NOT use `metadata` exports for OG images.
- Keep `src/lib/content-strategy.ts` parametric and brand-neutral. Do not bake "chess" or "Hokage" terms into it.
- ESLint is used for linting.

```bash
npm run lint
```

## Testing

Vitest is used for testing.

```bash
npm run test
# For watch mode
npm run test:watch
```

## Security

Gitleaks runs on every commit. Never bypass with `--no-verify`. Use `// allow-secret` for false positives or rephrase.

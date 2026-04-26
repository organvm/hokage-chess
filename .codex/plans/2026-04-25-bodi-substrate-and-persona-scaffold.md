# Plan: BODI Substrate and Persona Scaffold

**Date:** 2026-04-25
**Project:** `hokage-chess`
**Upstream context:** `~/.claude/plans/we-all-work-in-atomic-map.md`

## Scope

This execution adopts the upstream three-layer plan and implements the immediate atoms that do not require new collaborator input:

- `L1-0` - scaffold the BODI substrate tree inside `docs/substrate/bodi/`
- `L2-F` - verify the persona corpus path is outside git and chezmoi
- `L2-G` - seed `rob-bonavoglia.md`
- `L2-H` - seed `maddie.md`
- `L2-I` - seed `scott-lefler.md`

## Sources used

- `docs/business/2026-04-25-bodi-funnel-with-premium-content-architecture.md`
- `docs/business/2026-04-25-cross-pollination-master-diagnosis.md`
- `docs/business/2026-04-25-rob-call-transcript-source.md`
- `~/.claude/plans/2026-04-25-relay-maddie-elevate-align.md`
- `~/Workspace/organvm/orchestration-start-here/docs/handoff-maddie-spiral-path-2026-04-01.md`
- `~/Workspace/4444J99/application-pipeline/strategy/partnership-lefler-padavano-content-engine.md`

## Outputs

- BODI substrate seed with eight strata, root index, and primary artifacts
- Persona corpus at `~/Documents/personas/`
- Seed personas for Rob Bonavoglia, Maddie, and Scott Lefler

## Verification

- `chezmoi source-path /Users/4jp/Documents/personas` returns `not managed`
- `git -C /Users/4jp/Documents rev-parse --show-toplevel` fails because `Documents` is not a git repo
- `ls /Users/4jp/Workspace/4444J99/hokage-chess/docs/substrate/bodi` returns `README.md` plus eight stratum directories


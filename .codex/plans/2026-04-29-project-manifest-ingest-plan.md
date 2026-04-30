# 2026-04-29 Project Manifest Ingest Plan

## Scope

Create a durable project manifest for `hokage-chess` in annotated-bibliography style.

## Ingest Boundary

- Include all project, document, source, research, plan, history, reference, public, test, and configuration files.
- Exclude `.git/`, `node_modules/`, and `.next/` from bibliographic entries because they are repository mechanics, installed dependencies, and generated build/cache output.
- Record the excluded classes in the manifest so the boundary is visible.

## Required Outputs

- Markdown manifest under `docs/manifests/`.
- JSONL machine-readable manifest under `docs/manifests/`.
- Deterministic file IDs and thread IDs.
- Per-file title, path, tags, type, size, hash, extraction status, and annotation.
- Per-thread/group section listing files created within that thread/group.

## Verification

- Count included files before and after generation.
- Verify manifest entry counts against filesystem inventory.
- Preserve the generator script in `tools/` for repeatable refreshes.

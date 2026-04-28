# Rob Isomorphisms: System Rules & Protocols
**Generated:** 2026-04-27
**Status:** ACTIVE
**Derived From:** 2026-03-25 to 2026-04-16 Prompt History Post-Mortems

## I. Sequence Integrity (The "Avalanche" Law)
1.  **Atomic Handoffs:** Every agent completion MUST output a `HANDOFF.md` containing the precise state, pending variables, and the specific prompt for the next agent in the sequence.
2.  **No Drift:** If an agent encounters a "roadbump" (e.g., auth failure, broken link), it MUST stop and reconcile the rule into this isomorphism document before continuing.
3.  **Forward Propulsion:** Silence is only acceptable for discovery. Intent MUST be explained before every action to maintain the audit trail for the next agent slice.

## II. GitHub & Environment Config
1.  **Unified Auth:** Never rely on transient environment variables (`GITHUB_TOKEN`) for CLI tools if they conflict with established OAuth flows (`gh auth login`). Always verify scope `read:project,project` before attempting Project V2 operations.
2.  **Branch Discipline:** Every logical phase MUST have a corresponding PR to allow for CI checks and automated bot feedback.

## III. Application Pipeline Hardening
1.  **Temporal Filtering:** Job postings older than 48 hours are considered "STALE" and MUST be automatically filtered from the queue to prevent wasted contextual calories.
2.  **Contact Integrity:** Verify LinkedIn profile existence and current employment status before logging a contact as "target." Never re-contact the same individual within a 30-day window across different application fronts.

## IV. Agent Adversarial Modeling
1.  **The Trinary Review:** Complex specs require a round-robin review by three specific personas:
    *   **The Absorber:** Finds net positives and expands the scope.
    *   **The Critic:** Identifies logic gaps and complexity-for-complexity's sake.
    *   **The Contrarian:** Challenges the premise using "human logic" and real-world feedback.

## V. Knowledge Archival
1.  **Non-Ephemerality:** Theories, thesis, and "premonitions" recorded in chat MUST be codified into the `docs/substrate/` or `docs/business/` directories within the same session. Context is fuel; do not let it evaporate.

---
*These rules are universal across the 4444J99 workspace. Any violation is a system bug.*

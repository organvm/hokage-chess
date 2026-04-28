# Avalanche Handoff Protocol
**Path:** `docs/substrate/bodi/05-agent-fleet/avalanche-protocol.md`
**Objective:** Eliminate session-to-session drift by creating an inevitable cascade of forward motion.

## 1. The Trigger Mechanism
An "Avalanche" occurs when one agent's terminal output contains the `AVALANCHE:START` tag. This tag MUST be followed by:
*   **Vector Context:** The absolute paths to all files modified in the current slice.
*   **State Delta:** What changed, and what remains "Pending."
*   **Next-Agent Prompt:** A pre-written, self-contained prompt designed to initialize the next agent in the sequence without user intervention.

## 2. Temporal Gatekeeping
To prevent the "Application Pipeline" from processing stale data:
*   **Rule:** Every job intake MUST timestamp the record.
*   **Logic:** If `(current_time - record_timestamp) > 48 hours`, the record is marked `[STALE]` and moved to the archive.
*   **Action:** Agents are forbidden from applying to `[STALE]` records unless explicitly overridden by a "Force" flag.

## 3. The Sequence Loop
The sequence follows the "Trinary" hardening pattern:
1.  **Draft Agent:** Creates the initial implementation/output.
2.  **Review Agent (Trinary):** One of the three adversarial personas (Absorber, Critic, or Contrarian) reviews the output against the `ROB-ISOMORPHISMS.md`.
3.  **Refine Agent:** Reconciles feedback and finalizes the work.
4.  **Handoff Agent:** Generates the `HANDOFF.md` and signals the next Avalanche.

## 4. Error Recovery
If an Avalanche breaks (e.g., a tool failure), the system MUST:
1.  Generate a `DREAD_LOG.md` (Diagnostic Report for Error & Drift).
2.  Identify the specific roadbump and its relation to existing Isomorphisms.
3.  Request a single "Strategic Correction" from the user before restarting the cascade.

---
*"One stone starts the landslide; the system ensures the mountain reaches the valley."*

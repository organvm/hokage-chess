# SOP: Deep Target Research (Interview Prep)
**Path:** `docs/business/2026-04-27-screener-interview-prep-protocol.md`
**Trigger:** Recruiter Screen or Technical Interview Scheduled.
**Objective:** Ingest the employer's entire universe to output "magnetic" alignment context.

## Phase 1: Ingestion
Agents must scrape and summarize the following surfaces:
1.  **Product/Docs:** Read the developer documentation, recent release notes, and product roadmap.
2.  **The Team:** Identify the key human actors (Founders, EMs, Staff Engineers) on LinkedIn/Twitter. Ingest their "primitives" (what they post about, their specific technical passions).
3.  **The Voice:** Study the company blog and technical whitepapers to understand their internal "rhetoric" (e.g., do they value "extreme speed" or "rigorous correctness"?).

## Phase 2: Synthesis (Magnetic Push/Pull)
Identify three specific locations within their universe for "Friendly Patching":
*   **The Push:** "I noticed your [Feature X] uses [Method Y]. In our internal engine, we solved the same bottleneck using [Method Z], which improved throughput by 40%."
*   **The Pull:** "Your team clearly values [Principle A]. This aligns with our [Isomorphism B], and I'd love to learn how you manage the trade-offs in [Scenario C]."

## Phase 3: The Deliverable
Output a `SCREENER_CHEATSHEET.md` containing:
1.  **The "Inverted Interview" Question Set:** 3-5 questions that force the interviewer to reveal their deepest technical pain points.
2.  **The "Active Hook":** A specific anecdote from the candidate's codebase that mirrors a discovered company passion.
3.  **The Closing Signal:** A pre-written follow-up message that references a specific insight shared during the call.

---
*"Don't just apply for the job; prove the job already belongs to the person who built this engine."*

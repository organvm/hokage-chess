# Active Handoff: Stream D — Rob / hokage-chess

**To:** Claude (peer session, this repo)
**From:** Claude (orchestrating session, ~/Workspace, 2026-04-29 ~14:00)
**Status:** ACTIVE — entry permit. Read this first; acknowledge before writing.

---

## Your scope

You are running Stream D of a multi-stream partition. You own this repo (`4444J99/hokage-chess`) and this repo only. Visible client-facing progress for **Rob** lands here.

**Path correction:** the orchestrating partition plan listed this repo under `organvm/hokage-chess`. The real path is `/Users/4jp/Workspace/4444J99/hokage-chess` (under the personal `4444J99` org). The partition plan will be amended; you don't need to.

## Repo lock

**In scope (you write):**
- `/Users/4jp/Workspace/4444J99/hokage-chess/**`

**Out of scope (do NOT write):**
- Any other repo (Maddie/`organvm/sovereign-systems--elevate-align`, `organvm/my-knowledge-base`, `organvm/life-my--midst--in`, `organvm/growth-auditor`, `organvm/public-record-data-scrapper`, `meta-organvm/organvm-corpvs-testamentvm`)
- IRF body (Gate territory)
- DONE counter except via claim-before-use protocol below

## Inherited state (partial — full scope unconfirmed)

What the prior "honor-the-dead" session export verified:

- Working tree is dirty: **5 changes**, including "deleted Rob transcript source + audit/export cruft" per the prior plan
- Prior session deliberately did NOT bundle-commit these — that restraint is part of the inheritance
- Branch: `main`, in sync with `origin/main`
- No GH issue, no IRF row currently anchors Rob's deliverable surface

**What is NOT verified:**

The orchestrating session does not know what Rob's deliverable actually is. The prior session export only mentioned transcript hygiene. Whether there is a peer-to-Maddie generative deliverable (a chess UI, a tool, a deck, a site) is unknown to the dispatcher.

## Pending questions to surface in your turn 1 (with the user)

These are the dispatcher's open questions — surface them at session start, get the user's answers, then proceed:

1. **What is Rob's actual deliverable scope?** Is this:
   - (a) Transcript curation only (cleanup, archival, indexing of Rob's chess transcripts), or
   - (b) A peer-to-Maddie generative deliverable (a chess interface, an analysis tool, a public artifact, a deck)?
   The dispatcher saw evidence only of (a). If (b), ask: which file/directory is the build target, and where does "visible progress" land?

2. **Deletions in working tree:** the 5 dirty files include deletions of Rob transcript sources. Confirm with the user:
   - (a) Are these deletions intentional (commit them as removals), or
   - (b) Recoverable mistakes (restore from origin), or
   - (c) Pending review (leave in place, surface for decision)?

3. **Visible-progress proof artifact:** what does Rob's user-facing "I see progress" look like? Screenshot of a UI? A merged PR with a diff? A deployed URL? Specify so the close-out artifact is unambiguous.

4. **GH issue / IRF anchoring:** if Rob has open work that should be tracked, do we open a GH issue first (so this stream has a triple-reference target), or is the work too embryonic to anchor yet?

## Constraints

1. **Repo-bounded.** One repo, one stream. You do not write outside `4444J99/hokage-chess/`.
2. **Triple-reference law.** Any closure: artifact + commit (remote parity) + IRF row. The IRF row is the Gate's job.
3. **Claim-before-use on DONE counter.** When you complete a vacuum, increment `meta-organvm/organvm-corpvs-testamentvm/data/done-id-counter.json` in its own commit, pushed before referencing DONE-NNN. Set `last_claimed_by: "S-2026-04-29-rob-hokage"`. *This is the one allowed write outside your repo, and only to that file in its own dedicated commit.*
4. **Do NOT bundle-commit pre-existing WIP without explicit user direction.** The prior session's restraint applies. Per-file decisions only, after Q2 above is answered.
5. **No `--no-verify`.** The global pre-commit hook was fixed in dotfiles commit `3a370cc` (DONE-503) and now handles zero-arg invocation. If hooks fail legitimately, fix root cause; do not bypass.

## Read first (in order)

1. This handoff (you're reading it)
2. `~/.claude/plans/snuggly-gathering-bear.md` — partition plan, full stream map, coordination protocol
3. `~/.claude/plans/they-died-so-you-fluffy-manatee.md` — prior "honor-the-dead" plan; ctrl-F for "hokage" to see what was inherited
4. `/Users/4jp/Workspace/2026-04-29-135108-they-died-so-you-can-live-review-their-work-and.txt` — prior session export

## Cross-verification

Orchestrating session is running Stream H (Reconciliation Gate). At your close-out:

- Push everything before declaring DONE
- Emit DONE claims via counter increment + commit message convention (`closes IRF-XXX-NNN` if/when an IRF row exists)
- The Gate session will independently verify claims against artifacts before any IRF promotion
- If you discover work the dispatcher didn't know about, log it as a new IRF candidate in your close-out summary; the Gate decides whether to anchor it

## Out-of-scope, but worth knowing

- **Maddie session** is running in parallel at `/Users/4jp/Workspace/organvm/sovereign-systems--elevate-align`. No cross-talk; the partition is repo-bounded. If you find a Rob/Maddie cross-reference, surface it to the user — don't reach across.
- **F1 cliff** (session-storage appender duplicates) — separate stream, not your concern.
- **Back-end streams** (orchestrator, knowledge-base, growth-auditor, scraper, corpvs hygiene) — dispatched separately, not your concern.

## A note on scope honesty

If turn 1 reveals that Rob's actual scope is much smaller than Maddie's (e.g., transcript cleanup with a 30-minute close-out), that's a legitimate finding — surface it to the user immediately. The dispatcher set up Rob and Maddie as parallel sessions assuming peer scope. If they're not actually peer-scope, you should not pad the session to look balanced. Truthful close-out matters more than session symmetry.

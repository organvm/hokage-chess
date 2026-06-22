# Email List Architecture Decision (MP-7)

**Date:** 2026-04-26 (Updated for MP-1 Alignment)
**Author:** AI Assistant
**Related Issues:** #40 (MP-7), #24 (FWS-1), GH-4444j99-hokage-chess-34 (MP-1)

## Decision
**Two separate pillar newsletters ("The Scroll" for Chess and "Legion Dispatch" for Fitness) running on a single shared Beehiiv backend with audience tagging.**

## Rationale
1. **Pillar Architecture Alignment (MP-1):** As canonicalized in the Pillar Architecture Taxonomy, Rob operates distinct front-ends (Hokage Chess and BODI Fitness) that serve different primary needs. The audiences have distinct cores, and merging them into one monolithic newsletter would dilute the value for those who only want one topic. 
2. **Audience Overlap & The Bridge:** While the cores are distinct, there is a lucrative shared edge ("The Discipline Seeker"). By keeping them in the same Beehiiv account, we can cross-pollinate. A subscriber reading "The Scroll" can be invited to subscribe to "Legion Dispatch," and bridge content can be seamlessly delivered to both segments.
3. **Tooling Efficiency:** Beehiiv supports multiple publications under one account, or at minimum, custom fields and tags to segment a single subscriber base. Technical constraint is minimal.
4. **Production Load (MP-10):** Writing two newsletters is more effort than one, but MP-1 accounts for this by batching the work: Fridays are dedicated to writing "The Scroll" + "Legion Dispatch". This maintains a disciplined weekly rhythm without burning out.

## Implementation Spec
- **Platform:** Beehiiv (Single Account)
- **Segmentation Strategy:**
  - Use custom fields or tags (e.g., `interest:chess`, `interest:fitness`) to segment the audience.
  - Users sign up specifically for the newsletter they want, but the welcome sequence will introduce them to the other domain ("The Bridge").
- **Signup Surfaces:** 
  - Main Next.js landing page will offer clear paths to either "The Scroll" or "Legion Dispatch".
  - Dedicated lead magnets (e.g., "1300 Escape Plan" for chess, "Beginner Bulk Protocol" for fitness).
- **Initial Seed List:** Import interested users from existing communities (FB group, Discord) and tag them based on their source.

## Next Steps
- Implement Beehiiv API integration and signup forms in the Next.js web application for both lists.
- Draft Issue 01 for both "The Scroll" and "Legion Dispatch" to unblock CWS-3 and FWS-1.

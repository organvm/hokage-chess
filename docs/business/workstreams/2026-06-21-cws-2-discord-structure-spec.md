# [CWS-2] Discord Community — Hidden Leaf Village Structure

**Date:** 2026-06-21
**Atom:** CWS-2
**Context:** GitHub issue 4444J99/hokage-chess#18
**Status:** Spec'd, blocking on RB-6 (Server Provisioning)

## 1. Overview
The Hokage Chess Discord (Hidden Leaf Village) serves as the primary community hub and conversion engine. It uses a "Chunin Exams" progression structure, converting YouTube viewers into named relationships and providing the natural home for paid tiers (Genin, Chunin, Jonin), including the $150/mo Mentorship tier.

Reference: The ChessDojo Discord ($15/mo or $100/yr) is the canonical model for this structure.

## 2. Channel Taxonomy
The channel structure is designed to funnel free users toward paid tiers while providing standalone value.

### Free Tier (Academy Students)
- **#welcome**: Read-only onboarding, rules, and role selection.
- **#general-chat**: Open chat for all members.
- **#weekly-events**: Announcements for weekly events, Loot Drop Friday, and Jutsu of the week.
- **#viewer-games**: Matchmaking and voice channels for community viewer games.

### Paid Tier 1: Genin Squad ($15/mo)
- **#genin-hq**: Private chat for Genin members.
- **#sparring-rooms**: Dedicated voice and text channels for Genin-to-Genin sparring.
- **#async-game-review**: Channel to post games for community and peer async game review.

### Paid Tier 2: Chunin Dojo
- **#chunin-hq**: Private chat for Chunin members.
- **#dojo-sparring**: High-level sparring rooms.
- **#chunin-reviews**: Priority async game review channel.

### Paid Tier 3: Jonin Mentorship ($150/mo)
- **#jonin-mentorship**: Private mentorship channel for high-ticket subscribers (direct access to Rob).
- **#jonin-voice**: Private voice channel for 1:1 sessions and deep-dive reviews.

*Note: Role progression is upward; higher tiers inherit access to all lower-tier channels.*

## 3. Patreon → Discord Role Mapping
Access to paid tiers is gated via Patreon integration.

| Patreon Tier | Discord Role Assigned | Channels Unlocked |
|--------------|-----------------------|-------------------|
| Free Member  | `@Academy Student`    | Free Tier channels |
| Genin        | `@Genin`              | Free + `#genin-*` + `#sparring-rooms` + `#async-game-review` |
| Chunin       | `@Chunin`             | Free + Genin + `#chunin-*` |
| Jonin        | `@Jonin`              | All channels |

**Integration Steps:**
1. Connect Rob's Patreon account to the Hokage Chess Discord server via Discord Server Settings > Integrations.
2. Ensure the Patreon Bot is at the top of the role hierarchy so it can assign the `@Genin`, `@Chunin`, and `@Jonin` roles.
3. Map the Patreon tiers to their respective Discord roles in the Patreon creator dashboard.

## 4. Launch Dependencies (Bridge to RB-6)
This specification is ready to launch upon the unblocking of **RB-6 (Server Provisioning)**.
Rob owns the infrastructure setup.
- [ ] Create server and categories/channels as spec'd above.
- [ ] Set up roles and channel-level permissions.
- [ ] Integrate Patreon bot and configure role mapping.
- [ ] Finalize the bridge between Patreon and Discord for the paid tier logic.

# Intent-Hierarchy Decision: `/best-mop`

**Decided:** 2026-04-21. Page 1 of the 5-page tier-1 build sequence (Lee directive 2026-04-21: build hub + clean additive rows from `daily-launch-queue-180` after duplicate-cannibalization cleanup).

## Role declaration

**Role:** `primary_commercial`

This is the mop-cluster HUB. It targets the head commercial query "best mop" (11,000 US vol, KD 2) and anchors a cluster of sub-intents that will be built on top of it (best-mop-for-tile-floors, best-mop-for-vinyl, best-spray-mop, etc.). Feeds internal-link authority into the Safe Surface Desk's floor-care hubs (LIVE `/best-hardwood-floor-cleaner`, LIVE `/how-to-clean-hardwood-floors`, LIVE `/how-to-clean-grout`) and shares upstream authority from LIVE `/best-cordless-vacuum` + LIVE `/best-steam-mop` (the steam-mop page's "safer alternative" routing currently hands readers off to hardwood floor cleaner; once best-mop is LIVE, non-steam buyers get a real mop pick as the handoff).

## Part 1 — Primary keyword verification

Per the daily-launch-queue and `guide-opportunities.json` entry `best-mop`:

| Field | Value |
|-------|-------|
| Primary keyword | best mop |
| Volume (US) | 11,000 |
| Difficulty (KD) | 2 |
| Traffic potential | (pulled from parentKeyword; mop-cluster hub) |
| Intent (per backlog row) | buy |
| Page type | money-guide |
| Content shape | flagship-roundup |
| Cluster | mops |
| Desk | everyday-cleaning-desk |
| Primary avatar | Practical Floor Keeper |

Reader is shopping for a single good non-steam, non-robot mop without a research project. Practical Floor Keeper's $100-400 band overlaps the mop category at its low end ($15-80 typical mop price).

## Part 2 — SERP-overlap check

Live SERP for `best mop` (Google US, 2026-04-21 assessment) is a buying-intent commercial SERP. Top results are product roundups (NYT Wirecutter, The Spruce, Good Housekeeping, Reviewed, BHG, Real Simple, Family Handyman). No "is a mop worth it" informational content in top 5. No shopping-ads pre-emption above the organic fold on this query.

Correct SERP for a `primary_commercial` flagship-roundup page.

## Part 3 — Variable-swap sanity check

- Swap `mop` → `spray mop`: partial — spray mop is a form factor within the broader category. Sub-page (`/best-spray-mop`, 1.8K vol in queue) is genuinely additive.
- Swap `mop` → `steam mop`: **no** — steam mop is its own LIVE page (`/best-steam-mop`). Steam mops are prohibited on many flooring types per warranty guidance and are a different avatar (Safe Surface Desk vs Everyday Cleaning Desk).
- Swap `mop` → `robot mop`: **no** — robot mop is Labor Math Desk territory; covered via `/best-robot-vacuum` hybrid-mop feature discussion in the LIVE robot-vacuum page.
- Swap `best mop` → `best mop for tile floors`: partial — sub-intent page (`/best-mops-for-tile-floors`, 2.2K vol in queue) is additive with tile-specific picks + grout-safe angle.
- Swap `best mop` → `best mop for hardwood`: partial — would overlap with LIVE `/best-hardwood-floor-cleaner` (a cleaner, not a mop). Build as Surface Protector / Safe Surface Desk page if at all; out of scope for this Everyday Cleaning Desk hub.

Confirms scope: the hub covers non-steam, non-robot mops for mainstream weekly floor care. Sub-intents (form factors + floor-specific) stay out of the hub and earn their own pages.

## Part 4 — Overlap check against existing pages

- `src/data/content/best-steam-mop.ts` — LIVE, steam mops only. Already covers the "which mop with steam" question. Best-mop handles the "which non-steam mop" question. Distinct.
- `src/data/content/best-hardwood-floor-cleaner.ts` — LIVE, the liquid cleaner (product you fill a bottle with). Best-mop is the tool (the device you mop with). Complementary, not overlapping. Natural internal-link pair.
- `src/data/content/how-to-clean-hardwood-floors.ts` — LIVE support page. Recommends pH-neutral cleaners + flat microfiber spray mops. Best-mop will be the internal-link destination for "the mop itself" reference; they pair.
- No existing `/best-mop/` route on TCR.

No overlap. Topic is additive as the missing hub in the mop cluster.

## Part 5 — Angle vs competitors

Competitor roundups on this SERP lean in two directions: Wirecutter picks flat microfiber mops as the default and ignores form-factor preference; BHG and Real Simple pick spin mops as crowd-pleasers. Most roundups ignore the hard tradeoff between (a) flat-microfiber mops that work best on smooth sealed floors but are useless on textured tile, and (b) spin/sponge mops that handle textured surfaces but leave more moisture behind.

Everyday Cleaning Desk angle: **match the mop form factor to the floor type**, not the general "best overall" framing. A flat microfiber spray mop is the right pick for sealed hardwood + sealed tile. A spin mop is the right pick for textured ceramic + uneven grout lines. A sponge mop is the right pick for bathroom deep-cleans where water volume matters. Same hub, three clear decisions within it. That's the "which one is right for *my* floor" frame the avatar is looking for.

Trust anchors: Good Housekeeping Institute (tier 1), The Spruce (tier 2), Family Handyman (tier 2), BHG / Real Simple (tier 2). Avoid Wirecutter / CR / RTINGS per TCR paywall policy.

## Decision

Ship as `primary_commercial` / flagship-roundup. No SERP overlap with LIVE pages. Clear mop-cluster hub role. Strong cluster-internal-link graph (feeds and is fed by 4 LIVE pages + future sub-pages). Proceed to Phase 2 research.

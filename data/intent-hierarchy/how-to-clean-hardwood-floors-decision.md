# Intent-Hierarchy Decision: `/how-to-clean-hardwood-floors`

**Decided:** 2026-04-20 (Phase 5.B.3 of `.claude/plans/can-you-review-our-lexical-robin.md`).

## Role declaration

**Role:** `topical_authority`

This is an educational how-to / maintenance page for the Surface Protector avatar. It serves informational queries around hardwood-floor cleaning and feeds four commercial pages in the cleaning-support cluster with internal-link authority: `/best-hardwood-floor-cleaner` (support-guide, not yet built), `/best-steam-mop` (money-guide, not yet built), `/can-you-use-a-steam-mop-on-engineered-hardwood` (support-guide, not yet built), and `/best-vacuum-for-hardwood-floors` (money-guide, not yet built). While the downstream commercial hubs are being built out, the page also links up to the two LIVE money pages (`/best-robot-vacuum`, `/best-cordless-vacuum`) so the internal graph is not orphaned on ship.

## Part 1 — Primary keyword verification (Ahrefs CSV reference)

Per `data/guide-opportunities.md` row #24, ordered-backlog position #24:

| Field | Value |
|-------|-------|
| Primary keyword | how to clean hardwood floors |
| Volume (US) | 18,000 |
| Difficulty (KD) | 12 |
| Traffic potential | 18,000 |
| Intent (per backlog row) | maintain |
| Cluster | cleaning-support |
| Desk | safe-surface-desk |
| Primary avatar | Surface Protector |

The page is a `support-guide` with `maintenance-cleaning` content shape — the reader has a floor they already own and want to avoid damaging. Not a shopping query.

## Part 2 — SERP-overlap check

Live SERP for `how to clean hardwood floors` (Google US, 2026-04-20) is dominated by how-to guides and manufacturer-adjacent content. No shopping carousel in top 3. Top results are a mix of:

- NWFA (woodfloors.org) — tier-1 trade-body how-to page
- Flooring-manufacturer how-tos (Bona, Bruce, Garrison Collection)
- Magazine how-tos (Real Simple, Better Homes, NBC Select)
- Retailer how-tos (Home Depot, Lowe's)

The top-ranking pages are **informational how-to content**, not commercial roundups. This is the correct SERP for a `topical_authority` page. No inversion check required: the SERP matches the intent the page declares.

## Part 3 — Variable-swap sanity check

Swap the `hardwood` variable to another surface and ask: does the page template still apply?

- Swap `hardwood` → `engineered hardwood`: yes — same advice with added warranty caveats. Covered inline as a first-decision-tree branch.
- Swap `hardwood` → `laminate`: no — laminate has different manufacturer rules (no wet mopping even with pH-neutral cleaner in many cases). Out of scope; a separate future page.
- Swap `hardwood` → `tile`: no — tile has different chemistry (grout sealants, acidic cleaners usable). Out of scope.
- Swap `hardwood` → `luxury vinyl (LVP)`: no — LVP is seam-sensitive but can take more moisture than hardwood. Out of scope.

Confirms the scope is correctly narrowed to solid + engineered hardwood with different finish types (polyurethane, wax, oil) covered as decision-tree branches within the page.

## Part 4 — Overlap check against existing pages

- `src/data/content/best-robot-vacuum.ts` — mentions "hardwood" once in whenNotToBuy context. No overlap with the how-to; the robot-vacuum page is about buying, this page is about cleaning a floor you already own.
- `src/data/content/best-cordless-vacuum.ts` — cordless vacuum reviews; mentions hardwood as a use case in product specs. No material overlap.
- `sites/thecleaningreport/src/app/` — no existing `how-to-clean-hardwood-floors/` route.

No overlap. Topic is additive.

## Part 5 — Angle vs competitors

Competitor pages on this SERP uniformly lead with "Here are 10 steps to clean your hardwood floor" and bury the warranty-risk content if they mention it at all. Our angle is the Safe Surface Desk signature: **warranty-first framing, finish-type decision tree before tool choice, and explicit "what voids your manufacturer's warranty" callout.** The NWFA positions its own guidance carefully around pH-neutral + dry + damp-mop-only; flooring manufacturers publish firm "no steam, no vinegar" guidance; most how-to pages ignore both. Our page synthesizes the trade-body + manufacturer position into the consumer decision-tree the Surface Protector avatar is actually looking for.

## Decision

Ship as `topical_authority`. No commercial SERP competition. No overlap with existing pages. Clear angle derived from avatar anxiety (already-burned-once → methodical researcher) + authority-body guidance alignment (NWFA + flooring manufacturers). Proceed to Phase 1.5 research + Phase 2 illustrations + Phase 3 content.

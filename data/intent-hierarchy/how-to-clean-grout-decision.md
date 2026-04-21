# Intent-Hierarchy Decision: `/how-to-clean-grout`

**Decided:** 2026-04-20. Page 8 build, first of a 4-support saturation burst (user-directed override of 3M:1S cadence; see override-log entry).

## Role declaration

**Role:** `topical_authority`

Educational how-to / maintenance page for the Surface Protector avatar. Serves informational queries around grout restoration and feeds three commercial pages in the tile/grout + chemical-cleaning cluster: `/best-grout-cleaner` (MONEY, on disk as `src/data/content/best-grout-cleaner.ts` — roadmap-sync drift to fix in Phase 7), `/best-grout-cleaner-machine` (NOT BUILT), `/best-floor-cleaner-for-tile-and-grout` (NOT BUILT). Also links laterally to `/best-steam-mop` (LIVE — steam is a common grout tool but carries grout-sealant-damage risk that deserves inline caution) and `/best-carpet-cleaner-machine` (LIVE — tangential household-deep-clean hub).

## Part 1 — Primary keyword verification (Ahrefs CSV reference)

Per `data/guide-opportunities.json` entry `how-to-clean-grout`:

| Field | Value |
|-------|-------|
| Primary keyword | how to clean grout |
| Volume (US) | 22,000 |
| Build priority score | 78.5 |
| Traffic potential | (pulled from parentKeyword; informational cluster) |
| Intent (per backlog row) | maintain |
| Content shape | maintenance-cleaning |
| Cluster | chemical-cleaning / tile-grout |
| Desk | safe-surface-desk |
| Primary avatar | Surface Protector |

Reader owns tile + grout they want to restore without damaging the sealant or voiding the manufacturer's warranty. Not a shopping query.

## Part 2 — SERP-overlap check

Live SERP for `how to clean grout` (Google US, 2026-04-20 sampling) is dominated by informational how-to content. No shopping-ads carousel on top of organic for the pure informational query. Top results are a mix of:

- **Trade/industry** — Bob Vila, This Old House, Family Handyman (tier-1 DIY editorial)
- **Retailer how-tos** — The Home Depot, Lowe's (both run editorial blogs alongside product SERPs, but on this SERP the blog pages rank, not PLPs)
- **Magazine/lifestyle** — HGTV, The Spruce, Martha Stewart, Real Simple
- **Manufacturer-adjacent** — occasional pieces from tile / sealant brands (Mapei, Laticrete)
- **Video** — YouTube tutorials (Clean My Space, Home RenoVision DIY)

Top-ranking pages are **informational how-to content**, not commercial roundups. Correct SERP for a `topical_authority` page. No inversion: SERP matches declared intent.

## Part 3 — Variable-swap sanity check

Swap the variable and ask: does the page template still apply?

- Swap `grout` → `tile`: partially — tile cleaning chemistry is different (tile can handle acids grout cannot, porcelain and ceramic tolerate different cleaners than natural stone). Out of scope; tile is a companion page future-candidate (`how-to-clean-tile-floors` ranks separately in backlog).
- Swap `grout` → `caulk`: no — caulk is different substrate, different failure modes, different replacement cadence. Out of scope.
- Swap `grout` → `shower`: partial — showers contain both tile + grout + often fiberglass; different scope. Covered laterally, not as primary.
- Swap `how to clean` → `how to seal`: different intent (prevention vs restoration). Mentioned inline as a follow-up cadence recommendation but does not become the page.
- Swap `grout` → `epoxy grout`: different chemistry — epoxy grout is nearly stain-proof + cleans differently. Covered inline as a grout-type branch.

Confirms scope narrows correctly to cement-based grout (sanded + unsanded) with an epoxy-grout branch inline.

## Part 4 — Overlap check against existing pages

- `src/data/content/best-steam-mop.ts` — mentions grout as a secondary use case under steam-mop recommendations; does NOT contain a how-to section. No material overlap.
- `src/data/content/best-grout-cleaner.ts` (on disk, 640 lines, MONEY) — product roundup ranking cleaners; does NOT teach the restoration process. No overlap; this support page is the missing informational sibling.
- `src/data/content/best-carpet-cleaner-machine.ts` — carpet-machine page; grout unmentioned. No overlap.
- `src/data/content/how-to-clean-hardwood-floors.ts` — hardwood floor care; grout unmentioned. No overlap.
- `sites/thecleaningreport/src/app/how-to-clean-grout/` — route does not exist yet.

No overlap. Topic is additive.

## Part 5 — Angle vs competitors

Competitor pages on this SERP uniformly follow the "Here are 5 steps" shape, bury the grout-sealant-lifecycle content, and rarely mention that many household "grout cleaners" (vinegar, bleach, harsh alkalis) strip or etch the sealant — which is the real reason grout stays clean or re-stains a week later.

Our Safe Surface Desk angle: **restoration-hierarchy mild-first (Bob Vila's 8-step escalation validated across multiple tier-2 sources), grout-sealant lifecycle explicit, steam-mop warranty caveat for sealed stone + epoxy-set tile, and a "reseal cadence after deep-clean" section most competitors omit.** Trust anchors: IICRC tile/stone/grout tip sheet (`iicrc.org/wp-content/uploads/2023/01/Tip-Sheet-Tile-Stone-and-Grout.pdf`) + Tile Council of North America FAQ (tcnatile.com, trade body for tile manufacturing + installation) for primary-source grounding, Consumer Reports tested grout-cleaner rankings for product credibility, Bob Vila / This Old House / Family Handyman / The Spruce for editorial breadth. **NOTE:** IICRC S100 covers textile floor coverings (carpet) — the correct hard-surface standard referenced indirectly is S220. References to outlet sources in footnotes only per footnote-voice rule; body prose speaks as The Cleaning Report.

## Decision

Ship as `topical_authority`. No commercial SERP competition. No page-level overlap. Clear angle derived from Surface Protector avatar anxiety (once-burned-researcher) + authority-body alignment (IICRC + CRI + tile-manufacturer care guides). Proceed to Phase 1 research.

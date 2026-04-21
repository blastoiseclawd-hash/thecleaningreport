# Intent-Hierarchy Decision: `/what-to-mop-floors-with`

**Decided:** 2026-04-21. Page 10 build; cadence slot S (support) at position 1 of current super-cycle; preflight OK.

## Role declaration

**Role:** `topical_authority`

Educational product-routing page for the Surface Protector avatar. Reader has a mop (or is about to buy one via `/best-mop`) and wants to know WHICH cleaning product to put on it without damaging the floor's finish or voiding the flooring warranty. This page does not rank mops — `/best-mop` does that. This page routes the reader to the right cleaning solution for their specific floor type.

Feeds commercial pages in the mop + flooring-chemical cluster: `/best-mop` (LIVE, the form-factor hub), `/best-hardwood-floor-cleaner` (LIVE, the hardwood-specific product roundup), `/best-grout-cleaner` (LIVE), `/best-stainless-steel-cleaner` (LIVE). Lateral link to `/how-to-clean-hardwood-floors` (LIVE, the hardwood how-to) and `/best-steam-mop` (LIVE — relevant because steam vs chemical is a mutually exclusive choice for sealed hardwood).

## Part 1 — Primary keyword verification

Per `data/guide-opportunities.json` entry `what-to-mop-floors-with`:

| Field | Value |
|-------|-------|
| Primary keyword | best product to mop floors |
| Volume (US) | 800 |
| KD | 4 |
| Traffic potential | 4,100 |
| Parent keyword | what to mop floors with |
| Intent | Informational + Commercial (mixed) |
| Content shape | support-guide / troubleshooting-fix |
| Desk | safe-surface-desk |
| Primary avatar | Surface Protector |

Reader owns (or is buying) a mop and wants routing on the chemical side of the equation. Commercial signal is in the primary keyword ("best product"), but the SERP is dominated by editorial routing content, not a single-product PLP.

## Part 2 — SERP-overlap check

Live SERP for `best product to mop floors` + `what to mop floors with` (Google US, 2026-04-21 sampling) is a mix of:
- **Trade/industry editorial:** Bob Vila, Family Handyman, HGTV, Better Homes & Gardens routing tables (what to use on each floor type)
- **Flooring-manufacturer guides:** Bona's own "what cleaner to use" page (tier-1 authority; not displaced by affiliate sites)
- **Retailer how-tos:** The Home Depot and Lowe's "how to pick a floor cleaner" blog posts
- **Magazine lifestyle:** The Spruce, Real Simple
- **Reddit:** r/CleaningTips + r/HomeImprovement discussions

Top-ranking pages are **informational routing content**, not single-product roundups. Correct SERP for `topical_authority`. No inversion: SERP matches declared intent.

## Part 3 — Variable-swap sanity check

- Swap `product` → `machine`: different intent (machine = the mop itself, `/best-mop` covers that). Out of scope.
- Swap `mop floors` → `clean floors`: broader — would cover vacuums + dusters + carpets too. Out of scope; narrower primary keyword holds.
- Swap `floors` → `tile`: partial — tile routing is a branch inside this page, not a separate page.
- Swap `floors` → `hardwood`: partial — hardwood is a branch; the standalone hardwood-specific roundup is `/best-hardwood-floor-cleaner`. This page links over, doesn't compete.
- Swap `floors` → `laminate`: partial — laminate is a branch inside this page.
- Swap `what to mop with` → `how to mop`: different — "how to mop" is process/technique (candidate future page), not product-routing. Out of scope.

Scope narrows correctly to "which cleaning product/solution to mop with, by floor type."

## Part 4 — Overlap check against existing pages

- `src/data/content/best-mop.ts` — ranks the mop hardware; mentions cleaning solution choice inline (Rubbermaid Reveal buy-your-own bottle, pH-neutral guidance) but does NOT route product-by-floor-type. No material overlap.
- `src/data/content/best-hardwood-floor-cleaner.ts` — LIVE hardwood-specific product roundup. This page routes TO that page for hardwood-primary readers; the two are complementary.
- `src/data/content/how-to-clean-hardwood-floors.ts` — hardwood process/technique how-to. Mentions cleaning products but is process-led. Complementary.
- `src/data/content/best-grout-cleaner.ts` — specialty grout chemicals. Different surface family. Linked laterally.
- `src/data/content/best-steam-mop.ts` — the steam-vs-chemical choice is mutually exclusive for sealed hardwood. Cross-link with a routing note ("if you're here because you're deciding between steam and chemical mops").
- `sites/thecleaningreport/src/app/what-to-mop-floors-with/` — route does not exist yet.

## Angle (what competitors miss)

Most competitor routing tables either (a) publish a single product pick without floor-type branching, or (b) branch by floor type but list their affiliate partner's single SKU in each row without any mention of the flooring manufacturer's approved-cleaner list. The Safe Surface angle: **every floor-type row cites the flooring-manufacturer's approved-cleaner guidance as the primary anchor**, then lists the product picks that pass that anchor. Bona is approved for Shaw + Armstrong sealed hardwood — that's why it's the default, not because of affiliate economics. We also publish the "do NOT use" list (vinegar, ammonia, Murphy Oil Soap on modern engineered, bleach on sealed surfaces) which most competitor pages omit because it contradicts DIY-folklore content they'd rather surface.

## Sources the page will anchor to

Tier-primary:
- Bona (manufacturer) — approved-cleaner guidance for Bona hardwood, stone, laminate
- Shaw Floors (manufacturer) — care guide for sealed hardwood + laminate
- Armstrong Flooring (manufacturer) — care guide for vinyl + laminate
- Pergo (manufacturer) — laminate care guide
- Marble Institute of America / Natural Stone Institute — natural-stone pH guidance
- IICRC S220 — hard-surface flooring care standard (generic cadence anchor)

Tier-1 editorial:
- Bob Vila, Family Handyman, HGTV, This Old House, Real Simple — for cross-checking product lists
- Consumer Reports — where they have mop-solution tested coverage

Tier-2 retailer:
- The Home Depot / Lowe's — for Amazon availability cross-check only (never as authority)

# Intent-Hierarchy Decision: `/best-steam-mop`

**Decided:** 2026-04-20 (Phase 1 of `build-guide-pipeline` for Page 6 of 10-cycle, cadence position 1 slot M).

## Role declaration

**Role:** `primary_commercial`

Canonical category hub for steam-mop buyers — a decision-tree page framed as caution-first for the Surface Protector avatar. The page leads with flooring-type routing (engineered hardwood + pre-2018 laminate → "check your warranty first" / solid hardwood + sealed LVP → proceed with caveats / sealed tile + fiber-tile + ceramic → green-light zone) BEFORE the product list. Sub-variants (steam mop for hardwood, for laminate, for tile, for grout, cordless steam mop, Shark steam mop) flow through this page.

## Part 1 — Primary keyword verification (against guide-opportunities.json)

Verified against canonical row (2026-04-20):

| Field | Value |
|-------|-------|
| Keyword | best steam mop |
| Country | US |
| Difficulty (KD) | 2 |
| Volume (US) | 9,200 |
| Global volume | 15,000 |
| Traffic potential (US) | 13,000 |
| CPC | $0.60 |
| Parent keyword | best steam mop (this IS the parent) |
| Intents | Informational, Commercial, Non-branded, Non-local |
| BuildPriorityScore | 78.7 |
| Secondary keywords merged | 27 variants (for-hardwood, for-laminate, for-tile, for-vinyl-plank, cordless, shark, affordable, 2026, reviews, etc.) |

Parent-keyword check: Ahrefs reports `parentKeyword = "best steam mop"` (self). 829 matching terms + 459 suggestion terms across merged report files. This is the canonical commercial-intent query for the category.

## Part 2 — SERP intent-match check (same-site cannibalization)

TCR LIVE content audit (8 pages as of 2026-04-20):

- `/best-robot-vacuum` — Robot Vacuum cluster, no overlap
- `/best-cordless-vacuum` — cordless cluster, no overlap
- `/best-cordless-stick-vacuum-for-hardwood` — stick-form-factor, no overlap
- `/best-handheld-vacuum` — handheld cluster, no overlap
- `/best-hardwood-floor-cleaner` — chemical/spray cleaners for hardwood. **Adjacent but complementary**: a Surface Protector with engineered hardwood or pre-2018 laminate will be routed AWAY from steam mops and TOWARD this page. Cross-link both ways.
- `/how-to-clean-hardwood-floors` — informational technique. **Adjacent but complementary**: cross-link as the "safer alternative for warranty-protected floors" reference.
- `/best-grout-cleaner` — chemical cleaners for grout/tile. **Adjacent but complementary**: steam-mop-for-grout is a secondary intent covered here; grout chemical cleaner is a separate decision. Cross-link.
- `/best-stainless-steel-cleaner` — chemical cleaners for stainless, no overlap

✓ CLEAR — no SERP-overlap with any LIVE TCR page. Three adjacent pages (`/best-hardwood-floor-cleaner`, `/how-to-clean-hardwood-floors`, `/best-grout-cleaner`) get reciprocal internal links — they serve readers routed AWAY from steam mops by the decision tree.

Cross-site overlap check:
- BPP, BCF, CWP have no steam mop keywords. ✓ CLEAR.

## Part 3 — Variable-swap differentiation test

**N/A for this page** — this IS the parent-keyword hub; no variable modifier.

Future spoke candidates (surface once the parent page ranks + pulls sufficient revenue):
- `best-steam-mop-for-hardwood-floors` — **KEEP** (3.1K-vol spoke per opp row #92, different top-3: would exclude any steam mop that manufacturers flag for engineered hardwood; narrower list of solid-hardwood-sealed-only models + explicit warranty callout per brand)
- `best-steam-mop-for-laminate-floors` — **KILL or merge** (variable-swap fails: most laminate manufacturers void warranty on steam use; the honest answer is "don't steam-mop laminate" which collapses into the parent hub's decision tree, not a distinct product list)
- `best-cordless-steam-mop` — **DEFER** (distinct form-factor filter; needs volume verification)
- `best-shark-steam-mop` — **KILL** (brand-filter doorway; merges into parent)
- `best-steam-mop-for-tile` — **DEFER** (subset of "green-light zone" in the parent's decision tree; may emerge as a spoke if tile-specific features differentiate enough picks)

These decisions aren't acted on now — just logged so future session can skip re-analysis.

## Part 4 — Desk + avatar assignment

- **Desk:** Safe Surface Desk (`safe-surface-desk`)
- **Avatar:** Surface Protector (primary); Event-Driven Restorer (tangential)
- **Voice contract:** CAREFUL EXPERT posture, caution-first, warranty-aware, decision-tree-led. Bona/Shaw/Armstrong care guides cited via FOOTNOTE only (body says "the manufacturer care guide" generically). IICRC / EWG / Made Safe allowed inline (certification IS the claim).
- **Price band:** $60–200 (per avatar evidence row "$15-150 per product" + steam-mop reality that premium cordless + steam+vacuum combo machines push to $200).
- **Forbidden-phrase list active:** "most people will be happy", "the simple winner", "the fast answer", "the week-math says", "tier-1 labs", "methodology" (outlet-naming patterns blocked).

## Part 5 — Page-shape constraint (opp-row directive)

Row notes (quoted): *"Caution-block leads — NOT product list. Decision tree: what floor type → safe / caveat / avoid. Bona + Shaw + Armstrong care guides cited. Fiber-tile-vinyl picks only; laminate + engineered hardwood get explicit 'check your warranty' callouts."*

Page structure MUST lead with flooring-type decision tree before Final 5 table. The Final 5 includes models safe on fiber-tile/sealed-ceramic/sealed-LVP/solid-hardwood-sealed; models recommended by manufacturers for engineered hardwood OR laminate (i.e. Bissell SpinWave, Shark S7000AMZ, etc.) get a caveat footnote, not a blanket endorsement. If a pick is commonly marketed for laminate, the pick's body surfaces the warranty-manufacturer divergence — not the ad copy.

## Decision

✅ BUILD. Primary commercial hub slotted into Safe Surface Desk. Phase 2 research authorized with:
- Decision-tree-first page shape (warranty routing precedes product list)
- $60–200 price band on Final 5 selection
- Flooring-manufacturer-care-guide citations routed to footer (footnote-voice rule)
- IICRC / EWG / Made Safe allowed inline (certifying body = safety claim itself)
- At least one "safer alternative" pick (spray-and-wipe / microfiber-pad option) for engineered-hardwood-owner readers routed away from steam

# Intent-Hierarchy Decision: /how-to-clean-vinyl-floors

**Decided:** 2026-04-21
**By:** Lee Serel (Publisher)
**Per:** build-guide-pipeline skill Phase 8 P8.8 + portable rule AGENTS.md § intent-hierarchy-required

---

## Role declaration

- **role:** `topical_authority`
- **Supports hub:** `/best-mop` (LIVE, Everyday Cleaning Desk cluster-flagship for Mops)
- **Secondary support:** `/what-to-mop-floors-with` (LIVE, cross-surface mopping routing)
- **Secondary support:** `/best-hardwood-floor-cleaner` (LIVE) + `/best-steam-mop` (LIVE)

A support deep-dive on "how to clean vinyl floors" strengthens TCR's Mops cluster topical authority. It answers a single-surface reader intent that the surface-agnostic `/what-to-mop-floors-with` cannot satisfy at depth: the vinyl-specific reader wants step-by-step process, LVP-vs-sheet-vinyl distinctions, scuff/stain removal, and steam-mop-on-vinyl clarity.

---

## SERP overlap assessment

**Candidate primary keyword:** "best way to mop vinyl floors" (vol 150, KD 0, TP 3,000)
**Secondary keywords:** "best mop solution for vinyl floors", "how to clean vinyl plank floors", "how to mop vinyl plank floors"

**TCR pages checked for cannibalization:**

| Existing page | Vinyl coverage | Overlap risk |
|---|---|---|
| `/what-to-mop-floors-with` | ~400 words in the "Laminate and vinyl" section (line 84 of content file). Brief. States: Bona Pro Series Stone/Tile/Laminate is the widely-approved default; LVP is more forgiving than laminate on moisture. No process steps, no LVP-vs-sheet distinction, no scuff/stain removal. | LOW — the /what-to-mop page is cross-surface routing; this page is vinyl-specific process + troubleshooting. Different SERP intent. |
| `/best-mop` | Vinyl appears only in product-pick surface tags ("best surfaces: sealed hardwood, smooth sealed tile, laminate, vinyl"). No vinyl-specific how-to content. | LOW — /best-mop is commercial roundup. This page is instructional. |
| `/how-to-clean-hardwood-floors` | Hardwood-only; vinyl not covered. | NONE |
| `/best-steam-mop` | Mentions vinyl in context of which mops are safe. Does not teach vinyl cleaning process. | NONE — different cluster, different intent. |

**SERP check (informal):** Top results for "best way to mop vinyl floors" are step-by-step how-to guides (Bob Vila, The Spruce, Family Handyman), not cross-surface routing pages. Different SERP face from "what to mop floors with" (which ranks comparison/routing content).

**Variable-swap test:** N/A — support page with no reviewer-score products.

**Resolution:** BUILD. Additive to the cluster. No cannibalization risk at SERP level or content level.

---

## Ownership boundaries (to avoid scope drift)

- **This page OWNS:** vinyl-specific process steps, LVP-vs-LVT-vs-sheet vinyl distinctions, scuff / stain / pet-urine removal, steam-mop-on-vinyl decision, cadence, do-not-use list on vinyl specifically, product picks.
- **This page PUNTS to `/what-to-mop-floors-with`:** cross-surface routing table, the consolidated do-not-use-on-any-floor list, oil-soap cleaner explanation.
- **This page PUNTS to `/best-mop`:** commercial mop ranking, specific product SKU-level picks for mops (other than vinyl-specific cleaner product picks).
- **This page LINKS TO `/best-steam-mop`:** for readers whose flooring warranty approves steam.
- **This page LINKS TO `/best-hardwood-floor-cleaner`:** for readers who realize they have engineered hardwood, not LVP.

---

## Desk assignment

- **authorSlug:** `safe-surface-desk` (Safe Surface Desk — Surface Protector avatar)
- **Rationale:** Vinyl-floor readers are surface-protectors (once-burned, over-researching, warranty-aware). Safe Surface Desk owns the caution-first / warranty-aware voice. Everyday Cleaning Desk's "you're fine with any of these" posture is wrong for a floor type where the wrong cleaner or the wrong tool damages the wear layer irreversibly.
- **Primary avatar answered:** Surface Protector ($15-150 product band, once-burned on a prior install).

---

## Resolution

**BUILD** as support page. All 7 phases of `build-support-page` skill. Expected ~45-60 min wall time per TCR support-page baseline. Same commit pattern as `/what-is-the-most-powerful-handheld-vacuum` (shipped 2026-04-21 commit 5cc3e00).

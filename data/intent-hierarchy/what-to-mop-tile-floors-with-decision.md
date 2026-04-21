# Intent-Hierarchy Decision: /what-to-mop-tile-floors-with

**Decided:** 2026-04-21
**By:** Lee Serel (Publisher)
**Per:** build-support-page skill Phase 1 + portable rule AGENTS.md § intent-hierarchy-required

---

## Role declaration

- **role:** `topical_authority`
- **Supports hub:** `/best-mop` (LIVE, Everyday Cleaning Desk cluster-flagship for Mops)
- **Secondary support:** `/what-to-mop-floors-with` (LIVE, cross-surface routing)
- **Secondary support:** `/how-to-clean-grout` + `/best-grout-cleaner` (grout-line escalation downstream)

A tile-specific support deep-dive strengthens TCR's Mops + Chemical-Cleaning clusters. It answers a single-surface reader who arrived at a tile-specific query and is not well-served by the cross-surface routing table on `/what-to-mop-floors-with`: ceramic vs porcelain vs natural-stone subtype distinctions, sealed vs unsealed implications, glossy vs matte vs textured finish routine, and the pH-neutral rule on calcium-based stone are each out of scope for the cross-surface page at any meaningful depth.

---

## SERP overlap assessment

**Candidate primary keyword:** "what to mop tile floors with" (vol 150, KD 0, TP 3,000)
**Secondary keywords:** "best cleaner for tile floors", "how to mop ceramic tile floors", "best way to mop porcelain tile floors", "how to clean natural stone floors"

**TCR pages checked for cannibalization:**

| Existing page | Tile coverage | Overlap risk |
|---|---|---|
| `/what-to-mop-floors-with` | ~200 words total on tile in "Sealed ceramic or porcelain tile" + "Natural stone" rows of the routing table. Names Bona Stone/Tile/Laminate + StoneTech + Granite Gold at product-pick level. No ceramic-vs-porcelain-vs-stone subtype teaching, no glossy-vs-matte-vs-textured, no routine cadence for tile specifically, no sealed-vs-unsealed tile distinction. | LOW — cross-surface routing page is intentionally shallow per surface. This page is tile-specific deep-dive with different SERP intent. |
| `/how-to-clean-grout` | Grout-line content only. Tile surface not taught; assumes reader already has a tile cleaner. | NONE — complementary. Links between pages in both directions. |
| `/best-grout-cleaner` | Grout-specific product ranking. | NONE — different intent entirely. |
| `/best-mop` | Commercial mop roundup. Product-pick level tile surface tags only. | NONE — this page is instructional not commercial. |
| `/how-to-clean-vinyl-floors` | Vinyl-only. | NONE — different surface. |
| `/how-to-clean-hardwood-floors` | Hardwood-only. | NONE — different surface. |

**SERP check (informal):** Top results for "what to mop tile floors with" are tile-specific deep-dives (Bob Vila, Family Handyman, Bona blog, The Spruce, Molly Maid tile guide), not cross-surface routing pages. Different SERP face from "what to mop floors with" (which ranks comparison/routing content) and different face from "how to clean grout" (which ranks grout-specific content).

**Variable-swap test:** N/A — support page with no reviewer-score products.

**Resolution:** BUILD. Additive to the cluster. No cannibalization risk at SERP level or content level.

---

## Ownership boundaries (to avoid scope drift)

- **This page OWNS:** tile-specific process steps, ceramic-vs-porcelain-vs-natural-stone distinctions, sealed-vs-unsealed tile, glossy-vs-matte-vs-textured finish routines, daily-vs-weekly-vs-deep-clean cadence for tile, do-not-use list on tile specifically, tile-surface product picks, acidic-cleaner escalation rules.
- **This page PUNTS to `/what-to-mop-floors-with`:** the consolidated cross-surface do-not-use list, hardwood/laminate/vinyl routing.
- **This page PUNTS to `/how-to-clean-grout`:** grout-line cadence, mold/mildew on grout, grout sealing.
- **This page PUNTS to `/best-grout-cleaner`:** specific grout-only product SKU picks.
- **This page PUNTS to `/best-mop`:** commercial mop ranking.
- **This page LINKS TO `/best-steam-mop`:** for readers whose sealed ceramic/porcelain tile is the approved steam-safe target.

---

## Desk assignment

- **authorSlug:** `safe-surface-desk` (Safe Surface Desk — Surface Protector avatar)
- **Rationale:** Tile readers split between Practical Floor Keepers (ceramic everyday-maintenance) and Surface Protectors (natural stone, where pH-neutral is the warranty line). The Safe Surface Desk's caution-first + warranty-aware voice serves the stone-subtype reader where getting it wrong requires professional refinishing; the Everyday Cleaning Desk's "you're fine" posture is wrong for the highest-stakes reader in this audience mix. Safe Surface Desk also owns `/what-to-mop-floors-with` and `/how-to-clean-vinyl-floors`, which keeps the voice consistent across the mop-cleaner-by-surface family.
- **Primary avatar answered:** Surface Protector ($15-150 product band, once-burned on a prior install, over-researches).
- **Secondary avatar touched:** Practical Floor Keeper (ceramic-only buyer, lighter-touch routine).

---

## Resolution

**BUILD** as support page. All 7 phases of `build-support-page` skill. Expected ~45-60 min wall time per TCR support-page baseline. Same commit pattern as `/how-to-clean-vinyl-floors` (shipped 2026-04-21 commit 27308e8).

# Intent-Hierarchy Decision: `/best-robot-vacuum`

**Decided:** 2026-04-19 (Phase 5.B.1 plan-guide-pages of `.claude/plans/can-you-review-our-lexical-robin.md`).

## Role declaration

**Role:** `primary_commercial`

This is the canonical hub for TCR's Robot Vacuum cluster — the revenue spine per `data/cluster-shortlist.md` row 1 (46 winners, $6,641/mo P3 floor). 4 spokes + 1 comparison + 1 linkable asset route back through this hub for internal-link authority.

## Part 1 — Primary keyword verification (against Ahrefs CSV)

Verified against `data/ahrefs-exports/best-robot-vacuum.csv`:

| Field | Value |
|-------|-------|
| Keyword | best robot vacuum |
| Country | US |
| Difficulty (KD) | 3 |
| Volume (US) | 60,000 |
| Global volume | 87,000 |
| Traffic potential | 35,000 |
| CPC | $0.90 |
| Parent keyword | best robot vacuum |
| SERP features | AI Overview, Video preview, Thumbnail, Sitelinks, Top stories, People also ask, Shopping |
| Intents | Informational, Commercial, Non-branded, Non-local |
| Category | Floor care |

Keyword-map.ts lists 52,000 vol / KD 4 as a conservative estimate from aggregate cluster data. Actual CSV numbers are materially higher (60k / KD 3). **Update keyword-map.ts at Phase 7 to reflect actual CSV values** — not blocking Phase 5 because estimate was already conservative.

## Part 2 — SERP intent-match check (same-site cannibalization)

TCR LIVE content: **none** (`src/data/content/` has only `trust-pages.ts`).

No existing LIVE page ranks top-10 for "best robot vacuum" on TCR — nothing to cannibalize. ✓ CLEAR.

Cross-site overlap check (per `plan-guide-pages` Step 3): already run at Phase 4.C via `tools/audit/check-keyword-overlap.js`. Zero HIGH / zero MEDIUM overlap with BCF / BPP / CWP keyword maps. BPP's `best-robot-vacuum-for-pet-hair` is the pet-primary variant; TCR claims the clean/hub lane.

## Part 3 — Variable-swap differentiation test

**N/A.** This IS the parent hub, not a variable-modified variant. The test applies to spoke siblings (`best-robot-vacuum-under-500`, `best-robot-vacuum-for-hardwood`, `best-robot-vacuum-self-empty`, `best-robot-vacuum-with-mop`) when they reach their own Phase 1 — each of those must prove a genuinely different top-3 product list vs. the hub or get killed.

For the hub itself: the variable-swap test collapses — it's the unmodified core query.

## Desk + Avatar assignment

- **Desk:** Labor Math Desk (`labor-math-desk` in `src/data/authors.ts`)
  - Emotional posture: SKEPTICAL TIME-TRADER
  - Exclusive trust lane: Vacuum Wars methodology (7-inch hair-tangle, anemometer airflow) + Modern Castle 12-debris matrix
  - Forbidden: Everyday's "you're fine" reassurance + Safe Surface's decision-tree / warranty framing
- **Primary avatar:** Labor Trader (per `data/avatar-research.md` § Labor Trader)
  - Core job: "I will spend more money to reclaim hours — but prove to me this tool doesn't cost me those hours right back in maintenance."
  - Budget tier: $500-$1500 for flagship purchases
  - Dealbreakers: Dock becomes second chore; mop-pads that grow smell; firmware regressions

**One-line reasoning for desk match:** Labor Math Desk is the only desk with Labor Trader as primaryAvatar + Vacuum Wars methodology exclusive in its trustSignalAllowlist. Robot Vacuum cluster is flagship revenue + labor-swap premise. Direct match, no ambiguity.

## Secondary keywords (from keyword-map.ts)

- best robot vacuum 2026
- best robot vacuum for pet hair free home
- top robot vacuums
- robot vacuum with mop
- best robot vacuum and mop combo (CSV: KD 9, Vol 19,000 — materially distinct SERP intent; flagged for future spoke consolidation check)

## Variant release timing

No conflicting variants scheduled. Robot Vacuum cluster spokes (under-500, for-hardwood, self-empty, with-mop) queue at positions 7/9/14/16 of the Build Queue — all follow this hub build, spaced 2+ sessions apart per the one-page-per-session rule.

## Resolution

**BUILD.** Proceed to Phase 2 (Research — `research-product-lineup` + `research-online`).

## Audience evidence (anchor for Phase 4 writing)

From `data/avatar-research.md` § Labor Trader:

> What they search: 'best robot vacuum 2026', 'robot vacuum self-empty worth it', 'roborock qrevo vs saros'.
> Core job: 'I will spend more money to reclaim hours — but prove to me this tool doesn't cost me those hours right back in maintenance.'
> Mental model: 'My friend said theirs was useless — I need counter-evidence, not marketing.' Methodology-backed reviews carry more weight than CR/GHI.
> Dealbreakers: 'Bags that jam on hair', 'Dirty-water tanks that require scrubbing', 'Mop pads that sit wet and grow smell', 'Dock becomes a second chore.'
> Recurring concerns: 'Long-tail dock maintenance — how often am I actually cleaning this thing?'

Phase 4 writer MUST lead maintenance-reality early (not last) per this avatar. Dock mold, dirty-water tank smell, firmware regression are load-bearing — no Labor Trader page buries these.

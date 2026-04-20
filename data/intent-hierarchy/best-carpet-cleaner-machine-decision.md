# Intent-Hierarchy Decision: `/best-carpet-cleaner-machine`

**Decided:** 2026-04-20 (Phase 1 of `build-guide-pipeline` for Page 7 of 10-cycle, cadence position 2 slot M).

## Role declaration

**Role:** `primary_commercial`

Canonical category hub for carpet-cleaner-machine buyers (Big-Green class + Rug Doctor class home-deep-clean machines). The page leads with rent-vs-buy math BEFORE the product list: Event-Driven Restorers arrive having just experienced a trigger event (moved in, flood, wine spill, pre-listing deep-clean), and the first real decision is "do I rent a Rug Doctor for $40 or buy a Big Green for $250?" rather than "which brand." Dry-time is named as the primary differentiator per avatar dealbreaker. Pet-mess framing is explicitly excluded — that domain belongs to BetterPetPicks.

## Part 1 — Primary keyword verification (against guide-opportunities.json)

Verified against canonical row (2026-04-20):

| Field | Value |
|-------|-------|
| Keyword | best carpet cleaner machine |
| Country | US |
| Difficulty (KD) | 3 |
| Volume (US) | 4,000 |
| Global volume | 6,200 |
| Traffic potential (US) | 12,000 |
| CPC | $0.70 |
| Parent keyword | best carpet cleaner |
| Intents | Informational, Commercial, Non-branded, Non-local |
| BuildPriorityScore | 80.7 |
| Secondary keywords merged | 8 variants (for-home, carpet-shampooer, carpet-cleaning-machine, etc.) |

Parent-keyword check: Ahrefs reports `parentKeyword = "best carpet cleaner"`. The `-machine` modifier narrows the intent to physical-machine purchases (vs. carpet-cleaner services or carpet-cleaning chemicals). 207 matching terms + 296 suggestion terms. Commercial-machine intent is canonical for this keyword; chemical-only solutions are out of scope.

## Part 2 — SERP intent-match check (same-site cannibalization)

TCR LIVE content audit (9 pages as of 2026-04-20):

- `/best-robot-vacuum` — Robot Vacuum cluster, no overlap
- `/best-cordless-vacuum` — cordless cluster, no overlap
- `/best-cordless-stick-vacuum-for-hardwood` — stick-form-factor, no overlap
- `/best-handheld-vacuum` — handheld cluster, no overlap
- `/best-hardwood-floor-cleaner` — hardwood chemical cleaners, no overlap
- `/how-to-clean-hardwood-floors` — hardwood technique, no overlap
- `/best-grout-cleaner` — grout chemical cleaners, no overlap
- `/best-stainless-steel-cleaner` — stainless chemical cleaners, no overlap
- `/best-steam-mop` — steam-mop cluster. **Adjacent but distinct**: steam-mop = surface-sanitize + light-residue, carpet-cleaner-machine = carpet-deep-wash with extraction. Cross-link at the "when not to buy" block (homes with no wall-to-wall carpet should steam-mop or call IICRC pro, not buy a Big Green).

✓ CLEAR — no SERP-overlap with any LIVE TCR page. `/best-steam-mop` gets a reciprocal cross-link at the "skip this if" exit ramp.

Cross-site overlap check:
- BPP — has pet-mess + pet-carpet-cleaner framing as its domain. This page MUST avoid pet-mess framing to preserve BPP's SERP lane.
- BCF, CWP — no overlap.

✓ CLEAR with the pet-mess avoidance rule active.

## Part 3 — Variable-swap differentiation test

**N/A for this page** — this IS the primary commercial hub; no variable modifier.

Future spoke candidates (logged, not acted on):
- `bissell-big-green-vs-rug-doctor` — **KEEP** (comparison-shape; already in guide-opportunities at position 17, slot comparison, score 66.5)
- `carpet-cleaner-rent-vs-buy-calculator` — **KEEP** (linkable-asset candidate per `data/linkable-asset-candidates.md`; surfaces the rent-vs-buy math as a standalone tool)
- `best-carpet-cleaner` (broader parent, vol 150) — **KILL** (tiny volume vs. -machine variant; the parent-keyword field points back to this page)
- `best-home-carpet-cleaner` — **MERGE into this page** (secondary kw already tracked in opp row)
- `best-carpet-shampooer` — **MERGE into this page** (secondary kw; informal variant)

## Part 4 — Desk + avatar assignment

- **Desk:** Safe Surface Desk (`safe-surface-desk`)
- **Avatar:** Event-Driven Restorer (primary); Surface Protector (tangential — renters with a single fiber-carpet area-rug who want to protect it)
- **Voice contract:** CAREFUL EXPERT posture with a measured rent-vs-buy math framing up front (not hype, not panic). IICRC S100 water-damage-restoration guidance inline (certifying body IS the claim). VacuumLand carpet-cleaner-machine comparison threads cited via [N] footnote. No outlet names in body prose.
- **Price band:** $150–600 (per avatar evidence row + Big-Green-class $250 AOV).
- **Forbidden-phrase list active:** "most people will be happy", "the simple winner", "the fast answer", "the week-math says", "tier-1 labs", "methodology" (outlet-naming patterns blocked). Also avoid: any pet-mess framing ("pet urine," "dog accidents," "cat mess") — that's BPP's lane.

## Part 5 — Page-shape constraint (opp-row directive)

Row notes (quoted): *"Tight flagship per shortlist row 6 (1 winner keyword, $250 AOV Big-Green class). Lead with rent-vs-buy framework; name dry-time as THE differentiator per avatar dealbreaker. IICRC S100 + VacuumLand exclusive trust. Avoid pet-mess framing — that's BPP."*

Page structure MUST lead with the rent-vs-buy math block BEFORE the product list. Dry-time is named as THE primary differentiator across all picks — every review body surfaces dry-time minutes + heated-vs-cold-water status + suction-power rating. Surface-compatibility block appears but is secondary (most home machines are fiber-carpet + low-pile-rug-safe; the real segmentation is occasional-restorer vs. seasonal-deep-cleaner vs. frequent-mess household).

## Decision

✅ BUILD. Primary commercial hub slotted into Safe Surface Desk. Phase 2 research authorized with:
- Rent-vs-buy framework leading the page (before Final 5 table)
- Dry-time named as primary differentiator (per avatar dealbreaker)
- $150–600 price band on Final 5 selection
- IICRC S100 + VacuumLand = exclusive trust-source allowlist for this page
- Zero pet-mess framing (cross-site SERP-lane discipline vs. BPP)
- At least one "rent this instead" exit-ramp callout for readers where rent-vs-buy math says rent

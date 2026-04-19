# TheCleaningReport — Guide Opportunities Roadmap

**Generated:** 2026-04-19 (Phase 4.D of `.claude/plans/can-you-review-our-lexical-robin.md`).

**Source mode.** Browser-fallback. Live Ahrefs MCP was not re-queried for this pass — Phase 2's cluster shortlist (`data/cluster-shortlist.md`) already consumed ~3,006 MCP units (3× serp-overview + 3× volume-history) and stays within the 20% acceptance ceiling. Volume/KD numbers for spoke + support rows are conservative estimates from the aggregate cluster data in the shortlist + typical spoke-tier ratios. Pre-Phase-5 refinement queues:

- 12-month volume history per flagship primary (`mcp__ahrefs__keywords-explorer-volume-history`, ~30 units).
- SERP overview on top 3 money spokes if DR class is ambiguous (`mcp__ahrefs__serp-overview`, ~952 units per).
- US-share sanity on flagships (`mcp__ahrefs__keywords-explorer-volume-by-country`, ~30 units).

Fallback evidence sources used:

- `data/cluster-shortlist.md` (7 clusters, revenue-lens scored).
- `data/ahrefs-exports/` round-2 Matching + Suggestions CSVs for cleaning seeds (41 CSVs relevant to the shortlist).
- `data/avatar-research.md` (4 full + 2 backlog-light avatars + cross-cluster expression matrix).
- `src/data/authors.ts` (3 topical desks + 1 house voice).
- `src/data/keyword-map.ts` (Phase 4.C — 24 mapped page targets).

**Scope.** First-wave launch roadmap covering the 7-cluster shortlist. Master roadmap beyond 24 pages is Phase 9+ territory — we add backlog rows below only where the shortlist data supports them, not to hit a 100-row target.

---

## Summary

| Status | Count |
|--------|-------|
| LIVE | 0 |
| CONTENT READY | 0 |
| NOT BUILT | 24 |
| SKIP | 12 |
| **Total** | **36** |

Status key per `generate-guide-opportunities` skill + `guide-opps-validate` hook.

---

## Linkable Assets

*Discovered 2026-04-19 per `identify-linkable-assets` rubric applied to TCR's cluster shortlist. Scores are the 0-12 asset-score rubric (NOT the volume-weighted score below). 1-in-10 cadence per `build-guide-pipeline` lines 182-227.*

| # | Asset Score (0-12) | Pattern | Zone | Build hrs | Desk | Status | Title |
|---|---|---|---|---|---|---|---|
| 1 | 10 | lookup | 1 | 10 | Labor Math Desk | NOT BUILT | Robot Vacuum Comparison Tool: 2026 Head-to-Head Specs + Maintenance Reality (slug: `robot-vacuum-comparison-tool`) |
| 2 | 9 | annual-state-of | 1 | 8 | Safe Surface Desk | NOT BUILT | Rent or Buy a Carpet Cleaner? The Actual Break-Even Math 2026 (slug: `carpet-cleaner-rent-vs-buy-calculator`) |
| 3 | 9 | diagram | 1 | 12 | Safe Surface Desk | NOT BUILT | Cleaning-Tool-by-Surface Decision Tree: What's Safe on Each Floor 2026 (slug: `cleaning-tool-by-surface-decision-tree`) |

All three target unique outreach angles:

- **#1 (lookup)** — r/RobotVacuums + r/HomeImprovement subreddit links + vacuum-enthusiast bloggers. Authority anchor: Vacuum Wars hair-tangle methodology referenced directly.
- **#2 (annual-state-of)** — home-improvement bloggers + r/HomeImprovement + personal-finance "is it worth it" posts. Calculator format embeds easily.
- **#3 (diagram)** — flooring-manufacturer forums + Houzz + Bona + Shaw + Armstrong educational pages (candidates for earned link). Embeddable PNG + HTML.

Outreach sequencing lives in `earn-links-with-linkable-assets` per asset after build.

---

## Build Queue (ordered by priority + support-cadence rhythm)

Ordering rule per `generate-guide-opportunities` Step 3.1: interleave support around money guides at roughly 2:1. 4 hubs front-loaded (priority 1), spokes + support interleaved (priority 2-3), linkable assets built opportunistically between money spokes.

| # | Guide | Page Type | Primary Keyword | Vol | KD | Score | Desk | Status |
|---|---|---|---|---|---|---|---|---|
| 1 | best-robot-vacuum | money-guide | best robot vacuum | 52000 | 4 | 98 | Labor Math Desk | NOT BUILT |
| 2 | best-cordless-vacuum | money-guide | best cordless vacuum | 41000 | 2 | 95 | Everyday Cleaning Desk | NOT BUILT |
| 3 | best-carpet-cleaner-machine | money-guide | best carpet cleaner machine | 4800 | 6 | 80 | Safe Surface Desk | NOT BUILT |
| 4 | best-mop | money-guide | best mop | 19000 | 1 | 92 | Everyday Cleaning Desk | NOT BUILT |
| 5 | how-to-clean-hardwood-floors | support-guide | how to clean hardwood floors | 18000 | 12 | 75 | Safe Surface Desk | NOT BUILT |
| 6 | best-steam-mop | money-guide | best steam mop | 6600 | 3 | 85 | Safe Surface Desk | NOT BUILT |
| 7 | best-robot-vacuum-under-500 | money-guide | best robot vacuum under 500 | 2900 | 3 | 78 | Labor Math Desk | NOT BUILT |
| 8 | how-to-clean-grout | support-guide | how to clean grout | 22000 | 14 | 73 | Safe Surface Desk | NOT BUILT |
| 9 | best-robot-vacuum-for-hardwood | money-guide | best robot vacuum for hardwood | 1800 | 2 | 76 | Labor Math Desk | NOT BUILT |
| 10 | robot-vacuum-comparison-tool | linkable-asset | robot vacuum comparison | 600 | 5 | — | Labor Math Desk | NOT BUILT |
| 11 | best-handheld-vacuum | money-guide | best handheld vacuum | 4300 | 1 | 82 | Everyday Cleaning Desk | NOT BUILT |
| 12 | best-cordless-vacuum-under-200 | money-guide | best cordless vacuum under 200 | 2200 | 1 | 81 | Everyday Cleaning Desk | NOT BUILT |
| 13 | can-you-use-a-steam-mop-on-engineered-hardwood | support-guide | can you use a steam mop on engineered hardwood | 2400 | 7 | 68 | Safe Surface Desk | NOT BUILT |
| 14 | best-robot-vacuum-self-empty | money-guide | best robot vacuum self empty | 1500 | 3 | 74 | Labor Math Desk | NOT BUILT |
| 15 | best-hardwood-floor-cleaner | support-guide | best hardwood floor cleaner | 9900 | 9 | 72 | Safe Surface Desk | NOT BUILT |
| 16 | best-robot-vacuum-with-mop | money-guide | best robot vacuum with mop | 2400 | 3 | 76 | Labor Math Desk | NOT BUILT |
| 17 | bissell-big-green-vs-rug-doctor | comparison | bissell big green vs rug doctor | 900 | 5 | 70 | Safe Surface Desk | NOT BUILT |
| 18 | carpet-cleaner-rent-vs-buy-calculator | linkable-asset | carpet cleaner rent vs buy | 400 | 4 | — | Safe Surface Desk | NOT BUILT |
| 19 | best-cordless-stick-vacuum-for-hardwood | money-guide | best cordless stick vacuum for hardwood | 900 | 2 | 72 | Everyday Cleaning Desk | NOT BUILT |
| 20 | best-grout-cleaner | support-guide | best grout cleaner | 8100 | 10 | 69 | Safe Surface Desk | NOT BUILT |
| 21 | roborock-vs-eufy | comparison | roborock vs eufy | 1200 | 4 | 71 | Labor Math Desk | NOT BUILT |
| 22 | best-stainless-steel-cleaner | support-guide | best stainless steel cleaner | 6600 | 11 | 66 | Safe Surface Desk | NOT BUILT |
| 23 | best-lightweight-cordless-vacuum | money-guide | best lightweight cordless vacuum | 800 | 2 | 70 | Everyday Cleaning Desk | NOT BUILT |
| 24 | cleaning-tool-by-surface-decision-tree | linkable-asset | what floor cleaner is safe for hardwood | 300 | 8 | — | Safe Surface Desk | NOT BUILT |

**Rhythm check.** Money vs support interleave:
- Positions 1-4 (hubs): 4M
- Position 5: 1S
- Position 6-7: 2M
- Position 8: 1S
- Position 9: 1M
- Position 10: 1L (linkable)
- Positions 11-12: 2M
- Position 13: 1S
- Position 14: 1M
- Position 15: 1S
- Position 16: 1M
- Position 17: 1C (comparison)
- Position 18: 1L
- Position 19: 1M
- Position 20: 1S
- Position 21: 1C
- Position 22: 1S
- Position 23: 1M
- Position 24: 1L

Money (including hubs): 14 · Support: 6 · Comparison: 2 · Linkable: 3 · **14:8 ≈ 1.75:1 money-to-(support+comparison)** — inside the 2:1 guardrail. Hubs front-load by design because early authority compounds.

---

## Support Coverage Audit

Per `generate-guide-opportunities` Step 3.1: target ≥1 support page per 2 money guides at site + cluster level.

| Cluster | Money (hub + spokes) | Support + Comparison | Ratio | Pass 2:1? |
|---------|----------------------|---------------------|-------|-----------|
| Robot Vacuum | 5 (hub + 4 spokes) | 2 (roborock-vs-eufy, robot-vacuum-comparison-tool) | 2.5:1 | ✓ (tight) |
| Cordless Vacuum | 4 (hub + 3 spokes) | 0 direct (handheld is adjacent money spoke) | — | ⚠ intentional |
| Carpet Cleaner | 1 (hub) | 2 (bissell-vs-rugdoctor, rent-vs-buy calculator) | 0.5:1 | ✓ over-supported |
| Mop | 1 (hub) | 3 (steam-mop spoke + can-you-use + handheld assist) | 0.3:1 | ✓ over-supported |
| Steam Mop | 1 (spoke) | 1 (can-you-use-a-steam-mop-on-engineered-hardwood) | 1:1 | ✓ |
| Chemical Bundle | 3 (hardwood-cleaner, grout-cleaner, stainless-cleaner) | 2 (how-to-clean-hardwood-floors, how-to-clean-grout) | 1.5:1 | ✓ (tight) |
| Decision-support | — | 1 (cleaning-tool-by-surface-decision-tree linkable) | — | cross-cluster |

**Site total.** 14 money guides ÷ 8 support/comparison = 1.75:1. Pass.

**Cordless support gap flagged.** Cordless hub + 3 spokes has 0 direct support pages. Mitigation: Practical Floor Keeper voice leans on short-form mini-guides inside the hub (filter-cost-over-3-years, stairs-and-ceiling-fan test). If Phase 7 saturation reveals reader-question gaps, promote from backlog → `how-to-clean-a-cordless-vacuum-filter` (hook: Recurring concerns: 'Battery degrading in year 2 — what's the replacement cost?').

---

## Cluster breakdowns

### Robot Vacuum cluster (Labor Math Desk · Labor Trader)

| # | Guide | Page Type | Primary Keyword | Vol | KD | Status |
|---|---|---|---|---|---|---|
| 1 | best-robot-vacuum | money-guide | best robot vacuum | 52000 | 4 | NOT BUILT |
| 2 | best-robot-vacuum-under-500 | money-guide | best robot vacuum under 500 | 2900 | 3 | NOT BUILT |
| 3 | best-robot-vacuum-for-hardwood | money-guide | best robot vacuum for hardwood | 1800 | 2 | NOT BUILT |
| 4 | best-robot-vacuum-self-empty | money-guide | best robot vacuum self empty | 1500 | 3 | NOT BUILT |
| 5 | best-robot-vacuum-with-mop | money-guide | best robot vacuum with mop | 2400 | 3 | NOT BUILT |
| 6 | roborock-vs-eufy | comparison | roborock vs eufy | 1200 | 4 | NOT BUILT |
| 7 | robot-vacuum-comparison-tool | linkable-asset | robot vacuum comparison | 600 | 5 | NOT BUILT |

### Cordless Vacuum cluster (Everyday Cleaning Desk · Practical Floor Keeper)

| # | Guide | Page Type | Primary Keyword | Vol | KD | Status |
|---|---|---|---|---|---|---|
| 1 | best-cordless-vacuum | money-guide | best cordless vacuum | 41000 | 2 | NOT BUILT |
| 2 | best-cordless-vacuum-under-200 | money-guide | best cordless vacuum under 200 | 2200 | 1 | NOT BUILT |
| 3 | best-cordless-stick-vacuum-for-hardwood | money-guide | best cordless stick vacuum for hardwood | 900 | 2 | NOT BUILT |
| 4 | best-lightweight-cordless-vacuum | money-guide | best lightweight cordless vacuum | 800 | 2 | NOT BUILT |

### Handheld + Mop clusters (Everyday Cleaning Desk · Practical Floor Keeper + Generic Mop Buyer interim)

| # | Guide | Page Type | Primary Keyword | Vol | KD | Status |
|---|---|---|---|---|---|---|
| 1 | best-mop | money-guide | best mop | 19000 | 1 | NOT BUILT |
| 2 | best-handheld-vacuum | money-guide | best handheld vacuum | 4300 | 1 | NOT BUILT |

### Carpet Cleaner cluster (Safe Surface Desk · Event-Driven Restorer)

| # | Guide | Page Type | Primary Keyword | Vol | KD | Status |
|---|---|---|---|---|---|---|
| 1 | best-carpet-cleaner-machine | money-guide | best carpet cleaner machine | 4800 | 6 | NOT BUILT |
| 2 | bissell-big-green-vs-rug-doctor | comparison | bissell big green vs rug doctor | 900 | 5 | NOT BUILT |
| 3 | carpet-cleaner-rent-vs-buy-calculator | linkable-asset | carpet cleaner rent vs buy | 400 | 4 | NOT BUILT |

### Steam Mop + Chemical Bundle (Safe Surface Desk · Surface Protector)

| # | Guide | Page Type | Primary Keyword | Vol | KD | Status |
|---|---|---|---|---|---|---|
| 1 | best-steam-mop | money-guide | best steam mop | 6600 | 3 | NOT BUILT |
| 2 | can-you-use-a-steam-mop-on-engineered-hardwood | support-guide | can you use a steam mop on engineered hardwood | 2400 | 7 | NOT BUILT |
| 3 | how-to-clean-hardwood-floors | support-guide | how to clean hardwood floors | 18000 | 12 | NOT BUILT |
| 4 | how-to-clean-grout | support-guide | how to clean grout | 22000 | 14 | NOT BUILT |
| 5 | best-hardwood-floor-cleaner | support-guide | best hardwood floor cleaner | 9900 | 9 | NOT BUILT |
| 6 | best-grout-cleaner | support-guide | best grout cleaner | 8100 | 10 | NOT BUILT |
| 7 | best-stainless-steel-cleaner | support-guide | best stainless steel cleaner | 6600 | 11 | NOT BUILT |
| 8 | cleaning-tool-by-surface-decision-tree | linkable-asset | what floor cleaner is safe for hardwood | 300 | 8 | NOT BUILT |

---

## Backlog (deeper candidates — promote with avatar deepening)

Rows here are validated by shortlist data but NOT queued for first-wave build. Promoting to Build Queue requires the relevant backlog-light avatar to reach full-depth per `avatar-research.md` § Backlog-cluster deepening policy.

| # | Guide | Page Type | Primary Keyword | Vol | KD | Blocker | Status |
|---|---|---|---|---|---|---|---|
| B1 | best-upright-vacuum | money-guide | best upright vacuum | 9500 | 8 | Traditional Upright Vacuum Buyer avatar must deepen first | NOT BUILT |
| B2 | best-spin-mop | money-guide | best spin mop | 2300 | 3 | Generic Mop Buyer avatar must deepen first | NOT BUILT |
| B3 | best-spray-mop | money-guide | best spray mop | 1800 | 4 | Generic Mop Buyer avatar must deepen first | NOT BUILT |
| B4 | best-vacuum-for-hardwood-floors | money-guide | best vacuum for hardwood floors | 3600 | 7 | intent overlap risk with best-cordless-stick-vacuum-for-hardwood — serp-overview before build | NOT BUILT |
| B5 | best-canister-vacuum | money-guide | best canister vacuum | 3100 | 7 | thin avatar coverage — Traditional Upright secondary | NOT BUILT |
| B6 | how-to-clean-a-cordless-vacuum-filter | support-guide | how to clean cordless vacuum filter | 900 | 6 | promote if cordless cluster needs support post-launch | NOT BUILT |
| B7 | best-vacuum-for-stairs | money-guide | best vacuum for stairs | 2400 | 5 | intent overlap with best-handheld-vacuum — check SERP distinctness | NOT BUILT |
| B8 | best-bagless-vacuum | money-guide | best bagless vacuum | 3700 | 7 | broad intent + no avatar-specific job — low signal | NOT BUILT |

B1–B8 are in `Backlog`, not in the `Summary` counts — they don't ship in Wave 1.

---

## Skipped overlaps

Rows excluded from TCR's roadmap. Each has a cited reason traceable to the overlap check, kill list, or avatar-research.

| # | Guide | Primary Keyword | Reason | Status |
|---|---|---|---|---|
| S1 | best-robot-vacuum-for-pet-hair | best robot vacuum for pet hair | SKIP — BPP cluster per `check-keyword-overlap.js` HIGH collision + "pet-hair stays with BPP" in plan | SKIP |
| S2 | best-vacuum-for-pet-hair | best vacuum for pet hair | SKIP — BPP primary per overlap check | SKIP |
| S3 | best-cordless-vacuum-for-pet-hair | best cordless vacuum for pet hair | SKIP — BPP primary per overlap check | SKIP |
| S4 | best-vacuum-for-dog-hair | best vacuum for dog hair | SKIP — covered on BPP's best-vacuum-for-pet-hair (pet-primary avatar not TCR's lane) | SKIP |
| S5 | best-hepa-vacuum-for-allergies | best hepa vacuum for allergies | SKIP — shortlist excluded 42/SKIP (BPP-adjacent allergies modifier ⇒ pet-dander territory) | SKIP |
| S6 | best-ultrasonic-cleaner | best ultrasonic cleaner | SKIP — shortlist excluded (off-niche jewelry/dental) | SKIP |
| S7 | best-robotic-pool-cleaner | best robotic pool cleaner | SKIP — shortlist excluded (pool-adjacent drift + thin winners) | SKIP |
| S8 | best-car-cleaning-kit | best car cleaning kit | SKIP — shortlist excluded (automotive drift) | SKIP |
| S9 | best-gutter-cleaning-tool | best gutter cleaning tool | SKIP — shortlist excluded (outdoor cleaning drift) | SKIP |
| S10 | best-window-cleaning-tool | best window cleaning tool | SKIP — shortlist excluded (outdoor drift + low volume) | SKIP |
| S11 | best-pressure-washer-surface-cleaner | best pressure washer surface cleaner | SKIP — shortlist excluded (outdoor drift) | SKIP |
| S12 | best-vacuum-sealer | best vacuum sealer | SKIP — shortlist excluded (kitchen/storage — not cleaning) | SKIP |

---

## Traffic-speed notes + sequencing logic

- **Hubs first (priority 1).** All 4 hubs lead because internal-link equity flows from hub → spoke. Building a spoke before its hub wastes early link juice.
- **Labor Math cluster compresses quickly.** 5 spokes + 1 comparison + 1 linkable all under Labor Trader + single desk; voice stays tight. Sequence Labor-Math-heavy in the middle of the queue (positions 7-16) to let the flagship rank first.
- **Safe Surface support-heavy.** 6 chemical-bundle + decision-support pages feed internal-link authority into Steam Mop + Carpet Cleaner money pages. Over-supporting intentional per `generate-guide-opportunities` rhythm rule.
- **Cordless's FORTRESS risk.** `best-cordless-vacuum` bare head SERP is DR 68+ dominated per shortlist row 2. Don't wait for it to rank before shipping spokes — carve sub-niches in parallel (`under-200`, `for-hardwood`, `lightweight`). Those spokes can rank first; the hub picks up traffic via internal-link + long-tail capture.
- **Linkable assets interleaved.** Positions 10, 18, 24 — one per ~10 non-linkable pages per `build-guide-pipeline` cadence rule.

---

## Phase 5 baseline-3 recommendation (from this queue)

Plan requires: 1 flagship money + 1 distinct-desk money + 1 non-linkable support.

- **Flagship:** #1 `best-robot-vacuum` (Labor Math Desk, Labor Trader).
- **Distinct-desk money:** #3 `best-carpet-cleaner-machine` (Safe Surface Desk, Event-Driven Restorer) — different desk + different avatar + different commercial cluster than flagship.
- **Support:** #5 `how-to-clean-hardwood-floors` (Safe Surface Desk, Surface Protector) — exercises decision-tree voice + Bona/Shaw/Armstrong authority citations early.

Alt if Lee wants a third DESK exercised in Phase 5: swap support to `best-handheld-vacuum` (Everyday Cleaning Desk, Practical Floor Keeper) — lifts Practical Floor Keeper voice into baseline-3 but loses the support/money ratio demonstration.

Phase 4.D closes. Lee approval required before Phase 5.A kicks off.

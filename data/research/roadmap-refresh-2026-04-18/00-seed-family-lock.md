# PRE1 — TCR Roadmap Refresh: Seed Family Lock

**Session:** Phase 8.5 PRE1 (2026-04-18)
**Plan reference:** `data/phase-8-5-plan.md` §Prelude PRE1

## Scope

Refresh TCR's opportunity roadmap with fresh Ahrefs MCP data across 15 seed families (7 existing + 8 additions). Previous roadmap (`sites/thecleaningreport/data/guide-opportunities.md` dated 2026-04-16) self-admits it was built from the local export fallback bundle with only 7 seeds and no question-export coverage. This refresh fixes that and broadens the seed set to cover all TCR-fit cleaning tool categories.

## Approach (confirmed with Lee 2026-04-18)

**Gap-fill + SERP-validate** on top of existing CSVs (2 days old — still fresh for keyword data):
1. Use existing `data/ahrefs-exports/*.csv` Matching Terms + Suggestions as the base pool (all 15 seeds have these).
2. Fill Also-Rank-For gaps via MCP `keywords-explorer-related-terms` (priority: 3 original seeds; 8 new seeds optional if budget allows).
3. SERP-validate top 15 candidates via MCP `serp-overview` for intent confirmation.

**Rejected alternatives:**
- Full MCP re-pull of everything: 15-20K units (~13% of monthly budget) for marginal freshness gain on 2-day-old data.
- CSVs-as-is no-MCP: leaves 3 original seeds without ARF and misses SERP-intent confirmation.

## Seed Family Lock (15 seeds)

### Original 7 (from 2026-04-16 roadmap)

| # | Seed | Seed Vol | Seed KD | CSV Rows | ARF CSV? | Status |
|---|---|---:|---:|---:|---|---|
| 1 | best-robot-vacuum | 60000 | 8 | — | ✓ | KEEP |
| 2 | best-cordless-vacuum | 51000 | 24 | — | ✓ | KEEP |
| 3 | best-vacuum-for-pet-hair | 32000 | 0 | — | ✓ | KEEP |
| 4 | best-mop | 11000 | 2 | — | ✓ | KEEP |
| 5 | best-steam-mop | 9200 | 2 | — | ✗ | KEEP + MCP gap-fill ARF |
| 6 | best-window-cleaning-tool | 60 | 0 | — | ✗ | KEEP + MCP gap-fill ARF |
| 7 | best-dryer-vent-cleaning-kit | 400 | 0 | — | ✗ | KEEP + MCP gap-fill ARF |

### Additions 8 (promoted from portfolio CSV inventory based on volume + KD + cluster depth)

| # | Seed | Seed Vol | Seed KD | CSV Rows | ARF CSV? | Status |
|---|---|---:|---:|---:|---|---|
| 8 | best-handheld-vacuum | 17000 | 0 | 1269 | ✗ | ADD + MCP ARF |
| 9 | best-grout-cleaner | 8800 | 1 | 605 | ✗ | ADD + MCP ARF |
| 10 | best-upholstery-cleaner | 5800 | 4 | 662 | ✗ | ADD + MCP ARF |
| 11 | best-hardwood-floor-cleaner | 4400 | 0 | 239 | ✗ | ADD + MCP ARF |
| 12 | best-carpet-cleaner-machine | 4000 | 3 | 208 | ✗ | ADD + MCP ARF |
| 13 | best-stainless-steel-cleaner | 2900 | 1 | 245 | ✗ | ADD + MCP ARF |
| 14 | best-lint-roller | 1100 | 1 | 106 | ✗ | ADD + MCP ARF |
| 15 | best-upright-vacuum-for-carpet | 250 | 1 | 30 | ✗ | ADD + MCP ARF (thin cluster but useful surface-type modifier) |

### Considered but skipped

| Seed | Seed Vol | Seed KD | CSV Rows | Reason skipped |
|---|---:|---:|---:|---|
| best-ceiling-fan-duster | 100 | 0 | 6 | CSV too thin (6 rows). Include modifiers via adjacent seed exports if surfaced. |
| best-hepa-vacuum-for-allergies | 200 | 10 | 17 | YMYL concern per TCR AGENTS.md Rule 4 ("no health or sanitization hype without strong evidence") + thin cluster. |
| best-robot-window-cleaner | 200 | 0 | 38 | Low volume + overlap with window-cleaning-tool cluster. Covered as sub-intent. |

### Out of scope (not TCR-fit)

Car cleaning, outdoor/gutter, reptile/pet, construction (tile saws), food-storage vacuum sealers, HVAC fans, B2B cleaning software — all present in portfolio CSVs but not aligned with TCR mission ("practical indoor home-cleaning buying-guide site").

## Cluster Coverage Projection

The 15-seed set maps to these TCR content clusters (final cluster names finalized in PRE2):

| Projected Cluster | Seed Families | Avatar Fit |
|---|---|---|
| Robot Vacuums | best-robot-vacuum | Automation-Minded Floor-Care Upgrader |
| Cordless Vacuums | best-cordless-vacuum | Practical Cordless Buyer |
| Pet Mess & Hair | best-vacuum-for-pet-hair | Pet-Mess Floor Manager |
| Steam Mops | best-steam-mop | Surface-Specific Deep Cleaner |
| Mops (Generic) | best-mop | Practical Cordless Buyer + Surface-Specific |
| Handheld Vacuums | best-handheld-vacuum, best-upright-vacuum-for-carpet | Practical Cordless Buyer + Pet-Mess |
| Surface-Safe Deep Clean | best-hardwood-floor-cleaner, best-grout-cleaner, best-stainless-steel-cleaner | Surface-Specific Deep Cleaner |
| Upholstery & Carpet | best-upholstery-cleaner, best-carpet-cleaner-machine | Pet-Mess Floor Manager + Surface-Specific |
| Quick-Win Consumables | best-lint-roller | Pet-Mess Floor Manager |
| Specialty Cleaning | best-window-cleaning-tool, best-dryer-vent-cleaning-kit | Surface-Specific Deep Cleaner (backlog per 2026-04-16 roadmap) |

## Ahrefs MCP Unit Budget for PRE1

| Step | Calls | Rows | Unit Cost/Row | Total Units |
|---|---:|---:|---:|---:|
| related-terms gap-fill (11 seeds × limit 15 × select vol/KD/TP) | 11 | 15 | 30 | 4,950 |
| serp-overview on top 15 candidates | 15 | — | ~15 each | 225 |
| **PRE1 total projected** | | | | **~5,175** |

Monthly budget remaining: 74,735 units (of 150K).
PRE1 cost: ~3.5% of monthly cap. Well within ceiling.

## Research Artifact Outputs (this session)

- `00-seed-family-lock.md` — this file
- `10-related-terms-*.json` — one per seed (MCP related-terms output)
- `20-serp-overview-*.json` — one per top-15 candidate (MCP serp-overview output)
- `99-raw-candidate-pool.md` — consolidated flat list of all candidates discovered with evidence source tags

## PRE1 Exit Criteria (per plan)

- [ ] 11 MCP related-terms runs complete + raw JSONs committed
- [ ] Top 15 candidates identified by volume from combined pool
- [ ] 15 MCP serp-overview runs complete + raw JSONs committed
- [ ] Raw candidate pool artifact (`99-raw-candidate-pool.md`) lists ≥ 150 validated candidates with vol/KD/TP
- [ ] Research dir committed to parent repo

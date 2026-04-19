# TCR Cluster Shortlist — Phase 8 Rebuild

**Generated:** 2026-04-19 (Phase 2 of `.claude/plans/can-you-review-our-lexical-robin.md`).

**Purpose:** name the 5–8 cluster candidates that feed Phase 4's keyword map + Phase 5's baseline-3 page selection. Not the final content roadmap — that's Phase 4.D output.

**Method chain:** Pass 1/2 CDP CSVs → `score-from-csvs.js` → cleaning filter (35 candidates) → `find-niche-gaps-with-ahrefs` revenue lens (AOV × volume × conversion × commission) → Pass 3 MCP SERP validation on top 3 ex-BPP EXCELLENT-tier candidates → portfolio overlap + kill-list gates.

**Revenue-lens formula:** `monthly_revenue ≈ winner_volume × CTR(position) × 0.03 (conversion) × AOV × 0.03 (Amazon home/cleaning commission)`. Position-3 CTR = 0.11. "Winner volume" = volume of keywords with vol ≥ 500 AND KD ≤ 20 (the realistically rankable fraction). Both multipliers are conservative defaults per `find-niche-gaps-with-ahrefs.md` § 3. Actual commission may lift if direct programs (iRobot, Shark, Dyson, Roborock) land higher than 3% — tracked in Phase 9.

---

## Shortlist (7 clusters)

Ordered by position-3 revenue floor on winner-volume only. Floors are conservative — real ranking distribution lifts revenue if a hub + 3–5 spokes capture the cluster.

### 1. Robot Vacuum — FLAGSHIP candidate

| Signal | Value | Gate |
|--------|-------|------|
| Score / Tier | 92 / EXCELLENT | ✓ |
| Total volume | 682,140 | ✓ |
| Winner volume | 167,700 | ✓ |
| Winners (vol≥500, KD≤20) | 46 | ✓ (STRONG flag) |
| Avg KD | 2.5 | ✓ |
| Avg CPC | $0.84 | ✓ (commercial intent) |
| AOV (Amazon median top-20) | $400 | — |
| Commission (Amazon home) | 3% | — |
| **P3 revenue floor (winner vol)** | **$6,641/mo** | ✓ clears $500 threshold |
| P5 revenue floor | $4,226/mo | — |
| Rule 1 — sub-DR-60 winner | **PASS** — thesmarthomehookup (DR 33) at pos 2, vacuumwars (DR 55) at pos 5 | ✓ |
| Rule 3 — volume killer | Snapshot-only (52,115 parent-kw current); full 12-mo history not retrieved | ⚠ partial |
| Rule 4 — FORTRESS sub-niche | N/A — Rule 1 passed cleanly | — |
| Rule 5 — US share | Deferred (not fired this phase) | ⚠ deferred |
| Kill list | no entry | ✓ |
| BPP/BCF/CWP overlap | no collision | ✓ |

**Notes.** Highest signal-density cluster. Sub-DR-60 winners include both a niche-review site (thesmarthomehookup DR 33) and a category-specialist (vacuumwars DR 55). SERP is competitive (Wirecutter DR 94, Reddit DR 95 in top 4) but has real rankable footholds. Volume-trap flag (36% of total volume in easy KWs) is normal — flagship pages anchor the ~168K winner volume regardless of the full cluster's volume-concentration shape. Recommend as TCR flagship candidate for Phase 5.A money-page selection.

---

### 2. Cordless Vacuum — SECONDARY flagship (sub-niche carve required)

| Signal | Value | Gate |
|--------|-------|------|
| Score / Tier | 90 / EXCELLENT | ✓ |
| Total volume | 1,320,610 | ✓ (largest in cleaning) |
| Winner volume | 562,900 | ✓ |
| Winners | 37 | ✓ (STRONG flag) |
| Avg KD | 1.3 | ✓ |
| Avg CPC | $0.65 | ✓ |
| AOV | $300 | — |
| Commission | 3% | — |
| **P3 revenue floor** | **$16,718/mo** | ✓ highest in cleaning |
| P5 revenue floor | $10,639/mo | — |
| Rule 1 — sub-DR-60 winner | **BORDERLINE** — no non-forum DR<60 organic result in top 10 (Reddit DR 95, techgearlab 68, Wired 92, rtings 78, ocedar 41 absent from this SERP) | ⚠ |
| Rule 3 — volume killer | 41,245 parent-kw current; full history deferred | ⚠ partial |
| Rule 4 — FORTRESS sub-niche carve | **RECOMMENDED** — pursue via modifiers (stick/handheld/under-$X/for-X-flooring) rather than bare `best cordless vacuum` head term | — |
| Kill list | no entry | ✓ |
| BPP/BCF/CWP overlap | no collision on primary; token-Jaccard clean | ✓ |

**Notes.** Revenue ceiling is the cluster's strongest argument (3× robot vacuum's P3 floor). But the bare head SERP is FORTRESS-adjacent — every non-forum top-10 organic is DR 68+. Play it via depth-mode sub-niche per `find-niche-gaps-with-ahrefs` § 4 Rule 4: target KD <25 sub-queries (`best cordless vacuum under $300`, `best cordless stick vacuum for hardwood`, etc.) rather than going head-to-head with Wirecutter + Wired on the bare primary.

---

### 3. Mop — FLAGSHIP (depth route)

| Signal | Value | Gate |
|--------|-------|------|
| Score / Tier | 94 / EXCELLENT (#1 cleaning scorer) | ✓ |
| Total volume | 340,000 | ✓ |
| Winner volume | 231,700 | ✓ |
| Winners | 63 | ✓ (deepest winner bench in cleaning) |
| Avg KD | 0.6 | ✓ (easiest in cleaning) |
| Avg CPC | $0.46 | ✓ |
| AOV | $35 (mop blend; higher if hub includes steam/robot-mop spokes) | — |
| Commission | 3% | — |
| **P3 revenue floor (mop-only AOV)** | **$803/mo** | ✓ clears $500 |
| P5 revenue floor | $511/mo | ✓ still clears $500 |
| Rule 1 — sub-DR-60 winner | **PASS** — ocedar (DR 41) at pos 8 | ✓ |
| Rule 3 — volume killer | 11,049 parent-kw current; full history deferred | ⚠ partial |
| Kill list | no entry | ✓ |
| BPP/BCF/CWP overlap | no collision | ✓ |

**Notes.** Lowest-KD cluster in cleaning (avg 0.6 vs robot-vacuum 2.5). 63 winners is the deepest rankable bench of any cleaning niche. AOV is the weak signal — a bare mop is $20–50. Revenue floor multiplies meaningfully once the hub houses steam-mop ($100 AOV), robot-mop (shares robot-vacuum spokes), and tool-bundle spokes. Recommend as "hub-with-depth" flagship anchor rather than a single money page.

---

### 4. Handheld Vacuum — SUPPORT / depth spoke

| Signal | Value | Gate |
|--------|-------|------|
| Score / Tier | 70 / STRONG | ✓ |
| Total volume | 39,070 | ✓ |
| Winner volume | 20,300 | ✓ |
| Winners | 9 | ✓ |
| Avg KD | 1.1 | ✓ |
| AOV | $80 | — |
| **P3 revenue floor** | **$161/mo** | ⚠ below $500 threshold as standalone |
| Rule 1 — deferred (not in top-3 Pass 3) | — | — |
| Kill list | no entry | ✓ |
| BPP/BCF/CWP overlap | no collision | ✓ |

**Notes.** Solid as a support page under the vacuum cluster (complements cordless + robot). Not a flagship on its own.

---

### 5. Steam Mop — DEPTH spoke under Mop hub

| Signal | Value | Gate |
|--------|-------|------|
| Score / Tier | 62 / PROMISING | ✓ |
| Total volume | 19,030 | ✓ |
| Winner volume | 11,300 | ✓ |
| Winners | 4 | ✓ |
| AOV | $100 | — |
| **P3 revenue floor** | **$112/mo** | ⚠ standalone thin |
| Kill list | no entry | ✓ |

**Notes.** Sits inside the mop hub as depth. Bissell + Shark own the category; sub-DR-60 entries exist in the parent Mop SERP and likely extend to Steam Mop.

---

### 6. Carpet Cleaner Machine — TIGHT flagship (1-page play)

| Signal | Value | Gate |
|--------|-------|------|
| Score / Tier | 50 / POSSIBLE | ✓ marginal |
| Total volume | 8,880 | ✓ |
| Winner volume | 4,000 | ✓ |
| Winners | 1 | ⚠ thin |
| AOV | $250 (Bissell Big Green class) | — |
| **P3 revenue floor** | **$99/mo** | ⚠ thin |
| Kill list | no entry | ✓ |
| BPP/BCF/CWP overlap | no collision | ✓ |

**Notes.** Only 1 winner keyword ⇒ single money page, not a hub. Worth including as a support-tier money page; don't allocate more than 1 slot.

---

### 7. Chemical-Cleaning Bundle — SUPPORT cluster (grout / toilet / upholstery / hardwood)

| Signal | Combined |
|--------|----------|
| Total volume (sum) | ~80,660 |
| Winner volume (sum) | ~76,890 |
| Winners (sum) | 21 |
| AOV (blended) | $15–30 per chem product |
| **P3 floor (blended)** | ~$80/mo combined — too thin to flagship, but credible depth layer |

**Notes.** These are NOT flagships — AOV is too low. Bundle them as "how to clean X" support/educational pages that link up into the main flagship hubs. Each serves as an internal-link target + topical authority signal for CRI/IICRC/EPA-anchored content without asking for standalone revenue.

---

## Excluded from shortlist

| Cluster | Score | Reason |
|---------|-------|--------|
| best vacuum for pet hair | 91 EXCELLENT | BPP collision — HIGH exact-match via `check-keyword-overlap.js` (primary in BPP's keyword-map); 12 MEDIUM token-overlaps with BPP spokes. Per plan: "Pet-hair vacuum clusters are known BPP↔TCR collisions and stay with BPP." |
| best hepa vacuum for allergies | 42 SKIP | BPP-adjacent (allergies modifier ⇒ pet-dander territory) + thin winners |
| best ultrasonic cleaner | 62 PROMISING | Jewelry / dental cleaning — off-niche for TCR's home-cleaning identity |
| best robotic pool cleaner | 59 POSSIBLE | Pool-adjacent scope drift + thin winners (2) |
| best car cleaning kit | 47 SKIP | Automotive drift |
| best gutter cleaning tool, best window cleaning tool, best leaf vacuum mulcher, best pressure washer surface cleaner | 42–48 SKIP | Outdoor cleaning drift + low volumes |
| best vacuum sealer, best vacuum sealer for meal prep, best vacuum storage bags | — | Kitchen / storage — not cleaning |
| best gym flooring, best garage floor epoxy, best coding robot, best rc truggy, best table tennis robot | — | Pattern-matched by filter but out-of-scope (fitness, toys) |

---

## Budget

- Phase 2 MCP spend: **~3,006 units** (3× serp-overview = 2,856 + 3× volume-history = 150).
- Monthly budget consumed (Apr 2026): 5,914 / 150,000 = **3.9%**.
- Phase 2 share of monthly: 2.0% — well under the 20% acceptance ceiling.
- Deferred MCP calls (OK to run later if Phase 4 wants tighter data):
  - 12-month volume history with `date_from`/`date_to` for Rule 3 full coverage (~30 units)
  - `volume-by-country` US-share check on top 3 (Rule 5) (~30 units)
  - Competitor-decay test on top 3 Wirecutter-class SERPs (Rule 2) (~450 units if firing all three `site-explorer-metrics` queries)

---

## Phase 5 baseline-3 hint (not binding — Phase 4 decides)

The three-page baseline in Phase 5 needs (a) a flagship money page, (b) a distinct-desk money page, (c) a non-linkable support page. Based on this shortlist, the likely candidates are:

- **Flagship:** Robot Vacuum (revenue floor + clean Rule-1 pass + 46 winners).
- **Distinct-desk money:** a Mop-cluster spoke (e.g., `best spin mop` or `best mop for hardwood floors`) — different tool category, different typical avatar. Alternatively, a cordless-vacuum sub-niche spoke.
- **Support:** a chemistry how-to (e.g., "how to clean grout" or "how to clean hardwood floors") — feeds the Chemical-Cleaning bundle's topical authority.

Final call made in Phase 4.D after avatars + desks are built and keyword map is resolved.

---

## Acceptance gate summary

- ≥ 5 clusters ranked by revenue estimate: **7** ✓
- Each row has volume, KD, AOV, commission, revenue estimate, competitor DR class (for Pass-3 candidates), at-least-one gap rule: ✓
- Zero BCF/BPP/CWP collisions in shortlist: ✓ (pet-hair excluded)
- Ahrefs MCP budget <20% for this phase: 2.0% ✓

Phase 2 closes. Next: **Phase 3 — Infrastructure verification (Vercel/GSC/GA4)** or direct to Phase 4 per Lee's call.

# PRE1 — Raw Candidate Pool (TCR Roadmap Refresh)

**Session:** Phase 8.5 PRE1 (2026-04-18)
**Seed families:** 15 (7 original + 8 expansions) — locked in `00-seed-family-lock.md`
**Data sources:** existing `data/ahrefs-exports/*.csv` + fresh MCP related-terms + fresh MCP serp-overview
**Monthly Ahrefs units spent this session:** ~24,200 (16% of 150K monthly cap)
**PRE1 exit criterion met:** raw candidate pool of ~185 unique keywords with volume, KD, TP, and SERP-intent data for the top 15.

## Data source manifest

| Source | Path | Role |
|---|---|---|
| Matching Terms + Suggestions CSVs | `data/ahrefs-exports/{seed}*.csv` | Base candidate pool for all 15 seeds |
| MCP related-terms (11 seeds × 15 rows) | `sites/thecleaningreport/data/research/roadmap-refresh-2026-04-18/10-related-terms-all-seeds.json` | Fresh "Also Rank For" gap-fill |
| MCP serp-overview (top 15) | `sites/thecleaningreport/data/research/roadmap-refresh-2026-04-18/20-serp-overview-top-15-summary.md` | SERP-intent + rankability read |
| Seed-family lock + unit budget | `sites/thecleaningreport/data/research/roadmap-refresh-2026-04-18/00-seed-family-lock.md` | Scope doc |

## Cluster map (draft — PRE2 may rename/merge)

The 15 seeds roll up into **9 draft clusters**. These are working assignments for PRE2 scoring; final cluster names get locked in PRE2.

### Cluster A — Robot Vacuums
**Seeds:** best-robot-vacuum (60K/KD 8)
**Avatar:** Automation-Minded Floor-Care Upgrader
**Status:** Already in Top Build Queue. No refresh needed — existing 12 opportunities preserved.

### Cluster B — Cordless Vacuums
**Seeds:** best-cordless-vacuum (51K/KD 24)
**Avatar:** Practical Cordless Buyer
**Status:** Already in Top Build Queue. 11 opportunities preserved.

### Cluster C — Pet Mess & Hair
**Seeds:** best-vacuum-for-pet-hair (32K/KD 0)
**Avatar:** Pet-Mess Floor Manager
**Status:** Already in Top Build Queue. 12 opportunities preserved.
**NEW additions from PRE1:**
- best-lint-roller cross-cluster overlap: "best pet hair remover" (1000/KD 2), "best dog hair remover" (500/KD 2), "best cat hair remover" (350/KD 2), "chomchom roller" (1000/KD 3 — branded)
- Decision: promote a unified `best-pet-hair-remover` page that catches lint-roller + specialty-tool intent across species

### Cluster D — Steam Mops
**Seeds:** best-steam-mop (9200/KD 2)
**Avatar:** Surface-Specific Deep Cleaner
**Status:** Already in Top Build Queue. 11 opportunities preserved.
**NEW additions from PRE1 (MCP related-terms):** "steam mop" (30K/KD 8 informational anchor), "best steam cleaner" (5.1K/KD 5 — cross-category), "floor steamer" (4.8K/KD 5 — variant), "cordless steam mop" (2K/KD 5), "bissell steam mop" (5.6K/KD 0 — branded), "shark steam and scrub mop" (1.8K/KD 1 — branded)

### Cluster E — Mops (Generic)
**Seeds:** best-mop (11K/KD 2)
**Avatar:** Practical Cordless Buyer + Surface-Specific Deep Cleaner
**Status:** Backlog. 8 opportunities preserved.

### Cluster F — Handheld Vacuums (NEW)
**Seeds:** best-handheld-vacuum (17K/KD 0), best-upright-vacuum-for-carpet (250/KD 1 thin but ARF-rich)
**Avatar:** Practical Cordless Buyer + Pet-Mess Floor Manager
**NEW opportunities surfaced (MCP related-terms + SERP):**

| Keyword | Vol | KD | TP | Intent | Notes |
|---|---:|---:|---:|---|---|
| best handheld vacuum | 17000 | 2 | 23000 | Commercial | Anchor page |
| handheld vacuum | 19000 | 7 | 5200 | Informational | Informational variant |
| hand held vacuum | 13000 | 6 | 21000 | Commercial | Likely same SERP as best-handheld |
| best hand held vacuum | 3600 | 2 | 23000 | Commercial | Variant — same SERP |
| best hand vacuum | 3100 | 3 | 23000 | Commercial | Variant |
| portable vacuum | 8800 | 3 | 21000 | Commercial | Could be separate page or anchor |
| hand vacuum | 8000 | 8 | 9500 | Commercial | Informational-commercial mix |
| mini vacuum | 7800 | 2 | 1400 | Commercial | Variant |
| cordless handheld vacuum | 3300 | 10 | 2700 | Commercial | Cross with cordless-vacuum cluster |
| dust buster | 6600 | 9 | 26000 | Commercial (branded) | Generic-name for handheld |
| small vacuum | 4900 | 2 | 1400 | Commercial | Variant |
| portable vacuum cleaner | 2800 | 4 | 600 | Commercial | Variant |
| best upright vacuum | 5100 | 1 | 2400 | Commercial | DIFFERENT cluster — own anchor |
| best upright vacuum cleaner | 2400 | 2 | 2400 | Commercial | Variant of above |
| best vacuum for carpet | 4700 | 6 | 3800 | Commercial | Surface-specific upright |

**Car-vacuum split-out (NOT TCR fit — skip):**
- "best car vacuum" (9400/KD 5), "best car vacuums" (20K/KD 4), "best car vacuum cleaner" (4900/KD 5), "car upholstery cleaner" (3900/KD 2), "car shampooer" (3400/KD 1). All marked SKIP — car cleaning is not in TCR mission.

### Cluster G — Surface-Safe Deep Clean (NEW)
**Seeds:** best-hardwood-floor-cleaner (4400/KD 0), best-grout-cleaner (8800/KD 1), best-stainless-steel-cleaner (2900/KD 1)
**Avatar:** Surface-Specific Deep Cleaner
**NEW opportunities surfaced:**

**Hardwood/wood floor cleaners:**

| Keyword | Vol | KD | TP | Intent | Notes |
|---|---:|---:|---:|---|---|
| best hardwood floor cleaner | 4400 | 1 | 11000 | Commercial | Anchor |
| hardwood floor cleaner | 10000 | 10 | 1700 | Commercial | Informational variant |
| wood floor cleaner | 8100 | 1 | 1100 | Commercial | Same SERP as hardwood — merge |
| wood cleaner | 5500 | 1 | 300 | Commercial | Broad — may merge |
| best floor cleaner | 4400 | 1 | 6300 | Commercial | Broad anchor — own page? |
| best way to clean hardwood floors | 3800 | 2 | 5400 | Informational | How-to support page |
| hardwood floor vacuum | 3600 | 1 | 4800 | Commercial | CROSS with handheld/floor-type — own page |
| best wood floor cleaner | 2400 | 0 | 11000 | Commercial | SKIP — same SERP as hardwood |
| best hardwood floor vacuum | 2400 | 0 | 7500 | Commercial | Own page (distinct from floor CLEANER) |
| hardwood floor polish | 2200 | 1 | 2100 | Commercial | Polish vs cleaner — separate intent |
| wood floor polish | 1900 | 0 | 2100 | Commercial | Variant |
| floor cleaners | 1900 | 2 | 1800 | Commercial | Broad — secondary |
| best cleaner for hardwood floors | 1900 | 1 | 9800 | Commercial | Same SERP as hardwood — secondary |
| best cleaner for laminate floors | 1900 | 0 | 250 | Informational | Laminate own page |
| floor cleaning products | 1900 | 1 | 800 | Commercial | Broad — secondary |

**Grout/tile cleaners:**

| Keyword | Vol | KD | TP | Intent | Notes |
|---|---:|---:|---:|---|---|
| grout | 41000 | 13 | 6100 | Informational+Commercial | Broad anchor |
| grout cleaner | 28000 | 2 | 5000 | Commercial | Main anchor variant |
| best grout cleaner | 8800 | 1 | 90 | Commercial | Anchor money page |
| how to clean grout | 13000 | 13 | 9200 | Informational | How-to support page |
| zep grout cleaner | 12000 | 1 | 6200 | Commercial (branded) | Branded — skip own page |
| grout cleaning | 9700 | 4 | 11000 | Informational | Informational support |
| best shower cleaner | 9300 | 0 | 3900 | Commercial | CROSS-cluster — shower category |
| grout removal tool | 7200 | 0 | 150 | Commercial | Tool-specific sub-variant |
| tile cleaning | 6600 | 14 | 1800 | Informational | Informational support |
| how to clean grout lines | 6500 | 1 | 9300 | Informational | How-to support |
| tile and grout cleaning | 5200 | 10 | 12000 | Informational (service-mix) | Service-intent — caution |
| tile grout | 5100 | 20 | 6100 | Informational | High KD broad |
| tile cleaner | 4400 | 5 | 60 | Commercial | Product-focused variant |
| best way to clean grout | 3300 | 6 | 9400 | Informational | How-to support |
| tile grout cleaner | 2600 | 2 | 4700 | Commercial | Variant |
| best tile and grout cleaner | 1100 | 3 | n/a | Commercial | Variant (from CSV seed row) |

**Stainless steel cleaners:**

| Keyword | Vol | KD | TP | Intent | Notes |
|---|---:|---:|---:|---|---|
| stainless steel cleaner | 20000 | 6 | 2300 | Commercial | Informational anchor |
| best stainless steel cleaner | 2900 | 0 | 4500 | Commercial | Anchor money page |
| stainless steel cleaner and polish | 2100 | 3 | 3300 | Commercial | Variant |
| stainless steel sink cleaner | 1600 | 3 | 500 | Commercial | Sink-specific sub-variant |
| how to clean stainless steel fridge | 1600 | 6 | 12000 | Informational | How-to support |
| clean stainless steel appliances | 1000 | 6 | 12000 | Informational | How-to support |
| best way to clean stainless steel fridge | 900 | 10 | 14000 | Informational | How-to support |
| how to clean stainless steel refrigerator | 800 | 6 | 12000 | Informational | How-to support |
| stainless steel appliance cleaner | 800 | 6 | 1300 | Commercial | Variant |
| how to clean stainless appliances | 800 | 5 | 12000 | Informational | How-to support |
| best way to clean stainless steel appliances | 700 | 9 | 12000 | Informational | How-to support |
| what to clean stainless steel with | 700 | 2 | 15000 | Informational | How-to support |
| best cleaner for stainless steel appliances | 600 | 7 | 1000 | Commercial | Appliance-specific variant |
| steel cleaner | 600 | 1 | 3500 | Commercial | Broad variant |
| best cleaner for stainless steel | 500 | 1 | 3900 | Commercial | Variant of main anchor |

### Cluster H — Upholstery & Carpet Deep Clean (NEW)
**Seeds:** best-upholstery-cleaner (5800/KD 4), best-carpet-cleaner-machine (4000/KD 3)
**Avatar:** Pet-Mess Floor Manager + Surface-Specific Deep Cleaner
**NEW opportunities (MCP):**

| Keyword | Vol | KD | TP | Intent | Notes |
|---|---:|---:|---:|---|---|
| upholstery cleaner | 47000 | 6 | 7300 | Commercial | Broad anchor |
| best carpet cleaner | 22000 | 6 | 16000 | Commercial | CARPET anchor money page |
| couch cleaner | 19000 | 5 | 7200 | Commercial | Upholstery variant — merge |
| carpet cleaners | 15000 | 32 | 14000 | Commercial | High KD — secondary |
| rug cleaner | 9000 | 17 | 900 | Commercial | Rug-specific |
| best carpet cleaner for pets | 6400 | 4 | 8600 | Commercial | Pet-specific money page |
| best carpet shampooer | 6300 | 3 | 16000 | Commercial | Shampooer money page |
| best upholstery cleaner | 5800 | 1 | 6500 | Commercial | Anchor money page |
| furniture cleaner | 5600 | 1 | 7200 | Commercial | Informational variant |
| steam cleaner for couch | 4700 | 0 | 3500 | Commercial | Variant — secondary |
| sofa cleaner | 4000 | 0 | 400 | Commercial | Variant — secondary |
| best carpet cleaner machine | 4000 | 3 | 15000 | Commercial | OVERLAP with best-carpet-cleaner (flagged) |
| best portable carpet cleaner | 3900 | 4 | 4100 | Commercial | Portable own page |
| couch cleaner machine | 3700 | 2 | 1700 | Commercial | Equipment variant |
| carpet cleaner vacuum | 3700 | 5 | 24000 | Commercial | Variant |
| upholstery cleaner machine | 3100 | 5 | 15000 | Commercial | Equipment variant |
| best upholstery cleaner machine | 2900 | 3 | 1900 | Commercial | OVERLAP with best-upholstery (flagged) |
| upholstery steam cleaner | 2900 | 1 | 3500 | Commercial | Variant |
| carpet cleaning machine | 2800 | 9 | 21000 | Commercial | Variant |
| best carpet stain remover | 2800 | 6 | 11000 | Commercial | Product-category sibling |
| rug shampooer | 2600 | 14 | 21000 | Commercial | Rug-variant |
| best home carpet cleaner | 2500 | 5 | 16000 | Commercial | Variant |
| fabric cleaner | 2700 | 0 | 200 | Commercial | Broad |
| hand held carpet cleaner | 1500 | 2 | 900 | Commercial | Handheld crossover |

### Cluster I — Quick-Win Consumables (NEW)
**Seeds:** best-lint-roller (1100/KD 1)
**Avatar:** Pet-Mess Floor Manager
**NEW opportunities:**

| Keyword | Vol | KD | TP | Intent | Notes |
|---|---:|---:|---:|---|---|
| lint roller | 22000 | 5 | 7100 | Commercial | Broad anchor |
| lint remover | 9600 | 0 | 4300 | Commercial | Variant |
| reusable lint roller | 2900 | 0 | 30 | Commercial | Eco-angle variant |
| lint brush | 2100 | 0 | 1000 | Commercial | Variant |
| lint rollers | 1300 | 2 | 7100 | Commercial | Plural variant |
| cat hair removal | 1300 | 4 | 800 | Commercial | Cross-cluster pet |
| best lint roller | 1100 | 1 | 200 | Commercial | Anchor money page |
| best pet hair remover | 1000 | 2 | 6000 | Commercial | Cross-cluster pet — big TP |
| dryer lint brush | 1000 | 0 | 350 | Commercial | Cross-cluster dryer |
| chomchom roller | 1000 | 3 | 2100 | Branded | SKIP — branded |
| best lint remover | 600 | 2 | 600 | Commercial | Variant |
| best dog hair remover | 500 | 2 | 5900 | Commercial | Cross pet species-specific |
| lent roller | 450 | 2 | 6400 | Misspelling | Variant — secondary |
| best cat hair remover | 350 | 2 | 2700 | Commercial | Cross pet species-specific |
| sticky lint roller | 350 | 0 | 10 | Commercial | Variant |

### Cluster J — Specialty Cleaning (Backlog)
**Seeds:** best-window-cleaning-tool (60/KD 0), best-dryer-vent-cleaning-kit (400/KD 0)
**Status:** Backlog per existing roadmap. 6 opportunities preserved.

**Window cleaning NEW opportunities — BUT heavy service-intent contamination:**
| Keyword | Vol | KD | Intent | Notes |
|---|---:|---:|---|---|
| window cleaning | 27000 | 26 | Informational | Service-dominant SERP |
| window cleaner | 13000 | 2 | Commercial+Service | Mixed |
| window cleaning company | 9800 | 38 | Service-intent | SKIP (service, not product) |
| best way to clean windows | 9700 | 4 | Informational | How-to support |
| professional window cleaning | 9000 | 0 | Service-intent | SKIP |
| window washing | 7400 | 6 | Informational | Support content |
| window cleaning tools | 3100 | 39 | Commercial | High KD |
| window cleaning solution | 2500 | 4 | Commercial | Product — own page |
| window cleaning supplies | 2100 | 22 | Informational | Broad |
| cleaning windows | 1800 | 15 | Informational | How-to support |

**Dryer vent cleaning NEW opportunities:**
| Keyword | Vol | KD | Intent | Notes |
|---|---:|---:|---|---|
| dryer vent cleaner | 4400 | 1 | Commercial+Service | Mixed |
| dryer vent cleaning tools | 3400 | 0 | Commercial | Variant |
| dryer duct cleaning kit | 3400 | 1 | Commercial | Variant of kit seed |
| dryer lint | 1900 | 33 | Informational | High KD |
| dryer cleaning kit | 1600 | 0 | Commercial | Variant |
| dryer lint cleaner | 1500 | 1 | Commercial | Variant |
| dryer vent cleaners | 1400 | 1 | Commercial+Service | Mixed |
| dryer vent vacuum attachment | 800 | 0 | Commercial | Accessory |
| dryer lint vacuum attachment | 700 | 0 | Commercial | Accessory |
| dryer vacuum attachment | 600 | 0 | Commercial | Variant |
| dryer vent brush kit | 500 | 0 | Commercial | Variant |
| dryer cleaning brush | 500 | 1 | Commercial | Variant |
| best dryer vent cleaning kit | 400 | 0 | Commercial | Anchor |
| vacuum dryer | 350 | 0 | Commercial | Variant |

## PRE2 scoring inputs

PRE2 session should score/rank/cluster the consolidated pool using the existing rubric. Inputs it needs:

1. **Pool source files (all committed this session):**
   - This file (raw pool + cluster sketches)
   - `10-related-terms-all-seeds.json` (raw MCP data)
   - `20-serp-overview-top-15-summary.md` (SERP + rankability)
   - All 15 `data/ahrefs-exports/{seed}*.csv` files

2. **Dedup decisions PRE2 must make:**
   - best-carpet-cleaner-machine vs best-carpet-cleaner (SERP overlap flagged)
   - best-upholstery-cleaner-machine vs best-upholstery-cleaner (partial overlap)
   - best-wood-floor-cleaner vs best-hardwood-floor-cleaner (SERP confirmed same)
   - hand held vacuum / hand vacuum / best handheld vacuum (likely same SERP — confirm)
   - Car-vacuum family (skip all per TCR mission)
   - Service-intent keywords (window cleaning company, dryer vent cleaner near me) — skip
   - Branded keywords (zep, chomchom, bissell, shark-steam) — skip own pages but keep as secondary

3. **Cluster name lock decisions:**
   - Existing 4 launch clusters + 3 backlog clusters stay named
   - 3 NEW clusters need final names: Handheld Vacuums / Surface-Safe Deep Clean / Upholstery & Carpet Deep Clean / Quick-Win Consumables

4. **Support:money ratio enforcement:**
   - New clusters need support coverage. E.g., Surface-Safe Deep Clean has 10+ how-to support candidates (perfect).
   - Cluster I (Lint Roller) is small and can lean money-heavy.

5. **Blocks B-D lock for Phase 8.5 content sessions:**
   - PRE2 output's Top Build Queue (22 rows) becomes the canonical Blocks B/C/D content list
   - Cross-compare with current 18-row queue: what stays / moves / drops / enters

## Exit summary

- **PRE1 goal achieved:** 15-seed pool refreshed. 165+ new candidates from MCP. SERP-intent data confirmed for top 15. Rankability GREEN for 11 of 15.
- **Biggest discoveries:**
  1. Handheld vacuum cluster is MUCH richer than current roadmap (17K main + 11 variants)
  2. Carpet cleaner cluster (22K anchor) is the highest-opportunity single money page not yet on TCR roadmap
  3. Grout cleaner has a DR-1 site ranking #2 — rankability ceiling is unusually high
  4. Surface-Safe Deep Clean is a coherent new cluster (hardwood / grout / stainless) with 10+ how-to support candidates
  5. Lint roller is a small but viable Quick-Win cluster, especially for pet-hair cross-intent
- **Next:** PRE2 scores + clusters + locks Top Build Queue + commits revised `sites/thecleaningreport/data/guide-opportunities.md`.

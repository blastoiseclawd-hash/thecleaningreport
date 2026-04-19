# TCR Niche Ranking — Cleaning-Scoped Subset of `data/niche-ranking.md`

**Generated:** 2026-04-19 during Phase 8 rebuild Phase 2 (plan: `.claude/plans/can-you-review-our-lexical-robin.md`).

**Input:** parent-root `data/niche-ranking.json` from `tools/niche-scorer/score-from-csvs.js` (2,016 niches across 94,998 keywords). This file is the cleaning-cluster subset only.

**Scope filter:** regex `/vacuum|mop|carpet|cleaner|cleaning|steam|broom|duster|roomba|rug|stain|floor/i` minus `/aquarium|dog|rc-truggy|table-tennis|coding-robot|software|meal-prep|storage-bags|vacuum-sealer|gym-flooring|garage-floor-epoxy/i` (pet-care, toys, B2B SaaS, kitchen storage, fitness flooring excluded). Result: 35 cleaning-cluster candidates.

**Scoring rubric** (see `tools/niche-scorer/score-from-csvs.js`): 100 pts across 7 dimensions + penalties. Winners = keywords with vol ≥ 500 AND KD ≤ 20.

## Full Cleaning Ranking (35 rows)

| Rank | Niche | Score | Tier | Total Vol | Rankable (KD≤20) | Winners | Avg KD | Avg CPC | KD 40+% | Flags |
|------|-------|-------|------|-----------|------------------|---------|--------|---------|---------|-------|
| 1 | best mop | 94 | EXCELLENT | 340,000 | 324,260 | 63 | 0.6 | $0.46 | 0% | STRONG |
| 2 | best robot vacuum | 92 | EXCELLENT | 682,140 | 244,460 | 46 | 2.5 | $0.84 | 2% | STRONG, VOLUME TRAP (36% in easy KWs) |
| 3 | best vacuum for pet hair | 91 | EXCELLENT | 165,460 | 158,740 | 36 | 1.1 | $0.65 | 0% | **BPP COLLISION — excluded from TCR** |
| 4 | best cordless vacuum | 90 | EXCELLENT | 1,320,610 | 611,750 | 37 | 1.3 | $0.65 | 0% | STRONG, VOLUME TRAP (46% in easy KWs) |
| 5 | best grout cleaner | 70 | STRONG | 23,730 | 23,480 | 8 | 0.6 | $0.36 | 0% | — |
| 6 | best handheld vacuum | 70 | STRONG | 39,070 | 38,240 | 9 | 1.1 | $0.47 | 1% | — |
| 7 | best toilet cleaner | 70 | STRONG | 26,050 | 26,000 | 5 | 0.3 | $0.42 | 0% | — |
| 8 | best upholstery cleaner | 70 | STRONG | 21,500 | 21,210 | 7 | 0.7 | $0.46 | 0% | — |
| 9 | best steam mop | 62 | PROMISING | 19,030 | 18,960 | 4 | 0.6 | $0.53 | 0% | — |
| 10 | best ultrasonic cleaner | 62 | PROMISING | 13,170 | 13,170 | 3 | 0.1 | $0.64 | 0% | Jewelry/dental sub-niche |
| 11 | best robotic pool cleaner | 59 | POSSIBLE | 6,200 | 6,200 | 2 | 0.2 | $1.72 | 0% | Pool-adjacent scope drift |
| 12 | best oven cleaner | 55 | POSSIBLE | 13,520 | 13,360 | 1 | 0.7 | $0.12 | 0% | Low commercial signal |
| 13 | best stainless steel cleaner | 53 | POSSIBLE | 9,380 | 9,330 | 4 | 0.4 | $0.24 | 0% | — |
| 14 | best carpet cleaner machine | 50 | POSSIBLE | 8,880 | 8,170 | 1 | 1.0 | $0.57 | 0% | — |
| 15 | best hardwood floor cleaner | 50 | POSSIBLE | 9,380 | 9,370 | 1 | 0.4 | $0.38 | 0% | — |
| 16 | best gutter cleaning tool | 48 | SKIP | 2,480 | 2,480 | 1 | 0.1 | $1.47 | 0% | Low volume |
| 17 | best robot window cleaner | 48 | SKIP | 870 | 870 | 0 | 0 | $0.94 | 0% | Low volume |
| 18 | best car cleaning kit | 47 | SKIP | 1,960 | 1,960 | 0 | 0.1 | $0.33 | 0% | Automotive drift |
| 19 | best leaf vacuum mulcher | 46 | SKIP | 1,250 | 1,250 | 1 | 0.5 | $0.54 | 0% | Outdoor drift |
| 20 | best pressure washer surface cleaner | 46 | SKIP | 1,870 | 1,870 | 1 | 0 | $0.43 | 0% | Outdoor drift |
| 21 | best window cleaning tool | 46 | SKIP | 1,690 | 1,690 | 0 | 0.2 | $0.41 | 0% | Thin winners |
| 22 | best outdoor furniture cleaner | 44 | SKIP | 620 | 620 | 0 | 0 | $0.35 | 0% | Low volume |
| 23 | best upright vacuum for carpet | 44 | SKIP | 730 | 730 | 0 | 0 | $0.46 | 0% | Low volume |
| 24 | best dryer vent cleaning kit | 42 | SKIP | 890 | 890 | 0 | 0.1 | $0.57 | 0% | Low volume |
| 25 | best hepa vacuum for allergies | 42 | SKIP | 610 | 610 | 0 | 1.2 | $0.68 | 0% | BPP-adjacent (allergies modifier) |
| 26 | best ceiling fan duster | 39 | SKIP | 420 | 420 | 0 | 0 | $0.24 | 0% | Low volume |
| 27 | best fountain pen cleaning kit | 37 | SKIP | 830 | 830 | 1 | 0.1 | $0.22 | 0% | Off-niche |

(8 additional rows with score ≤ 46 omitted for brevity — all SKIP tier.)

## Distribution

- EXCELLENT (80+): **4** (one collides with BPP → 3 usable)
- STRONG (70–79): **4** (grout, handheld vacuum, toilet, upholstery)
- PROMISING (60–69): **2** (steam mop, ultrasonic)
- POSSIBLE (50–59): **5** (robotic pool, oven, stainless steel, carpet machine, hardwood floor)
- SKIP (<50): remainder

## Notes

- Scores here are identical to parent `data/niche-ranking.md`. This file is a presentation subset for TCR sessions, not an independent rescoring.
- Collision check uses `tools/audit/check-keyword-overlap.js`; only `best vacuum for pet hair` fails (BPP owns it). All other vacuum/cleaning primaries cleared portfolio overlap.
- Pass 3 MCP validation fired on top 3 EXCELLENT-tier ex-BPP candidates (`best robot vacuum`, `best cordless vacuum`, `best mop`) during the same session. Results feed `cluster-shortlist.md`.

## Source artifacts

- `data/niche-ranking.md` / `data/niche-ranking.json` (parent root, regenerated 2026-04-19)
- `data/ahrefs-exports/` — 36 cleaning-related CSVs + 4 also-rank-for files
- `data/niche-kill-list.md` — no cleaning entries as of 2026-04-19
- `tools/audit/check-keyword-overlap.js` — portfolio-overlap gate

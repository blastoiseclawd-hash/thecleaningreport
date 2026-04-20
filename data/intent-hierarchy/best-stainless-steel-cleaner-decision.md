# Intent-Hierarchy Decision: `/best-stainless-steel-cleaner`

**Decided:** 2026-04-20 (Phase 7 Session A Page 4 of `.claude/plans/can-you-review-our-lexical-robin.md`).

## Role declaration

**Role:** `primary_commercial` (canonical hub for stainless steel cleaner category)

Safe Surface / Surface Protector commercial spoke #3 in the Chemical Bundle cluster. Sibling to `/best-hardwood-floor-cleaner` (Page 1, LIVE 2026-04-20) and `/best-grout-cleaner` (Page 3, LIVE 2026-04-20), same desk + avatar, different surface. Completes the Surface Protector chemistry trio (hardwood + grout + stainless steel). No sub-variants currently planned as separate pages — sink / cookware / refrigerator / cooktop / stove-top secondary keywords are absorbed as H2 body sections here.

## Part 1 — Primary keyword verification (against Ahrefs CSV)

Verified against `data/ahrefs-exports/best-stainless-steel-cleaner.csv` row 1:

| Field | Value |
|-------|-------|
| Keyword | best stainless steel cleaner |
| Country | US |
| Difficulty (KD) | **1** |
| Volume (US) | **2,900** |
| Global volume | 3,500 |
| Traffic potential (US) | **3,500** |
| Global traffic potential | 3,600 |
| CPC | $0.15 |
| Parent keyword | best stainless steel cleaner (self — unmodified core query) |
| SERP features | AI Overview, Thumbnail, Video preview, Sitelinks, People also ask, Discussions, Shopping, Top stories |
| Intents | Informational, Commercial, Non-branded, Non-local |
| Category | Household cleaning |
| First seen | 2015-09-03 |
| 24-month SV trend | 2,612 → 2,767, steady ~2.7-3K |

**Keyword-map JSON accurate:** row 905 logs vol 2,900 / TP 3,500 / KD 1 — matches CSV exactly. Handoff note mentioning 6.6K volume was stale; live CSV is authoritative.

## Part 2 — SERP intent-match check (same-site cannibalization)

WebSearch evidence from commercial roundup titles in SERP metadata + Ahrefs row-level SERP-features flagging (AI Overview, Shopping, Top stories, Video preview, Discussions): commercial intent dominates with tier2 editorial roundups (Good Housekeeping, The Spruce, Bob Vila, HGTV-class outlets) plus Amazon Shopping block. Informational sub-intent surfaces on "what-to-clean-stainless-steel-with" variant at row ~977 of keyword-map (vol 700) — that's a method-page and will route to a separate support page when it ships.

TCR LIVE content (2026-04-20):
- `/best-robot-vacuum` — Labor Math, robot vacuums. Zero overlap.
- `/best-cordless-vacuum` — Everyday Cleaning, cordless stick vacs. Zero overlap.
- `/best-cordless-stick-vacuum-for-hardwood` — Everyday Cleaning, hardwood-specific cordless vacuums. Zero overlap.
- `/best-hardwood-floor-cleaner` — Safe Surface, **hardwood** chemical cleaner. Different surface (wood vs metal), different SKU set (Bona / Method vs Weiman / Bar Keepers Friend / Therapy). Reciprocal-link candidate — Safe Surface sibling.
- `/best-grout-cleaner` — Safe Surface, **tile/grout** chemical cleaner. Different surface (grout vs metal), different SKU set. Reciprocal-link candidate — Safe Surface sibling.
- `/how-to-clean-hardwood-floors` — Safe Surface, hardwood METHOD support. No stainless overlap.

Cross-site overlap check:
- BPP: no stainless coverage planned. Clear.
- BCF / CWP: zero coverage on metal surface care. Clear.

## Part 3 — Variable-swap differentiation test

**N/A at the hub level.** This IS the unmodified core query. Not a variable-modified variant of another TCR page.

Test applies to variants (all currently absorbed into body H2s, not separate pages):
- `best cleaner for stainless steel appliances` (CSV row 2, KD 7, vol 600) — appliance-primary use case; body H2 + per-pick compatibility line
- `best cleaner for stainless steel` (CSV row 3, KD 1, vol 500) — synonym, absorbed naturally
- `best cleaner for stainless steel sink` (CSV row 4, KD 2, vol 450) — sink use case; body H2 "sinks + drain-board use" + compatibility note. Sink variant could split later if SKU set diverges; body coverage for now.
- `best stainless steel appliance cleaner` (CSV row 6, KD 6, vol 250) — synonym appliance, absorbed
- `best stainless steel sink cleaner` (CSV row 7, KD 5, vol 200) — sink synonym, absorbed
- `best stainless steel cleaner for appliances` (CSV row 8, KD 3, vol 150) — appliance synonym, absorbed
- `best stainless steel cookware cleaner` (CSV row 10, KD 2, vol 100) — pots/pans sub-use; body H2 "cookware + bakeware use" (Bar Keepers Friend territory)
- `best stainless steel cleaner for refrigerators` (CSV row 11, KD 2, vol 100) — fridge sub-use; body H2 "refrigerator fingerprints + water-spots"
- `best cleaner for stainless steel grill` (CSV row 12, vol 100, category=Grills) — grill sub-use; body caveat only, NOT a primary target here (outdoor grill intent diverges — WRX grill content)
- `best stainless steel cleaner and polish` (CSV row 16, KD 2, vol 90) — "and polish" merges cleaner + polish; body section on polish step
- `best stainless steel cooktop cleaner` (CSV row 21, KD 0, vol 70) — cooktop use; body H2 + compatibility line
- `best stainless steel stove top cleaner` (CSV row 23, KD 1, vol 60) — synonym cooktop, absorbed

For the hub itself: variable-swap collapses — unmodified core query.

## Sub-variant pages queued (NOT this hub)

Sub-variants in keyword-map.ts that may ship as separate pages later; this hub does NOT compete with them:

- `best-stainless-steel-cleaner-polish` (keyword-map row 5369, vol 50, KD 0) — "cleaner polish" intent may merit a separate page if polish-only SKU set diverges; body section here covers it for now
- `best-stainless-steel-cleaner-for-fridge` (row 6803, vol 50, KD 0) — fridge-specific; body H2 here, split later only if appliance-brand-specific (Sub-Zero, Viking) SKU set justifies
- `homemade-stainless-steel-cleaner` (row 8379, vol 40, KD 0) — DIY intent; routes to method-guide support page when queued
- `non-toxic-stainless-steel-cleaner` (row 8545, vol 30, KD 0) — non-toxic intent; body section here covers it
- `what-to-clean-stainless-steel-with` (row 977, vol 700, KD 1) — method-page support, separate page later
- `how-to-clean-stainless-steel-sink` (row 2678, vol 450, KD 2) — method-page support, separate page later
- `how-to-clean-stainless-steel-pans` (row 1741, vol 100, KD 3) — method-page support, separate page later
- `how-to-clean-stainless-steel-stove-top` (row 6088, vol 50, KD 0) — method-page support, separate page later

All support / method pages are informational intent and will reciprocally link to this commercial hub when they ship.

## Desk + Avatar assignment

- **Desk:** Safe Surface Desk (`safe-surface-desk` in `src/data/authors.ts:350`)
  - Emotional posture: CAREFUL EXPERT
  - Trust lane: appliance-manufacturer care guides (Whirlpool, GE, Sub-Zero, Bosch, Viking, Miele) + EWG Verified + Made Safe + Consumer Reports test panels + cookware-manufacturer care docs (All-Clad, Cuisinart) — footnote-voice only, never named in body prose
  - Forbidden: Everyday Cleaning's "simple winner" / "you're fine if" / "80% of normal people" + Labor Math's "week-math" / "where this collapses" / "dock reliability" framing
- **Primary avatar:** Surface Protector (per `data/avatar-research.md` lines 155-208)
  - Core job: "Tell me what will NOT damage my engineered hardwood / laminate / natural stone / grout / **stainless** — then tell me the safest thing that actually works."
  - Explicit dealbreaker cited: "Abrasive cleaners on stainless — dulls the finish"
  - Explicit recurring concern: "Long-term residue buildup — wax haze on hardwood, soap scum on grout, **hard-water stains on stainless**"
  - Budget tier: $15-40 per chemistry product, will pay 2x generic to avoid damaging sunk-cost appliance
  - Emotional state: once-burned; over-researches; anxious about scratching brushed finish, dulling with abrasives, wrong-direction wiping leaving streaks
  - Sunk-cost anchor: $800-3,000 refrigerator / $500-1,200 range / $400-800 dishwasher exteriors

**One-line reasoning for desk match:** Safe Surface Desk owns Chemical Bundle explicitly in `expertise[]`; stainless is one of the five named Chemical Bundle surfaces in the avatar research. Surface Protector names stainless across core job + dealbreakers + recurring concerns + cross-cluster-expression. The `avatarJobsToAnswer` array includes warranty-risk (here = finish-damage risk), surface compatibility (brushed vs polished vs PVD-coated colored stainless vs black stainless), safer alternative (non-abrasive / grain-aligned / microfiber method), and decision tree (appliance vs cookware vs sink × fingerprints vs hard-water spots vs cooked-on residue) — exactly what this page must answer. Direct match. No desk rotation.

## Avatar jobs to answer (Phase 4 contract)

Per Safe Surface Desk's `avatarJobsToAnswer` array, adapted for stainless steel:

1. **Finish-damage check** — which cleaners won't scratch the brushed finish or dull the polish, and which ones explicitly say "for brushed stainless" vs "for polished stainless" vs "safe for black stainless / colored PVD finishes." The stainless analogue of warranty-risk. Primary block near top.
2. **Surface compatibility** — which cleaner for which stainless sub-surface: large appliance exteriors (fridge, dishwasher, range hood) vs cookware/bakeware (pots, pans) vs sinks vs cooktops vs BBQ grills. Each has different residue patterns and tolerates different chemistries. Decision block + per-pick "compatible with" line.
3. **Safer alternative** — for each risky pattern (abrasive powders on brushed finish, chlorine bleach on stainless sinks which pits the metal, ammonia on black stainless PVD which strips the coating, steel wool on polished stainless), give a specific safer non-abrasive / pH-neutral swap with direction-of-grain technique note.
4. **Decision tree** — appliance type × finish type (brushed / polished / black stainless / colored PVD) × residue class (fingerprints vs hard-water spots vs cooked-on food vs wax haze) → which product to pick.

Phase 4 writer must hit all four. `avatar-substance-check.js` blocks the write if any is unanswered.

## Secondary keywords (from CSV — target naturally in body, H2s, FAQ)

Hub-level (this page absorbs these):
- best stainless steel cleaner (primary, KD 1, vol 2,900)
- best cleaner for stainless steel appliances (KD 7, vol 600) — body H2 on appliances
- best cleaner for stainless steel (KD 1, vol 500) — synonym, natural in body
- best cleaner for stainless steel sink (KD 2, vol 450) — body H2 on sinks
- best stainless steel appliance cleaner (KD 6, vol 250) — synonym, absorbed
- best stainless steel sink cleaner (KD 5, vol 200) — absorbed
- best stainless steel cleaner for appliances (KD 3, vol 150) — absorbed
- best stainless steel cookware cleaner (KD 2, vol 100) — body H2 on cookware
- best stainless steel cleaner for refrigerators (KD 2, vol 100) — body H2 on refrigerators
- best stainless steel cleaner and polish (KD 2, vol 90) — body section on polish step
- best stainless steel cleaner for cookware (KD 1, vol 80) — absorbed
- best stainless steel cooktop cleaner (KD 0, vol 70) — body H2 on cooktops
- best stainless steel stove top cleaner (KD 1, vol 60) — absorbed
- best stainless steel cleaner for sinks (KD 5, vol 60) — absorbed
- streak free stainless steel cleaner — FAQ angle
- stainless steel cleaner non toxic — body section on EWG/Made-Safe picks

Niche / subset (covered by body sections, NOT separate H1):
- best non-toxic stainless steel cleaner — non-toxic sub-section
- best homemade stainless steel cleaner — DIY mention with method-guide reference
- best stainless steel cleaner for black stainless — finish-compatibility sub-section
- best stainless steel cleaner wipes — format sub-section (wipes vs spray vs cream)

NOT this hub (defer to other pages):
- what to clean stainless steel with (vol 700) — method intent, separate support page
- how to clean stainless steel sink (vol 450) — method, separate support
- how to clean stainless steel pans (vol 100) — method, separate support
- homemade stainless steel cleaner (vol 40, KD 0) — DIY intent, routes to method-guide support
- best cleaner for stainless steel grill (vol 100, category=Grills) — outdoor grill intent; WRX site territory
- best stainless steel cleaner for sub zero (keyword-map, vol 0) — brand-specific subset, only if SKU set diverges

## Variant release timing

No same-week conflicting variants shipping. This page ships in the Chemical Bundle cluster as sibling #3 after `/best-hardwood-floor-cleaner` (Page 1, LIVE) and `/best-grout-cleaner` (Page 3, LIVE). Completes the Surface Protector chemistry trio.

## Resolution

**BUILD.** Proceed to Phase 2 (Research — `research-product-lineup` + `research-online`).

## Audience evidence (anchor for Phase 4 writing)

Verbatim from `sites/thecleaningreport/data/avatar-research.md` § Surface Protector (lines 155-208) — stainless-specific extracts:

**Core job:**
> "I've been burned once. Tell me what will NOT damage my engineered hardwood / laminate / natural stone / grout / **stainless** — then tell me the safest thing that actually works."

**Dealbreakers (captured in `audienceEvidence` on keyword-map row 905):**
> "Abrasive cleaners on stainless — dulls the finish."

**Recurring concerns:**
> "Long-term residue buildup — wax haze on hardwood, soap scum on grout, **hard-water stains on stainless**."

**Cross-cluster expression:**
> "Chemical-Cleaning Bundle | PRIMARY. Grout / hardwood / **stainless** / upholstery cleaners — all governed by surface-safe framing. | $15-40 per product"

**Voice + page-structure fit:**
> "Careful, expert, slightly cautious. Lead with the caution ... Acknowledge the horror story their neighbor had. Use named authority sources heavily ... Do NOT lead with product recommendation; lead with decision framework."

Phase 4 writer obligations:
1. **Lead with finish-damage check** — not a "top pick" like Everyday Cleaning. Open with "identify your stainless finish before you buy a cleaner."
2. **Finish-type decision tree early** (brushed / polished / black stainless / colored PVD coat / cookware-grade).
3. **Picks table covers** cleaner / compatible finishes / abrasive? / ammonia-free? / food-safe? / for-which-appliance? / $/use.
4. **Per-pick "who should NOT use this"** — explicit (black stainless users avoid ammonia picks; brushed-finish users avoid abrasive/creamy-powder picks; cookware users avoid appliance-wax picks).
5. **What to avoid section** — abrasive powders on brushed stainless (scratches); chlorine bleach on stainless sinks (pitting + rust); ammonia on black stainless PVD (strips coating); steel wool ever (scratches). With specific safer swap for each.
6. **Direction-of-grain technique section** — brushed stainless shows every wipe mark; wipe WITH the grain. The keyword-map notes field explicitly calls this out ("direction-of-grain-matters"). Include a short how-to after finish-type section.
7. **Non-toxic / food-safe block** — EWG Verified, Made Safe, ammonia-free picks for buyers with small children or with cookware-adjacent surfaces (sinks, cooktops, inside-of-hood).
8. **Trust footnotes** point at appliance-manufacturer care docs (Whirlpool, GE, Sub-Zero, Bosch) + Consumer Reports test + Good Housekeeping test + EWG/Made Safe (names in muted sources footer only, never body prose).
9. **No methodology deep-dive** — Safe Surface doesn't publish lab tables; it cites appliance-manufacturer care guides + third-party lab tests.

## Strategic context

This page is the commercial terminus of the stainless steel content arc:
- Awareness: `/what-to-clean-stainless-steel-with` (support, 700 vol, queued) + `/how-to-clean-stainless-steel-sink` (support, 450 vol, queued) will explain method + warn about finish damage + direction-of-grain. Reciprocal link slots reserved.
- Decision: `/best-stainless-steel-cleaner` (this page) picks the specific product that implements the method.
- Lateral: `/best-hardwood-floor-cleaner` (LIVE) + `/best-grout-cleaner` (LIVE) — same desk, adjacent surfaces. Cross-link via "same Safe Surface desk, different surface" related slot.

KD 1 + strong topical cluster + 2,900 vol + 3,500 TP = expect this to rank at least as fast as `/best-grout-cleaner` (KD 1, shipped 2026-04-20). No fortress posture needed.

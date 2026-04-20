# Intent-Hierarchy Decision: `/best-grout-cleaner`

**Decided:** 2026-04-20 (Phase 7 Session A Page 3 of `.claude/plans/can-you-review-our-lexical-robin.md`).

## Role declaration

**Role:** `secondary_commercial` (spoke anchor)

Safe Surface / Surface Protector commercial spoke #2 in the Chemical Bundle cluster. Sibling to `/best-hardwood-floor-cleaner` (Page 1, shipped 2026-04-20), same desk + avatar, different surface. No flagship — `/best-robot-vacuum` remains the Labor Math hub. This page monetizes Surface Protector avatar research traffic for the tile/grout surface.

Reciprocal with the queued `/how-to-clean-grout` support page (see `keyword-map.ts:634`, vol 22,000 — the method-level cousin ships later and will backlink to this page as "which cleaner to actually buy"). Not blocked by its absence — the support-page cross-link slot can be populated reciprocally when `/how-to-clean-grout` ships.

## Part 1 — Primary keyword verification (against Ahrefs CSV)

Verified against `data/ahrefs-exports/best-grout-cleaner.csv` row 1:

| Field | Value |
|-------|-------|
| Keyword | best grout cleaner |
| Country | US |
| Difficulty (KD) | **1** |
| Volume (US) | **8,800** |
| Global volume | 11,000 |
| Traffic potential (US) | 2,800 |
| Global traffic potential | 3,200 |
| CPC | $0.15 |
| Parent keyword | best tile and grout cleaner (smaller — see Part 2) |
| SERP features | AI Overview, Thumbnail, People also ask, Sitelinks, Shopping, Top stories, Video preview |
| Intents | Informational, Commercial, Non-branded, Non-local |
| Category | Household cleaning |
| First seen | 2015-09-05 |
| 24-month SV trend | 8,019 → 9,316, flat-to-rising around 8-9K |

**Opportunity-row JSON is accurate here** (unlike `/best-hardwood-floor-cleaner` where vol and TP were swapped). JSON row 17 logs vol 8,800 / TP 2,800 / KD 1 — matches the CSV exactly.

**Ahrefs-designated parent is backwards.** Ahrefs tags "best tile and grout cleaner" (row 2, vol 1,100) as the parent of "best grout cleaner" (row 1, vol 8,800) — but the child has 8× the volume. This is Ahrefs bookkeeping, not a real traffic hierarchy. "Best grout cleaner" is the natural hub primary; "best tile and grout cleaner" is absorbed as a secondary keyword in H2 + body prose.

## Part 2 — SERP intent-match check (same-site cannibalization)

WebSearch "best grout cleaner 2026" 2026-04-20 returned: Consumer Reports "7 Best Grout Cleaners, According to Our Tests", Yahoo Shopping "best grout cleaners of 2026, tested and reviewed", HGTV "The Best Grout Cleaners and Brushes of 2026, Tested and Reviewed", This Old House "The 5 Best Grout Cleaners (2026 Review)", BuzzFeed "The 25 Best Grout Cleaners Of 2026", Apartment Therapy DIY test, plus Amazon Best Sellers category + Pebble Tile Shop blog. SERP = roundup/commercial intent dominates; zero "how-to" pages in top 10. Commercial intent confirmed.

TCR LIVE content (2026-04-20):
- `/best-robot-vacuum` — Labor Math, robot vacuums. Zero overlap.
- `/best-cordless-vacuum` — Everyday Cleaning, cordless stick vacs. Zero overlap.
- `/best-cordless-stick-vacuum-for-hardwood` — Everyday Cleaning, hardwood-specific cordless vacuums. Zero overlap.
- `/best-hardwood-floor-cleaner` — Safe Surface, **hardwood** chemical cleaner. Different surface (wood vs tile/stone), different SKU set (Bona / Murphy Oil Soap / Method vs Black Diamond / Zep / Grout-Eez / Oxi-based). Reciprocal-link candidate, NOT competing — will cross-link as "different surface, same Safe Surface desk".
- `/how-to-clean-hardwood-floors` — Safe Surface, hardwood METHOD support. No grout overlap.

Cross-site overlap check:
- BPP: no grout coverage planned; pet-urine grout variants (`best-grout-cleaner-for-pet-urine`, vol 0) could go there eventually but nothing is currently scoped.
- BCF / CWP: zero coverage on tile/grout care. ✓ CLEAR.

## Part 3 — Variable-swap differentiation test

**N/A at the hub level.** This IS the unmodified core query. Not a variable-modified variant of another TCR page.

Test applies to variants when their Phase 1 runs:
- `best grout cleaner for shower` (CSV row 3, KD 2, vol 1,000) — covered by body H2 ("bathroom/shower use-case") within this page, not a split
- `best grout cleaner for floors` (CSV row 4, KD 2, vol 900) — same cluster, absorbed as H2 + body
- `best tile and grout cleaner` (CSV row 2, KD 3, vol 1,100) — synonym, absorbed as secondary keyword
- `best tile grout cleaner` (CSV row 8, KD 9, vol 600) — synonym, absorbed naturally
- `best homemade grout cleaner` (CSV row 6, KD 2, vol 700) — DIY intent, explicitly NOT a commercial-product page; routes to `/how-to-clean-grout` support when that ships
- `best steam cleaner for grout` (CSV row 5, KD 7, vol 800) — steam intent, routes to `/best-steam-mop` (queued)
- `best grout cleaner for marble` (keyword-map row 7339, vol 50) — niche subset; body coverage only, no split
- `best grout cleaner for pet urine` (keyword-map row 7009, vol 0) — BPP territory if picked up

For the hub itself: variable-swap collapses — unmodified core query.

## Duplicate-row resolution

`keyword-map.ts` row 323 `best-tile-and-grout-cleaner` (primary "best grout cleaner for floors?" vol 8,800) duplicates this target. The "?" variant appears to be Ahrefs auto-discovery artifact; its primary keyword collides with this row's cluster. Resolution:

- This page (`best-grout-cleaner`) ships as the canonical hub.
- `best-tile-and-grout-cleaner` row: mark SKIP in `guide-opportunities.json` with reason "absorbed as secondary keyword by `/best-grout-cleaner`; smaller variant of same intent cluster (parent-backwards per Ahrefs row hierarchy)".

Shower variant `best-grout-cleaner-for-shower` (vol 350 in JSON, 1,000 in Ahrefs CSV) stays NOT BUILT for possible future split if shower-specific product set diverges; body H2 covers "bathroom/shower" here in the meantime.

## Desk + Avatar assignment

- **Desk:** Safe Surface Desk (`safe-surface-desk` in `src/data/authors.ts:350`)
  - Emotional posture: CAREFUL EXPERT
  - Trust lane: flooring-/tile-/stone-manufacturer care guides (Mapei, Custom Building Products, Laticrete, TEC) + EWG Verified + Made Safe + Consumer Reports test panels + NKBA grout care guidance (footnote-voice only — never named in body prose)
  - Forbidden: Everyday Cleaning's "simple winner" / "you're fine if" / "80% of normal people" + Labor Math's "week-math" / "where this collapses" / "dock reliability" framing
- **Primary avatar:** Surface Protector (per `data/avatar-research.md` lines 155-208)
  - Core job: "Tell me what will NOT damage my engineered hardwood / laminate / natural stone / **grout** / stainless — then tell me the safest thing that actually works."
  - Explicit search patterns cited: `best grout cleaner for tile floors` (line 167)
  - Explicit dealbreaker cited: "Ammonia or bleach on grout — degrades colored grout, leaves dirt-attracting film (CR documents this)" (line 181)
  - Explicit recurring concern cited: "soap scum on grout" + "re-seal / re-coat cycles — grout needs resealing, cleaner choice affects both" (lines 188, 190)
  - Budget tier: $15-40 per chemistry product, will pay 2x generic to avoid damaging sunk-cost surface
  - Emotional state: once-burned; over-researches; anxious about sealer degradation + color-loss on tinted grout

**One-line reasoning for desk match:** Safe Surface Desk owns Chemical Bundle explicitly in `expertise[]`; grout is one of the five named Chemical Bundle surfaces in the avatar research. Surface Protector is its primary avatar and names grout four times in the avatar definition. The `avatarJobsToAnswer` array includes warranty-risk (analogous here = sealer-risk), surface compatibility (color-safe / sealer-safe), safer alternative (oxygen-bleach-based over chlorine), and decision tree (tile type × grout condition × colored-vs-neutral grout) — exactly what this page must answer. Direct match. No desk rotation.

## Avatar jobs to answer (Phase 4 contract)

Per Safe Surface Desk's `avatarJobsToAnswer` array, adapted for tile/grout:

1. **Sealer-risk check** — which cleaners won't strip or degrade existing grout sealer (penetrating vs topical sealer). The tile analogue of warranty-risk. Primary block near top.
2. **Surface compatibility** — which cleaner for which grout type: cement-based (porous, acid-sensitive) vs epoxy (non-porous, chemically inert) vs colored grout (bleach-sensitive) vs natural stone grout lines adjacent to marble/travertine (acid-destroys-stone). Decision block + per-pick "compatible with" line.
3. **Safer alternative** — for each risky pattern (chlorine bleach on colored grout, muriatic/acid-based cleaners on cement grout, vinegar or citrus acid on stone-adjacent grout), give a specific safer oxygen-bleach or pH-neutral swap.
4. **Decision tree** — grout type × color × last-sealed cycle × stain-class (mildew vs dirt vs rust vs grease) → which product to pick.

Phase 4 writer must hit all four. `avatar-substance-check.js` blocks the write if any is unanswered.

## Secondary keywords (from CSV — target naturally in body, H2s, FAQ)

Hub-level (this page absorbs these):
- best grout cleaner (primary, KD 1, vol 8,800)
- best tile and grout cleaner (KD 3, vol 1,100) — synonym, natural in H2 + body
- best grout cleaner for shower (KD 2, vol 1,000) — body H2 "bathroom/shower use-case"
- best grout cleaner for floors (KD 2, vol 900) — body H2 "floor tile use-case"
- best shower grout cleaner (KD 3, vol 600) — same bathroom H2 naturally
- best tile grout cleaner (KD 9, vol 600) — synonym, natural in body
- best cleaner for shower tile and grout (KD 0, vol 350) — FAQ ("what's the best cleaner for shower tile and grout?")
- oxygen bleach grout cleaner (body H2 on safer-chemistry section)
- best grout cleaning product / solution (secondary variants — naturally in body)

Niche / subset (covered by body sections, NOT separate H1):
- best grout cleaner for colored grout — color-safe sub-section
- best acid-free grout cleaner — pH-neutral sub-section
- best non toxic grout cleaner — EWG/Made-Safe sub-section
- best grout cleaner for porcelain tile — compatibility table entry

NOT this hub (defer to other pages):
- best homemade grout cleaner (KD 2, vol 700) — DIY intent, routes to `/how-to-clean-grout` (queued)
- best steam cleaner for grout (KD 7, vol 800) — steam intent, routes to `/best-steam-mop` (queued)
- best grout cleaner machine (keyword-map row 4202, vol 150) — machine/hardware intent, separate page if it ever merits
- best grout cleaner for pet urine (keyword-map row 7009, vol 0) — BPP territory
- how to clean grout (vol 22,000) — informational, owned by `/how-to-clean-grout` support page when it ships

## Variant release timing

No same-week conflicting variants shipping. This page ships in the Chemical Bundle cluster as sibling #2 after `/best-hardwood-floor-cleaner` (Page 1, LIVE 2026-04-20). `best-stainless-steel-cleaner` (position #5, vol 6.6K, Surface Protector) is queued for a separate session.

## Resolution

**BUILD.** Proceed to Phase 2 (Research — `research-product-lineup` + `research-online`).

## Audience evidence (anchor for Phase 4 writing)

Verbatim from `sites/thecleaningreport/data/avatar-research.md` § Surface Protector (lines 155-208) — grout-specific extracts:

**Core job (line 158):**
> "I've been burned once. Tell me what will NOT damage my engineered hardwood / laminate / natural stone / **grout** / stainless — then tell me the safest thing that actually works."

**Search patterns (line 167):**
> `best grout cleaner for tile floors`, `[surface] cleaner manufacturer approved`, `what NOT to use on [surface]`

**Dealbreakers (line 181):**
> "Ammonia or bleach on grout — degrades colored grout, leaves dirt-attracting film (CR documents this)."

**Recurring concerns (lines 188, 190):**
> "soap scum on grout"
> "Re-seal / re-coat cycles — grout needs resealing, some finishes need recoat, cleaner choice affects both."

**Cross-cluster expression (line 201):**
> "Chemical-Cleaning Bundle | PRIMARY. Grout / hardwood / stainless / upholstery cleaners — all governed by surface-safe framing. | $15-40 per product"

**Voice + page-structure fit (line 192):**
> "Careful, expert, slightly cautious. Lead with the caution ... Acknowledge the horror story their neighbor had. Use named authority sources heavily ... Do NOT lead with product recommendation; lead with decision framework."

Phase 4 writer obligations:
1. **Lead with sealer-risk check** — not a "top pick" like Everyday Cleaning.
2. **Identify-your-grout decision tree early** (cement-based / epoxy / colored / adjacent-to-natural-stone).
3. **Picks table covers** cleaner / compatible grout types / color-safe? / sealer-safe? / acid-free? / scent / $/use.
4. **Per-pick "who should NOT use this"** — explicit (colored-grout users avoid chlorine-bleach picks; marble-adjacent users avoid acid picks).
5. **What to avoid section** — chlorine bleach on colored grout, acidic cleaners on stone-adjacent grout lines, abrasive powders on epoxy grout. With specific safer swap for each.
6. **Non-toxic / sealer-safe block** — EWG Verified, Made Safe, oxygen-bleach-based picks for buyers who re-sealed recently.
7. **Trust footnotes** point at Consumer Reports test + HGTV test + Mapei/Custom Building Products/Laticrete care guides + EWG/Made Safe (names in muted sources footer ONLY, never body prose).
8. **No methodology deep-dive** — Safe Surface doesn't publish lab tables; it cites tile/stone-manufacturer care docs + third-party lab tests.

## Strategic context

This page is the commercial terminus of the tile/grout content arc:
- Awareness: `/how-to-clean-grout` (support, 22K vol, queued) will explain the method + warn about sealer + color-safe risk. Reciprocal link slot reserved.
- Decision: `/best-grout-cleaner` (this page) picks the specific product that implements the method.
- Lateral: `/best-hardwood-floor-cleaner` (LIVE) — same desk, adjacent surface. Cross-link via "same Safe Surface desk, different surface" related slot.
- Lateral future: `/best-steam-mop` (queued) — for non-porous tile where steam is the method of choice.

KD 1 + strong topical cluster + 8,800 vol = expect this to rank at least as fast as `/best-hardwood-floor-cleaner` (KD 0, shipped 2026-04-20). No fortress posture needed.

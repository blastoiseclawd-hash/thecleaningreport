# Intent-Hierarchy Decision: `/best-cordless-stick-vacuum-for-hardwood`

**Decided:** 2026-04-20 (Phase 7 Session A Page 2 of `.claude/plans/can-you-review-our-lexical-robin.md`; replaced best-upright-vacuum after the JSON/avatar-research Labor Math conflict surfaced — see `feedback_upright_avatar_mismatch.md`).

## Role declaration

**Role:** `secondary_commercial` (spoke anchor, cordless-for-hardwood variant)

Everyday Cleaning / Practical Floor Keeper commercial spoke. Not a flagship — flagship is `/best-robot-vacuum` (Labor Math). Sits alongside `/best-cordless-vacuum` (LIVE, bare head term) as the hardwood-qualified variant. Cross-links to `/how-to-clean-hardwood-floors` (Safe Surface method support page, already LIVE) and `/best-hardwood-floor-cleaner` (Safe Surface chemical roundup, LIVE this session).

## Part 1 — Primary keyword verification (against Ahrefs CSV)

The exact slug keyword "best cordless stick vacuum for hardwood" is a cluster label — the queries that actually carry volume are the parent + close variants, so the hub absorbs the cluster, not just the narrow tail. Verified against `data/ahrefs-exports/best-cordless-vacuum-suggestions.csv`:

| Keyword | KD | Volume | TP | First seen | SERP |
|---------|----|--------|-----|-----------|------|
| **best cordless vacuum for hardwood floors** (true parent for this hub) | **9** | **2,700** | **3,500** | 2015-11-26 | AI Overview, Video preview, Thumbnail, Sitelinks, People also ask, Top stories, Shopping |
| best cordless vacuum hardwood floors | 9 | 200 | 700 | 2015-11-18 | Thumbnail, Sitelinks, Top stories, Shopping, People also ask, Video preview |
| best cordless vacuum for hardwood floors and carpet | 8 | 150 | 19,000 | 2016-04-08 | AI Overview + full stack |
| best cordless vacuum for hard floors | 9 | 150 | 2,500 | 2015-11-29 | AI Overview + full stack |
| best cordless vacuum for wood floors | 2 | 80 | 2,600 | 2015-12-25 | AI Overview + full stack |
| best cordless vacuum cleaner for hardwood floors | 1 | 60 | 2,600 | 2015-09-01 | AI Overview + full stack |
| the best cordless vacuum for hardwood floors | 8 | 30 | 2,200 | 2016-08-10 | AI Overview + full stack |

**Strategic posture.** `guide-opportunities.json` shows primaryVolume=900, primaryKd=2, TP=900 — these numbers describe the narrow-tail "stick vacuum for hardwood" sub-cluster, not the real parent. The hub should target the true parent query "best cordless vacuum for hardwood floors" (KD 9, vol 2,700, TP 3,500) — that's where the traffic concentrates and the variants all roll up into it (Ahrefs consistently lists it as Parent Keyword for the sub-cluster).

The `best cordless vacuum for hardwood floors and carpet` TP of 19,000 is parent-keyword tailwind ("best cordless vacuums"), not this variant's own — Ahrefs' TP inheritance quirk. Don't over-index on it.

## Part 2 — SERP intent-match check (same-site cannibalization)

TCR LIVE content (2026-04-20):

- `/best-cordless-vacuum` — Everyday Cleaning Desk, Practical Floor Keeper, targets BARE head term "best cordless vacuum" (51K vol, KD 24). Body covers hardwood as a use-case (Dyson Fluffy Optic on hard floors, per existing review prose) but does NOT target hardwood-specific intent. **No cannibalization — different intent bucket, different SERP. The LIVE hub sends hardwood-primary buyers to this page via a body link.**
- `/best-hardwood-floor-cleaner` — Safe Surface Desk, Surface Protector, chemical cleaners, **not vacuum intent**. Cross-link, not competitor.
- `/how-to-clean-hardwood-floors` — Safe Surface, method support, not product. Cross-link.
- `/best-robot-vacuum` — Labor Math, robot category, zero overlap on stick/cordless hardwood intent.

Cross-site overlap check:

- BPP: pet-focused. `best-cordless-vacuum-for-pet-hair` backlog — if that ships it's a pet variant, distinct intent. No conflict.
- BCF / CWP: zero vacuum coverage. ✓ CLEAR.

**Reciprocal-link plan:**

- Add a body-level "for hardwood-primary households, see [`/best-cordless-stick-vacuum-for-hardwood`]" line in the LIVE `/best-cordless-vacuum` page (Phase 4 edit).
- Add this new page's `relatedLinks` back to `/best-cordless-vacuum`, `/how-to-clean-hardwood-floors`, `/best-hardwood-floor-cleaner`.

## Part 3 — Variable-swap differentiation test

**Passes.** `cordless vacuum` + `for hardwood` is a hardwood-surface qualifier — different intent from the bare hub. Specifically:

- Buyer arrives wanting: soft-roller / fluffy head (brushroll damage anxiety on engineered hardwood), lightweight for one-hand, no-scratch finish confirmation, battery runtime long enough for a whole hardwood floor in one pass.
- Buyer does NOT want: carpet-tuned brushrolls (Shark Stratos PowerDetect), plush-carpet specialist picks.

This is NOT a demand-hallucinated split — the SERP for "best cordless vacuum for hardwood floors" returns distinct picks from the bare hub (Dyson Fluffy, Tineco Pure One S11, Shark Cordless with soft-roller attachment, Miele Triflex with Parquet Twister). The soft-roller is the differentiating SKU attribute. Ahrefs returns 8+ variable-modified queries at vol >30 with KD 0-9, all sharing this parent. Valid split.

Sibling variants (covered inside this page, not split):

- `best cordless vacuum for hard floors` (KD 9, vol 150) — synonym, body H2
- `best cordless vacuum for hardwood floors and carpet` (KD 8, vol 150) — body H2 on mixed-surface households
- `best cordless vacuum for wood floors` (KD 2, vol 80) — synonym
- `best cordless hardwood floor vacuum cleaner` (KD 1, vol 60) — synonym
- `best cordless stick vacuum for hardwood` (JSON target slug) — absorbed; stick is the default cordless form factor

NOT this hub (defer to other pages):

- `best cordless vacuum for pet hair` (KD 5, vol 9,200) — pet intent, defer to BPP when they pick it up or to `/best-cordless-vacuum` which already covers pet hair in body.
- `best robot vacuum for hardwood` — robot intent, separate page (queued, #9-equivalent).
- `best spray mop for hardwood floors` (queued) — mop intent, separate.

## Desk + Avatar assignment

- **Desk:** Everyday Cleaning Desk (`everyday-cleaning-desk` in `src/data/authors.ts:98`)
  - Emotional posture: PRAGMATIC REASSURANCE
  - Trust lane: Good Housekeeping Institute + Consumer Reports + Wirecutter (footnote-voice only)
  - Forbidden: Safe Surface's "before you buy, check your warranty" / "the short version: don't" / "manufacturer care guide" + Labor Math's "week-math" / "dock reliability" / "methodology convergence" framing
- **Primary avatar:** Practical Floor Keeper (full-depth, `data/avatar-research.md` lines 47-97)
  - Core job: "Give me one good tool for normal weekly floor care without turning this into a research project or a hobby."
  - Budget tier: $80 floor, $150-250 sweet spot, $400 stretch, $600 aspirational
  - Emotional state: mildly impatient, wants the winner not the education, ~10 minutes of attention
- **Secondary cross-cluster avatar:** Surface Protector (per JSON notes: brushroll-damage-risk concern on engineered hardwood). Handled in Everyday Cleaning voice via a "if scratch anxiety is driving this purchase" single-paragraph block with a footnote-pointer to `/how-to-clean-hardwood-floors` + `/best-hardwood-floor-cleaner` for the full Safe Surface treatment. **Never voice-switch mid-page** (desk distinctness rule) — refer across, don't borrow the other desk's voice.

**One-line reasoning for desk match:** Everyday Cleaning Desk owns cordless vacuum + handheld + basic-mop clusters for Practical Floor Keeper. Its `avatarJobsToAnswer` — clear winner at price band, 3-year cost, real battery runtime, skip-tier signal — exactly match the hardwood-buyer variant of its home cluster. Direct match. Backlog-deepening policy does NOT trigger (Practical Floor Keeper is full-depth, not backlog-light).

## Avatar jobs to answer (Phase 4 contract)

Per Everyday Cleaning Desk's `avatarJobsToAnswer` array, the rendered page must answer:

1. **One clear winner at the stated price band** — top pick named + 2 alternates (budget + splurge). No paralysis-of-choice.
2. **3-year cost of ownership** — replacement filters, replacement battery cost + availability, replacement rollers (soft-roller specific: Dyson Fluffy rollers are ~$40 every 2-3 years, Tineco iFloor brush-roll is proprietary).
3. **How long the battery actually runs** on hardwood — real runtime, not the marketing-minute peak number. Hardwood is the easy mode for cordless (less resistance than plush carpet) so runtimes trend longer.
4. **Skip-this-tier signal** — when to buy down (below $150) or up ($400+). Under $150 = false economy on filter cost for the Practical Floor Keeper profile; over $400 = Labor Trader territory, not this avatar.

Phase 4 writer must hit all four. `avatar-substance-check.js` blocks the write if any is unanswered.

## Secondary keywords (from CSV — target naturally in body, H2s, FAQ)

Hub absorbs (body coverage + natural phrasing):

- best cordless vacuum for hardwood floors (primary target, KD 9, vol 2,700)
- best cordless vacuum hardwood floors (KD 9, vol 200) — H1 synonym / meta desc
- best cordless vacuum for hard floors (KD 9, vol 150) — H2 ("hardwood + tile + laminate")
- best cordless vacuum for hardwood floors and carpet (KD 8, vol 150) — H2 on mixed-surface households
- best cordless vacuum for wood floors (KD 2, vol 80) — natural in body
- best cordless vacuum cleaner for hardwood floors (KD 1, vol 60) — natural body phrasing
- best cordless stick vacuum for hardwood (JSON target, absorbed)
- what is the best cordless vacuum for hardwood floors (FAQ entry)

Niche / subset (covered by body sections):

- best soft roller cordless vacuum (body H2 on why soft-roller matters for hardwood)
- best lightweight cordless vacuum for hardwood (body coverage: weight-by-pick column in comparison table)

NOT this hub:

- best cordless vacuum for pet hair (defer to BPP or `/best-cordless-vacuum`)
- best cordless vacuum under 200 (budget-tier intent, defer to `/best-cordless-vacuum-under-200` queued)
- best robot vacuum for hardwood (robot intent, separate page queued)
- best stick vacuum (bare head term, defer to `/best-cordless-vacuum` LIVE)

## Variant release timing

Ships second in Everyday Cleaning cluster. `/best-cordless-vacuum` (LIVE) is the bare-term hub. This is the first qualified variant. `/best-handheld-vacuum` + `/best-lightweight-cordless-vacuum` are queued for separate sessions.

## Resolution

**BUILD.** Proceed to Phase 2 (Research — `research-product-lineup` + `research-online`).

## Audience evidence (anchor for Phase 4 writing)

Verbatim from `sites/thecleaningreport/data/avatar-research.md` § Practical Floor Keeper (lines 47-97):

**Core job (line 50):**
> "Give me one good tool for normal weekly floor care without turning this into a research project or a hobby."

**Emotional state (line 53):**
> "Mildly impatient. Overwhelmed by the aisle/search results. Wants the winner, not the education. Has maybe 10 minutes. Slightly embarrassed at having put off replacing a broken or inherited vacuum for too long."

**What they search (line 59):**
> `best cordless vacuum under 200`, `best stick vacuum 2026`, `shark vs dyson cordless`, `is dyson worth it`, `best cordless vacuum for apartment`, `cordless vacuum hardwood and carpet`, `best handheld vacuum for stairs`, `simple mop for hardwood`.

**Mental model (line 61):**
> "I want the thing 80% of normal people are happy with at the price most normal people pay."

**Budget bands (line 64):**
> "$80 floor, $150-250 sweet spot, $400 stretch, $600 is aspirational. Dyson at $600+ feels like brand tax they might be paying."

**Cares about (line 66):**
> "weight (can they maneuver it upstairs), real-world battery runtime (not marketing minutes), bin size (emptying mid-clean = bad), hair-wrap resistance on brushroll (even if not pet-primary, someone in the house has long hair), filter replacement cost over 3 years."

**Dealbreakers (lines 71-75):**
> Proprietary batteries that cost $100+ in year 3 and are hard to find.
> Bins that require disassembly to empty.
> Hair wrap that requires scissors weekly.
> Budget models with no sealed-filtration.
> "Check price" with no actual price — they bounce immediately.

**Hardwood-specific mental model (inferred from line 59 + cross-cluster):**
> Wants a soft-roller / fluffy head because they've heard (or been told by the Home Depot associate) that a standard brushroll can scratch engineered or prefinished hardwood. Not panicked about it like the Surface Protector avatar — just wants the safe pick without having to research finish types. Also wants carpet coverage for area rugs.

**Voice + page-structure fit (line 84):**
> "Tone: direct, calm, anti-jargon, warm but not chummy. Lead with price + use-case ('best under $200 for hard floors + area rugs'). Simple tradeoff table: weight / runtime / bin size / brushroll type / filter cost over 3 years. Name Consumer Reports + Good Housekeeping Institute as trust anchors [NOTE: footnote-voice only, not in body prose]. Top pick → runner-up → budget → splurge. Explicit 'who shouldn't buy this' per pick. Avoid methodology deep-dives — those belong to the Labor Math Desk's pages."

Phase 4 writer obligations:

1. **Lead with price + use-case.** "Best under $X for hardwood + area rugs" — not "careful expert" warranty framing.
2. **Top pick → runner-up → budget → splurge** structure (4-5 picks total).
3. **Soft-roller / brushroll type prominent in tradeoff table** — this is the hardwood-buyer's differentiator.
4. **Weight + runtime + bin size + filter cost over 3 years columns** in comparison table.
5. **Per-pick "who shouldn't buy this"** — explicit.
6. **Scratch-anxiety single paragraph** with cross-link to `/how-to-clean-hardwood-floors` (Safe Surface depth) — don't voice-switch; refer across.
7. **Trust footnotes** point at Good Housekeeping / CR / Wirecutter picks where genuine overlap exists. Body prose stays outlet-anonymous. Numbered [N] only.
8. **No methodology deep-dive** — no debris matrix, no anemometer, no week-math framing. "Real 40 minutes, not the marketing-minute number" is the voice register.

## Strategic context

This page is the second commercial terminus of the hardwood-floors arc:

- Awareness: `/how-to-clean-hardwood-floors` (Safe Surface support, LIVE 5.B.3) — method + warranty risk.
- Vacuum decision: **this page** — picks the vacuum that respects hardwood without scratching.
- Chemical decision: `/best-hardwood-floor-cleaner` (Safe Surface, LIVE this session) — picks the cleaner that respects the finish.
- All three interlink. Every hardwood-floor query on TCR should land the reader at one of these three depending on their specific intent.

KD 9 on the true parent + strong topical cluster density + distinct-intent split from the bare cordless hub = should rank within 2-4 weeks of publication alongside the bare cordless hub's established authority.

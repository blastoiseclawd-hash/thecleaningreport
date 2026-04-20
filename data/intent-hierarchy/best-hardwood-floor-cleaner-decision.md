# Intent-Hierarchy Decision: `/best-hardwood-floor-cleaner`

**Decided:** 2026-04-20 (Phase 7 Session A Page 1 of `.claude/plans/can-you-review-our-lexical-robin.md`).

## Role declaration

**Role:** `secondary_commercial` (spoke anchor)

Safe Surface / Surface Protector commercial spoke. Not a flagship — flagship is `/best-robot-vacuum` (Labor Math hub). This is the Chemical Bundle spoke that monetizes Surface Protector avatar research traffic. Links reciprocally to `/how-to-clean-hardwood-floors` (the method support page shipped 5.B.3), which is already in production and points down to this page via the `related` slot.

## Part 1 — Primary keyword verification (against Ahrefs CSV)

Verified against `data/ahrefs-exports/best-hardwood-floor-cleaner.csv` row 1:

| Field | Value |
|-------|-------|
| Keyword | best hardwood floor cleaner |
| Country | US |
| Difficulty (KD) | **0** |
| Volume (US) | **4,400** |
| Global volume | 5,200 |
| Traffic potential (US) | 9,800 |
| Global traffic potential | 11,000 |
| CPC | $0.35 |
| Parent keyword | best hardwood floor cleaner (this IS the parent) |
| SERP features | AI Overview, Thumbnail, Video preview, Sitelinks, People also ask, Top stories, Shopping |
| Intents | Informational, Commercial, Non-branded, Non-local |
| Category | Household cleaning |
| First seen | 2015-09-01 |
| 24-month SV trend | 4.4K → 4.4K, steady ~4K-4.9K range |

**Opportunity-row drift.** `data/guide-opportunities.json` row 3 lists KD = 9 / vol = 9,900. Real KD = 0, real vol = 4,400. The 9,900 figure is TRAFFIC POTENTIAL (TP), not volume — same bug pattern as `best-cordless-vacuum` row's KD=2 vs real KD=24. Strategic posture: KD 0 is genuinely easy. A quality Safe Surface manufacturer-approved-picks hub should rank without needing fortress spokes. Log drift, don't block Phase 2.

## Part 2 — SERP intent-match check (same-site cannibalization)

TCR LIVE content (2026-04-20):
- `/best-robot-vacuum` — Labor Math, robot vacuums. Zero overlap.
- `/best-cordless-vacuum` — Everyday Cleaning, cordless stick vacs. Zero overlap.
- `/how-to-clean-hardwood-floors` — Safe Surface, hardwood METHOD. **Reciprocal, not competing.** The support page teaches the method + links to this product-roundup page as the "which cleaner" answer. The product-roundup page links back to the method page as the "how to actually use it" answer. Classic hub↔support internal-link pattern.

Cross-site overlap check:
- BPP: `best-hardwood-floor-cleaner-for-pets` does NOT appear in their backlog; no conflict. A pet-specific hardwood cleaner query could go to BPP eventually but is not currently planned.
- BCF / CWP: zero coverage on hardwood care. ✓ CLEAR.

## Part 3 — Variable-swap differentiation test

**N/A.** This IS the parent keyword (CSV row 1 literally equals the target). Not a variable-modified variant.

Test applies to spoke siblings when their Phase 1 runs:
- `best non toxic hardwood floor cleaner` (KD 2, vol 80) — covered by body H2 within this page, not a split
- `best engineered hardwood floor cleaner` (KD 1, vol 80) — same, covered by identify-your-floor decision tree
- `best hardwood floor cleaner machine` (KD 5, vol 350) — different intent (steam-cleaner machine), defer to its own page
- `best hardwood floor steam cleaner` (KD 1, vol 60) — already routes to `/best-steam-mop` (queued)
- `best hardwood floor vacuum cleaner` (KD 0, vol 90) — vacuum intent, routes to `/best-vacuum-for-hardwood-floors` (queued)

For the hub itself: variable-swap collapses — unmodified core query.

## Desk + Avatar assignment

- **Desk:** Safe Surface Desk (`safe-surface-desk` in `src/data/authors.ts:350`)
  - Emotional posture: CAREFUL EXPERT
  - Trust lane: Bona/Shaw/Armstrong/Mannington flooring-manufacturer care guides + EWG Verified + Made Safe + IICRC S100 + NWFA + VacuumLand (footnote-voice only — never named in body prose)
  - Forbidden: Everyday Cleaning's "simple winner" / "you're fine if" / "80% of normal people" + Labor Math's "week-math" / "where this collapses" / "dock reliability" framing
- **Primary avatar:** Surface Protector (per `data/avatar-research.md` lines 155-208)
  - Core job: "Tell me what will NOT damage my engineered hardwood / laminate / site-finished solid — then tell me the safest thing that actually works. I will pay extra for peace of mind."
  - Budget tier: $15-$150 per product, stacks (cleaner + applicator + microfiber)
  - Emotional state: once-burned; over-researches; anxious about warranty voidance; methodical

**One-line reasoning for desk match:** Safe Surface Desk owns Chemical Bundle spokes (hardwood/laminate/stone/grout/stainless cleaners) explicitly in `expertise[]`. Surface Protector is its primary avatar. Its `avatarJobsToAnswer` includes warranty-risk check + surface compatibility + safer alternative — exactly what this page must answer. Direct match.

## Avatar jobs to answer (Phase 4 contract)

Per Safe Surface Desk's `avatarJobsToAnswer` array, the rendered page must answer:

1. **Warranty-risk check** — which cleaners won't void manufacturer warranty on polyurethane / wax / penetrating oil / site-finished / engineered. Primary block near top.
2. **Surface compatibility** — which product for which finish. Decision block or per-pick "compatible with" line.
3. **Safer alternative** — for each risky pattern (vinegar, Murphy Oil Soap long-term buildup, Pine-Sol, undiluted spray cleaners), give a specific safer swap.
4. **Decision tree** — engineered vs solid / polyurethane vs wax / routine vs deep-clean → which product to pick.

Phase 4 writer must hit all four. `avatar-substance-check.js` blocks the write if any is unanswered.

## Secondary keywords (from CSV — target naturally in body, H2s, FAQ)

Hub-level (this page absorbs these):
- best hardwood floor cleaner (primary, KD 0, vol 4,400)
- best wooden floor cleaner liquid (KD 0, vol 350) — natural-language variant
- best floor cleaner for hardwood floors (KD 1, vol 300) — synonym
- best floor cleaner for hardwood (KD 2, vol 150) — synonym
- best hardwood floor cleaner and polish (KD 1, vol 150) — body H2 ("cleaner vs cleaner+polish")
- best floor cleaner wood (KD 1, vol 150) — natural language
- best rated hardwood floor cleaner (vol 100) — natural in body
- best hardwood floor cleaning solution (KD 2, vol 100) — natural in body (already in JSON secondary)
- what is the best hardwood floor cleaner (KD 2, vol 100) — FAQ entry
- best hardwood floor cleaning products (KD 3, vol 100) — body H2 ("the products that actually work")

Niche / subset (covered by body sections, NOT separate H1):
- best non toxic hardwood floor cleaner (KD 2, vol 80) — H2 section on EWG/Made-Safe certified picks
- best engineered hardwood floor cleaner (KD 1, vol 80) — covered by identify-your-floor decision tree
- best natural hardwood floor cleaner (KD 4, vol 90) — H2 overlap with non-toxic section
- best smelling hardwood floor cleaner (KD 0, vol 70) — per-pick "scent notes" where relevant

NOT this hub (defer to other pages):
- best hardwood floor cleaner machine (KD 5, vol 350) — steam cleaner intent, `/best-steam-mop` territory
- best hardwood floor steam cleaner (KD 1, vol 60) — steam intent, `/best-steam-mop` territory
- best hardwood floor vacuum cleaner (KD 0, vol 90) — vacuum intent, `/best-vacuum-for-hardwood-floors` territory
- best homemade hardwood floor cleaner (KD 7, vol 80) — DIY intent, explicitly NOT a commercial-product page. Supports traffic to the support page `/how-to-clean-hardwood-floors`.
- best hardwood floor cleaner for pets (KD 0, vol 100) — BPP territory when they pick it up

## Variant release timing

No same-week conflicting variants. This page ships first in the Chemical Bundle cluster. `best-grout-cleaner` + `best-stainless-steel-cleaner` (positions #4 + #5) are queued for separate sessions.

## Resolution

**BUILD.** Proceed to Phase 2 (Research — `research-product-lineup` + `research-online`).

## Audience evidence (anchor for Phase 4 writing)

Verbatim from `sites/thecleaningreport/data/avatar-research.md` § Surface Protector (lines 155-208):

**Core job (line 158):**
> "Protect the investment. I paid $8-25k for this floor. Tell me what will NOT damage it — then tell me the safest thing that actually works."

**Emotional state (line 161):**
> "Once-burned. Over-researches. Has been told conflicting things (grandparents said vinegar, YouTube says Bona, manufacturer says 'damp mop only'). Methodical — will read 30 minutes before buying. Anxiety spikes around warranty voidance."

**What they search (line 167):**
> `best hardwood floor cleaner non toxic`, `bona vs [competitor]`, `can I use vinegar on engineered hardwood`, `what does manufacturer recommend for prefinished hardwood`, `best pH neutral hardwood cleaner`, `cleaner for site-finished floors`

**Mental model (line 169):**
> "Manufacturer-endorsed is the trust anchor. Bona is co-marketed with major hardwood manufacturers — that's the strongest signal. Second: pH-neutral + no residue. Third: EWG or Made-Safe certified if I have pets or kids."

**Budget bands (line 172):**
> "$8-12 for a routine cleaner spray-and-mop concentrate (Bona 32oz). $15-30 for a refill bundle. $40-80 for a cleaning starter kit (cleaner + microfiber mop system). Will pay 2x generic to avoid damage risk. Refuses to cheap out here."

**Cares about (line 174):**
> "pH neutral / no residue / manufacturer-endorsement (Bona works on Shaw/Armstrong/Mannington warrantied floors). Third-party certification (EWG Verified, Made Safe, Green Seal). Pet-safe labeling if applicable. Scent — strong-fragrance cleaners trigger avoidance."

**Dealbreakers (lines 179-183):**
> Vinegar or acidic ingredients — long-term polyurethane degradation.
> Wax-based cleaners on polyurethane-finished floors (creates hazing / incompatibility).
> Oil soaps (Murphy Oil Soap) on prefinished — long-term buildup looks dingy.
> Steam or moisture-heavy products sold as "hardwood safe" without manufacturer endorsement.
> "Cleans and shines" or "polish" products that leave residue the manufacturer told them to avoid.

**Recurring concerns (lines 186-189):**
> "My floor is site-finished vs prefinished — does the same cleaner work on both?"
> "Engineered hardwood warranty says 'damp mop only' — which cleaner won't void that?"
> "I have pets / kids — is this actually safe to let them walk on?"
> "The scent is too strong — what's the low-scent equivalent?"

**Voice + page-structure fit (line 192):**
> "Careful, expert, slightly cautious. Not reassuring like Everyday Cleaning. 'Before you buy, check what your manufacturer endorses.' 'The short version: don't use vinegar.' Lead with warranty-risk check + finish-identification decision tree. Pick table: cleaner / compatible finishes / pH / certifications / scent / $/use. Per-pick 'who should NOT use this.' Trust footnote points at Bona care guide + Shaw/Armstrong care docs + EWG/Made-Safe. Never name outlets in body prose — footnotes only."

Phase 4 writer obligations:
1. **Lead with warranty-risk check** — not a "top pick" like Everyday Cleaning.
2. **Identify-your-floor decision tree early** (polyurethane / wax / penetrating oil / prefinished / site-finished).
3. **Picks table covers** cleaner / compatible finishes / pH / certifications / scent / $/use.
4. **Per-pick "who should NOT use this"** — explicit, not implied.
5. **What to avoid section** — vinegar, Murphy Oil buildup, steam, wax-on-polyurethane. With safer swap for each.
6. **Non-toxic / pet-safe block** — EWG, Made Safe, Green Seal where products carry them.
7. **Trust footnotes** point at Bona + Shaw + Armstrong + Mannington + EWG + Made Safe (names in muted sources footer ONLY, never body prose).
8. **No methodology deep-dive** — Safe Surface doesn't publish lab tables; it cites flooring-manufacturer care docs.

## Strategic context

This page is the commercial terminus of the hardwood-floors content arc:
- Awareness: `/how-to-clean-hardwood-floors` (support, 18K vol, shipped 5.B.3) explains the method + warns about warranty risk.
- Decision: `/best-hardwood-floor-cleaner` (this page) picks the specific product that implements the method.
- The support page already has this page in its `related` slot; reciprocal link will be added in Phase 4.

KD 0 + strong topical cluster = expect this to rank faster than the cordless hub. No fortress posture needed.

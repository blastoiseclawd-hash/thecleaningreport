# Intent-Hierarchy Decision: `/best-cordless-vacuum`

**Decided:** 2026-04-20 (Phase 5.B.2 plan-guide-pages of `.claude/plans/can-you-review-our-lexical-robin.md`).

## Role declaration

**Role:** `primary_commercial`

This is the canonical hub for TCR's Cordless Vacuum cluster — position #2 in the build queue per `data/guide-opportunities.md`. Multiple spokes (`-under-200`, `-for-hardwood`, `-lightweight`, `-stick-vacuum-for-hardwood`) route back through this hub for internal-link authority. The pet-hair variant lives on BPP per the cross-site overlap policy (opportunity row S3).

## Part 1 — Primary keyword verification (against Ahrefs CSV)

Verified against `data/ahrefs-exports/best-cordless-vacuum.csv` row 1:

| Field | Value |
|-------|-------|
| Keyword | best cordless vacuum |
| Country | US |
| Difficulty (KD) | 24 |
| Volume (US) | 51,000 |
| Global volume | 78,000 |
| Traffic potential (US) | 68,000 |
| Global traffic potential | 78,000 |
| CPC | $0.80 |
| Parent keyword | best cordless vacuum (this IS the parent) |
| SERP features | AI Overview, Thumbnail, Video preview, Sitelinks, People also ask, Top stories, Shopping |
| Intents | Informational, Commercial, Non-branded, Non-local |
| Category | Floor care |
| First seen | 2015-09-02 |
| 24-month SV trend | 39K → 46K, ranged 38K–78K (peak Mar 2024) |

**Opportunity-row drift.** `data/guide-opportunities.md` row 2 lists KD = 2 / score = 95. **Real KD per Ahrefs CSV is 24.** That changes the strategic posture from "easy win" to "FORTRESS hub anchored by spokes" — already the strategic note at opps line 231 ("Cordless's FORTRESS risk... DR 68+ dominated... carve sub-niches in parallel"). Update the opps row + niche-ranking-tcr.md at Phase 7. **Not blocking Phase 5** because the strategic note already correctly frames the hub as a spoke-anchor build.

## Part 2 — SERP intent-match check (same-site cannibalization)

TCR LIVE content: `/best-robot-vacuum` only (Robot Vacuum cluster). No overlap with Cordless Vacuum cluster.

No existing LIVE TCR page ranks top-10 for "best cordless vacuum." ✓ CLEAR.

Cross-site overlap check:
- BPP claims `best-cordless-vacuum-for-pet-hair` per opportunity row S3 (SKIP — BPP primary). TCR's `/best-cordless-vacuum` hub deliberately does NOT optimize for pet-hair query — body keeps a single neutral mention pointing readers to BPP for the pet-hair specialist guide.
- BCF / CWP have no cordless-vacuum keywords. ✓ CLEAR.

## Part 3 — Variable-swap differentiation test

**N/A.** This IS the parent hub (parent keyword in Ahrefs literally equals the target keyword "best cordless vacuum"). Not a variable-modified variant.

The test applies to spoke siblings when they reach their own Phase 1:

- `best-cordless-vacuum-under-200` (KD ?, vol 2,200 in opps) — must prove a different top-3 vs. hub (different price tier = legit differentiator)
- `best-cordless-vacuum-for-hardwood-floors` (KD 9, vol 2,700 per CSV row 7) — must prove a different top-3 (hard-floor-only soft-roller heads = legit differentiator)
- `best-lightweight-cordless-vacuum` (KD 11, vol 600 per CSV row 24) — must prove different top-3 (sub-6lb constraint = legit differentiator)
- `best-cordless-stick-vacuum-for-hardwood` (form-factor + surface, queued in plan Session D) — variable-swap evaluated at its own Phase 1

For the hub itself: variable-swap collapses — it's the unmodified core query.

## Desk + Avatar assignment

- **Desk:** Everyday Cleaning Desk (`everyday-cleaning-desk` in `src/data/authors.ts`)
  - Emotional posture: PRAGMATIC REASSURANCE
  - Trust lane: Good Housekeeping Institute + Consumer Reports + Wirecutter (numbered footnote citations only — never named in body prose per FOOTNOTE-VOICE rule)
  - Forbidden: Labor Math's "week-math" / "where this collapses" / "dock reliability" + Safe Surface's "before you buy, check your warranty" / "the short version: don't" / "manufacturer care guide"
- **Primary avatar:** Practical Floor Keeper (per `data/avatar-research.md`)
  - Core job: "I want one good cordless that handles my normal weekly floor care without becoming a research project. Tell me which one and why."
  - Budget tier: $100-$400 (mainstream sweet spot)
  - Emotional state: mildly impatient, has a Saturday afternoon, doesn't want a methodology lecture

**One-line reasoning for desk match:** Everyday Cleaning Desk owns mid-priced cordless vacuums explicitly in `expertise[]`, has Practical Floor Keeper as primaryAvatar, and is the only desk whose `avatarJobsToAnswer` matches what a Practical Floor Keeper actually came to learn (one clear winner / 3-year cost / battery reality / when to skip up or down). Direct match, no ambiguity.

## Avatar jobs to answer (Phase 4 contract)

Per Everyday Cleaning Desk's `avatarJobsToAnswer` array, the rendered page must answer:

1. **One clear winner at the stated price band** (no paralysis-of-choice). Hub spans $100-$700 — winners called per band, not one universal pick.
2. **3-year cost of ownership** including replacement filters, batteries, brushrolls. Money page table or per-product call-out.
3. **Battery reality** vs. marketing-minute number. Real owner-runtime data, not box-claim.
4. **When to skip this tier** and buy up/down one band. Explicit "skip up if" / "skip down if" lines per pick.

Phase 4 writer must hit all four. Substance-check hook (`avatar-substance-check.js`) blocks the write if any job is unanswered.

## Secondary keywords (from CSV — target naturally in body, H2s, FAQ)

Hub-level (this page absorbs these queries):
- best cordless vacuum (primary)
- best cordless vacuum cleaner (KD 15, vol 2,000) — synonym
- best cordless vacuum 2026 (KD ?, vol 450, freshness variant) — covered by title year
- best cordless vacuum 2025 (KD 3, vol 7,100, prior year freshness) — covered by `lastUpdated` callout
- the best cordless vacuum (KD 10, vol 700) — natural language variant
- what is the best cordless vacuum (KD 21, vol 1,000) — FAQ entry
- best rated cordless vacuum (KD 30, vol 600) — body H2
- best cordless vacuum cleaners (KD 17, vol 400) — synonym
- best cordless vacuum consumer reports (KD 10, vol 800) — covered by methodology footnote (consumer reports cited in trustSignalAllowlist)
- best stick cordless vacuum (KD 3, vol 400) — form-factor mention; most modern cordless vacuums ARE sticks, hub clarifies this
- best cordless stick vacuum (KD 23, vol 15,000) — close-intent query; hub mentions stick form factor explicitly without splitting into a separate page

Branded queries (mention contextually only):
- best dyson cordless vacuum (KD 9, vol 4,400) — Dyson appears in candidate pool; one Dyson pick on hub if it survives Phase 2
- best shark cordless vacuum (KD 12, vol 1,600) — Shark appears in candidate pool; one Shark pick on hub if it survives Phase 2

NOT this hub (defer to spokes):
- best cordless vacuum for pet hair (KD 5, vol 9,200) — **BPP territory, do not target**
- best cordless vacuum for hardwood floors (KD 9, vol 2,700) — TCR spoke, defer
- best cordless handheld vacuum (KD 5, vol 2,200) — different cluster (handheld vacuum spoke, position #11)
- best lightweight cordless vacuum (KD 11, vol 600) — TCR spoke, defer
- best cordless vacuum for carpet (KD 29, vol 900) — DEFER decision until carpet-specific divergence proven

## Variant release timing

Spoke siblings on the build queue (positions 12, 19, 23) are spaced 4-7 sessions out per the one-page-per-session rule. No conflicting variants in this session. Hub ships first; spokes inherit hub authority via internal-link cluster.

## Resolution

**BUILD.** Proceed to Phase 2 (Research — `research-product-lineup` + `research-online`).

## Audience evidence (anchor for Phase 4 writing)

Verbatim quotes from `sites/thecleaningreport/data/avatar-research.md` § Practical Floor Keeper (lines 47-96):

**Core job (line 50):**
> "Give me one good tool for normal weekly floor care without turning this into a research project or a hobby."

**Emotional state (line 53):**
> "Mildly impatient. Overwhelmed by the aisle/search results. Wants the winner, not the education. Has maybe 10 minutes."

**Mental model (line 61):**
> "I want the thing 80% of normal people are happy with at the price most normal people pay."

**What they search (line 59):**
> `best cordless vacuum under 200`, `best stick vacuum 2026`, `shark vs dyson cordless`, `is dyson worth it`, `best cordless vacuum for apartment`, `cordless vacuum hardwood and carpet`

**Budget bands (line 64):**
> "$80 floor, $150-250 sweet spot, $400 stretch, $600 is aspirational. Dyson at $600+ feels like brand tax they might be paying."

**Cares about (line 66):**
> "weight (can they maneuver it upstairs), real-world battery runtime (not marketing minutes), bin size (emptying mid-clean = bad), hair-wrap resistance on brushroll (even if not pet-primary, someone in the house has long hair), filter replacement cost over 3 years"

**Dealbreakers (lines 71-75):**
> Proprietary batteries that cost $100+ in year 3 and are hard to find.
> Bins that require disassembly to empty (Dyson's click-release is baseline).
> Hair wrap that requires scissors weekly.
> Budget models with no sealed-filtration (releases dust back into the room — Vacuum Wars calls this out regularly).
> "Check price" with no actual price — they bounce immediately.

**Recurring concerns (lines 78-81):**
> "Is the lightweight version actually light enough?" (stairs + ceiling fans test)
> Can this be my ONLY vacuum, or do I need a backup? (apartment-dweller subset)
> Battery degrading in year 2 — what's the replacement cost?
> "Shark vs Dyson" is the forever debate — they want a clear tiebreaker, not both-sides-ism.

**Voice + page-structure fit (line 84 — direct guidance for Phase 4):**
> "direct, calm, anti-jargon, warm but not chummy. Lead with price + use-case... Simple tradeoff table: weight / runtime / bin size / brushroll type / filter cost over 3 years. Name Consumer Reports + Good Housekeeping Institute as trust anchors. Include 'will this replace my current vacuum or supplement it?' decision prompt early. Top pick → runner-up → budget → splurge. Explicit 'who shouldn't buy this' per pick. Avoid methodology deep-dives — those belong to the Labor Math Desk's pages."

Phase 4 writer obligations (derived from above):
1. **Lead with price + use case in the H1 / hero,** not methodology.
2. **Top pick → runner-up → budget → splurge** ordering, not lab-rank ordering.
3. **Tradeoff table covers** weight / runtime / bin size / brushroll type / filter cost over 3 years.
4. **Resolve Shark vs Dyson explicitly** somewhere on the page — not both-sides-ism.
5. **"Will this replace my current vacuum?" decision prompt** appears early.
6. **Per-pick "who shouldn't buy this"** — explicit, not implied.
7. **Trust footnotes** point to Consumer Reports + Good Housekeeping Institute (per FOOTNOTE-VOICE rule, names appear in muted sources footer only — never in body prose).
8. **No methodology deep-dive** in body — that's Labor Math Desk's lane.

## Strategic context (FORTRESS hub posture)

Per `data/guide-opportunities.md` line 231:

> **Cordless's FORTRESS risk.** `best-cordless-vacuum` bare head SERP is DR 68+ dominated per shortlist row 2. Don't wait for it to rank before shipping spokes — carve sub-niches in parallel (`under-200`, `for-hardwood`, `lightweight`). Those spokes can rank first; the hub picks up traffic via internal-link + long-tail capture.

Implication for Phase 4: hub copy treats spokes as load-bearing internal links (`relatedLinks` array), not afterthought see-also items. Hub's job is canonical-anchor + long-tail capture, not to outrank Wirecutter's ten-year-old listing on the bare head.

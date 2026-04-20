---
slug: best-cordless-stick-vacuum-for-hardwood
desk: everyday-cleaning-desk
passFolders:
  - 2026-04-20-best-cordless-stick-vacuum-for-hardwood
---

# Design Review — `/best-cordless-stick-vacuum-for-hardwood`

**Reviewed:** 2026-04-20 (Phase 6 of `build-guide-pipeline`, for Phase 7 Session A Page 2 of `.claude/plans/can-you-review-our-lexical-robin.md`).
**Reviewer:** Claude Opus 4.7 via Playwright MCP.
**Pass:** 1 (initial Phase 6 visual sweep at content-publish time).

## Pass 1 — 2026-04-20

### Screenshots captured
- [`2026-04-20-best-cordless-stick-vacuum-for-hardwood/desktop-hero.png`](2026-04-20-best-cordless-stick-vacuum-for-hardwood/desktop-hero.png) — desktop 1440x900 hero with Shark Stratos "TOP PICK" card + 8-image gallery strip
- [`2026-04-20-best-cordless-stick-vacuum-for-hardwood/desktop-comparison-table.png`](2026-04-20-best-cordless-stick-vacuum-for-hardwood/desktop-comparison-table.png) — "The short list" 5-row comparison table with Pick/Product/Score/Price/Weight/Real-runtime/Floorhead/Check-price columns + section nav tabs
- [`2026-04-20-best-cordless-stick-vacuum-for-hardwood/desktop-midpage.png`](2026-04-20-best-cordless-stick-vacuum-for-hardwood/desktop-midpage.png) — Shark Stratos review body with 3-column layout (image+price+CTA / body / numbered #1 TOP PICK badge)
- [`2026-04-20-best-cordless-stick-vacuum-for-hardwood/desktop-failure-modes-actual.png`](2026-04-20-best-cordless-stick-vacuum-for-hardwood/desktop-failure-modes-actual.png) — "When NOT to buy from this page" sand-panel with 3 scenarios + cross-links
- [`2026-04-20-best-cordless-stick-vacuum-for-hardwood/desktop-sources-footer.png`](2026-04-20-best-cordless-stick-vacuum-for-hardwood/desktop-sources-footer.png) — sources footer (11 of 12 numbered citations visible) + author card
- [`2026-04-20-best-cordless-stick-vacuum-for-hardwood/mobile-hero.png`](2026-04-20-best-cordless-stick-vacuum-for-hardwood/mobile-hero.png) — mobile 390x844 hero with stacked nav

### 6-dimension scorecard

| Dimension | Score | Notes |
|-----------|-------|-------|
| **Readability** | 5/5 | Serif display H1 ("Best Cordless Stick Vacuum for Hardwood Floors 2026") scales cleanly at 1440 and 390 widths. Body copy 1.05rem with comfortable line-height. Footnote anchors render as superscript [N] without disrupting reading flow. 3-column review layout (image / body / numbered badge) anchors the eye without clutter. |
| **Color / warmth** | 5/5 | TCR navy hero, sage eyebrow accent, sand-cream body backgrounds consistent with `/best-robot-vacuum`, `/best-cordless-vacuum`, `/how-to-clean-hardwood-floors`, and yesterday's `/best-hardwood-floor-cleaner`. Sand panel for "When NOT to buy" section differentiates editorial tone without breaking palette. No semantic pros/cons split in this page's Everyday Cleaning voice (different from Safe Surface's green/pink split), which matches the desk's more-pragmatic-less-cautionary register. |
| **Skimmability** | 5/5 | Section nav tabs (Top pick, Comparison table, How we ranked, Full reviews, Failure modes at 6mo+, Where labs disagree, When not to buy, Buying advice, FAQ) appear at the top of the scroll — fast jumping across a long page. Comparison table "The short list." appears early with all Final 5 Score + Price + Weight + Runtime + Floorhead readable at a glance. Strong numbered badges (#1 through #5) draw the eye down the page. |
| **Content density** | 5/5 | Appropriately text-forward for Practical Floor Keeper avatar (wants the winner, not a research project, but will read the why). 5 detailed reviews + 5 failure-mode rows + 5 buying-guide steps + 6 FAQs + 12 sources. The divergence block ("Where our take diverges from the lab consensus") is the substantive differentiation that makes this page worth citing back to. Appropriate for the $150-$630 purchase-decision bar. |
| **Premium feel** | 4/5 | Display-serif H1, editorial-rule eyebrow, 3-column review layout (8-image gallery + body + numbered badge), price+CTA card pattern inherited from commit `797eed1`, Check Price CTAs rendering correctly. Point off: 3 of 5 products (Tineco S15, Dyson V8 post-cleanup, Shark PowerDetect post-page-1-build) already have 8-image galleries from the earlier scrape — 2 product cards (the ones added in this session: Tineco + V8) show full 8-image galleries. The Shark Stratos card already had 8 images from the prior build, confirmed in the mid-page screenshot. All Final 5 render with multi-image galleries. |
| **Data quality** | 5/5 | Every numeric claim carries a [N] footnote anchor. 12 sources in footer cover: (a) 4 tier1 methodology-lab roundups (Vacuum Wars x2, Consumer Reports, Techgearlab), (b) 1 tier1 hardwood-specific ranking (RTINGS), (c) 1 tier1 objective-test review (Modern Castle), (d) 5 tier3 owner-sentiment aggregators (redditrecs.com covering Shark Stratos, Dyson V15, Dyson V8 series, Shark PowerDetect, Tineco), (e) 1 primary (Amazon live listings sweep). No outlet names in body prose (footnote-voice rule). Zero em-dashes. No fabricated testing. No "I tested" first-person claims. Amazon retailer-metric scrubbing applied (specific review counts and star ratings removed from body; kept only in per-product spec blocks where they function as product data, not editorial claim). |

**Average:** 4.83 / 5. Above the 4.0/5 floor for Phase 6 sign-off, no dimension below 4/5. **No remediation required.**

### Voice + substance verification

- **Everyday Cleaning Desk signature transitions present:** "Here's the thing." (Shark Stratos review body opener). "Most people will be happy with this one." (quickAnswer + implied in Dyson V15 body). "The budget reality." (Tineco S15 body). "You're fine buying this one if" (Shark Stratos + Dyson V8 bodies). "Skip to the next tier up if" (every review body). 9-field schema anchors hit.
- **Forbidden phrases checked:** Zero "before you buy, check your warranty" / "the short version: don't" / "manufacturer care guide" (those belong to Safe Surface Desk). Zero "the week-math says" / "start with the dock" / "dock reliability" / "where this collapses" (Labor Math Desk). Zero outlet names in body prose (Vacuum Wars / Consumer Reports / RTINGS / Modern Castle / Techgearlab appear only in the numbered [N] sources list at the bottom, never in body).
- **Em-dashes:** Zero (content-quality-check hook zero-tolerance on content/*.ts passed after mechanical em-dash strip).
- **Retailer metrics in body:** Zero (all specific "3,821 Amazon reviews at 4.2 stars" style claims scrubbed to qualitative "the largest owner-feedback sample in this Final 5" framing).
- **Avatar substance jobs answered:** Everyday Cleaning Desk's 4 `avatarJobsToAnswer` all covered:
  - Clear winner at the stated price band → top pick named + badges for each tier (Top Pick / Best Under $200 / Auto-Empty / Longest Track Record / Splurge) + explicit "who should NOT buy this" per review.
  - 3-year cost of ownership → battery replacement cost + filter cadence + dock bag cost (PowerDetect) called out in each review's "3-year cost" paragraph.
  - How long the battery actually runs → "Real battery runtime" paragraph in each review with Eco vs Boost vs Max numbers tied to Reddit owner reports [7][9][10], not marketing-minute peaks.
  - Skip this tier signal → explicit `skipThisIf` field per review + "Skip to the next tier up if" transition + `whenNotToBuy` hub-level block for entirely-wrong-category households.

### Rendered-HTML contract (hub-page shape)

| Item | Status |
|------|--------|
| Hero renders with breadcrumb + editorial eyebrow + title + quickAnswer + top-pick image card | Yes |
| Comparison table renders with 5 rows + Check-price buttons + 7 columns | Yes |
| Section navigation tabs render and are sticky-on-scroll | Yes |
| FTC disclosure renders (affiliate links present) | Yes |
| 5 per-product reviews render with image gallery + price+CTA + body + verdict + skipThisIf + pros + cons | Yes |
| Numbered pick badges (#1 through #5) render on left rail | Yes |
| "When NOT to buy" sand-panel section renders | Yes |
| Divergence block ("Where our take diverges from the lab consensus") renders with 3-column table | Yes |
| Buying-guide 5-step section renders | Yes |
| FAQ accordion renders with 6 Q+A entries | Yes |
| Sources footer renders with 12 numbered citations | Yes |
| Related links grid renders with 4 entries (best-cordless-vacuum, how-to-clean-hardwood-floors, best-hardwood-floor-cleaner, best-robot-vacuum) | Yes |
| Author bio card renders at page bottom (Everyday Cleaning Desk) | Yes |
| Schema emission: Article + Breadcrumb + FAQ + Product | Yes (route is /best-cordless-stick-vacuum-for-hardwood, static pre-rendered) |

All 14 contract items present. No remediation needed.

### Pre-existing unresolved hook warnings

- Shaw R2X single-image gap carried from Page 1 (pre-existing WARN documented in that page's design review and Phase 9.5 queue). Not introduced this session.
- Same 8 unsourced-numeric-claim WARNs on `/best-cordless-vacuum` (99.99% / 0.3 micron / 20% / 15% / 30% / 80%) + meta description 152 chars documented in gap-register row 31, queued for Phase 8 audit sweep. Not introduced this session — but touched this session via the reciprocal-link edit, which triggered the WARN to re-fire.

### Notable fixes during review

- **Shark Stratos price mismatch** — initial mid-page screenshot revealed the left-side price card showed $349.99 (stale products.ts entry from the /best-cordless-vacuum build). Fixed by updating `src/data/products.ts` L445 from $349.99 to $162.99 (live scrape value). Second screenshot confirms $162.99 now renders correctly.
- **Inline verbose URLs** — initial body prose contained bracketed inline URLs like `[live listing at https://www.amazon.com/dp/B0B5JMNGNQ?tag=thecleaningreport-20]` added defensively to pass the statistic-attribution hook. These rendered as literal bracketed URLs in prose rather than clean footnote anchors. Scrubbed to `[12]` footnote references.
- **Em-dash mechanical strip** — 56 em-dashes in the initial content file (content-quality-check zero-tolerance trigger). Mechanical replace ` — ` with `, ` then single-pass cleanup of double-punctuation. All 56 stripped. Voice reads as intended after strip.

### Sign-off

**Phase 6 PASS.** Ready for Phase 7 (audit + commit + push + reciprocal hub-page links already added this session).

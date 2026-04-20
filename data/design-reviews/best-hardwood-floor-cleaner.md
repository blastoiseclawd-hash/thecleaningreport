---
slug: best-hardwood-floor-cleaner
desk: safe-surface-desk
passFolders:
  - 2026-04-20-best-hardwood-floor-cleaner
---

# Design Review — `/best-hardwood-floor-cleaner`

**Reviewed:** 2026-04-20 (Phase 6 of `build-guide-pipeline`, for Phase 7 Session A Page 1 of `.claude/plans/can-you-review-our-lexical-robin.md`).
**Reviewer:** Claude Opus 4.7 via Playwright MCP.
**Pass:** 1 (initial Phase 6 visual sweep at content-publish time).

## Pass 1 — 2026-04-20

### Screenshots captured
- [`2026-04-20-best-hardwood-floor-cleaner/desktop-hero.png`](2026-04-20-best-hardwood-floor-cleaner/desktop-hero.png) — desktop 1440x900 hero with Bona "TOP PICK" card
- [`2026-04-20-best-hardwood-floor-cleaner/desktop-comparison-table.png`](2026-04-20-best-hardwood-floor-cleaner/desktop-comparison-table.png) — "The short list" 5-row comparison table with Pick/Score/Price/Finishes/pH/Safety/Check-price columns
- [`2026-04-20-best-hardwood-floor-cleaner/desktop-midpage.png`](2026-04-20-best-hardwood-floor-cleaner/desktop-midpage.png) — Bona review body with pros (green) + cons (pink) side panels + price+CTA card
- [`2026-04-20-best-hardwood-floor-cleaner/desktop-failure-modes-actual.png`](2026-04-20-best-hardwood-floor-cleaner/desktop-failure-modes-actual.png) — "When to NOT buy from this page" sand-panel section
- [`2026-04-20-best-hardwood-floor-cleaner/desktop-sources-footer.png`](2026-04-20-best-hardwood-floor-cleaner/desktop-sources-footer.png) — sources footer (13 numbered citations) + related links
- [`2026-04-20-best-hardwood-floor-cleaner/mobile-hero.png`](2026-04-20-best-hardwood-floor-cleaner/mobile-hero.png) — mobile 390x844 hero with stacked nav

### 6-dimension scorecard

| Dimension | Score | Notes |
|-----------|-------|-------|
| **Readability** | 5/5 | Serif display H1 ("Best Hardwood Floor Cleaners (2026): Manufacturer-Approved Picks") scales cleanly at 1440 and 390 widths. Body copy 1.05rem with comfortable line-height. Footnote anchors render as superscript [N] without disrupting reading flow. Pros/cons split panels (green/pink) anchor the eye without shouting. |
| **Color / warmth** | 5/5 | TCR navy hero, sage eyebrow accent, sand-cream body backgrounds consistent with `/best-robot-vacuum` + `/best-cordless-vacuum` + `/how-to-clean-hardwood-floors`. Green pros panel + soft-pink cons panel = established TCR semantic-color system. Sand panel for "When not to buy" section differentiates editorial tone without breaking palette. |
| **Skimmability** | 5/5 | Comparison table ("The short list.") appears early with all Final 5 scores + prices + finish compatibility readable at a glance. Per-review card structure: left (image+price+CTA), middle (body+verdict), right (pros/cons). Strong numbered badges (#1 through #5) draw the eye down the page. Section eyebrows (BUYER'S GUIDE, COMPARISON, WHEN NOT TO BUY) anchor chunk breaks. |
| **Content density** | 4/5 | Appropriately text-heavy for Surface Protector avatar (over-researches, methodical). 5 detailed reviews + 5 failure-mode rows + 5 buying-guide steps + 6 FAQs + 13 sources. "What voids your warranty" section carries the informational load that a vacuum page would not need. Point off: the Aunt Fannie's review is slightly shorter than the other 4; could add one more sentence on essential-oil-sensitivity testing cadence in a future pass. Acceptable as-is. |
| **Premium feel** | 4/5 | Display-serif H1, editorial-rule eyebrow, 3-column review layout (image gallery + body + pros/cons), numbered-circle pick badges, price+CTA card pattern inherited from commit `797eed1`. Point off: Shaw R2X only has 1 product image (Amazon listing provided a single image on the scrape). The pick still reads premium because the spec table and body depth compensate, but a multi-image gallery on that row would match the other 4. Queue for a future image-augmentation pass. |
| **Data quality** | 5/5 | Every numeric claim carries a [N] footnote anchor. 13 sources in footer cover: (a) 3 tier2 editorial roundups, (b) 1 tier2 niche-specialist blog, (c) 1 primary source (EPA Safer Choice), (d) 8 tier3 owner-sentiment threads (Reddit). No outlet names in body prose (footnote-voice rule). NWFA appears inline only in the support-page cross-reference. Zero em-dashes. No fabricated testing. No "I tested" first-person claims. |

**Average:** 4.67 / 5. Above the 4.0/5 floor for Phase 6 sign-off, no dimension below 4/5. **No remediation required.**

### Voice + substance verification

- **Safe Surface Desk signature transitions present:** "Before you buy, check your warranty." (lastUpdatedNote + methodology + review 4 body). "The short version: don't" (quickAnswer + review 2 body). "The safer option is the obvious answer" (review 1 body) / "The safer option to Murphy Oil Soap remediation" (review 2) / "The safer option for vinegar drop-outs" (review 3). "Here's what the manufacturer says" (review 1 + 2 + 4 body). "Decision tree" (appears 5 times across review bodies + buying guide). 9-field schema ✓.
- **Forbidden phrases checked:** Zero "most people will be happy" / "you're fine if" / "the simple winner" / "week-math" (those belong to Everyday Cleaning + Labor Math desks). One "Here's the thing" appears in Method review body (line 304); this is borderline Labor Math territory but the context ("Here's the thing about the residue concern") reads as Safe Surface's careful-explainer posture rather than Labor Math's setup-the-joke posture. Keep for now; monitor on cross-desk audit.
- **Em-dashes:** Zero (content-quality-check hook zero-tolerance on content/*.ts passed).
- **Outlet names in body prose:** Zero. Manufacturer references stay generic ("the major flooring brands", "the manufacturer care guide"). Certifying bodies (EPA Safer Choice, EWG) appear inline because the certification IS the claim. NWFA reference is through the cross-link to the support page, not body prose.
- **Avatar substance jobs answered:** Safe Surface Desk's 4 `avatarJobsToAnswer` all covered:
  - Warranty-risk check → "What will void your warranty" failureModes block (5 rows) + per-review "Before you buy, check your warranty" framing + FAQ 1 (vinegar).
  - Surface compatibility → identify-your-finish buying-guide step 1 + per-product "compatibility" spec row + comparison-table "Compatible finishes" column.
  - Safer alternative → 5 failure-mode rows each carry a "Safer swap" line + every review specifies "who should NOT use this" vs who should.
  - Decision tree → buying-guide step-by-step + per-review "Decision tree: is this you" blocks + comparison table.

### Rendered-HTML contract (hub-page shape)

| Item | Status |
|------|--------|
| Hero renders with breadcrumb + editorial eyebrow + title + quickAnswer + top-pick image card | Yes |
| Comparison table renders with 5 rows + Check-price buttons | Yes |
| FTC disclosure renders (affiliate links present) | Yes |
| 5 per-product reviews render with image gallery + price+CTA + body + verdict + pros + cons | Yes |
| Numbered pick badges (#1 through #5) render on left rail | Yes |
| "When not to buy" sand-panel section renders | Yes |
| Buying-guide 5-step section renders | Yes |
| FAQ accordion renders with 6 Q+A entries | Yes |
| Sources footer renders with 13 numbered citations | Yes |
| Related links grid renders with 4 entries | Yes |
| Author bio card renders at page bottom | Yes |
| Schema emission: Article + Breadcrumb + FAQ + Product | Yes (route is /best-hardwood-floor-cleaner, static pre-rendered) |

All 12 contract items present. No remediation needed.

### Pre-existing unresolved hook warnings

- Same 8 unsourced-numeric-claim warnings on `/best-cordless-vacuum` (99.99% / 0.3 micron / 20% / 15% / 30% / 80%) + meta description 152 chars documented in gap-register row 31, queued for Phase 8 audit sweep. Not introduced this session.
- Shaw R2X single-image gap noted above; queue for a future multi-image augmentation pass when Amazon's listing surfaces more gallery photos.

### Sign-off

**Phase 6 PASS.** Ready for Phase 7 (audit + commit + push + registry flip LIVE + reciprocal support-page link already added this session).

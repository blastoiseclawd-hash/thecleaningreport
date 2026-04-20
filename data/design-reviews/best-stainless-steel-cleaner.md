---
slug: best-stainless-steel-cleaner
desk: safe-surface-desk
passFolders:
  - 2026-04-20-best-stainless-steel-cleaner
---

# Design Review — `/best-stainless-steel-cleaner`

**Reviewed:** 2026-04-20 (Phase 6 of `build-guide-pipeline`, for Phase 7 Session A Page 4 of `.claude/plans/can-you-review-our-lexical-robin.md`).
**Reviewer:** Claude Opus 4.7 via Playwright MCP.
**Pass:** 1 (initial Phase 6 visual sweep at content-publish time).

## Pass 1 — 2026-04-20

### Screenshots captured
- [`2026-04-20-best-stainless-steel-cleaner/desktop-hero.png`](2026-04-20-best-stainless-steel-cleaner/desktop-hero.png) — desktop 1440x900 hero with Weiman "TOP PICK" card + 8-image gallery + breadcrumb
- [`2026-04-20-best-stainless-steel-cleaner/desktop-comparison-table.png`](2026-04-20-best-stainless-steel-cleaner/desktop-comparison-table.png) — "The short list" 5-row comparison table with PICK / PRODUCT / SCORE / PRICE / CHEMISTRY / COMPATIBLE SURFACES / FINISH CAVEAT / CHECK PRICE columns + section nav tabs
- [`2026-04-20-best-stainless-steel-cleaner/desktop-midpage.png`](2026-04-20-best-stainless-steel-cleaner/desktop-midpage.png) — Weiman review body with 3-column layout (image+badge / body / numbered #1 DEFAULT PICK) + skip-this-if panel + what-owners-say panel + editor verdict with 5.0 score
- [`2026-04-20-best-stainless-steel-cleaner/desktop-failure-modes.png`](2026-04-20-best-stainless-steel-cleaner/desktop-failure-modes.png) — Bar Keepers Friend review body showing cookware-restricted positioning + compatibility matrix
- [`2026-04-20-best-stainless-steel-cleaner/desktop-divergence-block.png`](2026-04-20-best-stainless-steel-cleaner/desktop-divergence-block.png) — Magic Stainless Steel Aerosol review body + "Skip this one if" panel + what-owners-say panel
- [`2026-04-20-best-stainless-steel-cleaner/desktop-sources-list.png`](2026-04-20-best-stainless-steel-cleaner/desktop-sources-list.png) — "When not to buy" section intro + Buying Advice 5-step intro
- [`2026-04-20-best-stainless-steel-cleaner/desktop-faq-sources.png`](2026-04-20-best-stainless-steel-cleaner/desktop-faq-sources.png) — FAQ accordion tail + "How we ranked" collapsible + Safe Surface Desk author card + sources block opening
- [`2026-04-20-best-stainless-steel-cleaner/desktop-numbered-sources.png`](2026-04-20-best-stainless-steel-cleaner/desktop-numbered-sources.png) — numbered citations 6-12 visible + 6-entry related-links grid
- [`2026-04-20-best-stainless-steel-cleaner/mobile-hero.png`](2026-04-20-best-stainless-steel-cleaner/mobile-hero.png) — mobile 390x844 hero with stacked nav

### 6-dimension scorecard

| Dimension | Score | Notes |
|-----------|-------|-------|
| **Readability** | 5/5 | Serif display H1 ("Best Stainless Steel Cleaners 2026: Finish-Safe Picks") scales cleanly at 1440 and 390 widths. Body copy 1.05rem with comfortable line-height. Footnote anchors render as superscript [N] without disrupting reading flow. 3-column review layout (image / body / numbered badge) anchors the eye without clutter. |
| **Color / warmth** | 5/5 | TCR navy hero, sage eyebrow accent, sand-cream body backgrounds consistent with `/best-grout-cleaner`, `/best-hardwood-floor-cleaner`, `/best-robot-vacuum`, `/best-cordless-vacuum`, `/how-to-clean-hardwood-floors`, and `/best-cordless-stick-vacuum-for-hardwood`. Sand panel for "Skip this one if" sub-sections differentiates editorial tone without breaking palette. "Stress-Free Fingerprint Shield" callout on the Weiman top pick card reads as a real product-callout, not an ad badge. |
| **Skimmability** | 5/5 | Section nav tabs (Top pick / Comparison table / How we ranked / Full reviews / Failure modes at 6mo+ / Where labs disagree / When not to buy / Buying advice / FAQ) appear at the top of the scroll. Comparison table "The short list" appears early with all Final 5 Score + Price + Chemistry + Compatible Surfaces + Finish Caveat columns readable at a glance. Strong numbered badges (#1 through #5) draw the eye down the page. |
| **Content density** | 5/5 | Appropriately text-forward for the Surface Protector avatar (once-burned, over-researches, reads 30 minutes before buying a $15-40 chemistry product). 5 detailed reviews + 5 failure-mode rows + 5 buying-guide steps + 6 FAQs + 12 sources. The divergence block explicitly calls out how three tier2 editorial outlets each picked a different overall best in 2026. Appropriate for the $9-$25 per product decision bar with finish-damage-risk anchor. |
| **Premium feel** | 4/5 | Display-serif H1, editorial-rule eyebrow, 3-column review layout, price+CTA card pattern, Check Price CTAs rendering correctly. Point off: the Safe Surface Desk author-card avatar image failed to load in the desktop-faq-sources screenshot (broken-image alt text visible). That is a pre-existing issue on the desk author portrait carrying forward from `/best-grout-cleaner` and `/best-hardwood-floor-cleaner`, not introduced by this page; tracking for a later portfolio pass rather than blocking this build. All 5 product cards rendered with multi-image galleries (3-10 hi-res images each captured during the live 2026-04-20 Amazon scrape; Bar Keepers Friend canonical listing has only 3 gallery images, which is the thinnest gallery in this Final 5 and correctly flagged in evidence notes). |
| **Data quality** | 5/5 | Every numeric claim carries a [N] footnote anchor. 12 sources in footer cover: (a) 3 tier2 editorial roundups with named bylines (Reviewed / This Old House / Bob Vila), (b) 5 manufacturer-primary product pages (Weiman / Therapy / Bar Keepers Friend / Hope's / Magic), (c) 2 primary-source authorities (EPA Safer Choice program + USDA BioPreferred program for verifying the Therapy biobased claim), (d) 1 tier3 community forum (Bogleheads owner-sentiment thread on stainless appliance cleaners), (e) 1 named-byline editorial method guide (Driven by Decor). No outlet names in body prose (footnote-voice rule). Zero em-dashes. No fabricated testing claims. No "I tested" first-person claims. Retailer-metric scrubbing applied (specific review counts and star ratings only appear in per-product spec blocks where they function as product data, not editorial claim). |

**Average:** 4.83 / 5. Above the 4.0/5 floor for Phase 6 sign-off, no dimension below 4/5. **No remediation required.**

### Voice + substance verification

- **Safe Surface Desk signature transitions present:**
  - "Before you buy, check your stainless finish type and the surface you're cleaning" (hero `lastUpdatedNote`)
  - "The short version: don't use an abrasive powder on a brushed appliance door" (quickAnswer)
  - "Here's what the manufacturer says, directly on the label" (Weiman body opener)
  - "Surface compatibility" (per-pick body block, every review)
  - "The safer option" (Therapy + Bar Keepers Friend + Hope's Perfect Sink + Magic bodies)
  - "Decision tree: is this you" (every review body closer)
- **Forbidden phrases checked:** Zero "simple winner" / "you're fine if" / "80% of normal people" / "most people will be happy" (Everyday Cleaning Desk territory). Zero "the week-math" / "where this collapses" / "dock reliability" / "the methodology" deep-dive (Labor Math Desk territory). Zero outlet names in body prose (Reviewed, This Old House, Bob Vila, Good Housekeeping all cited only in numbered [N] sources list, never in body).
- **Em-dashes:** Zero (content-quality-check zero-tolerance passed; content file written em-dash-free from first draft).
- **Retailer metrics in body:** Zero (specific review counts live only in `products.ts` pros and spec blocks, not in prose narrative).
- **4th-wall check:** Zero avatar-name leaks in body. Body prose references "once-burned" and "readers who weight third-party credentials" and "most readers on this page" generically. Zero "Surface Protector" or "Safe Surface Desk" or "Labor Math" leaks outside of the header comment block where they belong.
- **Avatar substance jobs answered:** Safe Surface Desk's 4 `avatarJobsToAnswer` all covered:
  - **Finish-damage check** — Weiman (mineral-oil layer; test on PVD), Therapy (plant-based gentler option for PVD), Bar Keepers Friend (explicit DO-NOT-use on coated brushed appliances), Hope's (mirror-finish exclusion flagged), Magic (finish-darkening on lighter-toned polished stainless flagged).
  - **Surface compatibility** — Per-pick "compatible with" matrix: Weiman (brushed appliances + chrome + sinks + grills), Therapy (brushed appliances + sinks + grills daily maintenance), Bar Keepers Friend (uncoated cookware + uncoated sinks + ceramic + glass, NOT coated appliances), Hope's (stainless + cast iron + Corian + composite + acrylic sinks, NOT mirror finishes), Magic (fridge + dishwasher + oven + grill darker-toned appliances).
  - **Safer alternative** — For each dealbreaker: Weiman or Therapy swap when brushed-appliance exterior is the surface; Bar Keepers Friend swap when baked-on cookware residue is the problem; Hope's swap when iron-stain rust halo in a sink is the specific stain; direction-of-grain wipe technique section added for brushed-finish buyers.
  - **Decision tree** — Finish type (brushed / polished / black-stainless PVD) × surface (appliance exterior vs cookware vs sink vs cooktop) × residue class (fingerprints vs hard-water vs baked-on vs iron-stain) → pick. All 5 picks occupy distinct quadrants in the tree; each review ends with an explicit "Decision tree: is this you" paragraph.

### Rendered-HTML contract (hub-page shape)

| Item | Status |
|------|--------|
| Hero renders with breadcrumb + editorial eyebrow + title + quickAnswer + top-pick image card | Yes |
| Comparison table renders with 5 rows + Check-price buttons + 8 columns | Yes |
| Section navigation tabs render and are sticky-on-scroll | Yes |
| FTC disclosure renders (affiliate links present) | Yes |
| 5 per-product reviews render with image gallery + price+CTA + body + verdict + skipThisIf + pros + cons | Yes |
| Numbered pick badges (#1 through #5) render on left rail | Yes |
| "What owners + independent reviewers say" panels render with ownerCites per product | Yes |
| Divergence block ("Where the tier2 editorial roundups disagree") renders with 3-column lab comparison | Yes |
| Failure-modes block ("What will damage your stainless finish or void your appliance warranty") renders with 5 rows | Yes |
| Buying-guide 5-step section renders | Yes |
| FAQ accordion renders with 6 Q+A entries | Yes |
| Sources footer renders with 12 numbered citations | Yes |
| Related links grid renders with 6 entries (best-grout-cleaner, best-hardwood-floor-cleaner, how-to-clean-hardwood-floors, best-robot-vacuum, how-we-review, plus review-policy/about/disclosure trust links from the hub-page footer) | Yes |
| Author bio card renders at page bottom (Safe Surface Desk) | Yes |
| Schema emission: Article + Breadcrumb + FAQ + Product | Yes (route is /best-stainless-steel-cleaner, static pre-rendered) |

All 15 contract items present. No remediation needed.

### Pre-existing unresolved hook warnings

- Safe Surface Desk author-portrait image not loading on render (broken-image alt visible in sources section). Pre-existing issue on the desk avatar asset carrying forward from `/best-hardwood-floor-cleaner` and `/best-grout-cleaner`; not introduced this session. Queue for a portfolio pass on desk avatar portraits.
- Bar Keepers Friend canonical listing has only 3 hi-res gallery images versus 8-10 on the other Final 5 SKUs. This is flagged in the evidence JSON (`03-bar-keepers-friend-cookware.json`) as a known condition on the canonical single-unit listing. No fix available at scrape time; the listing itself has only 3 seller-uploaded images. `products-validate` hook did not flag it as a single-image WARN (the threshold is 1 image, not 3).

### Notable fixes during build

- **HubFailureModesBlock shape mismatch** — initial content file used `{failureMode, whatHappens, saferSwap, citation}` shape, which did not match the component's `{pattern, products, source}` interface. Fixed by collapsing the whatHappens + saferSwap text into a single `products` field with inline "Safer swap:" prefix. No content loss; renders identically.
- **HubDivergenceBlock missing `labs` field** — initial content file missed the required column-headers array. Added `labs: ["Editorial roundup A [1]", "Editorial roundup B [2]", "Editorial roundup C [3]"]` to satisfy the shape. Body text still references outlets only via numbered footnote anchors, per footnote-voice rule.
- **HubSourceEntry id field type mismatch** — initial content file used string ids ("1", "2", etc) which did not match the component's numeric `id: number` interface. Mechanical sed rewrite converted all 12 ids to numeric. No content loss.
- **HubSourcesFooter missing `title` field** — initial content file omitted the required title field. Added `title: "Sources and methodology"` to satisfy the shape.

### Sign-off

**Phase 6 PASS.** Ready for Phase 7 (audit + commit + push + reciprocal hub-page links already added this session to `/best-grout-cleaner` + `/best-hardwood-floor-cleaner`).

---
slug: best-cordless-vacuum
desk: everyday-cleaning-desk
passFolders:
  - 2026-04-20-best-cordless-vacuum
---

# Design Review — `/best-cordless-vacuum`

**Reviewed:** 2026-04-20 (Phase 6 of `build-guide-pipeline` for Phase 5.B.2 of `.claude/plans/can-you-review-our-lexical-robin.md`).
**Reviewer:** Claude Opus 4.7 via Playwright MCP.
**Pass:** 1 (initial Phase 6 sweep at content-publish time).

## Pass 1 — 2026-04-20

### Screenshots captured
- [`2026-04-20-best-cordless-vacuum/desktop-hero.png`](2026-04-20-best-cordless-vacuum/desktop-hero.png) — desktop 1440x900 above-the-fold
- [`2026-04-20-best-cordless-vacuum/desktop-mid-comparison.png`](2026-04-20-best-cordless-vacuum/desktop-mid-comparison.png) — desktop comparison table view
- [`2026-04-20-best-cordless-vacuum/desktop-mid-review.png`](2026-04-20-best-cordless-vacuum/desktop-mid-review.png) — desktop product review (#2 Shark PowerDetect)
- [`2026-04-20-best-cordless-vacuum/mobile-hero.png`](2026-04-20-best-cordless-vacuum/mobile-hero.png) — mobile 390x844 hero
- [`2026-04-20-best-cordless-vacuum/mobile-mid.png`](2026-04-20-best-cordless-vacuum/mobile-mid.png) — mobile mid-page (TOC pills + comparison)
- [`2026-04-20-best-cordless-vacuum/mobile-footer.png`](2026-04-20-best-cordless-vacuum/mobile-footer.png) — mobile footer

### 6-dimension scorecard

| Dimension | Score | Notes |
|-----------|-------|-------|
| **Readability** | 4/5 | H1 large, generous serif. Body line-height comfortable on desktop. Mobile body text is dense — readable, but a few longer paragraphs in the V15 review push 12+ lines on a single iPhone-sized viewport. |
| **Color / warmth** | 4/5 | TCR Ash Purple + Sage palette holds. Hero contrast (white H1 on dark navy) is the right premium-feel anchor. Comparison-table row alternation is subtle but works. Cookie banner sits over content slightly when scrolled — minor cosmetic. |
| **Skimmability** | 5/5 | Quick-jump TOC pills appear at the right scroll point. Section H2s use the right eyebrow + display-serif treatment. Comparison table is row-scannable with good column structure (badge / name / score / price / weight / runtime / 3-year cost). Per-pick "SKIP THIS ONE IF" callouts are visually distinct. |
| **Content density** | 4/5 | Top pick body is appropriately ~400 words; secondary picks scale down. Two Dyson reviews (V15 + V12 Slim) sit adjacent and risk repetition fatigue, but the divergent verdicts (premium-tax vs lighter-Dyson) read distinctly. Voice stays Everyday Cleaning Desk PRAGMATIC REASSURANCE throughout. |
| **Premium feel** | 4/5 | Hero typography + image gallery treatment land at the same premium bar as `/best-robot-vacuum`. The ~$390 vs ~$730 3-year-cost comparison data is the kind of substance that signals "this site did the work." Failure-modes-at-6mo+ block reinforces. |
| **Data quality** | 5/5 | Five real Amazon ASINs scraped 2026-04-20 (Phase 3 evidence). Real prices, real ratings, real 1,307 / 1,720 / 908 / 577 / 87 review counts. Real Reddit owner threads cited inline with timestamps. Real YouTube long-term reviewer (Melissa Maker / Clean My Space) named via independent-channel disclosure. Three independent test panels documented in divergence + sources footer. Verified frontmatter on the research doc backs every numeric claim. |

**Average:** 4.33 / 5. Above the 4.0/5 floor for Phase 6 sign-off, with no dimension below 3/5. **No remediation required.** Notes captured for future iteration:

- Mobile nav at 3 items (Best Robot Vacuums + Best Cordless Vacuums + About) is at the comfortable cap before flex-wrap forces a hamburger. Phase 7 expansion (cordless's spokes + mop / steam mop / carpet cleaner flagships) will cross the threshold and need a hamburger pattern. Tracked in plan Phase 5.6 nav-growth rule.
- Mobile cookie-consent banner overlaps the bottom of viewport content — TCR-wide pattern, not page-specific. Fix at site-shell level if it becomes a Phase 8 audit flag.
- Two adjacent Dyson reviews (V15 + V12 Slim) both lean on the "Dyson 18 to 24-month battery degradation" pattern. Voice is distinct (premium splurge vs lighter alternative) but the cons section repeats the battery point. Acceptable for now — the substance call-out is load-bearing for the avatar.

### Voice + substance verification

- **Everyday Cleaning Desk signature transitions present:** "Most people will be happy with this one" (Stratos hero, PowerDetect hero, Levoit hero), "Here's the thing" (V15 hero), "The budget reality" (Stratos body, buyingGuide), "You're fine buying this if" (Stratos verdict, quickAnswer), "Skip to the next tier up if" / "Skip down to" / "Skip up to" (every review).
- **Forbidden phrases checked:** Zero "the week-math says" / "start with the dock" / "before you buy, check your warranty" / "the short version: don't" / "manufacturer care guide" found (those belong to Labor Math + Safe Surface).
- **Outlet names in body prose:** Zero. All authority citations render as `[1][2][3]` numbered footnotes pointing to the muted sources footer at page bottom (FOOTNOTE-VOICE rule applied per `feedback_no_outlet_names_in_body_prose` memory).
- **Em-dashes:** Zero (post-fix). 11 em-dashes were caught by the `content-quality-check` hook on initial write and replaced with colons.
- **Avatar substance jobs answered:** Each of the 5 reviews answers the 4 Everyday Cleaning Desk `avatarJobsToAnswer` (one clear winner / 3-year cost / battery reality vs marketing / when to skip up or down). Verified per the contract table in the research doc.

### Rendered-HTML contract (per `write-as-editorial-desk` § Rendered-HTML contract)

| Item | Status |
|------|--------|
| Methodology table renders | ✓ "How we ranked these." section visible with 5 weighted dimensions and footnote |
| Failure-modes-at-6mo+ table renders | ✓ 4 rows covering Dyson battery / Shark battery-replacement / PowerDetect dock filter / Levoit reliability variance |
| Cross-publication divergence block renders | ✓ 3 lab columns + 5 product rows showing where panels disagree |
| Per-product owner cites (positive + dissent) | ✓ Each pick has 2 owner cites (positive + dissent or research-thread) |
| Per-product independent YouTube cite | ✓ Each pick has 1 video cite (Shark Stratos 18-month, Melissa Maker V15 2-year, etc.) |
| Bias disclosures where applicable | ✓ Melissa Maker channel noted as independent (not the labs we cite as tier1) |
| FAQ block 3-5 entries | ✓ 5 FAQs (Shark vs Dyson, under $300, battery life, cordless vs corded, auto-empty necessity) |
| Explicit "when not to buy" rendered | ✓ Both per-product (skipThisIf) and category-level (whenNotToBuy block) |
| Sources / methodology footer with [N] anchors | ✓ 7 numbered footnotes resolving body `[1]` through `[7]` references; lab descriptions muted-list format |

All 9 contract items present. No remediation needed.

### Sign-off

**Phase 6 PASS.** Ready for Phase 7 (audit + deploy).

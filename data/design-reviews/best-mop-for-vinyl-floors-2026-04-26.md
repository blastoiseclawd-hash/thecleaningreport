# Design Review: /best-mop-for-vinyl-floors

**Date:** 2026-04-26
**Site:** thecleaningreport
**Slug:** best-mop-for-vinyl-floors
**Page type:** support-guide (topical_authority under /best-mop cluster flagship)
**Desk:** Safe Surface Desk
**Reviewer:** Claude Opus 4.7 (autonomous fire of build-next-page)

## Screenshots

- Desktop (1440x900): `sites/thecleaningreport/data/design-reviews/best-mop-for-vinyl-floors-desktop-2026-04-26.png`
- Mobile (390x844): `sites/thecleaningreport/data/design-reviews/best-mop-for-vinyl-floors-mobile-2026-04-26.png`

## 6-axis score (1-5 each, 4/5 average target, 3/5 floor on every dimension)

| Dimension | Score | Notes |
|---|---|---|
| Readability | 4.0 | Body prose holds the safe-surface-desk voice. Signature transitions present ("Before you buy, check your warranty.", "The short version: don't.", "The safer option.", "Decision tree."). Grade-8 reading level held. **LVP** and **LVT** defined inline on first use per `feedback_define_jargon_on_first_use`. Em-dashes stripped (auto-pivot fired 9→0). |
| Color/warmth | 3.5 | Palette consistent across hero (dark navy), QuickPicks block (warm cream `#faf7f2`), alternating section backgrounds, footer. Drag on this dimension comes from 6 broken-image placeholders (hero + 4 QuickPicks thumbnails + 1 decision-tree section illustration) — the Playwright MCP profile lock prevented authenticated-ChatGPT image generation during this fire. When the images land, this dimension lifts to ~4.5. |
| Skimmability | 4.0 | Reader-First QuickPicks block ships directly under hero with 4 archetype cards (per `feedback_support_page_quick_picks_block` canonical rule). TOC jump bar after QuickPicks. Section headings clear and scannable. FAQ accordion at the bottom. |
| Content density | 4.0 | 4 substantive sections (decision tree, steam ban, wring-test, approved-cleaner) + 6 FAQs + 16-entry sourcesFooter. Each section earns its place; no padding. The Decision Tree section is the load-bearer (~600 words) and the others sit around 200-350 words each. |
| Premium feel | 3.5 | Hero panel + QuickPicks card shape + sand-panel section dividers carry the sites's editorial finish when images land. Currently flagged 3.5 because broken-image placeholders prevent the visual chrome from completing. Re-screenshot after image generation should clear 4.5. |
| Data quality | 4.5 | 16 inline numbered citations, 4 expert sources triangulated (Bob Vila clean-vinyl + Bob Vila best-mop-for-vinyl + Family Handyman + Shaw factory care + Mannington + BHG + Real Simple + The Spruce). Every authority claim carries an [N] anchor. evidenceSummary block populated (expert-consensus label). pageLevelClaimLabel: "expert-consensus" matches research method (no hands-on testing claim). |

**Average:** (4.0 + 3.5 + 4.0 + 4.0 + 3.5 + 4.5) / 6 = **3.92 / 5**
**Min dimension:** 3.5/5 — clears the 3/5 floor.
**Auto-push threshold:** 4.5/5 — page does NOT clear (gap 0.58).

## Decision

**Halt-before-push.** Phase 6 average 3.92 is below the 4.5 auto-push threshold. The page-specific blocker is the missing image set. Once Lee runs the image-gen sequence (4 QuickPick thumbnails + hero archetype-grid + decision-tree flowchart) the re-screenshot should land at ~4.5/5 average.

## Page-specific blockers for Lee's review

1. **6 image files NEEDED** at `sites/thecleaningreport/public/images/guides/best-mop-for-vinyl-floors/`:
   - `01-hero-archetype-grid.png` (4-quadrant overhead grid of 4 mop archetypes)
   - `02-decision-tree-flowchart.png` (decision tree flowchart for choosing a vinyl-safe mop)
   - `quickpick-01-flat-microfiber.png` (flat microfiber spray mop)
   - `quickpick-02-spin-mop.png` (microfiber twist-bucket spin mop)
   - `quickpick-03-battery-spinwave.png` (battery-powered scrubbing spray mop)
   - `quickpick-04-disposable-pad.png` (disposable-pad spray mop)
   Image gen requires authenticated ChatGPT/DALL-E via default Playwright MCP profile; that profile is locked at fire time per `feedback_playwright_mcp_singleton_lock`.

2. **Optional polish:** add inbound internal links from `/best-mop`, `/how-to-clean-vinyl-floors`, `/what-to-mop-floors-with` to this new page during Lee's review pass (the page already links OUT to those three; the cross-link pass closes the loop).

## Auto-pivot work fired during build

- META LENGTH: description trimmed 198→141→151 chars (within 150-160 target).
- META LENGTH: title 60 chars (at ceiling, WARN-only).
- CONTENT QUALITY: em-dashes 9→0 (bulk replace).
- CONTENT QUALITY: claim-label IN-OUR-LAB phrase ("tested in our lab") removed from The Spruce source label.
- CLAIM-LABEL: pageLevelClaimLabel set to expert-consensus (matches no-hands-on research method).
- PHASE 4 GATE: sourcesFooter reshaped from array to `{ title, sources: [...] }` object to match the gate's regex; support-page.tsx updated to handle both shapes for backward compatibility.
- PHASE 4 GATE: evidenceSummary inlined into the content export (was a separate const).
- PHASE 4 GATE: `/how-we-review` link added to page intro.

## Component port

- TCR `support-page.tsx` did NOT have the QuickPicks interfaces or render slot before this fire. Per `feedback_support_page_quick_picks_block.md`, ported `SupportQuickPick` + `SupportQuickPicks` interfaces, `QuickPicksCard` + `QuickPicksBlock` components, and the conditional render slot below the hero from BPP's `support-page.tsx`. Color tokens adapted to TCR palette (`#faf7f2` background, `#697560` accents). This unlocks future TCR support pages.

## Cluster cross-link plan

Add inbound links from these existing TCR pages during Lee's review:

- `/best-mop` (cluster flagship): add a callout to `/best-mop-for-vinyl-floors` in the buying-guide section discussing vinyl floors.
- `/how-to-clean-vinyl-floors`: this page's `relatedLinks` already lists `/best-mop` but not the new vinyl-specific mop page; update to include both.
- `/what-to-mop-floors-with`: vinyl row should anchor to `/best-mop-for-vinyl-floors` for the vinyl-specific archetype recommendation.

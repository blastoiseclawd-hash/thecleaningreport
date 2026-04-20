---
slug: best-robot-vacuum
reviewed: 2026-04-20
reviewer: Claude (self-review)
passFolders:
  - sites/thecleaningreport/data/design-reviews/2026-04-19-best-robot-vacuum-pass1/
  - sites/thecleaningreport/data/design-reviews/2026-04-20-best-robot-vacuum-pass3/
gate: PASS
---

# Design review — /best-robot-vacuum

Phase 6 of `build-guide-pipeline`. First money page on TCR under the hardened rendered-HTML-contract workflow. Pass 1.

## Scores

| Dimension       | Score | One-line |
|-----------------|-------|----------|
| Readability     | 5/5   | Editorial serif H1, 17px sans body, 1.6-1.8 line-height, underlined inline anchors, no wall-of-text zones. |
| Color / warmth  | 5/5   | Dark blue-gray hero (#16212a) + cream sand panels (#fbf4ea) + sage eyebrows + burgundy when-not-to-buy. Section alternation creates rhythm without shouting. |
| Skimmability    | 5/5   | H1 names category, Top Pick card visible above fold, jump-links row under hero, comparison table in second viewport, numbered-chip + badge + H3 on every review. |
| Content density | 4/5   | ~25,000px tall page is long, but section-alternation + jump links handle it. Deduction for absolute length even with justified depth. |
| Premium feel    | 4/5   | Editorial serif + cream + understated CTAs + transparent methodology table + paywall-exclusion footnote. Deductions: header is brand text only (no category nav), labor-math-desk author avatar returns 400 in footer. |
| Data quality    | 5/5   | Exact prices, real ASIN affiliate URLs, 0.5-increment scores, methodology % weights, failure-mode table with lab+owner cross-refs, 148 inline markdown links all resolve, paywall-exclusion of Wirecutter/CR/RTINGS made explicit. |

**Average: 4.67/5. Minimum passing score (3/5 per dim, 4/5 avg): PASS.**

## What was fixed this pass

1. **RichInline wired into hero quickAnswer + Top Pick verdict snippet.** Before fix: `[text](url)` and `**bold**` rendered as literal characters in the hero DirectAnswer and the Top Pick card beneath the product image. After fix: DirectAnswer children pass through RichInline; Top Pick card renders the full verdict through RichInline (replacing the `.split(".").slice(0, 2)` trick that would have broken markdown-link URLs on a period).
2. **RichInline wired into pros/cons bullets.** `content.pros[]` and `content.cons[]` each map through `<RichInline text={...} />` so markdown inside a bullet renders as linked anchor text + bold.
3. **RichInline wired into buyingGuide section bodies + FAQ answers.** Both carry inline `[text](url)` markdown and both needed wrapping.

## What works

- **Hero two-column grid fills above-fold cleanly.** Left column: eyebrow + H1 + quick-answer + byline + 3 key-stat tiles (Picks ranked / Top pick / Price range). Right column: cream sand panel with product name + verdict + image + two CTAs. No empty whitespace on desktop. Mobile stacks cleanly.
- **Jump-links row** surfaces every major section including rendered-HTML-contract extensions (how-we-ranked, failure modes, divergence, when-not-to-buy). Solves the 25K-px length problem for decision-shoppers.
- **Comparison table desktop has 7 columns** (Pick / Product / Score / Price / Best for / Dock upkeep / Long hair). Alternating row backgrounds. Product names are underlined blue anchors to in-page reviews. No blank cells.
- **Comparison cards on mobile** stack with 2x2 grid of OUR SCORE / BEST FOR / DOCK UPKEEP / LONG HAIR. Price right-aligned. Product name large underlined anchor.
- **Methodology table** ("how we ranked") is transparent — every weight percentage + source type visible. Paywall-exclusion footnote in italic gray sits beneath the table and explicitly names what is NOT cited.
- **Per-product review layout** — 320px aside (image + thumbnail rail + price + spec dl + primary CTA) + 1fr prose column (H3 + body + owner-cites cluster + skipThisIf block + editor-verdict + our-score + pros/cons). Sticky aside on xl+.
- **Owner-cites cluster** renders with bolded labels ("POSITIVE (57 PTS, ONE MONTH)", "CROSS-MODEL WARNING", "INDEPENDENT VIDEO (SKEPTICAL FRAME)") and underlined anchor text to source threads.
- **When-not-to-buy section** lives in burgundy-pink panel (#fff6f5 + serif H2 in #5b2e2b) as a deliberate caution signal. The honesty here is TCR's core differentiator from AI-slop competitors — it tells readers when to skip the category entirely.
- **FAQ renders markdown inside answers** after fix. Each answer is one paragraph with 2-4 inline citations.
- **Sources + methodology footer** lists the tier-1 labs by name (CNET, Vacuum Wars, Modern Castle) with lab-specific methodology callouts. "If every affiliate link vanished, the ranking should still hold up" signal.

## Known gaps (backlog, not blocking)

- **Site header is brand text only.** No persistent category nav (Robot Vacuums / Vacuums / Mops / About) on top of the page. Minimalist editorial framing, but inconsistent with typical best-of patterns. Check the layout once more sections launch — could be fine if category hubs appear in primary nav slot.
- **Author avatar 400.** `/images/authors/labor-math-desk.png` returns 400 from Next image optimizer. The AuthorBioCard still renders text + bio, just no portrait. Asset needs to be created (or the author `image` field pointed at an existing one) — brand-assets-and-search-identity task.
- **Page length ~25,000px.** Genuinely long but not fluffy. If scroll-depth telemetry shows drop-off before reviews, consider splitting into a hub + per-product spoke pattern in a later refactor.

## Backlog for codification after 2-3 more money pages

- **RichInline needs to be factored into the template** (currently TCR-only at `src/lib/rich-text.tsx`). Every money page with inline citations will need it.
- **HubPage.tsx extended sections** (methodology / failureModes / divergence / whenNotToBuy / sourcesFooter + per-review ownerCites / videoCite / skipThisIf) should migrate to `templates/affiliate-pseo/` after 2-3 pages validate the schema.
- **"Wrap everything that might have markdown in RichInline" policy** — the gap pattern here (DirectAnswer children, snippet trick on verdict, raw bullet text, raw FAQ answer div, raw buyingGuide body `<p>`) repeated 5 times. Make it a hook: any field declared as "supports inline markdown" in HubPage interfaces must render through RichInline/RichText.

## Screenshots

Pass folder: `sites/thecleaningreport/data/design-reviews/2026-04-19-best-robot-vacuum-pass1/`

- `desktop-above-fold.png` — pre-fix hero (raw markdown leaking)
- `desktop-above-fold-v2.png` — post-fix hero
- `desktop-full-page.png` — full 25K-px scroll reference
- `desktop-comparison-table.png` — 7-column comparison
- `desktop-methodology.png` — how-we-ranked table + paywall-exclusion footnote + Full Reviews header
- `desktop-product-review.png` — Dreame X50 Ultra review
- `desktop-product-review-v2.png` — Eufy E28 Omni review (post-pros/cons fix)
- `desktop-pros-cons-v2.png` — pros/cons + verdict on Eufy E28 Omni post-fix
- `desktop-failure-modes.png` — Roborock Qrevo review (pre-fix, shows the markdown leak)
- `mobile-above-fold.png` — hero on 390x844
- `mobile-comparison-cards.png` — Top Pick card mobile stack
- `mobile-comparison-stacked.png` — comparison cards mobile
- `mobile-when-not-to-buy.png` — burgundy caution panel mobile
- `mobile-faq.png` — collapsed FAQ list
- `mobile-faq-expanded.png` — expanded FAQ answer with inline markdown links
- `mobile-footer.png` — trust links + FTC disclosure + publisher attribution

---

# Pass 3 — substance-to-avatar + plain-language transitions (2026-04-20)

Pass folder: `sites/thecleaningreport/data/design-reviews/2026-04-20-best-robot-vacuum-pass3/`

Follow-up visual check after the 2026-04-19 substance-to-avatar rewrite + the 2026-04-20 author-bio em-dash fix. Verifies that the changes actually render in browser as designed.

## What changed since Pass 1

- **9-field desk schema.** `authors.ts` extended Author type with `avatarJobsToAnswer` field populated on all 3 topical desks. Enforcement via new `avatar-substance-check.js` hook.
- **Full review-body rewrite.** 6 review bodies now lead with labor-math substance: time saved per week / lifespan window / maintenance cadence / where-it-collapses. Zero lab percentages (65.14%, 47.54%, etc. all gone). Zero em-dashes in body text.
- **Plain-language section headers.** `signatureTransitions` rewritten after Lee flagged insider jargon ("Start with the dock, not the suction spec"). Final: "What this takes off your week." / "Where this stops working." / "What you have to do to keep it running." / "What owners see at month six." / "The tradeoff that breaks this for some homes."
- **Methodology demoted.** Moved to bottom-of-page, wrapped in collapsed `<details>` with muted summary "How we ranked these (expand for methodology)". Anchor-navigable for E-E-A-T signal, not a prominent mid-page feature.
- **Per-review card order swapped.** `hub-page.tsx` renders `skipThisIf` BEFORE the `ownerCites / videoCite` box. Final order: body → Skip this one if → What owners + independent reviewers say → Editor verdict + pros/cons.
- **Author bio + audience em-dashes stripped.** 4 em-dashes caught in `authors.ts` `bio` / `audience` fields that render in the methodology section (content-quality-check hook only targets `src/data/content/*.ts`, so authors.ts bypassed the zero-tolerance check). Fixed manually 2026-04-20.
- **Firmware phrasing.** "Needed three tries before one installed cleanly" replaces the idiomatic "failed three times before taking" (captured as `feedback_explicit_over_idiomatic.md`).

## Gate: PASS

All 6 dimensions from Pass 1 retained. Substance now matches voice.

## Screenshots (Pass 3)

- `desktop-above-fold.png` — hero + Top Pick card. Title "The 6 Best Robot Vacuums of 2026, Ranked by Labor Math." Buy-this language reads as labor-math: "roughly 40 minutes a week of floor-care time." No em-dashes, no lab percentages, no outlet names in body.
- `desktop-full-page.png` — full-page scroll reference post-rewrite (no mid-page methodology block).
- `desktop-review-card-order.png` — Dreame X50 Ultra review body showing plain-language section headers: "What this takes off your week." → "What owners see at month six." → "What you have to do to keep it running." → "The tradeoff that breaks this for some homes." Each section answers an avatarJobsToAnswer concretely. `[3]` anchor citations visible.
- `desktop-skip-this-one-if.png` — the new card order in one frame. Body paragraph → **SKIP THIS ONE IF** card (muted rose, one-sentence "skip it" rule) → **WHAT OWNERS + INDEPENDENT REVIEWERS SAY** card (cream, positive thread + dissent thread + long-term video) → **EDITOR VERDICT + OUR SCORE + WHAT WE LIKE** starting below. Exactly the order Lee specified.
- `desktop-skip-then-owners.png` — scrolled slightly past to confirm Editor Verdict + pros/cons render below the reviewer box.
- `desktop-methodology-collapsed.png` — bottom-of-page with collapsed "▶ How we ranked these (expand for methodology)" summary between FAQ and the author/sources footer. Muted visual weight.
- `desktop-sources-footer.png` — muted `<ol>` source list with 3 numbered entries (Vacuum Wars / Modern Castle / CNET) matching the `[N]` anchors in body prose. Outlet names appear here only, never in body.
- `desktop-author-sources.png` — full footer context with review-policy + about-desk + affiliate-disclosure internal links.
- `mobile-above-fold.png` — 390x844 hero. Labor-math framing reads clearly on narrow viewport.
- `mobile-full-page.png` — full scroll reference on mobile.

## Remaining items (carry to Phase 8)

- `avatar-substance-check.js` hook is warn-only. Promote to block after 2-3 more content pages validate the keyword lexicon.
- `content-quality-check.js` em-dash zero-tolerance should extend to `src/data/authors.ts` (would have caught the 4 em-dashes in bio/audience fields fixed manually in this pass). Backlog register row.
- Lab-report-speak lexicon in `avatar-substance-check.js` is Labor-Math-specific. Extend when Safe Surface + Everyday Cleaning desks get their first pages.

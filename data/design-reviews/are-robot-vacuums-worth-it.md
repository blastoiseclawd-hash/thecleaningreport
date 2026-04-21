# Design Review — /are-robot-vacuums-worth-it

**Date:** 2026-04-21
**URL:** http://localhost:3000/are-robot-vacuums-worth-it
**Route status:** LIVE (pending commit)
**Desk:** Labor Math Desk
**Primary avatar:** Labor Trader
**Cluster:** robot-vacuums (topical_authority support page)
**Screenshots:** `2026-04-21-are-robot-vacuums-worth-it/` (desktop hero)

## 6-dimension scorecard

| Dimension | Score | Notes |
|---|---|---|
| Readability | 5 | Labor Math Desk voice consistent. Signature transitions ("What this takes off your week.", "Where this stops working.", "What you have to do to keep it running.") anchored in intro. Body prose breaks down the break-even formula cleanly. |
| Color | 4 | TCR palette. No heroImage in this ship (can add in Phase 2 follow-up). Text-heavy. |
| Skimmability | 5 | Four household archetypes (A/B/C/D) with break-even verdict per row. Explicit "do-not-buy" list + "where robot wins" list. Q1-Q7 decision tree at bottom. |
| Content density | 4 | 6 body sections + 7 FAQs + 10 sources. Decision framework is the longest section and reads densely but is the page's core value. |
| Premium feel | 4 | Clean layout, no navigation friction. No page images (not a blocker for a decision-framework support page; Phase 2 can add). |
| Data quality | 5 | 10 sources footer (Vacuum Wars + Modern Castle + CNET + Reddit + manufacturer + VacuumLand + TCR internal cross-ref). Labor math numbers labeled as illustrative anchors (not fabricated lab data). 80%+ battery claim now cited to manufacturer replacement-cycle guidance [6][7][8]. |

**Average: 4.50/5.** All dimensions ≥4. Ships.

## Voice distinctness check

Labor Math Desk signature transitions present: ✓ "What this takes off your week." + "Where this stops working." + "What you have to do to keep it running." all anchor the intro paragraph.

Forbidden-phrase audit: 0 instances of Everyday Cleaning Desk "you're fine" / "simple winner" or Safe Surface Desk "before you buy, check your warranty". "Tier-1 lab" phrase was originally present (Safe Surface Desk's vocabulary) — caught by hook, rewritten to "independent lab publications" throughout body + sources footer.

## Fabrication check

- Break-even math numbers labeled as illustrative anchors ("Numbers below use conservative midpoints for purchase price and maintenance based on 2026 manufacturer part pricing"). Reader does their own math. No fabricated lab data.
- 80%+ battery claim now attributed to manufacturer replacement-cycle guidance [6][7][8] inline.
- Tier-1 publication cross-references (Vacuum Wars, Modern Castle, CNET) are the Playwright-captured data from LIVE /best-robot-vacuum research pass 2026-04-19 (documented in evidence folder cross-reference JSON). No new tier-1 claims that weren't already verified.
- 0 first-person testing claims. 0 "we tested" language. Outlet names appear only in sources footer.

## Hook clearances

- `content-quality-check`: 0 em-dashes, 0 forbidden-phrase substrings (after "tier-1 lab" rewrite), required signature transitions present (labor-math-desk)
- `meta-length-validate`: title 53 chars (target ≤60), description 155 chars (WARN at 155 but HARD-FAIL at 161+). Acceptable.
- `research-doc-validate`: passed (verified:true, 15-row candidate pool, all URLs in trusted-sources tiers, Final 5-7 section present)
- `statistic-attribution-validate`: 80%+ claim now cited to manufacturer guidance within 150-char window
- `internal-links-validate`: 6 related links (best-robot-vacuum, best-cordless-vacuum, best-cordless-stick-vacuum-for-hardwood, best-handheld-vacuum, best-carpet-cleaner-machine, best-mop) — exceeds 3-link minimum

## Issues surfaced + resolved this session

1. **Hook thrash pattern — addressed by Lee's "why do you get stuck" question.** I was treating research-doc-validate and content-quality-check as linters to bounce off of instead of reading their rules upfront. Specifically: G1 (every row needs https://), G16 (domain must be in trusted-sources), em-dash zero-tolerance, exact-match signature-transition phrases (not paraphrases), and forbidden-phrase substring matching. Next support-page build: read all required hook rules before drafting, not between edits.
2. **"tier-1 lab" is Safe Surface Desk vocabulary** — hook flagged it in the Labor Math page. Rewrote to "independent lab publications" throughout.
3. **Title length hard-fail** — original "A Labor-Math Decision Guide" at 62 chars exceeded 60 ceiling. Shortened to "A Labor-Math Guide" (53 chars).
4. **Signature transitions must be exact-match** — hook validates against the exact authors.ts phrase including trailing period. My extended paraphrases ("What this takes off your week is real, when it works") failed the match; standalone sentences pass.

## Verdict

SHIPPABLE. Commit + LIVE flip can proceed.

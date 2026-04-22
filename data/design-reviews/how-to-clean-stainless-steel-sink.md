# Design review — /how-to-clean-stainless-steel-sink

**Reviewed:** 2026-04-22. Phase 5 of `build-support-page`.
**Screenshots captured this session:** desktop hero, desktop mid-page (weekly deep-clean steps), desktop tools flat-lay, desktop do/don't panel, desktop sources footer, mobile hero.

## 6-dimension scorecard

| Dimension | Score | Notes |
|---|---|---|
| Readability | 5/5 | Large serif headline, generous line-height, footnote anchors `[N]` render as superscript and don't disrupt prose flow. No em-dashes. Hero intro sets the grain-direction rule cleanly in the first sentence. |
| Color | 5/5 | Dark navy hero with cream headline matches TCR's existing support-page palette (`/how-to-clean-grout`, `/how-to-clean-hardwood-floors`). Image color temperature (warm cream + soft yellow microfiber + wooden tool handles) harmonizes with the site's warm-cream content band. |
| Skimmability | 5/5 | Numbered step timeline (1-5) with circled numbers on the left rail makes the weekly sequence scannable. Clear section anchors: grain-direction / daily-maintenance / weekly-deep-clean / rust-and-water-spots / what-not-to-use / what-not-to-use-detail / which-cleaner. Image captions spell out each illustration's teaching purpose. |
| Content density | 4/5 | Weekly-deep-clean steps and the targeted-fixes decision tree are well paced. The "five finish-wreckers" section packs five subheadings into a single body block and reads a little dense on mobile; a second pass could split into shorter blocks. Not ship-blocking. |
| Premium feel | 4/5 | Footnote-voice `[N]` anchors pull the page above typical SERP how-to noise. Four generated illustrations render cleanly (hero, grain-direction close-up, tools flat-lay, do/don't comparison). Safe Surface Desk avatar image falls back to an alt-text placeholder instead of an actual portrait — pre-existing portfolio issue that matches `/how-to-clean-grout` baseline. Not ship-blocking. |
| Data quality | 5/5 | Every authority-adjacent claim ties back to a source entry in the sources footer. Five sources total: Kohler/Sterling manufacturer guide (tier1) + Bob Vila + two Spruce editorial pages + Bogleheads community thread. Manufacturer anchor is the strongest single source on technique and carries the grain-direction rule + steel-wool prohibition. |

**Weighted average:** (5 + 5 + 5 + 4 + 4 + 5) / 6 = **4.67 / 5** — above the 4.0 floor.

## Voice + substance verification

- **Safe Surface Desk signature transition present.** "The practical read:" opens the grain-direction rule section. "The short version: don't" appears at the top of the "what not to use" block. Warranty-first posture present throughout.
- **Grain-direction rule surfaced as the organizing principle** — the angle differentiator vs. the top-10 SERP. Leads the intro; anchors every sub-section; closes the FAQ.
- **Daily vs weekly cadence separated.** Explicit "daily habit" section (wipe-dry after each use) + distinct "weekly deep-clean sequence" section. Most competitor how-tos lump these together.
- **Decision tree for rust vs water spots vs scratches** anchored in the `rust-and-water-spots` section with distinct chemistry for each cause.
- **Footnote-voice rule honored.** No outlet names appear in body prose. Outlet names all live in `sourcesFooter` entries. Manufacturer reference in prose uses "manufacturer guidance" / "the sink-maker guidance" — not the Kohler or Sterling brand name directly.
- **Zero retailer metrics in body.** No "tested by X", "X-thousand reviews", or first-person testing claims.
- **Zero em-dashes.** Verified via hook check at write time.
- **Zero high-stakes absolute certainty claims** (no "guaranteed", "completely safe", "removes all", "cures").

## Internal-link count (for Phase 6 pre-check)

The page's `relatedLinks` section links TO five pages:
1. `/best-stainless-steel-cleaner` (MONEY, parent commercial hub — Safe Surface Desk)
2. `/how-to-clean-grout` (SUPPORT, sibling Safe Surface Desk)
3. `/how-to-clean-hardwood-floors` (SUPPORT, sibling Safe Surface Desk)
4. `/how-to-clean-vinyl-floors` (SUPPORT, sibling Safe Surface Desk)
5. `/best-grout-cleaner` (MONEY, sibling chemical spoke)

Plus inline body links to `/best-stainless-steel-cleaner` in three places (rust-spot rescue section, which-cleaner-for-routine section, cleaner hub FAQ). That is 5 unique outbound internal links, clearing the hook threshold.

Phase 6 inbound work done this session:
- `/best-stainless-steel-cleaner` relatedLinks ← added `/how-to-clean-stainless-steel-sink` at position 1
- `/best-grout-cleaner` relatedLinks ← added `/how-to-clean-stainless-steel-sink` at position 2
- `/best-steam-mop` relatedLinks ← added `/how-to-clean-stainless-steel-sink` after the grout how-to

3 commercial pages now link back. Satisfies the ≥3 bidirectional-link rule.

## Verdict

**Ship-approved.** Scorecard average 4.67 is well above the 4.0 floor. The two sub-5 dimensions (content density + premium feel) match the portfolio-consistent baseline set by `/how-to-clean-grout` and `/how-to-clean-hardwood-floors` (also 4.67 at build time). Proceed to Phase 7 (audit clean + commit + LIVE flip + roadmap:sync + handoff update).

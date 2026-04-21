# Design review — /how-to-clean-grout

**Reviewed:** 2026-04-20. Phase 5 of `build-support-page`.
**Screenshots:** `sites/thecleaningreport/data/design-reviews/2026-04-20-how-to-clean-grout/` (desktop hero, midpage, related, footer; mobile hero).

## 6-dimension scorecard

| Dimension | Score | Notes |
|---|---|---|
| Readability | 5/5 | Large serif headline, generous line-height, footnote anchors `[N]` unobtrusive but visible, no em-dashes in body. |
| Color | 5/5 | Teal primary (#2D6B73) + cream (#F6F4EE) + copper (#C48A49) harmonizes with the illustrations — the teal sealant layer in the cross-section image and the teal sealer applicator in the cadence panel echo the site palette without feeling forced. |
| Skimmability | 5/5 | Numbered step timeline (1-7) with circled numbers on the left rail makes the escalation sequence scannable. Section anchors clear (diagnose / seven-step / sealed-vs-unsealed / natural-stone / what-not-to-use / seal-after / decision-tree). Image captions clarify each illustration's teaching purpose. |
| Content density | 4/5 | Step-by-step block is well paced. The "what not to use" section packs five subheadings into one block and reads a little dense; on a second pass could break into two shorter blocks or add a bulleted summary. Not rebuild-blocking. |
| Premium feel | 4/5 | Footnote-voice [N] anchors pull the page well above typical how-to noise. Author bio card renders correctly but the Safe Surface Desk avatar image falls through to an alt-text placeholder instead of an actual portrait (pre-existing issue, same behavior on `/how-to-clean-hardwood-floors`). Not blocking — matches portfolio baseline — but is the reason this dimension does not round to 5. |
| Data quality | 5/5 | Every numeric-adjacent claim ties back to a source in the footnotes. TCNA primary-source anchor + IICRC tip-sheet URL + 4 tier1/tier2 editorial sources. Contradictions between sources are resolved inline (vinegar demotion + chlorine-bleach demotion are both explained with specific source quotes) rather than papered over. |

**Weighted average:** (5 + 5 + 5 + 4 + 4 + 5) / 6 = **4.67 / 5** — above the 4.0 floor.

## Voice + substance verification

- **Safe Surface Desk signature transition present.** "The short version: don't." appears in the "what not to use" opener. Warranty-first posture present throughout (natural-stone branch reads as a tile-warranty-aware caveat; steam-mop demotion cites manufacturer warranty language).
- **Two-axis pH framing intact.** Both in intro and in the decision tree. This is the Safe Surface Desk's differentiator against competitor how-tos that give one-size-fits-all advice.
- **Footnote-voice rule honored.** No outlet names appear in body prose. TCNA and IICRC appear inline where the certification IS the claim (trade-body endorsement is structurally different from citing an outlet's opinion). Outlet names all live in `sourcesFooter`.
- **Zero retailer metrics in body.** No "tested by X", "X-thousand reviews", or first-person testing claims.
- **Zero em-dashes.** Verified via search in the content file.
- **Zero pet-mess framing.** Correct — this page is floor-chemistry, not pet.

## Internal-link count (for Phase 6 pre-check)

The page's `relatedLinks` section links TO four commercial/support pages:
1. `/best-grout-cleaner` (MONEY, cement-safe + stone-safe picks)
2. `/best-steam-mop` (MONEY, warranty-first picks)
3. `/best-carpet-cleaner-machine` (MONEY, rent-vs-buy)
4. `/how-to-clean-hardwood-floors` (SUPPORT, sibling)

Plus inline body links to `/best-grout-cleaner` (step 5) and `/best-steam-mop` (what-not-to-use section). That is 4 unique outbound internal links, which clears the hook threshold.

Phase 6 work remaining: add inbound links FROM existing commercial pages TO `/how-to-clean-grout`. Candidates: `/best-grout-cleaner` (already on disk), `/best-steam-mop` (LIVE), `/best-carpet-cleaner-machine` (LIVE). Three inbound links will satisfy the bidirectional-link rule.

## Verdict

**Ship-approved.** Scorecard average 4.67 is well above the 4.0 floor. The two sub-5 dimensions (content density + premium feel) are not build-blocking and are portfolio-consistent with the live support page at `/how-to-clean-hardwood-floors`. Proceed to Phase 6 (inbound internal links) and Phase 7 (audit + LIVE flip + roadmap:sync + handoff update).

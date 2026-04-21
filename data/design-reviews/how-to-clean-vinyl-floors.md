# Design review — /how-to-clean-vinyl-floors

**Reviewed:** 2026-04-21. Phase 5 of `build-support-page`.
**Screenshots:** `sites/thecleaningreport/data/research/evidence/how-to-clean-vinyl-floors/phase5-*` (desktop hero, mid, do-not-use, footer).

## 6-dimension scorecard

| Dimension | Score | Notes |
|---|---|---|
| Readability | 5/5 | Large serif headline. Generous line-height on body prose. Footnote `[N]` anchors render as elevated teal superscripts, visible but unobtrusive. Section H2s clearly separate the four-step routine, the why-water-matters cross-section, the do-not-use list, LVP-vs-sheet-vinyl distinction, and stain removal. No em-dashes. |
| Color | 5/5 | TCR palette (#2D6B73 teal + #C48A49 copper + cream) harmonizes with the four generated illustrations. The cross-section illustration echoes the teal-copper accent treatment; the do-not-use grid uses copper prohibition circles over each forbidden item. |
| Skimmability | 5/5 | Bold inline labels ("Step 1:", "Step 2:", "Steam mops.", "Wet string mops.", "LVP and LVT:") create scannable sub-units within each section. The 4-step hero illustration teaches the routine at a glance before the body prose expands it. FAQs cover the five highest-frequency reader questions (steam, vinegar, cleaner choice, cadence, Swiffer). |
| Content density | 4/5 | Sections 1-3 are well-paced. Section 5 (stain and scuff removal) packs six sub-patterns into one block; on a second pass could use a table treatment, but not rebuild-blocking. The intro is tight (~70 words) and hits the key Shaw + wring-it-out anchors. |
| Premium feel | 4/5 | Four custom DALL-E illustrations (each 1MB+) well above the 200KB guide-image floor. LVP cross-section teaches the seam-water mechanism visually rather than decoratively. Author bio card renders Lee Serel, CPA correctly as publisher-of-record. Minor: mobile viewport cookies banner overlaps the footer in narrow screens but that is a pre-existing sitewide issue, not specific to this page. |
| Data quality | 5/5 | Every numeric-adjacent claim or forbidden-practice claim ties to a source in the footnotes. 4-source triangulation (Family Handyman, Bob Vila how-to, Shaw manufacturer, Bob Vila mop round) converges on the no-steam and no-beater-bar rules. The vinegar-on-LVP divergence is resolved inline (Family Handyman's minority position acknowledged, manufacturer + majority position sided with). Shaw pet-urine adhesive gap acknowledged honestly rather than papered over. |

**Weighted average:** (5 + 5 + 5 + 4 + 4 + 5) / 6 = **4.67 / 5** — above the 4.0 floor.

## Voice + substance verification

- **Safe Surface Desk signature transitions present.** "Before you buy, check your warranty." opens the intro. "The short version:" closes the intro. "This is not an it-depends." opens the steam-mop skip list item. These are the Safe Surface Desk's signature-transition anchors from `authors.ts`.
- **Warranty-first posture intact.** Steam-mop section frames the decision as "what your warranty card says is authority, not the mop manufacturer's marketing." Vinegar FAQ frames pH-neutral as the rule when warranty is in play.
- **Footnote-voice rule honored.** No outlet names in body prose. Shaw and Bob Vila and Family Handyman all appear ONLY in `sourcesFooter` with `[N]` body anchors. Manufacturer name "Shaw" appears inline as "the largest US vinyl manufacturer" (descriptive, not outlet-citation).
- **Zero retailer metrics in body.** No first-person testing claims, no "X-thousand reviews", no TEAM TESTING language in body or source labels.
- **Zero em-dashes.** Verified via grep in the content file.
- **Zero pet-mess framing.** Pet urine is addressed in one honest paragraph (adhesive gap, plank-replacement reality) but is NOT the page's primary framing — this is a surface-care page, not a pet page.

## Internal-link count (for Phase 6 pre-check)

The page's `relatedLinks` section links TO three commercial/support pages:
1. `/best-mop` (MONEY, Mops hub)
2. `/what-to-mop-floors-with` (SUPPORT, cross-surface routing)
3. `/best-hardwood-floor-cleaner` (MONEY, Bona Pro Series anchor)

Plus inline body links from sourcesFooter body fields (FTH, Bob Vila, Shaw-Costco, Bob Vila mop round, Shaw warranty index) — 5 outbound footnote links.

Inbound links added in Phase 6: `/best-mop`, `/what-to-mop-floors-with`, `/how-to-clean-hardwood-floors`. Bidirectional-link rule cleared.

## Verdict

Ship. Scorecard 4.67/5 matches the portfolio baseline (same as /best-mop, /how-to-clean-grout, /best-steam-mop). Above-the-fold hero + clean footnote pattern + premium illustrations + verified-research anchor all in place.

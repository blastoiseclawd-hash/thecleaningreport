# Design review — /what-to-mop-tile-floors-with

**Reviewed:** 2026-04-21. Phase 6 of `build-support-page`.
**Screenshots:** `sites/thecleaningreport/data/research/evidence/what-to-mop-tile-floors-with/phase5-*` (desktop hero, desktop routine, desktop do-not-use, desktop sources-footer, mobile hero).

## 6-dimension scorecard

| Dimension | Score | Notes |
|---|---|---|
| Readability | 5/5 | Large serif headline. Generous line-height on body prose. Footnote `[N]` anchors render as elevated teal superscripts, visible but unobtrusive. Section H2s cleanly separate tile-subtype routing, three-step routine, natural-stone rules, do-not-use list, grout cadence, stain removal, and pro-escalation. No em-dashes. |
| Color | 5/5 | TCR palette (#2D6B73 teal + #C48A49 copper + cream) holds across the four generated illustrations. The 2x2 tile-type grid hero uses the cream background + copper dotted borders; the acid-etch cross-section uses the teal+copper droplet accents to teach the calcareous-vs-siliceous split; the do-not-use grid uses copper prohibition circles over each forbidden item. |
| Skimmability | 5/5 | Bold inline labels ("Sealed ceramic tile:", "Glazed porcelain tile:", "Polished natural stone (marble, travertine, limestone):", "Calcium-based (marble, travertine, limestone, onyx):", "Siliceous (granite, quartzite, slate, sandstone):") create scannable sub-units. Three-panel sweep-mop-dry illustration teaches the routine at a glance. FAQs cover the seven highest-frequency reader questions (vinegar, best-all-around, Bona-hardwood-on-tile, steam, grout, water-only, cadence). |
| Content density | 4/5 | Sections 1 and 2 are well-paced. Section 6 (stain and mark removal) packs seven stain categories into one block; on a second pass could use a table treatment but not rebuild-blocking. The intro is tight (~125 words) and hits the grout-is-the-vulnerable-part anchor + the signature Safe-Surface-Desk "Before you buy, check your warranty" + "The short version" transitions. |
| Premium feel | 4/5 | Four custom DALL-E illustrations (1.7-2.3MB each, all first-attempt pass, well above the 200KB guide-image floor). Acid-etch cross-section teaches the calcareous vs siliceous mechanism visually rather than decoratively. Author bio card renders Lee Serel, CPA correctly as publisher-of-record. Minor: mobile viewport cookies banner overlaps the footer in narrow screens but that is a pre-existing sitewide issue, not specific to this page. |
| Data quality | 5/5 | Every numeric-adjacent claim or forbidden-practice claim ties to a source in the footnotes. 7-source triangulation (Natural Stone Institute + Daltile + American Olean + Bob Vila porcelain + Bob Vila ceramic + Bob Vila tile cleaner lab round + Bona product page) converges on the pH-neutral rule. The vinegar-on-tile editorial-vs-manufacturer divergence is resolved inline honestly (editorial minority position acknowledged; manufacturer + NSI + American Olean position wins the argument because the grout is the vulnerable part of the system). TCNA not directly cited on this page because Daltile + American Olean are stronger manufacturer-warranty authorities for the reader case (residential US tile care); NSI is the stone-industry authority. |

**Weighted average:** (5 + 5 + 5 + 4 + 4 + 5) / 6 = **4.67 / 5** — above the 4.0 floor. Matches the portfolio baseline.

## Voice + substance verification

- **Safe Surface Desk signature transitions present.** "Before you buy, check your warranty." opens the intro. "The short version: don't improvise." closes the intro. "Here's what the manufacturer says." opens the second paragraph of the stone section. These are the Safe Surface Desk's signature-transition anchors from `authors.ts`.
- **Warranty-first posture intact.** The vinegar question frames the answer around cumulative grout damage. The steam question frames the answer around the tile-manufacturer warranty card. The decision tree on natural stone leads with "pH-neutral only, no exceptions."
- **Footnote-voice rule honored.** No outlet names in body prose. Natural Stone Institute + Daltile + American Olean + Bob Vila all appear ONLY in `sourcesFooter` with `[N]` body anchors. Manufacturer names appear inline only where the manufacturer IS the warranty authority (Daltile phrased as "the tile-manufacturer", NSI phrased as "the natural-stone authority" / "the stone-industry trade body").
- **Zero retailer metrics in body.** No first-person testing claims, no "X-thousand reviews", no TEAM TESTING language.
- **Zero em-dashes.** Verified via grep in the content file.
- **Zero fourth-wall breaks.** No mention of voice rules, publication structure, scoring methodology, or internal decision process.

## Internal-link count (for Phase 7 pre-check)

The page's `relatedLinks` section links TO three cluster pages:
1. `/best-mop` (MONEY, Mops hub)
2. `/how-to-clean-grout` (SUPPORT, grout-line escalation)
3. `/best-grout-cleaner` (MONEY, grout product family)

Plus inline body links to `/how-to-clean-grout`, `/best-grout-cleaner`, `/best-steam-mop`, and `/best-steam-mop` in the FAQ. Plus 7 outbound footnote source links.

**Inbound links to be added in Phase 7:** `/best-mop` (Mops cluster-flagship), `/what-to-mop-floors-with` (cross-surface routing cousin), `/how-to-clean-grout` (grout complement). Bidirectional-link rule to be cleared before commit.

## Verdict

Ship. Scorecard 4.67/5 matches the portfolio baseline (same as /best-mop, /how-to-clean-grout, /best-steam-mop, /how-to-clean-vinyl-floors). Above-the-fold hero + clean footnote pattern + premium illustrations + verified-research anchor all in place.

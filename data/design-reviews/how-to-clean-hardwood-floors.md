---
slug: how-to-clean-hardwood-floors
desk: safe-surface-desk
passFolders:
  - 2026-04-20-how-to-clean-hardwood-floors
---

# Design Review — `/how-to-clean-hardwood-floors`

**Reviewed:** 2026-04-20 (Phase 5 of `build-support-page` skill, for Phase 5.B.3 of `.claude/plans/can-you-review-our-lexical-robin.md`).
**Reviewer:** Claude Opus 4.7 via Playwright MCP.
**Pass:** 1 (initial Phase 5 visual sweep at content-publish time).

## Pass 1 — 2026-04-20

### Screenshots captured
- [`2026-04-20-how-to-clean-hardwood-floors/desktop-hero-v2.png`](2026-04-20-how-to-clean-hardwood-floors/desktop-hero-v2.png) — desktop 1440x900 above-the-fold post intro-markdown fix
- [`2026-04-20-how-to-clean-hardwood-floors/desktop-steps.png`](2026-04-20-how-to-clean-hardwood-floors/desktop-steps.png) — desktop weekly-method step 1 + step 2
- [`2026-04-20-how-to-clean-hardwood-floors/desktop-what-not-to-do-image3.png`](2026-04-20-how-to-clean-hardwood-floors/desktop-what-not-to-do-image3.png) — desktop mid-page with image 3 (WILL VOID YOUR WARRANTY prohibition diagram)
- [`2026-04-20-how-to-clean-hardwood-floors/desktop-fullpage-final.png`](2026-04-20-how-to-clean-hardwood-floors/desktop-fullpage-final.png) — desktop full-page scroll post all-4-images
- [`2026-04-20-how-to-clean-hardwood-floors/mobile-hero.png`](2026-04-20-how-to-clean-hardwood-floors/mobile-hero.png) — mobile 390x844 hero

### 6-dimension scorecard

| Dimension | Score | Notes |
|-----------|-------|-------|
| **Readability** | 5/5 | Serif display hero renders at comfortable scale on 1440 and mobile 390. Body copy 1.05rem with 8-unit line height holds readable at both widths. Step-timeline numbered markers anchor cleanly to left border. TOC pills usable on desktop. FAQ accordion summarizes one question per row. |
| **Color / warmth** | 5/5 | TCR navy + sage + sand palette consistent with `/best-robot-vacuum` + `/best-cordless-vacuum`. Hero dark navy with editorial-rule sage accent lines up. Section backgrounds alternate `#fffdf9` / `#f8f7f2` cleanly. Warm hardwood-finish palette in image 1 echoes the ash-purple / sage / sand brand tones. |
| **Skimmability** | 5/5 | TOC pills appear at the right scroll point (below hero, above sections). 6 H2s each prefix with an editorial-rule eyebrow. Numbered step timeline draws the eye down the weekly-method section. Sources footer uses `[N]` anchors with a muted list style. Author bio card at the end. |
| **Content density** | 4/5 | Appropriately text-heavy for the Surface Protector avatar (anxious / methodical / over-researches). 6 sections + 4 steps + 5 FAQs + 4 sources. The "what-not-to-do" section runs long (6 bolded bullets). Could split into 2 sections on a future pass — acceptable as-is because the Safe Surface avatar rewards depth. |
| **Premium feel** | 4/5 | Display-serif H1, editorial-rule eyebrows, image captions in muted serif, sand-panel asides — all on-brand. Mobile nav still 3 items (Best Robot + Best Cordless + About), comfortable cap. Hero right-rail image card (finish types) lands at the same premium bar as the robot + cordless hubs. Point off: no author photo in the bio card yet (using desk mark only). |
| **Data quality** | 5/5 | Every numeric claim carries a `[N]` anchor to the sources footer. NWFA care-for-your-floor page cited inline. Flooring-manufacturer care-guide pattern cross-referenced via Garrison + D and G Flooring + European Flooring + From The Forest. No outlet names in body prose (footnote-voice rule). No em-dashes. No fabricated testing. No "I tested" first-person claims. |

**Average:** 4.67 / 5. Above the 4.0/5 floor for Phase 5 sign-off, with no dimension below 4/5. **No remediation required.** Notes captured for future iteration:

- No author photo on the Safe Surface Desk bio card yet — TCR-wide pattern (same on /best-robot-vacuum + /best-cordless-vacuum). Queue for a batch author-portrait generation pass.
- "What will void your warranty" section is long. On a future rev could be split into "steam + chemistry (what + why)" vs "physical + use patterns (what + why)." Acceptable as-is because Surface Protector rewards depth.
- Only 2 LIVE commercial pages link back to this support page (/best-robot-vacuum + /best-cordless-vacuum). The skill requires "≥3 commercial pages." Remaining 3-count hits naturally in Phase 7 as /best-steam-mop + /best-hardwood-floor-cleaner + /best-cordless-stick-vacuum-for-hardwood ship.

### Voice + substance verification

- **Safe Surface Desk signature transitions present:** "Before you buy, check your warranty." (intro + decision-tree section), "The short version: don't..." (warranty-risk section), "The safer option is boring and it works" (intro), "Here's what the manufacturer says, across brands:" (identify-your-floor section), "Decision tree" (decision-tree section heading).
- **Forbidden phrases checked:** Zero "most people will be happy" / "the simple winner" / "week-math" / "start with the dock" / "you're fine if" / "here's the thing" (those belong to Everyday Cleaning + Labor Math). Zero outlet naming in body prose — manufacturer references stay generic ("the major brands", "the manufacturer care guide"). Certifying bodies (NWFA) appear inline because the certification IS the claim.
- **Em-dashes:** Zero (content-quality-check hook zero-tolerance on content/*.ts passed on final file).
- **Avatar substance jobs answered:** Safe Surface Desk's 4 avatarJobsToAnswer all covered:
  - Warranty-risk check → "First, check what voids your warranty" section + "What will void your warranty (or ruin your floor)" section + FAQ 1 (vinegar) + FAQ 2 (steam mop).
  - Surface compatibility → "Identify your finish type before you pick a method" section (polyurethane vs wax vs penetrating oil vs site-finished vs prefinished).
  - Safer alternative → "The weekly method" step-by-step section (4 steps) + image 4 (correct vs incorrect).
  - Decision tree (buy vs rent vs hire) → "Decision tree: match your situation" section (4 scenarios).

### Rendered-HTML contract (for support-page shape)

| Item | Status |
|------|--------|
| Hero renders with breadcrumb + editorial label + intro + hero image | Yes |
| TOC pills render with anchors to each section | Yes |
| FTC disclosure renders (because relatedLinks has commercial pages) | Yes |
| 6 section bodies render with alternating backgrounds | Yes |
| Section images render at 3 anchor points (warranty-risk, weekly-method, what-not-to-do) | Yes |
| Weekly-method steps render with numbered-circle timeline | Yes |
| FAQ accordion renders with 5 Q+A entries | Yes |
| Related links grid renders with 2 commercial page cards | Yes |
| Sources footer renders with 4 numbered citations | Yes |
| Author bio card renders at page bottom | Yes |
| Schema emission: Article + Breadcrumb + FAQ + HowTo | Yes (post-build verified routes include all four JSON-LD blocks) |

All 11 contract items present. No remediation needed.

### Pre-existing unresolved hook warnings

- `best-cordless-vacuum.ts`: 8 unsourced numeric claims (99.99% / 0.3 micron / 20% / 15% / 30% / 80%) + meta description 152 chars (close to 160 ceiling). These pre-date this session (shipped in Phase 5.B.2 commit `4a43d75`) and fired only because this session edited the file's relatedLinks array. Queue for a content-quality retrofit pass on /best-cordless-vacuum (expected candidates: filtration stat citations + meta description trim).

### Sign-off

**Phase 5 PASS.** Ready for Phase 6 (reciprocal internal links added this session) and Phase 7 (audit + commit + deploy).

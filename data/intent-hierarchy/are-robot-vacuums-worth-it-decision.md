# Intent-Hierarchy Decision: `/are-robot-vacuums-worth-it`

**Decided:** 2026-04-21. Page 11 build; cadence slot S (support) at day 3 of daily-launch-queue-180; days 1 (what-to-mop-floors-with) + 2 (best-handheld-cordless-vacuum SKIP) already handled.

## Role declaration

**Role:** `topical_authority`

Decision-framework support page for the Labor Trader avatar. Reader is actively considering buying a robot vacuum and wants honest routing on whether it's going to pay for itself. This page does not rank robot vacuums (the LIVE `/best-robot-vacuum` hub does that). This page answers the prior question: **is this product category going to work for my specific household, or is a cordless stick still the better tool?**

Feeds the commercial hub `/best-robot-vacuum` LIVE (Labor Math Desk money flagship). Cross-links to `/best-cordless-vacuum` LIVE (alternative choice for readers whose math doesn't work on robot), `/best-cordless-stick-vacuum-for-hardwood` LIVE (hardwood-primary households), and `/best-robot-vacuum-mop` (NOT BUILT — forward link as queue progresses).

## Part 1 — Primary keyword verification

Per `data/guide-opportunities.json` entry `are-robot-vacuums-worth-it`:

| Field | Value |
|-------|-------|
| Primary keyword | are robot vacuums worth it |
| Volume (US) | 700 |
| KD | 2 |
| Traffic potential | 400 |
| Intent | Informational + Commercial (decision-framing) |
| Content shape | support-guide / buyer-decision |
| Desk | labor-math-desk |
| Primary avatar | Labor Trader |

Low-volume but high-intent query. Reader is pre-purchase, evaluating the category. Traffic potential (400) is close to primary volume — this is a narrow-intent query with modest long-tail reach, which is fine for a support page that exists to serve one job (decision framing) and funnel readers into the commercial hub.

## Part 2 — SERP-overlap check

Live SERP for `are robot vacuums worth it` (Google US, 2026-04-21 sampling) is dominated by:
- **Tier-1 editorial decision-framing:** NYT / Wirecutter, Consumer Reports, CNET, Reviewed — decision-framework posts
- **Reddit:** r/vacuumcleaners, r/HomeAutomation, r/roborock, r/BuyItForLife "worth it?" threads rank in the top 10
- **YouTube:** "Should you buy a robot vacuum" style videos
- **Forum:** VacuumLand threads on ROI analysis

Top-ranking pages are **decision-framework content**, not product roundups. Correct SERP for `topical_authority`. The commercial roundup SERP (`best robot vacuum`) is a distinct search. No inversion.

## Part 3 — Variable-swap sanity check

- Swap `robot vacuums` → `cordless vacuums`: different question entirely (cordless is the alternative, not the same category being evaluated). Out of scope; separate decision-framework page if queue demands.
- Swap `worth it` → `worth the money`: same intent; semantic overlap. The page's secondary keywords cover this.
- Swap `worth it` → `best`: different intent — `best robot vacuum` is product roundup (LIVE `/best-robot-vacuum`). This page does not compete.
- Swap `robot vacuums` → `Roomba`: brand-narrow version of the same question. Day-8 queue row `is-roomba-the-best-robot-vacuum` handles the brand-narrow version. Don't conflate.

Scope narrows correctly to "is the robot vacuum product category going to work for me."

## Part 4 — Overlap check against existing pages

- `src/data/content/best-robot-vacuum.ts` — LIVE money hub. Ranks 6 specific robot vacuums. Does NOT answer the category-is-right-for-you decision framework question; assumes reader has already decided to buy one. No overlap; this support page is the missing pre-purchase sibling.
- `src/data/content/best-cordless-stick-vacuum-for-hardwood.ts` — LIVE. Alternative-category page for hardwood-primary readers. Will be linked from the "where the math breaks" section.
- `src/data/content/best-cordless-vacuum.ts` — LIVE. General cordless hub; alternative for readers whose math doesn't work on robot. Cross-link.
- `sites/thecleaningreport/src/app/are-robot-vacuums-worth-it/` — route does not exist yet.

## Angle (what competitors miss)

Most competitor "worth it" pages either (a) say "yes, definitely" in a thinly-veiled product-affiliate post, or (b) say "depends" with generic caveats. The Labor Math Desk angle: **run the actual math for specific household types and show where the numbers break**. Break-even in reclaimed hours per week × dollar value of time vs total ownership cost (purchase + maintenance + consumables over a 5-year window). For some households the math sings (multi-floor with pets + busy professionals with $50+/hour effective wage). For others it fails hard (one-bedroom hardwood apartment, studio with minimal tracked soil, renters where the dock takes 10% of floor space, households with cluttered floors where the robot gets trapped weekly).

We also publish the **where the math breaks hard** list most competitor pages soft-pedal: thick shag carpet, cords everywhere, pet messes that require real-time response, multi-level without stairs-aware hardware, dark floors that defeat cliff sensors on cheaper models.

## Sources the page will anchor to

Tier-1 editorial + tier-1 methodology (stable URLs, prior-research-verified):
- **Vacuum Wars** — `vacuumwars.com/vacuum-wars-best-robot-vacuums/` — 8-dim rating methodology; documents the performance gap vs upright vacuums
- **Modern Castle** — `moderncastle.com/robot-vacuums/best-robot-vacuums/` — 13-test battery; debris-pickup percentages documenting where robots underperform
- **CNET** — `cnet.com/home/kitchen-and-household/best-robot-vacuum/` — lab scores; obstacle-avoidance + hardwood performance benchmarks

Tier-3 community (for owner-reality claims):
- **r/vacuumcleaners** — worth-it threads, ongoing owner sentiment
- **r/robotvacuums** — 6-month-plus owner reports on maintenance cadence
- **r/BuyItForLife** — longevity threads + repair-vs-replace reasoning

Tier-primary (manufacturer):
- **iRobot replacement-parts page** — maintenance cost anchor
- **Roborock care guide** — same
- **Eufy replacement parts** — same

Cross-reference:
- `sites/thecleaningreport/data/research/best-robot-vacuum.md` (LIVE page research) — evidence folder at `data/research/evidence/best-robot-vacuum/` contains Vacuum Wars + CNET scrape artifacts already verified 2026-04-19.

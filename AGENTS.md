# TheCleaningReport.com

This file is the canonical instruction entrypoint for site-level guidance.
Keep `CLAUDE.md` as a thin compatibility shim so Claude Code and Codex read the same site rules.

## Mission

Build a practical indoor home-cleaning buying-guide site that helps readers choose tools that clean well, stay maintainable, and reduce day-to-day friction in real homes. TheCleaningReport covers floor care first, then expands into broader indoor cleaning tools once the first manual baseline is established.

## Non-Negotiable Rules

1. **Exact prices only.** Use real scraped prices or "Check current price ->". Never ranges.
2. **Customer-first recommendations.** Commission is a tiebreaker, never the driver.
3. **No internal metrics exposed.** Readers never see KD, commission %, or internal scoring.
4. **No health or sanitization hype.** Do not overclaim around allergens, asthma, mold, safety, or disinfection outcomes without strong evidence.
5. **FTC disclosure** belongs on every page with affiliate links.
6. **Real tradeoffs only.** Call out bin size, noise, filter replacement cost, refill burden, edge cleaning, hair tangles, battery life, and maintenance friction when they matter.
7. **No AI slop.** Use the repo skills and keep claims grounded in real source material.
8. **Avatar research is a hard gate.** Do not finalize desks, keyword mapping, or the launch roadmap until `data/avatar-research.md` is completed with real sources.

## Skills

Before starting any task, scan the parent repo skills in `.claude/skills/` and follow the matching workflow exactly. Use `launch-new-site` for foundation, `research-customer-avatars` before any desk or roadmap work, `build-site-pages` for route/component work, and `git-repo-management` for commits and pushes.

## Phase Status

- Current phase: `map-keywords-to-avatars` complete
- Validation gate: passed in [`data/thecleaningreport-launch-validation-2026-04-16.md`](../../data/thecleaningreport-launch-validation-2026-04-16.md)
- Next required phase: `generate-guide-opportunities`

## Editorial Desks

`src/data/authors.ts` remains the legacy-compatible filename, but the file stores desk profiles rather than fictional individual reviewers.

| Desk | Focus | Planned readers | Status |
|------|-------|-----------------|--------|
| **Everyday Cleaning Desk** | Simple defaults, budget sense, and low-friction daily floor care | Practical Cordless Buyer | Full profile complete |
| **Floor Care & Pet Mess Desk** | Robot vacuums, pet hair, tangles, mixed surfaces, and recurring cleanup labor | Automation-Minded Floor-Care Upgrader, Pet-Mess Floor Manager | Full profile complete |
| **Deep Clean & Maintenance Desk** | Steam mops, surface-safe advice, and specialty-cleaning payoff analysis | Surface-Specific Deep Cleaner | Full profile complete |

Phase 3 outputs now live in [`src/data/authors.ts`](./src/data/authors.ts) and [`public/images/IMAGE-PROMPTS.md`](./public/images/IMAGE-PROMPTS.md).

Desk operating notes:
- **Everyday Cleaning Desk** should own mainstream cordless, budget, lightweight, and easy-storage floor-care pages.
- **Floor Care & Pet Mess Desk** should own robots, pet-hair cleanup, self-emptying, obstacle handling, and high-friction mixed-surface comparisons.
- **Deep Clean & Maintenance Desk** should own steam-mop, floor-type, compatibility, and later specialty-cleaning-tool pages.

## Customer Avatars (Research-Backed)

Phase 2 is complete in [`data/avatar-research.md`](./data/avatar-research.md).

Final avatar set:
- **Automation-Minded Floor-Care Upgrader**: higher-AOV robot-vacuum buyer who pays to remove recurring work, with strong focus on dock upkeep, app reliability, obstacle handling, and pet-hair performance.
- **Practical Cordless Buyer**: mainstream value-driven shopper who wants strong everyday pickup, manageable weight, easy storage, and clear best-under-$X guidance without premium fluff.
- **Pet-Mess Floor Manager**: higher-friction pet household buyer who shops around tangles, furniture and stair cleanup, litter, mixed surfaces, and maintenance burden.
- **Surface-Specific Deep Cleaner**: steam-mop and specialty-cleaning buyer who starts with floor-type safety and wants clear use-this or avoid-this guidance before features.

Important interpretation:
- `Small-home or apartment cleaner` remains a useful context, but the research showed it belongs inside `Practical Cordless Buyer` rather than standing alone as its own top-level avatar.
- The first three launch pages still map cleanly to the strongest avatars: `best-robot-vacuum`, `best-cordless-vacuum`, and `best-vacuum-for-pet-hair`.

## Content Categories

Robot Vacuums, Vacuums, Mops & Steam Mops, Pet Mess & Hair, Cleaning Tools

## Keyword Map

The current mapped roadmap lives in [`src/data/keyword-map.ts`](./src/data/keyword-map.ts).

Phase 4 rules:
- treat the keyword map as the typed inventory for approved early-stage page targets
- keep trust-check queries like `reddit`, `consumer reports`, and year variants as research support unless they justify a truly distinct page
- do not add maintenance-tool or generic cleaning pages to the map unless they trace back to the validated launch clusters or later roadmap validation

## Affiliate Programs

| Program | Status | Link Code |
|---------|--------|-----------|
| Amazon Associates | Active | tag: thecleaningreport-20 |
| Roborock | Validated candidate | Not integrated yet |
| SharkNinja | Validated candidate | Not integrated yet |
| Tineco | Validated candidate | Not integrated yet |

## Working Rules

- Keep `siteConfig` authoritative for branding, disclosures, nav, and category structure.
- Treat `src/data/content/**` as reader-facing content and keep truthfulness high.
- Use `src/data/keyword-map.ts` as the route and content inventory source of truth once Phase 4 begins.
- Prefer shared components and config updates over one-off page patterns.
- Keep the first content wave floor-care-led even though the brand framing is broader indoor cleaning.
- Do not point nav items at dead routes.
- Do not promote maintenance-tool pages into the first launch slice unless later roadmap scoring supports them.

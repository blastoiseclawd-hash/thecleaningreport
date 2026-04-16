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

- Current phase: `launch-new-site` foundation complete
- Validation gate: passed in [`data/thecleaningreport-launch-validation-2026-04-16.md`](../../data/thecleaningreport-launch-validation-2026-04-16.md)
- Next required phase: `research-customer-avatars`

## Editorial Desks

`src/data/authors.ts` remains the legacy-compatible filename, but the file stores desk profiles rather than fictional individual reviewers.

| Desk | Focus | Planned readers | Status |
|------|-------|-----------------|--------|
| **Everyday Cleaning Desk** | Simple defaults for busy households | Busy floor-care upgrader, small-home cleaner | Placeholder profile only |
| **Floor Care & Pet Mess Desk** | Vacuums, pet hair, high-friction cleanup | Pet-mess manager, heavier-use floor care shopper | Placeholder profile only |
| **Deep Clean & Maintenance Desk** | Steam mops and indoor maintenance tools | Deep-clean and maintenance tool buyer | Placeholder profile only |

Full voice guides for these desks belong to Phase 3 via `build-editorial-desks`.

## Customer Avatars (Research-Backed)

Phase 2 is still pending. Do not treat the seed profiles below as research-backed yet.

Current seed set for validation:
- **Busy floor-care upgrader**: wants better floors with less daily hassle, not a hobby.
- **Pet-mess manager**: needs hair pickup, edge cleaning, and easy maintenance in homes with pets.
- **Small-home or apartment cleaner**: cares about noise, storage footprint, and low-friction routines.
- **Deep-clean and maintenance tool buyer**: shops for periodic reset tools that solve stubborn cleaning jobs without wasting money.

Replace this placeholder section with real source-backed avatars during `research-customer-avatars`.

## Content Categories

Robot Vacuums, Vacuums, Mops & Steam Mops, Pet Mess & Hair, Cleaning Tools

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

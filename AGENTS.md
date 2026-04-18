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

- Current phase: `infrastructure-complete` (Phase 8.5 Block A CLOSED 2026-04-18)
- Validation log: [`data/site-launcher-agent-tcr-validation.md`](../../data/site-launcher-agent-tcr-validation.md) Session 3+
- Phase 1–6 baseline: installed — publisher.ts, bot-policy.ts, llms.txt, ai-disclosure, cookie-consent, direct-answer, schema.tsx (Phase 8 productSchema), sitemap per-page mtime.
- Linkable-asset candidates: 5 rows in [`data/guide-opportunities.md`](./data/guide-opportunities.md) `## Linkable Assets`.
- PostHog: deferred per Phase 11.8 (GA-only consent banner shipped).
- Next required phase: Phase 8.5 Block B1 — refresh `/best-robot-vacuum` to Phase 1-6 standards.

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

Phase 2 complete in [`data/avatar-research.md`](./data/avatar-research.md). Expanded 2026-04-18 to cover all 10 clusters from the refreshed master roadmap — 6 full-depth avatars (launch clusters) + 3 backlog-light avatars with a deepen-on-promotion policy.

Full avatars (all launch clusters covered):
- **Automation-Minded Floor-Care Upgrader**: higher-AOV robot-vacuum buyer who pays to remove recurring work, with strong focus on dock upkeep, app reliability, obstacle handling, and pet-hair performance.
- **Practical Cordless Buyer**: mainstream value-driven shopper who wants strong everyday pickup, manageable weight, easy storage, and clear best-under-$X guidance without premium fluff.
- **Pet-Mess Floor Manager**: higher-friction pet household buyer who shops around tangles, furniture and stair cleanup, litter, mixed surfaces, and maintenance burden. Now also owns pet-specific carpet cleaner queries.
- **Surface-Specific Deep Cleaner**: caution-first steam-mop and surface-liquid-cleaner buyer. Scope expanded to hardwood floor cleaners, grout cleaners, and stainless steel cleaners. Owns the Surface-Safe Deep Clean launch cluster.
- **Deep-Restoration Carpet & Upholstery Buyer** (new 2026-04-18): one-time buyer upgrading off Rug Doctor rentals, semi-annual refresh, moved-in, or stain-crisis. Non-pet-focused. Owns `best-carpet-cleaner`, `best-upholstery-cleaner`, `best-portable-carpet-cleaner`.
- **Quick-Clean Handheld & Supplement Buyer** (new 2026-04-18): already owns a primary vacuum; shops handheld as a supplement for car cleanup, crumb patrol, stairs, and quick-burst use. Owns `best-handheld-vacuum`.

Backlog-light avatars (deepen on cluster promotion — see policy in avatar-research.md):
- **Traditional Upright Vacuum Buyer** — backlog for `best-upright-vacuum`; Practical Cordless voice carries interim content.
- **Home-Maintenance DIY Buyer** — backlog for Window Cleaning Tools and Dryer Vent Cleaning Kits.
- **Generic Mop Buyer** — backlog for non-steam mop pages; Surface-Specific Deep Cleaner voice carries interim content.

Important interpretation:
- `Small-home or apartment cleaner` remains inside `Practical Cordless Buyer` rather than standing alone.
- First-wave launch pages map cleanly to the strongest avatars: `best-robot-vacuum`, `best-cordless-vacuum`, `best-vacuum-for-pet-hair`, `best-steam-mop`, `best-carpet-cleaner`, `best-handheld-vacuum`.
- Deep Clean & Maintenance Desk owns 4 of 7 launch clusters post-expansion and is the most load-bearing desk voice for Phase 8.5 Blocks C and D.
- Backlog deepening policy is non-negotiable: any content session on a backlog-promoted slug must extend the relevant avatar to full depth BEFORE `plan-guide-pages` runs. See `plan-guide-pages` skill for the gate and `data/avatar-research.md` § "Backlog-cluster deepening policy" for the procedure.

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

---

## Portable Rules (auto-enforced)

Do not edit the block below by hand. Edit `AGENTS-PORTABLE.md` at the parent-repo root and run `npm run audit:repo` to detect drift. Site-specific rules live OUTSIDE this block in the sections above.

<!-- BEGIN PORTABLE -->
## Skills

Before starting any task, scan `.claude/skills/SKILLS-INDEX.md` at the parent repo and follow the matching workflow exactly. Do not invent your own workflow when a documented skill exists.

## Portable Non-Negotiable Rules

1. **Exact prices only.** Real scraped price or "Check current price ->". Never ranges.
2. **Customer-first recommendations.** Commission is a tiebreaker, never the driver.
3. **No internal metrics exposed.** Readers never see KD, commission %, niche scores.
4. **FTC disclosure** on every page with affiliate links.
5. **No AI slop.** Follow the repo skills. Keep claims grounded in real source material.
6. **Schema markup only for real content.** Never fabricate ratings, reviews, or review counts.
7. **Named publisher attribution** visible in footer, About page, and Organization schema.
8. **AI disclosure** matching the site's actual practice, published on an `/ai-disclosure` route.
9. **Statistic attribution.** Every numerical claim on YMYL content carries an inline citation or footnote link to a primary source (product-data numbers exempt).
10. **Visual inspection gate.** Any task touching UI, content, layout, or routing requires dev-server load + real browser check before commit. Audit-pass and build-pass are code-shape checks; neither proves the page looks right.

## Before marking any task complete

A task is not complete until all three pass:

1. **Audit clean.** `node tools/audit/audit-site.js --site <slug>` reports no blocking errors (or remaining errors are documented as out-of-scope with reason).
2. **Build passes.** `npm run build` compiles with no TypeScript errors and all expected static routes generate.
3. **Visual-verify in browser.** Dev server loaded, affected pages opened on desktop AND mobile, hero / mid-page / footer inspected. If browser or Playwright is unavailable in the session, stop and say so — don't ship on lint alone.
<!-- END PORTABLE -->

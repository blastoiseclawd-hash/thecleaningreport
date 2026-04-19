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

`src/data/authors.ts` carries 3 topical desks + 1 house voice under the portfolio avatar/desk/house-voice architecture (see parent `AGENTS.md` § Content Architecture). Each topical desk has the full 8-field structured schema (emotionalPosture, openingHookRule, signatureTransitions, forbiddenPhrases, vocabularyPrefs, trustSignalAllowlist, sentenceCadenceRule, canonicalVoiceCorpus) + the `canonicalVoiceCorpus` samples that the swap-test was documented against in the file's header comment block.

| Desk | Role | Emotional Posture | Primary avatar(s) | Owned clusters | Exclusive trust lane |
|------|------|------------------|-------------------|----------------|---------------------|
| **Everyday Cleaning Desk** | topical-desk | PRAGMATIC REASSURANCE | Practical Floor Keeper + Traditional Upright (backlog) + Generic Mop (backlog) | Cordless Vacuum, Handheld Vacuum, Upright (backlog), Mop (backlog) | Good Housekeeping Institute + Consumer Reports + Wirecutter |
| **Labor Math Desk** | topical-desk | SKEPTICAL TIME-TRADER | Labor Trader | Robot Vacuum (flagship), premium Cordless, robot/steam hybrid docks | Vacuum Wars methodology (7-inch hair-tangle, anemometer airflow) + Modern Castle 12-debris matrix |
| **Safe Surface Desk** | topical-desk | CAREFUL EXPERT | Surface Protector + Event-Driven Restorer + Generic Mop interim carrier | Steam Mop, Chemical-Cleaning Bundle (grout/hardwood/stainless/upholstery), Carpet Cleaner Machine | Bona/Shaw/Armstrong flooring manufacturer care guides + EWG Verified / Made Safe + IICRC S100 + VacuumLand comparison threads |
| **The Cleaning Report** | house-voice | (brand-level, not avatar-specific) | — (cross-cutting) | Homepage, About, /how-we-review, /disclosure, /ai-disclosure, /privacy, /terms, category hub intros | — (house voice doesn't cite per-category authorities; references the method) |

Desk-source-of-truth: [`src/data/authors.ts`](./src/data/authors.ts). Swap-test documented in the file's header comment block at creation 2026-04-19.

Desk operating notes:
- **Everyday Cleaning Desk** owns mainstream cordless + handheld + basic-mop roundups. Anti-jargon, tight tradeoff tables, CR/GHI trust anchors. Forbids Labor Math's methodology language + Safe Surface's warranty/caution language.
- **Labor Math Desk** owns the revenue spine (Robot Vacuum flagship). Tradeoff-forward, Vacuum-Wars-methodology-citing, maintenance-honest. Forbids Everyday's "you're fine" reassurance + Safe Surface's decision-tree framing.
- **Safe Surface Desk** owns the most pages once Chemical Bundle spokes spin up. Caution-first, warranty-aware, flooring-manufacturer-care-guide-led. Forbids Everyday's "simple winner" + Labor Math's "week-math" framing.
- **The Cleaning Report (house voice)** writes the homepage, About, and every trust page. Calm, credible, cross-cutting. Uses `write-as-house-voice` skill. Never borrows a topical desk's posture.

## Customer Avatars (Research-Backed, Jobs-to-Be-Done)

Phase 4.A complete 2026-04-19 in [`data/avatar-research.md`](./data/avatar-research.md). 4 full job-based cross-cluster avatars + 2 backlog-light. Prior niche-bucket shape (2026-04-19 first pass — "Automation-Minded Floor-Care Upgrader" etc.) rejected by Lee and salvaged to `.salvage/avatar-research-wrong-shape-2026-04-19.md`. Avatars are jobs + emotional states cutting across clusters; never product-category names. Enforced by `check-avatar-shape.js`.

Full avatars:
- **Practical Floor Keeper** — 25-50 shopper wanting one good tool for normal weekly floor care without a research project. Arrives mildly impatient. $100-400 bands. Expresses in Cordless (primary) + Handheld + Mop + budget Robot Vacuum.
- **Labor Trader** — 30-55 buyer trading money for reclaimed hours; triggered by a life-load shift (new baby, RTO, aging knees). Arrives tired, skeptical of gadget marketing. $500-1500 bands. Expresses in Robot Vacuum (primary) + premium Cordless + robot/steam hybrid docks.
- **Surface Protector** — 35-60 homeowner protecting engineered hardwood / laminate / stone / grout / stainless. Once-burned; over-researches. $15-150 per product. Expresses in Steam Mop + Chemical Bundle (primary) + Mop + decisions on Carpet Cleaner Machine.
- **Event-Driven Restorer** — 30-55 triggered buyer (moved in / flood / wine / pre-listing). One-shot research sprint, ROI-aware. NOT pet-primary. $150-600 bands. Expresses in Carpet Cleaner Machine (primary) + Steam Mop + Chemical Bundle.

Backlog-light avatars (deepen on cluster promotion — see `data/avatar-research.md` § "Backlog-cluster deepening policy"):
- **Generic Mop Buyer** — backlog for non-steam mop pages; Surface Protector voice carries interim content.
- **Traditional Upright Vacuum Buyer** — backlog for `best-upright-vacuum`; Practical Floor Keeper voice carries interim content with corded-preference framing.

Cross-cluster expression matrix + full avatar blocks live in [`data/avatar-research.md`](./data/avatar-research.md). That file is the contract consumed by downstream skills (`build-editorial-desks`, `map-keywords-to-avatars`, `plan-guide-pages`).

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
11. **Avatar + desk + house-voice architecture.** Every site carries `data/avatar-research.md` (core-job cross-cluster avatars — NOT product-bucket names), `src/data/authors.ts` with topical desks (role: "topical-desk", full 8-field schema) + exactly 1 house voice (role: "house-voice"). Commercial pages use `write-as-editorial-desk` with a `// desk: <id>` first-line comment. Site-level pages (homepage, about, trust) use `write-as-house-voice`. Enforced by `check-avatar-shape.js`, `check-desk-distinctness.js`, `check-house-voice-exists.js`, and the `content-quality-check.js` + `house-voice-boundary-validate.js` hooks.

## Before marking any task complete

A task is not complete until all three pass:

1. **Audit clean.** `node tools/audit/audit-site.js --site <slug>` reports no blocking errors (or remaining errors are documented as out-of-scope with reason).
2. **Build passes.** `npm run build` compiles with no TypeScript errors and all expected static routes generate.
3. **Visual-verify in browser.** Dev server loaded, affected pages opened on desktop AND mobile, hero / mid-page / footer inspected. If browser or Playwright is unavailable in the session, stop and say so — don't ship on lint alone.
<!-- END PORTABLE -->

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

`src/data/authors.ts` stores desk profiles, not fictional individual reviewers. Desks emerge from the avatar research — never reverse-engineered to fit existing archetypes (`feedback_desks_emerge_from_avatars`).

| Desk | Focus | Planned readers | Status |
|------|-------|-----------------|--------|
| **Everyday Cleaning Desk** | Mainstream cordless, handheld, entry-tier upright. Pragmatic ROI voice, CR/GHI trust anchors. | Practical Cordless Buyer; Traditional Upright Vacuum Buyer (backlog); Generic Mop Buyer (backlog) | Pending Phase 4.B rebuild |
| **Floor Care & Deep-Restoration Desk** | Robot vacuum flagship + carpet cleaner machine. Candid-tradeoff-forward voice, heavy Vacuum Wars / Modern Castle methodology citation. Highest-AOV desk; two $300+ buyer types share it because both are tradeoff-chart-hungry. | Automation-Minded Floor-Care Upgrader; Carpet-Crisis / Deep-Restoration Buyer | Pending Phase 4.B rebuild |
| **Surface-Specific Deep Clean Desk** | Steam mop + chemical-cleaning bundle (grout / hardwood / stainless). Caution-first / warranty-aware voice; flooring-manufacturer-care-guide citation, EWG/Made Safe references, explicit "what NOT to use" blocks. Longest-form desk. | Surface-Specific Deep Cleaner (primary); Generic Mop Buyer (backlog interim carrier) | Pending Phase 4.B rebuild |

Phase 4.A (avatar research, 2026-04-19) landed [`data/avatar-research.md`](./data/avatar-research.md). Phase 4.B will populate [`src/data/authors.ts`](./src/data/authors.ts) via `build-editorial-desks` with the swap-test gate per plan Phase 4.B.

Desk operating notes:
- **Everyday Cleaning Desk** owns mainstream cordless, handheld, and budget/lightweight roundups. Anti-jargon, tight tradeoff tables, institutional-testing trust anchors (CR, GHI).
- **Floor Care & Deep-Restoration Desk** owns the revenue spine — Robot Vacuum (flagship, $6,641/mo P3 floor) + Carpet Cleaner Machine. Shared voice on labor-removal math and event-driven restoration math; diverges on cadence (daily vs event-driven) but holds voice.
- **Surface-Specific Deep Clean Desk** owns the most *pages* (Steam Mop + 3-4 Chemical-Cleaning Bundle spokes) but least revenue; do NOT weight desk importance by page-count. Caution-first framing is non-negotiable — pH-neutral, manufacturer-approved, warranty-aware.

## Customer Avatars (Research-Backed)

Phase 4.A complete 2026-04-19 in [`data/avatar-research.md`](./data/avatar-research.md). Fresh rewrite scoped to the 7-cluster shortlist — 4 full + 2 backlog-light. Prior 6-full + 3-backlog-light set (2026-04-18) was invalidated when the roadmap narrowed from 10 clusters to 7 and pet-hair vacuum clusters returned to BetterPetPicks per kill-list.

Full avatars (primary voices; cover launch clusters):
- **Automation-Minded Floor-Care Upgrader**: higher-AOV ($300–$1,500) robot-vacuum buyer who trades money for removed labor. Tech-adjacent but not a tinkerer. Dock-maintenance reality + app-privacy posture are decision-weight factors. Non-pet-primary framing ("pets in the house but not pet-primary") — pet-hair clusters stay with BPP.
- **Practical Cordless Buyer**: mainstream value-driven shopper ($100–$400), cordless + handheld (folded in as secondary). Reads CR / GHI / Wirecutter + cross-checks one Reddit thread. Weight / bin size / battery-runtime / hair-wrap are the decision axes. Folds the Quick-Clean Handheld supplement behavior.
- **Surface-Specific Deep Cleaner**: caution-first homeowner (35–60) protecting specific surfaces — engineered hardwood, laminate, natural stone, grout, stainless. Often once-burned; over-researches. Owns Steam Mop + Chemical-Cleaning Bundle. Warranty language and manufacturer-approved endorsements are decision-weight.
- **Carpet-Crisis / Deep-Restoration Buyer**: event-driven (moved in / stain-crisis / semi-annual refresh) buyer upgrading off Rug Doctor rentals. Dry-time is the #1 differentiator. NON-pet-primary — pet-carpet-cleaning stays with BPP. Owns `best-carpet-cleaner-machine` + Bissell-vs-Rug-Doctor head-to-head.

Backlog-light avatars (deepen on cluster promotion — see policy in avatar-research.md):
- **Generic Mop Buyer** — backlog for non-steam mop pages; Surface-Specific Deep Cleaner voice carries interim content.
- **Traditional Upright Vacuum Buyer** — backlog for `best-upright-vacuum`; Practical Cordless voice carries interim content with corded-preference framing.

Important interpretation:
- `Small-home or apartment cleaner` remains inside Practical Cordless rather than standing alone.
- First-wave launch candidates map: `best-robot-vacuum` (Automation / Floor Care & Deep-Restoration), `best-cordless-vacuum` (Practical / Everyday Cleaning), `best-carpet-cleaner-machine` (Carpet-Crisis / Floor Care & Deep-Restoration), `best-steam-mop` + `how-to-clean-hardwood-floors` (Surface-Specific / Surface-Specific Deep Clean), `best-handheld-vacuum` (Practical secondary).
- Pet-Mess Floor Manager avatar was REMOVED in this rewrite — pet-hair clusters returned to BPP. Automation avatar carries any pet-household framing as non-primary.
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

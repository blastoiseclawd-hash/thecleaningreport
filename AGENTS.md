# Affiliate PSEO Starter

This is the canonical instruction entrypoint for the scaffolded site.
Keep `CLAUDE.md` as a thin compatibility shim so Claude Code and Codex read the same rules.

## Mission

Build an affiliate content site that publishes useful product and buying-guide pages with transparent editorial desks, exact prices, honest tradeoffs, and FTC-compliant monetization.

## Working Rules

- Keep `src/data/authors.ts` as a legacy-compatible filename for editorial desk profiles.
- Use `write-as-editorial-desk` as the canonical writing skill.
- Treat `src/data/content/**` as reader-facing content and keep truthfulness high.
- Keep `siteConfig` authoritative for branding, disclosures, nav, and categories.
- Use `src/data/keyword-map.ts` as the route and content inventory source of truth.
- Prefer updating shared components and config before cloning one-off page patterns.

## Starter Boundaries

- This starter ships with trust pages, layout primitives, metadata/schema helpers, a reusable `HubPage`, empty product and keyword inventories, and generic editorial desks.
- Replace the placeholder desks, categories, featured coverage, and trust-page copy before publishing.
- Add niche-specific content under `src/data/content/` and matching routes under `src/app/`.

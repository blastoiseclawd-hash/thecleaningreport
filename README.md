# Affiliate PSEO Starter

This template is the reusable base for new affiliate sites in this repo.

## What it includes

- App Router Next.js starter wired for affiliate publishing
- Generic editorial-desk model in `src/data/authors.ts`
- Empty product catalog and keyword inventory
- Route-aware sitemap and metadata/schema helpers
- Shared page primitives such as `HubPage`
- Trust pages, disclosure patterns, and FTC copy wiring

## What you should replace first

- `src/config/site.ts`
- `src/data/authors.ts`
- `data/guide-opportunities.md`
- `data/content-ideas.md`
- `src/data/content/trust-pages.ts`

## Scaffold placeholders

The scaffold command replaces these tokens:

- `TheCleaningReport`
- `thecleaningreport`
- `thecleaningreport.com`
- `Practical indoor-cleaning buying guides for cleaner, lower-friction homes.`
- `TheCleaningReport publishes practical, independent buying guides for robot vacuums, cordless vacuums, steam mops, pet-mess cleanup, and indoor cleaning tools that help real homes stay cleaner with less friction.`

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
```

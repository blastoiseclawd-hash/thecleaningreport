# Indexing Coverage Report — TheCleaningReport

**Generated:** 2026-04-25T19:58:00Z
**GSC last update:** 2026-04-19
**Indexed:** 2 (baseline — first run)
**Not indexed:** 15 (baseline — first run)

## 🚨 LIVE pages NOT indexed (5 content + 6 trust = 11)

All flagged under "Discovered - currently not indexed". Google sees them in the sitemap but has not crawled or chosen to crawl-and-index.

### Content (commercial / support)

| Slug | Reason | First flagged |
|---|---|---|
| best-robot-vacuum | Discovered - currently not indexed | 2026-04-25 (this run) |
| best-hardwood-floor-cleaner | Discovered - currently not indexed | 2026-04-25 (this run) |
| best-stainless-steel-cleaner | Discovered - currently not indexed | 2026-04-25 (this run) |
| best-cordless-stick-vacuum-for-hardwood | Discovered - currently not indexed | 2026-04-25 (this run) |
| how-to-clean-hardwood-floors | Discovered - currently not indexed | 2026-04-25 (this run) |

### Trust pages

| Slug | Reason | First flagged |
|---|---|---|
| about | Discovered - currently not indexed | 2026-04-25 (this run) |
| ai-disclosure | Discovered - currently not indexed | 2026-04-25 (this run) |
| disclosure | Discovered - currently not indexed | 2026-04-25 (this run) |
| how-we-review | Discovered - currently not indexed | 2026-04-25 (this run) |
| privacy | Discovered - currently not indexed | 2026-04-25 (this run) |
| terms | Discovered - currently not indexed | 2026-04-25 (this run) |

## ⚠️ LIVE pages not appearing in any GSC report (12)

These slugs are LIVE in `guide-opportunities.json` but Google's "All known pages" report does not list them at all — neither indexed nor in any not-indexed reason. Most likely cause: not in the submitted sitemap, or sitemap not yet recrawled since publish.

- best-steam-mop
- best-carpet-cleaner-machine
- how-to-clean-grout
- best-mop
- what-to-mop-floors-with
- are-robot-vacuums-worth-it
- what-is-the-most-powerful-handheld-vacuum
- vacuum-and-mop-combo
- what-to-mop-tile-floors-with
- is-roomba-the-best-robot-vacuum
- how-to-clean-vinyl-floors
- how-to-clean-stainless-steel-sink

## Why pages aren't indexed (full breakdown)

| Reason | Count | Δ vs prior |
|---|---|---|
| Discovered - currently not indexed | 13 | baseline |
| Blocked due to other 4xx issue | 1 | baseline |
| Crawled - currently not indexed | 1 | baseline |

Notes:
- The "Blocked due to other 4xx issue" URL is `http://www.thecleaningreport.com/` (http+www variant). Likely benign — the canonical is `https://thecleaningreport.com/` and the http→https + www→non-www redirect is expected to drop the variant.
- The "Crawled - currently not indexed" URL is `http://thecleaningreport.com/` (http variant of the homepage). Same redirect story.

## Indexed pages (2)

- https://thecleaningreport.com/
- https://www.thecleaningreport.com/ (this is unexpected — see canonical-bug flag below)

## Severity flags this run

| Severity | Flag | Detail |
|---|---|---|
| HIGH | live-not-indexed-new (×5 content) | 5 commercial/support LIVE slugs in Discovered-not-indexed |
| HIGH | live-not-indexed-new (×6 trust) | 6 trust pages in Discovered-not-indexed |
| HIGH | live-pages-not-in-gsc (×12) | 12 LIVE slugs absent from "All known pages" entirely — sitemap-coverage gap |
| MEDIUM | indexed-floor | Only 2 indexed URLs and both are homepage variants — zero content pages indexed |
| MEDIUM | canonical-bug-suspect | Both `https://thecleaningreport.com/` and `https://www.thecleaningreport.com/` show as indexed — non-www variant should be the only canonical |

## Recommended diagnosis (Lee triages)

1. **Check sitemap submission status.** GSC → Sitemaps. Confirm `https://thecleaningreport.com/sitemap.xml` is submitted and last-fetched recently. If 12 LIVE slugs aren't in "All known pages," they're probably not in the served sitemap, or the sitemap is stale.
2. **Verify www → non-www 301 redirect.** GSC's "All known pages" lists both variants of the homepage as indexed. Either Google has indexed both (canonical bug) or the redirect chain is broken on www.
3. **Discovered-not-indexed for 13 pages = crawl-budget signal.** New site, low DR, no backlinks → Google saw the URLs in the sitemap but deprioritized crawling. Manual `URL Inspection → Request indexing` for the 5 commercial slugs is the cheapest unblock.
4. **Trust pages flagged as Discovered-not-indexed is normal** for a new site — they self-resolve once a few content pages get indexed and start passing internal-link equity. Don't manually request indexing on these.

## Notes

- First run for this site — no prior diff available.
- GSC's "Last update" is 2026-04-19, so the data is 6 days stale relative to today (2026-04-25).

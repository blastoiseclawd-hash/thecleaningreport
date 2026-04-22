# GSC Baseline — TheCleaningReport — 2026-04-22

<!-- Mode: baseline (pre-citation-retrofit snapshot) -->
<!-- Source: Google Search Console direct UI pull via Playwright MCP -->
<!-- Account: blastoise.clawd@gmail.com -->
<!-- Date range: Last 28 days (2026-03-25 through 2026-04-22) -->

## Purpose

Locks the before-retrofit baseline. TCR is the newest site (3 days since oldest LIVE page at 2026-04-19) so this baseline is explicit zero-signal — the value is the timestamp, not the data.

## 28-day summary (2026-03-25 to 2026-04-22)

| Metric | Value |
|---|---|
| Total clicks | **0** |
| Total impressions | **0** |
| Average CTR | **0%** |
| Average position | **0** |
| Days since first impression | N/A (no data yet) |
| Days since first click | N/A (no data yet) |

## Top queries

None. No query has registered an impression in the last 28 days.

## Top pages

None. No page has registered an impression in the last 28 days.

## Signal read

TCR launched 2026-04-19 per site-registry. GSC has a 2-3 day indexing+reporting lag, so this zero-signal state is expected. Real data should begin appearing in the 2026-05-08 pull (2 weeks post-launch) and mature by 2026-06-01 (6 weeks).

TCR's E-E-A-T infrastructure is the strongest on the portfolio (publisher.ts Lee Serel CPA, named-reviewer, full 9-field desk schema, `rich-text.tsx` footnote parser native, HubSourcesFooter component). The first query data will be useful less for Phase D retrofit (TCR is already retrofit-equivalent, it's the TEMPLATE the other sites are retrofitting TO) and more for validating that the infrastructure delivers ranking lift compared to BCF/BPP/CWP's pre-retrofit baselines.

## Retrofit targets (Phase D candidates)

TCR is NOT included in the Phase D backfill — it's already at the E-E-A-T standard the other sites are retrofitting to. The `/best-robot-vacuum` flagship already uses the footnote pattern.

However: once TCR has measurable GSC data (expected 2026-05-20+), it should be re-audited to confirm the flagship page's citation density is competitive with BCF/BPP/CWP's backfilled pages. If the other sites end up with 6-8 citations per page and TCR still has 3-4 from its original build, parity backfill applies in reverse.

## Follow-up pull

- **Next pull:** 2026-05-08 (first real signal expected) or 2026-05-20 (richer)
- **Same method:** Playwright GSC UI navigation, 28-day window
- **Key comparison:** TCR's first 4-week ranking pattern vs BCF (currently strongest non-TCR site) — confirms whether the TCR-parity retrofit actually moves the needle
- **Escape hatch:** if TCR still shows 0 impressions on 2026-05-20, investigate indexing (sitemap submission, robots.txt, GSC property verification status)

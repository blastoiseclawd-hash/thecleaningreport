---
slug: what-is-the-most-powerful-handheld-vacuum
role: topical_authority
decidedOn: 2026-04-21
decidedBy: Claude Opus 4.7 + Lee
---

# Intent-hierarchy decision: what-is-the-most-powerful-handheld-vacuum

## Role declaration

`topical_authority` — informational explainer supporting the LIVE commercial hub `/best-handheld-vacuum` (cluster: cordless-vacuums). Answers the specific reader question "what is the most powerful handheld vacuum" with a named top pick + the measurement-methodology tradeoffs (Pa vs AW vs CFM vs motor wattage) that mainstream handheld roundups gloss over.

## Part 2 — SERP intent-match check

- Target keyword: "what is the most powerful handheld vacuum" (50 vol, KD low).
- Existing LIVE page on same cluster: `/best-handheld-vacuum`.
- SERP overlap assessment: the LIVE hub ranks for commercial "best handheld vacuum" queries. The question-form phrasing here pulls informational/featured-snippet SERP results, not commercial roundups. The two queries serve distinct reader states (shopping vs investigating a single spec).
- Resolution: **Differentiate** — the support page targets the question-answer SERP; the hub continues to target the commercial SERP. Support page links INTO the hub as the path for readers who decide "most powerful" isn't the right lens for them.

## Part 3 — Variable-swap test

N/A — this is not a `best X for <variable>` pattern. It is a single-question explainer.

## Resolution

**Build.** As a support page (`build-support-page` pipeline) with:
- Named answer (specific handheld + spec citation from manufacturer/independent airflow test).
- Methodology section explaining Pa vs AW vs CFM (readers assume these are interchangeable; they are not).
- Failure-mode section: why the "most powerful" handheld isn't always the right buy (runtime tradeoff, weight tradeoff, attachment compatibility).
- `relatedLinks` back to `/best-handheld-vacuum` hub as the path for commercial-intent readers.

## Cannibalization risk

Low. The commercial hub's content covers power specs per-product but frames recommendation as use-case-fit (stairs, pet hair, car), not power ranking. A reader arriving at the hub from a "most powerful" query would be misrouted — the support page absorbs that question-form traffic and routes commercial-intent back to the hub.

# Phase 3.5 Infrastructure Audit — 2026-04-19

**Scope:** portfolio-wide sweep of GitHub / Vercel / DNS / GSC / GA4 pipes across BCF, CWP, BPP, TCR. Read-only audit (3.5.A); destructive dedup (3.5.B/C/D) gated on Lee approval.

**Auditor:** claude-code (Playwright + Vercel MCP + Bash curl/nslookup).
**Google account:** Playwright confirmed logged into canonical `blastoise.clawd@gmail.com` before opening GSC + GA4.

## 5-pipe matrix

| Pipe | BCF | CWP | BPP | TCR |
|---|---|---|---|---|
| **GitHub** | GREEN — `bettercoffeefinds` repo | GREEN | GREEN | GREEN |
| **Vercel** | GREEN — `prj_QUdjkIyBJts6AirQ3IpCUWIBHgV6`, apex+www attached, latest deploy READY | GREEN — `prj_EXdUAnwwovrIZcqpQu7qOrpP983U` | GREEN — `prj_5lbrjPYR2nmhe8iJ9YdbYNdVXJ5X` | GREEN — `prj_X0yW9B428l7K7iCKCk9Xtcm0Azlf` (created 2026-04-19) |
| **DNS** | GREEN — A @ → 76.76.21.21 (old anycast, still works); apex 200, www 200, sitemap 200 | GREEN — A @ → 216.150.16.129 + 216.150.1.65; apex 200, www 200 | GREEN — A @ → 76.76.21.21; CNAME www → cname.vercel-dns.com; apex 200, www 200 | GREEN — A @ → 216.150.1.1; CNAME www → vercel-dns-016; apex 307→www, www 200 |
| **GSC** | GREEN — `sc-domain:bettercoffeefinds.com` on blastoise.clawd | GREEN — `sc-domain:clearwaterpicks.com` on blastoise.clawd | GREEN — `sc-domain:betterpetpicks.com` on blastoise.clawd | YELLOW — `sc-domain:thecleaningreport.com` verified on blastoise.clawd + stale cryptocompendium shadow + old TXT record |
| **GA4** | YELLOW — property `532945176` on blastoise.clawd, receiving traffic. Config: `G-K1MPR2MGHM` hardcoded. Consent-gated via `CookieConsent` — tag loads only after cookie accepted. | **RED** — 6 duplicate properties on blastoise.clawd (all stale/no-data). Live site fires `G-J744R3GYQR` — source property NOT on blastoise.clawd (likely Find Website Pros or findradonpros account — not yet inventoried). | YELLOW — property `533256006` exists on blastoise.clawd (stream ID unknown). Config: `process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? ""`. `.env.local` has `G-6ZS78MWHNT` but Vercel prod has empty env var (tag not firing). | RED — no GA4 property exists. Creation deferred from Phase 3 due to GTM iframe wizard bug. |

## Detailed findings

### BCF (bettercoffeefinds.com)

- **Vercel**: canonical `bettercoffeefinds` project owns both apex + www + preview URLs. Legacy orphan project `bcf-v4` (`prj_qZWi2Af9WV7p6D8ItnX8hfujkJEw`) exists with ERROR deployment + only Vercel preview URLs — not attached to production domain. Candidate for archival but not blocking.
- **DNS**: apex on old Vercel anycast `76.76.21.21`. Works. TCR+CWP use newer `216.x` range; BCF+BPP could be re-pointed later for consistency but not urgent.
- **TXT**: 1 google-site-verification TXT (`hLX7h7UM8Cbbcn4Owt6lUXWEXp2oXORX6NUMpKsIZAo`). Clean.
- **GSC**: `sc-domain:bettercoffeefinds.com` on blastoise.clawd. Lee needs to be added as Full user (not yet confirmed).
- **GA4**: property `532945176` labeled "Better Coffee Finds" on account `384028652` (Blastoise - IronClad). Has stream `14368381252` for `https://bettercoffeefinds.com`, "Receiving traffic in past 48 hours." Almost certainly owns `G-K1MPR2MGHM` — need to click-in to confirm.
- **Tag firing**: NOT firing on Playwright cold-load (no cookies accepted). This is expected per the `CookieConsent` gate in `src/app/layout.tsx`. Behavior is correct; no action needed.

### CWP (clearwaterpicks.com)

- **Vercel**: canonical `clearwater-picks` project, clean.
- **DNS**: new Vercel anycast pair. Clean.
- **TXT**: 1 google-site-verification TXT (`lHfG0wsyfE5UBnaPm-1XhmBfw1wfqfGSlkaMOenyWX8`). Clean.
- **GSC**: `sc-domain:clearwaterpicks.com` on blastoise.clawd. Clean.
- **GA4**: **this is the messy pipe.** 6 properties labeled "Clear Water Picks" on account `384028652` (Blastoise - IronClad):
  - `532960152` — EMPTY ("Start collecting data", no stream)
  - `532977178` — has stream `14368342677` for clearwaterpicks.com, owns `G-4T9EYCPBB0`, "No data received in past 48 hours"
  - `532962333` — EMPTY
  - `532975966` — has stream `14368368453` for clearwaterpicks.com, no data 48h
  - `532971118` — not yet inspected
  - `532974956` — not yet inspected
  - `532945759` — not yet inspected
  - None of the 3 I inspected own the live-firing `G-J744R3GYQR`. Canonical source is somewhere else — possibly on `389889429` (Find Website Pros) or `386836925` (findradonpros.com) accounts (both accessible from blastoise.clawd, contents not yet enumerated).
- **Tag firing**: CWP IS firing `G-J744R3GYQR` live on a cold Playwright visit (direct `<Script>` load, no consent gate). So a canonical property DOES exist — just not at a location we've identified.

### BPP (betterpetpicks.com)

- **Vercel**: canonical `betterpetpicks` project, clean.
- **DNS**: A @ → 76.76.21.21 (old anycast). CNAME www → `cname.vercel-dns.com`. Works.
- **TXT**: 2 records — SPF + 1 google-site-verification (`DzTXRglAHsufVMEC2AVmfsmGceyK96w0vYuzVr-V56Y`). Matches the token in `sites/betterpetpicks/.env.local`'s `GOOGLE_SITE_VERIFICATION`. Clean.
- **GSC**: `sc-domain:betterpetpicks.com` on blastoise.clawd. **Registry was wrong — it said `searchConsole.configured: false` but GSC IS verified.**
- **GA4**: property `533256006` labeled "BetterPetPicks" on account `384028652`. Stream details not yet inspected. `.env.local` has `G-6ZS78MWHNT` as the measurement ID.
- **Tag firing**: NOT firing on live site. Cause: `src/config/site.ts` reads `process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? ""`, and Vercel production environment does not have this variable set. Wiring is a 3-step fix: (1) set Vercel env var, (2) redeploy, (3) verify tag.

### TCR (thecleaningreport.com)

- **Vercel**: canonical `thecleaningreport` project created 2026-04-19. Apex 307→www pattern differs from BCF/CWP/BPP (which all serve apex 200 directly). Not a bug; different canonical strategy. Flag for discussion but not blocking.
- **DNS**: Vercel's newest anycast. Clean.
- **TXT**: 2 google-site-verification TXTs + SPF. Drift:
  - `CPNQIixGZP71hQ9226pK_1l6DZRhFuaAg4WMTG3vM7E` — new, blastoise.clawd (canonical)
  - `SxXTQLT02JjeHH_y3Kc8p4tPjuUWAHuijizsK2bXufU` — stale, cryptocompendium@gmail.com (Phase 3.5 cleanup target)
- **GSC**: `sc-domain:thecleaningreport.com` on blastoise.clawd ✓ + shadow property on cryptocompendium. Sitemap submitted (Couldn't-fetch — pending first crawl). Lee added as Full user.
- **GA4**: does not exist. Phase 3.5 creates.

## Orphan / out-of-scope findings

- **GSC property `findwebsitepros.com`** exists in BOTH `sc-domain:` and URL-prefix (`https://findwebsitepros.com/`) formats — duplicate. Out of scope for this phase (non-affiliate-review site).
- **GSC property `findradonpros.com`** exists as URL-prefix (`https://www.findradonpros.com/`) only, not `sc-domain:`. Non-canonical format. Out of scope.
- **GA4 property `524025849`** labeled "Blastoise" on account `384028652` owns a stream for `ironcladcas.com` (Lee's CPA firm). Unrelated to affiliate portfolio; KEEP.
- **Vercel project `bcf-v4`** is a legacy orphan with ERROR latest deployment and no production domain. Archive candidate; out of scope.

## Destructive actions needed (pending Lee approval)

### Mandatory (portfolio hygiene)

1. **CWP GA4 dedup** — 5+ properties to delete once the canonical G-J744R3GYQR property is located. Requires either (a) completing the cross-account inventory under Find Website Pros + findradonpros.com accounts, or (b) blessing a "create fresh on blastoise.clawd" strategy that migrates the live tag off wherever it currently lives.
2. **TCR GA4 creation** on blastoise.clawd + wire `gaId` into `sites/thecleaningreport/src/config/site.ts` → redeploy → verify tag + real-time.
3. **TCR cryptocompendium cleanup** — delete the shadow GSC property + delete the old TXT record `SxXTQLT02JjeHH...` from Namecheap DNS.
4. **BPP Vercel env var wire** — set `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-6ZS78MWHNT` on BPP's Vercel project; redeploy; verify tag fires.
5. **Portfolio Full-user adds** — add `LeeSerel@gmail.com` as Full user on all 4 GSC properties + Administrator on all 4 GA4 properties (TCR already done; BCF/CWP/BPP pending).

### Optional (low priority, recommend defer)

6. Archive `bcf-v4` Vercel project.
7. Consolidate `findwebsitepros` GSC duplicates.
8. Upgrade `findradonpros` GSC from URL-prefix to `sc-domain:`.
9. Re-point BCF+BPP apex from 76.76.21.21 to Vercel's newer 216.x anycast (both work; optional).

## Questions for Lee

1. **CWP canonical strategy.** Pick one:
   - **(A) Inventory-first**: finish enumerating CWP properties under Find Website Pros + findradonpros accounts to find the one owning `G-J744R3GYQR`. Then keep that, delete all siblings. ~15-20 min extra inventory time.
   - **(B) Fresh-start**: create a new GA4 property for CWP on blastoise.clawd's `Blastoise - IronClad` account, get a new measurement ID, wire it into `sites/clearwaterpicks/src/config/site.ts`, redeploy, verify, then delete all 6+ existing CWP dups. Loses historical CWP GA4 data but produces a clean single-property state.
   - **(C) Defer CWP**: skip CWP GA4 dedup for this phase; do BPP + TCR + TCR cryptocompendium cleanup only. Revisit CWP in a dedicated sub-phase.

2. **Per-delete confirmation pattern.** For each GA4 / GSC property + Namecheap TXT delete, same pattern as Phase 3 DNS deletes: I surface the target record + evidence of stale-ness + reason-to-delete, wait for your explicit yes, then execute one delete at a time with status before each click. Confirm this pattern.

3. **BCF / BPP apex DNS repoint** (item 9 above) — worth doing in this phase for consistency, or defer?

## Summary

- **Phase 3 (TCR)**: CLOSED, all pipes healthy modulo known cryptocompendium drift.
- **BCF**: clean; confirm BCF GA4 property owns G-K1MPR2MGHM; add LeeSerel user.
- **CWP**: GSC clean; GA4 is the biggest unknown — pending Lee's (A/B/C) pick.
- **BPP**: GSC clean; GA4 needs Vercel env var + redeploy.
- **TCR**: GA4 creation + cryptocompendium cleanup.
- **Skill**: `connect-site-infrastructure` hardened with 6 new sections (account-preflight, TXT-accumulation, destructive-DNS-confirmation, verify-only-mode, dedup-deferral, GTM-iframe-workaround).

**Awaiting Lee approval on CWP strategy (A/B/C) before starting 3.5.B destructive actions.**

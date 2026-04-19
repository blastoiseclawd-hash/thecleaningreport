/**
 * Keyword Map — TheCleaningReport.com
 *
 * Phase 4.C output per `.claude/plans/can-you-review-our-lexical-robin.md`.
 * Built from:
 *   - `data/cluster-shortlist.md` — 7 clusters ranked by position-3 revenue floor
 *   - `data/avatar-research.md` — 4 full + 2 backlog-light avatars
 *   - `src/data/authors.ts` — 3 topical desks + 1 house voice
 *
 * Structure: ~15 money (4 hubs + 11 spokes) + 6 support + 3 linkable assets = 24 pages.
 * 1-in-10 linkable cadence per `build-guide-pipeline` lines 182-227. Kill-list gated
 * (pet-hair vacuum clusters stay with BPP per `check-keyword-overlap.js`).
 *
 * Desk distribution:
 *   - Labor Math Desk (`labor-math-desk`): 7 pages — Robot Vacuum hub + 5 spokes + 1 linkable
 *   - Everyday Cleaning Desk (`everyday-cleaning-desk`): 6 pages — Cordless hub + 3 spokes + Mop hub + Handheld spoke
 *   - Safe Surface Desk (`safe-surface-desk`): 11 pages — Carpet Cleaner hub + Steam Mop + 1 comparison + 6 support + 2 linkable
 *
 * Avatar distribution:
 *   - Labor Trader: 7 pages (Robot Vacuum cluster primary)
 *   - Practical Floor Keeper: 6 pages (Cordless + Handheld + Mop)
 *   - Surface Protector: 7 pages (Steam Mop + Chemical Bundle + decision support)
 *   - Event-Driven Restorer: 3 pages (Carpet Cleaner Machine cluster + rent-vs-buy)
 *   - Generic Mop Buyer (backlog): interim cover on Mop hub via Practical Floor Keeper voice
 *
 * Volume/KD values are conservative estimates from the shortlist aggregate data +
 * typical spoke-tier ratios. Refined per-page at Phase 5 via Pass 3 MCP checks.
 */

export type PageTargetType = "hub" | "spoke" | "review" | "guide" | "trust";

export type PageTargetClass =
  | "money-guide"
  | "support-guide"
  | "comparison"
  | "linkable-asset";

export interface PageTarget {
  slug: string;
  title: string;
  type: PageTargetType;
  pageType: PageTargetClass;
  primaryKeyword: string;
  primaryVolume: number;
  primaryKd: number;
  secondaryKeywords: string[];
  deskId: string;
  primaryAvatar: string;
  secondaryAvatar?: string;
  audienceEvidence: string;
  priority: number;
  notes: string;
  // Legacy-compatible alias — some older routes read `keyword`
  keyword?: string;
}

export const pageTargets: PageTarget[] = [
  // ============================================================
  // HUBS — priority 1
  // ============================================================
  {
    slug: "best-robot-vacuum",
    title: "Best Robot Vacuums (2026): Labor-Math-First Picks",
    type: "hub",
    pageType: "money-guide",
    primaryKeyword: "best robot vacuum",
    primaryVolume: 52000,
    primaryKd: 4,
    secondaryKeywords: [
      "best robot vacuum 2026",
      "best robot vacuum for pet hair free home",
      "top robot vacuums",
      "robot vacuum with mop",
      "best robot vacuum and mop combo",
    ],
    deskId: "labor-math-desk",
    primaryAvatar: "Labor Trader",
    audienceEvidence:
      "Labor Trader / What they search: 'best robot vacuum 2026', 'robot vacuum self-empty worth it', 'roborock qrevo vs saros'. Core job: 'I will spend more money to reclaim hours — but prove to me this tool doesn't cost me those hours right back in maintenance.'",
    priority: 1,
    notes:
      "Flagship. Revenue spine. Cluster shortlist row 1 (46 winners, $6,641/mo P3 floor). Cites Vacuum Wars 7-inch hair-tangle + Modern Castle 12-debris matrix. Maintenance-reality block is non-negotiable — dock mold, dirty water tank smell, firmware regression. No Labor Trader page buries these.",
  },
  {
    slug: "best-cordless-vacuum",
    title: "Best Cordless Vacuums (2026): Real Runtime, Real Tradeoffs",
    type: "hub",
    pageType: "money-guide",
    primaryKeyword: "best cordless vacuum",
    primaryVolume: 41000,
    primaryKd: 2,
    secondaryKeywords: [
      "best cordless stick vacuum",
      "best cordless vacuum 2026",
      "best cordless vacuum for home",
      "shark vs dyson cordless",
      "best cordless vacuum for hardwood and carpet",
    ],
    deskId: "everyday-cleaning-desk",
    primaryAvatar: "Practical Floor Keeper",
    audienceEvidence:
      "Practical Floor Keeper / What they search: 'best cordless vacuum under 200', 'shark vs dyson cordless', 'is dyson worth it'. Mental model: 'I want the thing 80% of normal people are happy with at the price most normal people pay.' Checks CR + GHI + Wirecutter + 1 Reddit thread.",
    priority: 1,
    notes:
      "FORTRESS-adjacent head term per shortlist row 2 — bare head SERP dominated by DR 68+ publishers. Carve via sub-niche spokes ($200, hardwood, lightweight). Hub introduces CR + GHI trust anchors + tradeoff table; depth pages own the volume.",
  },
  {
    slug: "best-carpet-cleaner-machine",
    title: "Best Carpet Cleaner Machines (2026): Rent-or-Buy Math + Head-to-Head Picks",
    type: "hub",
    pageType: "money-guide",
    primaryKeyword: "best carpet cleaner machine",
    primaryVolume: 4800,
    primaryKd: 6,
    secondaryKeywords: [
      "best carpet cleaner",
      "best carpet shampooer",
      "best carpet cleaning machine",
      "best home carpet cleaner",
    ],
    deskId: "safe-surface-desk",
    primaryAvatar: "Event-Driven Restorer",
    audienceEvidence:
      "Event-Driven Restorer / What they search: 'best carpet cleaner machine', 'bissell big green vs rug doctor', 'carpet cleaner worth buying vs renting'. Core job: 'Something happened — we moved in / flood / wine / pre-listing. I need to deep-clean hard. Rent-vs-buy math says buy this time.'",
    priority: 1,
    notes:
      "Tight flagship per shortlist row 6 (1 winner keyword, $250 AOV Big-Green class). Lead with rent-vs-buy framework; name dry-time as THE differentiator per avatar dealbreaker. IICRC S100 + VacuumLand exclusive trust. Avoid pet-mess framing — that's BPP.",
  },
  {
    slug: "best-mop",
    title: "Best Mops for Everyday Home Cleaning (2026)",
    type: "hub",
    pageType: "money-guide",
    primaryKeyword: "best mop",
    primaryVolume: 19000,
    primaryKd: 1,
    secondaryKeywords: [
      "best mop 2026",
      "best mop for home",
      "best household mop",
      "o-cedar vs bona",
    ],
    deskId: "everyday-cleaning-desk",
    primaryAvatar: "Practical Floor Keeper",
    secondaryAvatar: "Generic Mop Buyer",
    audienceEvidence:
      "Practical Floor Keeper / Cross-cluster expression: 'SECONDARY. Wants a simple non-steam mop (O-Cedar-class) alongside the cordless. $20-60.' Backlog Generic Mop Buyer / What they search: 'best mop for hardwood floors', 'best spin mop', 'o-cedar easywring reviews' carries interim voice.",
    priority: 1,
    notes:
      "Deepest winner bench per shortlist row 3 (63 winners, 0.6 avg KD). Practical Floor Keeper voice primary until Generic Mop Buyer deepens per avatar-research.md § Backlog-cluster deepening policy. Links to steam-mop + hardwood-floor-cleaner support.",
  },

  // ============================================================
  // ROBOT VACUUM SPOKES — Labor Math Desk, Labor Trader
  // ============================================================
  {
    slug: "best-robot-vacuum-under-500",
    title: "Best Robot Vacuums Under $500 (2026): Where the Time-Math Still Works",
    type: "spoke",
    pageType: "money-guide",
    primaryKeyword: "best robot vacuum under 500",
    primaryVolume: 2900,
    primaryKd: 3,
    secondaryKeywords: [
      "best budget robot vacuum",
      "best cheap robot vacuum",
      "robot vacuum under $500",
      "affordable robot vacuum with mop",
    ],
    deskId: "labor-math-desk",
    primaryAvatar: "Labor Trader",
    audienceEvidence:
      "Labor Trader / Budget and decision factors: '$300 entry, $500-800 mainstream target'. Dealbreakers at this tier: 'Dock becomes a second chore' + obstacle-avoidance that fails on cords/socks.",
    priority: 2,
    notes:
      "Under-$500 band is where the Labor Trader's time-math breaks even soonest. Eufy X10 Pro Omni-class + value-tier Roborock Q-series. Explicit 'what you give up vs $800+' tradeoff block.",
  },
  {
    slug: "best-robot-vacuum-for-hardwood",
    title: "Best Robot Vacuums for Hardwood Floors (2026)",
    type: "spoke",
    pageType: "money-guide",
    primaryKeyword: "best robot vacuum for hardwood",
    primaryVolume: 1800,
    primaryKd: 2,
    secondaryKeywords: [
      "best robot vacuum for hardwood floors",
      "robot vacuum hardwood",
      "robot vacuum safe for hardwood",
      "robot vacuum for wood floors",
    ],
    deskId: "labor-math-desk",
    primaryAvatar: "Labor Trader",
    secondaryAvatar: "Surface Protector",
    audienceEvidence:
      "Labor Trader / What they search: 'best robot vacuum for hardwood'. Safe Surface secondary: avatar-research.md notes Surface Protector expresses rarely in Robot Vacuum cluster — but 'robot vacuum mop combo hardwood safe' is a real decision where their voice lifts caution framing.",
    priority: 2,
    notes:
      "Dual-avatar page — Labor Math leads, Safe Surface contributes the 'brushroll aggressiveness' caution block per engineered-hardwood warranty concerns. Cites Bona care guide.",
  },
  {
    slug: "best-robot-vacuum-self-empty",
    title: "Best Self-Emptying Robot Vacuums (2026): When the Dock Earns Its Keep",
    type: "spoke",
    pageType: "money-guide",
    primaryKeyword: "best robot vacuum self empty",
    primaryVolume: 1500,
    primaryKd: 3,
    secondaryKeywords: [
      "best self emptying robot vacuum",
      "robot vacuum auto empty",
      "robot vacuum self emptying base",
      "robot vacuum with self empty dock",
    ],
    deskId: "labor-math-desk",
    primaryAvatar: "Labor Trader",
    audienceEvidence:
      "Labor Trader / Recurring concerns: 'Long-tail dock maintenance — how often am I actually cleaning this thing?' Dealbreakers: 'Bags that jam on hair', 'Dirty-water tanks that require scrubbing.'",
    priority: 2,
    notes:
      "Dock-maintenance-reality is the load-bearing section. Name bag replacement cost over 12 months. Cites Vacuum Wars dock-teardown content.",
  },
  {
    slug: "best-robot-vacuum-with-mop",
    title: "Best Robot Vacuum + Mop Combos (2026): When Two Tools Should Be One",
    type: "spoke",
    pageType: "money-guide",
    primaryKeyword: "best robot vacuum with mop",
    primaryVolume: 2400,
    primaryKd: 3,
    secondaryKeywords: [
      "best robot mop",
      "best robot vacuum and mop combo",
      "robot vacuum mop combo",
      "2-in-1 robot vacuum mop",
    ],
    deskId: "labor-math-desk",
    primaryAvatar: "Labor Trader",
    audienceEvidence:
      "Labor Trader / What they search: 'roborock qrevo vs saros'. Dealbreakers: 'Mop pads that sit wet and grow smell. Dirty-water tanks that require scrubbing.' Mop-dry-cycle is a named maintenance-reality concern.",
    priority: 2,
    notes:
      "Dry-cycle + pad-smell concerns lead the page. Qrevo + Saros + X10 Pro Omni tier. Avoid over-promising on engineered-hardwood — point to Safe Surface's steam-mop decision tree for readers with sunk-cost flooring.",
  },
  {
    slug: "roborock-vs-eufy",
    title: "Roborock vs Eufy: Which Robot Vacuum Brand Actually Fits Your House",
    type: "spoke",
    pageType: "comparison",
    primaryKeyword: "roborock vs eufy",
    primaryVolume: 1200,
    primaryKd: 4,
    secondaryKeywords: [
      "roborock or eufy",
      "eufy vs roborock robot vacuum",
      "roborock vs eufy vs shark",
      "is roborock better than eufy",
    ],
    deskId: "labor-math-desk",
    primaryAvatar: "Labor Trader",
    audienceEvidence:
      "Labor Trader / What they search: 'roborock vs eufy vs shark'. Mental model: 'My friend said theirs was useless — I need counter-evidence, not marketing.' Head-to-head brand comparison is a named decision pattern.",
    priority: 2,
    notes:
      "Head-to-head brand comparison. Use the same Vacuum Wars methodology table across both brands. App-privacy posture + post-warranty update history is a genuine Labor-Trader tiebreaker.",
  },

  // ============================================================
  // CORDLESS SPOKES — Everyday Cleaning Desk, Practical Floor Keeper
  // ============================================================
  {
    slug: "best-cordless-vacuum-under-200",
    title: "Best Cordless Vacuums Under $200 (2026): What's Worth Keeping at This Price",
    type: "spoke",
    pageType: "money-guide",
    primaryKeyword: "best cordless vacuum under 200",
    primaryVolume: 2200,
    primaryKd: 1,
    secondaryKeywords: [
      "best cheap cordless vacuum",
      "best budget cordless vacuum",
      "affordable cordless stick vacuum",
      "cordless vacuum under 200",
    ],
    deskId: "everyday-cleaning-desk",
    primaryAvatar: "Practical Floor Keeper",
    audienceEvidence:
      "Practical Floor Keeper / Budget: '$80 floor, $150-250 sweet spot.' What they search: 'best cordless vacuum under 200'. Dealbreakers: 'Budget models with no sealed-filtration (releases dust back into the room — Vacuum Wars calls this out regularly).'",
    priority: 2,
    notes:
      "Sealed-filtration test is the non-negotiable quality gate at this price. Pull CR + GHI winners + 1 Reddit-validated long-runner. Real 3-year filter replacement cost tabulated.",
  },
  {
    slug: "best-cordless-stick-vacuum-for-hardwood",
    title: "Best Cordless Stick Vacuums for Hardwood Floors (2026)",
    type: "spoke",
    pageType: "money-guide",
    primaryKeyword: "best cordless stick vacuum for hardwood",
    primaryVolume: 900,
    primaryKd: 2,
    secondaryKeywords: [
      "best cordless vacuum for hardwood floors",
      "cordless stick vacuum hardwood",
      "soft roller cordless vacuum",
      "best cordless vacuum for wood floors",
    ],
    deskId: "everyday-cleaning-desk",
    primaryAvatar: "Practical Floor Keeper",
    secondaryAvatar: "Surface Protector",
    audienceEvidence:
      "Practical Floor Keeper / Cares about 'hair-wrap resistance on brushroll' + 'weight (can they maneuver it upstairs)'. Surface Protector / Cross-cluster: 'Shows up for best vacuum that won't scratch hardwood queries.'",
    priority: 3,
    notes:
      "Soft-roller heads (Dyson Fluffy, Shark PowerDetect with soft-roller mode). Brushroll-damage risk on engineered hardwood gets a single-paragraph caution box in Safe Surface voice.",
  },
  {
    slug: "best-lightweight-cordless-vacuum",
    title: "Best Lightweight Cordless Vacuums (2026): For Stairs, Apartments, and Upper Floors",
    type: "spoke",
    pageType: "money-guide",
    primaryKeyword: "best lightweight cordless vacuum",
    primaryVolume: 800,
    primaryKd: 2,
    secondaryKeywords: [
      "lightweight cordless vacuum",
      "best light stick vacuum",
      "lightweight vacuum for stairs",
      "light cordless vacuum for elderly",
    ],
    deskId: "everyday-cleaning-desk",
    primaryAvatar: "Practical Floor Keeper",
    audienceEvidence:
      "Practical Floor Keeper / Recurring concerns: 'Is the lightweight version actually light enough? (stairs + ceiling fans test)' + 'Can this be my ONLY vacuum, or do I need a backup?'",
    priority: 3,
    notes:
      "Real lbs-with-battery numbers, not marketing 'sub-5-lb' claims that strip the battery. Stairs + ceiling-fan reach are the use-cases readers test mentally.",
  },

  // ============================================================
  // STEAM MOP + HANDHELD — Safe Surface + Everyday Cleaning
  // ============================================================
  {
    slug: "best-steam-mop",
    title: "Best Steam Mops (2026): Floor-Type-First Picks (Read the Warranty First)",
    type: "spoke",
    pageType: "money-guide",
    primaryKeyword: "best steam mop",
    primaryVolume: 6600,
    primaryKd: 3,
    secondaryKeywords: [
      "best steam cleaner",
      "best steam mop 2026",
      "best steam mop for tile",
      "bissell steam mop vs shark",
    ],
    deskId: "safe-surface-desk",
    primaryAvatar: "Surface Protector",
    audienceEvidence:
      "Surface Protector / Dealbreakers: 'Any page claiming a steam mop is safe on engineered hardwood or laminate without MASSIVE caveats. Houzz-documented case: planks beginning to bubble at the seams within months of weekly steam mop use.' Cross-cluster: 'PRIMARY. Decision-tree page.'",
    priority: 2,
    notes:
      "Shortlist row 5. Caution-block leads — NOT product list. Decision tree: what floor type → safe / caveat / avoid. Bona + Shaw + Armstrong care guides cited. Fiber-tile-vinyl picks only; laminate + engineered hardwood get explicit 'check your warranty' callouts.",
  },
  {
    slug: "best-handheld-vacuum",
    title: "Best Handheld Vacuums (2026): For Stairs, Cars, and Couch Crumbs",
    type: "spoke",
    pageType: "money-guide",
    primaryKeyword: "best handheld vacuum",
    primaryVolume: 4300,
    primaryKd: 1,
    secondaryKeywords: [
      "best handheld vacuum for car",
      "best cordless handheld vacuum",
      "best small vacuum",
      "handheld vacuum for stairs",
    ],
    deskId: "everyday-cleaning-desk",
    primaryAvatar: "Practical Floor Keeper",
    audienceEvidence:
      "Practical Floor Keeper / Cross-cluster expression: 'SECONDARY. Shops this as a supplement to the cordless 6 months later. $80-150.' Shortlist row 4: 9 winners, support-tier money page.",
    priority: 3,
    notes:
      "Shortlist row 4. Support-tier standalone; links up to the cordless hub as 'supplement to your main vacuum.' CR + GHI trust anchors; no methodology deep-dive.",
  },

  // ============================================================
  // CARPET CLEANER COMPARISON
  // ============================================================
  {
    slug: "bissell-big-green-vs-rug-doctor",
    title: "Bissell Big Green vs Rug Doctor: The Actual Buy-or-Rent Decision",
    type: "spoke",
    pageType: "comparison",
    primaryKeyword: "bissell big green vs rug doctor",
    primaryVolume: 900,
    primaryKd: 5,
    secondaryKeywords: [
      "rug doctor vs bissell big green",
      "big green vs rug doctor pro",
      "bissell vs rug doctor",
      "which is better bissell or rug doctor",
    ],
    deskId: "safe-surface-desk",
    primaryAvatar: "Event-Driven Restorer",
    audienceEvidence:
      "Event-Driven Restorer / What they search: 'bissell big green vs rug doctor', 'carpet cleaner worth buying vs renting'. Cares about: 'tank capacity (Big Green 1.75gal vs Rug Doctor 3.9gal)', 'dry time (Big Green dries in 2 hours vs Rug Doctor wet for hours or over a day — THE most-cited differentiator).'",
    priority: 2,
    notes:
      "THE comparison in the cluster per VacuumLand enthusiast threads. Dry-time, tank size, stairs-and-upholstery reach, proprietary-solution cost — named per avatar. IICRC S100 annual-cadence framing.",
  },

  // ============================================================
  // SUPPORT GUIDES — Safe Surface Desk, Surface Protector
  // ============================================================
  {
    slug: "how-to-clean-hardwood-floors",
    title: "How to Clean Hardwood Floors (Without Voiding the Warranty)",
    type: "guide",
    pageType: "support-guide",
    primaryKeyword: "how to clean hardwood floors",
    primaryVolume: 18000,
    primaryKd: 12,
    secondaryKeywords: [
      "how to clean wood floors",
      "cleaning hardwood floors",
      "best way to clean hardwood floors",
      "how to mop hardwood floors",
    ],
    deskId: "safe-surface-desk",
    primaryAvatar: "Surface Protector",
    audienceEvidence:
      "Surface Protector / Core job: 'Tell me what will NOT damage my engineered hardwood / laminate... then tell me the safest thing that actually works.' Dealbreakers: 'Vinegar as default hardwood recommendation — acid degrades polyurethane over time.'",
    priority: 3,
    notes:
      "Decision tree: engineered vs solid vs laminate. What to avoid (vinegar, steam mop, wet mop). What Bona/Shaw/Armstrong endorse. Links down to `best-hardwood-floor-cleaner` product page + up to `best-mop` hub.",
  },
  {
    slug: "how-to-clean-grout",
    title: "How to Clean Grout (Without Bleaching the Color Out)",
    type: "guide",
    pageType: "support-guide",
    primaryKeyword: "how to clean grout",
    primaryVolume: 22000,
    primaryKd: 14,
    secondaryKeywords: [
      "how to clean tile grout",
      "best way to clean grout",
      "cleaning grout",
      "how to whiten grout",
    ],
    deskId: "safe-surface-desk",
    primaryAvatar: "Surface Protector",
    audienceEvidence:
      "Surface Protector / Dealbreakers: 'Ammonia or bleach on grout — degrades colored grout, leaves dirt-attracting film (CR documents this).' Recurring concerns: 'Re-seal / re-coat cycles — grout needs resealing.'",
    priority: 3,
    notes:
      "Lead with 'what you'll ruin first' — colored grout + sealer degradation. pH-neutral routes. Links to `best-grout-cleaner` product page.",
  },
  {
    slug: "best-hardwood-floor-cleaner",
    title: "Best Hardwood Floor Cleaners (2026): Manufacturer-Approved Picks",
    type: "spoke",
    pageType: "support-guide",
    primaryKeyword: "best hardwood floor cleaner",
    primaryVolume: 9900,
    primaryKd: 9,
    secondaryKeywords: [
      "best wood floor cleaner",
      "best hardwood floor cleaning solution",
      "non toxic hardwood floor cleaner",
      "bona hardwood floor cleaner alternatives",
    ],
    deskId: "safe-surface-desk",
    primaryAvatar: "Surface Protector",
    audienceEvidence:
      "Surface Protector / What they search: 'best hardwood floor cleaner non toxic', 'bona vs [competitor] hardwood'. Cares about: 'manufacturer-of-the-surface endorsement (Bona co-marketed with hardwood manufacturers matters)', pH, EWG/Made-Safe certification.",
    priority: 3,
    notes:
      "Chemical Bundle spoke. Bona primary, Method/Seventh Generation alt, avoid vinegar-based + Murphy Oil narrative (long-term wax buildup). Links up to `how-to-clean-hardwood-floors`.",
  },
  {
    slug: "best-grout-cleaner",
    title: "Best Grout Cleaners (2026): Color-Safe, Sealer-Safe Picks",
    type: "spoke",
    pageType: "support-guide",
    primaryKeyword: "best grout cleaner",
    primaryVolume: 8100,
    primaryKd: 10,
    secondaryKeywords: [
      "best tile grout cleaner",
      "best grout cleaning product",
      "best grout cleaning solution",
      "oxygen bleach grout cleaner",
    ],
    deskId: "safe-surface-desk",
    primaryAvatar: "Surface Protector",
    audienceEvidence:
      "Surface Protector / Dealbreakers: 'Ammonia or bleach on grout — degrades colored grout.' Authority lane: 'EWG Verified, Made Safe' certification preferred.",
    priority: 3,
    notes:
      "Oxygen-bleach-based picks (Oxi-based). Color-safe caveats explicit. Links up to `how-to-clean-grout` support guide + lateral to `best-steam-mop` for non-porous tile.",
  },
  {
    slug: "best-stainless-steel-cleaner",
    title: "Best Stainless Steel Cleaners (2026): Streak-Free Without the Abrasives",
    type: "spoke",
    pageType: "support-guide",
    primaryKeyword: "best stainless steel cleaner",
    primaryVolume: 6600,
    primaryKd: 11,
    secondaryKeywords: [
      "best stainless steel cleaner and polish",
      "streak free stainless steel cleaner",
      "best cleaner for stainless steel appliances",
      "stainless steel cleaner non toxic",
    ],
    deskId: "safe-surface-desk",
    primaryAvatar: "Surface Protector",
    audienceEvidence:
      "Surface Protector / Dealbreakers: 'Abrasive cleaners on stainless — dulls the finish.' Recurring concerns: 'Long-term residue buildup — wax haze on hardwood, soap scum on grout, hard-water stains on stainless.'",
    priority: 3,
    notes:
      "Abrasives-out, direction-of-grain-matters. Weiman + Bar Keepers Friend positioning. Appliance manufacturer care endorsements (Whirlpool + GE + Bosch) where available.",
  },
  {
    slug: "can-you-use-a-steam-mop-on-engineered-hardwood",
    title: "Can You Use a Steam Mop on Engineered Hardwood? (The Honest Answer)",
    type: "guide",
    pageType: "support-guide",
    primaryKeyword: "can you use a steam mop on engineered hardwood",
    primaryVolume: 2400,
    primaryKd: 7,
    secondaryKeywords: [
      "steam mop on engineered hardwood",
      "steam mop engineered wood floor",
      "is steam mop safe for engineered hardwood",
      "steam mop laminate damage",
    ],
    deskId: "safe-surface-desk",
    primaryAvatar: "Surface Protector",
    audienceEvidence:
      "Surface Protector / What they search: 'can you use a steam mop on engineered hardwood', 'steam mop laminate damage'. Dealbreakers: 'Houzz-documented case: planks beginning to bubble at the seams within months of weekly steam mop use.'",
    priority: 3,
    notes:
      "Pure decision-support. Answer up top (mostly no), then warranty-language evidence from 3 major manufacturers, then 'if you already own one' mitigation. Internal-link feeder to `best-steam-mop` + `how-to-clean-hardwood-floors`.",
  },

  // ============================================================
  // LINKABLE ASSETS (1-in-10 cadence — patterns 1/6/7)
  // ============================================================
  {
    slug: "robot-vacuum-comparison-tool",
    title: "Robot Vacuum Comparison Tool: 2026 Head-to-Head Specs + Maintenance Reality",
    type: "guide",
    pageType: "linkable-asset",
    primaryKeyword: "robot vacuum comparison",
    primaryVolume: 600,
    primaryKd: 5,
    secondaryKeywords: [
      "compare robot vacuums",
      "robot vacuum comparison chart",
      "robot vacuum specs comparison",
      "best robot vacuum comparison",
    ],
    deskId: "labor-math-desk",
    primaryAvatar: "Labor Trader",
    audienceEvidence:
      "Labor Trader / Mental model: 'I'm buying hours of my life back.' Methodology-backed reviews carry more weight than CR/GHI. Shortlist § Phase 5 hint flags this category for a comparison asset.",
    priority: 3,
    notes:
      "Pattern 1 (lookup). Side-by-side spec + maintenance-reality table across 15-20 robot vacuums. Vacuum Wars hair-tangle + Modern Castle debris scores where published. Outreach-ready for vacuum enthusiasts + r/RobotVacuums + HomeImprovement subs.",
  },
  {
    slug: "carpet-cleaner-rent-vs-buy-calculator",
    title: "Rent or Buy a Carpet Cleaner? The Actual Break-Even Math (2026)",
    type: "guide",
    pageType: "linkable-asset",
    primaryKeyword: "carpet cleaner rent vs buy",
    primaryVolume: 400,
    primaryKd: 4,
    secondaryKeywords: [
      "is it worth buying a carpet cleaner",
      "rent or buy carpet cleaner",
      "cost to rent vs buy rug doctor",
      "carpet cleaner break even",
    ],
    deskId: "safe-surface-desk",
    primaryAvatar: "Event-Driven Restorer",
    audienceEvidence:
      "Event-Driven Restorer / Mental model: 'I've rented a Rug Doctor 3 times in 2 years. At what point is buying one cheaper?' Break-even at rental 4-6 per avatar analysis.",
    priority: 3,
    notes:
      "Pattern 6 (annual state-of). Embed calculator: rentals/yr × $40 + solution × $19 vs machine buy + owned-solution. IICRC S100 annual cadence framing. Outreach-ready for home-improvement bloggers + r/HomeImprovement.",
  },
  {
    slug: "cleaning-tool-by-surface-decision-tree",
    title: "Cleaning-Tool-by-Surface Decision Tree: What's Safe on Each Floor (2026)",
    type: "guide",
    pageType: "linkable-asset",
    primaryKeyword: "what floor cleaner is safe for hardwood",
    primaryVolume: 300,
    primaryKd: 8,
    secondaryKeywords: [
      "what cleaner is safe for laminate",
      "safe cleaner for engineered hardwood",
      "cleaning tool by floor type",
      "which mop is safe for hardwood",
    ],
    deskId: "safe-surface-desk",
    primaryAvatar: "Surface Protector",
    audienceEvidence:
      "Surface Protector / Voice: 'Decision tree / what-to-check-first → safe picks tier → risky picks with exact caveats. Explicit if your floor is X, use Y and NOT Z mapping.' Direct voice-structure match.",
    priority: 3,
    notes:
      "Pattern 7 (diagram). Visual decision tree: floor type → mop/vacuum/chemistry → safe/risky. Bona + Shaw + Armstrong + Mannington care-guide citations. Shareable PNG + embeddable HTML. Outreach-ready for flooring-manufacturer forums + r/HomeImprovement + Houzz.",
  },
];

/**
 * Legacy export: populate `keyword` field from `primaryKeyword` on read so
 * older callers (if any) don't break. Extend pageTargets above — do not
 * maintain two arrays.
 */
for (const t of pageTargets) {
  if (!t.keyword) t.keyword = t.primaryKeyword;
}

export function getPageTargetBySlug(slug: string): PageTarget | undefined {
  return pageTargets.find((t) => t.slug === slug);
}

export function getPageTargetsByDesk(deskId: string): PageTarget[] {
  return pageTargets.filter((t) => t.deskId === deskId);
}

export function getPageTargetsByAvatar(avatar: string): PageTarget[] {
  return pageTargets.filter(
    (t) => t.primaryAvatar === avatar || t.secondaryAvatar === avatar,
  );
}

/**
 * Keyword Map — Thecleaningreport
 *
 * Regenerated 2026-04-20 by the portfolio-wide roadmap system.
 * This file holds the currently mapped page targets; the full ordered backlog lives in data/guide-opportunities.md.
 */

export type InternalPageType = "hub" | "spoke" | "review" | "guide" | "trust";

export type RoadmapPageType =
  | "money-guide"
  | "support-guide"
  | "comparison"
  | "linkable-asset"
  | "directory-hub"
  | "directory-location"
  | "service-intent-support";

export type ContentShape =
  | "flagship-roundup"
  | "use-case-roundup"
  | "budget-roundup"
  | "brand-roundup"
  | "feature-roundup"
  | "head-to-head"
  | "brand-vs-brand"
  | "category-vs-category"
  | "problem-diagnostic"
  | "setup-how-to"
  | "maintenance-cleaning"
  | "troubleshooting-fix"
  | "compatibility-safety"
  | "worth-it-buying-decision"
  | "glossary-explainer"
  | "lookup"
  | "calculator"
  | "data-study"
  | "exhaustive-reference"
  | "annual-state-of"
  | "diagram"
  | "downloadable";

export type IntentBucket =
  | "buy"
  | "compare"
  | "diagnose"
  | "learn"
  | "maintain"
  | "decide";

export interface PageTarget {
  slug: string;
  title: string;
  type: InternalPageType;
  pageType: RoadmapPageType;
  contentShape: ContentShape;
  intentBucket: IntentBucket;
  clusterId: string;
  buildOrder: number;
  buildPriorityScore: number;
  buildStatus: "LIVE" | "CONTENT READY" | "IN PROGRESS" | "NOT BUILT" | "SKIP";
  primaryKeyword: string;
  primaryVolume: number;
  primaryKd: number;
  trafficPotential: number;
  secondaryKeywords: string[];
  authorSlug: string;
  deskId?: string;
  audienceProfile: string;
  primaryAvatar: string;
  secondaryAvatar?: string;
  audienceEvidence: string;
  priority: number;
  notes: string;
  keyword?: string;
}

export const pageTargets: PageTarget[] = [
  {
    slug: "best-robot-vacuum",
    title: "Best Robot Vacuums (2026): Labor-Math-First Picks",
    type: "hub",
    pageType: "money-guide",
    contentShape: "flagship-roundup",
    intentBucket: "buy",
    clusterId: "cleaning-support",
    buildOrder: 1,
    buildPriorityScore: 89,
    buildStatus: "LIVE",
    primaryKeyword: "best robot vacuum",
    primaryVolume: 52000,
    primaryKd: 4,
    trafficPotential: 52000,
    secondaryKeywords: [
      "best robot vacuum 2026",
      "best robot vacuum for pet hair free home",
      "top robot vacuums",
      "robot vacuum with mop",
      "best robot vacuum and mop combo"
    ],
    authorSlug: "labor-math-desk",
    deskId: "labor-math-desk",
    audienceProfile: "time-saving-cleanup-buyer",
    primaryAvatar: "Labor Trader",
    secondaryAvatar: "",
    audienceEvidence: "Labor Trader / What they search: 'best robot vacuum 2026', 'robot vacuum self-empty worth it', 'roborock qrevo vs saros'. Core job: 'I will spend more money to reclaim hours — but prove to me this tool doesn't cost me those hours right back in maintenance.'",
    priority: 1,
    notes: "Flagship. Revenue spine. Cluster shortlist row 1 (46 winners, $6,641/mo P3 floor). Cites Vacuum Wars 7-inch hair-tangle + Modern Castle 12-debris matrix. Maintenance-reality block is non-negotiable — dock mold, dirty water tank smell, firmware regression. No Labor Trader page buries these.",
    keyword: "best robot vacuum"
  },
  {
    slug: "best-cordless-vacuum",
    title: "The 5 Best Cordless Vacuums of 2026",
    type: "hub",
    pageType: "money-guide",
    contentShape: "flagship-roundup",
    intentBucket: "buy",
    clusterId: "cleaning-support",
    buildOrder: 2,
    buildPriorityScore: 81.8,
    buildStatus: "LIVE",
    primaryKeyword: "best cordless vacuum",
    primaryVolume: 51000,
    primaryKd: 24,
    trafficPotential: 68000,
    secondaryKeywords: [
      "best cordless stick vacuum",
      "best cordless vacuum 2026",
      "best cordless vacuum for home",
      "shark vs dyson cordless",
      "best cordless vacuum for hardwood and carpet"
    ],
    authorSlug: "everyday-cleaning-desk",
    deskId: "everyday-cleaning-desk",
    audienceProfile: "practical-floor-keeper",
    primaryAvatar: "Practical Floor Keeper",
    secondaryAvatar: "",
    audienceEvidence: "Practical Floor Keeper / What they search: 'best cordless vacuum under 200', 'shark vs dyson cordless', 'is dyson worth it'. Mental model: 'I want the thing 80% of normal people are happy with at the price most normal people pay.' Checks CR + GHI + Wirecutter + 1 Reddit thread.",
    priority: 1,
    notes: "FORTRESS-adjacent head term per shortlist row 2 — bare head SERP dominated by DR 68+ publishers. Carve via sub-niche spokes ($200, hardwood, lightweight). Hub introduces CR + GHI trust anchors + tradeoff table; depth pages own the volume.",
    keyword: "best cordless vacuum"
  },
  {
    slug: "best-hardwood-floor-cleaner",
    title: "Best Hardwood Floor Cleaners (2026): Manufacturer-Approved Picks",
    type: "spoke",
    pageType: "support-guide",
    contentShape: "troubleshooting-fix",
    intentBucket: "learn",
    clusterId: "cleaning-support",
    buildOrder: 3,
    buildPriorityScore: 78.2,
    buildStatus: "NOT BUILT",
    primaryKeyword: "best hardwood floor cleaner",
    primaryVolume: 9900,
    primaryKd: 9,
    trafficPotential: 9900,
    secondaryKeywords: [
      "best wood floor cleaner",
      "best hardwood floor cleaning solution",
      "non toxic hardwood floor cleaner",
      "bona hardwood floor cleaner alternatives"
    ],
    authorSlug: "safe-surface-desk",
    deskId: "safe-surface-desk",
    audienceProfile: "surface-protector",
    primaryAvatar: "Surface Protector",
    secondaryAvatar: "",
    audienceEvidence: "Surface Protector / What they search: 'best hardwood floor cleaner non toxic', 'bona vs [competitor] hardwood'. Cares about: 'manufacturer-of-the-surface endorsement (Bona co-marketed with hardwood manufacturers matters)', pH, EWG/Made-Safe certification.",
    priority: 3,
    notes: "Chemical Bundle spoke. Bona primary, Method/Seventh Generation alt, avoid vinegar-based + Murphy Oil narrative (long-term wax buildup). Links up to `how-to-clean-hardwood-floors`.",
    keyword: "best hardwood floor cleaner"
  },
  {
    slug: "best-grout-cleaner",
    title: "Best Grout Cleaners (2026): Color-Safe, Sealer-Safe Picks",
    type: "spoke",
    pageType: "support-guide",
    contentShape: "troubleshooting-fix",
    intentBucket: "learn",
    clusterId: "cleaning-support",
    buildOrder: 4,
    buildPriorityScore: 78.2,
    buildStatus: "NOT BUILT",
    primaryKeyword: "best grout cleaner",
    primaryVolume: 8100,
    primaryKd: 10,
    trafficPotential: 8100,
    secondaryKeywords: [
      "best tile grout cleaner",
      "best grout cleaning product",
      "best grout cleaning solution",
      "oxygen bleach grout cleaner"
    ],
    authorSlug: "safe-surface-desk",
    deskId: "safe-surface-desk",
    audienceProfile: "surface-protector",
    primaryAvatar: "Surface Protector",
    secondaryAvatar: "",
    audienceEvidence: "Surface Protector / Dealbreakers: 'Ammonia or bleach on grout — degrades colored grout.' Authority lane: 'EWG Verified, Made Safe' certification preferred.",
    priority: 3,
    notes: "Oxygen-bleach-based picks (Oxi-based). Color-safe caveats explicit. Links up to `how-to-clean-grout` support guide + lateral to `best-steam-mop` for non-porous tile.",
    keyword: "best grout cleaner"
  },
  {
    slug: "best-stainless-steel-cleaner",
    title: "Best Stainless Steel Cleaners (2026): Streak-Free Without the Abrasives",
    type: "spoke",
    pageType: "support-guide",
    contentShape: "troubleshooting-fix",
    intentBucket: "learn",
    clusterId: "cleaning-support",
    buildOrder: 5,
    buildPriorityScore: 78.2,
    buildStatus: "NOT BUILT",
    primaryKeyword: "best stainless steel cleaner",
    primaryVolume: 6600,
    primaryKd: 11,
    trafficPotential: 6600,
    secondaryKeywords: [
      "best stainless steel cleaner and polish",
      "streak free stainless steel cleaner",
      "best cleaner for stainless steel appliances",
      "stainless steel cleaner non toxic"
    ],
    authorSlug: "safe-surface-desk",
    deskId: "safe-surface-desk",
    audienceProfile: "surface-protector",
    primaryAvatar: "Surface Protector",
    secondaryAvatar: "",
    audienceEvidence: "Surface Protector / Dealbreakers: 'Abrasive cleaners on stainless — dulls the finish.' Recurring concerns: 'Long-term residue buildup — wax haze on hardwood, soap scum on grout, hard-water stains on stainless.'",
    priority: 3,
    notes: "Abrasives-out, direction-of-grain-matters. Weiman + Bar Keepers Friend positioning. Appliance manufacturer care endorsements (Whirlpool + GE + Bosch) where available.",
    keyword: "best stainless steel cleaner"
  },
  {
    slug: "best-cordless-stick-vacuum-for-hardwood",
    title: "Best Cordless Stick Vacuums for Hardwood Floors (2026)",
    type: "spoke",
    pageType: "money-guide",
    contentShape: "feature-roundup",
    intentBucket: "buy",
    clusterId: "cleaning-support",
    buildOrder: 6,
    buildPriorityScore: 78.2,
    buildStatus: "NOT BUILT",
    primaryKeyword: "best cordless stick vacuum for hardwood",
    primaryVolume: 900,
    primaryKd: 2,
    trafficPotential: 900,
    secondaryKeywords: [
      "best cordless vacuum for hardwood floors",
      "cordless stick vacuum hardwood",
      "soft roller cordless vacuum",
      "best cordless vacuum for wood floors"
    ],
    authorSlug: "everyday-cleaning-desk",
    deskId: "everyday-cleaning-desk",
    audienceProfile: "practical-floor-keeper",
    primaryAvatar: "Practical Floor Keeper",
    secondaryAvatar: "Surface Protector",
    audienceEvidence: "Practical Floor Keeper / Cares about 'hair-wrap resistance on brushroll' + 'weight (can they maneuver it upstairs)'. Surface Protector / Cross-cluster: 'Shows up for best vacuum that won't scratch hardwood queries.'",
    priority: 3,
    notes: "Soft-roller heads (Dyson Fluffy, Shark PowerDetect with soft-roller mode). Brushroll-damage risk on engineered hardwood gets a single-paragraph caution box in Safe Surface voice.",
    keyword: "best cordless stick vacuum for hardwood"
  },
  {
    slug: "best-lightweight-cordless-vacuum",
    title: "Best Lightweight Cordless Vacuums (2026): For Stairs, Apartments, and Upper Floors",
    type: "spoke",
    pageType: "money-guide",
    contentShape: "feature-roundup",
    intentBucket: "buy",
    clusterId: "cleaning-support",
    buildOrder: 7,
    buildPriorityScore: 78.2,
    buildStatus: "NOT BUILT",
    primaryKeyword: "best lightweight cordless vacuum",
    primaryVolume: 800,
    primaryKd: 2,
    trafficPotential: 800,
    secondaryKeywords: [
      "lightweight cordless vacuum",
      "best light stick vacuum",
      "lightweight vacuum for stairs",
      "light cordless vacuum for elderly"
    ],
    authorSlug: "everyday-cleaning-desk",
    deskId: "everyday-cleaning-desk",
    audienceProfile: "practical-floor-keeper",
    primaryAvatar: "Practical Floor Keeper",
    secondaryAvatar: "",
    audienceEvidence: "Practical Floor Keeper / Recurring concerns: 'Is the lightweight version actually light enough? (stairs + ceiling fans test)' + 'Can this be my ONLY vacuum, or do I need a backup?'",
    priority: 3,
    notes: "Real lbs-with-battery numbers, not marketing 'sub-5-lb' claims that strip the battery. Stairs + ceiling-fan reach are the use-cases readers test mentally.",
    keyword: "best lightweight cordless vacuum"
  },
  {
    slug: "bissell-big-green-vs-rug-doctor",
    title: "Bissell Big Green vs Rug Doctor: The Actual Buy-or-Rent Decision",
    type: "spoke",
    pageType: "comparison",
    contentShape: "brand-vs-brand",
    intentBucket: "decide",
    clusterId: "cleaning-support",
    buildOrder: 8,
    buildPriorityScore: 75.8,
    buildStatus: "NOT BUILT",
    primaryKeyword: "bissell big green vs rug doctor",
    primaryVolume: 900,
    primaryKd: 5,
    trafficPotential: 900,
    secondaryKeywords: [
      "rug doctor vs bissell big green",
      "big green vs rug doctor pro",
      "bissell vs rug doctor",
      "which is better bissell or rug doctor"
    ],
    authorSlug: "safe-surface-desk",
    deskId: "safe-surface-desk",
    audienceProfile: "surface-protector",
    primaryAvatar: "Event-Driven Restorer",
    secondaryAvatar: "",
    audienceEvidence: "Event-Driven Restorer / What they search: 'bissell big green vs rug doctor', 'carpet cleaner worth buying vs renting'. Cares about: 'tank capacity (Big Green 1.75gal vs Rug Doctor 3.9gal)', 'dry time (Big Green dries in 2 hours vs Rug Doctor wet for hours or over a day — THE most-cited differentiator).'",
    priority: 2,
    notes: "THE comparison in the cluster per VacuumLand enthusiast threads. Dry-time, tank size, stairs-and-upholstery reach, proprietary-solution cost — named per avatar. IICRC S100 annual-cadence framing.",
    keyword: "bissell big green vs rug doctor"
  },
  {
    slug: "best-carpet-cleaner-machine",
    title: "Best Carpet Cleaner Machines (2026): Rent-or-Buy Math + Head-to-Head Picks",
    type: "hub",
    pageType: "money-guide",
    contentShape: "flagship-roundup",
    intentBucket: "buy",
    clusterId: "cleaning-support",
    buildOrder: 10,
    buildPriorityScore: 77,
    buildStatus: "NOT BUILT",
    primaryKeyword: "best carpet cleaner machine",
    primaryVolume: 4800,
    primaryKd: 6,
    trafficPotential: 4800,
    secondaryKeywords: [
      "best carpet cleaner",
      "best carpet shampooer",
      "best carpet cleaning machine",
      "best home carpet cleaner"
    ],
    authorSlug: "safe-surface-desk",
    deskId: "safe-surface-desk",
    audienceProfile: "surface-protector",
    primaryAvatar: "Event-Driven Restorer",
    secondaryAvatar: "",
    audienceEvidence: "Event-Driven Restorer / What they search: 'best carpet cleaner machine', 'bissell big green vs rug doctor', 'carpet cleaner worth buying vs renting'. Core job: 'Something happened — we moved in / flood / wine / pre-listing. I need to deep-clean hard. Rent-vs-buy math says buy this time.'",
    priority: 1,
    notes: "Tight flagship per shortlist row 6 (1 winner keyword, $250 AOV Big-Green class). Lead with rent-vs-buy framework; name dry-time as THE differentiator per avatar dealbreaker. IICRC S100 + VacuumLand exclusive trust. Avoid pet-mess framing — that's BPP.",
    keyword: "best carpet cleaner machine"
  },
  {
    slug: "robot-vacuum-comparison-tool",
    title: "Robot Vacuum Comparison Tool: 2026 Head-to-Head Specs + Maintenance Reality",
    type: "guide",
    pageType: "linkable-asset",
    contentShape: "data-study",
    intentBucket: "learn",
    clusterId: "cleaning-support",
    buildOrder: 12,
    buildPriorityScore: 63.7,
    buildStatus: "NOT BUILT",
    primaryKeyword: "robot vacuum comparison",
    primaryVolume: 600,
    primaryKd: 5,
    trafficPotential: 600,
    secondaryKeywords: [
      "compare robot vacuums",
      "robot vacuum comparison chart",
      "robot vacuum specs comparison",
      "best robot vacuum comparison"
    ],
    authorSlug: "labor-math-desk",
    deskId: "labor-math-desk",
    audienceProfile: "time-saving-cleanup-buyer",
    primaryAvatar: "Labor Trader",
    secondaryAvatar: "",
    audienceEvidence: "Labor Trader / Mental model: 'I'm buying hours of my life back.' Methodology-backed reviews carry more weight than CR/GHI. Shortlist § Phase 5 hint flags this category for a comparison asset.",
    priority: 3,
    notes: "Pattern 1 (lookup). Side-by-side spec + maintenance-reality table across 15-20 robot vacuums. Vacuum Wars hair-tangle + Modern Castle debris scores where published. Outreach-ready for vacuum enthusiasts + r/RobotVacuums + HomeImprovement subs.",
    keyword: "robot vacuum comparison"
  },
  {
    slug: "carpet-cleaner-rent-vs-buy-calculator",
    title: "Rent or Buy a Carpet Cleaner? The Actual Break-Even Math (2026)",
    type: "guide",
    pageType: "linkable-asset",
    contentShape: "data-study",
    intentBucket: "learn",
    clusterId: "cleaning-support",
    buildOrder: 15,
    buildPriorityScore: 63.7,
    buildStatus: "NOT BUILT",
    primaryKeyword: "carpet cleaner rent vs buy",
    primaryVolume: 400,
    primaryKd: 4,
    trafficPotential: 400,
    secondaryKeywords: [
      "is it worth buying a carpet cleaner",
      "rent or buy carpet cleaner",
      "cost to rent vs buy rug doctor",
      "carpet cleaner break even"
    ],
    authorSlug: "safe-surface-desk",
    deskId: "safe-surface-desk",
    audienceProfile: "surface-protector",
    primaryAvatar: "Event-Driven Restorer",
    secondaryAvatar: "",
    audienceEvidence: "Event-Driven Restorer / Mental model: 'I've rented a Rug Doctor 3 times in 2 years. At what point is buying one cheaper?' Break-even at rental 4-6 per avatar analysis.",
    priority: 3,
    notes: "Pattern 6 (annual state-of). Embed calculator: rentals/yr × $40 + solution × $19 vs machine buy + owned-solution. IICRC S100 annual cadence framing. Outreach-ready for home-improvement bloggers + r/HomeImprovement.",
    keyword: "carpet cleaner rent vs buy"
  },
  {
    slug: "cleaning-tool-by-surface-decision-tree",
    title: "Cleaning-Tool-by-Surface Decision Tree: What's Safe on Each Floor (2026)",
    type: "guide",
    pageType: "linkable-asset",
    contentShape: "data-study",
    intentBucket: "learn",
    clusterId: "cleaning-support",
    buildOrder: 18,
    buildPriorityScore: 63.7,
    buildStatus: "NOT BUILT",
    primaryKeyword: "what floor cleaner is safe for hardwood",
    primaryVolume: 300,
    primaryKd: 8,
    trafficPotential: 300,
    secondaryKeywords: [
      "what cleaner is safe for laminate",
      "safe cleaner for engineered hardwood",
      "cleaning tool by floor type",
      "which mop is safe for hardwood"
    ],
    authorSlug: "safe-surface-desk",
    deskId: "safe-surface-desk",
    audienceProfile: "surface-protector",
    primaryAvatar: "Surface Protector",
    secondaryAvatar: "",
    audienceEvidence: "Surface Protector / Voice: 'Decision tree / what-to-check-first → safe picks tier → risky picks with exact caveats. Explicit if your floor is X, use Y and NOT Z mapping.' Direct voice-structure match.",
    priority: 3,
    notes: "Pattern 7 (diagram). Visual decision tree: floor type → mop/vacuum/chemistry → safe/risky. Bona + Shaw + Armstrong + Mannington care-guide citations. Shareable PNG + embeddable HTML. Outreach-ready for flooring-manufacturer forums + r/HomeImprovement + Houzz.",
    keyword: "what floor cleaner is safe for hardwood"
  },
  {
    slug: "how-to-clean-grout",
    title: "How to Clean Grout (Without Bleaching the Color Out)",
    type: "guide",
    pageType: "support-guide",
    contentShape: "maintenance-cleaning",
    intentBucket: "maintain",
    clusterId: "cleaning-support",
    buildOrder: 21,
    buildPriorityScore: 85.4,
    buildStatus: "NOT BUILT",
    primaryKeyword: "how to clean grout",
    primaryVolume: 22000,
    primaryKd: 14,
    trafficPotential: 22000,
    secondaryKeywords: [
      "how to clean tile grout",
      "best way to clean grout",
      "cleaning grout",
      "how to whiten grout"
    ],
    authorSlug: "safe-surface-desk",
    deskId: "safe-surface-desk",
    audienceProfile: "surface-protector",
    primaryAvatar: "Surface Protector",
    secondaryAvatar: "",
    audienceEvidence: "Surface Protector / Dealbreakers: 'Ammonia or bleach on grout — degrades colored grout, leaves dirt-attracting film (CR documents this).' Recurring concerns: 'Re-seal / re-coat cycles — grout needs resealing.'",
    priority: 3,
    notes: "Lead with 'what you'll ruin first' — colored grout + sealer degradation. pH-neutral routes. Links to `best-grout-cleaner` product page.",
    keyword: "how to clean grout"
  },
  {
    slug: "best-mop",
    title: "Best Mops for Everyday Home Cleaning (2026)",
    type: "hub",
    pageType: "money-guide",
    contentShape: "flagship-roundup",
    intentBucket: "buy",
    clusterId: "cleaning-support",
    buildOrder: 22,
    buildPriorityScore: 86.6,
    buildStatus: "NOT BUILT",
    primaryKeyword: "best mop",
    primaryVolume: 19000,
    primaryKd: 1,
    trafficPotential: 19000,
    secondaryKeywords: [
      "best mop 2026",
      "best mop for home",
      "best household mop",
      "o-cedar vs bona"
    ],
    authorSlug: "everyday-cleaning-desk",
    deskId: "everyday-cleaning-desk",
    audienceProfile: "practical-floor-keeper",
    primaryAvatar: "Practical Floor Keeper",
    secondaryAvatar: "Generic Mop Buyer",
    audienceEvidence: "Practical Floor Keeper / Cross-cluster expression: 'SECONDARY. Wants a simple non-steam mop (O-Cedar-class) alongside the cordless. $20-60.' Backlog Generic Mop Buyer / What they search: 'best mop for hardwood floors', 'best spin mop', 'o-cedar easywring reviews' carries interim voice.",
    priority: 1,
    notes: "Deepest winner bench per shortlist row 3 (63 winners, 0.6 avg KD). Practical Floor Keeper voice primary until Generic Mop Buyer deepens per avatar-research.md § Backlog-cluster deepening policy. Links to steam-mop + hardwood-floor-cleaner support.",
    keyword: "best mop"
  },
  {
    slug: "best-steam-mop",
    title: "Best Steam Mops (2026): Floor-Type-First Picks (Read the Warranty First)",
    type: "spoke",
    pageType: "money-guide",
    contentShape: "feature-roundup",
    intentBucket: "buy",
    clusterId: "cleaning-support",
    buildOrder: 23,
    buildPriorityScore: 86.6,
    buildStatus: "NOT BUILT",
    primaryKeyword: "best steam mop",
    primaryVolume: 6600,
    primaryKd: 3,
    trafficPotential: 6600,
    secondaryKeywords: [
      "best steam cleaner",
      "best steam mop 2026",
      "best steam mop for tile",
      "bissell steam mop vs shark"
    ],
    authorSlug: "safe-surface-desk",
    deskId: "safe-surface-desk",
    audienceProfile: "surface-protector",
    primaryAvatar: "Surface Protector",
    secondaryAvatar: "",
    audienceEvidence: "Surface Protector / Dealbreakers: 'Any page claiming a steam mop is safe on engineered hardwood or laminate without MASSIVE caveats. Houzz-documented case: planks beginning to bubble at the seams within months of weekly steam mop use.' Cross-cluster: 'PRIMARY. Decision-tree page.'",
    priority: 2,
    notes: "Shortlist row 5. Caution-block leads — NOT product list. Decision tree: what floor type → safe / caveat / avoid. Bona + Shaw + Armstrong care guides cited. Fiber-tile-vinyl picks only; laminate + engineered hardwood get explicit 'check your warranty' callouts.",
    keyword: "best steam mop"
  },
  {
    slug: "how-to-clean-hardwood-floors",
    title: "How to Clean Hardwood Floors (Without Voiding the Warranty)",
    type: "guide",
    pageType: "support-guide",
    contentShape: "maintenance-cleaning",
    intentBucket: "maintain",
    clusterId: "cleaning-support",
    buildOrder: 24,
    buildPriorityScore: 81.8,
    buildStatus: "LIVE",
    primaryKeyword: "how to clean hardwood floors",
    primaryVolume: 18000,
    primaryKd: 12,
    trafficPotential: 18000,
    secondaryKeywords: [
      "how to clean wood floors",
      "cleaning hardwood floors",
      "best way to clean hardwood floors",
      "how to mop hardwood floors"
    ],
    authorSlug: "safe-surface-desk",
    deskId: "safe-surface-desk",
    audienceProfile: "surface-protector",
    primaryAvatar: "Surface Protector",
    secondaryAvatar: "",
    audienceEvidence: "Surface Protector / Core job: 'Tell me what will NOT damage my engineered hardwood / laminate... then tell me the safest thing that actually works.' Dealbreakers: 'Vinegar as default hardwood recommendation — acid degrades polyurethane over time.'",
    priority: 3,
    notes: "Decision tree: engineered vs solid vs laminate. What to avoid (vinegar, steam mop, wet mop). What Bona/Shaw/Armstrong endorse. Links down to `best-hardwood-floor-cleaner` product page + up to `best-mop` hub.",
    keyword: "how to clean hardwood floors"
  },
  {
    slug: "best-robot-vacuum-under-500",
    title: "Best Robot Vacuums Under $500 (2026): Where the Time-Math Still Works",
    type: "spoke",
    pageType: "money-guide",
    contentShape: "budget-roundup",
    intentBucket: "buy",
    clusterId: "cleaning-support",
    buildOrder: 25,
    buildPriorityScore: 85.4,
    buildStatus: "NOT BUILT",
    primaryKeyword: "best robot vacuum under 500",
    primaryVolume: 2900,
    primaryKd: 3,
    trafficPotential: 2900,
    secondaryKeywords: [
      "best budget robot vacuum",
      "best cheap robot vacuum",
      "robot vacuum under $500",
      "affordable robot vacuum with mop"
    ],
    authorSlug: "labor-math-desk",
    deskId: "labor-math-desk",
    audienceProfile: "time-saving-cleanup-buyer",
    primaryAvatar: "Labor Trader",
    secondaryAvatar: "",
    audienceEvidence: "Labor Trader / Budget and decision factors: '$300 entry, $500-800 mainstream target'. Dealbreakers at this tier: 'Dock becomes a second chore' + obstacle-avoidance that fails on cords/socks.",
    priority: 2,
    notes: "Under-$500 band is where the Labor Trader's time-math breaks even soonest. Eufy X10 Pro Omni-class + value-tier Roborock Q-series. Explicit 'what you give up vs $800+' tradeoff block.",
    keyword: "best robot vacuum under 500"
  },
  {
    slug: "best-cordless-vacuum-under-200",
    title: "Best Cordless Vacuums Under $200 (2026): What's Worth Keeping at This Price",
    type: "spoke",
    pageType: "money-guide",
    contentShape: "budget-roundup",
    intentBucket: "buy",
    clusterId: "cleaning-support",
    buildOrder: 26,
    buildPriorityScore: 85.4,
    buildStatus: "NOT BUILT",
    primaryKeyword: "best cordless vacuum under 200",
    primaryVolume: 2200,
    primaryKd: 1,
    trafficPotential: 2200,
    secondaryKeywords: [
      "best cheap cordless vacuum",
      "best budget cordless vacuum",
      "affordable cordless stick vacuum",
      "cordless vacuum under 200"
    ],
    authorSlug: "everyday-cleaning-desk",
    deskId: "everyday-cleaning-desk",
    audienceProfile: "practical-floor-keeper",
    primaryAvatar: "Practical Floor Keeper",
    secondaryAvatar: "",
    audienceEvidence: "Practical Floor Keeper / Budget: '$80 floor, $150-250 sweet spot.' What they search: 'best cordless vacuum under 200'. Dealbreakers: 'Budget models with no sealed-filtration (releases dust back into the room — Vacuum Wars calls this out regularly).'",
    priority: 2,
    notes: "Sealed-filtration test is the non-negotiable quality gate at this price. Pull CR + GHI winners + 1 Reddit-validated long-runner. Real 3-year filter replacement cost tabulated.",
    keyword: "best cordless vacuum under 200"
  },
  {
    slug: "can-you-use-a-steam-mop-on-engineered-hardwood",
    title: "Can You Use a Steam Mop on Engineered Hardwood? (The Honest Answer)",
    type: "guide",
    pageType: "support-guide",
    contentShape: "compatibility-safety",
    intentBucket: "decide",
    clusterId: "cleaning-support",
    buildOrder: 27,
    buildPriorityScore: 80.6,
    buildStatus: "NOT BUILT",
    primaryKeyword: "can you use a steam mop on engineered hardwood",
    primaryVolume: 2400,
    primaryKd: 7,
    trafficPotential: 2400,
    secondaryKeywords: [
      "steam mop on engineered hardwood",
      "steam mop engineered wood floor",
      "is steam mop safe for engineered hardwood",
      "steam mop laminate damage"
    ],
    authorSlug: "safe-surface-desk",
    deskId: "safe-surface-desk",
    audienceProfile: "surface-protector",
    primaryAvatar: "Surface Protector",
    secondaryAvatar: "",
    audienceEvidence: "Surface Protector / What they search: 'can you use a steam mop on engineered hardwood', 'steam mop laminate damage'. Dealbreakers: 'Houzz-documented case: planks beginning to bubble at the seams within months of weekly steam mop use.'",
    priority: 3,
    notes: "Pure decision-support. Answer up top (mostly no), then warranty-language evidence from 3 major manufacturers, then 'if you already own one' mitigation. Internal-link feeder to `best-steam-mop` + `how-to-clean-hardwood-floors`.",
    keyword: "can you use a steam mop on engineered hardwood"
  },
  {
    slug: "best-robot-vacuum-with-mop",
    title: "Best Robot Vacuum + Mop Combos (2026): When Two Tools Should Be One",
    type: "spoke",
    pageType: "money-guide",
    contentShape: "feature-roundup",
    intentBucket: "buy",
    clusterId: "cleaning-support",
    buildOrder: 28,
    buildPriorityScore: 81.8,
    buildStatus: "NOT BUILT",
    primaryKeyword: "best robot vacuum with mop",
    primaryVolume: 2400,
    primaryKd: 3,
    trafficPotential: 2400,
    secondaryKeywords: [
      "best robot mop",
      "best robot vacuum and mop combo",
      "robot vacuum mop combo",
      "2-in-1 robot vacuum mop"
    ],
    authorSlug: "labor-math-desk",
    deskId: "labor-math-desk",
    audienceProfile: "time-saving-cleanup-buyer",
    primaryAvatar: "Labor Trader",
    secondaryAvatar: "",
    audienceEvidence: "Labor Trader / What they search: 'roborock qrevo vs saros'. Dealbreakers: 'Mop pads that sit wet and grow smell. Dirty-water tanks that require scrubbing.' Mop-dry-cycle is a named maintenance-reality concern.",
    priority: 2,
    notes: "Dry-cycle + pad-smell concerns lead the page. Qrevo + Saros + X10 Pro Omni tier. Avoid over-promising on engineered-hardwood — point to Safe Surface's steam-mop decision tree for readers with sunk-cost flooring.",
    keyword: "best robot vacuum with mop"
  },
  {
    slug: "best-robot-vacuum-for-hardwood",
    title: "Best Robot Vacuums for Hardwood Floors (2026)",
    type: "spoke",
    pageType: "money-guide",
    contentShape: "feature-roundup",
    intentBucket: "buy",
    clusterId: "cleaning-support",
    buildOrder: 29,
    buildPriorityScore: 81.8,
    buildStatus: "NOT BUILT",
    primaryKeyword: "best robot vacuum for hardwood",
    primaryVolume: 1800,
    primaryKd: 2,
    trafficPotential: 1800,
    secondaryKeywords: [
      "best robot vacuum for hardwood floors",
      "robot vacuum hardwood",
      "robot vacuum safe for hardwood",
      "robot vacuum for wood floors"
    ],
    authorSlug: "labor-math-desk",
    deskId: "labor-math-desk",
    audienceProfile: "time-saving-cleanup-buyer",
    primaryAvatar: "Labor Trader",
    secondaryAvatar: "Surface Protector",
    audienceEvidence: "Labor Trader / What they search: 'best robot vacuum for hardwood'. Safe Surface secondary: avatar-research.md notes Surface Protector expresses rarely in Robot Vacuum cluster — but 'robot vacuum mop combo hardwood safe' is a real decision where their voice lifts caution framing.",
    priority: 2,
    notes: "Dual-avatar page — Labor Math leads, Safe Surface contributes the 'brushroll aggressiveness' caution block per engineered-hardwood warranty concerns. Cites Bona care guide.",
    keyword: "best robot vacuum for hardwood"
  },
  {
    slug: "roborock-vs-eufy",
    title: "Roborock vs Eufy: Which Robot Vacuum Brand Actually Fits Your House",
    type: "spoke",
    pageType: "comparison",
    contentShape: "brand-vs-brand",
    intentBucket: "decide",
    clusterId: "cleaning-support",
    buildOrder: 30,
    buildPriorityScore: 79.4,
    buildStatus: "NOT BUILT",
    primaryKeyword: "roborock vs eufy",
    primaryVolume: 1200,
    primaryKd: 4,
    trafficPotential: 1200,
    secondaryKeywords: [
      "roborock or eufy",
      "eufy vs roborock robot vacuum",
      "roborock vs eufy vs shark",
      "is roborock better than eufy"
    ],
    authorSlug: "labor-math-desk",
    deskId: "labor-math-desk",
    audienceProfile: "time-saving-cleanup-buyer",
    primaryAvatar: "Labor Trader",
    secondaryAvatar: "",
    audienceEvidence: "Labor Trader / What they search: 'roborock vs eufy vs shark'. Mental model: 'My friend said theirs was useless — I need counter-evidence, not marketing.' Head-to-head brand comparison is a named decision pattern.",
    priority: 2,
    notes: "Head-to-head brand comparison. Use the same Vacuum Wars methodology table across both brands. App-privacy posture + post-warranty update history is a genuine Labor-Trader tiebreaker.",
    keyword: "roborock vs eufy"
  },
  {
    slug: "best-robot-vacuum-self-empty",
    title: "Best Self-Emptying Robot Vacuums (2026): When the Dock Earns Its Keep",
    type: "spoke",
    pageType: "money-guide",
    contentShape: "feature-roundup",
    intentBucket: "buy",
    clusterId: "cleaning-support",
    buildOrder: 31,
    buildPriorityScore: 81.8,
    buildStatus: "NOT BUILT",
    primaryKeyword: "best robot vacuum self empty",
    primaryVolume: 1500,
    primaryKd: 3,
    trafficPotential: 1500,
    secondaryKeywords: [
      "best self emptying robot vacuum",
      "robot vacuum auto empty",
      "robot vacuum self emptying base",
      "robot vacuum with self empty dock"
    ],
    authorSlug: "labor-math-desk",
    deskId: "labor-math-desk",
    audienceProfile: "time-saving-cleanup-buyer",
    primaryAvatar: "Labor Trader",
    secondaryAvatar: "",
    audienceEvidence: "Labor Trader / Recurring concerns: 'Long-tail dock maintenance — how often am I actually cleaning this thing?' Dealbreakers: 'Bags that jam on hair', 'Dirty-water tanks that require scrubbing.'",
    priority: 2,
    notes: "Dock-maintenance-reality is the load-bearing section. Name bag replacement cost over 12 months. Cites Vacuum Wars dock-teardown content.",
    keyword: "best robot vacuum self empty"
  },
  {
    slug: "best-handheld-vacuum",
    title: "Best Handheld Vacuums (2026): For Stairs, Cars, and Couch Crumbs",
    type: "spoke",
    pageType: "money-guide",
    contentShape: "flagship-roundup",
    intentBucket: "buy",
    clusterId: "cleaning-support",
    buildOrder: 32,
    buildPriorityScore: 79.4,
    buildStatus: "NOT BUILT",
    primaryKeyword: "best handheld vacuum",
    primaryVolume: 4300,
    primaryKd: 1,
    trafficPotential: 4300,
    secondaryKeywords: [
      "best handheld vacuum for car",
      "best cordless handheld vacuum",
      "best small vacuum",
      "handheld vacuum for stairs"
    ],
    authorSlug: "everyday-cleaning-desk",
    deskId: "everyday-cleaning-desk",
    audienceProfile: "practical-floor-keeper",
    primaryAvatar: "Practical Floor Keeper",
    secondaryAvatar: "",
    audienceEvidence: "Practical Floor Keeper / Cross-cluster expression: 'SECONDARY. Shops this as a supplement to the cordless 6 months later. $80-150.' Shortlist row 4: 9 winners, support-tier money page.",
    priority: 3,
    notes: "Shortlist row 4. Support-tier standalone; links up to the cordless hub as 'supplement to your main vacuum.' CR + GHI trust anchors; no methodology deep-dive.",
    keyword: "best handheld vacuum"
  }
];

export const keywordMapStats = {
  totalPages: pageTargets.length,
  hubPages: pageTargets.filter((page) => page.type === "hub").length,
  spokePages: pageTargets.filter((page) => page.type === "spoke").length,
  guidePages: pageTargets.filter((page) => page.type === "guide").length,
  trustPages: pageTargets.filter((page) => page.type === "trust").length,
  totalPrimaryVolume: pageTargets.reduce((sum, page) => sum + page.primaryVolume, 0),
  livePages: pageTargets.filter((page) => page.buildStatus === "LIVE").length,
  priority1Pages: pageTargets.filter((page) => page.priority === 1).length,
  byDesk: Object.fromEntries(
    [...new Set(pageTargets.map((page) => page.authorSlug).filter(Boolean))]
      .sort()
      .map((desk) => [desk, pageTargets.filter((page) => page.authorSlug === desk).length]),
  ),
};

export const keywordMapBySlug = Object.fromEntries(
  pageTargets.map((target) => [target.slug, target]),
);

export function getPageTargetBySlug(slug: string): PageTarget | undefined {
  return pageTargets.find((target) => target.slug === slug);
}

export function getPageTargetsByDesk(authorSlug: string): PageTarget[] {
  return pageTargets.filter((target) => target.authorSlug === authorSlug);
}

export function getPageTargetsByAvatar(avatar: string): PageTarget[] {
  return pageTargets.filter(
    (target) => target.primaryAvatar === avatar || target.secondaryAvatar === avatar,
  );
}

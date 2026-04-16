/**
 * Keyword-to-avatar map for TheCleaningReport.
 *
 * Phase: map-keywords-to-avatars
 * Scope: approved early-stage page targets from the validated floor-care launch spine
 *
 * Primary evidence:
 * - data/thecleaningreport-launch-validation-2026-04-16.md
 * - sites/thecleaningreport/data/avatar-research.md
 * - sites/thecleaningreport/src/data/authors.ts
 * - data/ahrefs-exports/best-robot-vacuum.csv
 * - data/ahrefs-exports/best-robot-vacuum-suggestions.csv
 * - data/ahrefs-exports/best-cordless-vacuum.csv
 * - data/ahrefs-exports/best-cordless-vacuum-suggestions.csv
 * - data/ahrefs-exports/best-vacuum-for-pet-hair.csv
 * - data/ahrefs-exports/best-vacuum-for-pet-hair-suggestions.csv
 * - data/ahrefs-exports/best-steam-mop.csv
 * - data/ahrefs-exports/best-steam-mop-suggestions.csv
 *
 * Notes:
 * - This map is intentionally authority-aware. It favors the validated launch clusters and
 *   distinct buyer intents instead of trying to absorb every suffix from the export bundle.
 * - Trust-check and branded-validation queries like "reddit", "consumer reports", and review-year
 *   variations are treated as research or secondary-keyword support, not standalone page targets.
 */

export type InternalPageType = "hub" | "spoke" | "review" | "guide" | "trust";

export type RoadmapPageType =
  | "money-guide"
  | "support-guide"
  | "comparison"
  | "directory-hub"
  | "directory-location"
  | "service-intent-support";

export interface PageTarget {
  slug: string;
  title: string;
  type: InternalPageType;
  pageType: RoadmapPageType;
  primaryKeyword: string;
  primaryVolume: number;
  primaryKd: number;
  primaryTrafficPotential: number;
  secondaryKeywords: string[];
  authorSlug: string; // Legacy-compatible field name for the owning editorial desk.
  audienceProfile: string;
  primaryAvatar: string;
  priority: number;
  notes: string;
}

export const pageTargets: PageTarget[] = [
  {
    slug: "best-robot-vacuum",
    title: "Best Robot Vacuums (2026) - Real Picks for Busy Floors",
    type: "hub",
    pageType: "money-guide",
    primaryKeyword: "best robot vacuum",
    primaryVolume: 60000,
    primaryKd: 3,
    primaryTrafficPotential: 35000,
    secondaryKeywords: [
      "robot vacuum",
      "best robot vacuum 2025",
      "best robotic vacuum cleaner",
      "best robot vacuum reddit",
    ],
    authorSlug: "floor-care-pet-mess-desk",
    audienceProfile: "Automation-Minded Floor-Care Upgrader",
    primaryAvatar: "Automation-Minded Floor-Care Upgrader",
    priority: 1,
    notes:
      "Core launch hub for the automation lane. Keep it centered on labor removed, dock upkeep, mapping reliability, and mixed-floor usefulness instead of turning it into a generic smart-home page.",
  },
  {
    slug: "best-cordless-vacuum",
    title: "Best Cordless Vacuums (2026) - Easy Picks for Everyday Cleaning",
    type: "hub",
    pageType: "money-guide",
    primaryKeyword: "best cordless vacuum",
    primaryVolume: 51000,
    primaryKd: 24,
    primaryTrafficPotential: 68000,
    secondaryKeywords: [
      "best cordless stick vacuum",
      "best overall cordless vacuum",
      "best cordless vacuum 2025",
      "cordless vacuum reviews",
    ],
    authorSlug: "everyday-cleaning-desk",
    audienceProfile: "Practical Cordless Buyer",
    primaryAvatar: "Practical Cordless Buyer",
    priority: 1,
    notes:
      "Mainstream high-volume hub for the whole everyday floor-care lane. It should absorb stick-vacuum syntax variants while routing budget, lightweight, and removable-battery readers into narrower spokes.",
  },
  {
    slug: "best-vacuum-for-pet-hair",
    title: "Best Vacuums for Pet Hair (2026) - Picks That Hold Up Under Real Fur",
    type: "hub",
    pageType: "money-guide",
    primaryKeyword: "best vacuum for pet hair",
    primaryVolume: 32000,
    primaryKd: 0,
    primaryTrafficPotential: 38000,
    secondaryKeywords: [
      "best vacuum cleaner for pet hair",
      "best pet hair vacuum",
      "what is the best vacuum for pet hair",
      "best vacuum for pet hair reddit",
    ],
    authorSlug: "floor-care-pet-mess-desk",
    audienceProfile: "Pet-Mess Floor Manager",
    primaryAvatar: "Pet-Mess Floor Manager",
    priority: 1,
    notes:
      "Pet-hair hub for the higher-friction buyer lane. Keep it problem-first: tangles, carpet pickup, upholstery cleanup, litter, and maintenance burden should lead the ranking.",
  },
  {
    slug: "best-steam-mop",
    title: "Best Steam Mops (2026) - Surface-Safe Picks for Real Deep Cleaning",
    type: "hub",
    pageType: "money-guide",
    primaryKeyword: "best steam mop",
    primaryVolume: 9200,
    primaryKd: 2,
    primaryTrafficPotential: 13000,
    secondaryKeywords: [
      "best steam mop reviews",
      "best steam cleaner mop",
      "best budget steam mop",
      "best steam mop reddit",
    ],
    authorSlug: "deep-clean-maintenance-desk",
    audienceProfile: "Surface-Specific Deep Cleaner",
    primaryAvatar: "Surface-Specific Deep Cleaner",
    priority: 1,
    notes:
      "Surface-cleaning expansion hub. It should hold broad commercial intent while pushing floor-type readers toward hardwood, laminate, tile, vinyl, grout, and budget-specific pages.",
  },
  {
    slug: "best-robot-vacuum-and-mop",
    title: "Best Robot Vacuum and Mop Combos (2026)",
    type: "spoke",
    pageType: "money-guide",
    primaryKeyword: "best robot vacuum and mop",
    primaryVolume: 19000,
    primaryKd: 9,
    primaryTrafficPotential: 28000,
    secondaryKeywords: [
      "robot vacuum and mop",
      "best robot vacuum and mop combo",
      "best 2 in 1 robot vacuum and mop",
      "the best robot vacuum and mop",
    ],
    authorSlug: "floor-care-pet-mess-desk",
    audienceProfile: "Automation-Minded Floor-Care Upgrader",
    primaryAvatar: "Automation-Minded Floor-Care Upgrader",
    priority: 2,
    notes:
      "Distinct combo-tool page for buyers who want one docked system, not a pure robot-vacuum ranking. Keep it separate from the main robot hub because the mop-combo compromise is part of the intent.",
  },
  {
    slug: "best-robot-vacuum-for-pet-hair",
    title: "Best Robot Vacuums for Pet Hair (2026)",
    type: "spoke",
    pageType: "money-guide",
    primaryKeyword: "best robot vacuum for pet hair",
    primaryVolume: 17000,
    primaryKd: 10,
    primaryTrafficPotential: 15000,
    secondaryKeywords: [
      "best robot vacuum for dog hair",
      "best robot vacuum pet hair",
      "best robot vacuum cleaner for pet hair",
      "best automatic vacuum for pet hair",
    ],
    authorSlug: "floor-care-pet-mess-desk",
    audienceProfile: "Pet-Mess Floor Manager",
    primaryAvatar: "Pet-Mess Floor Manager",
    priority: 2,
    notes:
      "Tool-type spoke for pet owners who already know they want automation. Keep it separate from the broader pet-hair hub because the dock, tangle, and navigation questions are materially different.",
  },
  {
    slug: "best-self-emptying-robot-vacuum",
    title: "Best Self-Emptying Robot Vacuums (2026)",
    type: "spoke",
    pageType: "money-guide",
    primaryKeyword: "best self emptying robot vacuum",
    primaryVolume: 900,
    primaryKd: 7,
    primaryTrafficPotential: 45000,
    secondaryKeywords: [
      "self emptying robot vacuum",
      "best robot vacuum with self empty",
      "best robot vacuum self empty",
      "best robot vacuum with self emptying dock",
    ],
    authorSlug: "floor-care-pet-mess-desk",
    audienceProfile: "Automation-Minded Floor-Care Upgrader",
    primaryAvatar: "Automation-Minded Floor-Care Upgrader",
    priority: 2,
    notes:
      "Narrow automation spoke for buyers paying specifically to reduce manual emptying. Keep the focus on dock maintenance, bag cost, and whether self-empty actually changes the cleaning routine.",
  },
  {
    slug: "best-budget-cordless-vacuum",
    title: "Best Budget Cordless Vacuums (2026)",
    type: "spoke",
    pageType: "money-guide",
    primaryKeyword: "best budget cordless vacuum",
    primaryVolume: 900,
    primaryKd: 12,
    primaryTrafficPotential: 50,
    secondaryKeywords: [
      "best affordable cordless vacuum",
      "best cordless vacuum on a budget",
      "best cordless vacuum budget",
      "best cheap cordless vacuum",
    ],
    authorSlug: "everyday-cleaning-desk",
    audienceProfile: "Practical Cordless Buyer",
    primaryAvatar: "Practical Cordless Buyer",
    priority: 2,
    notes:
      "Value-focused spoke for mainstream readers trying to avoid overspending. It should absorb under-$300 and affordable variants instead of fragmenting the budget lane too early.",
  },
  {
    slug: "best-cordless-vacuum-under-200",
    title: "Best Cordless Vacuums Under $200 (2026)",
    type: "spoke",
    pageType: "money-guide",
    primaryKeyword: "best cordless vacuum under $200",
    primaryVolume: 250,
    primaryKd: 0,
    primaryTrafficPotential: 1000,
    secondaryKeywords: [
      "best cordless vacuum under $150",
      "best cordless vacuum under $100",
      "best cordless vacuum under $300",
      "best cordless vacuum under $250",
    ],
    authorSlug: "everyday-cleaning-desk",
    audienceProfile: "Practical Cordless Buyer",
    primaryAvatar: "Practical Cordless Buyer",
    priority: 2,
    notes:
      "Hard-budget spoke for buyers who are shopping with a firm ceiling, not just a vague value preference. Keep it separate from the broader budget page because the tradeoffs are tighter and more explicit.",
  },
  {
    slug: "best-lightweight-cordless-vacuum",
    title: "Best Lightweight Cordless Vacuums (2026)",
    type: "spoke",
    pageType: "money-guide",
    primaryKeyword: "best lightweight cordless vacuum",
    primaryVolume: 600,
    primaryKd: 11,
    primaryTrafficPotential: 67000,
    secondaryKeywords: [
      "best cordless lightweight vacuum",
      "best cordless vacuum lightweight",
      "best cordless vacuum small apartment",
      "best lightweight vacuum cordless",
    ],
    authorSlug: "everyday-cleaning-desk",
    audienceProfile: "Practical Cordless Buyer",
    primaryAvatar: "Practical Cordless Buyer",
    priority: 2,
    notes:
      "Distinct ergonomics page for readers prioritizing weight, storage, and ease of use. This is where the absorbed small-home and apartment context belongs operationally.",
  },
  {
    slug: "best-cordless-vacuum-with-removable-battery",
    title: "Best Cordless Vacuums With Removable Batteries (2026)",
    type: "spoke",
    pageType: "money-guide",
    primaryKeyword: "best cordless vacuum with removable battery",
    primaryVolume: 150,
    primaryKd: 8,
    primaryTrafficPotential: 70,
    secondaryKeywords: [
      "cordless vacuum with removable battery",
      "best cordless vacuum battery life",
      "best cordless vacuum spare battery",
      "removable battery stick vacuum",
    ],
    authorSlug: "everyday-cleaning-desk",
    audienceProfile: "Practical Cordless Buyer",
    primaryAvatar: "Practical Cordless Buyer",
    priority: 3,
    notes:
      "Battery-specific spoke for buyers who think in runtime and charging logistics, not just general value. Keep it separate from the main cordless hub because the ownership concern is narrower and more technical.",
  },
  {
    slug: "best-cordless-vacuum-for-pet-hair",
    title: "Best Cordless Vacuums for Pet Hair (2026)",
    type: "spoke",
    pageType: "money-guide",
    primaryKeyword: "best cordless vacuum for pet hair",
    primaryVolume: 9200,
    primaryKd: 5,
    primaryTrafficPotential: 8700,
    secondaryKeywords: [
      "best cordless stick vacuum for pet hair",
      "best vacuum for pet hair cordless",
      "cordless best vacuum for pet hair and carpet",
      "best cordless vacuum for pet hair under $300",
    ],
    authorSlug: "floor-care-pet-mess-desk",
    audienceProfile: "Pet-Mess Floor Manager",
    primaryAvatar: "Pet-Mess Floor Manager",
    priority: 2,
    notes:
      "Distinct tool-type page for pet owners who want daily hair cleanup without a full-size machine. Keep it separate from the broad pet-hair hub because the cordless tradeoffs are different from upright, canister, and robot picks.",
  },
  {
    slug: "best-vacuum-for-pet-hair-on-carpet",
    title: "Best Vacuums for Pet Hair on Carpet (2026)",
    type: "spoke",
    pageType: "money-guide",
    primaryKeyword: "best vacuum for pet hair and carpet",
    primaryVolume: 2100,
    primaryKd: 1,
    primaryTrafficPotential: 900,
    secondaryKeywords: [
      "best vacuum for pet hair on carpet",
      "best pet hair vacuum for carpet",
      "best vacuum for pet hair in carpet",
      "best vacuum for pet hair and high pile carpet",
    ],
    authorSlug: "floor-care-pet-mess-desk",
    audienceProfile: "Pet-Mess Floor Manager",
    primaryAvatar: "Pet-Mess Floor Manager",
    priority: 2,
    notes:
      "Surface-led pet-hair spoke for buyers who care most about embedded carpet cleanup. It should stay separate from the general pet-hair hub because carpet buyers have a tighter performance threshold and different failure modes.",
  },
  {
    slug: "best-steam-mop-for-hardwood-floors",
    title: "Best Steam Mops for Hardwood Floors (2026)",
    type: "spoke",
    pageType: "money-guide",
    primaryKeyword: "best steam mop for hardwood floors",
    primaryVolume: 1100,
    primaryKd: 1,
    primaryTrafficPotential: 12000,
    secondaryKeywords: [
      "best steam mop for hardwood",
      "what is the best steam mop for hardwood floors",
      "best steam mop hardwood floors",
      "best steam cleaner hardwood floors",
    ],
    authorSlug: "deep-clean-maintenance-desk",
    audienceProfile: "Surface-Specific Deep Cleaner",
    primaryAvatar: "Surface-Specific Deep Cleaner",
    priority: 2,
    notes:
      "Core surface-specific caution page. It should foreground compatibility and manufacturer-floor warnings before it ever starts ranking products.",
  },
  {
    slug: "best-steam-mop-for-laminate-floors",
    title: "Best Steam Mops for Laminate Floors (2026)",
    type: "spoke",
    pageType: "money-guide",
    primaryKeyword: "best steam mop for laminate floors",
    primaryVolume: 500,
    primaryKd: 1,
    primaryTrafficPotential: 12000,
    secondaryKeywords: [
      "best steam mop laminate floors",
      "the best steam mop for laminate floors",
      "best steam mop to clean laminate floors",
      "best steam cleaner laminate floors",
    ],
    authorSlug: "deep-clean-maintenance-desk",
    audienceProfile: "Surface-Specific Deep Cleaner",
    primaryAvatar: "Surface-Specific Deep Cleaner",
    priority: 2,
    notes:
      "Laminate-specific caution page. Keep it separate from hardwood because the reader anxiety and compatibility rules are similar but not identical.",
  },
  {
    slug: "best-steam-mop-for-tile-floors",
    title: "Best Steam Mops for Tile Floors (2026)",
    type: "spoke",
    pageType: "money-guide",
    primaryKeyword: "best steam mop for tile floors",
    primaryVolume: 450,
    primaryKd: 2,
    primaryTrafficPotential: 16000,
    secondaryKeywords: [
      "best steam mop for tile",
      "what is the best steam mop for tile floors",
      "the best steam mop for tile floors",
      "best steam mop for tiles",
    ],
    authorSlug: "deep-clean-maintenance-desk",
    audienceProfile: "Surface-Specific Deep Cleaner",
    primaryAvatar: "Surface-Specific Deep Cleaner",
    priority: 2,
    notes:
      "Tile-specific spoke for readers who want payoff more than caution. Keep it distinct from grout because the product ranking can overlap, but the cleaning assignment is not identical.",
  },
  {
    slug: "best-steam-mop-for-vinyl-floors",
    title: "Best Steam Mops for Vinyl Floors (2026)",
    type: "spoke",
    pageType: "money-guide",
    primaryKeyword: "best steam mop for vinyl floors",
    primaryVolume: 100,
    primaryKd: 2,
    primaryTrafficPotential: 5500,
    secondaryKeywords: [
      "best steam mop for vinyl plank floors",
      "best steam mop vinyl floors",
      "steam mop for vinyl plank floors",
      "steam mop for vinyl plank",
    ],
    authorSlug: "deep-clean-maintenance-desk",
    audienceProfile: "Surface-Specific Deep Cleaner",
    primaryAvatar: "Surface-Specific Deep Cleaner",
    priority: 3,
    notes:
      "Vinyl-plank caution page for readers who are highly risk-aware and often unsure whether steam is appropriate at all. Keep it distinct from laminate because the material concerns and brand-manual language often differ.",
  },
  {
    slug: "best-steam-mop-for-grout",
    title: "Best Steam Mops for Grout (2026)",
    type: "spoke",
    pageType: "money-guide",
    primaryKeyword: "best steam mop for grout",
    primaryVolume: 50,
    primaryKd: 1,
    primaryTrafficPotential: 9200,
    secondaryKeywords: [
      "best steam mop for grout cleaning",
      "best steam mop for tile floors and grout",
      "best steam mop for tile and grout",
      "best steam mop for grout and tile",
    ],
    authorSlug: "deep-clean-maintenance-desk",
    audienceProfile: "Surface-Specific Deep Cleaner",
    primaryAvatar: "Surface-Specific Deep Cleaner",
    priority: 3,
    notes:
      "Performance-led grout page for readers chasing a specific deep-clean payoff. Keep it separate from tile because attachments, brush usefulness, and result expectations matter more here.",
  },
  {
    slug: "best-steam-mop-under-100",
    title: "Best Steam Mops Under $100 (2026)",
    type: "spoke",
    pageType: "money-guide",
    primaryKeyword: "best steam mop under $100",
    primaryVolume: 20,
    primaryKd: 3,
    primaryTrafficPotential: 12000,
    secondaryKeywords: [
      "best budget steam mop",
      "best steam cleaner under 100",
      "cheap steam mop",
      "budget steam mop",
    ],
    authorSlug: "deep-clean-maintenance-desk",
    audienceProfile: "Surface-Specific Deep Cleaner",
    primaryAvatar: "Surface-Specific Deep Cleaner",
    priority: 3,
    notes:
      "Hard-budget spoke for surface-specific buyers who still want a real steam payoff. Keep it tied to realistic expectations about refill frequency, attachments, and floor compatibility.",
  },
  {
    slug: "is-a-steam-mop-better-than-a-mop",
    title: "Is a Steam Mop Better Than a Mop?",
    type: "guide",
    pageType: "comparison",
    primaryKeyword: "is a steam mop better than a mop",
    primaryVolume: 20,
    primaryKd: 1,
    primaryTrafficPotential: 700,
    secondaryKeywords: [
      "are steam mops worth it",
      "steam mop vs mop",
      "steam mop or regular mop",
      "is steam cleaning better than mopping",
    ],
    authorSlug: "deep-clean-maintenance-desk",
    audienceProfile: "Surface-Specific Deep Cleaner",
    primaryAvatar: "Surface-Specific Deep Cleaner",
    priority: 3,
    notes:
      "Buyer-decision comparison page for readers still deciding whether the category is justified. This should stay explanatory and surface-aware rather than reading like a disguised roundup.",
  },
];

export const keywordMapStats = {
  totalPages: pageTargets.length,
  hubPages: pageTargets.filter((page) => page.type === "hub").length,
  spokePages: pageTargets.filter((page) => page.type === "spoke").length,
  guidePages: pageTargets.filter((page) => page.type === "guide").length,
  reviewPages: pageTargets.filter((page) => page.type === "review").length,
  trustPages: pageTargets.filter((page) => page.type === "trust").length,
  totalPrimaryVolume: pageTargets.reduce((sum, page) => sum + page.primaryVolume, 0),
  priority1Pages: pageTargets.filter((page) => page.priority === 1).length,
  byPageType: {
    moneyGuides: pageTargets.filter((page) => page.pageType === "money-guide").length,
    supportGuides: pageTargets.filter((page) => page.pageType === "support-guide").length,
    comparisons: pageTargets.filter((page) => page.pageType === "comparison").length,
  },
  byDesk: {
    everydayCleaning: pageTargets.filter((page) => page.authorSlug === "everyday-cleaning-desk").length,
    floorCarePetMess: pageTargets.filter((page) => page.authorSlug === "floor-care-pet-mess-desk").length,
    deepCleanMaintenance: pageTargets.filter((page) => page.authorSlug === "deep-clean-maintenance-desk").length,
  },
  byAvatar: {
    automationMindedFloorCareUpgrader: pageTargets.filter((page) => page.primaryAvatar === "Automation-Minded Floor-Care Upgrader").length,
    practicalCordlessBuyer: pageTargets.filter((page) => page.primaryAvatar === "Practical Cordless Buyer").length,
    petMessFloorManager: pageTargets.filter((page) => page.primaryAvatar === "Pet-Mess Floor Manager").length,
    surfaceSpecificDeepCleaner: pageTargets.filter((page) => page.primaryAvatar === "Surface-Specific Deep Cleaner").length,
  },
};

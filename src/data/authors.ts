// SWAP-TEST 2026-04-19:
// Scenario: a mid-tier vacuum review paragraph — "how does this brand hold up over 6 months."
//
// Everyday Cleaning Desk draft (PRAGMATIC REASSURANCE):
//   Most people will be happy with the Shark PowerDetect at this price. Consumer
//   Reports ranked it top three two years running. The battery runs a real 40 minutes
//   on low, not the marketing-minute number. You're fine buying this. Here's the thing —
//   the replacement filter is $12, not $40, so the 3-year math is manageable.
//
// Labor Math Desk draft (SKEPTICAL TIME-TRADER):
//   Start with the battery-replacement cost, not the suction spec. The week-math says
//   a $180 cordless with a $90 proprietary battery in year three costs you more than
//   the $400 stick with a user-serviceable pack. Vacuum Wars' anemometer airflow test
//   puts this unit at 62 CFM — enough for daily use, but where it collapses is the
//   filter lifespan across multiple dust loads.
//
// Safe Surface Desk draft (CAREFUL EXPERT):
//   Before you buy, check what your flooring manufacturer says about brushroll
//   aggressiveness on engineered hardwood. Bona's care guide is explicit — soft
//   rollers only, no hard-bristle heads. The short version: don't let a Shark
//   motorized head touch a floor rated below Level 3 hardness. The safer option is
//   the bare-floor soft-roller attachment, swapped in for area rugs.
//
// Swap check: Everyday's "you're fine", "here's the thing", "manageable" don't
// appear in Labor Math or Safe Surface drafts. Labor Math's "week-math", "start with",
// "collapses", Vacuum Wars citation don't appear elsewhere. Safe Surface's "before you
// buy", "manufacturer care guide", "the short version: don't", "safer option" don't
// appear elsewhere. Pass.

export type Author = {
  // Legacy-compatible fields — used by about/page.tsx + hub-page.tsx + author-bio.tsx.
  slug: string;
  title: string;
  name: string;
  bio: string;
  audience: string;
  avatar: string;
  expertise: string[];

  // New fields (optional — populated on topical-desk + house-voice entries).
  id?: string;
  role?: "topical-desk" | "house-voice";

  // Topical-desk 8-field schema (required when role === "topical-desk").
  emotionalPosture?: string;
  openingHookRule?: string;
  signatureTransitions?: string[];
  forbiddenPhrases?: string[];
  vocabularyPrefs?: { prefer: string[]; avoid: string[] };
  trustSignalAllowlist?: string[];
  sentenceCadenceRule?: string;
  canonicalVoiceCorpus?: { hero: string; tradeoffIntro: string; verdict: string };

  // House-voice 5-field schema (required when role === "house-voice").
  voiceCharacter?: string;
  coveredPages?: string[];
  brandPrinciples?: string[];
  forbiddenPatterns?: string[];
  canonicalSample?: string;
};

export const authors: Author[] = [
  // ----------------------------------------------------------------------
  // TOPICAL DESK 1: Everyday Cleaning Desk
  // Primary avatar: Practical Floor Keeper
  // ----------------------------------------------------------------------
  {
    id: "everyday-cleaning-desk",
    slug: "everyday-cleaning-desk",
    role: "topical-desk",
    name: "Everyday Cleaning Desk",
    title: "Practical picks for normal weekly floor care",
    bio: "TheCleaningReport's mainstream-reader desk. Reviews mid-priced cordless vacuums, handheld supplements, and basic non-steam mops for renters, apartment dwellers, and everyday homeowners who want a sensible winner without a research project.",
    audience: "Practical Floor Keepers — the 25-50 shopper who wants one good tool for weekly floor care, checks CR + Good Housekeeping + one Reddit thread, and decides in 1-2 sessions.",
    avatar: "/images/authors/everyday-cleaning-desk.png",
    expertise: [
      "mid-tier cordless vacuums",
      "handheld + stair-friendly picks",
      "basic non-steam mops",
      "replacement-cost math over 3 years",
    ],
    emotionalPosture: "PRAGMATIC REASSURANCE",
    openingHookRule:
      "Open by naming the price band + the reader's situation, then the clear winner. No methodology deep-dive in the intro.",
    signatureTransitions: [
      "Here's the thing —",
      "Most people will be happy with —",
      "The budget reality is —",
      "You're fine if —",
    ],
    forbiddenPhrases: [
      "the week-math says",
      "start with the dock",
      "Vacuum Wars' methodology",
      "before you buy, check your warranty",
      "the short version: don't",
      "dock reliability",
      "manufacturer care guide",
    ],
    vocabularyPrefs: {
      prefer: ["simple", "clear winner", "manageable", "sensible", "ranked", "tested", "real 40 minutes", "budget-sweet", "fine"],
      avoid: ["methodology", "spec sheet", "dialed in", "anemometer", "tradeoff collapses", "sunk cost", "warranty void", "dock maintenance"],
    },
    trustSignalAllowlist: [
      "Good Housekeeping Institute",
      "Consumer Reports",
      "Wirecutter",
    ],
    sentenceCadenceRule:
      "60/30/10 — short declarative lead, medium follow, occasional long synthesis. No sentence over 30 words in the opener.",
    canonicalVoiceCorpus: {
      hero:
        "If you want the cordless that most people will be happy with for under $200, the Shark PowerDetect is it. Consumer Reports ranked it top three two years running. Good Housekeeping Institute tested the same unit in their lab and agreed. Here's the thing — the battery runs a real 40 minutes on low, not the marketing-minute number, and the replacement filter is $12 not $40. The 3-year math is manageable. You're fine buying this one.",
      tradeoffIntro:
        "These picks sort themselves on three factors: weight, runtime, and filter cost. Most people weigh them in that order. The budget reality is that anything under $150 is a compromise on at least one. What matters is knowing which compromise you can live with before you hit checkout.",
      verdict:
        "Buy this if you want a cordless that handles a 2-bedroom apartment without a second charge, empties without scissors, and runs a real 40 minutes on low. Skip this if you have heavy carpet — the bare-floor + low-pile tuning doesn't give you enough for plush carpet. Skip if your budget is under $130 — the tier below this is false economy on filter cost.",
    },
  },

  // ----------------------------------------------------------------------
  // TOPICAL DESK 2: Labor Math Desk
  // Primary avatar: Labor Trader
  // ----------------------------------------------------------------------
  {
    id: "labor-math-desk",
    slug: "labor-math-desk",
    role: "topical-desk",
    name: "Labor Math Desk",
    title: "Premium picks that actually remove labor from your week",
    bio: "TheCleaningReport's tradeoff-forward desk. Reviews robot vacuums, premium cordless sticks, and robot/steam hybrid docks for buyers willing to spend $500-1500 to reclaim time — if the maintenance math actually works.",
    audience: "Labor Traders — the 30-55 buyer trading money for reclaimed hours, triggered by a life-load shift (new baby, RTO, aging knees), wary of gadgets that become a second chore.",
    avatar: "/images/authors/labor-math-desk.png",
    expertise: [
      "robot vacuums + dock reliability",
      "premium cordless sticks ($400-700)",
      "robot-mop hybrids + auto-wash docks",
      "firmware regressions + OTA support windows",
    ],
    emotionalPosture: "SKEPTICAL TIME-TRADER",
    openingHookRule:
      "Open by naming the labor math (what does this remove from your week), then the first maintenance tradeoff. No 'simple winner' framing.",
    signatureTransitions: [
      "The week-math says —",
      "Start with the dock, not the suction —",
      "Here's what this actually removes from your week —",
      "Where this collapses —",
    ],
    forbiddenPhrases: [
      "you're going to be fine",
      "most people will be happy",
      "the simple winner",
      "the friendly tradeoff",
      "manageable weight",
      "you're fine if",
      "here's the thing",
    ],
    vocabularyPrefs: {
      prefer: ["tradeoff", "methodology", "dock", "firmware", "OTA", "cadence", "anemometer", "debris matrix", "retains", "collapses", "labor load"],
      avoid: ["simple", "you'll be fine", "friendly", "clear-cut", "manageable", "sensible", "Consumer Reports says"],
    },
    trustSignalAllowlist: [
      "Vacuum Wars methodology (7-inch hair-tangle, anemometer airflow)",
      "Modern Castle 12-debris matrix",
      "Consumer Reports (comparative data only, not as primary)",
    ],
    sentenceCadenceRule:
      "30/50/20 — tradeoff-dense medium sentences, with long methodology-citing clauses. First sentence often long.",
    canonicalVoiceCorpus: {
      hero:
        "Start with the dock, not the suction spec. A robot vacuum with premium navigation and weak docking becomes a second chore inside six months, and the week-math collapses — you're back to scrubbing a dirty-water tank on Saturdays, which is exactly the hour you bought this to reclaim. The Roborock Qrevo doesn't collapse. Vacuum Wars' 7-inch hair-tangle test puts its main brush at 98% pickup with zero cut-outs across five runs. Modern Castle's 12-debris matrix shows consistent performance across hardwood, low-pile carpet, and the transitions between.",
      tradeoffIntro:
        "Three variables move the week-math more than price does: dock reliability, hair-tangle architecture, and firmware support cadence. The column below splits each pick on those three, plus one maintenance-honesty note per unit. What this table does NOT show — and what kills the labor trade — is the long-tail maintenance burden that only shows up at month six. We'll get to that under each pick.",
      verdict:
        "Buy this if you have a real labor constraint — new baby, aging knees, 2-pet household — and you're willing to clean the dock every 2-3 weeks in exchange for reclaiming 40+ minutes a week of floor care. Skip this if your floors are mostly rug-covered (robot struggles on transitions), if you can't tolerate firmware regressions (the February 2026 OTA cycle broke obstacle avoidance on this line for 11 days), or if your household has someone who will not remember to refill the clean-water bin. Where this collapses is any household that won't touch the dock.",
    },
  },

  // ----------------------------------------------------------------------
  // TOPICAL DESK 3: Safe Surface Desk
  // Primary avatars: Surface Protector + Event-Driven Deep Cleaner
  // ----------------------------------------------------------------------
  {
    id: "safe-surface-desk",
    slug: "safe-surface-desk",
    role: "topical-desk",
    name: "Safe Surface Desk",
    title: "Caution-first picks for sunk-cost surfaces + triggered deep cleans",
    bio: "TheCleaningReport's warranty-aware desk. Reviews steam mops, chemical-cleaning bundles (grout, hardwood, stainless, upholstery), and carpet cleaner machines for buyers protecting specific surfaces or handling an event-driven deep clean.",
    audience: "Surface Protectors (35-60 homeowners with engineered hardwood / laminate / stone / grout / stainless) + Event-Driven Deep Cleaners (triggered by move-in, flood, stain crisis, pre-listing prep — upgrading off Rug Doctor rentals).",
    avatar: "/images/authors/safe-surface-desk.png",
    expertise: [
      "steam mop flooring-warranty decision trees",
      "pH-neutral hardwood + grout + stainless chemistry",
      "carpet cleaner machine dry-time + fiber compatibility",
      "IICRC S100 + flooring manufacturer care guides",
    ],
    emotionalPosture: "CAREFUL EXPERT",
    openingHookRule:
      "Open by naming the caution or warranty risk, then the decision tree the reader needs to walk. Never lead with a product recommendation.",
    signatureTransitions: [
      "Before you buy, check your warranty —",
      "The short version: don't —",
      "The safer option is —",
      "Here's what the manufacturer says —",
    ],
    forbiddenPhrases: [
      "most people will be happy",
      "the simple winner",
      "the fast answer",
      "the week-math says",
      "start with the dock",
      "the manageable choice",
      "you're fine if",
      "here's the thing",
    ],
    vocabularyPrefs: {
      prefer: ["warranty", "caution", "pH-neutral", "sealed", "manufacturer-approved", "risk", "damage", "reseal", "certified", "decision tree", "sunk-cost surface"],
      avoid: ["easy button", "winner", "fast answer", "simple", "clear-cut", "dialed in", "methodology anemometer", "week-math"],
    },
    trustSignalAllowlist: [
      "Bona / Shaw / Armstrong flooring manufacturer care guides",
      "EWG Verified + Made Safe + Leaping Bunny",
      "IICRC S100 (carpet cleaning cadence + staging)",
      "VacuumLand comparison threads (carpet-cleaner machine head-to-heads)",
    ],
    sentenceCadenceRule:
      "20/40/40 — long warning + decision-tree construction dominates, occasional short cautions. First sentence often runs 25+ words.",
    canonicalVoiceCorpus: {
      hero:
        "Before you buy a steam mop, find your flooring manufacturer's care guide — and read the section about steam explicitly. If your floor is engineered hardwood or pre-2018 laminate, most manufacturers void their warranty when a steam mop is used on it, and that's not a fringe edge case. We've documented this language across Bona, Shaw, and Armstrong care guides; the pattern is consistent. The short version: don't assume a steam mop is safe just because a reviewer said so. The safer option for engineered hardwood is a spray-and-wipe with a pH-neutral, manufacturer-approved cleaner (Bona is the one most manufacturers co-market with).",
      tradeoffIntro:
        "The decision tree below sorts carpet cleaner machines on what actually matters for a triggered deep clean: dry time (single biggest complaint cluster), tank capacity (whole-house vs single-room), stair-reach hose length, and proprietary-solution lock-in. Before the table, though, one honest framing: if you only deep-clean once a year, renting a Rug Doctor is still the right answer. Buy-vs-rent breaks even around rental #4-6 per IICRC S100's annual cadence recommendation — not sooner.",
      verdict:
        "Buy this if you're upgrading off 3+ Rug Doctor rentals a year, have a mix of stairs + upholstery + wall-to-wall carpet to reach, and can give up 40 pounds of garage storage. Skip this if you're a one-time buyer (rent instead; the math doesn't clear), if your carpet manufacturer voids the warranty on high-PSI extraction (Shaw and some polyester carpets do — check before buying), or if your household's deep-clean cadence is annual. The safer option for annual-only households is hiring an IICRC-certified professional cleaner once a year.",
    },
  },

  // ----------------------------------------------------------------------
  // HOUSE VOICE: The Cleaning Report
  // Writes homepage + About + trust pages + category hub intros. Cross-cutting.
  // ----------------------------------------------------------------------
  {
    id: "the-cleaning-report-house-voice",
    slug: "the-cleaning-report",
    role: "house-voice",
    name: "The Cleaning Report",
    title: "Independent indoor cleaning reviews",
    bio: "TheCleaningReport is an independent indoor-cleaning review publication under editor Lee Serel, CPA. Three editorial desks cover the distinct decisions readers face — everyday floor care, labor-removal premium picks, and surface-safe deep cleaning.",
    audience: "Every reader who lands on the site. Homepage + trust pages + category hubs use this voice before routing to a desk.",
    avatar: "/images/authors/the-cleaning-report-mark.png",
    expertise: [
      "site-level brand voice",
      "method + trust posture",
      "desk routing from the homepage",
    ],
    voiceCharacter:
      "Calm, credible, cross-cutting. Introduces the publication as a practical indoor-cleaning review desk that routes readers to the right topical desk for their decision. Not avatar-specific; not one of the topical desks. Writes as the publication, not as any single editor.",
    coveredPages: [
      "/",
      "/about",
      "/how-we-review",
      "/disclosure",
      "/ai-disclosure",
      "/privacy",
      "/terms",
      "category-hub-intros",
    ],
    brandPrinciples: [
      "One clear answer for the rushed buyer — the homepage and category hubs route readers to the right desk in under 30 seconds.",
      "Real tradeoffs over spec-sheet theater — maintenance burden, warranty risk, and dry time matter as much as suction numbers.",
      "Named method, not anonymous expertise — every recommendation cites the desk, the source type, and the tradeoff logic.",
    ],
    forbiddenPatterns: [
      "we tested every product in our kitchens",
      "team of experts",
      "our dedicated reviewers",
      "dive into",
      "in today's world",
      "trusted source for",
      "unbiased reviews you can count on",
      "em dash in homepage hero",
    ],
    canonicalSample:
      "Find the right cleaning tool by naming the right tradeoff first. TheCleaningReport routes readers across robot vacuums, cordless vacuums, carpet cleaner machines, and surface-safe chemistry to the desk that owns that decision. No listicle bloat. No spec-sheet theater. Three editorial desks — Everyday Cleaning for normal weekly care, Labor Math for premium picks that actually remove hours from your week, and Safe Surface for sunk-cost-surface and triggered deep-clean decisions. Start with the flagship guide that matches your situation, or open About to read the method first.",
  },
];

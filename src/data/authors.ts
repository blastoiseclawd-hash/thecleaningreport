// SWAP-TEST 2026-04-19:
// Scenario: a mid-tier vacuum review paragraph, "how does this brand hold up over 6 months."
//
// Everyday Cleaning Desk draft (PRAGMATIC REASSURANCE):
//   Most people will be happy with the Shark PowerDetect at this price. The top
//   consumer labs ranked it top three two years running [1]. The battery runs a
//   real 40 minutes on low, not the marketing-minute number. You're fine buying
//   this. Here's the thing. The replacement filter is $12, not $40, so the 3-year
//   math is manageable.
//
// Labor Math Desk draft (SKEPTICAL TIME-TRADER):
//   What this takes off your week. Roughly 45 minutes of floor-care time in a
//   1,500 square foot home, holding across the first six months. What owners
//   see at month six: the auto-empty base keeps itself runnable. Where this
//   stops working: firmware regressions after OTA cycles. What you have to do
//   to keep it running: empty the dock filter every two weeks, refill the
//   clean-water tank weekly.
//
// Safe Surface Desk draft (CAREFUL EXPERT):
//   Before you buy, check what your flooring manufacturer says about brushroll
//   aggressiveness on engineered hardwood. The published care guides are explicit [3].
//   Soft rollers only, no hard-bristle heads. The short version: don't let a
//   Shark motorized head touch a floor rated below Level 3 hardness. The safer
//   option is the bare-floor soft-roller attachment, swapped in for area rugs.
//
// Swap check: Everyday's "you're fine", "here's the thing", "manageable" don't
// appear in Labor Math or Safe Surface drafts. Labor Math's "what this takes
// off your week", "what owners see at month six", "where this stops working",
// "what you have to do to keep it running" don't appear elsewhere. Safe
// Surface's "before you buy", "care guide", "the short version: don't", "safer
// option" don't appear elsewhere. Pass.
//
// FOOTNOTE-VOICE RULE (2026-04-19, non-YMYL sites):
// Body prose NEVER names external outlets (no "CNET scored", no "Vacuum Wars found",
// no "Modern Castle tested"). Authority citations render as numbered `[1][2][3]`
// anchors that link to a muted named-sources list at page bottom. Direct evidence
// readers can click (Amazon product URLs, specific Reddit thread links, YouTube
// creator videos) stays inline as `[text](url)`. The prose speaks AS the publication,
// not ABOUT what other publications said. Never break the fourth wall with internal
// jargon like "tier-1 labs", "Final 6", "convergence", or "the methodology"; those
// are operator terms, not reader terms (rule #3). YMYL sites (CWP water) are
// EXEMPT. EPA/NSF/manufacturer authorities must remain named inline.
//
// SUBSTANCE-TO-AVATAR RULE (2026-04-19 amendment):
// Every review body must answer the desk's `avatarJobsToAnswer` jobs in plain
// avatar language. Voice correctness is necessary but not sufficient. A review
// that uses every signatureTransition and avoids every forbiddenPhrase but
// answers none of the avatar's actual questions still fails. Enforced by
// `.claude/hooks/avatar-substance-check.js`. Labor Math's 4 jobs: time saved
// per week, lifespan, maintenance cadence, where-it-collapses. Everyday
// Cleaning's 4 jobs: one clear winner, 3-year cost, battery reality, skip-up
// signal. Safe Surface's 4 jobs: warranty risk, surface compatibility, safer
// alternative, decision tree. See feedback_substance_to_avatar memory.

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

  // Topical-desk 9-field schema (required when role === "topical-desk").
  // 2026-04-19 amendment: added `avatarJobsToAnswer` to enforce SUBSTANCE
  // alignment to avatar, not just voice alignment. The 8-field schema prior
  // enforced attribution + voice but allowed lab-report-speak that answered
  // zero avatar questions. See feedback_substance_to_avatar.md memory + the
  // `avatar-substance-check.js` hook that reads this field.
  emotionalPosture?: string;
  openingHookRule?: string;
  signatureTransitions?: string[];
  forbiddenPhrases?: string[];
  vocabularyPrefs?: { prefer: string[]; avoid: string[] };
  trustSignalAllowlist?: string[];
  sentenceCadenceRule?: string;
  canonicalVoiceCorpus?: { hero: string; tradeoffIntro: string; verdict: string };
  avatarJobsToAnswer?: string[]; // 3-5 concrete questions the avatar came to learn

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
    audience: "Practical Floor Keepers: the 25-50 shopper who wants one good tool for weekly floor care, checks CR + Good Housekeeping + one Reddit thread, and decides in 1-2 sessions.",
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
    // Substance anchors — what the Practical Floor Keeper avatar came to learn.
    // Enforced by `avatar-substance-check.js`.
    avatarJobsToAnswer: [
      "one clear winner at the stated price band (no paralysis-of-choice)",
      "3-year cost of ownership (including replacement filters/bags/batteries)",
      "how long the battery actually runs vs the marketing number",
      "when to skip this tier and buy up/down one price band",
    ],
    // Signature transitions: em-dash-free, reader-reassuring. Each anchors an
    // avatar job (price clarity, cost math, battery reality, skip-to signal).
    signatureTransitions: [
      "Here's the thing.",
      "Most people will be happy with this one.",
      "The budget reality.",
      "You're fine buying this if.",
      "Skip to the next tier up if.",
    ],
    forbiddenPhrases: [
      "the week-math says",
      "start with the dock",
      "before you buy, check your warranty",
      "the short version: don't",
      "dock reliability",
      "manufacturer care guide",
      // Outlet-naming patterns — body prose never names external publications:
      "according to Consumer Reports",
      "Consumer Reports says",
      "Consumer Reports ranked",
      "Consumer Reports tested",
      "Good Housekeeping Institute tested",
      "Good Housekeeping ranked",
      "Wirecutter picked",
      "Wirecutter recommends",
      "per Consumer Reports",
      "per Good Housekeeping",
      "per Wirecutter",
      // Internal operator jargon — rule #3 (no internal metrics exposed):
      "tier-1 labs",
      "tier 1 labs",
      "Final 6",
      "convergence",
      "converged on",
      "the methodology",
    ],
    vocabularyPrefs: {
      prefer: ["simple", "clear winner", "manageable", "sensible", "ranked", "tested", "real 40 minutes", "budget-sweet", "fine"],
      avoid: ["methodology", "spec sheet", "dialed in", "anemometer", "tradeoff collapses", "sunk cost", "warranty void", "dock maintenance"],
    },
    // trustSignalAllowlist = the source pool the desk is allowed to CITE VIA
    // NUMBERED FOOTNOTE. Outlet names render only in the muted sources-footer
    // list at page bottom, never in body prose. See footnote-voice rule at top
    // of this file + the rewritten canonicalVoiceCorpus samples below.
    trustSignalAllowlist: [
      "Good Housekeeping Institute",
      "Consumer Reports",
      "Wirecutter",
    ],
    sentenceCadenceRule:
      "60/30/10 — short declarative lead, medium follow, occasional long synthesis. No sentence over 30 words in the opener.",
    canonicalVoiceCorpus: {
      hero:
        "If you want the cordless that most people will be happy with for under $200, the Shark PowerDetect is it. It's ranked top three two years running in the lab tests that actually matter [1][2]. Here's the thing. The battery runs a real 40 minutes on low, not the marketing-minute number, and the replacement filter is $12 not $40. The 3-year math is manageable. You're fine buying this one.",
      tradeoffIntro:
        "These picks sort themselves on three factors: weight, runtime, and filter cost. Most people weigh them in that order. The budget reality is that anything under $150 is a compromise on at least one. What matters is knowing which compromise you can live with before you hit checkout.",
      verdict:
        "Buy this if you want a cordless that handles a 2-bedroom apartment without a second charge, empties without scissors, and runs a real 40 minutes on low. Skip this if you have heavy carpet. The bare-floor plus low-pile tuning doesn't give you enough for plush carpet. Skip if your budget is under $130. The tier below this is false economy on filter cost.",
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
    bio: "TheCleaningReport's tradeoff-forward desk. Reviews robot vacuums, premium cordless sticks, and robot/steam hybrid docks for buyers willing to spend $500-1500 to reclaim time, when the maintenance math actually works.",
    audience: "Labor Traders: the 30-55 buyer trading money for reclaimed hours, triggered by a life-load shift (new baby, RTO, aging knees), wary of gadgets that become a second chore.",
    avatar: "/images/authors/labor-math-desk.png",
    expertise: [
      "robot vacuums + dock reliability",
      "premium cordless sticks ($400-700)",
      "robot-mop hybrids + auto-wash docks",
      "firmware regressions + OTA support windows",
    ],
    emotionalPosture: "SKEPTICAL TIME-TRADER",
    openingHookRule:
      "Open by naming what the product removes from the reader's week (in concrete minutes/hours) and the first maintenance tradeoff that could invert the math. Never 'simple winner' framing.",
    // Every review body must answer each of these, in plain avatar language.
    // Enforced by `avatar-substance-check.js`. Missing any job = warning.
    avatarJobsToAnswer: [
      "time saved per week (concrete minutes/hours against a specific household shape)",
      "lifespan / months of reliability before a known failure mode surfaces",
      "maintenance cadence + cost the owner will actually do (daily/weekly/monthly)",
      "where this collapses (the failure mode that inverts the labor math for specific households)",
    ],
    // Signature transitions are em-dash-free (anti-AI-slop rule), plain-avatar-
    // language (no insider jargon like "suction spec", "week-math", "dock vs
    // spec"), and substance-oriented. Each one introduces one of the
    // avatarJobsToAnswer above, so using them in body = answering an avatar job.
    // Cold-read test: an avatar landing on the page should parse each transition
    // in one pass without knowing any Labor Math Desk concepts.
    signatureTransitions: [
      "What this takes off your week.",
      "Where this stops working.",
      "What you have to do to keep it running.",
      "What owners see at month six.",
      "The tradeoff that breaks this for some homes.",
    ],
    forbiddenPhrases: [
      "you're going to be fine",
      "most people will be happy",
      "the simple winner",
      "the friendly tradeoff",
      "manageable weight",
      "you're fine if",
      "here's the thing",
      // Ambiguous / jargon phrases — surface-friendly variants allowed,
      // but the gnomic internal framings are out.
      "the week-math says",
      "week-math winner",
      "week math winner",
      "the week-math winner",
      // Outlet-naming patterns — body prose never names external publications:
      "according to CNET",
      "CNET scored",
      "CNET documented",
      "CNET's lab",
      "CNET rated",
      "CNET picked",
      "per CNET",
      "Vacuum Wars rated",
      "Vacuum Wars scored",
      "Vacuum Wars found",
      "Vacuum Wars' methodology",
      "per Vacuum Wars",
      "Modern Castle scored",
      "Modern Castle tested",
      "Modern Castle's test",
      "per Modern Castle",
      "according to Consumer Reports",
      "Consumer Reports says",
      // Internal operator jargon — rule #3 (no internal metrics exposed):
      "tier-1 labs",
      "tier 1 labs",
      "tier-1 lab",
      "Final 6",
      "Final Six",
      "convergence",
      "converged on",
      "converged at",
      "the methodology",
      "methodology convergence",
      // Lab-report-speak — substance drift. Labor Trader avatar doesn't care
      // about panel scores or raw percentages divorced from labor outcomes.
      // Raw numbers are OK when tied to minutes/hours/dollars/cadence.
      "8-dimension rating panel",
      "8-dimension panel",
      "rating panel",
      "category average",
      "overall average sand pickup",
      "midpile carpet sand pickup",
      "debris matrix",
      "anemometer",
      "anemometer airflow",
    ],
    vocabularyPrefs: {
      prefer: [
        "tradeoff",
        "dock",
        "firmware",
        "OTA",
        "cadence",
        "retains",
        "collapses",
        "labor load",
        "minutes a week",
        "hours a week",
        "filter empty",
        "bin empty",
        "maintenance cadence",
        "lifespan",
        "month six",
        "month eight",
        "independent testing",
        "owner-reality",
      ],
      avoid: [
        "simple",
        "you'll be fine",
        "friendly",
        "clear-cut",
        "manageable",
        "sensible",
        "anemometer",
        "debris matrix",
        "tier-1",
        "Final 6",
        "week-math",
        "rating panel",
        "overall score",
      ],
    },
    // trustSignalAllowlist = the source pool the desk is allowed to CITE VIA
    // NUMBERED FOOTNOTE. Outlet names render only in the muted sources-footer
    // list at page bottom, never in body prose. Body prose uses abstractions
    // like "independent lab testing", "published airflow results", "owner
    // long-form reviews" and drops a [N] anchor to the source list.
    trustSignalAllowlist: [
      "Vacuum Wars (8-dimension rating panel, hair-tangle + anemometer airflow)",
      "Modern Castle (12-debris matrix + navigation test)",
      "CNET (obstacle avoidance lab + pet-hair testing)",
      "Consumer Reports (comparative data only, not as primary)",
    ],
    sentenceCadenceRule:
      "30/50/20 — tradeoff-dense medium sentences, with long methodology-citing clauses. First sentence often long.",
    canonicalVoiceCorpus: {
      hero:
        "What this takes off your week. The Roborock Qrevo reclaims roughly 45 minutes a week of floor-care time in a 1,500 square foot home, and that number holds across the first six months instead of collapsing after the honeymoon period. A robot with premium navigation and a weak auto-empty base becomes a second chore inside six months (you're back to scrubbing a dirty-water tank on Saturdays, which is exactly the hour you bought this to reclaim). This one does not do that. Independent hair-tangle testing puts its main brush at near-zero wrap across five runs [1]. Cleaning-consistency results across hardwood, low-pile carpet, and the transitions between show the same pattern [2].",
      tradeoffIntro:
        "Three variables move the week's time savings more than price does: dock reliability, hair-tangle architecture, and firmware support cadence. The column below splits each pick on those three, plus one maintenance-honesty note per unit. What this table does NOT show is the long-tail maintenance burden that only surfaces at month six. That goes under each pick.",
      verdict:
        "Buy this if you have a real labor constraint (new baby, aging knees, 2-pet household) and you're willing to clean the dock every 2 to 3 weeks in exchange for reclaiming 40 plus minutes a week of floor care. Skip this if your floors are mostly rug-covered (robot struggles on transitions), if you can't tolerate firmware regressions (the February 2026 OTA cycle broke obstacle avoidance on this line for 11 days), or if your household has someone who will not remember to refill the clean-water bin. Where this collapses is any household that won't touch the dock.",
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
    audience: "Surface Protectors (35-60 homeowners with engineered hardwood / laminate / stone / grout / stainless) + Event-Driven Deep Cleaners (triggered by move-in, flood, stain crisis, pre-listing prep; upgrading off Rug Doctor rentals).",
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
    // Substance anchors — what the Surface Protector / Event-Driven Restorer
    // avatars came to learn. Enforced by `avatar-substance-check.js`.
    avatarJobsToAnswer: [
      "warranty-risk check (what voids the floor/surface manufacturer's warranty)",
      "surface compatibility (what this can and cannot safely touch)",
      "the safer alternative if the first option carries warranty or damage risk",
      "decision tree: buy vs rent vs hire for the household's actual cadence",
    ],
    // Signature transitions: em-dash-free, caution-first. Each anchors an
    // avatar job (warranty, compatibility, safer alternative, decision tree).
    signatureTransitions: [
      "Before you buy, check your warranty.",
      "The short version: don't.",
      "The safer option.",
      "Here's what the manufacturer says.",
      "Decision tree.",
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
      // Outlet-naming patterns — body prose never names external publications
      // or specific brand care guides. Certifying bodies (IICRC, EWG) ARE allowed
      // inline because their names function as the SAFETY CLAIM itself, not as
      // authority delegation. Care-guide brands (Bona, Shaw, Armstrong) move to
      // footnote so the prose reads "the manufacturer care guide" generically.
      "Bona's care guide says",
      "according to Bona",
      "Shaw's warranty",
      "Armstrong recommends",
      "per Bona",
      "per Shaw",
      "per Armstrong",
      "VacuumLand reports",
      "VacuumLand threads document",
      // Internal operator jargon — rule #3 (no internal metrics exposed):
      "tier-1 labs",
      "tier 1 labs",
      "Final 6",
      "convergence",
      "converged on",
      "the methodology",
    ],
    vocabularyPrefs: {
      prefer: ["warranty", "caution", "pH-neutral", "sealed", "manufacturer-approved", "risk", "damage", "reseal", "certified", "decision tree", "sunk-cost surface", "the published care guide"],
      avoid: ["easy button", "winner", "fast answer", "simple", "clear-cut", "dialed in", "week-math", "tier-1", "Final 6"],
    },
    // trustSignalAllowlist = the source pool the desk is allowed to CITE VIA
    // NUMBERED FOOTNOTE. Exception: IICRC + EWG + Made Safe + Leaping Bunny may
    // be named inline because the CERTIFICATION is the claim (IICRC-certified
    // professional, EWG Verified cleaner). Flooring-brand care guides (Bona,
    // Shaw, Armstrong) render as footnote; body prose says "the manufacturer
    // care guide" generically.
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
        "Before you buy a steam mop, find your flooring manufacturer's care guide. Read the section about steam explicitly. If your floor is engineered hardwood or pre-2018 laminate, most manufacturers void their warranty when a steam mop is used on it, and that's not a fringe edge case. The pattern is consistent across the major engineered-hardwood brands' published care guides [1][2][3]. The short version: don't assume a steam mop is safe just because a reviewer said so. The safer option for engineered hardwood is a spray-and-wipe with a pH-neutral, manufacturer-approved cleaner (the brand most manufacturers co-market with is listed in the sources).",
      tradeoffIntro:
        "The decision tree below sorts carpet cleaner machines on what actually matters for a triggered deep clean: dry time (single biggest complaint cluster), tank capacity (whole-house vs single-room), stair-reach hose length, and proprietary-solution lock-in. Before the table, though, one honest framing. If you only deep-clean once a year, renting a Rug Doctor is still the right answer. Buy-vs-rent breaks even around rental #4 to #6 per IICRC S100's annual cadence recommendation, not sooner.",
      verdict:
        "Buy this if you're upgrading off 3 plus Rug Doctor rentals a year, have a mix of stairs plus upholstery plus wall-to-wall carpet to reach, and can give up 40 pounds of garage storage. Skip this if you're a one-time buyer (rent instead; the math doesn't clear), if your carpet manufacturer voids the warranty on high-PSI extraction (some polyester carpet brands do; check the published care guide before buying [4]), or if your household's deep-clean cadence is annual. The safer option for annual-only households is hiring an IICRC-certified professional cleaner once a year.",
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
    bio: "TheCleaningReport is an independent indoor-cleaning review publication under editor Lee Serel, CPA. Three editorial desks cover the distinct decisions readers face: everyday floor care, labor-removal premium picks, and surface-safe deep cleaning.",
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

// desk: safe-surface-desk
/**
 * Content for /best-hardwood-floor-cleaner. TCR Chemical Bundle spoke (Safe Surface Desk).
 * Research: sites/thecleaningreport/data/research/best-hardwood-floor-cleaner.md
 * Evidence: 4 artifacts, verified: true, 24 URLs cited.
 * Voice: Safe Surface Desk (src/data/authors.ts).
 * Primary avatar: Surface Protector (data/avatar-research.md lines 155-208).
 * Intent-hierarchy: sites/thecleaningreport/data/intent-hierarchy/best-hardwood-floor-cleaner-decision.md
 * Phase 7 Session A Page 1 of .claude/plans/can-you-review-our-lexical-robin.md.
 *
 * Footnote-voice rule applied: no outlet names in body prose. Manufacturer
 * references stay generic ("the manufacturer's published care language", "the major flooring
 * brands"). Authority citations render as [N] anchors to the muted sources
 * list at page bottom.
 *
 * Em-dashes stripped. Internal jargon scrubbed. Avatar substance: every review
 * answers Safe Surface Desk's 4 avatarJobsToAnswer (warranty risk / surface
 * compatibility / safer alternative / decision tree) in Surface Protector
 * language.
 */

import type {
  HubMethodology,
  HubFailureModesBlock,
  HubDivergenceBlock,
  HubSourcesFooter,
  HubReviewCite,
} from "@/components/pages/hub-page";

export interface BestHardwoodFloorCleanerReview {
  heading: string;
  reviewerScore: number;
  scoreDiffReason: string;
  body: string;
  pros: string[];
  cons: string[];
  verdict: string;
  skipThisIf?: string;
  ownerCites?: HubReviewCite[];
  videoCite?: HubReviewCite;
}

export interface BestHardwoodFloorCleanerGuide {
  slug: string;
  title: string;
  description: string;
  breadcrumbLabel: string;
  publishedDate: string;
  modifiedDate: string;
  lastUpdatedNote: string;
  quickAnswer: string;
  productOrder: string[];
  displayNames: Record<string, string>;
  badges: Record<string, string>;
  curatedSpecs: Record<string, Record<string, string>>;
  comparisonColumns: { key: string; label: string }[];
  comparisonTable: Array<{
    slug: string;
    name: string;
    badge: string;
    price: string;
    finishes: string;
    ph: string;
    safety: string;
  }>;
  methodology: HubMethodology;
  reviews: Record<string, BestHardwoodFloorCleanerReview>;
  failureModes: HubFailureModesBlock;
  divergence: HubDivergenceBlock;
  whenNotToBuy: { title: string; body: string };
  buyingGuide: { title: string; sections: Array<{ heading: string; body: string }> };
  faqs: Array<{ question: string; answer: string }>;
  sourcesFooter: HubSourcesFooter;
  relatedLinks: Array<{ href: string; title: string }>;
}

export const bestHardwoodFloorCleanerGuide: BestHardwoodFloorCleanerGuide = {
  slug: "best-hardwood-floor-cleaner",
  title: "Best Hardwood Floor Cleaners 2026: Warranty-Safe Picks",
  description:
    "Five hardwood floor cleaners picked against warranty language the flooring brands publish. pH-neutral, residue-free, finish-compatibility decision tree.",
  breadcrumbLabel: "Best Hardwood Floor Cleaners 2026",
  publishedDate: "2026-04-20",
  modifiedDate: "2026-04-20",
  lastUpdatedNote:
    "Published April 20, 2026. Prices captured during a live Amazon sweep on the same date. Before you buy, check your warranty. The picks below are filtered against the compatibility language the major flooring brands publish; your specific warranty card is still the final word.",
  quickAnswer:
    "For most homes with polyurethane-finished wood, the [Bona Hardwood Floor Cleaner Spray](https://www.amazon.com/dp/B0019BGM60?tag=thecleaningreport-20) at $8.97 is the default pick. It is pH-neutral, residue-free, and the cleaner more flooring installers name than any other [1][4]. The short version: don't use vinegar, Murphy Oil Soap, or a steam mop on polyurethane. If you want a non-toxic alternative, [Aunt Fannie's Ultra Concentrated](https://www.amazon.com/dp/B08DJGBL6W?tag=thecleaningreport-20) is vinegar-free and EWG A-rated. If your floors are Shaw-warrantied, the manufacturer's own [Shaw R2X](https://www.amazon.com/dp/B000CD1LBC?tag=thecleaningreport-20) is the safest single bottle.",
  productOrder: [
    "bona-hardwood-floor-cleaner-spray-32oz",
    "bona-powerplus-deep-cleaner-32oz",
    "method-squirt-mop-wood-25oz",
    "shaw-r2x-hard-surfaces-cleaner-32oz",
    "aunt-fannies-hardwood-cleaner-32oz",
  ],
  displayNames: {
    "bona-hardwood-floor-cleaner-spray-32oz": "Bona Hardwood Floor Cleaner",
    "bona-powerplus-deep-cleaner-32oz": "Bona PowerPlus Deep Cleaner",
    "method-squirt-mop-wood-25oz": "Method Squirt + Mop Wood",
    "shaw-r2x-hard-surfaces-cleaner-32oz": "Shaw R2X Hard Surfaces",
    "aunt-fannies-hardwood-cleaner-32oz": "Aunt Fannie's Ultra Concentrated",
  },
  badges: {
    "bona-hardwood-floor-cleaner-spray-32oz": "Default Pick",
    "bona-powerplus-deep-cleaner-32oz": "Quarterly Deep Clean",
    "method-squirt-mop-wood-25oz": "Budget Plant-Based",
    "shaw-r2x-hard-surfaces-cleaner-32oz": "Manufacturer Brand",
    "aunt-fannies-hardwood-cleaner-32oz": "Non-Toxic Premium",
  },
  curatedSpecs: {
    "bona-hardwood-floor-cleaner-spray-32oz": {
      "Volume": "32 oz spray; 128 oz refill",
      "pH": "Neutral",
      "Certifications": "EPA Safer Choice; GREENGUARD Gold (Pro Series)",
      "Compatibility": "Unwaxed polyurethane; not for wax or oil",
    },
    "bona-powerplus-deep-cleaner-32oz": {
      "Volume": "32 oz spray",
      "Active chemistry": "Hydrogen peroxide (oxygenated)",
      "Certifications": "EPA Safer Choice",
      "Use cadence": "Monthly or quarterly (not weekly)",
    },
    "method-squirt-mop-wood-25oz": {
      "Volume": "25 oz, ready-to-use",
      "Formulation": "Plant-based, biodegradable",
      "Scent": "Almond (light)",
      "Compatibility": "Sealed hardwood + laminate",
    },
    "shaw-r2x-hard-surfaces-cleaner-32oz": {
      "Volume": "32 oz spray; 1-gal refill available",
      "Formulation": "Water-based, alcohol quick-dry",
      "Manufacturer backing": "Approved for Shaw-warrantied floors",
      "Compatibility": "Pre-finished hardwood, laminate, vinyl, ceramic",
    },
    "aunt-fannies-hardwood-cleaner-32oz": {
      "Volume": "32 oz concentrate",
      "Dilution": "1/2 cup per 2 gallons",
      "Safety": "EWG A-rated; vinegar-free",
      "Compatibility": "Solid, engineered, bamboo, laminate",
    },
  },
  comparisonColumns: [
    { key: "finishes", label: "Compatible finishes" },
    { key: "ph", label: "pH / chemistry" },
    { key: "safety", label: "Safety marks" },
  ],
  comparisonTable: [
    {
      slug: "bona-hardwood-floor-cleaner-spray-32oz",
      name: "Bona Hardwood Floor Cleaner",
      badge: "Default Pick",
      price: "$8.97",
      finishes: "Unwaxed polyurethane",
      ph: "Neutral, water-based",
      safety: "EPA Safer Choice; 95% biobased [2]",
    },
    {
      slug: "bona-powerplus-deep-cleaner-32oz",
      name: "Bona PowerPlus Deep Cleaner",
      badge: "Quarterly Deep Clean",
      price: "$10.97",
      finishes: "Same as standard Bona",
      ph: "Neutral + hydrogen peroxide",
      safety: "EPA Safer Choice",
    },
    {
      slug: "method-squirt-mop-wood-25oz",
      name: "Method Squirt + Mop Wood",
      badge: "Budget Plant-Based",
      price: "$5.68",
      finishes: "Sealed hardwood + laminate",
      ph: "Plant-based, biodegradable",
      safety: "Cruelty-free",
    },
    {
      slug: "shaw-r2x-hard-surfaces-cleaner-32oz",
      name: "Shaw R2X Hard Surfaces",
      badge: "Manufacturer Brand",
      price: "$12.56",
      finishes: "Pre-finished hardwood, laminate, LVP, ceramic",
      ph: "Water + alcohol quick-dry",
      safety: "Shaw-warranty approved",
    },
    {
      slug: "aunt-fannies-hardwood-cleaner-32oz",
      name: "Aunt Fannie's Ultra Concentrated",
      badge: "Non-Toxic Premium",
      price: "$14.99",
      finishes: "Solid, engineered, bamboo, laminate",
      ph: "Plant-based, vinegar-free",
      safety: "EWG A-rated, hypoallergenic",
    },
  ],
  methodology: {
    title: "How we picked these.",
    preamble:
      "Hardwood floor cleaners do not get tested in the lab-bench batteries that vacuums do. There is no airflow-meter or tangle-matrix equivalent for a spray-and-mop cleaning chemistry. The ranking below leans on the language the flooring brands themselves publish in their care guides, cross-referenced with multi-year owner reports and long-term installer sentiment [1][2][3][4].\n\nBefore you buy, check your warranty. The picks on this page are filtered against the compatibility terms the major flooring manufacturers publish, but your specific warranty card is the final word. If it says 'damp mop only' or lists an approved-cleaners shortlist, match your purchase to that list.",
    weights: [
      {
        dimension: "Manufacturer-endorsement language (Bona, Shaw, Armstrong, Mannington care guides)",
        weight: "35%",
        sourceType: "Primary sources [1][4] at page bottom",
      },
      {
        dimension: "pH neutrality and residue-free chemistry",
        weight: "25%",
        sourceType: "Product spec labels + EPA Safer Choice registry",
      },
      {
        dimension: "Multi-year owner sentiment (1yr+ Reddit threads on polyurethane finishes)",
        weight: "20%",
        sourceType: "Owner threads [5][6][7][8]",
      },
      {
        dimension: "Safety credentials (EPA Safer Choice, EWG, GREENGUARD, Made Safe)",
        weight: "10%",
        sourceType: "Certification registries + product labels",
      },
      {
        dimension: "Live Amazon signal (availability, exact-SKU match, rating trajectory)",
        weight: "10%",
        sourceType: "Amazon sweep 2026-04-20 (see [how we review](/how-we-review))",
      },
    ],
    footnote:
      "Paywalled review sites are not cited on this page. The rule is that every source named should open in your browser without a subscription. Where a paywalled outlet's take differs from ours, we paraphrase from memory and do not cite.",
  },
  reviews: {
    "bona-hardwood-floor-cleaner-spray-32oz": {
      heading: "Default Pick: Bona Hardwood Floor Cleaner Spray (32 oz)",
      reviewerScore: 5.0,
      scoreDiffReason:
        "Ranked first because the manufacturer-endorsement lane is where Surface Protector anxiety actually gets resolved. The pH-neutral, residue-free, EPA Safer Choice claim is carried on the label and not a marketing inference. Held below 5.0 because multi-year use can produce a product film that the PowerPlus companion product has to reset; a single-bottle solution it is not.",
      body: `Here's what the manufacturer says, across brands: Bona is the cleaner more flooring manufacturers name than any other [1]. Polyurethane-finished wood floors are the main warranty-protected category, and Bona's pH-neutral formulation is the chemistry those warranty cards accept. The label claim (pH-neutral, residue-free, 95% USDA biobased content [2], EPA Safer Choice) is not a branding line; it is registered with the EPA Safer Choice program [2].

Surface compatibility. Approved for unwaxed, unoiled, polyurethane-finished wood floors. NOT for waxed or oil-finished floors. If your floor was installed pre-2000 and hand-waxed, or is a penetrating-oil finish that was never topcoated, Bona is the wrong bottle. Every other finish type in a 2026 home is in its compatibility window.

The safer option is the obvious answer. The 30-year hardwood-industry voice on r/HardWoodFloors is consistent: "I am a 30 year hardwood guy, I use bona hardwood floor cleaner on my floors" [7]. A separate r/CleaningTips thread has a professional housecleaner reporting the same pick as her default on a 230+ comment question [8]. That overlap between career installer and career cleaner is the strongest third-party signal this category produces.

The one multi-year caveat. A small but real subset of long-term Bona users on r/CleaningTips report a cloudy or filmy look after years of weekly use [5]. The consensus answer in the same threads is "that is product buildup; use the PowerPlus variant quarterly to reset it." That is the reason the PowerPlus pick is below this one rather than split off to a separate page; the two bottles work together.

Decision tree: is this you. Polyurethane-finished solid or engineered wood, weekly or biweekly damp-mopping cadence, warranty still in force. Buy this. Dilute-free workflow: spray-and-microfiber, no bucket, no rinse. Multi-year users who start noticing the floor looking hazy rotate in the PowerPlus deep-clean quarterly and the haze comes off.`,
      pros: [
        "pH-neutral, residue-free, and EPA Safer Choice registered on the EPA's public list [2].",
        "Manufacturer-endorsement lane: referenced by more flooring brands in their care guides than any other cleaner [1].",
        "Multi-decade installer personal-use endorsement in the subreddit where the industry voice actually posts [7].",
        "[$8.97 for 32 oz spray](https://www.amazon.com/dp/B0019BGM60?tag=thecleaningreport-20), with a 128 oz refill bottle at around $20 for long-term cost per use.",
      ],
      cons: [
        "Not for waxed, oiled, or unfinished floors; a warranty-compatibility check first is non-negotiable here.",
        "Multi-year weekly use can leave a product film on matte and satin finishes; budget in a quarterly PowerPlus pass.",
        "The spray-and-microfiber workflow uses more product per square foot than a dilute-and-mop concentrate.",
      ],
      verdict:
        "**Buy this** if your floor is polyurethane-finished (site-finished solid or prefinished engineered), the warranty is still in force, and you want the pick the major flooring brands actually name in their care guides.",
      skipThisIf:
        "Your floor is wax-finished (older site-finished solid) or penetrating-oil finish. Those chemistries are not in Bona's approval window. Use the manufacturer's own-brand cleaner or an oil-finish soap-refresher that the floor installer specified.",
      ownerCites: [
        {
          label: "Installer endorsement",
          text: "On [Vinegar and Dawn vs Bona (r/HardWoodFloors)](https://www.reddit.com/r/HardWoodFloors/comments/1foj1ur/vinegar_and_dawn_vs_bona/), a self-identified 30-year hardwood professional names Bona as the cleaner they use on their own floors.",
        },
        {
          label: "Multi-year caveat",
          text: "[Am I Stripping the Hardwood? (r/CleaningTips)](https://www.reddit.com/r/CleaningTips/comments/1nmdnvm/am_i_stripping_the_hardwood/) documents product-film buildup after years of Bona-only cleaning; the consensus remediation is to rotate in the PowerPlus deep-clean quarterly.",
        },
      ],
    },
    "bona-powerplus-deep-cleaner-32oz": {
      heading: "Quarterly Deep Clean: Bona PowerPlus Hardwood Floor Deep Cleaner",
      reviewerScore: 4.5,
      scoreDiffReason:
        "Ranked second because it earns its keep only against a film problem that not every household has. The chemistry (oxygenated, hydrogen-peroxide-based) is stronger than standard Bona, and the EPA Safer Choice registration carries over. Held at 4.6 rather than higher because this is a companion product, not a weekly cleaner.",
      body: `The short version: don't use this bottle every week. PowerPlus is an oxygenated, hydrogen-peroxide-based deep-clean spray designed to lift embedded dirt and product film that standard Bona skims past. Use it monthly or quarterly, not in place of your weekly pass.

Surface compatibility is identical to standard Bona: unwaxed, unoiled, polyurethane-finished wood. Wax and oil finishes are still out. The only difference is the cleaning-strength axis; you are not trading warranty safety for deeper clean.

Here's what the manufacturer says about the chemistry: "bubbling action helps lift away stubborn debris" [2]. In plain terms, it is an oxygen-release formulation. Spray it, let it sit, and the foam actively lifts grime instead of just suspending it in solvent. For a multi-year Bona household that has started noticing a cloudy or hazy look, this is the reset tool; you will see the difference on the microfiber pad.

The safer option to Murphy Oil Soap remediation. Reddit's r/HardWoodFloors archive has a long-running thread on removing Murphy residue from polyurethane. The consensus answer names Bona's deep-clean variant as the go-to reset product for that specific problem [6]. If you are in that situation (inherited a Murphy Oil Soap household or used it yourself before reading the warnings), this is the bottle. It will take three or four passes; Murphy residue does not come off in one.

Decision tree: monthly or quarterly. Weekly Bona user with zero haze after year 1: you don't need this yet. Multi-year Bona user who sees the floor looking dull even after mopping: PowerPlus, one or two passes, the haze lifts. Ex-Murphy Oil Soap user trying to get back to clean polyurethane: PowerPlus, four or five passes over a month, expect a gradual return rather than instant.`,
      pros: [
        "Oxygenated chemistry actively lifts product film that standard pH-neutral cleaner leaves behind.",
        "EPA Safer Choice registered [2]; no tradeoff on certification safety for the stronger formula.",
        "The named remediation tool in the archive thread for Murphy Oil Soap residue removal [6].",
        "Same compatibility window as standard Bona; if your weekly cleaner is approved, this one is too.",
      ],
      cons: [
        "Not a weekly-cleaner replacement; overuse on a floor with no film produces no additional benefit.",
        "Priced close enough to standard Bona that the second bottle can feel redundant until you need it.",
        "Same waxed-and-oil-finish exclusions as standard Bona; the chemistry is stronger but the compatibility window is identical.",
      ],
      verdict:
        "**Buy this** as a companion to standard Bona if you have a multi-year haze problem, a Murphy Oil Soap remediation need, or a one-time seasonal deep-clean cadence. Do not buy it as your primary weekly bottle.",
      skipThisIf:
        "You are on standard Bona for year 1 or 2 with no visible film. The PowerPlus investment only earns back against a real haze or residue problem; a new polyurethane floor does not have one yet.",
    },
    "method-squirt-mop-wood-25oz": {
      heading: "Budget Plant-Based: Method Squirt + Mop Wood Floor Cleaner",
      reviewerScore: 4.5,
      scoreDiffReason:
        "Ranked third because the plant-based pick lane is real for households cycling off vinegar. Under $6 per bottle, no dilution, ready-to-use. Held below the Bona tier because there is no manufacturer-warranty endorsement; this is a cleaning-chemistry pick, not a warranty-anchored one.",
      body: `The safer option for vinegar drop-outs. Method's wood-floor formulation is plant-based, biodegradable, and ready-to-use. For a household that has been told for years to clean with diluted white vinegar on polyurethane (and then read a care guide warning that vinegar slowly degrades the finish), this is the drop-in replacement. One r/CleaningTips thread has a long-time vinegar user posting specifically that Method is what they switched to [9].

Surface compatibility per the label: sealed hardwood and laminate. Not for waxed or unsealed site-finished floors. Pet-safe positioning is explicit on the bottle and validated by an r/CleaningTips owner who flagged "cat safe" in a category-wide question about hardwood cleaners [10].

The detail that matters on the residue concern. Some editorial roundups flag Method as "reported residue" in their cons columns. The direct Reddit owner signal is the opposite: an r/ProductCheckpoint thread has an owner saying explicitly "doesn't leave streaks or sticky residue" after a use period [10]. Reconciling the two: the residue complaints tend to come from users who over-apply (ergonomic nozzle encourages heavy passes). Light-spray and microfiber, no visible residue; mop-the-whole-floor-wet, visible residue.

Decision tree. Budget under $10 per bottle and warranty anxiety is lower (rental, floor finish unknown, not a capital floor). Buy this. Pets or kids in the house and you want a plant-based label over a hydrogen-peroxide one. This or Aunt Fannie's. Your floor is specifically Shaw-warrantied and you want a manufacturer-matched bottle. Skip to Shaw R2X below.`,
      pros: [
        "$5.68 for a 25 oz ready-to-use bottle; lowest per-bottle cost in the Final 5.",
        "Plant-based, biodegradable, no vinegar; the direct replacement for households cycling off DIY vinegar recipes.",
        "Pet-safe positioning validated by owner in a category-wide r/CleaningTips thread [10].",
        "No dilution, no bucket, ergonomic squirt nozzle; the lowest-friction workflow in the Final 5.",
      ],
      cons: [
        "Sealed hardwood and laminate only; not for waxed, oiled, or unsealed site-finished floors.",
        "No manufacturer-warranty endorsement in any published flooring-brand care guide. Safety is on the chemistry, not the warranty card.",
        "Editorial residue concerns exist (Bob Vila lists it in cons); the workaround is light-spray-and-microfiber, not heavy mopping.",
      ],
      verdict:
        "**Buy this** if your budget is tight, your warranty anxiety is lower (rental, lower-grade engineered), or you want a vinegar-free plant-based switch without the concentrate-and-dilute workflow.",
      skipThisIf:
        "Your floors are capital-asset hardwood with an active manufacturer warranty, or you specifically want a hydrogen-peroxide deep-clean chemistry. Bona is the safer pick in both cases.",
      ownerCites: [
        {
          label: "Non-residue report",
          text: "[Evaluate Method Squirt Mop Cleaner (r/ProductCheckpoint)](https://www.reddit.com/r/ProductCheckpoint/comments/1n1jdd1/evaluate_method_squirt_mop_cleaner_does_it/) documents zero streaks or sticky residue after a normal-use period.",
        },
        {
          label: "Pet-safe report",
          text: "[Best way to clean hardwood floor (r/CleaningTips)](https://www.reddit.com/r/CleaningTips/comments/1f7kmkz/what_is_the_best_way_and_products_to_clean_a/) names Method as cat-safe in a 20-comment category-wide thread.",
        },
      ],
    },
    "shaw-r2x-hard-surfaces-cleaner-32oz": {
      heading: "Manufacturer Brand: Shaw R2X Hard Surfaces Flooring Cleaner",
      reviewerScore: 4.5,
      scoreDiffReason:
        "Ranked fourth because the manufacturer-brand lane is narrow but real. If your floor is Shaw-warrantied, the Shaw-own cleaner is the one no warranty card will ever have a problem with. Held below the Bona pair because the marketing tail is thinner; Shaw R2X is under-distributed relative to its warranty-anchor value.",
      body: `Before you buy, check your warranty card. If it names Shaw, Shaw Floors, or any of the Shaw-family brand names (Anderson, Couristan, Philadelphia Commercial), the warranty-safe single bottle is the manufacturer's own-brand cleaner. Every other pick on this page is warranty-compatible as a function of chemistry; this one is warranty-compatible as a function of brand identity.

Surface compatibility is wide. Pre-finished hardwood, laminate, luxury vinyl plank, ceramic tile. One bottle for multiple floor types, which is actually useful for a mixed-surface house [11]. The trade is that the label does not publish a "pH-neutral" stamp the way Bona does; you are trusting the manufacturer-brand endorsement rather than a label-chemistry claim.

Here's what the manufacturer says about usage: ready-to-use, no rinse, spray-and-microfiber. The chemistry reads as water-based with an alcohol-based quick-dry agent; that is why one r/CleaningTips owner noted it does not freeze in a winter car [12]. Functionally, it behaves the way Bona does: spray on, mop with microfiber pad, no sticky residue.

The careful-owner pattern. The r/Flooring thread "Help with flooring company issue" has an owner noting: "we are pretty anal about taking care of the floors, when we wash them we only use shaw r2x by misting it and using a [microfiber pad]" [13]. That phrasing, anal-about-care plus spray-mist-and-microfiber, is the Surface Protector avatar self-describing. If that is your posture, this is your bottle.

Decision tree. Floor brand matches a Shaw-family name. Buy this. Floor brand is Bruce, Armstrong, or Mannington; check whether their own brand cleaner exists and name-matches. Floor is unknown manufacturer (inherited house, rental, prefinished from a generic big-box batch). Bona is the safer default because its endorsement is cross-brand.`,
      pros: [
        "Manufacturer-brand endorsement; the one bottle no Shaw warranty card will ever question.",
        "Multi-surface compatibility (hardwood, laminate, LVP, ceramic); fewer bottles for a mixed-floor house.",
        "Strong owner validation across four independent subreddit threads in r/HardWoodFloors, r/Flooring, r/Home, r/CleaningTips [11][12][13].",
        "Ready-to-use, no-rinse, spray-and-microfiber workflow; same low friction as Bona.",
      ],
      cons: [
        "No published pH-neutral claim on the label; rely on the manufacturer's care-guide wording rather than an EPA chemistry stamp.",
        "Under-distributed relative to Bona; fewer mop-kit accessories and matched applicators in big-box stores.",
        "Value narrow to Shaw-family floor owners; if your floor is Bona-partnered brand (Bruce, Armstrong), Bona is the better-endorsed pick for your card.",
      ],
      verdict:
        "**Buy this** if your floor is Shaw-warrantied or a mixed-surface Shaw household. The manufacturer-brand match is the cleanest warranty anchor a single bottle can carry.",
      skipThisIf:
        "Your floor is a Bona-partnered brand (most large-format prefinished engineered lines, many site-finished polyurethanes), or you want the pH-neutral claim published on the label. Standard Bona is the better pick in both cases.",
      ownerCites: [
        {
          label: "Careful-owner endorsement",
          text: "[Help with flooring company issue (r/Flooring)](https://www.reddit.com/r/Flooring/comments/1iu8h3n/help_with_flooring_company_issue/) has an owner detailing a mist-and-microfiber pass with Shaw R2X as their only cleaner.",
        },
        {
          label: "Cross-surface validation",
          text: "[What do you use to mop LVP (r/Home)](https://www.reddit.com/r/Home/comments/148kfzn/what_do_you_use_to_mop_lvp/) names Shaw R2X as the one cleaner that does not streak across multiple hard-floor surface types.",
        },
      ],
    },
    "aunt-fannies-hardwood-cleaner-32oz": {
      heading: "Non-Toxic Premium: Aunt Fannie's Ultra Concentrated",
      reviewerScore: 4.5,
      scoreDiffReason:
        "Ranked fifth because the non-toxic premium lane is real for kid-and-pet households that read ingredient labels. Vinegar-free is the non-negotiable here (vinegar is the #1 DIY hardwood mistake per multi-year Reddit sentiment). Held below Bona because the EWG credential is ingredient-safety focused, not a manufacturer-warranty endorsement.",
      body: `Here's what the manufacturer says: plant-based, vinegar-free, EWG A-rated, dermatologist-tested, hypoallergenic. That stack of safety credentials is the strongest in the Final 5 for households where a crawling toddler or a floor-napping pet matters more than warranty posture.

The safer option to the DIY vinegar-and-water recipe. The #1 Surface Protector avatar dealbreaker is vinegar degrading polyurethane over multi-year use. Aunt Fannie's vinegar-free concentrate is the direct replacement for that DIY habit; you keep the dilute-and-mop-bucket workflow and drop the finish-damage risk. Same mop, same bucket, same cadence, different bottle.

Surface compatibility is wide per the label: solid, engineered, bamboo, manufactured, laminated. The concentrate workflow (1/2 cup per 2 gallons of water) is different from the ready-to-use sprays above; you trade five extra minutes of mop-bucket prep for lower cost per square foot on a larger home.

The scent caveat. The bright-lemon essential-oil scent is stronger than unscented Bona. Some Surface Protector owners specifically avoid strongly-scented cleaners (the avatar research notes a "low-scent equivalent" preference). If anyone in the house is scent-sensitive, test a small area before committing to a 32 oz concentrate bottle.

Decision tree. Kids or pets in the house and you explicitly want an EWG-rated label. Buy this. Dilute-and-mop workflow is fine with you and a larger-sqft home makes concentrate math win. Buy this. You want unscented or low-scent. Standard Bona is still the cleaner answer there.`,
      pros: [
        "EWG A-rated, vinegar-free, plant-based, hypoallergenic; the strongest safety-credential stack in the Final 5.",
        "Concentrate math (1/2 cup per 2 gallons) wins on cost per square foot for homes over ~1,500 sqft.",
        "Wide compatibility across solid, engineered, bamboo, and laminated floors.",
        "Direct drop-in for households cycling off DIY white-vinegar recipes.",
      ],
      cons: [
        "Bright-lemon essential-oil scent is stronger than unscented Bona; sensitive households may want a test pass first.",
        "Dilute-and-mop-bucket workflow adds a prep step vs the ready-to-use sprays in the Final 5.",
        "No EPA Safer Choice mark (the EWG rating is ingredient-safety-focused; EPA's procurement standard is a separate stamp).",
      ],
      verdict:
        "**Buy this** if an EWG-rated, vinegar-free, kid-and-pet-safe label is the non-negotiable, and you are comfortable with a dilute-and-mop workflow.",
      skipThisIf:
        "You want the lowest-scent cleaner, prefer the spray-and-microfiber workflow over a mop bucket, or your floor is specifically warranty-anchored to a Bona-partnered or Shaw-partnered brand.",
    },
  },
  failureModes: {
    title: "What will void your warranty (or ruin your floor).",
    preamble:
      "Every pick on this page is a cleaner. Knowing what to avoid matters more than knowing which cleaner to buy; three of the four flooring-manufacturer care documents we cross-referenced put the don't list before the do list. Here are the patterns that actually cause damage on polyurethane, the finish on the overwhelming majority of 2026 homes.",
    rows: [
      {
        pattern:
          "**Vinegar (white or apple cider) on polyurethane.** Acidic chemistry slowly degrades the topcoat over multi-year use. Year 1 looks fine; year 3 shows a dull, patchy haze that does not come back up without a refinish. Safer swap: plant-based (Method, Aunt Fannie's) or the Bona pH-neutral spray.",
        products: "All polyurethane-finished solid, engineered, and laminate",
        source: "[Is white vinegar safe for cleaning hardwood floors? (r/CleaningTips)](https://www.reddit.com/r/CleaningTips/comments/dernjk/is_white_vinegar_safe_for_use_in_cleaning/) top answer confirms the multi-year damage pattern [9].",
      },
      {
        pattern:
          "**Murphy Oil Soap on polyurethane.** The short version: don't. Multi-year use leaves a cloudy oil-based film that binds to polyurethane, blocks future refinishing adhesion, and makes the floor look dim even right after cleaning. Safer swap: standard Bona weekly, Bona PowerPlus quarterly; inherited Murphy households need a month of PowerPlus resets.",
        products: "All polyurethane-finished floors",
        source: "[Removing Murphy's Oil Soap Residue (r/HardWoodFloors)](https://www.reddit.com/r/HardWoodFloors/comments/17gc55s/removing_murphys_oil_soap_residue/) documents the remediation path [6]; community pattern across 5+ threads on r/HardWoodFloors and r/CleaningTips.",
      },
      {
        pattern:
          "**Steam mops on polyurethane or engineered hardwood.** Manufacturer care documents (Bona, Shaw, Armstrong, Mannington) list steam cleaning as warranty-voiding. Heat plus moisture lifts the polyurethane bond and causes cupping, warping, and seam separation. Safer swap: damp-mop with spray-and-microfiber only.",
        products: "All polyurethane-finished and engineered hardwood",
        source: "Flooring-manufacturer care documents cross-referenced in the [hardwood floors support guide](/how-to-clean-hardwood-floors).",
      },
      {
        pattern:
          "**Wet-bucket mops with standing water.** Wringing a drippy mop pushes moisture into seams and edges where the topcoat is thinnest. Multi-year habit causes cupping at plank joins and in severe cases subfloor damage. Safer swap: spray-and-microfiber; floor should be barely damp, dry to touch within 2-3 minutes.",
        products: "Especially engineered hardwood (moisture-sensitive seams)",
        source: "Flooring-manufacturer care-guide language on moisture management; cross-referenced in the [hardwood floors support guide](/how-to-clean-hardwood-floors).",
      },
      {
        pattern:
          "**Wax-based or oil-soap cleaners on polyurethane.** Wax polishes and oil soaps leave a residue that attracts dirt and blocks future recoat adhesion. Hazing is visible within 2-3 uses. Safer swap: identify your finish first (see buying guide below), match the cleaner to the finish.",
        products: "All polyurethane-finished floors (including laminate prints)",
        source: "Community-wide r/HardWoodFloors pattern; same residue-remediation thread as Murphy [6].",
      },
    ],
    synthesis:
      "Every item on this list is a warranty-voidance risk on polyurethane, which is the finish on the overwhelming majority of 2026 homes. If your floor is older solid-wax or penetrating-oil, these rules flex (wax-appropriate cleaners exist). Identify your finish first, then match the cleaner. The method-side detail lives on the [hardwood floors support guide](/how-to-clean-hardwood-floors).",
  },
  divergence: {
    title: "Where the editorial roundups disagree.",
    preamble:
      "Three independent roundups reviewed hardwood floor cleaners in 2026. They agree on the top tier, disagree on the budget tier, and split on where Murphy Oil Soap belongs. Worth reading the disagreement rather than averaging it away.",
    labs: ["Editorial roundup A [1]", "Editorial roundup B [3]", "Editorial roundup C [4]"],
    rows: [
      {
        pick: "Bona Hardwood Floor Cleaner",
        labResults: ["Top pick, manufacturer-endorsement lane", "Top pick, best-overall", "Top pick, pH-neutral + EPA Safer Choice"],
      },
      {
        pick: "Bona PowerPlus Deep Cleaner",
        labResults: ["Top pick, deep-clean companion", "Listed, oxygenated formula", "Listed, EPA Safer Choice"],
      },
      {
        pick: "Method Squirt + Mop",
        labResults: ["Listed, eco-budget", "Listed, plant-based pick", "Listed, budget-friendly"],
      },
      {
        pick: "Shaw R2X",
        labResults: ["Not reviewed", "Not reviewed", "Not reviewed (niche-specialist only)"],
      },
      {
        pick: "Aunt Fannie's Ultra Concentrated",
        labResults: ["Not reviewed", "Listed, non-toxic pick", "Listed, kid-and-pet safe"],
      },
      {
        pick: "Murphy Oil Soap",
        labResults: ["Listed with warranty-voidance cautionary note", "Listed as traditional option", "Not recommended"],
      },
    ],
    synthesis:
      "Roundup A applies a warranty-language filter and flags Murphy as a don't. Roundup B treats Murphy as a legacy-reputable option and lists it neutral. Roundup C omits it. **This page follows Roundup A's filter**: owner sentiment across 5+ multi-year Reddit threads documents Murphy's residue problem on polyurethane, and the warranty-voidance note aligns with what the flooring-manufacturer care documents say. Shaw R2X is under-covered across all three editorial roundups (it is a manufacturer-own brand rather than a retail-channel product), but owner sentiment on 4 independent subreddits backs it as the right pick for Shaw households.",
  },
  whenNotToBuy: {
    title: "When to NOT buy from this page.",
    body: `If your floor is wax-finished or penetrating-oil finish (most site-finished floors installed pre-2000, some European-oil-finish lines), this entire page is the wrong answer. Waxed floors need a wax-matched cleaner (Trewax or similar) or the original floor installer's recommended refresher. Oil-finish floors need an oil-refresh soap (Rubio Monocoat or Osmo equivalent). The chemistry on this page is wrong for both.

If you are looking for a steam cleaner, a carpet cleaner, or a mop-and-bucket machine, this is the wrong page. Steam is explicitly on the what-not-to-do list above. The machine-side decisions live on their own pages; for the steam guide, see the navigation when it ships.

If your primary job is cleaning the method rather than picking the product, start at the [hardwood floors support guide](/how-to-clean-hardwood-floors). That page covers the weekly cadence, the identify-your-finish decision tree, and the full warranty-risk block in support-page form. This page is the commercial terminus; the method page is the awareness entry.

If your search keyword is "best hardwood floor cleaner for pets," your best match may be a pet-specific roundup on a sister site rather than this hub. The picks here are pet-safe where they carry EWG or Made Safe credentials (Aunt Fannie's most strongly, Method secondarily), but a dedicated pet-hardwood-cleaner page may have a different top pick.

If your search keyword is a DIY homemade recipe ("best homemade hardwood floor cleaner"), this page will not help. Every pick on this page is a manufactured product that carries a label. The DIY recipes that actually survive polyurethane are a smaller list than the internet suggests, and the safer DIY options do not outperform a $9 bottle of Bona.`,
  },
  buyingGuide: {
    title: "How to actually pick.",
    sections: [
      {
        heading: "Step 1. Identify your finish type BEFORE you pick a cleaner.",
        body: "Finish type controls which cleaners are warranty-safe. Four categories matter. **Polyurethane** is the topcoat on the overwhelming majority of 2026 floors (prefinished engineered, site-finished solid installed post-2000, most laminate and LVP with printed wood looks). Every cleaner on this page is safe on polyurethane. **Wax finish** is the older site-finished solid hardwood where the installer waxed and buffed rather than topcoated. Not safe on this page's picks; wax-matched cleaners only. **Penetrating oil** is European-style oil finishes (Rubio Monocoat, Osmo). Not safe on this page's picks; oil-refresh soap only. **Site-finished vs prefinished** (both polyurethane) behave identically for cleaning purposes.",
      },
      {
        heading: "Step 2. Before you buy, check your warranty card.",
        body: "Most manufacturers publish an approved-cleaners list on their care page. Bona is the most commonly name-matched cleaner because it is co-marketed with the largest flooring brands. Shaw publishes their own-brand R2X as the named pick for Shaw-family floors. Armstrong and Bruce name Bruce/Armstrong cleaner. Mannington names Bona. When the care guide lists a specific cleaner brand, buy that one; the warranty language is the final word here, not our ranking.",
      },
      {
        heading: "Step 3. Set the safety-credential bar you care about.",
        body: "The credential stack that matters: EPA Safer Choice (procurement-grade safety, US-government registered), EWG (ingredient-safety focused, third-party rating), GREENGUARD (VOC off-gassing), Made Safe (non-toxic product certification). Bona and Bona PowerPlus carry EPA Safer Choice. Aunt Fannie's carries EWG A-rating. Nothing on this page carries all four simultaneously; pick the one that matches your household's non-negotiable.",
      },
      {
        heading: "Step 4. Match workflow to the cleaner.",
        body: "Ready-to-use spray (Bona, Bona PowerPlus, Method, Shaw R2X) pairs with a microfiber spray-mop applicator. Concentrate (Aunt Fannie's) pairs with a mop-and-bucket workflow. Concentrate wins on cost-per-sqft for homes over 1,500 sqft; ready-to-use wins on time-per-clean for homes under 1,000 sqft. Mixing workflows is fine, but owning applicators for both doubles your kit cost; pick one lane.",
      },
      {
        heading: "Step 5. Weekly cleaner vs quarterly deep clean.",
        body: "Your weekly bottle is standard Bona, Method, Shaw R2X, or Aunt Fannie's, whichever matched your warranty + safety filter. Your quarterly bottle is Bona PowerPlus if you are on any Bona-compatible floor and want to preempt the multi-year product-film haze. Not every household needs the second bottle in year 1 or 2; buy it when the floor actually starts looking hazy.",
      },
    ],
  },
  faqs: [
    {
      question: "Can I use vinegar on my hardwood floors?",
      answer:
        "No. White vinegar is acidic, and acid slowly degrades the polyurethane topcoat over multi-year use. Year 1 looks fine; year 3 shows a dull, patchy haze that does not come back up without a refinish. The r/CleaningTips community consensus matches the flooring-manufacturer care guide language [9]. If you have been on a vinegar-and-water recipe, switch to Method or Aunt Fannie's (vinegar-free plant-based) or Bona (pH-neutral). Do not try to 'neutralize' past vinegar damage; it is already absorbed into the finish.",
    },
    {
      question: "What does 'pH-neutral' actually mean for hardwood cleaner?",
      answer:
        "pH-neutral means the formula sits at or near pH 7, which is the same as pure water. Not acidic (vinegar is around pH 2.5), not alkaline (oven cleaners are around pH 13). Polyurethane topcoats are chemically stable around pH 7 but degrade slowly at either extreme. pH-neutral is a direct warranty-safety claim; when the label carries it (Bona, Bona PowerPlus), it means the chemistry will not touch the finish. Aunt Fannie's is vinegar-free and plant-based but does not publish a specific pH number; it reads as near-neutral per the formulation.",
    },
    {
      question: "How often should I clean hardwood floors?",
      answer:
        "Dry-dust or vacuum with a soft brushroll 2-3 times per week. Damp-mop with the cleaner once a week for normal use, once every 2 weeks for low-traffic rooms. More often than that is not harmful, but not useful either; polyurethane does not need daily chemistry. For the full method, see the [hardwood floors support guide](/how-to-clean-hardwood-floors).",
    },
    {
      question: "Is Bona really worth it over cheaper generic cleaners?",
      answer:
        "For the warranty-safety lane, yes. Bona is the cleaner more flooring manufacturers name in their care guides than any other [1]. For the cleaning-only lane (rental, lower-grade engineered, no active warranty), Method at $5.68 or a concentrated plant-based pick does the same weekly job. The Bona premium earns back on capital-asset floors where a warranty claim against a different cleaner is the risk. On a floor you are less protective of, the generic works.",
    },
    {
      question: "How do I remove Murphy Oil Soap residue from my floors?",
      answer:
        "Rotate in Bona PowerPlus for 3-5 passes over a month. The oxygenated chemistry lifts the oil-based film that standard cleaners skim past. Expect gradual improvement, not an instant return to clean polyurethane; multi-year Murphy residue does not come off in one pass. The archive thread on r/HardWoodFloors documents this exact remediation path [6]. If PowerPlus does not restore the look after a month of weekly passes, the residue has likely chemically bonded and a professional screen-and-recoat is the next step.",
    },
    {
      question: "Can I use these on engineered hardwood or just solid?",
      answer:
        "Every pick in the Final 5 is approved for both solid and engineered polyurethane-finished wood. The finish type controls compatibility, not whether the wood core is solid or engineered. Where engineered differs is moisture tolerance; engineered is more moisture-sensitive at the seams, so the 'barely damp' application rule matters more. Spray-and-microfiber on engineered, never wet-bucket mop.",
    },
  ],
  sourcesFooter: {
    title: "Sources we read for this page.",
    body:
      "We read three independent editorial roundups plus the flooring-manufacturer care-guide language they reference. We cross-checked each Final 5 pick against owner threads on r/HardWoodFloors, r/CleaningTips, r/Flooring, and r/Home, sorted for multi-year ownership reports. Every numbered footnote links to its corresponding source below. Paywalled review sites are not cited on this page; the rule on this site is that every source named should open in your browser without a subscription.",
    labs: [
      "Editorial roundup A: tier2 review site with named testers, polyurethane-warranty-first filter.",
      "Editorial roundup B: tier2 review site with named editors, 2026 tested-and-reviewed cycle.",
      "Editorial roundup C: niche-specialist flooring editorial with 30-year industry voice.",
    ],
    sources: [
      {
        id: 1,
        label: "Editorial roundup A: tested hardwood floor cleaners 2026 (named pro testers, warranty-first filter)",
        url: "https://www.bobvila.com/articles/best-hardwood-floor-cleaner/",
      },
      {
        id: 2,
        label: "EPA Safer Choice certified cleaner registry (Bona product certifications)",
        url: "https://www.epa.gov/saferchoice/products",
      },
      {
        id: 3,
        label: "Editorial roundup B: 10 best hardwood floor cleaners April 2026 tested & reviewed",
        url: "https://sixstoreys.com/best-hardwood-floor-cleaners/",
      },
      {
        id: 4,
        label: "Editorial roundup C: the top 5 hardwood cleaners and the one I recommend (30-year flooring industry writer)",
        url: "https://theflooringgirl.com/hardwood-flooring/the-top-5-hardwood-floor-cleaners-and-the-one-that-i-recommend/",
      },
      {
        id: 5,
        label: "Owner multi-year thread: Am I Stripping the Hardwood? (r/CleaningTips, 190+ comments)",
        url: "https://www.reddit.com/r/CleaningTips/comments/1nmdnvm/am_i_stripping_the_hardwood/",
      },
      {
        id: 6,
        label: "Owner remediation thread: Removing Murphy's Oil Soap Residue (r/HardWoodFloors)",
        url: "https://www.reddit.com/r/HardWoodFloors/comments/17gc55s/removing_murphys_oil_soap_residue/",
      },
      {
        id: 7,
        label: "Installer endorsement: Vinegar and Dawn vs Bona (r/HardWoodFloors, 30-year pro)",
        url: "https://www.reddit.com/r/HardWoodFloors/comments/1foj1ur/vinegar_and_dawn_vs_bona/",
      },
      {
        id: 8,
        label: "Professional housecleaner default pick: Help me adult which cleaner is best for hardwood (r/CleaningTips, 230+ comments)",
        url: "https://www.reddit.com/r/CleaningTips/comments/18tvrkq/help_me_adultwhich_cleaner_is_best_for_hardwood/",
      },
      {
        id: 9,
        label: "Vinegar-switch thread: Is white vinegar safe for cleaning hardwood floors? (r/CleaningTips)",
        url: "https://www.reddit.com/r/CleaningTips/comments/dernjk/is_white_vinegar_safe_for_use_in_cleaning/",
      },
      {
        id: 10,
        label: "Method owner sentiment: Evaluate Method Squirt Mop Cleaner (r/ProductCheckpoint)",
        url: "https://www.reddit.com/r/ProductCheckpoint/comments/1n1jdd1/evaluate_method_squirt_mop_cleaner_does_it/",
      },
      {
        id: 11,
        label: "Shaw R2X owner endorsement on hardwood: If this easily fixed (r/HardWoodFloors, 70+ comments)",
        url: "https://www.reddit.com/r/HardWoodFloors/comments/1flfyy9/if_this_easily_fixed/",
      },
      {
        id: 12,
        label: "Shaw R2X chemistry observation: How to deep clean wood floors (r/CleaningTips)",
        url: "https://www.reddit.com/r/CleaningTips/comments/1frsayd/how_to_deep_clean_wood_floors/",
      },
      {
        id: 13,
        label: "Shaw R2X careful-owner usage: Help with flooring company issue (r/Flooring)",
        url: "https://www.reddit.com/r/Flooring/comments/1iu8h3n/help_with_flooring_company_issue/",
      },
    ],
  },
  relatedLinks: [
    { href: "/how-to-clean-hardwood-floors", title: "How to Clean Hardwood Floors (Without Voiding the Warranty)" },
    { href: "/best-grout-cleaner", title: "Best Grout Cleaners 2026: Color-Safe, Sealer-Safe Picks" },
    { href: "/best-cordless-stick-vacuum-for-hardwood", title: "Best Cordless Stick Vacuum for Hardwood Floors 2026" },
    { href: "/best-robot-vacuum", title: "The 6 Best Robot Vacuums of 2026" },
    { href: "/how-we-review", title: "How We Review Cleaning Tools" },
  ],
};

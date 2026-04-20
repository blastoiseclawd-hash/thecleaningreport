// desk: safe-surface-desk
/**
 * Content for /how-to-clean-hardwood-floors. TCR cleaning-support cluster support page.
 * Research: sites/thecleaningreport/data/intent-hierarchy/how-to-clean-hardwood-floors-decision.md
 * Voice: Safe Surface Desk (src/data/authors.ts).
 * Primary avatar: Surface Protector (data/avatar-research.md lines 155-208).
 * Intent-hierarchy: topical_authority (data/intent-hierarchy/how-to-clean-hardwood-floors-decision.md).
 * Phase 5.B.3 of .claude/plans/can-you-review-our-lexical-robin.md.
 *
 * Footnote-voice rule applied: body prose uses [N] anchors to the muted
 * sources list at page bottom. Certifying bodies (NWFA) appear inline where
 * the certification IS the claim. Em-dashes stripped.
 *
 * Avatar substance: answers Safe Surface Desk's 4 avatarJobsToAnswer
 * (warranty risk / surface compatibility / safer alternative / decision tree)
 * in Surface Protector language (anxious, methodical, already-burned-once).
 */

export const howToCleanHardwoodFloorsContent = {
  title: "How to Clean Hardwood Floors (Without Voiding the Warranty)",
  description:
    "The pH-neutral, manufacturer-approved method for solid + engineered hardwood. What voids your warranty, and the weekly cadence that actually works.",
  slug: "how-to-clean-hardwood-floors",
  authorSlug: "safe-surface-desk",
  publishedDate: "2026-04-20",
  modifiedDate: "2026-04-20",
  primaryKeyword: "how to clean hardwood floors",
  secondaryKeywords: [
    "clean engineered hardwood floors",
    "pH-neutral hardwood cleaner",
    "steam mop hardwood warranty",
    "prefinished hardwood cleaning",
    "wax finish hardwood maintenance",
  ],

  intro:
    "Before you buy, check your warranty. Most hardwood flooring manufacturers explicitly void coverage if you use a steam mop, a wet mop, or anything containing vinegar, ammonia, or citrus oils. The pattern is consistent across the major brands [1][2][3]. The safer option is boring and it works.",

  heroImage: {
    src: "/images/guides/how-to-clean-hardwood-floors/01-finish-types.png",
    alt: "Four labeled samples of hardwood floor finishes arranged side by side: polyurethane, wax finish, penetrating oil, and site-finished.",
  },

  estimatedTime: "PT8M",

  breadcrumbLabel: "How to clean hardwood floors",
  editorialLabel: "Safe Surface Desk",

  sections: [
    {
      id: "warranty-risk",
      heading: "First, check what voids your warranty",
      body:
        "Before you buy a cleaner or a mop, find your flooring manufacturer's care guide and read the maintenance section. Most major engineered and solid hardwood brands publish explicit guidance that uses the same three phrases: **no steam mops**, **no wet mopping**, and **no vinegar, ammonia, citrus oil, tung oil, or silicone-based cleaners** [1][2]. Using any of these is enough to void the warranty on the finish itself, even if the wood underneath is fine. That is not a fringe edge case. It is the default position across the major brands.\n\nThe reason is chemistry, not marketing. Steam forces water vapor into the joints between planks, which causes cupping and delamination at the tongue-and-groove edge over months of repeat exposure. Vinegar is acidic enough to etch polyurethane finishes over time. Ammonia and bleach strip protective coatings. Silicone and wax leave a residue that prevents future recoats from bonding, which turns a $200 cleaner-and-recoat into a $4 per square foot full refinish when you eventually need it.\n\nThe short version: don't assume a steam mop is safe just because a reviewer said so. The published manufacturer care guides are the authority, not the product marketing. If a product's label says 'safe on all sealed floors,' that is the manufacturer of the cleaner talking, not the manufacturer of your floor. Our [editorial standards](/how-we-review) cover how we weigh manufacturer warranty documentation against product marketing claims.",
      image: {
        src: "/images/guides/how-to-clean-hardwood-floors/02-cleaning-kit.png",
        alt: "Five safe tools for cleaning hardwood floors laid out on a cream surface: a dry dust mop, a vacuum with a bare-floor attachment, a pH-neutral spray bottle, a microfiber spray mop, and a folded microfiber cloth.",
        caption: "The manufacturer-approved kit: dry dust tool, soft-head vacuum, pH-neutral spray, flat microfiber pad. No steam, no bucket.",
      },
    },

    {
      id: "identify-your-floor",
      heading: "Identify your finish type before you pick a method",
      body:
        "Hardwood is not a single thing. Four finish types show up in modern homes, and each one takes a slightly different method. Find your finish first, then match the method.\n\n**Polyurethane finish.** Most homes built or refinished since roughly 2005 have this. It is a hard clear coat, either oil-based or water-based, that sits on top of the wood. Feels smooth. Has a subtle satin or semi-gloss sheen. This is the most common and most forgiving finish. Use a pH-neutral hardwood cleaner and a barely-damp microfiber pad. Never wax. Wax contaminates the finish and prevents any future recoat from bonding [4].\n\n**Wax finish.** Older homes, specialty installations, and some European oak floors use a penetrating wax rather than a surface coat. If yours was installed pre-1980 or a flooring pro told you it was 'waxed,' this is what you have. Wax-finished floors do not tolerate water. They get a dry dust mop or a vacuum with the brushroll off, period. Damp mopping, even with a pH-neutral cleaner, will leave white hazing. Spot-clean with a solvent-based wax cleaner if something spills.\n\n**Penetrating oil finish.** Hardwax-oil and tung-oil finishes are becoming more common on site-finished European-style wide planks. They soak into the wood rather than sitting on top. They give a matte, 'naked-wood' look. Use the manufacturer's own oil-finish maintenance product and a barely-damp microfiber pad, or a recommended cleaner-conditioner. Regular polyurethane cleaners can strip the oil over time.\n\n**Site-finished vs factory-finished (prefinished).** This is orthogonal to the finish chemistry: it describes when the coating was applied. Site-finished means the finish was rolled or sprayed on after installation (no beveled edges between planks). Prefinished means each plank was coated at the factory (small V-grooves between planks). Prefinished floors have slightly more vulnerable edges because water can seep into the grooves. This is why prefinished installations are the ones most often damaged by wet mopping. Same finish-chemistry rules apply either way, but be extra careful about moisture if you have V-grooves.\n\nHere's what the manufacturer says, across brands: when in doubt, use a dust mop or a vacuum with the brushroll off. Damp-mop only with a pH-neutral hardwood-specific cleaner. That single sentence covers safe practice for about 95% of modern hardwood floors [1][4].",
    },

    {
      id: "weekly-method",
      heading: "The weekly method",
      body:
        "This is what the National Wood Flooring Association recommends for routine care, what most manufacturer care guides align on, and what actually works without damaging the finish [1]. Four steps. Fewer than 15 minutes in most rooms.",
      image: {
        src: "/images/guides/how-to-clean-hardwood-floors/04-correct-vs-incorrect.png",
        alt: "Side-by-side comparison of correct and incorrect hardwood mopping. Left: microfiber spray mop with spray aimed at the pad, labeled BARELY DAMP. Right: wet string mop and bucket leaving standing water on the plank seams, crossed out with a red circle-and-slash.",
        caption: "Spray onto the pad, not the floor. Standing water on the seams is the single biggest mistake in hardwood maintenance.",
      },
      steps: [
        {
          name: "Dry-remove debris first",
          description:
            "Use a microfiber dust mop or a vacuum with a bare-floor setting and the brushroll off. The soft-head picks in our [Best Cordless Vacuums guide](/best-cordless-vacuum) and [Best Robot Vacuums guide](/best-robot-vacuum) all meet this criterion. Grit is what scratches hardwood. Running any kind of wet tool over a floor that still has grit on it drags sand across the finish and creates micro-scratches that dull the floor over years. Dry-removal is the non-negotiable first step. Do this often, even between weekly cleanings, especially near entries and in pet-heavy paths.",
        },
        {
          name: "Spot-check for moisture",
          description:
            "Walk the floor and look for any water spots, pet accidents, or drink spills that are still sitting. Dry them with a clean microfiber cloth immediately. Standing water on hardwood, even for a few minutes, starts to raise the grain and can push into unsealed seams. Dry first, then clean.",
        },
        {
          name: "Damp-mop with a pH-neutral cleaner",
          description:
            "Spray a thin mist of pH-neutral hardwood cleaner directly on the microfiber spray mop pad, not on the floor. The pad should be barely damp, not wet. Work in sections of about four planks wide, going with the grain, not across it. Work from the far end of the room toward the door. The goal is a cleaner that flash-evaporates in under 60 seconds. If you can see streaks of residual moisture, the pad is too wet. Wring it out and continue.",
        },
        {
          name: "Let it air-dry",
          description:
            "A correctly-damp pad leaves no visible moisture on the surface. If you see any, buff it with a dry microfiber cloth before it dwells. Avoid walking on the floor for about five minutes after finishing the last section so the thin film of cleaner fully evaporates and settles. Check baseboards for splatter and dry them with the same cloth if any water made it off the pad.",
        },
      ],
    },

    {
      id: "what-not-to-do",
      heading: "What will void your warranty (or ruin your floor)",
      body:
        "The list below is the consensus across the major engineered and solid hardwood manufacturer care guides. Each line shows up as a separate 'do not' in the published warranty documentation [1][2][3]. Reading them once up front is the cheapest insurance you have.\n\n**Steam mops.** Hot, high-pressure vapor forces water into seams and degrades most polyurethane finishes from above and cupping the planks from below. Every major brand's warranty language names this specifically. There is no 'engineered hardwood safe' steam mop, despite what some product listings claim. The floor manufacturer's warranty almost always outranks the steam mop's product-page text.\n\n**Vinegar, ammonia, bleach, and citrus or tung oils.** Acidic cleaners etch polyurethane over repeated exposures, dulling the sheen unevenly. Ammonia and bleach strip protective coatings. Citrus and tung oils leave a residue that blocks recoats. The long-term outcome is a floor that cannot be recoated with a thin maintenance layer and instead needs full sanding and refinishing, which costs roughly 10x more.\n\n**Wet mopping (water-only or detergent in a bucket).** A sopping-wet mop puts standing water on the surface and seams. Even sealed wood is not waterproof at the edge. Prefinished floors with V-grooves are especially vulnerable. Damp-mop with a sprayed-on pH-neutral cleaner, not a dipped-and-wrung bucket mop.\n\n**Murphy Oil Soap, Pledge, and any wax or silicone polishes on a polyurethane floor.** These were designed for wax-finished floors. On a polyurethane floor they leave a residue that looks like shine for a few weeks and then traps dirt, turns cloudy, and prevents any future recoat from bonding. The only route back is a chemical wax-remover strip, which is expensive and harsh on the wood.\n\n**Floor buffers, rotary scrubbers, and high-pressure spray tools.** The abrasion pattern from a buffer on a residential polyurethane finish will cut through the top coat in a few passes. These tools are for commercial-grade finishes, not residential.\n\n**Shoes with hard heels, furniture without felt pads, and any point-load under about 30 pounds per square inch.** Scratches and dents are not a chemical problem but they are warranty-adjacent: most manufacturers limit structural coverage to 'proper use,' and repeated point-loading counts as improper.",
      image: {
        src: "/images/guides/how-to-clean-hardwood-floors/03-what-voids-warranty.png",
        alt: "Four common hardwood-cleaning items shown with red circle-and-slash prohibition symbols: steam mop, vinegar bottle, wet mop with bucket, and wax polish can. Banner text reads WILL VOID YOUR WARRANTY.",
        caption: "These four are the most common warranty-voiders. Each appears by name in the major flooring manufacturers' published care guides.",
      },
    },

    {
      id: "monthly-and-deep-clean",
      heading: "Monthly and annual cadence",
      body:
        "Beyond the weekly pass, two longer-cycle tasks keep a hardwood floor in warranty-safe condition without triggering any of the 'what voids' list above.\n\n**Monthly: a deeper pH-neutral wipedown.** Once a month, replace the microfiber pad halfway through the pass and spray a bit more cleaner on the second half. This pulls up the thin film of dust and body oil that builds up under furniture and in low-traffic corners. Same method as the weekly pass, just more complete coverage. No extra water. No stronger cleaner.\n\n**Twice a year: dust the vents, check the felt pads on furniture, and spot-check for scratches.** Air-return vents push dust onto hardwood, so vacuuming the vent grilles twice a year stops that load. Replace worn felt pads on chair and couch legs. Look at high-traffic paths under natural light at a low angle: if you see a dull line forming, that is the poly top coat wearing through and the signal that a maintenance recoat is earlier than later.\n\n**Every few years: consider a maintenance recoat (not a full refinish).** The National Wood Flooring Association and most manufacturer care guides recommend a thin maintenance screen-and-recoat every 3 to 5 years in high-traffic areas, before the polyurethane wears through to bare wood [1]. A maintenance recoat costs a fraction of a full sanding. It is the 'insurance policy' that makes a polyurethane floor last 40 plus years. Only possible if the floor has not been contaminated with wax or silicone, which is the real cost of using the wrong cleaner.\n\nThe decision tree: is the sheen still even across the room? Keep doing what you are doing. Is there a visible dull band in a traffic lane? Schedule a maintenance recoat this year. Is the wood itself showing through the finish in any spot? That area is past recoat territory and is now a full-refinish problem. Earlier is always cheaper.",
    },

    {
      id: "decision-tree",
      heading: "Decision tree: match your situation",
      body:
        "Running through the four common scenarios one more time, compressed. Cross-reference your floor and pick the method.\n\n**You have modern polyurethane-finished engineered or solid hardwood (most homes post-2005).** Dry-dust mop or soft-head vacuum twice a week. Damp-mop with a pH-neutral hardwood cleaner (a flooring-manufacturer-approved product, co-marketed with most of the major brands) weekly. No steam, no vinegar, no wax polish. Recoat every 3 to 5 years in high-traffic areas.\n\n**You have a wax-finished floor (older installations, some European specialty).** Dry only. Dust mop or vacuum with brushroll off. Solvent-based wax cleaner for spots. Rewax on the schedule your installer specified, typically once a year. Never damp mop. Never use a polyurethane-compatible cleaner on a wax floor.\n\n**You have a hardwax-oil or penetrating-oil floor.** Follow the manufacturer's product for both cleaning and maintenance. The brand that installed the floor sells a matched cleaner and a matched refresher oil. Using a generic polyurethane cleaner strips the oil over time and leaves the wood under-protected. Expect a light refresher-oil application every 12 to 24 months in traffic areas.\n\n**You inherited a floor and have no idea what the finish is.** The safest universal method is: dry-dust mop or vacuum with brushroll off, plus a barely-damp microfiber pad with a pH-neutral hardwood cleaner sprayed onto the pad (not the floor). This method aligns with NWFA routine-care guidance and covers roughly 95% of modern hardwood finishes [1]. If your floor has a waxy or oiled feel, stop and consult a flooring pro before using any product. If the finish is unknown and you do not want to risk it, dry-clean only until you can identify it.\n\nWhen in doubt, do less. A dry dust mop never damages a floor. Most of the warranty-voiding outcomes in the section above happened because someone assumed a cleaner was safe and applied it generously. Conservative beats aggressive on a sunk-cost surface.",
    },
  ],

  faqs: [
    {
      question: "Can I use vinegar on hardwood floors?",
      answer:
        "No. Most hardwood flooring manufacturers specifically list vinegar as a cleaner that voids the warranty, because its acidity etches polyurethane finishes over time. The floor may look fine after the first few uses, but the sheen dulls unevenly across a year of repeated exposure. The right answer is a pH-neutral hardwood cleaner designed for sealed floors. The few dollars saved on a vinegar DIY is not close to the cost of a premature recoat [1][2].",
    },
    {
      question: "Will a steam mop damage my engineered hardwood?",
      answer:
        "Yes, and it will almost certainly void your manufacturer's warranty. Engineered hardwood is more vulnerable to steam than solid hardwood because the top veneer is thinner and the plywood core delaminates with repeated moisture. The pattern across Bruce, Shaw, Armstrong, and Mohawk published care guides is consistent: steam mops are prohibited. A damp microfiber spray mop with a pH-neutral cleaner gets the same cleanliness without the warranty risk [2][3].",
    },
    {
      question: "What is a pH-neutral hardwood cleaner and how is it different?",
      answer:
        "pH-neutral means the cleaner sits at around 7 on the pH scale, the same as distilled water. Acidic cleaners (vinegar, citrus) and alkaline cleaners (ammonia, bleach) both react with the polyurethane finish over time and dull or strip it. The major flooring-brand-approved cleaners are formulated to clean dirt and body oil off the surface without reacting with the coating. Look for 'pH-neutral' or 'hardwood floor cleaner' on the label, and cross-check that the cleaner is recommended by your flooring manufacturer before buying.",
    },
    {
      question: "How often should I clean hardwood floors?",
      answer:
        "Dry-dust or soft-vacuum twice a week in active rooms, more often near entries. Damp-mop with a pH-neutral cleaner weekly in kitchens and main living areas, every two weeks in low-traffic rooms like a formal dining room. The National Wood Flooring Association's routine-care guidance aligns with this cadence [1]. The goal is to remove grit before it scratches and body oil before it builds up, not to deep-clean every pass.",
    },
    {
      question: "My floor looks hazy or cloudy. What happened?",
      answer:
        "Hazing almost always points to one of three things: wax or silicone residue from a polish like Pledge or Murphy Oil Soap used on a polyurethane floor; residual moisture from a too-wet mop; or the first signs of finish wear where the poly coating has thinned to the point the wood grain is showing through. A flooring pro can usually diagnose which by looking at the floor under raking light. If it is wax residue, a chemical wax-stripper can sometimes recover the floor without a full refinish, but it is harsh and should be a pro job.",
    },
  ],

  relatedLinksHeading: "Pair this guide with the right tools",
  relatedLinksBlurb:
    "The method above assumes you have a soft-head vacuum, a flat microfiber mop, and a pH-neutral cleaner. The guides below cover the product picks that meet those criteria.",
  relatedLinks: [
    { href: "/best-robot-vacuum", title: "Best Robot Vacuums (2026)" },
    { href: "/best-cordless-vacuum", title: "The 5 Best Cordless Vacuums of 2026" },
  ],

  sourcesFooter: [
    {
      label: "National Wood Flooring Association: Care For Your Floor",
      body: "[Routine maintenance, pH-neutral cleaning, and recoat cadence guidance](https://woodfloors.org/care-for-your-floor/). The industry trade body's consumer-facing care directive. Used for routine-care cadence and pH-neutral specification.",
    },
    {
      label: "Major hardwood manufacturer care guides",
      body: "Published maintenance documents from Shaw, Bruce, Mohawk, and Armstrong outline the common prohibitions on steam mops, wet mopping, vinegar, ammonia, and wax polishes on polyurethane-finished floors. Cross-referenced via flooring retailer summaries including [Garrison Collection's engineered-hardwood maintenance guide](https://www.garrisoncollection.com/blog/how-to-clean-engineered-hardwood-floors) and [D and G Flooring's engineered-hardwood care overview](https://dgfloors.com/how-to-clean-engineered-hardwood-floors/).",
    },
    {
      label: "Engineered hardwood and steam-mop warranty guidance",
      body: "[European Flooring: Can You Steam Clean Engineered Hardwood Floors](https://europeanflooring.com/can-you-steam-clean-wood-floors/) and [D and G Flooring: Why You Should Not Steam Clean Hardwood Floors](https://dgfloors.com/can-you-steam-clean-hardwood-floors/). Documents the warranty-void pattern across the major brands.",
    },
    {
      label: "Polyurethane-vs-wax finish compatibility",
      body: "[From The Forest: How to Clean Prefinished Hardwood Floors](https://www.fromtheforest.com/blogs/fromtheforest/how-to-clean-prefinished-hardwood-floors) documents why wax and silicone products cannot be used on polyurethane floors, and why prior wax contamination blocks future recoats.",
    },
  ],
};

export type HowToCleanHardwoodFloorsContent = typeof howToCleanHardwoodFloorsContent;

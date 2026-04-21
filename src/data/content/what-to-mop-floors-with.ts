// desk: safe-surface-desk
/**
 * Content for /what-to-mop-floors-with. TCR mops + chemical-cleaning cluster support page.
 * Research: sites/thecleaningreport/data/research/what-to-mop-floors-with.md (verified: true)
 * Decision: sites/thecleaningreport/data/intent-hierarchy/what-to-mop-floors-with-decision.md
 * Voice: Safe Surface Desk (src/data/authors.ts).
 * Primary avatar: Surface Protector (data/avatar-research.md).
 * Intent-hierarchy: topical_authority.
 *
 * Footnote-voice rule applied: body prose uses [N] anchors to the muted sources
 * list at page bottom. Trade/industry bodies (NWFA) appear inline where the
 * guidance IS the claim. Em-dashes stripped. No outlet names in body.
 *
 * Angle differentiator: flooring-manufacturer-approved-cleaner anchor per row
 * (Bona is the default because Bona is NWFA-aligned, not because of affiliate
 * economics) + explicit do-not-use list most competitor routing tables omit
 * (Murphy Oil Soap on modern engineered, vinegar on hardwood, steam on pre-2018
 * laminate, acidic cleaners on calcium-based stone).
 */

export const whatToMopFloorsWithContent = {
  title: "What to Mop Floors With: A Flooring-Safe Guide (2026)",
  description:
    "What cleaner to put on your mop, by floor type. Sealed hardwood, engineered, laminate, stone, and tile each get a different pick and a do-not-use list.",
  slug: "what-to-mop-floors-with",
  authorSlug: "safe-surface-desk",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  primaryKeyword: "best product to mop floors",
  secondaryKeywords: [
    "best mop cleaning solution",
    "what to mop floors with",
    "best floor cleaner by floor type",
    "what cleaner to use on hardwood floors",
    "what cleaner to use on laminate",
    "what cleaner to use on stone tile",
  ],

  intro:
    "Before you buy, check your warranty. The mop is only half the job; the other half is what you put on it, and getting that wrong can etch a stone floor, cloud a laminate seam, or strip a hardwood finish in ways the mop itself never would. Your flooring manufacturer has an approved-cleaner list for a reason, and most of them explicitly void coverage when you use a cleaner the warranty card disallows. The safer option is boring: start from the approved-cleaner list for your specific surface, and pick the product that passes. The National Wood Flooring Association is direct that hardwood floors should be cleaned with a product formulated for the specific finish on the floor [1]. The short version: don't improvise.",

  heroImage: {
    src: "/images/guides/what-to-mop-floors-with/01-hero-cleaner-by-floor-type.png",
    alt: "Five cleaning-solution bottles arranged over five floor-surface swatches (hardwood, ceramic tile, natural stone, laminate, vinyl), communicating that each floor type needs a different cleaner.",
  },

  estimatedTime: "PT6M",
  breadcrumbLabel: "What to mop floors with",
  editorialLabel: "Floor Care Guide",

  sections: [
    {
      id: "decision-tree",
      heading: "Match your floor to the right cleaner",
      body:
        "Find your floor type below. Each row has a default pick that passes the flooring-manufacturer approved-cleaner test for that surface, plus a secondary option for buyers who want a lower-tox, budget, or deep-clean alternative. If your floor type is not listed, or you are not sure what finish you have, check the warranty card or the flooring manufacturer's website before you buy a cleaner.\n\n**Sealed hardwood:** Bona Hardwood Floor Cleaner (refill or ready-to-use spray). The reason this is the default: Bona is widely referenced in the hardwood-care literature as a finish-compatible pH-neutral cleaner, and the NWFA guidance to use a cleaner formulated for the floor's finish [1] lines up with Bona's positioning. Two forms ship: the 128-oz refill ($19.97 on the canonical Amazon listing [2]) for buyers with a refillable spray mop, and the 32-oz trigger-spray ready-to-use bottle ($8.97 [3]) for buyers without one. The chemistry is the same.\n\n**Engineered hardwood:** same default as sealed hardwood (Bona). The finish on modern engineered hardwood is almost always an aluminum-oxide-reinforced polyurethane, and the pH-neutral rule applies. What changes for engineered hardwood is moisture tolerance, not cleaner chemistry. Use less solution per pass, and never leave standing water on the floor. Oil-soap cleaners and waxes that were acceptable on 1970s solid hardwood are not appropriate on modern engineered, because they interfere with the aluminum-oxide finish and can leave residue that blocks future refinishing.\n\n**Laminate:** Bona Stone/Tile/Laminate Cleaner (refill at $19.18 [4] or 32-oz spray at $8.98 [5]). Different chemistry from the hardwood formula above. Do not cross-use Bona Hardwood on laminate or Bona Stone/Tile/Laminate on hardwood. Pergo, Shaw, and Mohawk laminate warranties generally disallow excess water and oil-soap products, and the Bona S/T/L formulation is designed around low-moisture RTU application. Budget alternative: Zep Hardwood & Laminate Cleaner ($13.55 for 128 oz [6]) is the cheapest name-brand dual-surface bottle on Amazon and works for casual-use laminate, though it is not the warranty-preferred pick.\n\n**Sealed ceramic or porcelain tile:** Bona Stone/Tile/Laminate (same as above) handles sealed tile cleanly. For readers who want a plant-based alternative, Method Squirt+Mop Hardwood ($5.68 [7]) will also work on sealed ceramic despite the hardwood-branded label; the formulation is pH-neutral and residue-free. Plain warm water with a microfiber mop handles light dust and tracked-in dirt on sealed ceramic without any cleaner at all, per the mildest-method-first principle common to tile-industry guidance.\n\n**Natural stone (marble, travertine, limestone, granite):** StoneTech All-Purpose Daily Cleaner ($14.80 for 24 oz [8]) is the default because it is pH-neutral and stone-industry-aligned (the parent company, Laticrete, is primarily a tile-and-stone installation brand, not a consumer-cleaning brand). On calcium-based stones (marble, travertine, limestone) pH-neutral is not optional, it is the rule. Acidic cleaners etch the stone surface in ways that cannot be removed without refinishing. Secondary pick: Granite Gold Daily Cleaner ($9.99 [9]) is widely available at grocery-store price points and works on granite and sealed marble, though some owners report residue at floor-dilution rates.\n\n**Luxury vinyl (LVT) or vinyl plank:** see our [best hardwood floor cleaner guide](/best-hardwood-floor-cleaner) for the full Bona Pro Series stone/tile/laminate family, which is the warranty-preferred pick for most LVT installations. Armstrong and other vinyl manufacturers frequently name the Bona S/T/L formula in their approved-cleaner lists.\n\n**Hardwood that needs a deep-clean, not a routine mop:** Rejuvenate Hardwood Floor Cleaner ($21.88 [10]) is positioned for seasonal restoration rather than weekly use. If the routine Bona is leaving the floor still looking dull after a clean, switching to Rejuvenate for a pass or two is the right escalation. Then go back to the routine product. Do not use a deep-clean formula as a weekly cleaner; the chemistry is stronger than routine maintenance needs.\n\nThe routing above covers the common residential-flooring cases. Rooms with specialty finishes (oil-finished hardwood, waxed stone, natural-oil-sealed cork, end-grain butcher-block flooring) need their own approved-cleaner list from the specific manufacturer. When the warranty card does not match any of the rows above, call the flooring manufacturer before a cleaner goes on the floor.",
    },

    {
      id: "sealed-hardwood-deep",
      heading: "Sealed and engineered hardwood in detail",
      image: {
        src: "/images/guides/what-to-mop-floors-with/02-sealed-hardwood-mist.png",
        alt: "A spray-mop applicator releasing a fine fan-shaped mist onto a warm-brown polyurethane-finished hardwood floor, illustrating the light-mist-not-soaked application pattern that protects the finish.",
        caption: "Apply the cleaner as a fine mist. Over-wetting is the main way owners damage a polyurethane finish.",
      },
      body:
        "The finish on your hardwood is what determines the cleaner, and most residential hardwood installed in the last two decades carries a polyurethane finish with an aluminum-oxide additive for wear resistance. That finish is sensitive to two things: acidity, which softens the polyurethane over time, and residue, which builds up in the micro-texture of the wood and reduces the floor's ability to be refinished cleanly down the road. The pH-neutral, residue-free Bona formulation is designed around those two sensitivities [1][2][3].\n\nApply the cleaner in small amounts. Over-wetting is the main way owners damage a polyurethane finish that would otherwise last decades. A spray-mop setup that puts a light mist directly on the floor in front of the mop head, rather than dumping solution from a bucket, is the right tool. Our [best mop guide](/best-mop) ranks Bona-compatible spray-mop picks for sealed and engineered hardwood specifically.\n\nThe common owner questions about hardwood cleaners almost all trace back to three habits worth dropping:\n\n**Vinegar as a mop solution.** Vinegar is acidic. On a polyurethane finish the acid softens the finish over repeated passes, leaving the floor progressively less protected. The NWFA guidance to use a finish-specific cleaner rules out vinegar by implication [1]. If the appeal is low-cost and low-tox, Method Squirt+Mop Hardwood at under $6 [7] is both; vinegar is not the frugal win it appears to be, because a compromised finish costs refinishing to restore.\n\n**Murphy Oil Soap.** Murphy Oil Soap dates from an era when hardwood finishes were wax-over-wood, not polyurethane, and the oil-soap chemistry made sense. Modern polyurethane-with-aluminum-oxide finishes do not absorb the oil the way wax-on-wood did, so the oil accumulates on the surface and can cloud the finish, interfere with future refinishing, and leave a film that attracts dust. The NWFA recommendation to use cleaners designed for the current finish rules Murphy out on any floor installed since roughly the mid-1990s.\n\n**Steam mops.** The NWFA is blunt: steam mops damage the finish and the wood over time [1]. Heat and moisture together soften the polyurethane, and repeated sessions accelerate the wear. Dry-steam claims do not change the underlying chemistry. If steam is what you have and replacing the mop is not an option, keep it off the hardwood entirely and use the Bona spray mop on that surface. Our [best steam mops guide](/best-steam-mop) covers the picks where the manufacturer has explicitly approved sealed-hardwood use, and the list is shorter than most owners expect.",
    },

    {
      id: "stone-and-tile",
      heading: "Stone and tile: pH-neutral is the rule",
      image: {
        src: "/images/guides/what-to-mop-floors-with/03-stone-vs-tile.png",
        alt: "Two floor-tile sections side by side: a veined natural-stone slab with a copper-glow droplet above it signaling caution, next to a glazed ceramic tile with a teal droplet above it signaling pH-neutral forgiveness.",
        caption: "Natural stone is calcium-based and reacts with acids. Glazed ceramic and porcelain tolerate a wider pH range.",
      },
      body:
        "Natural stone floors and sealed ceramic or porcelain tile both work best with pH-neutral cleaners, and the two surfaces will forgive most of the same routine maintenance. The critical difference is what they tolerate when routine cleaning is not enough.\n\nCeramic and porcelain tile are dense, glazed, and acid-tolerant. If routine pH-neutral cleaning leaves soap scum or mineral buildup, an acidic tile-and-grout cleaner is an acceptable escalation (see our [best grout cleaner guide](/best-grout-cleaner) for specific picks). The grout lines matter more than the tile face; unsealed cement grout is the vulnerable substrate, not the glazed tile.\n\nNatural stone is the opposite. Marble, travertine, limestone, and some slates are calcium-based; their surface contains carbonate compounds that react with acids. Even a single pass of an acidic cleaner leaves a visible etch that cannot be cleaned out, only refinished by a stone professional. The pH-neutral rule is not a suggestion on these surfaces; it is the difference between a floor that looks the same in ten years and one that needs professional restoration. Granite is harder and more acid-tolerant, but the safe default across all natural-stone floors is pH-neutral only.\n\nWhat to skip on stone and tile:\n\n**Vinegar, lemon juice, citrus-based cleaners on natural stone.** Acidic. Etches calcium-based stones. Not a judgment call or a maintenance tradeoff, just incompatible chemistry.\n\n**Bleach on colored grout.** Chlorine bleach fades the color over repeated passes. For stain or mold issues on colored grout, oxygen bleach (sodium percarbonate) lifts staining without the color damage. Our [how-to-clean-grout guide](/how-to-clean-grout) covers the full escalation sequence.\n\n**Oil-soap cleaners on tile.** The residue accumulates in porous grout, attracts dirt, and is harder to remove than typical staining. The issue is the same one that rules out oil-soap cleaners on modern hardwood, and the fix is the same: use a surface-specific pH-neutral product instead.",
    },

    {
      id: "laminate-and-vinyl",
      heading: "Laminate and vinyl: low moisture matters more than chemistry",
      body:
        "Laminate flooring is a photograph-plus-wear-layer bonded to a high-density fiberboard core. The core is the vulnerable part. Standing water wicks into the seams between planks and swells the HDF core, which is the failure mode most laminate warranties call out specifically. The cleaner chemistry matters less than the water volume.\n\nThe Bona Stone/Tile/Laminate ready-to-use spray handles routine laminate cleaning with a fine mist that does not saturate the seam. The budget Zep Hardwood & Laminate formula works the same way at a lower price point, with slightly less-controlled spray pattern.\n\nWhat matters on laminate:\n\n**Do not use a string mop or a soaking-wet sponge mop.** These put more water on the floor than the seam can handle. A flat microfiber spray mop (see our [best mop guide](/best-mop)) is the tool category to pair with these cleaners.\n\n**Do not steam pre-2018 laminate.** Most laminate warranties issued before 2018 explicitly disallow steam mops, because the combination of heat and moisture drives water into the seams and delaminates the wear layer from the core. Post-2018 laminate products increasingly allow specific steam mops at specific temperature settings, but the warranty card is the authority, not the mop manufacturer's marketing. Our [best steam mops guide](/best-steam-mop) routes laminate readers away from steam unless the flooring warranty explicitly permits it.\n\n**Oil-soap cleaners on laminate.** Same failure pattern as on modern hardwood. The oil sits on the wear layer, attracts dust, and can leave a film that is harder to remove than whatever staining it was meant to address.\n\nLuxury vinyl (LVT or vinyl plank) is more forgiving than laminate on moisture, because the wear layer is a true waterproof plastic rather than a fiberboard. The chemistry still matters; the Bona Pro Series Stone/Tile/Laminate is the widely-approved default, and our [best hardwood floor cleaner guide](/best-hardwood-floor-cleaner) covers that family in detail.",
    },

    {
      id: "do-not-use",
      heading: "The consolidated do-not-use list",
      image: {
        src: "/images/guides/what-to-mop-floors-with/04-do-not-use.png",
        alt: "A loose grid of five cleaning products with a soft copper circle-with-slash overlay on each: a vinegar bottle, a caramel-colored oil-soap jug, an ammonia spray bottle, a bleach bottle, and a steam-mop silhouette.",
        caption: "Every item below appears in at least one competitor routing table as a recommended cleaner for at least one floor type. Each belongs on the skip list.",
      },
      body:
        "Every item below shows up in at least one competitor routing table as a recommended cleaner for at least one floor type. Each is on this list either because the NWFA or the manufacturer guidance for the relevant surface explicitly warns against it [1], or because the mechanism of damage is documented across multiple editorial sources. If you see any of these recommended without a qualifying caveat, treat the recommendation as incomplete.\n\n**Vinegar on any sealed-finish surface.** Acidic. Strips polyurethane finish on hardwood, etches calcium-based stone, and is not the low-cost win it appears to be once finish damage is priced in.\n\n**Murphy Oil Soap on modern hardwood or laminate.** The oil-soap chemistry is designed for wax-finished floors from a different era. On modern polyurethane-with-aluminum-oxide finishes the oil accumulates, clouds the finish, and interferes with future refinishing.\n\n**Ammonia-based cleaners on hardwood.** Ammonia is a base at high concentration and a finish-strip risk similar to vinegar from the other direction. Rules out Windex-style glass cleaners as floor solutions, even if they seem to leave streak-free results.\n\n**Chlorine bleach on colored grout.** Fades pigment over repeated passes. Oxygen bleach (sodium percarbonate) is the safer escalation for stain or mold on colored grout.\n\n**Acidic tile-and-grout cleaners on natural stone.** Safe on ceramic and porcelain; corrosive on marble, travertine, and limestone. The fix is to check the tile, not the cleaner label.\n\n**Wet string mops on laminate or engineered hardwood.** Not a chemistry issue, a water-volume issue. Use spray mops or damp microfiber only.\n\n**Steam mops on sealed hardwood, engineered hardwood, or pre-2018 laminate.** NWFA says steam damages the finish and the wood on hardwood [1]. Most laminate warranties before 2018 disallow steam on the laminate itself. The cost of a warranty denial is high enough that the steam-mop-on-hardwood question is not worth taking on.\n\n**Generic all-purpose household cleaner (like Pine-Sol, Fabuloso) applied directly to flooring.** These are formulated for hard surfaces broadly, not for floor finishes specifically. The residue that sits on a countertop rinses away; the residue that sits on a hardwood or laminate floor accumulates and degrades the finish over time. Surface-specific products exist for a reason.",
    },

    {
      id: "dilution-and-cadence",
      heading: "Dilution and cleaning cadence",
      body:
        "Every product recommended above ships as either a ready-to-use (RTU) spray, which needs no dilution, or a concentrate meant to be diluted with water per the label directions. The refill-format picks (Bona Hardwood 128-oz refill, Bona Stone/Tile/Laminate 128-oz refill) are actually RTU-concentrate: pour straight from the bottle into a spray-mop reservoir without further dilution. The 32-oz trigger-spray versions are identical chemistry in a smaller ready-to-use package.\n\nCadence is where most warranty compliance goes wrong, because it is easier to over-clean than under-clean a sealed floor. The NWFA routine for hardwood is straightforward: sweep, dust-mop, or vacuum on a bare-floor setting for routine pickup, and reach for a liquid cleaner only when there is a visible mark or tracked-in soil that needs more than a dry pass [1]. Wet cleaning every pass compounds moisture exposure on a finish designed to handle occasional, controlled moisture.\n\nRealistic cadence for a mid-traffic household: dry-mop or vacuum bare-floor two to three times per week. Wet-clean with the surface-appropriate product once every two weeks in high-traffic rooms (entryway, kitchen), monthly in bedrooms and rooms with light use. Deep-clean with a seasonal product (Rejuvenate [10] on hardwood, a specialty tile-and-grout cleaner on tile) twice a year, no more. Pets and kids can move the wet-clean cadence up to weekly in entry zones. What to avoid is a daily wet-clean on any finished floor; the cumulative moisture exposure is the pattern that shortens finish life.",
    },

    {
      id: "specialty-routing",
      heading: "When the product you need is not on this list",
      body:
        "Some floors need a cleaner this page does not cover, either because the surface is specialty (oil-finished hardwood, waxed floors, unsealed stone, cork, butcher-block end-grain) or because the residue pattern indicates a specific cleaner would work better.\n\n**Oil-finished hardwood (Rubio Monocoat, Osmo, similar).** Oil finishes are a different chemistry from polyurethane and usually need a manufacturer-specific maintenance product rather than a general-purpose hardwood cleaner. Bona and Rejuvenate are both polyurethane-targeted and can leave an oil-incompatible residue. Call the flooring installer or the oil-brand maintenance line.\n\n**Waxed floors.** Paste-waxed hardwood is rare in modern residential installations but shows up in older homes and historic restorations. These floors need a specific wax-compatible solvent-cleaner, not a water-based product, and the right cleaner comes from the wax manufacturer.\n\n**Unsealed concrete or unfinished stone.** Neither surface should be wet-mopped with any of the products above. Dust-mopping and vacuuming handle routine maintenance; a concrete-specific pH-neutral cleaner or a stone-specialist is the right resource for deeper cleaning.\n\n**Cork flooring.** Cork is typically sealed with polyurethane and can be treated like hardwood for cleaning purposes, but the moisture tolerance is lower. A Bona-family product at reduced application rate (mist the mop head rather than the floor) is the safe approach.\n\n**End-grain butcher-block or mineral-oil-finished wood countertops transitioning into flooring.** Rare, but some reclaimed-wood installations use oil-finished planks. Treat as oil-finished hardwood (above): manufacturer-specific maintenance product only.\n\nWhen in doubt: check the warranty card, check the flooring manufacturer's website for their approved-cleaner list, and default to a pH-neutral product designed for the specific finish. Getting this right once, at the start, is the difference between a floor that looks the same after a decade and one that needs to be refinished.",
    },
  ],

  faqs: [
    {
      question: "What is the best all-around cleaner for mopping floors?",
      answer:
        "There is no single best cleaner, because what works on sealed hardwood will etch natural stone, and what works on sealed tile will strip a polyurethane finish. The closest thing to a universal default is the Bona family: Bona Hardwood Floor Cleaner for sealed and engineered hardwood, and Bona Stone/Tile/Laminate for laminate, sealed tile, and stone. Both are pH-neutral and residue-free. If you have only one floor type in your home, buy the single matching Bona product. If you have two or more floor types, you probably need two bottles rather than a single compromise product.",
    },
    {
      question: "Can I use vinegar to mop hardwood floors?",
      answer:
        "Not as a routine method. Vinegar is acidic, and on a polyurethane finish the acid softens the finish over repeated passes, leaving the floor progressively less protected. The NWFA recommends using a cleaner formulated for the specific finish on the floor [1], which rules out vinegar by implication. If the appeal of vinegar is low-cost, low-tox cleaning, Method Squirt+Mop Hardwood is under six dollars and is both, without the finish-strip risk. A compromised finish costs refinishing to restore, which is several orders of magnitude higher than the per-bottle savings vinegar appears to offer.",
    },
    {
      question: "Is Murphy Oil Soap safe for modern hardwood?",
      answer:
        "Not recommended. Murphy Oil Soap dates from an era when hardwood finishes were wax-over-wood, and the oil-soap chemistry made sense for that surface. Modern polyurethane-with-aluminum-oxide finishes do not absorb the oil the way old wax-on-wood did, so the oil accumulates on the surface, can cloud the finish, and leaves a film that interferes with future refinishing. Any hardwood floor installed since roughly the mid-1990s is on a polyurethane finish, and the Bona pH-neutral family is the appropriate modern replacement.",
    },
    {
      question: "Can plain water mop sealed tile?",
      answer:
        "Yes, for light routine cleaning. Sealed ceramic and porcelain tile tolerate plain warm water with a microfiber mop for dust and light tracked-in dirt. Reach for a pH-neutral cleaner when the tile has visible soil that water alone does not lift, and for the grout joints (which are porous and need the cleaner more than the tile does). Plain water is not appropriate for sealed hardwood, engineered hardwood, or laminate, because even minimal standing water on those surfaces is a finish or seam risk.",
    },
    {
      question: "What about steam mops on hardwood?",
      answer:
        "The NWFA is direct that steam mops damage the finish and the wood over time on hardwood floors [1]. Heat and moisture together soften the polyurethane, and repeated sessions accelerate wear. This applies to both solid and engineered hardwood. Some steam-mop manufacturers advertise hardwood-safe settings, but the flooring-industry authority is the one with the warranty-risk standing, and the guidance is consistent: keep steam off hardwood. On sealed tile, steam is an accepted cleaning method; on natural stone and laminate, steam risks are surface-specific and the warranty card is the authority.",
    },
    {
      question: "Can I mix my own cleaner with dish soap and water?",
      answer:
        "Not recommended as a routine solution on finished floors. Dish soap is formulated to break down grease on dishes, and at floor-surface dilution it leaves a residue that attracts new dirt, clouds the finish over time, and can interfere with the surface-appropriate cleaner you use later. The Bona and Method products are both pH-neutral and residue-free at the dilution they ship at, which is the design goal for a floor cleaner. Dish soap is a design compromise for a different surface.",
    },
    {
      question: "How often should I wet-mop a sealed floor?",
      answer:
        "Less often than most owners think. The NWFA routine is to sweep, dust-mop, or vacuum on a bare-floor setting as the default maintenance method, and reach for a liquid cleaner only when there is visible soil a dry pass cannot handle [1]. Practical cadence: dry pickup two to three times per week, wet-clean once every two weeks in high-traffic rooms, monthly in lower-traffic rooms, and a seasonal deep-clean twice a year. Daily wet-cleaning on any finished floor compounds moisture exposure and shortens finish life, even with the right chemistry.",
    },
  ],

  relatedLinksHeading: "Pair this guide with the right mop and the right product",
  relatedLinksBlurb:
    "The routing above assumes you have a mop that works with the cleaner, and a cleaner matched to the floor. The guides below cover the hardware side of that equation and the specialty product families for specific surfaces.",
  relatedLinks: [
    { href: "/best-mop", title: "The Best Mops of 2026: Match the Form Factor to Your Floor" },
    { href: "/best-hardwood-floor-cleaner", title: "Best Hardwood Floor Cleaners 2026: Finish-Safe Picks" },
    { href: "/how-to-clean-hardwood-floors", title: "How to Clean Hardwood Floors (Without Voiding the Warranty)" },
    { href: "/best-steam-mop", title: "Best Steam Mops for 2026 (Warranty-First Picks)" },
    { href: "/best-grout-cleaner", title: "Best Grout Cleaners (2026): Cement-Safe and Stone-Safe Picks" },
    { href: "/how-to-clean-grout", title: "How to Clean Grout Without Damaging the Tile or Sealant" },
  ],

  sourcesFooter: [
    {
      label: "NWFA: Hardwood floor maintenance guidance",
      body: "[National Wood Flooring Association maintenance guidance](https://woodfloors.org/maintenance/). Used as the professional-credential anchor for the finish-specific-cleaner rule and the steam-mop and wet-mop prohibitions on hardwood.",
    },
    {
      label: "Bona Hardwood Floor Cleaner (128-oz refill)",
      body: "[Bona Hardwood Floor Cleaner Refill on Amazon](https://www.amazon.com/Bona-Hardwood-Unscented-Residue-Free-Cleaning/dp/B000ARPVIY). Used for sealed-hardwood default pick pricing and availability.",
    },
    {
      label: "Bona Hardwood Floor Cleaner (32-oz ready-to-use spray)",
      body: "[Bona Hardwood Floor Cleaner Spray on Amazon](https://www.amazon.com/Bona-Hardwood-Floor-Cleaner-Spray/dp/B0019BGM60). RTU sibling of the refill.",
    },
    {
      label: "Bona Stone, Tile & Laminate Cleaner (128-oz refill)",
      body: "[Bona Stone/Tile/Laminate Refill on Amazon](https://www.amazon.com/Bona-Stone-Laminate-Cleaner-Refill/dp/B000ALLJW2). Laminate and sealed-tile default pick.",
    },
    {
      label: "Bona Stone, Tile & Laminate Cleaner (32-oz RTU spray)",
      body: "[Bona Stone/Tile/Laminate Spray on Amazon](https://www.amazon.com/Bona-Stone-Laminate-Floor-Cleaner/dp/B000CNRVP2). RTU sibling of the refill.",
    },
    {
      label: "Zep Hardwood & Laminate Cleaner (128 oz)",
      body: "[Zep Hardwood & Laminate Cleaner on Amazon](https://www.amazon.com/ZEP-ZUHLF128-Hardwood-Laminate-Cleaner/dp/B001B19620). Budget dual-surface pick.",
    },
    {
      label: "Method Squirt+Mop Hardwood Cleaner (Almond)",
      body: "[Method Squirt+Mop Hardwood Cleaner on Amazon](https://www.amazon.com/Method-Squirt-Hardwood-Cleaner-Almond/dp/B00I9IL53Q). Plant-based / low-tox pick for sealed hardwood.",
    },
    {
      label: "StoneTech All-Purpose Daily Cleaner",
      body: "[StoneTech All-Purpose Cleaner on Amazon](https://www.amazon.com/StoneTech-Cleaner-cleaner-24-Ounce-Bottle/dp/B00065W994). Natural-stone default; Laticrete-brand pH-neutral formulation.",
    },
    {
      label: "Granite Gold Daily Cleaner",
      body: "[Granite Gold Daily Cleaner on Amazon](https://www.amazon.com/dp/B0892F9FGB). Secondary natural-stone pick.",
    },
    {
      label: "Rejuvenate Hardwood Floor Cleaner",
      body: "[Rejuvenate Hardwood Floor Cleaner on Amazon](https://www.amazon.com/dp/B00KS70ARS). Seasonal deep-clean pick for sealed hardwood.",
    },
  ],
};

export type WhatToMopFloorsWithContent = typeof whatToMopFloorsWithContent;

export interface EditorialDesk {
  slug: string;
  name: string;
  title: string;
  avatar: string;
  bio: string;
  audience: string;
  expertise: string[];
  methodology: string;
  dataSources: string[];
  primaryAvatars: string[];
  secondaryAvatars: string[];
  ownedCoverage: string[];
  voiceGuide: {
    personality: string[];
    sentenceStyle: string;
    openingStyles: string[];
    neverDoes: string[];
    researchAnchors: string[];
    vocabularyPreferences: string[];
    vocabularyAvoids: string[];
    examplePhrases: string[];
    transitionPhrases: string[];
    analysisApproach: string;
    moodVariations: {
      excited: string;
      disappointed: string;
      neutral: string;
      skeptical: string;
      budget: string;
      premium: string;
    };
    topicVoice: {
      comparison: string;
      singleReview: string;
      buyingGuide: string;
      budgetRoundup: string;
    };
    petPeeves: string[];
    benchmarkProducts: string[];
  };
}

export type Author = EditorialDesk;

export const editorialDesks: EditorialDesk[] = [
  {
    slug: "everyday-cleaning-desk",
    name: "Everyday Cleaning Desk",
    title: "Practical floor-care defaults",
    avatar: "/images/desks/everyday-desk.svg",
    bio: "The Everyday Cleaning Desk covers the simplest strong answers for everyday indoor cleaning. It exists for readers who want cleaner floors, manageable storage, and less routine friction without turning vacuum shopping into a hobby.",
    audience:
      "Practical Cordless Buyer first, with enough range to support smaller-home cleaners, budget-conscious households, and readers who want the fastest trustworthy default for normal daily mess.",
    expertise: [
      "best cordless vacuum picks",
      "budget cordless vacuum roundups",
      "lightweight and apartment-friendly cleaning tools",
      "daily-use vacuum tradeoffs",
      "storage-friendly floor-care picks",
      "best overall floor-care defaults",
      "runtime and battery-value comparisons",
      "quiet-use and easy-emptying guidance",
    ],
    methodology:
      "Weights cleaning effectiveness, price-to-performance, ease of emptying, runtime honesty, storage footprint, noise, and maintenance burden ahead of aspirational features. A product rises here when it solves the normal household job quickly, stores easily, and does not create extra weekly hassle.",
    dataSources: [
      "Long-term owner reviews and update-year comparisons",
      "Retailer Q&A and return-reason patterns",
      "Reddit threads from mainstream buyers and apartment dwellers",
      "Expert roundup consensus and test summaries",
      "Verified spec sheets, battery claims, and accessory data",
    ],
    primaryAvatars: ["Practical Cordless Buyer"],
    secondaryAvatars: ["Automation-Minded Floor-Care Upgrader"],
    ownedCoverage: [
      "best-cordless-vacuum",
      "budget cordless vacuum pages",
      "under-$X vacuum roundups",
      "lightweight vacuum pages",
      "small-home and apartment-friendly cleaning guides",
      "easy-emptying and removable-battery comparisons",
      "best overall floor-care default pages",
    ],
    voiceGuide: {
      personality: [
        "Direct and uncluttered",
        "Helpful without sounding impressed by the category",
        "Budget-aware without sounding cheap",
        "Practical about storage, weight, and noise",
        "Calm around buyer confusion",
        "Quick to strip away premium fluff",
        "Respectful of readers who just want the right default",
        "Quietly skeptical of products that add upkeep",
      ],
      sentenceStyle:
        "Short to medium sentences. Lead with the answer early. Use plain household language, not feature theater. Paragraphs should move quickly and stay concrete about runtime, weight, storage, and the cleanup chore the product is actually removing.",
      openingStyles: [
        "Lead with the obvious answer: 'If you want the simplest strong everyday pick, start here.'",
        "Lead with the routine problem: 'Most people do not need more vacuum features. They need less daily friction.'",
        "Lead with regret prevention: 'The wrong cordless vacuum does not just underperform. It becomes one more thing you avoid pulling out.'",
        "Lead with value clarity: 'This is where paying a little more actually helps, and where it usually does not.'",
        "Lead with space reality: 'If the vacuum has to fit in a closet and get used often, size and weight matter as much as suction.'",
      ],
      neverDoes: [
        "Never mistakes feature count for value",
        "Never buries storage, runtime, or noise tradeoffs",
        "Never recommends a daily-use vacuum that is annoying to empty",
        "Never writes like the reader wants a gadget hobby",
        "Never uses 'powerful' as a substitute for specific floor performance",
        "Never pads the answer once the best default is clear",
      ],
      researchAnchors: [
        "The better everyday pick is usually the one you will actually pull out every day.",
        "The search behavior clusters around price, weight, storage, and runtime more than prestige.",
        "Owner regret tends to show up around weak battery claims, awkward emptying, and bulky docks.",
        "What apartment and small-home buyers repeatedly flag is noise, footprint, and easy grab-and-go use.",
        "For this desk, the strongest product is the one that removes friction from a normal week.",
      ],
      vocabularyPreferences: [
        "daily-use",
        "easy to live with",
        "grab-and-go",
        "simple default",
        "price-to-performance",
        "storage-friendly",
        "easy-emptying",
        "lower-friction",
        "honest runtime",
        "normal household mess",
      ],
      vocabularyAvoids: [
        "ultimate",
        "monster suction",
        "game-changer",
        "premium experience",
        "obsessed",
        "luxury",
        "high-performance cleaning ecosystem",
      ],
      examplePhrases: [
        "This is the kind of vacuum you actually use, which matters more than a longer feature list.",
        "The best budget pick here is not the cheapest one. It is the one that still clears the daily job without turning emptying into a mess.",
        "If weight annoys you on day two, the vacuum will not stay in the routine.",
        "The runtime claim sounds good on paper. The medium-power reality matters more.",
        "This desk rewards products that make the weekly cleanup easier, not products that only look advanced in a spec chart.",
      ],
      transitionPhrases: [
        "What matters more is",
        "The everyday tradeoff is",
        "That sounds good until",
        "For most households, the better answer is",
        "Now for the part that actually affects ownership",
      ],
      analysisApproach:
        "Start from the everyday job: quick floor pickup, easy storage, and repeatable use. Compare cordless models on normal-floor effectiveness, realistic runtime, weight, emptying mess, and whether the product stays convenient after the first week. Reward tools that shorten the path from noticing a mess to actually cleaning it.",
      moodVariations: {
        excited:
          "Warmly approving because the product makes the routine easier, not because it sounds flashy.",
        disappointed:
          "Clear and unsentimental. Name the friction directly, then move to the better alternative.",
        neutral:
          "Matter-of-fact and concise. Useful for best-overall and value pages.",
        skeptical:
          "Firm when premium features fail to improve normal daily use.",
        budget:
          "Forgiving about non-critical flaws if the basic cleaning job stays easy and effective.",
        premium:
          "Demands a meaningful ownership improvement, not just a nicer finish or a prettier dock.",
      },
      topicVoice: {
        comparison:
          "Reduce the comparison to what changes the week: weight, runtime honesty, storage, and emptying friction.",
        singleReview:
          "Frame the review around the ownership arc from unboxing to the first annoying maintenance moment.",
        buyingGuide:
          "Lead readers toward the simplest good decision and cut away features that do not improve daily cleaning.",
        budgetRoundup:
          "Find the cheapest product that still feels usable every day, not the cheapest one on the page.",
      },
      petPeeves: [
        "Spec-sheet bragging that ignores storage and emptying",
        "Budget picks that save money up front but feel disposable immediately",
        "Runtime claims that only hold on the weakest mode",
        "Reviews that ignore noise in small homes and apartments",
        "Bulky docks treated as a non-issue for ordinary households",
      ],
      benchmarkProducts: [
        "A cordless vacuum that handles daily crumbs and dust without feeling heavy or awkward",
        "A budget model that still empties cleanly and stores easily",
        "A removable-battery vacuum that does not exaggerate runtime on normal power",
        "A small-home cleaning tool that fits the closet and the routine",
      ],
    },
  },
  {
    slug: "floor-care-pet-mess-desk",
    name: "Floor Care & Pet Mess Desk",
    title: "Robots, hair, and high-friction cleanup",
    avatar: "/images/desks/enthusiast-desk.svg",
    bio: "The Floor Care & Pet Mess Desk covers robot vacuums, pet-hair cleanup, and the messier households that punish weak recommendations quickly. It exists for readers trying to remove recurring labor, cut tangles and clogs, and keep mixed floors livable under real household load.",
    audience:
      "Automation-Minded Floor-Care Upgrader first, with strong coverage for Pet-Mess Floor Manager readers handling shedding, furniture hair, tracked-in dirt, litter, and heavier weekly cleanup.",
    expertise: [
      "best robot vacuum roundups",
      "self-empty and obstacle-avoidance comparisons",
      "pet-hair vacuum buying guides",
      "mixed-surface and furniture cleanup advice",
      "brush-roll tangle resistance",
      "robot vacuum budget and value pages",
      "pet-hair cleanup spokes for carpet, stairs, and upholstery",
      "dock upkeep and maintenance reality checks",
    ],
    methodology:
      "Weights hair pickup, dock or dustbin upkeep, app reliability, obstacle handling, mixed-surface performance, tangles, noise, and maintenance burden under repeated use. A machine rises here when it reduces recurring work in real homes instead of creating a new troubleshooting routine.",
    dataSources: [
      "Long-term owner reviews from pet households and mixed-floor homes",
      "Reddit troubleshooting threads for robot vacuums and pet-hair cleanup",
      "Expert test summaries focused on hair pickup and navigation",
      "Manufacturer app, dock, and accessory documentation",
      "Repeat complaint patterns around tangles, clogs, mapping, and emptying",
    ],
    primaryAvatars: ["Automation-Minded Floor-Care Upgrader", "Pet-Mess Floor Manager"],
    secondaryAvatars: ["Practical Cordless Buyer"],
    ownedCoverage: [
      "best-robot-vacuum",
      "best-vacuum-for-pet-hair",
      "robot vacuum budget pages",
      "self-emptying robot vacuum guides",
      "obstacle-avoidance and mapping pages",
      "pet-hair vacuum spokes for carpet, furniture, stairs, and litter",
      "high-friction mixed-surface comparisons",
    ],
    voiceGuide: {
      personality: [
        "Comparative and pressure-tested",
        "Blunt about recurring failure modes",
        "Sympathetic to heavier household load",
        "Practical about maintenance labor",
        "Skeptical of smart-home hype",
        "Specific about surface performance",
        "Grounded in daily mess rather than showroom demos",
        "Comfortable saying a premium machine is not worth the trouble",
      ],
      sentenceStyle:
        "Medium sentences with clear contrast language. Use concrete floor and mess terms: tangles, clogs, dock upkeep, upholstery, litter, carpet edges. Keep the writing physical and test-like without sounding lab-coated.",
      openingStyles: [
        "Lead with the chore being outsourced: 'The point of a robot vacuum is not novelty. It is fewer manual passes in a normal week.'",
        "Lead with the failure mode: 'A vacuum that tangles, clogs, or misses furniture edges is not saving you time.'",
        "Lead with load reality: 'Pet hair changes the ranking fast because it punishes weak brush rolls and weak maintenance design.'",
        "Lead with the premium test: 'If the app, dock, or mapping adds friction, the expensive machine loses its whole argument.'",
        "Lead with surface truth: 'The right pick depends on whether your real headache is carpet hair, furniture hair, litter, or daily floor maintenance.'",
      ],
      neverDoes: [
        "Never rewards app features that do not improve the cleaning routine",
        "Never treats tangles and clogs as minor inconveniences",
        "Never reviews pet-hair cleanup without discussing maintenance burden",
        "Never hides weak edge cleaning or furniture performance",
        "Never assumes one tool solves every surface equally well",
        "Never lets brand prestige override mixed-surface reality",
      ],
      researchAnchors: [
        "The difference shows up after the third or fourth run, when the dock, brush roll, or app starts annoying the owner.",
        "Pet owners search around failure modes first: tangles, upholstery hair, litter, and edge cleanup.",
        "Automation value holds only if mapping, emptying, and obstacle handling stay predictable.",
        "What owner threads repeatedly punish is not weak suction alone. It is the machine that creates extra maintenance.",
        "The strongest picks here reduce labor across a real week, not just in a first-run demo.",
      ],
      vocabularyPreferences: [
        "recurring work",
        "maintenance burden",
        "mixed-surface",
        "tangle resistance",
        "dock upkeep",
        "pet-hair load",
        "daily maintenance pass",
        "real-home friction",
        "mapping reliability",
        "edge cleanup",
      ],
      vocabularyAvoids: [
        "smart cleaning revolution",
        "beast",
        "insane suction",
        "next-level automation",
        "luxury robot",
        "hands-free perfection",
        "set it and forget it",
      ],
      examplePhrases: [
        "This robot is only worth the money if the dock and app stop feeling like extra chores.",
        "The suction matters, but the bigger question is whether you will be cutting hair out of the brush roll every other day.",
        "For pet homes, the real win is fewer frustrating cleanup loops, not a prettier map in the app.",
        "This model is strong on daily floor maintenance but only average on furniture edges and heavier carpet hair.",
        "The expensive machine still loses if the obstacle handling is flaky enough to need babysitting.",
      ],
      transitionPhrases: [
        "Under pet-hair load,",
        "That sounds useful until",
        "Now look at the maintenance side.",
        "The real separation shows up when",
        "On mixed floors, the better test is",
      ],
      analysisApproach:
        "Begin with the recurring frustration the reader wants to remove: daily floor passes, upholstery cleanup, brush-roll tangles, or cluttered-room navigation. Judge products by whether they truly remove labor across multiple runs and surfaces. Reward machines that stay predictable, easy to empty, and easy to maintain once the newness wears off.",
      moodVariations: {
        excited:
          "Genuinely impressed when a machine keeps its promise under pet hair or clutter pressure.",
        disappointed:
          "Direct and specific about the failure mode, especially if the product wastes time instead of saving it.",
        neutral:
          "Comparative and grounded. Useful for most robot and pet-hair roundups.",
        skeptical:
          "Sharpest when app, mapping, or premium branding are doing more work than the cleaning performance.",
        budget:
          "Forgiving about missing premium polish if the machine still removes real labor consistently.",
        premium:
          "Demands better navigation, easier maintenance, or clearly better pet-hair handling for the extra money.",
      },
      topicVoice: {
        comparison:
          "Center the comparison on labor removed, maintenance added, and how the machine behaves after repeated real-home use.",
        singleReview:
          "Track the ownership arc from setup to the first app annoyance, brush-roll tangle, or dock cleanup reality.",
        buyingGuide:
          "Teach the reader to match the tool to the failure mode first: robot convenience, carpet hair, furniture hair, litter, or mixed-surface upkeep.",
        budgetRoundup:
          "Look for the cheapest pick that still handles the real mess without immediately becoming annoying to maintain.",
      },
      petPeeves: [
        "Robot vacuum reviews that ignore the app and dock experience",
        "Pet-hair guides that never mention brush-roll cleanup",
        "Products sold as all-surface winners when they clearly fail on upholstery or heavier carpet",
        "Premium machines excused for flaky navigation because the brand is fashionable",
        "Roundups that treat daily maintenance and deep-clean jobs as the same assignment",
      ],
      benchmarkProducts: [
        "A robot vacuum that maps reliably and stays manageable under pet-hair load",
        "A pet-hair vacuum that pulls embedded hair without constant brush-roll cleanup",
        "A mixed-surface machine that handles litter and furniture edges without excessive babysitting",
        "A self-empty system that actually reduces labor instead of relocating it to dock maintenance",
      ],
    },
  },
  {
    slug: "deep-clean-maintenance-desk",
    name: "Deep Clean & Maintenance Desk",
    title: "Surface-safe deep-clean guidance",
    avatar: "/images/desks/lab-desk.svg",
    bio: "The Deep Clean & Maintenance Desk covers steam mops and indoor specialty-cleaning tools where the first question is whether the tool is appropriate at all. It exists for readers who need surface-safe answers, honest payoff analysis, and caution before they buy the wrong deep-clean fix.",
    audience:
      "Surface-Specific Deep Cleaner first, with enough range to cover later indoor maintenance-tool buyers who are trying to solve a stubborn job without damaging floors or wasting money.",
    expertise: [
      "best steam mop roundups",
      "hardwood, laminate, tile, and grout safety guidance",
      "surface-specific deep-clean buying guides",
      "steam mop under-$100 and value pages",
      "specialty-cleaning tool payoff analysis",
      "refill, drying-time, and attachment tradeoffs",
      "when to use steam and when to avoid it",
      "later indoor maintenance-tool expansion",
    ],
    methodology:
      "Weights surface compatibility, safety, drying time, refill hassle, attachment usefulness, storage penalty, and whether the tool solves a recurring problem better than simpler alternatives. A product rises here when it delivers a clear surface-specific benefit without overpromising or creating avoidable risk.",
    dataSources: [
      "Surface-specific owner reviews and caution threads",
      "Reddit discussions around hardwood, laminate, tile, and grout use",
      "Brand manuals and floor-compatibility documentation",
      "Expert test summaries and cleaning-tool comparisons",
      "Complaint patterns around leakage, streaking, and storage hassle",
    ],
    primaryAvatars: ["Surface-Specific Deep Cleaner"],
    secondaryAvatars: ["Practical Cordless Buyer"],
    ownedCoverage: [
      "best-steam-mop",
      "steam mop floor-type pages",
      "hardwood and laminate caution guides",
      "tile and grout payoff pages",
      "budget steam mop pages",
      "later indoor maintenance-tool reviews and comparisons",
    ],
    voiceGuide: {
      personality: [
        "Caution-first without sounding fearful",
        "Evidence-led and surface-specific",
        "Measured about deep-clean promises",
        "Clear about when the simpler tool is enough",
        "Comfortable telling the reader not to buy",
        "Focused on floor safety and payoff",
        "Practical about storage and refill hassle",
        "Skeptical of generic 'deep clean' language",
      ],
      sentenceStyle:
        "Medium sentences with careful, specific qualifiers. Name the surface, the risk, and the actual payoff. Keep the tone calm and decisive so the reader feels safer, not overwhelmed.",
      openingStyles: [
        "Lead with appropriateness: 'Before comparing steam mops, make sure steam is even the right tool for your floor.'",
        "Lead with the safety question: 'The wrong cleaning tool is worse than no upgrade at all if your floor is easy to damage.'",
        "Lead with payoff clarity: 'A specialized tool earns its storage space only if it solves a real recurring problem.'",
        "Lead with caution against hype: 'Deep-clean marketing gets vague fast. Surface compatibility is the real first filter.'",
        "Lead with the simpler-alternative test: 'If a normal mop or cleaner already handles the job well, a steam mop may not buy you much.'",
      ],
      neverDoes: [
        "Never treats all floors like they can be cleaned the same way",
        "Never implies steam is automatically safer, cleaner, or better",
        "Never hides streaking, drying-time, or refill downsides",
        "Never recommends a specialty tool without checking whether the use case is real",
        "Never rewards attachment count over actual usefulness",
        "Never turns caution into hand-wringing or vagueness",
      ],
      researchAnchors: [
        "The first decision is not which model. It is whether this tool belongs on the floor at all.",
        "Search intent here starts with safety and compatibility before it moves to product ranking.",
        "Owner regret clusters around wrong-surface use, underwhelming payoff, and annoying refill routines.",
        "The stronger recommendation is often narrower: right floor, right mess, right expectation.",
        "This desk gives more credit to surface safety and clear payoff than to generic deep-clean claims.",
      ],
      vocabularyPreferences: [
        "surface-safe",
        "compatibility",
        "payoff",
        "appropriate use",
        "refill hassle",
        "drying time",
        "attachment usefulness",
        "floor-type guidance",
        "use this / avoid this",
        "specialty-tool tradeoff",
      ],
      vocabularyAvoids: [
        "sanitizes everything",
        "miracle clean",
        "kills everything",
        "ultimate deep clean",
        "professional-grade shine",
        "transformative cleaning",
        "one-size-fits-all",
      ],
      examplePhrases: [
        "This is a good tile-and-grout tool, not a universal floor recommendation.",
        "The bigger question here is floor safety, not maximum steam output.",
        "If your floor manufacturer is cautious about moisture or heat, the safest recommendation may be to skip steam entirely.",
        "The attachment list looks generous, but only two pieces materially change the cleaning job.",
        "This earns its place if you actually need the grout payoff. Otherwise it is mostly another thing to store.",
      ],
      transitionPhrases: [
        "On hardwood,",
        "For tile and grout,",
        "That is the compatibility piece. The next question is",
        "Now for the real ownership tradeoff.",
        "This is where the payoff either becomes clear or disappears.",
      ],
      analysisApproach:
        "Start with compatibility and risk. Then compare the tool on actual payoff, refill friction, attachments that matter, drying time, and storage burden. Reward products that solve a specific deep-clean need clearly and safely. Penalize generic deep-clean claims that collapse under surface-specific scrutiny.",
      moodVariations: {
        excited:
          "Approving when a tool has a clear use case and delivers a real surface-specific benefit.",
        disappointed:
          "Plain and cautionary. State why the tool misses the assignment or creates unnecessary risk.",
        neutral:
          "Measured and explanatory. Useful for floor-type guides and comparison pages.",
        skeptical:
          "Firm when generic marketing tries to blur important compatibility differences.",
        budget:
          "Open to simpler tools if they solve the job safely and predictably.",
        premium:
          "Demands a real payoff in ease, attachments, or floor-specific performance before endorsing the spend.",
      },
      topicVoice: {
        comparison:
          "Frame the comparison around which surfaces and jobs each tool is actually appropriate for.",
        singleReview:
          "Track the ownership arc from first setup to refill reality and the first moment the payoff either becomes obvious or disappoints.",
        buyingGuide:
          "Teach floor compatibility and use-case filtering before letting the reader compare features or models.",
        budgetRoundup:
          "Look for the cheapest tool that solves the intended job safely instead of pretending every budget steam mop is versatile.",
      },
      petPeeves: [
        "Steam mop guides that never discuss floor compatibility",
        "Specialty tools sold as universal answers",
        "Attachment-heavy products where most attachments are filler",
        "Reviews that ignore refill frequency and storage hassle",
        "Cleaning advice that treats caution as weakness instead of accuracy",
      ],
      benchmarkProducts: [
        "A steam mop that has a clear tile-and-grout use case and manageable refill behavior",
        "A hardwood-safe recommendation that prioritizes floor protection over gadget appeal",
        "A specialty tool that genuinely earns storage space by solving a recurring mess better than a simpler option",
        "A budget deep-clean tool that stays honest about what floors and jobs it should not touch",
      ],
    },
  },
];

export const authors = editorialDesks;

export function getAuthor(slug: string): EditorialDesk | undefined {
  return editorialDesks.find((desk) => desk.slug === slug);
}

export function getPublicAuthor(slug: string) {
  const desk = getAuthor(slug);
  if (!desk) return null;

  return {
    slug: desk.slug,
    name: desk.name,
    title: desk.title,
    avatar: desk.avatar,
    bio: desk.bio,
    expertise: desk.expertise,
  };
}

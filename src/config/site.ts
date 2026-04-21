export const siteConfig = {
  name: "TheCleaningReport",
  domain: "thecleaningreport.com",
  url: "https://thecleaningreport.com",
  tagline: "Practical indoor-cleaning buying guides for cleaner, lower-friction homes.",
  description:
    "TheCleaningReport publishes practical, independent buying guides for robot vacuums, cordless vacuums, steam mops, pet-mess cleanup, and indoor cleaning tools that help real homes stay cleaner with less friction.",

  colors: {
    primary: "#2D6B73",
    accent: "#C48A49",
    dark: "#102027",
    light: "#F6F4EE",
    cta: "#1F7A63",
  },

  defaultTitle: "TheCleaningReport | Practical Indoor Cleaning Guides",
  titleTemplate: `%s | TheCleaningReport`,
  ogImage: "https://thecleaningreport.com/opengraph-image",

  author: {
    name: "TheCleaningReport Editorial Desks",
    bio: "TheCleaningReport uses transparent editorial desks to cover everyday cleaning defaults, floor care and pet-mess cleanup, and deeper maintenance-tool decisions for real homes.",
    methodologyPage: "/how-we-review",
  },

  publication: {
    operatingEntity: "TheCleaningReport Editorial",
    contactEmail: "hello@thecleaningreport.com",
    country: "United States",
  },

  brandAssets: {
    // Placeholder assets — wordmark + icon SVGs nuked during rebuild (2026-04-18).
    // Point to favicon.svg until new brand session ships fresh logo + wordmark.
    wordmark: "/favicon.svg",
    icon: "/favicon.svg",
    favicon: "/favicon.svg",
    appleTouchIcon: "/apple-touch-icon.svg",
  },

  analytics: {
    googleAnalyticsId: "G-LL7SMELECE",
  },

  affiliatePrograms: {
    amazon: {
      tag: "thecleaningreport-20",
      disclaimer: "As an Amazon Associate, we earn from qualifying purchases.",
    },
  },

  categories: [
    {
      name: "Robot Vacuums",
      slug: "robot-vacuums",
      description: "Guides for navigation reliability, obstacle handling, dock upkeep, hair tangles, and real daily-cleaning payoff.",
    },
    {
      name: "Vacuums",
      slug: "vacuums",
      description: "Cordless, upright, and household vacuum recommendations that balance suction, maintenance, weight, and real-home usability.",
    },
    {
      name: "Mops & Steam Mops",
      slug: "mops-steam-mops",
      description: "Surface-cleaning tools compared on residue, drying time, refill burden, and upkeep.",
    },
    {
      name: "Pet Mess & Hair",
      slug: "pet-mess-hair",
      description: "Cleaning tools that hold up against hair, tracked-in mess, upholstery cleanup, and higher-friction households.",
    },
    {
      name: "Cleaning Tools",
      slug: "cleaning-tools",
      description: "Indoor maintenance and specialty-cleaning tools once the floor-care core is established.",
    },
  ],

  ftcDisclosure:
    "When you buy through our links, we may earn a commission at no extra cost to you. That never changes what we recommend.",

  nav: {
    main: [
      { label: "Robot Vacuums", href: "/best-robot-vacuum" },
      { label: "Cordless Vacuums", href: "/best-cordless-vacuum" },
      { label: "Handheld Vacuums", href: "/best-handheld-vacuum" },
      { label: "Mops", href: "/best-mop" },
      { label: "Steam Mops", href: "/best-steam-mop" },
      { label: "Carpet Cleaners", href: "/best-carpet-cleaner-machine" },
      { label: "Hardwood Cleaners", href: "/best-hardwood-floor-cleaner" },
      { label: "Grout Cleaners", href: "/best-grout-cleaner" },
      { label: "Stainless Cleaners", href: "/best-stainless-steel-cleaner" },
      { label: "About", href: "/about" },
    ] as Array<{ label: string; href: string }>,
    footer: [
      { label: "About", href: "/about" },
      { label: "How We Review", href: "/how-we-review" },
      { label: "Affiliate Disclosure", href: "/disclosure" },
      { label: "AI & Editorial Transparency", href: "/ai-disclosure" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },

  featuredCoverage: [
    {
      title: "The 6 Best Robot Vacuums of 2026",
      href: "/best-robot-vacuum",
      eyebrow: "Robot Vacuums",
      description:
        "Ranked by labor math: time saved per week, lifespan, maintenance cadence, and where the math breaks for specific households.",
      available: true,
    },
    {
      title: "Best Cordless Vacuums for 2026",
      href: "/best-cordless-vacuum",
      eyebrow: "Cordless Vacuums",
      description:
        "Mid-priced cordless sticks and handhelds for mainstream floor care, scored on battery life and filter-replacement cost.",
      available: false,
    },
    {
      title: "Best Steam Mops for 2026",
      href: "/best-steam-mop",
      eyebrow: "Steam Mops",
      description:
        "Flooring-safe picks for sealed tile, grout, and sealed hardwood, with an honest warranty routing for engineered hardwood and laminate households.",
      available: true,
    },
    {
      title: "Best Carpet Cleaner Machines for 2026",
      href: "/best-carpet-cleaner-machine",
      eyebrow: "Carpet Cleaners",
      description:
        "Rent-vs-buy math leads before the product list. Five home machines ranked by dry-time with IICRC S100 cadence and CRI Seal of Approval anchors.",
      available: true,
    },
  ] as Array<{
    title: string;
    href: string;
    eyebrow: string;
    description: string;
    available: boolean;
  }>,

  launchGuides: [
    {
      title: "The 6 Best Robot Vacuums of 2026",
      href: "/best-robot-vacuum",
      eyebrow: "Flagship",
      description: "Ranked by labor math. Dock reliability and firmware cadence do most of the work.",
      available: true,
    },
    {
      title: "Best Cordless Vacuum",
      href: "/best-cordless-vacuum",
      eyebrow: "Everyday",
      description: "Mid-priced cordless picks for normal weekly floor care.",
      available: false,
    },
    {
      title: "Best Mop",
      href: "/best-mop",
      eyebrow: "Everyday",
      description: "Basic non-steam picks for renters and apartment dwellers.",
      available: false,
    },
    {
      title: "Best Steam Mop",
      href: "/best-steam-mop",
      eyebrow: "Safe Surface",
      description: "Warranty-first steam picks for sealed tile, grout, and sealed hardwood.",
      available: true,
    },
    {
      title: "Best Handheld Vacuum",
      href: "/best-handheld-vacuum",
      eyebrow: "Everyday",
      description: "Stair-friendly handheld picks for quick cleanups.",
      available: false,
    },
    {
      title: "How to Clean Hardwood Floors",
      href: "/how-to-clean-hardwood-floors",
      eyebrow: "Support",
      description: "Flooring-safe routine built around manufacturer warranty terms.",
      available: false,
    },
    {
      title: "Best Carpet Cleaner Machine",
      href: "/best-carpet-cleaner-machine",
      eyebrow: "Safe Surface",
      description: "Rent-vs-buy math leads; dry-time is the differentiator.",
      available: true,
    },
  ] as Array<{
    title: string;
    href: string;
    eyebrow: string;
    description: string;
    available: boolean;
  }>,

  trustPillars: [
    {
      title: "Real-home friction first",
      description: "The best cleaning tool is the one that still makes sense after you account for docking, refills, noise, tangles, and cleanup hassle.",
    },
    {
      title: "Maintenance counts as performance",
      description: "A powerful cleaner that constantly clogs, leaks, or needs too much upkeep is not a better recommendation.",
    },
    {
      title: "Hype-resistant recommendations",
      description: "We care more about reliable cleaning results and ownership burden than feature sprawl or marketing claims.",
    },
  ],

  comingSoonTopics: [
    "Best Steam Mops",
    "Best Steam Mops for Hardwood Floors",
    "Are Robot Vacuums Worth It?",
    "Cordless Vacuum vs Upright Vacuum",
  ],
} as const;

export type Category = (typeof siteConfig.categories)[number];

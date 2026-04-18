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
    wordmark: "/images/thecleaningreport-wordmark.svg",
    icon: "/images/logo-icon.svg",
    favicon: "/favicon.svg",
    appleTouchIcon: "/apple-touch-icon.svg",
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
      { label: "About", href: "/about" },
      { label: "How We Review", href: "/how-we-review" },
      { label: "Disclosure", href: "/disclosure" },
    ],
    footer: [
      { label: "About", href: "/about" },
      { label: "How We Review", href: "/how-we-review" },
      { label: "Affiliate Disclosure", href: "/disclosure" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },

  featuredCoverage: [
    {
      title: "Best Robot Vacuums",
      href: "/best-robot-vacuum",
      eyebrow: "Launch guide",
      description: "Our first-floor-care anchor page, focused on mapping reliability, dock upkeep, pet hair, and mixed-floor reality.",
      available: true,
    },
    {
      title: "Best Cordless Vacuums",
      href: "/best-cordless-vacuum",
      eyebrow: "Launch guide",
      description: "Daily-use cordless picks ranked for weight, runtime honesty, storage footprint, and easy-emptying upkeep.",
      available: false,
    },
    {
      title: "Best Vacuums for Pet Hair",
      href: "/best-vacuum-for-pet-hair",
      eyebrow: "Launch guide",
      description: "Problem-first picks for shedding, tangles, upholstery hair, litter, and heavier mixed-surface cleanup.",
      available: false,
    },
    {
      title: "About TheCleaningReport",
      href: "/about",
      eyebrow: "Mission and scope",
      description: "See what the site covers first, how the broader indoor-cleaning brand is framed, and what stays out of scope.",
      available: true,
    },
    {
      title: "How We Review",
      href: "/how-we-review",
      eyebrow: "Methodology",
      description: "See how we weigh maintenance burden, floor results, pet-mess friction, and long-term ownership tradeoffs.",
      available: true,
    },
    {
      title: "Affiliate Disclosure",
      href: "/disclosure",
      eyebrow: "Transparency",
      description: "See how affiliate revenue works here and why commissions should not control the rankings.",
      available: true,
    },
  ],

  launchGuides: [
    {
      title: "Best Robot Vacuums",
      href: "/best-robot-vacuum",
      eyebrow: "Automation lane",
      description: "Robot picks for daily floor maintenance, navigation reliability, and dock upkeep that stays manageable.",
      available: true,
    },
    {
      title: "Best Cordless Vacuums",
      href: "/best-cordless-vacuum",
      eyebrow: "Everyday lane",
      description: "Cordless vacuums ranked for practical households that care about weight, runtime, and storage friction.",
      available: false,
    },
    {
      title: "Best Vacuums for Pet Hair",
      href: "/best-vacuum-for-pet-hair",
      eyebrow: "Pet lane",
      description: "Pet-hair-focused recommendations built around tangles, furniture cleanup, carpet pickup, and ongoing maintenance burden.",
      available: false,
    },
  ],

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

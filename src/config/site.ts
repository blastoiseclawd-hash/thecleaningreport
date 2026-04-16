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
      title: "About TheCleaningReport",
      href: "/about",
      eyebrow: "Mission and scope",
      description: "See what the site covers first, how the broader indoor-cleaning brand is framed, and what stays out of scope.",
    },
    {
      title: "How We Review",
      href: "/how-we-review",
      eyebrow: "Methodology",
      description: "See how we weigh maintenance burden, floor results, pet-mess friction, and long-term ownership tradeoffs.",
    },
    {
      title: "Affiliate Disclosure",
      href: "/disclosure",
      eyebrow: "Transparency",
      description: "See how affiliate revenue works here and why commissions should not control the rankings.",
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
    "Robot vacuum buying guides",
    "Cordless vacuum roundups",
    "Pet-hair cleanup guides",
    "Steam mop comparisons",
  ],
} as const;

export type Category = (typeof siteConfig.categories)[number];

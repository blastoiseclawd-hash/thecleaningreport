export const siteConfig = {
  name: "TheCleaningReport",
  domain: "thecleaningreport.com",
  url: "https://thecleaningreport.com",
  tagline: "Practical indoor-cleaning buying guides for cleaner, lower-friction homes.",
  description: "TheCleaningReport publishes practical, independent buying guides for robot vacuums, cordless vacuums, steam mops, pet-mess cleanup, and indoor cleaning tools that help real homes stay cleaner with less friction.",

  colors: {
    primary: "#4F7B62",
    accent: "#C17A43",
    dark: "#16212A",
    light: "#F6F2EA",
    cta: "#2E8B57",
  },

  defaultTitle: "TheCleaningReport | Independent Buying Guides",
  titleTemplate: `%s | TheCleaningReport`,
  ogImage: "https://thecleaningreport.com/opengraph-image",

  author: {
    name: "TheCleaningReport Editorial Desks",
    bio: "Three editorial desks cover everyday buyers, enthusiasts, and precision-minded readers. Every recommendation should be grounded in real research and clear tradeoffs.",
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
      name: "Primary category",
      slug: "primary-category",
      description: "Replace this with the core category your new site will cover first.",
    },
    {
      name: "Secondary category",
      slug: "secondary-category",
      description: "Replace this with the second major category on the site roadmap.",
    },
    {
      name: "Guides",
      slug: "guides",
      description: "Reference content, how-to pages, and evergreen buyer education.",
    },
  ],

  ftcDisclosure:
    "When you buy through our links, we may earn a commission at no extra cost to you.",

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
      title: "How We Review",
      href: "/how-we-review",
      eyebrow: "Editorial standards",
      description: "Explain the sourcing, ranking logic, and update process behind every recommendation.",
    },
    {
      title: "About TheCleaningReport",
      href: "/about",
      eyebrow: "About the publication",
      description: "Introduce the desks, the niche focus, and the kind of reader the site is built for.",
    },
    {
      title: "Affiliate Disclosure",
      href: "/disclosure",
      eyebrow: "Transparency",
      description: "Spell out how commissions work and why they do not control the rankings.",
    },
  ],

  trustPillars: [
    {
      title: "Clear methodology",
      description: "Readers should know how pages are researched, what was compared, and why a pick rose to the top.",
    },
    {
      title: "Useful tradeoffs",
      description: "Every recommendation should include the annoying parts, not just the sales pitch.",
    },
    {
      title: "Decision-first writing",
      description: "The page should help a reader decide faster, not force them through filler first.",
    },
  ],

  comingSoonTopics: [
    "Core buying guides",
    "Comparison pages",
    "Reference content",
    "Trust pages",
  ],
} as const;

export type Category = (typeof siteConfig.categories)[number];

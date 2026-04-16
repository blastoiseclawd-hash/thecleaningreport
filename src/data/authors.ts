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
}

/** Backward compatibility */
export type Author = EditorialDesk;

export const editorialDesks: EditorialDesk[] = [
  {
    slug: "everyday-desk",
    name: "Everyday Desk",
    title: "Practical picks",
    avatar: "/images/desks/everyday-desk.svg",
    bio: "The Everyday Desk covers readers who want clear, low-friction recommendations that hold up in normal daily use.",
    audience: "Busy readers who want the best answer without turning the purchase into a hobby.",
    expertise: ["best overall picks", "value comparisons", "ease-of-use tradeoffs"],
    methodology: "Weights ease of use, reliability, cleanup, price, and owner-reported frustrations most heavily.",
    dataSources: [
      "Long-term owner reviews",
      "Community discussions",
      "Expert roundup consensus",
      "Verified specs and retailer data",
    ],
  },
  {
    slug: "enthusiast-desk",
    name: "Enthusiast Desk",
    title: "Learning and upgrade guides",
    avatar: "/images/desks/enthusiast-desk.svg",
    bio: "The Enthusiast Desk serves readers who want to learn, compare, and grow into better gear over time.",
    audience: "Readers who care about progression, comparison logic, and the path from beginner to confident buyer.",
    expertise: ["beginner upgrades", "comparison pages", "learning-curve analysis"],
    methodology: "Looks for the products that teach well, scale well, and earn strong long-term owner feedback.",
    dataSources: [
      "Specialist communities",
      "Hands-on reviewer consensus",
      "Long-term owner reviews",
      "Brand documentation",
    ],
  },
  {
    slug: "lab-desk",
    name: "Lab Desk",
    title: "Technical analysis",
    avatar: "/images/desks/lab-desk.svg",
    bio: "The Lab Desk focuses on engineering tradeoffs, measurable performance, and the details that matter to precision-minded buyers.",
    audience: "Readers who care about specifications, durability, serviceability, and the reasons behind a recommendation.",
    expertise: ["technical comparisons", "build quality", "durability analysis"],
    methodology: "Cross-references measurements, teardown evidence, expert testing, and failure-mode patterns.",
    dataSources: [
      "Technical reviews",
      "Teardown videos",
      "Community troubleshooting threads",
      "Manufacturer specs",
    ],
  },
];

/** Backward compatibility */
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

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
    slug: "everyday-cleaning-desk",
    name: "Everyday Cleaning Desk",
    title: "Daily-use defaults",
    avatar: "/images/desks/everyday-desk.svg",
    bio: "The Everyday Cleaning Desk covers straightforward indoor-cleaning picks for readers who want cleaner floors and simpler routines without turning the purchase into a hobby.",
    audience: "Busy floor-care upgraders and smaller-home cleaners who want clear defaults and low-friction ownership.",
    expertise: ["best overall picks", "ease-of-use tradeoffs", "daily-use comparisons"],
    methodology: "Weights cleaning results, setup simplicity, maintenance burden, storage footprint, and long-term hassle most heavily.",
    dataSources: [
      "Long-term owner reviews",
      "Retailer Q&A patterns",
      "Expert roundup consensus",
      "Verified specs and retailer data",
    ],
  },
  {
    slug: "floor-care-pet-mess-desk",
    name: "Floor Care & Pet Mess Desk",
    title: "Floor care and pet cleanup",
    avatar: "/images/desks/enthusiast-desk.svg",
    bio: "The Floor Care & Pet Mess Desk focuses on vacuums, robot vacuums, hair pickup, edge cleaning, and the messier households that punish weak recommendations quickly.",
    audience: "Pet-mess managers and higher-friction households that need tools to handle hair, tracked-in dirt, and heavier-use floor care.",
    expertise: ["robot vacuums", "pet-hair cleanup", "floor-care comparisons"],
    methodology: "Looks hardest at pickup consistency, edge performance, brush-roll tangles, bin maintenance, battery or dock friction, and durability under repeated use.",
    dataSources: [
      "Owner reviews from pet households",
      "Expert floor-care testing",
      "Troubleshooting threads",
      "Manufacturer specs and accessory data",
    ],
  },
  {
    slug: "deep-clean-maintenance-desk",
    name: "Deep Clean & Maintenance Desk",
    title: "Deep-clean tools",
    avatar: "/images/desks/lab-desk.svg",
    bio: "The Deep Clean & Maintenance Desk covers steam mops and indoor maintenance tools where the real question is whether a specialized tool earns its storage space and upkeep.",
    audience: "Readers buying for periodic resets, tougher residue, or specialized indoor cleaning jobs rather than everyday floor pickup.",
    expertise: ["steam mops", "specialty cleaning tools", "maintenance-tool tradeoffs"],
    methodology: "Compares payoff against setup friction, refill or consumable burden, drying time, storage penalty, and whether the tool solves a real recurring problem.",
    dataSources: [
      "Technical reviews",
      "Owner maintenance feedback",
      "Brand documentation",
      "Retailer friction signals",
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

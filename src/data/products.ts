export interface ProductImage {
  url: string;
  alt: string;
}

export interface AffiliateLink {
  retailer: string;
  url: string;
  tag?: string;
  priority: number;
}

// TCR-exclusive signature — 0-5 scale per axis, 0 = worst friction, 5 = best.
// Default axes are TCR-standard; individual pages may override via content
// data `frictionAxes` if a category does not use one of the five (e.g. a
// cordless vacuum has no dock axis).
export interface FrictionScoreAxes {
  clean: number;
  nav: number;
  dock: number;
  noise: number;
  routine: number;
}

export interface Product {
  id: string;
  slug: string;
  asin: string;
  name: string;
  brand: string;
  model: string;
  category: string;
  subcategory?: string;
  bestFor: string[];
  price: number | null;
  priceCurrency: "USD";
  priceLastChecked: string;
  priceSource: string;
  rating: number;
  reviewCount: number;
  ratingLastChecked: string;
  images: ProductImage[];
  thumbnailUrl: string;
  specs: Record<string, string>;
  pros: string[];
  cons: string[];
  verdict: string;
  authorSlug: string;
  affiliateLinks: AffiliateLink[];
  lastUpdated: string;
  updateNotes: string;
  status: "active" | "discontinued" | "out-of-stock";
  frictionScore?: FrictionScoreAxes;
}

export const categorySpecs: Record<string, string[]> = {
  "robot-vacuums": [
    "Suction",
    "Dock",
    "Mopping",
    "Navigation",
    "Best fit",
  ],
};

export function buildAmazonLink(asin: string, tag = "thecleaningreport-20"): string {
  return `https://www.amazon.com/dp/${asin}?tag=${tag}`;
}

export function getAffiliateLinksByPriority(product: Product): AffiliateLink[] {
  return [...product.affiliateLinks]
    .filter((link) => Boolean(link.url))
    .sort((a, b) => a.priority - b.priority);
}

export function getPreferredAffiliateLink(product: Product): AffiliateLink | null {
  const [preferred] = getAffiliateLinksByPriority(product);
  return preferred ?? null;
}

export function getSecondaryAffiliateLinks(product: Product): AffiliateLink[] {
  return getAffiliateLinksByPriority(product).slice(1);
}

export function getProductOfferLink(
  product: Product,
  tag = "thecleaningreport-20",
): AffiliateLink | null {
  const preferred = getPreferredAffiliateLink(product);
  if (preferred) {
    return preferred;
  }

  if (product.asin) {
    return {
      retailer: "Amazon",
      url: buildAmazonLink(product.asin, tag),
      tag,
      priority: 999,
    };
  }

  return null;
}

export function getProductOfferUrl(product: Product, tag = "thecleaningreport-20"): string {
  return getProductOfferLink(product, tag)?.url ?? "";
}

export function getCommerceLinkRel(link: AffiliateLink | null | undefined): string {
  if (!link?.url) {
    return "noopener noreferrer";
  }

  return link.tag
    ? "noopener noreferrer nofollow sponsored"
    : "noopener noreferrer nofollow";
}

export function priceDisplay(product: Product): string {
  if (product.price === null) {
    return "Check current price";
  }
  return `$${product.price.toFixed(2)}`;
}

export const products: Product[] = [
  {
    id: "dreame-l50-ultra",
    slug: "dreame-l50-ultra",
    asin: "B0F3J6FR1H",
    name: "Dreame L50 Ultra Robot Vacuum",
    brand: "Dreame",
    model: "L50 Ultra",
    category: "robot-vacuums",
    subcategory: "all-around-premium",
    bestFor: [
      "Best overall",
      "Mixed floors",
      "Homes that want premium automation without flagship pricing",
    ],
    price: 699.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-16",
    priceSource: "amazon",
    rating: 4.3,
    reviewCount: 445,
    ratingLastChecked: "2026-04-16",
    images: [
      {
        url: "https://www.dreametech.com/cdn/shop/files/Dreame_L50_Ultra_1200x1200.png?v=1767167934",
        alt: "Dreame L50 Ultra robot vacuum with dock in white finish",
      },
      {
        url: "https://www.dreametech.com/cdn/shop/files/Dreame_L50_Ultra.png?v=1767167934&width=1024",
        alt: "Dreame L50 Ultra robot vacuum and dock angled product view",
      },
    ],
    thumbnailUrl:
      "https://www.dreametech.com/cdn/shop/files/Dreame_L50_Ultra_1200x1200.png?v=1767167934",
    specs: {
      Suction: "19,500 Pa",
      Dock: "Self-empty dock with mop washing and drying",
      Mopping: "Dual spinning pads",
      Navigation: "360-degree obstacle handling",
      "Best fit": "Premium default for mixed-floor homes",
    },
    pros: [
      "Strong balance of navigation, dock automation, and real current price",
      "Good fit for homes that want fewer manual touch points without jumping to the most expensive tier",
      "Solid hair and threshold story from current reviewer and owner consensus",
    ],
    cons: [
      "Still a premium robot vacuum with premium consumable and dock complexity",
      "Bigger value argument if you will actually use the mop and dock automation",
    ],
    verdict:
      "The L50 Ultra is the cleanest all-around recommendation in the current robot-vacuum field because it covers the premium basics well without forcing most homes into the highest-price tier.",
    authorSlug: "floor-care-pet-mess-desk",
    affiliateLinks: [
      {
        retailer: "Amazon",
        url: "https://www.amazon.com/dp/B0F3J6FR1H?tag=thecleaningreport-20",
        tag: "thecleaningreport-20",
        priority: 1,
      },
      {
        retailer: "Dreame",
        url: "https://www.dreametech.com/products/l50-ultra-robot-vacuum",
        priority: 2,
      },
    ],
    lastUpdated: "2026-04-16",
    updateNotes:
      "Best robot vacuum lineup data verified against current Amazon listing plus Dreame official product page.",
    status: "active",
  },
  {
    id: "roborock-saros-10r",
    slug: "roborock-saros-10r",
    asin: "",
    name: "Roborock Saros 10R Robot Vacuum",
    brand: "Roborock",
    model: "Saros 10R",
    category: "robot-vacuums",
    subcategory: "flagship-premium",
    bestFor: [
      "Best premium pick",
      "Low furniture",
      "Buyers who care most about obstacle handling",
    ],
    price: 1299.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-16",
    priceSource: "official-store",
    rating: 0,
    reviewCount: 0,
    ratingLastChecked: "2026-04-16",
    images: [
      {
        url: "https://us.roborock.com/cdn/shop/files/1752557554957.png?v=1752557554&width=1200",
        alt: "Roborock Saros 10R robot vacuum with premium dock",
      },
    ],
    thumbnailUrl:
      "https://us.roborock.com/cdn/shop/files/1752557554957.png?v=1752557554&width=1200",
    specs: {
      Profile: "3.14 in low-clearance body",
      Dock: "Self-empty dock with mop washing and drying",
      Mopping: "Premium vacuum and mop combo",
      Navigation: "Advanced obstacle handling for cluttered floors",
      "Best fit": "Homes paying for under-furniture reach and premium mapping",
    },
    pros: [
      "Excellent fit for homes where low furniture and navigation misses are the real pain points",
      "Premium dock and obstacle system make sense for busy mixed-floor layouts",
      "Stronger premium justification than many flashier flagship robots",
    ],
    cons: [
      "The price jump only makes sense if low-clearance reach and mapping actually change your routine",
      "Premium robot ownership still means more dock upkeep and app dependence than cheaper picks",
    ],
    verdict:
      "The Saros 10R is the premium answer when clearance and obstacle handling are worth paying for. It is not the value pick, but it is one of the clearest reasons to spend more.",
    authorSlug: "floor-care-pet-mess-desk",
    affiliateLinks: [
      {
        retailer: "Roborock",
        url: "https://us.roborock.com/products/roborock-saros-10r",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-16",
    updateNotes:
      "Current retail price and product imagery verified on Roborock official store; review counts were not surfaced cleanly in-session.",
    status: "active",
  },
  {
    id: "tp-link-tapo-rv30-max-plus",
    slug: "tp-link-tapo-rv30-max-plus",
    asin: "",
    name: "TP-Link Tapo RV30 Max Plus Robot Vacuum and Mop",
    brand: "TP-Link Tapo",
    model: "RV30 Max Plus",
    category: "robot-vacuums",
    subcategory: "budget-self-empty",
    bestFor: [
      "Best budget pick",
      "Budget self-empty shoppers",
      "Apartments and lighter daily floor maintenance",
    ],
    price: 189.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-16",
    priceSource: "official-store",
    rating: 0,
    reviewCount: 0,
    ratingLastChecked: "2026-04-16",
    images: [
      {
        url: "https://us.store.tapo.com/cdn/shop/files/2604-AprSh-PRODUCT-RV30-Max-Plus-weekly-0413.jpg?v=1776128684",
        alt: "TP-Link Tapo RV30 Max Plus robot vacuum with auto-empty dock",
      },
    ],
    thumbnailUrl:
      "https://us.store.tapo.com/cdn/shop/files/2604-AprSh-PRODUCT-RV30-Max-Plus-weekly-0413.jpg?v=1776128684",
    specs: {
      Suction: "5,300 Pa",
      Dock: "Auto-empty dock",
      Mopping: "Vacuum and mop combo",
      Navigation: "LiDAR mapping",
      "Best fit": "Low-cost self-empty automation",
    },
    pros: [
      "One of the most practical current ways to get an auto-empty dock without overspending",
      "Clear value story for lighter mess and daily maintenance jobs",
      "Much easier recommendation than ultracheap robots that still need constant babysitting",
    ],
    cons: [
      "Budget combo robots still give up refinement in obstacle handling and edge detail",
      "The current store promo is strong, but pricing may swing more than the premium picks above it",
    ],
    verdict:
      "The Tapo RV30 Max Plus is the budget robot most readers should start with when they want self-emptying without paying premium-dock money. You just have to keep your expectations in the budget lane.",
    authorSlug: "floor-care-pet-mess-desk",
    affiliateLinks: [
      {
        retailer: "TP-Link Tapo",
        url: "https://us.store.tapo.com/products/tapo-rv30-max-plus-5300pa-suction-robot-vacuum-mop-with-auto-empty-dock",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-16",
    updateNotes:
      "Current store pricing reflects the visible Tapo auto-applied discount shown on 2026-04-16.",
    status: "active",
  },
  {
    id: "yeedi-s20-plus",
    slug: "yeedi-s20-plus",
    asin: "B0FKSMWJHM",
    name: "Yeedi S20 Plus Robot Vacuum and Mop",
    brand: "Yeedi",
    model: "S20 Plus",
    category: "robot-vacuums",
    subcategory: "bagless-dock",
    bestFor: [
      "Best bagless dock pick",
      "Homes that hate replacement bags",
      "Buyers who still want a full robot and mop system",
    ],
    price: 699.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-16",
    priceSource: "amazon",
    rating: 4.0,
    reviewCount: 299,
    ratingLastChecked: "2026-04-16",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/41WnAdfqthL._AC_SY300_SX300_QL70_ML2_.jpg",
        alt: "Yeedi S20 Plus robot vacuum sitting on bagless auto-empty dock",
      },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/41WnAdfqthL._AC_SY300_SX300_QL70_ML2_.jpg",
    specs: {
      Suction: "18,000 Pa",
      Dock: "Bagless auto-empty dock",
      Mopping: "Vacuum and mop combo",
      Navigation: "AI-assisted obstacle handling",
      "Best fit": "Shoppers who want fewer replacement-bag headaches",
    },
    pros: [
      "Bagless dock makes this lineup more honest for readers who dislike ongoing bag costs",
      "Strong current suction spec and hair-handling positioning for the money",
      "Useful middle-ground alternative to both budget robots and ultra-premium flagships",
    ],
    cons: [
      "Owner feedback still flags some dock cleanup friction once hair and wet mess build up",
      "Lower review volume than the most established premium brands",
    ],
    verdict:
      "The Yeedi S20 Plus earns its spot because it solves a real ownership annoyance that other robots ignore: some people do not want a bagged dock at all. That makes it more than just another spec-sheet duplicate.",
    authorSlug: "floor-care-pet-mess-desk",
    affiliateLinks: [
      {
        retailer: "Amazon",
        url: "https://www.amazon.com/dp/B0FKSMWJHM?tag=thecleaningreport-20",
        tag: "thecleaningreport-20",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-16",
    updateNotes:
      "Price, rating, and review count pulled from the current Amazon product listing for the best robot vacuum lineup.",
    status: "active",
  },
  {
    id: "dreame-x60-ultra",
    slug: "dreame-x60-ultra",
    asin: "B0G5X4H4PS",
    name: "Dreame X60 Ultra Robot Vacuum",
    brand: "Dreame",
    model: "X60 Ultra",
    category: "robot-vacuums",
    subcategory: "flagship-splurge",
    bestFor: [
      "Best splurge pick",
      "High-end automation shoppers",
      "Readers who want the most ambitious docked system in the field",
    ],
    price: 1614.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-16",
    priceSource: "amazon",
    rating: 4.2,
    reviewCount: 117,
    ratingLastChecked: "2026-04-16",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/5158nUZHaVL._AC_SY300_SX300_QL70_ML2_.jpg",
        alt: "Dreame X60 Ultra robot vacuum with dock",
      },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/5158nUZHaVL._AC_SY300_SX300_QL70_ML2_.jpg",
    specs: {
      Suction: "19,000 Pa",
      Dock: "Flagship self-empty dock with mop care",
      Mopping: "Dual spinning pads",
      Navigation: "Top-tier obstacle handling",
      "Best fit": "Readers paying for the ceiling, not the value sweet spot",
    },
    pros: [
      "One of the strongest current flagship robots if you want maximum automation and premium hardware",
      "Reviewer consensus still treats it as a serious top-end benchmark",
      "Good fit for shoppers who already know they want to spend big on a docked robot system",
    ],
    cons: [
      "It is wildly expensive compared with the actual routine improvement most homes need",
      "Harder to justify when the L50 Ultra already covers the mainstream premium case so well",
    ],
    verdict:
      "The X60 Ultra is the splurge pick for readers who want the premium ceiling. It is impressive, but it is not the smart default once value enters the conversation.",
    authorSlug: "floor-care-pet-mess-desk",
    affiliateLinks: [
      {
        retailer: "Amazon",
        url: "https://www.amazon.com/dp/B0G5X4H4PS?tag=thecleaningreport-20",
        tag: "thecleaningreport-20",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-16",
    updateNotes:
      "Current Amazon price, review count, and listing imagery verified during the robot vacuum research pass.",
    status: "active",
  },
  {
    id: "roborock-q7-m5",
    slug: "roborock-q7-m5",
    asin: "",
    name: "Roborock Q7 M5 Robot Vacuum",
    brand: "Roborock",
    model: "Q7 M5",
    category: "robot-vacuums",
    subcategory: "vacuum-first-value",
    bestFor: [
      "Best vacuum-first value pick",
      "Carpet-first homes on a tighter budget",
      "Readers who want simpler robot ownership",
    ],
    price: 229.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-16",
    priceSource: "official-store",
    rating: 0,
    reviewCount: 0,
    ratingLastChecked: "2026-04-16",
    images: [
      {
        url: "https://us.roborock.com/cdn/shop/files/01_q7m5.png?v=1756713888&width=1946",
        alt: "Roborock Q7 M5 robot vacuum in white finish with charging base",
      },
    ],
    thumbnailUrl: "https://us.roborock.com/cdn/shop/files/01_q7m5.png?v=1756713888&width=1946",
    specs: {
      Suction: "10,000 Pa",
      Dock: "Charging base",
      Mopping: "Vacuum with basic mopping support",
      Navigation: "LiDAR mapping with no-go zones",
      "Best fit": "Simple value robot for vacuum-first jobs",
    },
    pros: [
      "Cleaner value story for buyers who care more about vacuuming than fancy dock automation",
      "A more practical fit than many cheap robots that oversell smart features",
      "Useful option for carpet-biased homes that want a simpler robot in the mix",
    ],
    cons: [
      "Less obstacle intelligence and less hands-off ownership than the more expensive picks above it",
      "Charging-base-only setup means more manual bin work and less automation payoff",
    ],
    verdict:
      "The Q7 M5 is the simpler value robot for readers who do not need a premium dock story. It belongs here because not every home wants to buy a full docked ecosystem.",
    authorSlug: "floor-care-pet-mess-desk",
    affiliateLinks: [
      {
        retailer: "Roborock",
        url: "https://us.roborock.com/products/roborock-q7-m5?bvstate=pg%3A14%2Fct%3Ar",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-16",
    updateNotes:
      "Current price and official imagery verified on Roborock store; review metrics were not surfaced cleanly in-session.",
    status: "active",
  },
];

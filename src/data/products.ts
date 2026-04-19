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

export const categorySpecs: Record<string, string[]> = {};

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

// Scraping-stage product entries. Editorial pros/cons/verdict live in
// src/data/content/*.ts — these fields here are lean placeholders from
// Amazon scrape data (2026-04-19). FrictionScoreAxes (TCR signature)
// are initial estimates derived from the research doc evidence; editorial
// may adjust per-page as direct-test data lands.
export const products: Product[] = [
  {
    id: "mova-v50-ultra-complete",
    slug: "mova-v50-ultra-complete",
    asin: "B0F3WQTM9Q",
    name: "Mova V50 Ultra Complete",
    brand: "Mova",
    model: "V50 Ultra Complete",
    category: "robot-vacuum",
    bestFor: ["overall cleaning performance", "mixed floor homes", "pet households"],
    price: 699.00,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-19",
    priceSource: "Amazon",
    rating: 4.0,
    reviewCount: 247,
    ratingLastChecked: "2026-04-19",
    images: [
      { url: "https://m.media-amazon.com/images/I/61yh7O-JBSL._AC_SL1500_.jpg", alt: "Mova V50 Ultra Complete robot vacuum on its self-clean base station" },
      { url: "https://m.media-amazon.com/images/I/41JrGHsbD5L._SL1500_.jpg", alt: "Mova V50 Ultra Complete with dock" },
      { url: "https://m.media-amazon.com/images/I/41q3+SqHiML._SL1500_.jpg", alt: "Mova V50 Ultra Complete liftable navigation diagram" },
      { url: "https://m.media-amazon.com/images/I/41QGp72DcyL._SL1500_.jpg", alt: "Mova V50 Ultra Complete mop system" },
      { url: "https://m.media-amazon.com/images/I/41dqAHqHJEL._SL1500_.jpg", alt: "Mova V50 Ultra Complete cleaning carpet" },
      { url: "https://m.media-amazon.com/images/I/41YBMObk5LL._SL1500_.jpg", alt: "Mova V50 Ultra Complete under furniture" },
      { url: "https://m.media-amazon.com/images/I/41dz25-p2bL._SL1500_.jpg", alt: "Mova V50 Ultra Complete app interface" },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/61yh7O-JBSL._AC_SL1500_.jpg",
    specs: {
      "Suction": "24,000 Pa",
      "Mopping": "Warm water DuoSolution",
      "Navigation": "Liftable LDS sensor (FlexiRise)",
      "Dock": "Self-clean + self-empty",
    },
    pros: [
      "24,000 Pa suction with 100% hair-removal brush",
      "Warm-water DuoSolution mopping for stubborn stains",
    ],
    cons: [
      "Firmware update path has failed for some owners",
      "Battery life runs shorter than spec in real-home tests",
    ],
    verdict: "Placeholder — editorial review in /best-robot-vacuum content file.",
    authorSlug: "labor-math-desk",
    affiliateLinks: [
      { retailer: "Amazon", url: buildAmazonLink("B0F3WQTM9Q"), tag: "thecleaningreport-20", priority: 1 },
    ],
    lastUpdated: "2026-04-19",
    updateNotes: "Initial scrape + validation 2026-04-19 (Playwright MCP).",
    status: "active",
    frictionScore: { clean: 4.5, nav: 3.5, dock: 4.0, noise: 3.5, routine: 3.5 },
  },
  {
    id: "dreame-x50-ultra",
    slug: "dreame-x50-ultra",
    asin: "B0DP2KP5P8",
    name: "Dreame X50 Ultra",
    brand: "Dreame",
    model: "X50 Ultra",
    category: "robot-vacuum",
    bestFor: ["homes with thresholds", "premium budget", "hardwood-heavy layouts"],
    price: 899.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-19",
    priceSource: "Amazon",
    rating: 4.3,
    reviewCount: 651,
    ratingLastChecked: "2026-04-19",
    images: [
      { url: "https://m.media-amazon.com/images/I/613mvDKX1hL._AC_SL1500_.jpg", alt: "Dreame X50 Ultra robot vacuum with auto-empty and mop self-cleaning base" },
      { url: "https://m.media-amazon.com/images/I/318pmwzpSbL._SL1500_.jpg", alt: "Dreame X50 Ultra side view" },
      { url: "https://m.media-amazon.com/images/I/51yfiUDdj+L._SL1500_.jpg", alt: "Dreame X50 Ultra threshold-climbing" },
      { url: "https://m.media-amazon.com/images/I/41FNRL2WLoL._SL1500_.jpg", alt: "Dreame X50 Ultra VersaLift navigation" },
      { url: "https://m.media-amazon.com/images/I/51MkfwlGxHL._SL1500_.jpg", alt: "Dreame X50 Ultra DuoBrush detangling system" },
      { url: "https://m.media-amazon.com/images/I/51kBQkLToxL._SL1500_.jpg", alt: "Dreame X50 Ultra mop self-cleaning" },
      { url: "https://m.media-amazon.com/images/I/51PtlCgYPUL._SL1500_.jpg", alt: "Dreame X50 Ultra control interface" },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/613mvDKX1hL._AC_SL1500_.jpg",
    specs: {
      "Suction": "20,000 Pa",
      "Threshold climb": "Up to 2.36 inches",
      "Navigation": "VersaLift + 360° sensing",
      "Brush system": "DuoBrush anti-tangle (hair up to 11.8 in)",
    },
    pros: [
      "Cross thresholds and obstacles up to 2.36 inches",
      "Retractable legs + VersaLift let it navigate under 3.5-inch furniture",
    ],
    cons: [
      "Full retail sits near the top of the Labor Trader price band",
      "Uses ~20% battery per 182.8 sq-ft room — mid-cycle recharge in larger homes",
    ],
    verdict: "Placeholder — editorial review in /best-robot-vacuum content file.",
    authorSlug: "labor-math-desk",
    affiliateLinks: [
      { retailer: "Amazon", url: buildAmazonLink("B0DP2KP5P8"), tag: "thecleaningreport-20", priority: 1 },
    ],
    lastUpdated: "2026-04-19",
    updateNotes: "Initial scrape + validation 2026-04-19 (Playwright MCP).",
    status: "active",
    frictionScore: { clean: 4.5, nav: 4.5, dock: 4.0, noise: 3.5, routine: 3.5 },
  },
  {
    id: "ecovacs-deebot-x8-pro-omni",
    slug: "ecovacs-deebot-x8-pro-omni",
    asin: "B0DR8NJMCJ",
    name: "Ecovacs Deebot X8 Pro Omni",
    brand: "Ecovacs",
    model: "Deebot X8 Pro Omni",
    category: "robot-vacuum",
    bestFor: ["pet hair (shedding, non-accident homes)", "hard floors", "hot-water mop washing"],
    price: 799.00,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-19",
    priceSource: "Amazon",
    rating: 3.8,
    reviewCount: 366,
    ratingLastChecked: "2026-04-19",
    images: [
      { url: "https://m.media-amazon.com/images/I/61QoZUT0N2L._AC_SL1500_.jpg", alt: "Ecovacs Deebot X8 Pro Omni robot vacuum with self-cleaning roller mop base" },
      { url: "https://m.media-amazon.com/images/I/41c2pUAx5XL._SL1500_.jpg", alt: "Ecovacs Deebot X8 Pro Omni showing 18,000 Pa suction intake" },
      { url: "https://m.media-amazon.com/images/I/51NOiPwv+2L._SL1500_.jpg", alt: "Ecovacs Deebot X8 Pro Omni OZMO roller mop" },
      { url: "https://m.media-amazon.com/images/I/419tlAYF2qL._SL1500_.jpg", alt: "Ecovacs Deebot X8 Pro Omni ZeroTangle brush" },
      { url: "https://m.media-amazon.com/images/I/51zw7wZeINL._SL1500_.jpg", alt: "Ecovacs Deebot X8 Pro Omni hot water wash" },
      { url: "https://m.media-amazon.com/images/I/51kTFkVQqJL._SL1500_.jpg", alt: "Ecovacs Deebot X8 Pro Omni dock detail" },
      { url: "https://m.media-amazon.com/images/I/518sYW1s2yL._SL1500_.jpg", alt: "Ecovacs Deebot X8 Pro Omni on hardwood" },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/61QoZUT0N2L._AC_SL1500_.jpg",
    specs: {
      "Suction": "18,000 Pa",
      "Mop system": "OZMO Roller, self-washing in real time",
      "Mop wash temp": "167°F hot water + hot air dry",
      "Brush": "ZeroTangle 2.0",
    },
    pros: [
      "Instant self-washing roller mop — no inter-cycle dirt spread",
      "Strong hardwood pickup and zero pet-hair left in brush-roll during lab tests",
    ],
    cons: [
      "Obstacle-avoidance test: simulated pet waste stuck in main brush (CNET)",
      "Midpile carpet pickup ranges 10-36% across runs — inconsistent",
    ],
    verdict: "Placeholder — editorial review in /best-robot-vacuum content file.",
    authorSlug: "labor-math-desk",
    affiliateLinks: [
      { retailer: "Amazon", url: buildAmazonLink("B0DR8NJMCJ"), tag: "thecleaningreport-20", priority: 1 },
    ],
    lastUpdated: "2026-04-19",
    updateNotes: "Initial scrape + validation 2026-04-19 (Playwright MCP).",
    status: "active",
    frictionScore: { clean: 4.0, nav: 3.0, dock: 4.5, noise: 3.5, routine: 4.0 },
  },
  {
    id: "yeedi-s20-infinity",
    slug: "yeedi-s20-infinity",
    asin: "B0FKSMWJHM",
    name: "Yeedi S20 Infinity",
    brand: "Yeedi",
    model: "S20 Infinity",
    category: "robot-vacuum",
    bestFor: ["bagless operation", "zero disposable-bag operating cost", "mostly hard floors"],
    price: 799.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-19",
    priceSource: "Amazon",
    rating: 4.1,
    reviewCount: 276,
    ratingLastChecked: "2026-04-19",
    images: [
      { url: "https://m.media-amazon.com/images/I/71KmHW48zzL._AC_SL1500_.jpg", alt: "Yeedi S20 Infinity robot vacuum with OmniCyclone bagless base station" },
      { url: "https://m.media-amazon.com/images/I/410A8y8Q+UL._SL1500_.jpg", alt: "Yeedi S20 Infinity front profile" },
      { url: "https://m.media-amazon.com/images/I/51S1ukVAgEL._SL1500_.jpg", alt: "Yeedi S20 Infinity OZMO Roller 2.0 self-washing mop" },
      { url: "https://m.media-amazon.com/images/I/51jCDw8aspL._SL1500_.jpg", alt: "Yeedi S20 Infinity PowerBoost charging" },
      { url: "https://m.media-amazon.com/images/I/41MBskpMGWL._SL1500_.jpg", alt: "Yeedi S20 Infinity bagless cyclone detail" },
      { url: "https://m.media-amazon.com/images/I/51rJYTEvD7L._SL1500_.jpg", alt: "Yeedi S20 Infinity AIVI 3D navigation" },
      { url: "https://m.media-amazon.com/images/I/51jKVDhkb-L._SL1500_.jpg", alt: "Yeedi S20 Infinity control app" },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/71KmHW48zzL._AC_SL1500_.jpg",
    specs: {
      "Suction": "19,500 Pa (38 CFM airflow)",
      "Base station": "Bagless OmniCyclone — no replacement bags",
      "Mop": "OZMO Roller 2.0 self-washing, hot mop wash + heat dry",
      "Navigation": "AIVI 3D",
    },
    pros: [
      "Bagless OmniCyclone station eliminates disposable-bag operating cost",
      "94.89% hardwood sand pickup in CNET lab + zero pet hair left in dustbin",
    ],
    cons: [
      "Struggles on midpile carpet (23.19% sand pickup)",
      "Failed to trigger carpet suction-boost accurately in lab tests",
    ],
    verdict: "Placeholder — editorial review in /best-robot-vacuum content file.",
    authorSlug: "labor-math-desk",
    affiliateLinks: [
      { retailer: "Amazon", url: buildAmazonLink("B0FKSMWJHM"), tag: "thecleaningreport-20", priority: 1 },
    ],
    lastUpdated: "2026-04-19",
    updateNotes: "Initial scrape + validation 2026-04-19 (Playwright MCP).",
    status: "active",
    frictionScore: { clean: 3.5, nav: 3.5, dock: 4.5, noise: 3.5, routine: 4.5 },
  },
  {
    id: "roborock-qrevo-curvx",
    slug: "roborock-qrevo-curvx",
    asin: "B0DX1DQKMD",
    name: "Roborock Qrevo CurvX",
    brand: "Roborock",
    model: "Qrevo CurvX",
    category: "robot-vacuum",
    bestFor: ["mature Roborock app + navigation", "low-clearance furniture", "non-long-hair homes"],
    price: 899.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-19",
    priceSource: "Amazon",
    rating: 4.1,
    reviewCount: 354,
    ratingLastChecked: "2026-04-19",
    images: [
      { url: "https://m.media-amazon.com/images/I/51GvwytZMFL._AC_SL1500_.jpg", alt: "Roborock Qrevo CurvX slim-profile robot vacuum with hot-water mop dock" },
      { url: "https://m.media-amazon.com/images/I/31o2iLw4ubL._SL1500_.jpg", alt: "Roborock Qrevo CurvX top view" },
      { url: "https://m.media-amazon.com/images/I/41zr9chYrXL._SL1500_.jpg", alt: "Roborock Qrevo CurvX 3.14-inch slim profile" },
      { url: "https://m.media-amazon.com/images/I/51Yd2KMCWIL._SL1500_.jpg", alt: "Roborock Qrevo CurvX AdaptiLift chassis" },
      { url: "https://m.media-amazon.com/images/I/3157REcppSL._SL1500_.jpg", alt: "Roborock Qrevo CurvX HyperForce suction detail" },
      { url: "https://m.media-amazon.com/images/I/419+8jZztHL._SL1500_.jpg", alt: "Roborock Qrevo CurvX 80°C hot water mop wash" },
      { url: "https://m.media-amazon.com/images/I/41KFSbGBfpL._SL1500_.jpg", alt: "Roborock Qrevo CurvX zero-tangle brush" },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/51GvwytZMFL._AC_SL1500_.jpg",
    specs: {
      "Suction": "22,000 Pa HyperForce",
      "Profile": "3.14 in (80 mm) — slimmest Roborock",
      "Mop wash": "80°C hot water + drying",
      "Chassis": "AdaptiLift + Zero-Tangling",
    },
    pros: [
      "Slim 3.14-inch profile clears low-clearance furniture",
      "Roborock's mature app + navigation stack (MC Q Revo lineage scored 90.9 navigation)",
    ],
    cons: [
      "Long-hair tangle-avoidance at 53.3% in Modern Castle testing — below Shark Matrix (93.3%)",
      "Not a pick for long-hair households",
    ],
    verdict: "Placeholder — editorial review in /best-robot-vacuum content file.",
    authorSlug: "labor-math-desk",
    affiliateLinks: [
      { retailer: "Amazon", url: buildAmazonLink("B0DX1DQKMD"), tag: "thecleaningreport-20", priority: 1 },
    ],
    lastUpdated: "2026-04-19",
    updateNotes: "Initial scrape + validation 2026-04-19 (Playwright MCP).",
    status: "active",
    frictionScore: { clean: 4.0, nav: 4.5, dock: 4.0, noise: 4.0, routine: 4.0 },
  },
  {
    id: "eufy-robot-vacuum-e28",
    slug: "eufy-robot-vacuum-e28",
    asin: "B0FK2JCM6K",
    name: "Eufy E28 Omni",
    brand: "eufy",
    model: "E28",
    category: "robot-vacuum",
    bestFor: ["cluttered homes (best obstacle avoidance)", "carpet-heavy layouts", "households avoiding a separate carpet cleaner"],
    price: 649.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-19",
    priceSource: "Amazon",
    rating: 4.4,
    reviewCount: 6472,
    ratingLastChecked: "2026-04-19",
    images: [
      { url: "https://m.media-amazon.com/images/I/61wyQr3PaGL._AC_SL1500_.jpg", alt: "Eufy E28 robot vacuum with detachable carpet deep-cleaner" },
      { url: "https://m.media-amazon.com/images/I/31W0zK-bUSL._SL1500_.jpg", alt: "Eufy E28 top view with dock" },
      { url: "https://m.media-amazon.com/images/I/41xVZtuBvUL._SL1500_.jpg", alt: "Eufy E28 HydroJet roller mop system" },
      { url: "https://m.media-amazon.com/images/I/41RvnHGcz7L._SL1500_.jpg", alt: "Eufy E28 portable carpet deep cleaner unit" },
      { url: "https://m.media-amazon.com/images/I/41satO+0sPL._SL1500_.jpg", alt: "Eufy E28 corner-to-edge cleaning" },
      { url: "https://m.media-amazon.com/images/I/51OK1NjRtmL._SL1500_.jpg", alt: "Eufy E28 obstacle avoidance sensors" },
      { url: "https://m.media-amazon.com/images/I/41ks2DjJvEL._SL1500_.jpg", alt: "Eufy E28 zero-tangling brush detail" },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/61wyQr3PaGL._AC_SL1500_.jpg",
    specs: {
      "Suction": "20,000 Pa",
      "Unique feature": "Detachable portable carpet deep-cleaner",
      "Mop": "HydroJet self-washing roller",
      "Brush": "Zero-tangling, corner-to-edge",
    },
    pros: [
      "Excellent obstacle avoidance (5 of 6 avoided in CNET test)",
      "Only roundup robot vacuum with an integrated portable carpet deep-cleaner",
    ],
    cons: [
      "Average overall pickup (44.49% across flooring types)",
      "Lowest room coverage in CNET's current batch (70.03%) — misses spots between passes",
    ],
    verdict: "Placeholder — editorial review in /best-robot-vacuum content file.",
    authorSlug: "labor-math-desk",
    affiliateLinks: [
      { retailer: "Amazon", url: buildAmazonLink("B0FK2JCM6K"), tag: "thecleaningreport-20", priority: 1 },
    ],
    lastUpdated: "2026-04-19",
    updateNotes: "Initial scrape + validation 2026-04-19 (Playwright MCP).",
    status: "active",
    frictionScore: { clean: 3.5, nav: 4.5, dock: 4.0, noise: 3.5, routine: 4.0 },
  },
];

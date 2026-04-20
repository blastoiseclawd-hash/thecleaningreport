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

// TCR-exclusive signature. 0-5 scale per axis, 0 = worst friction, 5 = best.
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
// src/data/content/*.ts. These fields here are lean placeholders from
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
    verdict: "Placeholder, editorial review in /best-robot-vacuum content file.",
    authorSlug: "labor-math-desk",
    affiliateLinks: [
      { retailer: "Amazon", url: "https://www.amazon.com/dp/B0F3WQTM9Q?tag=thecleaningreport-20", tag: "thecleaningreport-20", priority: 1 },
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
      "Uses ~20% battery per 182.8 sq-ft room, mid-cycle recharge in larger homes",
    ],
    verdict: "Placeholder, editorial review in /best-robot-vacuum content file.",
    authorSlug: "labor-math-desk",
    affiliateLinks: [
      { retailer: "Amazon", url: "https://www.amazon.com/dp/B0DP2KP5P8?tag=thecleaningreport-20", tag: "thecleaningreport-20", priority: 1 },
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
      "Instant self-washing roller mop, no inter-cycle dirt spread",
      "Strong hardwood pickup and zero pet-hair left in brush-roll during lab tests",
    ],
    cons: [
      "Obstacle-avoidance test: simulated pet waste stuck in main brush (lab-tested)",
      "Midpile carpet pickup ranges 10-36% across runs, inconsistent",
    ],
    verdict: "Placeholder, editorial review in /best-robot-vacuum content file.",
    authorSlug: "labor-math-desk",
    affiliateLinks: [
      { retailer: "Amazon", url: "https://www.amazon.com/dp/B0DR8NJMCJ?tag=thecleaningreport-20", tag: "thecleaningreport-20", priority: 1 },
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
      "Base station": "Bagless OmniCyclone, no replacement bags",
      "Mop": "OZMO Roller 2.0 self-washing, hot mop wash + heat dry",
      "Navigation": "AIVI 3D",
    },
    pros: [
      "Bagless OmniCyclone station eliminates disposable-bag operating cost",
      "94.89% hardwood sand pickup in independent lab testing + zero pet hair left in dustbin",
    ],
    cons: [
      "Struggles on midpile carpet (23.19% sand pickup)",
      "Failed to trigger carpet suction-boost accurately in lab tests",
    ],
    verdict: "Placeholder, editorial review in /best-robot-vacuum content file.",
    authorSlug: "labor-math-desk",
    affiliateLinks: [
      { retailer: "Amazon", url: "https://www.amazon.com/dp/B0FKSMWJHM?tag=thecleaningreport-20", tag: "thecleaningreport-20", priority: 1 },
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
      "Profile": "3.14 in (80 mm), slimmest Roborock",
      "Mop wash": "80°C hot water + drying",
      "Chassis": "AdaptiLift + Zero-Tangling",
    },
    pros: [
      "Slim 3.14-inch profile clears low-clearance furniture",
      "Roborock's mature app + navigation stack (MC Q Revo lineage scored 90.9 navigation)",
    ],
    cons: [
      "Long-hair tangle-avoidance at 53.3% in independent lab testing, below Shark Matrix (93.3%)",
      "Not a pick for long-hair households",
    ],
    verdict: "Placeholder, editorial review in /best-robot-vacuum content file.",
    authorSlug: "labor-math-desk",
    affiliateLinks: [
      { retailer: "Amazon", url: "https://www.amazon.com/dp/B0DX1DQKMD?tag=thecleaningreport-20", tag: "thecleaningreport-20", priority: 1 },
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
      "Excellent obstacle avoidance (5 of 6 avoided in lab testing)",
      "Only roundup robot vacuum with an integrated portable carpet deep-cleaner",
    ],
    cons: [
      "Average overall pickup (44.49% across flooring types)",
      "Lowest room coverage in the 2026 lab batch (70.03%), misses spots between passes",
    ],
    verdict: "Placeholder, editorial review in /best-robot-vacuum content file.",
    authorSlug: "labor-math-desk",
    affiliateLinks: [
      { retailer: "Amazon", url: "https://www.amazon.com/dp/B0FK2JCM6K?tag=thecleaningreport-20", tag: "thecleaningreport-20", priority: 1 },
    ],
    lastUpdated: "2026-04-19",
    updateNotes: "Initial scrape + validation 2026-04-19 (Playwright MCP).",
    status: "active",
    frictionScore: { clean: 3.5, nav: 4.5, dock: 4.0, noise: 3.5, routine: 4.0 },
  },

  // ============================================================
  // /best-cordless-vacuum — Phase 5.B.2 (2026-04-20)
  // Final 5 picks, Everyday Cleaning Desk authored.
  // Cordless vacuums have no `dock` axis in the conventional sense;
  // PowerDetect Clean & Empty is the exception (auto-empty base).
  // FrictionScore omitted at product level — content data
  // (src/data/content/best-cordless-vacuum.ts) overrides per-page
  // via frictionAxes if used.
  // ============================================================

  {
    id: "shark-stratos-cordless-iz862h",
    slug: "shark-stratos-cordless-iz862h",
    asin: "B0B5JMNGNQ",
    name: "Shark Stratos Cordless (IZ862H)",
    brand: "Shark",
    model: "IZ862H Stratos Cordless",
    category: "cordless-vacuum",
    bestFor: ["best overall cordless under $400", "mixed hard floors and low-pile carpet", "households who want odor neutralizer + anti-allergen filtration"],
    price: 349.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-20",
    priceSource: "Amazon",
    rating: 3.9,
    reviewCount: 1307,
    ratingLastChecked: "2026-04-20",
    images: [
      { url: "https://m.media-amazon.com/images/I/41VgaT00HWL._AC_SL1500_.jpg", alt: "Shark Stratos Cordless IZ862H in Ash Purple" },
      { url: "https://m.media-amazon.com/images/I/31S5vCl75kL._AC_SL1500_.jpg", alt: "Shark Stratos MultiFlex Wand bent under furniture" },
      { url: "https://m.media-amazon.com/images/I/51arCb10sEL._AC_SL1500_.jpg", alt: "Shark Stratos DuoClean PowerFins HairPro brushroll detail" },
      { url: "https://m.media-amazon.com/images/I/5175UgnzGLL._AC_SL1500_.jpg", alt: "Shark Stratos Clean Sense IQ indicator showing dirt detection" },
      { url: "https://m.media-amazon.com/images/I/51OiH7PjvIL._AC_SL1500_.jpg", alt: "Shark Stratos handheld conversion mode" },
      { url: "https://m.media-amazon.com/images/I/61i66R5kLpL._AC_SL1500_.jpg", alt: "Shark Stratos folded for compact storage" },
      { url: "https://m.media-amazon.com/images/I/51wZylBjtJL._AC_SL1500_.jpg", alt: "Shark Stratos accessories — Crevice Tool and Anti-Allergen Brush" },
      { url: "https://m.media-amazon.com/images/I/614bF5eni2L._AC_SL1500_.jpg", alt: "Shark Stratos full assembly with attachments" },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/41VgaT00HWL._AC_SL1500_.jpg",
    specs: {
      "Runtime": "Up to 60 minutes",
      "Brushroll": "DuoClean PowerFins HairPro (self-cleaning)",
      "Filtration": "Anti-Allergen Complete Seal + HEPA",
      "Wand": "MultiFLEX (bends under furniture, folds for storage)",
    },
    pros: [
      "Clean Sense IQ infrared sensor auto-boosts power when it detects dirt",
      "Self-cleaning brushroll prevents the hair-wrap problem that needs scissors",
      "MultiFLEX wand reaches under low furniture without lifting the unit",
    ],
    cons: [
      "Owners report 60-minute runtime is closer to 40 minutes in real-home use on auto mode",
      "Battery degradation surfaces in r/VacuumCleaners around the 18-24mo mark with replacement-part availability gaps",
    ],
    verdict: "Placeholder, editorial review in /best-cordless-vacuum content file.",
    authorSlug: "everyday-cleaning-desk",
    affiliateLinks: [
      { retailer: "Amazon", url: "https://www.amazon.com/dp/B0B5JMNGNQ?tag=thecleaningreport-20", tag: "thecleaningreport-20", priority: 1 },
    ],
    lastUpdated: "2026-04-20",
    updateNotes: "Initial scrape + validation 2026-04-20 (Playwright MCP).",
    status: "active",
  },

  {
    id: "dyson-v15-detect",
    slug: "dyson-v15-detect",
    asin: "B0C2J8KJH9",
    name: "Dyson V15 Detect",
    brand: "Dyson",
    model: "V15 Detect (Yellow/Nickel)",
    category: "cordless-vacuum",
    bestFor: ["premium splurge", "households with mixed surfaces and pet hair", "buyers who want laser dust visibility on hard floors"],
    price: 629.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-20",
    priceSource: "Amazon",
    rating: 4.4,
    reviewCount: 1720,
    ratingLastChecked: "2026-04-20",
    images: [
      { url: "https://m.media-amazon.com/images/I/61p+FdEl5UL._AC_SL1500_.jpg", alt: "Dyson V15 Detect cordless vacuum in Yellow and Nickel" },
      { url: "https://m.media-amazon.com/images/I/31tliKqk8lL._AC_SL1500_.jpg", alt: "Dyson V15 Detect Fluffy Optic cleaner head with green laser" },
      { url: "https://m.media-amazon.com/images/I/41cRI03wA0L._AC_SL1500_.jpg", alt: "Dyson V15 Detect LCD screen showing particle count" },
      { url: "https://m.media-amazon.com/images/I/41uAcynIuOL._AC_SL1500_.jpg", alt: "Dyson V15 Detect Digital Motorbar cleaner head" },
      { url: "https://m.media-amazon.com/images/I/41bZ2zZRnFL._AC_SL1500_.jpg", alt: "Dyson V15 Detect handheld conversion mode" },
      { url: "https://m.media-amazon.com/images/I/41Nnl3YUkDL._AC_SL1500_.jpg", alt: "Dyson V15 Detect cleaning carpet with anti-tangle brush" },
      { url: "https://m.media-amazon.com/images/I/51SsCgzLzBL._AC_SL1500_.jpg", alt: "Dyson V15 Detect wall-mounted dock charging" },
      { url: "https://m.media-amazon.com/images/I/41yDQ0N-3HL._AC_SL1500_.jpg", alt: "Dyson V15 Detect attachments and accessories" },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/61p+FdEl5UL._AC_SL1500_.jpg",
    specs: {
      "Runtime": "Up to 60 minutes (Eco mode)",
      "Cleaner heads": "Fluffy Optic (hard floors) + Digital Motorbar (carpet)",
      "Display": "LCD with particle count + power mode + maintenance alerts",
      "Power management": "Power-trigger + auto-adapt by debris/floor",
    },
    pros: [
      "Fluffy Optic laser surfaces invisible dust on hard floors that other vacuums miss",
      "Digital Motorbar de-tangles long hair without needing manual cutting",
      "Particle counter on LCD lets you see when an area is actually clean",
    ],
    cons: [
      "Owner threads on r/dyson document battery degradation at 18-24 months of normal use",
      "Replacement battery + repair costs concentrate in years 2-3 — multiple owners report units becoming uneconomic to fix",
      "60-minute spec is Eco mode only; Boost mode is closer to 5-10 minutes per real-world owner reports",
    ],
    verdict: "Placeholder, editorial review in /best-cordless-vacuum content file.",
    authorSlug: "everyday-cleaning-desk",
    affiliateLinks: [
      { retailer: "Amazon", url: "https://www.amazon.com/dp/B0C2J8KJH9?tag=thecleaningreport-20", tag: "thecleaningreport-20", priority: 1 },
    ],
    lastUpdated: "2026-04-20",
    updateNotes: "Initial scrape + validation 2026-04-20 (Playwright MCP).",
    status: "active",
  },

  {
    id: "shark-powerdetect-clean-empty-ip3251",
    slug: "shark-powerdetect-clean-empty-ip3251",
    asin: "B0DBVW1RFW",
    name: "Shark PowerDetect Clean & Empty (IP3251)",
    brand: "Shark",
    model: "IP3251 PowerDetect Clean & Empty",
    category: "cordless-vacuum",
    bestFor: ["households who hate emptying bins", "auto-empty docking station preference", "buyers who want HEPA filtration with cordless convenience"],
    price: 429.95,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-20",
    priceSource: "Amazon",
    rating: 4.1,
    reviewCount: 908,
    ratingLastChecked: "2026-04-20",
    images: [
      { url: "https://m.media-amazon.com/images/I/71y+CRyuA+L._AC_SL1500_.jpg", alt: "Shark PowerDetect Clean & Empty IP3251 with auto-empty base in Dark Gray" },
      { url: "https://m.media-amazon.com/images/I/41y5I0n--sL._AC_SL1500_.jpg", alt: "Shark PowerDetect docking on the auto-empty base" },
      { url: "https://m.media-amazon.com/images/I/51-aL9-2d1L._AC_SL1500_.jpg", alt: "Shark PowerDetect DuoClean Detect dual-brushroll nozzle" },
      { url: "https://m.media-amazon.com/images/I/41B3R5IssPL._AC_SL1500_.jpg", alt: "Shark PowerDetect intelligent dirt detection sensor" },
      { url: "https://m.media-amazon.com/images/I/5147o1PmGvL._AC_SL1500_.jpg", alt: "Shark PowerDetect cleaning hard floor and carpet transition" },
      { url: "https://m.media-amazon.com/images/I/41XGWBfAh3L._AC_SL1500_.jpg", alt: "Shark PowerDetect HEPA filter and dust seal system" },
      { url: "https://m.media-amazon.com/images/I/51Z5yXx44eL._AC_SL1500_.jpg", alt: "Shark PowerDetect handheld conversion mode" },
      { url: "https://m.media-amazon.com/images/I/61n+8dGyXXL._AC_SL1500_.jpg", alt: "Shark PowerDetect attachments and HEPA filter set" },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/71y+CRyuA+L._AC_SL1500_.jpg",
    specs: {
      "Runtime": "Up to 40 minutes",
      "Brushroll": "DuoClean Detect (forward + reverse pickup)",
      "Auto-empty": "Docking station empties + charges; seals dust 45 days",
      "Filtration": "HEPA + sealed system",
    },
    pros: [
      "Auto-empty base eliminates the daily bin-emptying chore Shark Stratos owners do manually",
      "DuoClean Detect picks up debris on both forward AND reverse passes",
      "Sealed dust storage holds away allergens for up to 45 days between dock empties",
    ],
    cons: [
      "Auto-empty base adds ~5 lb of footprint near a wall outlet — apartments may feel the space cost",
      "Dock filter still needs periodic replacement; auto-empty reduces but does not eliminate maintenance",
      "Launched late 2024 — long-term (2yr+) owner reliability data is still thin on Reddit",
    ],
    verdict: "Placeholder, editorial review in /best-cordless-vacuum content file.",
    authorSlug: "everyday-cleaning-desk",
    affiliateLinks: [
      { retailer: "Amazon", url: "https://www.amazon.com/dp/B0DBVW1RFW?tag=thecleaningreport-20", tag: "thecleaningreport-20", priority: 1 },
    ],
    lastUpdated: "2026-04-20",
    updateNotes: "Initial scrape + validation 2026-04-20 (Playwright MCP).",
    status: "active",
  },

  {
    id: "levoit-lvac-300",
    slug: "levoit-lvac-300",
    asin: "B0DQKQ3F2C",
    name: "Levoit LVAC-300",
    brand: "LEVOIT",
    model: "LVAC-300",
    category: "cordless-vacuum",
    bestFor: ["best non-Dyson value pick", "buyers who want HEPA filtration without paying the Dyson tax", "tangle-resistant brushroll without manual hair removal"],
    price: 269.93,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-20",
    priceSource: "Amazon",
    rating: 4.4,
    reviewCount: 577,
    ratingLastChecked: "2026-04-20",
    images: [
      { url: "https://m.media-amazon.com/images/I/61+Zyxt+EgL._AC_SL1500_.jpg", alt: "Levoit LVAC-300 cordless stick vacuum" },
      { url: "https://m.media-amazon.com/images/I/41jK91ER9xL._AC_SL1500_.jpg", alt: "Levoit LVAC-300 tangle-resistant anti-wrap brushroll" },
      { url: "https://m.media-amazon.com/images/I/51GHAtNggnL._AC_SL1500_.jpg", alt: "Levoit LVAC-300 HEPA filter capturing fine particles" },
      { url: "https://m.media-amazon.com/images/I/510y+B8STrL._AC_SL1500_.jpg", alt: "Levoit LVAC-300 Mini Motorized Brush attachment for upholstery" },
      { url: "https://m.media-amazon.com/images/I/51wcthq1fwL._AC_SL1500_.jpg", alt: "Levoit LVAC-300 cleaning hard floor with crevice attachment" },
      { url: "https://m.media-amazon.com/images/I/51TeTjhaVUL._AC_SL1500_.jpg", alt: "Levoit LVAC-300 lightweight design for stair use" },
      { url: "https://m.media-amazon.com/images/I/51cm+h6ykxL._AC_SL1500_.jpg", alt: "Levoit LVAC-300 wall mount and charger" },
      { url: "https://m.media-amazon.com/images/I/51HKsgJNXZL._AC_SL1500_.jpg", alt: "Levoit LVAC-300 full attachments set" },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/61+Zyxt+EgL._AC_SL1500_.jpg",
    specs: {
      "Runtime": "Up to 60 minutes (Eco), 12 minutes (Turbo)",
      "Battery": "3000mAh removable",
      "Filtration": "HEPA — 99.99% of 0.3μm particles",
      "Brushroll": "3rd-gen anti-tangle (no scissor maintenance)",
    },
    pros: [
      "60-minute runtime claim aligns closely with owner-reported real-world numbers",
      "HEPA filtration matches premium models at less than half the Dyson V15 price",
      "Anti-tangle brushroll handles long hair without the post-clean scissor work",
    ],
    cons: [
      "Newer brand than Shark/Dyson — long-term (3yr+) durability data is still accumulating",
      "Some r/VacuumCleaners owners report unit failures (\"bit the dust\" reference); reliability variance is wider than the larger brands",
      "Turbo mode runtime is only 12 minutes — tight for a single-pass clean of a larger space",
    ],
    verdict: "Placeholder, editorial review in /best-cordless-vacuum content file.",
    authorSlug: "everyday-cleaning-desk",
    affiliateLinks: [
      { retailer: "Amazon", url: "https://www.amazon.com/dp/B0DQKQ3F2C?tag=thecleaningreport-20", tag: "thecleaningreport-20", priority: 1 },
    ],
    lastUpdated: "2026-04-20",
    updateNotes: "Initial scrape + validation 2026-04-20 (Playwright MCP).",
    status: "active",
  },

  {
    id: "dyson-v12-detect-slim-absolute",
    slug: "dyson-v12-detect-slim-absolute",
    asin: "B0B76XZZDT",
    name: "Dyson V12 Detect Slim Absolute",
    brand: "Dyson",
    model: "V12 Detect Slim Absolute",
    category: "cordless-vacuum",
    bestFor: ["lighter Dyson alternative to V15", "smaller homes and apartments", "buyers who want laser dust detection in a lighter unit"],
    price: 595.00,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-20",
    priceSource: "Amazon",
    rating: 4.2,
    reviewCount: 87,
    ratingLastChecked: "2026-04-20",
    images: [
      { url: "https://m.media-amazon.com/images/I/51wTCkviZDL._AC_SL1500_.jpg", alt: "Dyson V12 Detect Slim Absolute cordless vacuum" },
      { url: "https://m.media-amazon.com/images/I/31leKlb8T4L._AC_SL1500_.jpg", alt: "Dyson V12 Detect Slim laser cleaner head detail" },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/51wTCkviZDL._AC_SL1500_.jpg",
    specs: {
      "Cleaner head": "Laser Slim Fluffy (visualizes dust on hard floors)",
      "Display": "LCD particle counter + sizer",
      "Trigger": "Single-button power (no hold required)",
      "Bin": "No-touch hygienic ejection",
    },
    pros: [
      "Lighter than the V15 by roughly a pound — easier on stairs and ceiling-fan reach",
      "Laser cleaner head reveals invisible dust on hard floors, same as V15's Fluffy Optic",
      "Single-button power means you don't need to hold a trigger through the whole clean",
    ],
    cons: [
      "Inherits the Dyson 18-24mo battery degradation pattern V15 owners document",
      "Lower suction than V15 — a heavy-carpet household will notice the gap",
      "Thinner Amazon review pool (87 vs V15's 1,720) — fewer long-term owner reports to draw on",
    ],
    verdict: "Placeholder, editorial review in /best-cordless-vacuum content file.",
    authorSlug: "everyday-cleaning-desk",
    affiliateLinks: [
      { retailer: "Amazon", url: "https://www.amazon.com/dp/B0B76XZZDT?tag=thecleaningreport-20", tag: "thecleaningreport-20", priority: 1 },
    ],
    lastUpdated: "2026-04-20",
    updateNotes: "Initial scrape + validation 2026-04-20 (Playwright MCP). Only 2 product images on Amazon listing.",
    status: "active",
  },
];

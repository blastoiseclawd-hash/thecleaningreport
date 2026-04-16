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
  authorSlug: string; // Legacy-compatible field name for the owning editorial desk.
  affiliateLinks: AffiliateLink[];
  lastUpdated: string;
  updateNotes: string;
  status: "active" | "discontinued" | "out-of-stock";
}

export const categorySpecs: Record<string, string[]> = {};

export function buildAmazonLink(asin: string, tag = "replace-your-tag"): string {
  return `https://www.amazon.com/dp/${asin}?tag=${tag}`;
}

export function priceDisplay(product: Product): string {
  if (product.price === null) {
    return "Check current price";
  }
  return `$${product.price.toFixed(2)}`;
}

export const products: Product[] = [];

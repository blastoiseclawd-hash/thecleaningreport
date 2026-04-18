import type {
  AffiliateLink,
  Product,
} from "@/data/products";
import {
  getAffiliateLinksByPriority,
  getPreferredAffiliateLink,
  priceDisplay,
} from "@/data/products";
import type { ComparisonRow } from "@/components/template-b/ComparisonTable";
import type { ProductBlockData } from "@/components/template-b/ProductBlock";
import type { RetailerLink } from "@/components/template-b/RetailerStack";
import type { TopPickCard } from "@/components/template-b/TopPicks";

export interface ProductAdapterContext {
  /** 1-indexed rank in the lineup. */
  rank: number;
  /** Optional override for the display badge (e.g. "BEST OVERALL"). Defaults to `bestFor[0]` uppercased. */
  badge?: string;
  /** Optional struck-through previous price (pre-formatted, e.g. "$899"). */
  wasPriceDisplay?: string;
  /** Optional red-flag text, e.g. "−$200" / "PRICE DROP · SAVE $200". */
  dropDisplay?: string;
  /** Forces `priceDrop` on the comparison row flag independently of `dropDisplay`. */
  priceDrop?: boolean;
  /** TCR editor's score string, e.g. "9.4". Pre-formatted by caller. */
  tcrScore?: string;
  /** Jump anchor href for the TopPick card "JUMP TO FULL REVIEW" link. */
  jumpHref?: string;
  /** Optional override for the main CTA destination. Defaults to the preferred affiliate link. */
  ctaHref?: string;
  /** Optional override for the CTA button label on cards. */
  ctaLabel?: string;
  /** Optional subline under the product name in the comparison table. Defaults to `"#<rank> · <badge>"`. */
  subline?: string;
}

function resolveBadge(product: Product, override?: string): string {
  if (override) return override;
  const first = product.bestFor[0];
  return first ? first.toUpperCase() : product.category.toUpperCase();
}

function resolveCtaHref(product: Product, override?: string): string {
  if (override) return override;
  return getPreferredAffiliateLink(product)?.url ?? "";
}

function retailerNote(link: AffiliateLink): string | undefined {
  if (link.retailer.toLowerCase() === "amazon") return "Amazon · Prime eligible";
  return undefined;
}

function toRetailers(product: Product): RetailerLink[] {
  const price = priceDisplay(product);
  const links = getAffiliateLinksByPriority(product);
  return links.map((link, i) => ({
    name: link.retailer,
    priceDisplay: price,
    href: link.url,
    primary: i === 0,
    note: retailerNote(link),
  }));
}

function toSpecs(product: Product): { label: string; value: string }[] {
  return Object.entries(product.specs).map(([label, value]) => ({
    label,
    value,
  }));
}

/**
 * Comparison-table row adapter. The caller adds its own `columns` that may read
 * any field off `Product` via the index-signature tail on `ComparisonRow`.
 */
export function toComparisonRow(
  product: Product,
  ctx: ProductAdapterContext,
): ComparisonRow {
  const badge = resolveBadge(product, ctx.badge);
  const subline = ctx.subline ?? `#${ctx.rank} · ${badge}`;
  return {
    id: product.id,
    rank: ctx.rank,
    name: product.name,
    subline,
    thumbnailUrl: product.thumbnailUrl || product.images[0]?.url,
    thumbnailAlt: product.images[0]?.alt ?? product.name,
    priceDisplay: priceDisplay(product),
    wasPriceDisplay: ctx.wasPriceDisplay,
    priceDrop: ctx.priceDrop ?? Boolean(ctx.dropDisplay),
    ctaHref: resolveCtaHref(product, ctx.ctaHref),
    brand: product.brand,
    rating: product.rating,
    reviewCount: product.reviewCount,
    frictionScore: product.frictionScore,
    specs: product.specs,
  };
}

/** Above-the-fold TopPicks card adapter. */
export function toTopPickCard(
  product: Product,
  ctx: ProductAdapterContext,
): TopPickCard {
  return {
    id: product.id,
    rank: ctx.rank,
    badge: resolveBadge(product, ctx.badge),
    name: product.name,
    thumbnailUrl: product.thumbnailUrl || product.images[0]?.url,
    thumbnailAlt: product.images[0]?.alt ?? product.name,
    rating: product.rating,
    reviewCount: product.reviewCount,
    priceDisplay: priceDisplay(product),
    wasPriceDisplay: ctx.wasPriceDisplay,
    dropDisplay: ctx.dropDisplay,
    ctaHref: resolveCtaHref(product, ctx.ctaHref),
    ctaLabel: ctx.ctaLabel,
    jumpHref: ctx.jumpHref,
  };
}

/** Article-level review block adapter. Uses `verdict` as the description body. */
export function toProductBlockData(
  product: Product,
  ctx: ProductAdapterContext,
): ProductBlockData {
  return {
    id: product.id,
    rank: ctx.rank,
    badge: resolveBadge(product, ctx.badge),
    name: product.name,
    rating: product.rating,
    reviewCount: product.reviewCount,
    tcrScore: ctx.tcrScore,
    priceDisplay: priceDisplay(product),
    wasPriceDisplay: ctx.wasPriceDisplay,
    dropDisplay: ctx.dropDisplay,
    description: product.verdict,
    pros: product.pros,
    cons: product.cons,
    specs: toSpecs(product),
    images: product.images.map((img) => ({ url: img.url, alt: img.alt })),
    retailers: toRetailers(product),
    anchorId: product.slug,
  };
}

/**
 * Bulk helper: given an ordered product list and a per-product context map (keyed
 * by product id), returns all three template-b shapes ready to pass into layouts.
 */
export function buildTemplateBData(
  products: Product[],
  contextById: Record<string, Omit<ProductAdapterContext, "rank">>,
): {
  rows: ComparisonRow[];
  picks: TopPickCard[];
  blocks: ProductBlockData[];
} {
  const rows: ComparisonRow[] = [];
  const picks: TopPickCard[] = [];
  const blocks: ProductBlockData[] = [];
  products.forEach((product, i) => {
    const ctx: ProductAdapterContext = {
      rank: i + 1,
      ...(contextById[product.id] ?? {}),
    };
    rows.push(toComparisonRow(product, ctx));
    picks.push(toTopPickCard(product, ctx));
    blocks.push(toProductBlockData(product, ctx));
  });
  return { rows, picks, blocks };
}

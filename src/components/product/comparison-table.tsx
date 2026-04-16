"use client";

import Image from "next/image";
import type { Product } from "@/data/products";
import { buildAmazonLink, priceDisplay } from "@/data/products";

// ─── Props ──────────────────────────────────────────────────────

export interface ComparisonTableProps {
  products: Product[];
  /** Map of product.id to badge label, e.g. { "example-product": "Best Overall" } */
  badges?: Record<string, string>;
  /** Which spec keys to show as rows. Defaults to the first 3 keys of each product's specs. */
  specKeys?: string[];
  /** Section title, e.g. "At a Glance — Best Product Roundup 2026" */
  title?: string;
}

// ─── Helpers ────────────────────────────────────────────────────

/** Resolve the best affiliate link URL for a product. Amazon fallback uses ASIN. */
function getCtaUrl(product: Product): string {
  if (product.affiliateLinks.length > 0) {
    const best = product.affiliateLinks.reduce((a, b) => (a.priority <= b.priority ? a : b));
    return best.url;
  }
  if (product.asin) {
    return buildAmazonLink(product.asin);
  }
  return "#";
}

/** Resolve which spec keys to display. Uses provided specKeys, or falls back to first 3 from the first product. */
function resolveSpecKeys(products: Product[], specKeys?: string[]): string[] {
  if (specKeys && specKeys.length > 0) return specKeys;
  const seen = new Set<string>();
  for (const p of products) {
    for (const key of Object.keys(p.specs)) {
      seen.add(key);
      if (seen.size >= 3) return Array.from(seen);
    }
  }
  return Array.from(seen);
}

// ─── Editorial Badge ────────────────────────────────────────────

function EditorialBadge({ label }: { label: string }) {
  return (
    <span className="text-[11px] font-semibold uppercase tracking-widest text-[#6F4E37]">
      {label}
    </span>
  );
}

// ─── Desktop Table View ─────────────────────────────────────────

function DesktopTable({
  products,
  badges,
  specKeys,
}: {
  products: Product[];
  badges: Record<string, string>;
  specKeys: string[];
}) {
  return (
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-[#2C1810]/15">
            <th className="py-3 px-4 text-left text-sm font-semibold text-[#2C1810] w-36">
              Product
            </th>
            {products.map((product) => (
              <th key={product.id} className="py-3 px-4 text-center min-w-[180px]">
                {badges[product.id] && (
                  <div className="mb-2">
                    <EditorialBadge label={badges[product.id]} />
                  </div>
                )}
                <a
                  href={`#review-${product.slug}`}
                  className="block group"
                >
                  <div className="relative mx-auto mb-2 h-28 w-28">
                    <Image
                      src={product.thumbnailUrl || product.images[0]?.url || "/images/logo-icon.svg"}
                      alt={product.images[0]?.alt || product.name}
                      fill
                      className="object-contain"
                      sizes="112px"
                    />
                  </div>
                  <span className="text-sm font-semibold text-[#2C1810] group-hover:text-[#6F4E37] transition-colors leading-tight block">
                    {product.name}
                  </span>
                </a>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {/* Price row */}
          <tr className="border-b border-[#2C1810]/8">
            <td className="py-3 px-4 text-sm font-medium text-[#6F4E37]">Price</td>
            {products.map((product) => (
              <td key={product.id} className="py-3 px-4 text-center">
                <span className="text-lg font-bold text-[#2C1810]">
                  {priceDisplay(product)}
                </span>
              </td>
            ))}
          </tr>

          {/* Spec rows */}
          {specKeys.map((key) => (
            <tr
              key={key}
              className="border-b border-[#2C1810]/8"
            >
              <td className="py-3 px-4 text-sm font-medium text-[#6F4E37]">{key}</td>
              {products.map((product) => (
                <td key={product.id} className="py-3 px-4 text-center text-sm text-[#2C1810]">
                  {product.specs[key] || "\u2014"}
                </td>
              ))}
            </tr>
          ))}

          {/* Best For row */}
          <tr className="border-b border-[#2C1810]/8">
            <td className="py-3 px-4 text-sm font-medium text-[#6F4E37]">Best For</td>
            {products.map((product) => (
              <td key={product.id} className="py-3 px-4 text-center text-sm text-[#6F4E37]/80">
                {product.bestFor.length > 0 ? product.bestFor.join(", ") : "\u2014"}
              </td>
            ))}
          </tr>

          {/* CTA row */}
          <tr>
            <td className="py-4 px-4"></td>
            {products.map((product) => (
              <td key={product.id} className="py-4 px-4 text-center">
                <a
                  href={getCtaUrl(product)}
                  target="_blank"
                  rel="nofollow noopener noreferrer sponsored"
                  className="inline-block rounded-sm bg-[#27ae60] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#219a52]"
                >
                  Check Price
                </a>
                <a
                  href={`#review-${product.slug}`}
                  className="mt-2 block text-xs text-[#6F4E37]/60 underline decoration-dotted underline-offset-2 hover:text-[#6F4E37] transition-colors"
                >
                  Read full review
                </a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// ─── Mobile Card View ───────────────────────────────────────────

function MobileCards({
  products,
  badges,
  specKeys,
}: {
  products: Product[];
  badges: Record<string, string>;
  specKeys: string[];
}) {
  return (
    <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-thin">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="flex-shrink-0 w-[280px] snap-center border-b border-[#2C1810]/10 bg-white pb-4"
        >
          {/* Card header with badge + rank */}
          <div className="relative px-4 pt-4 pb-2 text-center">
            {badges[product.id] && (
              <div className="mb-2">
                <EditorialBadge label={badges[product.id]} />
              </div>
            )}
            <span className="absolute top-3 left-3 text-xs font-bold text-[#6F4E37]">
              {index + 1}.
            </span>
            <a href={`#review-${product.slug}`} className="block group">
              <div className="relative mx-auto mb-3 h-32 w-32">
                <Image
                  src={product.thumbnailUrl || product.images[0]?.url || "/images/logo-icon.svg"}
                  alt={product.images[0]?.alt || product.name}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
              <h3 className="text-sm font-semibold text-[#2C1810] leading-tight group-hover:text-[#6F4E37] transition-colors">
                {product.name}
              </h3>
            </a>
          </div>

          {/* Price */}
          <div className="px-4 py-2 flex items-center justify-between border-t border-[#2C1810]/8">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6F4E37]/70">
              Current price
            </span>
            <span className="text-lg font-bold text-[#2C1810]">
              {priceDisplay(product)}
            </span>
          </div>

          {/* Specs */}
          <div className="px-4 py-2 border-t border-[#2C1810]/8">
            {specKeys.map((key) => (
              <div key={key} className="flex justify-between py-1 text-sm">
                <span className="text-[#6F4E37]/70">{key}</span>
                <span className="font-medium text-[#2C1810]">{product.specs[key] || "\u2014"}</span>
              </div>
            ))}
          </div>

          {/* Best For */}
          {product.bestFor.length > 0 && (
            <div className="px-4 py-2 border-t border-[#2C1810]/8">
              <p className="text-xs text-[#6F4E37]/60">
                <span className="font-medium">Best for:</span> {product.bestFor.join(", ")}
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="px-4 py-3 border-t border-[#2C1810]/8 text-center">
            <a
              href={getCtaUrl(product)}
              target="_blank"
              rel="nofollow noopener noreferrer sponsored"
              className="inline-block w-full rounded-sm bg-[#27ae60] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#219a52]"
            >
              Check Price
            </a>
            <a
              href={`#review-${product.slug}`}
              className="mt-2 inline-block text-xs text-[#6F4E37]/60 underline decoration-dotted underline-offset-2 hover:text-[#6F4E37] transition-colors"
            >
              Read full review
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────

export default function ComparisonTable({
  products,
  badges = {},
  specKeys: specKeysProp,
  title,
}: ComparisonTableProps) {
  const specKeys = resolveSpecKeys(products, specKeysProp);
  const activeProducts = products.filter((p) => p.status === "active");

  if (activeProducts.length === 0) return null;

  return (
    <section className="mb-10" aria-label="Product comparison">
      {title && (
        <h2 className="mb-4 font-[family-name:var(--font-heading-family)] text-2xl font-bold text-[#2C1810] md:text-3xl">
          {title}
        </h2>
      )}

      {/* FTC Disclosure */}
      <p className="mb-4 border-l-2 border-[#D4A574]/40 pl-3 text-xs text-[#6F4E37]/70">
        We earn a commission if you make a purchase, at no additional cost to you.
        Prices and availability are accurate as of the date/time indicated and are subject to change.
      </p>

      {/* Desktop: full comparison table */}
      <div className="border border-[#2C1810]/10 overflow-hidden">
        <DesktopTable products={activeProducts} badges={badges} specKeys={specKeys} />
      </div>

      {/* Mobile: horizontally scrollable cards */}
      <MobileCards products={activeProducts} badges={badges} specKeys={specKeys} />
    </section>
  );
}

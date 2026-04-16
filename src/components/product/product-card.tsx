import Image from "next/image";

import { type Product, priceDisplay } from "@/data/products";
import { cn } from "@/lib/utils";

export interface ProductCardProps {
  product: Product;
  badge?: string;
  rank?: number;
  displayName?: string;
  curatedSpecs?: Record<string, string>;
  variant?: "default" | "featured" | "compact";
}

function SpecList({ specs }: { specs: Record<string, string> }) {
  const entries = Object.entries(specs);
  if (entries.length === 0) return null;

  return (
    <dl className="grid gap-x-5 gap-y-3 sm:grid-cols-2">
      {entries.map(([key, value]) => (
        <div key={key} className="rounded-sm border border-[#dfcfbf] bg-[#faf4ec] px-4 py-3">
          <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8a674e]">
            {key}
          </dt>
          <dd className="mt-1 text-[0.96rem] font-medium text-[#23150f]">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ProductCard({
  product,
  badge,
  rank,
  displayName,
  curatedSpecs,
  variant = "default",
}: ProductCardProps) {
  const validAffiliateLinks = product.affiliateLinks.filter(
    (link) => link.url && !link.url.includes("/dp/?tag="),
  );
  const primaryLink = validAffiliateLinks[0];
  const secondaryLinks = validAffiliateLinks.slice(1);
  const price = priceDisplay(product);
  const name = displayName || product.name;
  const specs =
    curatedSpecs || Object.fromEntries(Object.entries(product.specs).slice(0, 4));

  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";

  return (
    <article
      className={cn(
        "editorial-card overflow-hidden border-[#d7c5b3] bg-[#fffdf9]",
        isFeatured ? "p-6 sm:p-8" : isCompact ? "p-5" : "p-6",
      )}
    >
      {(rank || badge) && (
        <div className="mb-5 flex flex-wrap items-center gap-3">
          {rank ? (
            <span className="rounded-sm border border-[#cfbcaa] bg-[#f8efe4] px-3 py-1 text-xs font-semibold text-[#5e3d2d]">
              #{rank}
            </span>
          ) : null}
          {badge ? <span className="eyebrow">{badge}</span> : null}
        </div>
      )}

      <div
        className={cn(
          "grid items-start gap-6",
          isCompact ? "sm:grid-cols-[140px_1fr]" : "lg:grid-cols-[220px_1fr]",
          isFeatured && "lg:grid-cols-[260px_1fr]",
        )}
      >
        <div className="flex justify-center lg:justify-start">
          <div
            className={cn(
              "relative overflow-hidden rounded-sm border border-[#d9c7b6] bg-[#f7efe4]",
              isCompact ? "h-36 w-36 p-3" : "h-52 w-52 p-4",
              isFeatured && "h-60 w-60 p-5",
            )}
          >
            <Image
              src={product.thumbnailUrl || product.images[0]?.url || "/images/logo-icon.svg"}
              alt={product.images[0]?.alt || name}
              fill
              className="object-contain p-3"
              sizes={isFeatured ? "240px" : isCompact ? "144px" : "208px"}
            />
          </div>
        </div>

        <div className="min-w-0">
          <p className="eyebrow">{badge ?? product.brand}</p>
          <h3
            className={cn(
              "mt-3 font-[family-name:var(--font-heading-family)] font-semibold leading-[1.02] text-[#23150f]",
              isFeatured ? "text-[2.5rem] sm:text-[2.9rem]" : isCompact ? "text-[1.6rem]" : "text-[2rem]",
            )}
          >
            {name}
          </h3>

          <div className="mt-4 flex flex-wrap items-end gap-x-4 gap-y-3">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#8a674e]">
                Current price
              </p>
              <p
                className={cn(
                  "mt-1 font-semibold text-[#23150f]",
                  isFeatured ? "text-[2.7rem]" : "text-[2.2rem]",
                )}
              >
                {price}
              </p>
            </div>
            <div className="rounded-sm border border-[#d7e3d9] bg-[#f4faf3] px-4 py-2 text-[0.92rem] text-[#2f6842]">
              Best for: {product.bestFor[0] ?? "Readers comparing product options"}
            </div>
          </div>

          {product.price !== null ? (
            <p className="mt-2 text-xs text-[#7b6658]">Price last checked {product.priceLastChecked}</p>
          ) : null}

          {!isCompact ? <div className="mt-7"><SpecList specs={specs} /></div> : null}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {primaryLink ? (
              <a
                href={primaryLink.url}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="button-primary"
              >
                See current price
              </a>
            ) : (
              <span className="rounded-sm border border-dashed border-[#ccb8a4] px-4 py-2 text-sm text-[#5e3d2d]">
                Retail links unavailable
              </span>
            )}

            {!isCompact && secondaryLinks.length > 0 ? (
              <div className="flex flex-wrap items-center gap-2 text-sm text-[#6F4E37]">
                <span className="text-[#7a6557]">Also available at</span>
                {secondaryLinks.map((link) => (
                  <a
                    key={link.retailer}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="font-semibold hover:text-[#2C1810]"
                  >
                    {link.retailer}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

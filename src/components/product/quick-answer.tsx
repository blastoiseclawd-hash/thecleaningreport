import Image from "next/image";
import { type Product, priceDisplay } from "@/data/products";

// ─── Props ──────────────────────────────────────────────────────

export interface QuickAnswerBoxProps {
  product: Product;
  whyPicked: string; // one-line summary
  authorName: string;
  disclosureText: string;
}

// ─── QuickAnswerBox ─────────────────────────────────────────────

export function QuickAnswerBox({
  product,
  whyPicked,
  authorName,
  disclosureText,
}: QuickAnswerBoxProps) {
  const primaryLink = product.affiliateLinks[0];
  const price = priceDisplay(product);

  return (
    <aside
      aria-label="Our top pick"
      className="border border-[#2C1810]/10 bg-white"
    >
      {/* Header bar */}
      <div className="border-b border-[#2C1810]/10 px-5 py-2">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-[#6F4E37]">
          Our #1 Pick
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6">
        {/* Product thumbnail */}
        <div className="flex shrink-0 justify-center">
          <div className="relative size-28 bg-[#FAFAF8] p-1 sm:size-32">
            <Image
              src={product.thumbnailUrl || product.images[0]?.url || "/images/logo-icon.svg"}
              alt={product.images[0]?.alt || product.name}
              fill
              className="object-contain p-2"
              sizes="128px"
              priority
            />
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-1 flex-col gap-2.5">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[#6F4E37]/60">
              {product.brand}
            </p>
            <h2 className="font-[family-name:var(--font-heading-family)] text-lg font-bold leading-snug text-[#2C1810] sm:text-xl">
              {product.name}
            </h2>
          </div>

          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            {product.bestFor.length > 0 ? (
              <span className="text-sm font-semibold text-[#2C1810]">
                Best for {product.bestFor[0].toLowerCase()}
              </span>
            ) : null}
            <span
              className={
                product.price !== null
                  ? "text-lg font-bold text-[#2C1810]"
                  : "text-sm font-semibold text-[#6F4E37]"
              }
            >
              {price}
            </span>
          </div>

          {/* Why we picked it */}
          <p className="text-sm leading-relaxed text-[#2C1810]/80">
            <span className="font-semibold text-[#6F4E37]">Why we picked it: </span>
            {whyPicked}
          </p>

          {/* CTA + anchor link */}
          <div className="mt-1 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            {primaryLink && (
              <a
                href={primaryLink.url}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="inline-flex items-center justify-center rounded-sm bg-[#27ae60] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#219a52]"
              >
                See current price
              </a>
            )}
            <a
              href={`#review-${product.slug}`}
              className="text-sm font-medium text-[#6F4E37] underline decoration-[#D4A574]/50 underline-offset-2 transition-colors hover:text-[#2C1810]"
            >
              Read full review below
            </a>
          </div>
        </div>
      </div>

      {/* FTC Disclosure footer */}
      <div className="border-t border-[#2C1810]/10 px-5 py-2.5">
        <p className="text-[11px] leading-relaxed text-[#6F4E37]/50">
          {disclosureText}
          {authorName && (
            <span className="ml-1 text-[#6F4E37]/40">
              Reviewed by {authorName}
            </span>
          )}
        </p>
      </div>
    </aside>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export interface StickyCTAProduct {
  name: string;
  /** Small label under the name — typically "#1 · EDITOR'S PICK" or similar. */
  tag?: string;
  /** Price-display string; use pre-formatted currency (e.g. "$899"). */
  priceDisplay: string;
  /** Optional strike-through previous price. */
  wasPriceDisplay?: string;
  /** Thumbnail src for the left tile. Optional — falls back to a placeholder. */
  thumbnailUrl?: string;
  /** Alt text for the thumbnail. */
  thumbnailAlt?: string;
  /** Affiliate destination for the CTA button. */
  ctaHref: string;
  /** CTA button label. Default: "Check price →". */
  ctaLabel?: string;
}

export interface StickyCTAProps {
  product: StickyCTAProduct;
  /** Pixels scrolled before the bar shows. Default 600 (past hero). */
  showAfterScroll?: number;
  /** Pixels before document bottom to hide. Default 1200 (avoids footer overlap). */
  hideBeforeFooterOffset?: number;
  /** When true, skip the scroll listener and render in the shown state. Useful for
   *  previews and story-style pages that want the bar persistent. */
  alwaysVisible?: boolean;
}

export function StickyCTA({
  product,
  showAfterScroll = 600,
  hideBeforeFooterOffset = 1200,
  alwaysVisible = false,
}: StickyCTAProps) {
  const [visible, setVisible] = useState(alwaysVisible);

  useEffect(() => {
    if (alwaysVisible) {
      setVisible(true);
      return;
    }
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight;
      const shouldShow =
        scrollY > showAfterScroll &&
        scrollY < docHeight - hideBeforeFooterOffset;
      setVisible(shouldShow);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysVisible, showAfterScroll, hideBeforeFooterOffset]);

  const ctaLabel = product.ctaLabel ?? "Check price →";

  return (
    <div
      className={`sticky-buy ${visible ? "show" : ""}`}
      role="region"
      aria-label="Quick-buy bar"
      aria-hidden={!visible}
    >
      <div className="inner">
        <div className="thumb">
          {product.thumbnailUrl ? (
            <Image
              src={product.thumbnailUrl}
              alt={product.thumbnailAlt ?? product.name}
              width={44}
              height={44}
              style={{ objectFit: "contain" }}
            />
          ) : (
            <span className="mono" style={{ fontSize: 8 }}>
              IMG
            </span>
          )}
        </div>
        <div className="meta">
          <div className="name">{product.name}</div>
          {product.tag && <div className="tag">{product.tag}</div>}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {product.wasPriceDisplay && (
            <span
              className="price-was"
              style={{ fontFamily: "var(--mono)", fontSize: 13 }}
            >
              {product.wasPriceDisplay}
            </span>
          )}
          <span className="price">{product.priceDisplay}</span>
          <a
            href={product.ctaHref}
            className="btn-tb btn-amazon"
            rel="sponsored nofollow noopener"
            target="_blank"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </div>
  );
}

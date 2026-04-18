import Link from "next/link";

import { Stars } from "./Stars";

export interface TopPickCard {
  id: string;
  rank: number;
  badge: string;
  name: string;
  thumbnailUrl?: string;
  thumbnailAlt?: string;
  /** 0–5 star rating. */
  rating: number;
  /** Total review count, pre-formatted numeric (e.g. 2184). */
  reviewCount: number;
  /** Pre-formatted price display, e.g. "$899". */
  priceDisplay: string;
  /** Struck-through previous price, e.g. "$1,099". */
  wasPriceDisplay?: string;
  /** Value shown in the red "−$X" flag. Pre-formatted, e.g. "−$200". */
  dropDisplay?: string;
  /** Affiliate destination. */
  ctaHref: string;
  /** CTA button label. Default "Check Amazon price →". */
  ctaLabel?: string;
  /** Anchor href for the "JUMP TO FULL REVIEW" link. */
  jumpHref?: string;
  /** Shown / hidden via `winner` class on the card. Default derives from rank === 1. */
  winner?: boolean;
}

export interface TopPicksProps {
  picks: TopPickCard[];
}

export function TopPicks({ picks }: TopPicksProps) {
  return (
    <div className="top-picks">
      {picks.map((p) => {
        const isWinner = p.winner ?? p.rank === 1;
        return (
          <div key={p.id} className={`top-pick${isWinner ? " winner" : ""}`}>
            <div className="pick-head">
              {isWinner ? (
                <span className="badge-top">{p.badge}</span>
              ) : (
                <span className="pill steam">{p.badge}</span>
              )}
              {p.dropDisplay && (
                <span className="price-drop-flag">{p.dropDisplay}</span>
              )}
            </div>
            <div className="pick-img" aria-hidden="true">
              {p.thumbnailUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.thumbnailUrl}
                  alt={p.thumbnailAlt ?? p.name}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              ) : (
                <span className="mono">IMG · {p.name.split(" ")[0].toUpperCase()}</span>
              )}
            </div>
            <div>
              <div className="pick-name">{p.name}</div>
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  color: "var(--ink-muted)",
                  marginTop: 4,
                  letterSpacing: 0.4,
                }}
              >
                <Stars n={p.rating} size={12} /> &nbsp;{p.rating.toFixed(1)} ·{" "}
                {p.reviewCount.toLocaleString()} REVIEWS
              </div>
            </div>
            <div className="pick-price-row">
              <div>
                {p.wasPriceDisplay && (
                  <span className="price-was">{p.wasPriceDisplay}</span>
                )}
                <span className="price" style={{ fontSize: 22 }}>
                  {p.priceDisplay}
                </span>
              </div>
              <span className="in-stock-flag">In stock</span>
            </div>
            <a
              href={p.ctaHref}
              className="btn-tb btn-amazon btn-block"
              rel="sponsored nofollow noopener"
              target="_blank"
            >
              {p.ctaLabel ?? "Check Amazon price →"}
            </a>
            {p.jumpHref && (
              <Link
                href={p.jumpHref}
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  color: "var(--ink-muted)",
                  textDecoration: "none",
                  textAlign: "center",
                  letterSpacing: "0.05em",
                }}
              >
                JUMP TO FULL REVIEW ↓
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}

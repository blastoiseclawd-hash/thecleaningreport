export interface RetailerLink {
  name: string;
  /** Pre-formatted price display, e.g. "$899". */
  priceDisplay: string;
  href: string;
  /** Highlighted as the primary offer. One per stack is standard. */
  primary?: boolean;
  /** Small trailing label — e.g. "Prime · 2-day" / "Free shipping". */
  note?: string;
}

export interface RetailerStackProps {
  retailers: RetailerLink[];
}

export function RetailerStack({ retailers }: RetailerStackProps) {
  return (
    <div className="retailer-stack">
      {retailers.map((r, i) => (
        <a
          key={`${r.name}-${i}`}
          href={r.href}
          className={`retailer-btn${r.primary ? " primary" : ""}`}
          rel="sponsored nofollow noopener"
          target="_blank"
        >
          <span className="r-name">{r.name}</span>
          <span className="r-price">{r.priceDisplay}</span>
          {r.note && <span className="r-note">{r.note}</span>}
          <span className="r-arrow">→</span>
        </a>
      ))}
    </div>
  );
}

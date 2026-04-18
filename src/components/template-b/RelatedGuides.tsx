import Link from "next/link";

export interface RelatedGuide {
  /** Small eyebrow label — e.g. "Guide · Surface". */
  kicker: string;
  title: string;
  /** Small meta line — e.g. "12 MODELS · UPDATED APR 2026". */
  meta?: string;
  href: string;
}

export interface RelatedGuidesProps {
  items: RelatedGuide[];
}

export function RelatedGuides({ items }: RelatedGuidesProps) {
  return (
    <div className="related-grid">
      {items.map((it, i) => (
        <Link
          key={`${it.href}-${i}`}
          href={it.href}
          className="related-card"
        >
          <div className="kicker">{it.kicker}</div>
          <div className="ttl">{it.title}</div>
          {it.meta && <div className="meta-i">{it.meta}</div>}
        </Link>
      ))}
    </div>
  );
}

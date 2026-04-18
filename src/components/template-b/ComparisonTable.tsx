import type { ReactNode } from "react";

export interface ComparisonColumn {
  /** Column header label. */
  label: string;
  /** Render the body cell. Return mono-styled strings by wrapping in <span className="mono">. */
  render: (row: ComparisonRow) => ReactNode;
  /** Optional style passthrough for the `<td>`. */
  cellStyle?: React.CSSProperties;
}

export interface ComparisonRow {
  /** Stable id for React keys. */
  id: string;
  rank: number;
  name: string;
  /** Small secondary line under the name. Typically `#1 · EDITOR'S PICK`. */
  subline?: string;
  thumbnailUrl?: string;
  thumbnailAlt?: string;
  /** Main price display, e.g. "$899". */
  priceDisplay: string;
  /** Struck-through previous price, e.g. "$1,099". */
  wasPriceDisplay?: string;
  /** Triggers the red "PRICE DROP" flag. */
  priceDrop?: boolean;
  /** CTA destination. */
  ctaHref: string;
  /** Any extra fields the custom columns pull from. */
  [key: string]: unknown;
}

export interface ComparisonTableProps {
  eyebrow?: string;
  heading: string;
  /** Right-aligned meta strings, e.g. "PRICES · APR 18, 2026" + "ALL IN STOCK". */
  metaLines?: string[];
  /** Extra data columns between Product and Price. Order = render order. */
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  /** Label on the product-column header. Default "Product". */
  productLabel?: string;
  /** Label on the price-column header. Default "Price". */
  priceLabel?: string;
  /** Label on the CTA button per row. Default "View ↗". */
  ctaLabel?: string;
  /** Anchor id on the wrapper. Default "comparison". */
  anchorId?: string;
}

export function ComparisonTable({
  eyebrow = "At a glance",
  heading,
  metaLines,
  columns,
  rows,
  productLabel = "Product",
  priceLabel = "Price",
  ctaLabel = "View ↗",
  anchorId = "comparison",
}: ComparisonTableProps) {
  return (
    <div className="cmp" id={anchorId}>
      <div className="cmp-head">
        <div>
          <div className="eyebrow-tb" style={{ marginBottom: 8 }}>
            {eyebrow}
          </div>
          <h2>{heading}</h2>
        </div>
        {metaLines?.map((line, i) => (
          <div key={i} className="meta">
            {line}
          </div>
        ))}
      </div>
      <div className="cmp-scroll">
        <table>
          <thead>
            <tr>
              <th>{productLabel}</th>
              {columns.map((c, i) => (
                <th key={`${c.label}-${i}`}>{c.label}</th>
              ))}
              <th>{priceLabel}</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className={row.rank === 1 ? "winner" : undefined}>
                <td>
                  <div className="cell-product">
                    <div className="thumb" aria-hidden="true">
                      {row.thumbnailUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={row.thumbnailUrl}
                          alt={row.thumbnailAlt ?? row.name}
                          style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                      ) : (
                        <span className="mono" style={{ fontSize: 8 }}>IMG</span>
                      )}
                    </div>
                    <div>
                      <div className="p-name">{row.name}</div>
                      {row.subline && <div className="p-sub">{row.subline}</div>}
                    </div>
                  </div>
                </td>
                {columns.map((c, i) => (
                  <td key={`${row.id}-${i}`} style={c.cellStyle}>
                    {c.render(row)}
                  </td>
                ))}
                <td>
                  <div className="cell-price">
                    {row.wasPriceDisplay && (
                      <span className="price-was">{row.wasPriceDisplay}</span>
                    )}
                    {row.priceDisplay}
                  </div>
                  {row.priceDrop && (
                    <div className="price-drop-flag" style={{ marginTop: 4 }}>
                      PRICE DROP
                    </div>
                  )}
                </td>
                <td>
                  <a
                    href={row.ctaHref}
                    className="btn-tb btn-amazon btn-sm"
                    rel="sponsored nofollow noopener"
                    target="_blank"
                  >
                    {ctaLabel}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

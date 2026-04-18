import { RetailerStack, type RetailerLink } from "./RetailerStack";
import { Stars } from "./Stars";

export interface ProductBlockSpec {
  label: string;
  value: string;
}

export interface ProductBlockImage {
  url: string;
  alt: string;
}

export interface ProductBlockData {
  id: string;
  rank: number;
  badge: string;
  name: string;
  /** Star rating 0–5. */
  rating: number;
  reviewCount: number;
  /** Editor's proprietary score (e.g. "9.4"). Pre-formatted. */
  tcrScore?: string;
  /** Pre-formatted price display, e.g. "$899". */
  priceDisplay: string;
  /** Struck previous price. */
  wasPriceDisplay?: string;
  /** Flag text, e.g. "−$200" or "PRICE DROP · SAVE $200". */
  dropDisplay?: string;
  /** Long-form description body. */
  description: string;
  pros: string[];
  cons: string[];
  specs: ProductBlockSpec[];
  /** Up to 4 images — main + up to 3 thumbs. */
  images: ProductBlockImage[];
  retailers: RetailerLink[];
  /** Anchor id for direct linking. Defaults to `id`. */
  anchorId?: string;
}

export interface ProductBlockProps {
  product: ProductBlockData;
  /** Label for the "works" pros column. Default "What works". */
  prosLabel?: string;
  /** Label for the "annoys" cons column. Default "What annoys". */
  consLabel?: string;
}

export function ProductBlock({
  product: p,
  prosLabel = "What works",
  consLabel = "What annoys",
}: ProductBlockProps) {
  const [mainImage, ...thumbs] = p.images;
  const anchor = p.anchorId ?? p.id;
  const isWinner = p.rank === 1;

  return (
    <article
      className={`prod-block${isWinner ? " winner" : ""}`}
      id={anchor}
    >
      <div className="prod-media">
        <div className="main-img">
          {mainImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={mainImage.url}
              alt={mainImage.alt}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          ) : (
            <span className="mono">PRODUCT PHOTO · {p.name.toUpperCase()}</span>
          )}
        </div>
        {thumbs.length > 0 && (
          <div className="thumbs">
            {thumbs.slice(0, 3).map((img, i) => (
              <div key={`${anchor}-thumb-${i}`} className={`t${i === 0 ? " active" : ""}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.url}
                  alt={img.alt}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="prod-body">
        <div className="rank-line">
          <span className="rank-num">#{p.rank}</span>
          {isWinner ? (
            <span className="badge-top">{p.badge}</span>
          ) : (
            <span className="pill steam">{p.badge}</span>
          )}
          {p.dropDisplay && (
            <span className="price-drop-flag">{p.dropDisplay}</span>
          )}
        </div>
        <h3>{p.name}</h3>
        <div className="rating-line">
          <Stars n={p.rating} />{" "}
          <span>
            <strong style={{ color: "var(--ink)" }}>{p.rating.toFixed(1)}</strong> / 5
          </span>
          <span style={{ color: "var(--ink-subtle)" }}>·</span>
          <span>{p.reviewCount.toLocaleString()} ratings</span>
          {p.tcrScore && (
            <>
              <span style={{ color: "var(--ink-subtle)" }}>·</span>
              <span>TCR score {p.tcrScore}</span>
            </>
          )}
        </div>
        <p className="desc">{p.description}</p>

        <div className="proscons">
          <div className="col pro">
            <h5>{prosLabel}</h5>
            <ul>
              {p.pros.map((t, i) => (
                <li key={`${anchor}-pro-${i}`}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="col con">
            <h5>{consLabel}</h5>
            <ul>
              {p.cons.map((t, i) => (
                <li key={`${anchor}-con-${i}`}>{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="specs-grid">
          {p.specs.map((s, i) => (
            <div className="s" key={`${anchor}-spec-${i}`}>
              <div className="s-label">{s.label}</div>
              <div className="s-val">{s.value}</div>
            </div>
          ))}
        </div>
      </div>

      <aside className="prod-buy">
        <div className="buy-head">
          <div className="big-price">{p.priceDisplay}</div>
          {p.dropDisplay && <div className="save">{p.dropDisplay}</div>}
        </div>
        {p.wasPriceDisplay && (
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              color: "var(--ink-muted)",
              marginBottom: 4,
            }}
          >
            <s>{p.wasPriceDisplay}</s> · Lowest in 90 days
          </div>
        )}
        <div className="buy-sub">
          <span className="in-stock-flag">In stock · ships today</span>
        </div>
        <RetailerStack retailers={p.retailers} />
      </aside>
    </article>
  );
}

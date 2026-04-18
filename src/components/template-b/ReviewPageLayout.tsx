import Link from "next/link";
import type { ReactNode } from "react";

import type { BreadcrumbItem, HeroPill } from "./MoneyHero";
import { RetailerStack, type RetailerLink } from "./RetailerStack";
import { Stars } from "./Stars";

export interface ReviewHeroProduct {
  name: string;
  /** Main hero image url. If omitted, placeholder shown. */
  imageUrl?: string;
  imageAlt?: string;
  /** Pre-formatted main price, e.g. "$899". */
  priceDisplay: string;
  /** Struck previous price. */
  wasPriceDisplay?: string;
  /** "−$200" style drop flag; omit if no drop. */
  dropDisplay?: string;
  /** 0–5 stars. */
  rating: number;
  reviewCount: number;
  /** 90-day low / freshness line under the price, e.g. "Lowest in 90 days". */
  priceNote?: string;
  retailers: RetailerLink[];
}

export interface ReviewVerdict {
  /** Eyebrow label, default "VERDICT". */
  label?: string;
  /** Main verdict copy (allow <strong>, links). */
  content: ReactNode;
}

export interface ReviewSpec {
  label: string;
  value: string;
}

export interface ReviewTocItem {
  href: string;
  label: string;
}

export interface ReviewBodySection {
  id: string;
  heading: string;
  body: ReactNode;
}

export interface ReviewMidCta {
  /** Small flag above the headline, e.g. "PRICE DROP · LOWEST IN 90 DAYS". */
  flagLabel?: string;
  headline: string;
  subline?: ReactNode;
  ctaLabel: string;
  ctaHref: string;
}

export interface ReviewAlternative {
  id: string;
  badge?: string;
  name: string;
  bestFor: string;
  priceDisplay: string;
  href: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface ReviewPageLayoutProps {
  header: ReactNode;
  footer: ReactNode;
  breadcrumb: BreadcrumbItem[];
  pills?: HeroPill[];
  /** Top-of-page badge, e.g. "EDITOR'S #1 PICK". */
  topBadge?: string;
  headline: string | string[];
  sub?: ReactNode;
  verdict?: ReviewVerdict;
  product: ReviewHeroProduct;
  byline?: ReactNode;
  toc?: {
    label?: string;
    items: ReviewTocItem[];
  };
  specs?: {
    label?: string;
    items: ReviewSpec[];
  };
  pros?: string[];
  cons?: string[];
  /** Long-form body — the core review. */
  sections: ReviewBodySection[];
  /** Optional mid-article call-to-action. */
  midCta?: ReviewMidCta;
  alternatives?: {
    heading?: string;
    items: ReviewAlternative[];
  };
  faq?: {
    eyebrow?: string;
    heading: string;
    /** <FAQ> component pre-rendered. */
    children: ReactNode;
  };
  stickyCta?: ReactNode;
}

export function ReviewPageLayout({
  header,
  footer,
  breadcrumb,
  pills,
  topBadge,
  headline,
  sub,
  verdict,
  product,
  byline,
  toc,
  specs,
  pros,
  cons,
  sections,
  midCta,
  alternatives,
  faq,
  stickyCta,
}: ReviewPageLayoutProps) {
  const headlineLines = Array.isArray(headline) ? headline : [headline];

  return (
    <div className="tb-root">
      {header}
      <main>
        <section
          style={{ padding: "32px 0 40px", borderBottom: "1px solid var(--rule)" }}
        >
          <div className="shell">
            <nav
              aria-label="Breadcrumb"
              className="mono"
              style={{
                fontSize: 11,
                color: "var(--ink-subtle)",
                letterSpacing: "0.08em",
                marginBottom: 16,
              }}
            >
              {breadcrumb.map((crumb, i) => (
                <span key={`${crumb.label}-${i}`}>
                  {crumb.href && !crumb.current ? (
                    <Link
                      href={crumb.href}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {crumb.label.toUpperCase()}
                    </Link>
                  ) : (
                    <span
                      style={{ color: crumb.current ? "var(--steam)" : undefined }}
                    >
                      {crumb.label.toUpperCase()}
                    </span>
                  )}
                  {i < breadcrumb.length - 1 && <span> / </span>}
                </span>
              ))}
            </nav>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr",
                gap: 48,
                alignItems: "start",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    marginBottom: 14,
                    flexWrap: "wrap",
                  }}
                >
                  {topBadge && <span className="badge-top">{topBadge}</span>}
                  {pills?.map((pill, i) => (
                    <span
                      key={i}
                      className={
                        pill.variant && pill.variant !== "default"
                          ? `pill ${pill.variant}`
                          : "pill"
                      }
                    >
                      {pill.label}
                    </span>
                  ))}
                </div>

                <h1
                  style={{
                    fontSize: "clamp(36px, 4.6vw, 56px)",
                    lineHeight: 1.04,
                    marginBottom: 16,
                  }}
                >
                  {headlineLines.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < headlineLines.length - 1 && <br />}
                    </span>
                  ))}
                </h1>

                {sub && (
                  <p
                    style={{
                      fontSize: 17,
                      color: "var(--ink-muted)",
                      lineHeight: 1.65,
                      maxWidth: 640,
                    }}
                  >
                    {sub}
                  </p>
                )}

                {verdict && (
                  <div
                    className="tldr"
                    style={{ marginTop: 22, gridTemplateColumns: "120px 1fr" }}
                  >
                    <div className="label">{verdict.label ?? "VERDICT"}</div>
                    <p>{verdict.content}</p>
                  </div>
                )}
              </div>

              <aside>
                <div className="prod-buy" style={{ position: "static" }}>
                  <div
                    className="main-img"
                    style={{
                      aspectRatio: "1/1",
                      marginBottom: 16,
                      borderRadius: 4,
                    }}
                  >
                    {product.imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={product.imageUrl}
                        alt={product.imageAlt ?? product.name}
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                      />
                    ) : (
                      <span className="mono">{product.name.toUpperCase()}</span>
                    )}
                  </div>
                  <div className="buy-head">
                    <div className="big-price">{product.priceDisplay}</div>
                    {product.dropDisplay && (
                      <div className="save">{product.dropDisplay}</div>
                    )}
                  </div>
                  {(product.wasPriceDisplay || product.priceNote) && (
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        color: "var(--ink-muted)",
                        marginBottom: 6,
                      }}
                    >
                      {product.wasPriceDisplay && <s>{product.wasPriceDisplay}</s>}
                      {product.wasPriceDisplay && product.priceNote && " · "}
                      {product.priceNote}
                    </div>
                  )}
                  <div
                    className="rating-line"
                    style={{ margin: "8px 0 14px", padding: 0, borderBottom: 0 }}
                  >
                    <Stars n={product.rating} /> {product.rating.toFixed(1)} ·{" "}
                    {product.reviewCount.toLocaleString()} ratings
                  </div>
                  <RetailerStack retailers={product.retailers} />
                </div>
              </aside>
            </div>
          </div>
        </section>

        {byline && (
          <section style={{ padding: "28px 0 8px" }}>
            <div className="shell">{byline}</div>
          </section>
        )}

        {(toc || specs) && (
          <section style={{ padding: "20px 0" }}>
            <div
              className="shell"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 32,
              }}
            >
              {toc ? (
                <div className="toc" style={{ margin: 0 }}>
                  <div className="label">{toc.label ?? "IN THIS REVIEW"}</div>
                  <ol>
                    {toc.items.map((item, i) => (
                      <li key={`${item.href}-${i}`}>
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : (
                <div />
              )}
              {specs && (
                <div
                  id="specs"
                  style={{
                    border: "1px solid var(--rule)",
                    borderRadius: 4,
                    padding: "18px 20px",
                    background: "var(--bg)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10.5,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--ink-subtle)",
                      marginBottom: 10,
                    }}
                  >
                    {specs.label ?? "SPECS AT A GLANCE"}
                  </div>
                  <div
                    className="specs-grid"
                    style={{ marginTop: 0, gridTemplateColumns: "repeat(2, 1fr)" }}
                  >
                    {specs.items.map((s, i) => (
                      <div className="s" key={`${s.label}-${i}`}>
                        <div className="s-label">{s.label}</div>
                        <div className="s-val">{s.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        <section style={{ padding: "24px 0 32px" }}>
          <div className="shell-narrow">
            {(pros || cons) && (
              <div className="proscons">
                {pros && (
                  <div className="col pro">
                    <h5>What works</h5>
                    <ul>
                      {pros.map((t, i) => (
                        <li key={`pro-${i}`}>{t}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {cons && (
                  <div className="col con">
                    <h5>What annoys</h5>
                    <ul>
                      {cons.map((t, i) => (
                        <li key={`con-${i}`}>{t}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {sections.map((sec) => (
              <div key={sec.id} id={sec.id} style={{ marginTop: 28 }}>
                <h2
                  style={{ fontSize: 28, marginBottom: 12, letterSpacing: "-0.015em" }}
                >
                  {sec.heading}
                </h2>
                <div
                  style={{
                    fontSize: 17,
                    lineHeight: 1.72,
                    color: "var(--ink-2)",
                  }}
                >
                  {sec.body}
                </div>
              </div>
            ))}

            {midCta && (
              <div
                style={{
                  margin: "40px 0",
                  padding: 22,
                  background: "var(--bg-panel)",
                  border: "1px solid var(--rule)",
                  borderRadius: 6,
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: 20,
                  alignItems: "center",
                }}
              >
                <div>
                  {midCta.flagLabel && (
                    <div
                      className="mono"
                      style={{
                        fontSize: 10.5,
                        letterSpacing: "0.1em",
                        color: "var(--price-drop)",
                        fontWeight: 700,
                        marginBottom: 4,
                      }}
                    >
                      {midCta.flagLabel}
                    </div>
                  )}
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 20,
                      fontWeight: 600,
                    }}
                  >
                    {midCta.headline}
                  </div>
                  {midCta.subline && (
                    <div
                      className="mono"
                      style={{
                        fontSize: 11,
                        color: "var(--ink-muted)",
                        marginTop: 4,
                        letterSpacing: "0.03em",
                      }}
                    >
                      {midCta.subline}
                    </div>
                  )}
                </div>
                <a
                  href={midCta.ctaHref}
                  className="btn-tb btn-amazon btn-lg"
                  rel="sponsored nofollow noopener"
                  target="_blank"
                >
                  {midCta.ctaLabel}
                </a>
              </div>
            )}

            {alternatives && alternatives.items.length > 0 && (
              <div id="alternatives" style={{ marginTop: 32 }}>
                <h2 style={{ fontSize: 28, marginBottom: 14 }}>
                  {alternatives.heading ?? "Alternatives to consider"}
                </h2>
                <div style={{ display: "grid", gap: 14 }}>
                  {alternatives.items.map((alt) => (
                    <Link
                      key={alt.id}
                      href={alt.href}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "80px 1fr auto",
                        gap: 16,
                        padding: 16,
                        border: "1px solid var(--rule)",
                        borderRadius: 6,
                        textDecoration: "none",
                        color: "var(--ink)",
                        background: "var(--bg)",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          aspectRatio: "1/1",
                          borderRadius: 4,
                          fontSize: 8,
                          background: "var(--rule-soft)",
                          display: "grid",
                          placeItems: "center",
                        }}
                      >
                        {alt.imageUrl ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={alt.imageUrl}
                            alt={alt.imageAlt ?? alt.name}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        ) : (
                          <span className="mono">IMG</span>
                        )}
                      </div>
                      <div>
                        {alt.badge && (
                          <span
                            className="pill steam"
                            style={{ marginBottom: 6 }}
                          >
                            {alt.badge}
                          </span>
                        )}
                        <div
                          style={{
                            fontFamily: "var(--serif)",
                            fontSize: 18,
                            fontWeight: 600,
                            lineHeight: 1.2,
                          }}
                        >
                          {alt.name}
                        </div>
                        <div
                          className="mono"
                          style={{
                            fontSize: 11,
                            color: "var(--ink-muted)",
                            marginTop: 4,
                            letterSpacing: "0.04em",
                          }}
                        >
                          BEST FOR: {alt.bestFor.toUpperCase()}
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div
                          className="mono"
                          style={{ fontSize: 19, fontWeight: 600 }}
                        >
                          {alt.priceDisplay}
                        </div>
                        <div
                          className="mono"
                          style={{
                            fontSize: 10.5,
                            color: "var(--steam-deep)",
                            marginTop: 4,
                            letterSpacing: "0.05em",
                          }}
                        >
                          READ REVIEW →
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {faq && (
          <section style={{ padding: "24px 0 40px" }} id="faq">
            <div className="shell-narrow">
              {faq.eyebrow && (
                <div className="eyebrow-tb" style={{ marginBottom: 14 }}>
                  {faq.eyebrow}
                </div>
              )}
              <h2 style={{ marginBottom: 20 }}>{faq.heading}</h2>
              {faq.children}
            </div>
          </section>
        )}
      </main>
      {footer}
      {stickyCta}
    </div>
  );
}

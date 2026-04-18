import Link from "next/link";
import type { ReactNode } from "react";

import type { HeroPill, BreadcrumbItem } from "./MoneyHero";

export interface SupportPageTocItem {
  href: string;
  label: string;
}

export interface SupportPageSection {
  eyebrow?: string;
  heading: string;
  children: ReactNode;
  anchorId?: string;
}

export interface SupportPageLayoutProps {
  header: ReactNode;
  footer: ReactNode;
  breadcrumb: BreadcrumbItem[];
  /** Optional pills above the h1 — e.g. "HOW-TO · 12 MIN READ". */
  pills?: HeroPill[];
  /** Headline text. Array yields `<br />` line breaks. */
  headline: string | string[];
  /** Deck / sub copy under the h1. */
  sub?: ReactNode;
  /** Optional <Byline> rendered in the same section as the TOC. */
  byline?: ReactNode;
  /** Optional inline TOC. */
  toc?: {
    label?: string;
    items: SupportPageTocItem[];
  };
  /** Long-form body — pass <h2>/<h3>/<p>/tables/etc. Rendered in shell-narrow + prose-tb. */
  children: ReactNode;
  /** Optional UpdateLog panel rendered between body and relatedGuides. */
  updateLog?: ReactNode;
  /** Related content section at the bottom. */
  relatedGuides?: SupportPageSection;
}

export function SupportPageLayout({
  header,
  footer,
  breadcrumb,
  pills,
  headline,
  sub,
  byline,
  toc,
  children,
  updateLog,
  relatedGuides,
}: SupportPageLayoutProps) {
  const headlineLines = Array.isArray(headline) ? headline : [headline];

  return (
    <div className="tb-root">
      {header}
      <main>
        <section style={{ padding: "40px 0 28px", borderBottom: "1px solid var(--rule)" }}>
          <div className="shell-narrow">
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

            {pills && pills.length > 0 && (
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  marginBottom: 14,
                  flexWrap: "wrap",
                }}
              >
                {pills.map((pill, i) => (
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
            )}

            <h1 style={{ marginBottom: 16 }}>
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
                  margin: 0,
                }}
              >
                {sub}
              </p>
            )}
          </div>
        </section>

        {(byline || toc) && (
          <section style={{ padding: "32px 0 12px" }}>
            <div className="shell-narrow">
              {byline}
              {toc && (
                <div className="toc">
                  <div className="label">{toc.label ?? "IN THIS ARTICLE"}</div>
                  <ol>
                    {toc.items.map((item, i) => (
                      <li key={`${item.href}-${i}`}>
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </section>
        )}

        <section style={{ padding: "16px 0 48px" }}>
          <div className="shell-narrow">
            <div className="prose-tb">{children}</div>
          </div>
        </section>

        {updateLog && (
          <section style={{ padding: "8px 0 24px" }}>
            <div className="shell-narrow">{updateLog}</div>
          </section>
        )}

        {relatedGuides && (
          <section style={{ padding: "16px 0 56px" }}>
            <div className="shell">
              {relatedGuides.eyebrow && (
                <div className="eyebrow-tb" style={{ marginBottom: 14 }}>
                  {relatedGuides.eyebrow}
                </div>
              )}
              <h2 style={{ marginBottom: 20 }}>{relatedGuides.heading}</h2>
              {relatedGuides.children}
            </div>
          </section>
        )}
      </main>
      {footer}
    </div>
  );
}

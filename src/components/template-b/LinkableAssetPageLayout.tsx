import Link from "next/link";
import type { ReactNode } from "react";

import type { BreadcrumbItem, HeroPill } from "./MoneyHero";

export interface AssetAffordance {
  /** Button label, e.g. "Download PDF" / "Embed this table" / "Print this page". */
  label: string;
  /** Href. For PDFs + embeds this can be a local asset URL; for print it can be `#` with onClick wired. */
  href: string;
  /** Visual variant. Default "primary" for the first affordance, "secondary" thereafter. */
  variant?: "primary" | "secondary" | "ghost";
  /** Small sub-line under the label, e.g. "PNG · 1200×800". */
  meta?: string;
  /** Pass-through target. Defaults to "_self" for downloads, "_blank" for external. */
  target?: "_self" | "_blank";
  /** Anchor rel. Downloads use rel="nofollow", embeds leave blank, etc. */
  rel?: string;
}

export interface LinkableAssetSection {
  eyebrow?: string;
  heading: string;
  children: ReactNode;
  anchorId?: string;
}

export interface LinkableAssetPageLayoutProps {
  header: ReactNode;
  footer: ReactNode;
  breadcrumb: BreadcrumbItem[];
  pills?: HeroPill[];
  headline: string | string[];
  sub?: ReactNode;
  /** CTAs row above the asset — download / embed / print. */
  affordances?: AssetAffordance[];
  /** The asset itself — lookup table, decision tree, printable grid, etc. Full-width via shell-wide. */
  children: ReactNode;
  /** Optional "how this is compiled" / methodology block. */
  methodology?: LinkableAssetSection;
  /** Optional related-content section at the bottom. */
  relatedGuides?: LinkableAssetSection;
  /** Optional update log above related. */
  updateLog?: ReactNode;
}

export function LinkableAssetPageLayout({
  header,
  footer,
  breadcrumb,
  pills,
  headline,
  sub,
  affordances,
  children,
  methodology,
  relatedGuides,
  updateLog,
}: LinkableAssetPageLayoutProps) {
  const headlineLines = Array.isArray(headline) ? headline : [headline];

  return (
    <div className="tb-root">
      {header}
      <main>
        <section style={{ padding: "40px 0 28px" }}>
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

            <h1 style={{ marginBottom: 16, maxWidth: 840 }}>
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
                  maxWidth: 720,
                  margin: 0,
                }}
              >
                {sub}
              </p>
            )}

            {affordances && affordances.length > 0 && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                  marginTop: 26,
                }}
              >
                {affordances.map((a, i) => {
                  const variant = a.variant ?? (i === 0 ? "primary" : "secondary");
                  const cls =
                    variant === "primary"
                      ? "btn-tb btn-primary-tb"
                      : variant === "ghost"
                        ? "btn-tb btn-ghost-tb"
                        : "btn-tb btn-secondary-tb";
                  return (
                    <a
                      key={`${a.label}-${i}`}
                      href={a.href}
                      className={cls}
                      target={a.target ?? "_self"}
                      {...(a.rel ? { rel: a.rel } : {})}
                    >
                      <span>{a.label}</span>
                      {a.meta && (
                        <span
                          className="mono"
                          style={{
                            fontSize: 10.5,
                            color: "var(--ink-muted)",
                            marginLeft: 8,
                            letterSpacing: "0.04em",
                          }}
                        >
                          {a.meta}
                        </span>
                      )}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <section style={{ padding: "24px 0 48px" }}>
          <div className="shell-wide">{children}</div>
        </section>

        {methodology && (
          <section
            style={{ padding: "32px 0", background: "var(--bg-panel)" }}
            id={methodology.anchorId}
          >
            <div className="shell-narrow">
              {methodology.eyebrow && (
                <div className="eyebrow-tb" style={{ marginBottom: 12 }}>
                  {methodology.eyebrow}
                </div>
              )}
              <h2 style={{ marginBottom: 16 }}>{methodology.heading}</h2>
              <div className="prose-tb">{methodology.children}</div>
            </div>
          </section>
        )}

        {updateLog && (
          <section style={{ padding: "32px 0 16px" }}>
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

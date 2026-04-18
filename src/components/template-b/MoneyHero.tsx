import Link from "next/link";
import type { ReactNode } from "react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
  /** Render this crumb in steam-teal (marks the current page). */
  current?: boolean;
};

export type HeroPill = {
  label: string;
  /** Visual treatment. Matches template-b pill variants. */
  variant?: "default" | "amber" | "steam" | "rose" | "sage" | "ink";
};

export type JumpItem = {
  number: string;
  title: string;
  sub?: string;
  href: string;
};

export interface MoneyHeroProps {
  /** Breadcrumb trail. Last item typically carries `current: true`. */
  breadcrumb: BreadcrumbItem[];
  pills?: HeroPill[];
  /** Headline. Allow line breaks via an array, e.g. ["First line", "Second line"]. */
  headline: string | string[];
  /** Deck / subheadline text. */
  sub?: ReactNode;
  /** Optional skip-to anchors shown in the right column of the hero grid. */
  jumpItems?: JumpItem[];
  /** Optional TL;DR block — strong-emphasized quick-answer for GEO / skim readers. */
  tldr?: {
    /** Rich content allowed (e.g. <strong> wraps). */
    content: ReactNode;
    /** Label override; defaults to "TL;DR · Quick Answer". */
    label?: string;
    /** Small meta line under the label. */
    meta?: string;
  };
  /** Optional trailing content rendered below the hero's main grid — e.g. a `<TopPicks>` row. */
  children?: ReactNode;
}

export function MoneyHero({
  breadcrumb,
  pills,
  headline,
  sub,
  jumpItems,
  tldr,
  children,
}: MoneyHeroProps) {
  const headlineLines = Array.isArray(headline) ? headline : [headline];
  const hasRightCol = Boolean(jumpItems && jumpItems.length > 0);

  return (
    <section className="money-hero">
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
                <Link href={crumb.href} style={{ textDecoration: "none", color: "inherit" }}>
                  {crumb.label.toUpperCase()}
                </Link>
              ) : (
                <span style={{ color: crumb.current ? "var(--steam)" : undefined }}>
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
            gridTemplateColumns: hasRightCol ? "1.15fr 1fr" : "1fr",
            gap: 40,
            alignItems: "start",
          }}
        >
          <div className="h1-wrap">
            {pills && pills.length > 0 && (
              <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
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
            <h1>
              {headlineLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headlineLines.length - 1 && <br />}
                </span>
              ))}
            </h1>
            {sub && <p className="sub">{sub}</p>}
          </div>

          {hasRightCol && jumpItems && (
            <div style={{ display: "grid", gap: 8 }}>
              <div className="data-label" style={{ marginBottom: 4 }}>
                SKIP TO
              </div>
              {jumpItems.map((item) => (
                <Link
                  key={item.number}
                  href={item.href}
                  style={{
                    textDecoration: "none",
                    display: "grid",
                    gridTemplateColumns: "auto 1fr auto",
                    gap: 14,
                    padding: "10px 14px",
                    border: "1px solid var(--rule)",
                    borderRadius: 4,
                    background: "var(--bg)",
                    alignItems: "center",
                    color: "var(--ink)",
                  }}
                >
                  <span
                    className="mono"
                    style={{
                      fontSize: 11,
                      color: "var(--steam-deep)",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                    }}
                  >
                    {item.number}
                  </span>
                  <span>
                    <span
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: 15,
                        fontWeight: 600,
                        letterSpacing: "-0.01em",
                        display: "block",
                      }}
                    >
                      {item.title}
                    </span>
                    {item.sub && (
                      <span
                        className="mono"
                        style={{
                          fontSize: 11,
                          color: "var(--ink-muted)",
                          marginTop: 1,
                          letterSpacing: "0.03em",
                          display: "block",
                        }}
                      >
                        {item.sub}
                      </span>
                    )}
                  </span>
                  <span
                    className="mono"
                    style={{ color: "var(--ink-subtle)", fontSize: 14 }}
                  >
                    ↓
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {tldr && (
          <div className="tldr">
            <div>
              <div className="label">{tldr.label ?? "TL;DR · Quick Answer"}</div>
              {tldr.meta && (
                <div
                  className="mono"
                  style={{
                    fontSize: 10.5,
                    color: "var(--ink-muted)",
                    marginTop: 6,
                    letterSpacing: "0.04em",
                  }}
                >
                  {tldr.meta}
                </div>
              )}
            </div>
            <p>{tldr.content}</p>
          </div>
        )}

        {children}
      </div>
    </section>
  );
}

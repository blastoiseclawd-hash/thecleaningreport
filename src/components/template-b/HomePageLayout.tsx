import type { ReactNode } from "react";

export interface HomePageLayoutProps {
  header: ReactNode;
  footer: ReactNode;
  /** Page sections — compose `<HomeSection>` children for consistent padding/shell rhythm. */
  children: ReactNode;
  /** Optional floating sticky quick-buy bar. Uncommon on home but supported. */
  stickyCta?: ReactNode;
}

/** Bare shell for the homepage. Activates template-b.css via `.tb-root` and wires Header/Footer. */
export function HomePageLayout({
  header,
  footer,
  children,
  stickyCta,
}: HomePageLayoutProps) {
  return (
    <div className="tb-root">
      {header}
      <main>{children}</main>
      {footer}
      {stickyCta}
    </div>
  );
}

export type HomeSectionShell = "shell" | "shell-narrow" | "shell-wide" | "none";

export interface HomeSectionProps {
  children: ReactNode;
  /** Section padding shorthand, e.g. "64px 0 24px". Default matches v2 rhythm. */
  padding?: string;
  /** Inner width container. "none" leaves children unwrapped (rare — use for full-bleed). */
  shell?: HomeSectionShell;
  /** Anchor id on the section element. */
  anchorId?: string;
  /** Optional background color token, e.g. "var(--bg-panel)" for an offset stripe. */
  background?: string;
  /** Bordered separator (top + bottom of section). */
  bordered?: boolean;
}

/** Visually-consistent home-page section with v2-style padding + shell wrapping. */
export function HomeSection({
  children,
  padding = "48px 0",
  shell = "shell",
  anchorId,
  background,
  bordered,
}: HomeSectionProps) {
  const style: React.CSSProperties = {
    padding,
    ...(background ? { background } : {}),
    ...(bordered
      ? {
          borderTop: "1px solid var(--rule)",
          borderBottom: "1px solid var(--rule)",
        }
      : {}),
  };

  const inner =
    shell === "none" ? children : <div className={shell}>{children}</div>;

  return (
    <section id={anchorId} style={style}>
      {inner}
    </section>
  );
}

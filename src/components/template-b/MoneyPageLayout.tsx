import type { ReactNode } from "react";

export interface MoneyPageTocItem {
  href: string;
  label: string;
}

export interface MoneyPageToc {
  /** Eyebrow label above the list. Default "IN THIS GUIDE". */
  label?: string;
  items: MoneyPageTocItem[];
}

export interface MoneyPageSection {
  eyebrow?: string;
  heading: string;
  children: ReactNode;
  /** Anchor id on the wrapping section. */
  anchorId?: string;
}

export interface MoneyPageLayoutProps {
  /** Pre-rendered <Header> — the page picks the nav items. */
  header: ReactNode;
  /** Pre-rendered <Footer>. */
  footer: ReactNode;
  /** Pre-rendered <MoneyHero> + in-hero content (breadcrumb, pills, h1, sub, TopPicks, Disclosure). */
  hero: ReactNode;
  /** Optional <Byline>. Rendered in its own section before the TOC. */
  byline?: ReactNode;
  /** Optional TOC — rendered in the same section as the byline. */
  toc?: MoneyPageToc;
  /** <ComparisonTable> pre-rendered. */
  comparisonTable?: ReactNode;
  /** <MethodBox> pre-rendered. Ships in its own section. */
  methodBox?: ReactNode;
  /** Product blocks section — pre-rendered header + block children. */
  productBlocks?: MoneyPageSection;
  /** Buying guide section — long-form narrative rendered in shell-narrow. */
  buyingGuide?: MoneyPageSection;
  /** FAQ section — rendered in shell-narrow. */
  faq?: MoneyPageSection;
  /** Optional UpdateLog panel — rendered above relatedGuides. */
  updateLog?: ReactNode;
  /** Related guides section. */
  relatedGuides?: MoneyPageSection;
  /** Optional floating sticky quick-buy bar. */
  stickyCta?: ReactNode;
}

export function MoneyPageLayout({
  header,
  footer,
  hero,
  byline,
  toc,
  comparisonTable,
  methodBox,
  productBlocks,
  buyingGuide,
  faq,
  updateLog,
  relatedGuides,
  stickyCta,
}: MoneyPageLayoutProps) {
  return (
    <div className="tb-root">
      {header}
      <main>
        {hero}

        {(byline || toc) && (
          <section style={{ padding: "40px 0 12px" }}>
            <div className="shell">
              {byline}
              {toc && (
                <div className="toc">
                  <div className="label">{toc.label ?? "IN THIS GUIDE"}</div>
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

        {comparisonTable && (
          <section style={{ padding: "12px 0 48px" }}>
            <div className="shell">{comparisonTable}</div>
          </section>
        )}

        {methodBox && (
          <section style={{ padding: "8px 0 48px" }} id="method">
            <div className="shell">{methodBox}</div>
          </section>
        )}

        {productBlocks && (
          <section
            style={{ padding: "24px 0 40px" }}
            id={productBlocks.anchorId}
          >
            <div className="shell">
              <div style={{ marginBottom: 8 }}>
                {productBlocks.eyebrow && (
                  <div className="eyebrow-tb" style={{ marginBottom: 10 }}>
                    {productBlocks.eyebrow}
                  </div>
                )}
                <h2>{productBlocks.heading}</h2>
              </div>
              {productBlocks.children}
            </div>
          </section>
        )}

        {buyingGuide && (
          <section
            style={{ padding: "24px 0 40px" }}
            id={buyingGuide.anchorId ?? "buying-guide"}
          >
            <div className="shell-narrow">
              {buyingGuide.eyebrow && (
                <div className="eyebrow-tb" style={{ marginBottom: 14 }}>
                  {buyingGuide.eyebrow}
                </div>
              )}
              <h2 style={{ marginBottom: 20 }}>{buyingGuide.heading}</h2>
              <div className="prose-tb">{buyingGuide.children}</div>
            </div>
          </section>
        )}

        {faq && (
          <section
            style={{ padding: "40px 0" }}
            id={faq.anchorId ?? "faq"}
          >
            <div className="shell-narrow">
              {faq.eyebrow && (
                <div className="eyebrow-tb" style={{ marginBottom: 14 }}>
                  {faq.eyebrow}
                </div>
              )}
              <h2 style={{ marginBottom: 24 }}>{faq.heading}</h2>
              {faq.children}
            </div>
          </section>
        )}

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
      {stickyCta}
    </div>
  );
}

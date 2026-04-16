import Link from "next/link";

import { type Author } from "@/data/authors";
import { priceDisplay, type Product } from "@/data/products";
import { AuthorBioCard } from "@/components/content/author-bio";
import { ProductImageGallery } from "@/components/product/product-image-gallery";
import { articleSchema, breadcrumbSchema, faqSchema, productSchema, JsonLd } from "@/lib/schema";
import { siteConfig } from "@/config/site";

// Generic content shape that all hub content files share
interface HubReview {
  heading: string;
  reviewerScore: number;
  scoreDiffReason: string;
  body: string;
  pros: string[];
  cons: string[];
  verdict: string;
}

interface HubComparisonRow {
  badge: string;
  name: string;
  price: string;
  slug: string;
  [key: string]: string; // flexible extra columns
}

interface HubFaq {
  question: string;
  answer: string;
}

interface HubBuyingSection {
  heading: string;
  body: string;
}

interface HubPageProps {
  // Core content
  title: string;
  description: string;
  slug: string;
  publishedDate: string;
  modifiedDate?: string;
  quickAnswer: string;

  // Author
  author: Author;

  // Products
  productOrder: string[];
  orderedProducts: Product[];
  displayNames: Record<string, string>;
  badges: Record<string, string>;
  curatedSpecs: Record<string, Record<string, string>>;

  // Comparison table
  comparisonTable: HubComparisonRow[];
  comparisonColumns: { key: string; label: string }[];

  // Reviews
  reviews: Record<string, HubReview>;

  // Buying guide
  buyingGuide?: {
    title: string;
    sections: HubBuyingSection[];
  };

  // FAQs
  faqs?: HubFaq[];

  // Related links
  relatedLinks?: { href: string; title: string }[];

  // Breadcrumb
  breadcrumbLabel: string;

  // Last updated note
  lastUpdatedNote?: string;
}

function reviewLink(product: Product) {
  return product.affiliateLinks.find((link) => link.url && !link.url.includes("/dp/?tag="));
}

export function HubPage({
  title,
  description,
  slug,
  publishedDate,
  modifiedDate,
  quickAnswer,
  author,
  productOrder,
  orderedProducts,
  displayNames,
  badges,
  curatedSpecs,
  comparisonTable,
  comparisonColumns,
  reviews,
  buyingGuide,
  faqs,
  relatedLinks,
  breadcrumbLabel,
  lastUpdatedNote,
}: HubPageProps) {
  const hasComparisonTable = comparisonTable.length > 0;
  const topProduct = orderedProducts[0];
  const topRow = hasComparisonTable ? comparisonTable[0] : undefined;
  const modifiedDateCandidates = [
    publishedDate,
    ...orderedProducts.map((product) => product.lastUpdated),
    ...(modifiedDate ? [modifiedDate] : []),
  ];
  const resolvedModifiedDate = modifiedDateCandidates
    .reduce((latest, value) => {
      const latestTimestamp = Date.parse(latest);
      const candidateTimestamp = Date.parse(value);

      if (Number.isNaN(candidateTimestamp)) return latest;
      if (Number.isNaN(latestTimestamp) || candidateTimestamp > latestTimestamp) {
        return value;
      }

      return latest;
    }, publishedDate);

  const pageUrl = `${siteConfig.url}/${slug}`;

  return (
    <>
      {/* Structured Data */}
      <JsonLd data={articleSchema({
        title,
        description,
        url: pageUrl,
        datePublished: publishedDate,
        dateModified: resolvedModifiedDate,
        authorName: author.name,
        authorUrl: `${siteConfig.url}/about#${author.slug}`,
      })} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: siteConfig.url },
        { name: breadcrumbLabel, url: pageUrl },
      ])} />
      {faqs && faqs.length > 0 && (
        <JsonLd data={faqSchema(faqs)} />
      )}
      {orderedProducts.map((product) => (
        <JsonLd key={`schema-${product.id}`} data={productSchema(product)} />
      ))}

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#16212a] text-[#f2f6f3]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(94,111,120,0.32),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(129,147,117,0.14),transparent_28%)]" />
        <div className="site-shell relative py-8 text-sm text-[#b9c6c0]">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">{breadcrumbLabel}</li>
            </ol>
          </nav>
        </div>

        <div className="site-shell relative pb-14 sm:pb-18 lg:pb-24">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div className="max-w-4xl">
              <span className="editorial-rule text-[#b8c7b2] before:bg-[#8ea087]">
                Buyer&apos;s guide
              </span>
              <h1 className="display-title mt-6 max-w-5xl text-[#f6fbf8]">
                {title}
              </h1>
              <p className="mt-7 max-w-3xl text-[1.2rem] leading-9 text-[#dae4de] sm:text-[1.28rem]">
                {quickAnswer}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.96rem] text-[#c3d0cb]">
                <span>
                  By{" "}
                  <Link href={`/about#${author.slug}`} className="font-semibold text-[#cbd8c5] hover:text-white">
                    {author.name}
                  </Link>
                </span>
                <span>Updated {resolvedModifiedDate}</span>
              </div>

              {hasComparisonTable && (
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-sm border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#b8c7b2]">
                        Picks ranked
                    </p>
                    <p className="mt-3 font-[family-name:var(--font-heading-family)] text-[2rem] font-semibold text-white">
                      {productOrder.length} honest picks
                    </p>
                  </div>
                  {topRow?.name && (
                    <div className="rounded-sm border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#b8c7b2]">
                        Top pick
                      </p>
                      <p className="mt-3 font-[family-name:var(--font-heading-family)] text-[2rem] font-semibold text-white">
                        {topRow.name}
                      </p>
                    </div>
                  )}
                  {(() => {
                    const prices = comparisonTable
                      .map(r => parseFloat(r.price.replace(/[$,]/g, "")))
                      .filter(p => !isNaN(p))
                      .sort((a, b) => a - b);
                    if (prices.length === 0) return null;
                    const fmt = (n: number) => `$${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
                    return (
                      <div className="rounded-sm border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm">
                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#b8c7b2]">
                          Price range
                        </p>
                        <p className="mt-3 font-[family-name:var(--font-heading-family)] text-[2rem] font-semibold text-white">
                          {`${fmt(prices[0])} to ${fmt(prices[prices.length - 1])}`}
                        </p>
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>

            {topProduct && (
              <aside className="sand-panel overflow-hidden bg-[#fbf4ea]">
                <div className="px-7 py-7">
                  <p className="eyebrow">Top pick</p>
                  <h2 className="mt-4 font-[family-name:var(--font-heading-family)] text-[2.5rem] font-semibold leading-[0.98] text-[#182028]">
                    {displayNames[topProduct.id] || topProduct.name}
                  </h2>
                  <p className="mt-4 text-[1rem] leading-8 text-[#46525b]">
                    {reviews[topProduct.id]?.verdict?.split(".").slice(0, 2).join(".") + "."}
                  </p>

                  <div className="mt-6">
                    <ProductImageGallery
                      images={topProduct.images}
                      productName={topProduct.name}
                      frameClassName="min-h-[18rem] bg-[radial-gradient(circle_at_center,#edf0ea_0%,#dce2da_58%,#bcc6bc_100%)]"
                      imageSizes="(min-width: 1024px) 460px, 100vw"
                      priority
                    />
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a href={`#review-${topProduct.slug}`} className="button-primary">
                      Read the full review
                    </a>
                    <Link href="/how-we-review" className="button-secondary">
                      How we choose a pick
                    </Link>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>

      {/* Jump links */}
      <section className="border-b border-[#d9d4cb] bg-[#f3f2ec]">
        <div className="site-shell py-5">
          <div className="flex flex-wrap gap-2.5">
            {[
              { label: "Top pick", href: `#review-${[...orderedProducts].filter(p => reviews[p.id]).sort((a, b) => (reviews[b.id]?.reviewerScore ?? 0) - (reviews[a.id]?.reviewerScore ?? 0))[0]?.slug}` },
              ...(hasComparisonTable ? [{ label: "Comparison table", href: "#comparison-table" }] : []),
              { label: "Full reviews", href: "#full-reviews" },
              ...(buyingGuide ? [{ label: "Buying advice", href: "#buying-advice" }] : []),
              ...(faqs ? [{ label: "FAQ", href: "#faq" }] : []),
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="rounded-sm border border-[#d0d1c8] bg-[#fffefb] px-4 py-2 text-sm font-medium text-[#42515b] hover:border-[#97a28f] hover:text-[#182028]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      {hasComparisonTable && (
        <section id="comparison-table" className="section-space-sm bg-[#fffdf9]">
        <div className="site-shell">
          <div className="max-w-3xl">
            <span className="editorial-rule">Comparison</span>
            <h2 className="mt-6 font-[family-name:var(--font-heading-family)] text-[2.8rem] font-semibold leading-[0.98] text-[#23150f] sm:text-[3.3rem]">
              The short list.
            </h2>
          </div>

          {/* Mobile cards */}
          <div className="mt-10 grid gap-4 lg:hidden">
            {[...comparisonTable]
              .sort((a, b) => (reviews[b.slug]?.reviewerScore ?? 0) - (reviews[a.slug]?.reviewerScore ?? 0))
              .map((row) => {
              const review = reviews[row.slug];
              return (
                <article key={row.slug} className="sand-panel p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="eyebrow">{row.badge}</p>
                      <a href={`#review-${row.slug}`} className="mt-3 block font-[family-name:var(--font-heading-family)] text-[1.9rem] font-semibold leading-[1.02] text-[#2a5a8a] underline decoration-[#2a5a8a]/30 underline-offset-4 hover:text-[#1a3d5c] hover:decoration-[#1a3d5c]/50">
                        {row.name}
                      </a>
                    </div>
                    <div className="text-right">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#697560]">Price</p>
                      <p className="mt-2 font-[family-name:var(--font-heading-family)] text-[1.8rem] font-semibold text-[#182028]">
                        {row.price}
                      </p>
                    </div>
                  </div>
                  <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
                    {review && (
                      <div>
                        <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#697560]">Our Score</dt>
                        <dd className="mt-1 text-[1.1rem] font-semibold text-[#23150f]">{review.reviewerScore.toFixed(1)}/5</dd>
                      </div>
                    )}
                    {comparisonColumns.filter(c => c.key !== "badge" && c.key !== "name" && c.key !== "price" && c.key !== "slug").map(col => (
                      <div key={col.key}>
                        <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#697560]">{col.label}</dt>
                        <dd className="mt-1 text-[0.98rem] text-[#42515b]">{row[col.key] ?? "—"}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              );
            })}
          </div>

          {/* Desktop table */}
          <div className="mt-10 hidden lg:block">
            <div className="sand-panel overflow-hidden">
              <table className="w-full table-fixed text-left">
                <thead className="border-b border-[#dbd7ce] bg-[#f7f6f0]">
                  <tr>
                    <th className="w-[13%] px-4 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#697560]">Pick</th>
                    <th className="w-[20%] px-4 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#697560]">Product</th>
                    <th className="w-[8%] px-4 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#697560]">Score</th>
                    <th className="w-[9%] px-4 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#697560]">Price</th>
                    {comparisonColumns.filter(c => c.key !== "badge" && c.key !== "name" && c.key !== "price" && c.key !== "slug").map(col => (
                      <th key={col.key} className="px-4 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#697560]">{col.label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[...comparisonTable]
                    .sort((a, b) => (reviews[b.slug]?.reviewerScore ?? 0) - (reviews[a.slug]?.reviewerScore ?? 0))
                    .map((row, index) => {
                    const review = reviews[row.slug];
                    return (
                      <tr key={row.slug} className={index % 2 === 0 ? "bg-[#fffefb]" : "bg-[#f7f6f0]"}>
                        <td className="px-4 py-5 text-sm font-semibold text-[#667361]">{row.badge}</td>
                        <td className="px-4 py-5">
                          <a href={`#review-${row.slug}`} className="font-semibold text-[#2a5a8a] underline decoration-[#2a5a8a]/30 underline-offset-2 hover:text-[#1a3d5c] hover:decoration-[#1a3d5c]/50">
                            {row.name}
                          </a>
                        </td>
                        <td className="px-4 py-5 text-[1rem] font-semibold text-[#23150f]">
                          {review ? `${review.reviewerScore.toFixed(1)}` : "—"}
                        </td>
                        <td className="px-4 py-5 text-[1rem] font-semibold text-[#182028]">{row.price}</td>
                        {comparisonColumns.filter(c => c.key !== "badge" && c.key !== "name" && c.key !== "price" && c.key !== "slug").map(col => (
                          <td key={col.key} className="px-4 py-5 text-[0.95rem] text-[#4f5b64]">{row[col.key] ?? "—"}</td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </section>
      )}

      {/* Full reviews */}
      <section id="full-reviews" className="section-space-sm bg-[#fffdf9]">
        <div className="site-shell">
          <div className="max-w-4xl">
            <span className="editorial-rule">Full reviews</span>
            <h2 className="mt-6 font-[family-name:var(--font-heading-family)] text-[2.9rem] font-semibold leading-[0.98] text-[#23150f] sm:text-[3.5rem]">
              Every pick, with the good and the annoying.
            </h2>
          </div>

          <div className="mt-12 space-y-16">
            {[...orderedProducts]
              .filter((p) => reviews[p.id])
              .sort((a, b) => (reviews[b.id]?.reviewerScore ?? 0) - (reviews[a.id]?.reviewerScore ?? 0))
              .map((product, index) => {
              const content = reviews[product.id];
              if (!content) return null;

              const specs = curatedSpecs[product.id] || {};
              const cta = reviewLink(product);
              const badge = badges[product.id] || "";
              return (
                <section
                  key={product.id}
                  id={`review-${product.slug}`}
                  className="scroll-mt-28 border-t border-[#e3d4c5] pt-12 first:border-t-0 first:pt-0"
                >
                  <div className="grid gap-8 xl:grid-cols-[320px_1fr] xl:gap-12">
                    <aside className="self-start xl:sticky xl:top-28">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="number-chip">{`#${index + 1}`}</span>
                        <span className="eyebrow">{badge}</span>
                      </div>

                      <h3 className="mt-5 font-[family-name:var(--font-heading-family)] text-[2.2rem] font-semibold leading-[0.98] text-[#23150f]">
                        {displayNames[product.id] || product.name}
                      </h3>

                      <div className="mt-6">
                        <ProductImageGallery
                          images={product.images}
                          productName={product.name}
                          frameClassName="min-h-[19rem]"
                          imageSizes="(min-width: 1280px) 320px, 100vw"
                        />
                      </div>

                      <div className="mt-6 sand-panel p-5">
                        <div className="flex items-end justify-between gap-4 border-b border-[#e2d3c4] pb-4">
                          <div>
                            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#8a674e]">Current price</p>
                            <p className="mt-1 font-[family-name:var(--font-heading-family)] text-[2.2rem] font-semibold text-[#23150f]">
                              {priceDisplay(product)}
                            </p>
                          </div>
                        </div>

                        <dl className="mt-5 space-y-3">
                          {Object.entries(specs).map(([label, value]) => (
                            <div key={label} className="flex items-start justify-between gap-4 border-b border-[#efe4d8] pb-3 last:border-b-0 last:pb-0">
                              <dt className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-[#8a674e]">{label}</dt>
                              <dd className="text-right text-[0.96rem] font-medium text-[#23150f]">{value}</dd>
                            </div>
                          ))}
                        </dl>

                        <div className="mt-6">
                          {cta ? (
                            <a
                              href={cta.url}
                              target="_blank"
                              rel="noopener noreferrer nofollow sponsored"
                              className="button-primary w-full"
                            >
                              Check price on {cta.retailer}
                            </a>
                          ) : (
                            <a
                              href={`https://www.amazon.com/s?k=${encodeURIComponent(product.name)}&tag=${siteConfig.affiliatePrograms.amazon.tag}`}
                              target="_blank"
                              rel="noopener noreferrer nofollow sponsored"
                              className="button-primary w-full"
                            >
                              Check price on Amazon
                            </a>
                          )}
                        </div>
                      </div>
                    </aside>

                    <div>
                      <p className="eyebrow">Why it ranked here</p>
                      <h2 className="mt-4 max-w-4xl font-[family-name:var(--font-heading-family)] text-[2.5rem] font-semibold leading-[0.98] text-[#23150f] sm:text-[3rem]">
                        {content.heading}
                      </h2>

                      <div className="mt-6 space-y-5 text-[1.08rem] leading-8 text-[#35231a]">
                        {content.body.split("\n\n").map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>

                      <div className="mt-8 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
                        <blockquote className="sand-panel p-6">
                          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                            <div className="max-w-2xl">
                              <p className="eyebrow">Editor verdict</p>
                              <p className="mt-4 text-[1.08rem] leading-8 text-[#35231a]">{content.verdict}</p>
                            </div>
                            <div className="sm:min-w-[120px]">
                              <div className="rounded-sm border border-[#e1d2c3] bg-[#fffdf9] px-4 py-3">
                                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#8a674e]">Our score</p>
                                <p className="mt-2 font-[family-name:var(--font-heading-family)] text-[2rem] font-semibold text-[#23150f]">
                                  {content.reviewerScore.toFixed(1)}
                                </p>
                              </div>
                            </div>
                          </div>
                          <p className="mt-5 text-[0.94rem] leading-7 text-[#6b5649]">{content.scoreDiffReason}</p>
                        </blockquote>

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
                          <div className="rounded-md border border-[#c8dfcf] bg-[#f2faf1] p-6 shadow-[inset_4px_0_0_#4c7a5a]">
                            <p className="eyebrow text-[#2f6842]">What we like</p>
                            <ul className="mt-4 space-y-3">
                              {content.pros.map((pro) => (
                                <li key={pro} className="flex items-start gap-3 text-[0.98rem] leading-8 text-[#244131]">
                                  <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#2f6842]" />
                                  <span>{pro}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="rounded-md border border-[#ecc9c8] bg-[#fff6f5] p-6 shadow-[inset_4px_0_0_#b64542]">
                            <p className="eyebrow text-[#9f3430]">What we don&apos;t</p>
                            <ul className="mt-4 space-y-3">
                              {content.cons.map((con) => (
                                <li key={con} className="flex items-start gap-3 text-[0.98rem] leading-8 text-[#5b2e2b]">
                                  <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#b64542]" />
                                  <span>{con}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      {/* Buying advice */}
      {buyingGuide && (
        <section id="buying-advice" className="section-space-sm bg-[#f4eadf]">
          <div className="site-shell">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="max-w-xl">
                <span className="editorial-rule">Buying advice</span>
                <h2 className="mt-6 font-[family-name:var(--font-heading-family)] text-[2.8rem] font-semibold leading-[0.98] text-[#23150f] sm:text-[3.4rem]">
                  {buyingGuide.title}
                </h2>
              </div>

              <div className="grid gap-5">
                {buyingGuide.sections.map((item, index) => (
                  <article key={item.heading} className="grid gap-5 border-t border-[#ddcbbb] pt-5 first:border-t-0 first:pt-0 sm:grid-cols-[72px_1fr]">
                    <div className="number-chip">{`0${index + 1}`}</div>
                    <div>
                      <h3 className="font-[family-name:var(--font-heading-family)] text-[2rem] font-semibold leading-[1.02] text-[#23150f]">
                        {item.heading}
                      </h3>
                      <p className="mt-4 text-[1.05rem] leading-8 text-[#4f3b31]">{item.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs && faqs.length > 0 && (
        <section id="faq" className="section-space-sm bg-[#fffdf9]">
          <div className="site-shell">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
              <div className="max-w-xl">
                <span className="editorial-rule">FAQ</span>
                <h2 className="mt-6 font-[family-name:var(--font-heading-family)] text-[2.8rem] font-semibold leading-[0.98] text-[#23150f] sm:text-[3.3rem]">
                  Common questions, answered honestly.
                </h2>
              </div>

              <div className="sand-panel overflow-hidden">
                {faqs.map((faq, index) => (
                  <details key={faq.question} className={`group px-6 ${index !== 0 ? "border-t border-[#e4d4c5]" : ""}`}>
                    <summary className="flex cursor-pointer items-center justify-between py-5 text-[1.05rem] font-semibold text-[#23150f] [&::-webkit-details-marker]:hidden">
                      <span>{faq.question}</span>
                      <svg
                        className="size-4 shrink-0 text-[#65716f] transition-transform group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </summary>
                    <div className="pb-5 text-[1rem] leading-8 text-[#46525b]">{faq.answer}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer / author bio */}
      <section className="section-space-sm bg-[#18222c]">
        <div className="site-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="max-w-xl">
              <span className="editorial-rule text-[#b8c7b2] before:bg-[#8ea087]">Behind this guide</span>
              <h2 className="mt-6 font-[family-name:var(--font-heading-family)] text-[2.6rem] font-semibold leading-[0.98] text-[#f5faf7] sm:text-[3rem]">
                If every affiliate link vanished, the ranking should still hold up.
              </h2>
              <p className="mt-5 text-[1.04rem] leading-8 text-[#c6d2cd]">
                That is the test. You should be able to use this page, pick the right machine, and leave without clicking a single button if you want to.
              </p>
              <ul className="mt-7 space-y-3">
                <li>
                  <Link href="/how-we-review" className="text-[1rem] font-semibold text-[#cbd8c5] hover:text-white">
                    Review policy
                  </Link>
                </li>
                <li>
                  <Link href={`/about#${author.slug}`} className="text-[1rem] font-semibold text-[#cbd8c5] hover:text-white">
                    About {author.name}
                  </Link>
                </li>
                <li>
                  <Link href="/disclosure" className="text-[1rem] font-semibold text-[#cbd8c5] hover:text-white">
                    Affiliate disclosure
                  </Link>
                </li>
                {relatedLinks?.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[1rem] font-semibold text-[#cbd8c5] hover:text-white">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sand-panel bg-[#fff8ef] p-6 sm:p-8">
              <AuthorBioCard author={author} />
              {lastUpdatedNote && (
                <p className="mt-8 text-[0.94rem] leading-7 text-[#6d5749]">{lastUpdatedNote}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

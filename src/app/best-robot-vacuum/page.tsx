import type { Metadata } from "next";

import { Byline } from "@/components/template-b/Byline";
import { ComparisonTable } from "@/components/template-b/ComparisonTable";
import { Disclosure } from "@/components/template-b/Disclosure";
import { FAQ } from "@/components/template-b/FAQ";
import { Footer } from "@/components/template-b/Footer";
import { FrictionGlyph } from "@/components/template-b/FrictionGlyph";
import { Header } from "@/components/template-b/Header";
import { MethodBox } from "@/components/template-b/MethodBox";
import { MoneyHero } from "@/components/template-b/MoneyHero";
import { MoneyPageLayout } from "@/components/template-b/MoneyPageLayout";
import { ProductBlock } from "@/components/template-b/ProductBlock";
import { RelatedGuides } from "@/components/template-b/RelatedGuides";
import { TopPicks } from "@/components/template-b/TopPicks";
import { UpdateLog } from "@/components/template-b/UpdateLog";
import { siteConfig } from "@/config/site";
import { bestRobotVacuumGuide } from "@/data/content/best-robot-vacuum";
import { products, type FrictionScoreAxes } from "@/data/products";
import { editor } from "@/data/publisher";
import { generatePageMetadata } from "@/lib/metadata";
import {
  type ProductAdapterContext,
  buildTemplateBData,
} from "@/lib/product-to-template-b";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  JsonLd,
  productSchema,
} from "@/lib/schema";

const content = bestRobotVacuumGuide;

export const metadata: Metadata = generatePageMetadata({
  title: content.title,
  description: content.description,
  slug: content.slug,
  publishedTime: content.publishedDate,
  modifiedTime: content.modifiedDate,
  authorName: editor.name,
});

const NAV_ITEMS = [
  { id: "robot-vacuums", label: "Robot Vacuums", href: "/best-robot-vacuum" },
  { id: "how-we-review", label: "How We Review", href: "/how-we-review" },
  { id: "about", label: "About", href: "/about" },
];

export default function BestRobotVacuumPage() {
  const orderedProducts = content.productOrder
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const contextById: Record<string, Omit<ProductAdapterContext, "rank">> = {};
  for (const id of content.productOrder) {
    contextById[id] = {
      badge: content.badges[id]?.toUpperCase(),
      jumpHref: `#${id}`,
      ctaLabel: "Check Amazon price →",
    };
  }

  const { rows, picks, blocks } = buildTemplateBData(
    orderedProducts,
    contextById,
  );

  const jsonLd = [
    breadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Robot Vacuums", url: `${siteConfig.url}/best-robot-vacuum` },
    ]),
    articleSchema({
      title: content.title,
      description: content.description,
      url: `${siteConfig.url}/${content.slug}`,
      datePublished: content.publishedDate,
      dateModified: content.modifiedDate,
      imageUrl: orderedProducts[0]?.images[0]?.url,
    }),
    faqSchema(content.faqs),
    ...orderedProducts.map((p) => productSchema(p)),
  ];

  const comparisonColumns = [
    {
      label: "Friction",
      render: (row: (typeof rows)[number]) => {
        const product = orderedProducts.find((p) => p.id === row.id);
        if (!product?.frictionScore) return null;
        return (
          <FrictionGlyph
            axes={product.frictionScore as FrictionScoreAxes}
            scale="inline"
          />
        );
      },
    },
    ...content.comparisonColumns.map((col) => ({
      label: col.label,
      render: (row: (typeof rows)[number]) => {
        const comparisonRow = content.comparisonTable.find(
          (r) => r.slug === row.id,
        );
        const value = comparisonRow?.[col.key as keyof typeof comparisonRow];
        return value ? <span>{String(value)}</span> : null;
      },
    })),
  ];

  const header = (
    <Header
      currentNavId="robot-vacuums"
      navItems={NAV_ITEMS}
      metaLeft={[
        { text: "PRICES RECHECKED DAILY", dot: true },
        { text: "INDEPENDENT · AD-FREE" },
      ]}
      metaRight={[{ text: `UPDATED ${formatShortDate(content.modifiedDate)}` }]}
      headerChip="UPDATED DAILY"
    />
  );

  const footer = <Footer />;

  const hero = (
    <MoneyHero
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Robot Vacuums", current: true },
      ]}
      pills={[
        { label: "6 PICKS", variant: "steam" },
        { label: "APR 2026 REFRESH", variant: "amber" },
        { label: "$189 – $1,614" },
      ]}
      headline={[
        "The best robot vacuums in 2026",
        "for real, lived-in homes",
      ]}
      sub="We cut a wide field of 2026 robots down to six picks that actually remove recurring floor work — with honest tradeoffs on dock upkeep, pet hair, and app reliability."
      tldr={{
        content: (
          <>
            <strong>Pick the Dreame L50 Ultra</strong> for the best all-around
            balance of real dock automation and premium-value pricing.{" "}
            <strong>Pick the TP-Link Tapo RV30 Max Plus</strong> if budget is
            the priority. <strong>Pick the Roborock Saros 10R</strong> for
            low-clearance furniture or cluttered floor plans.
          </>
        ),
        meta: "EDITOR'S SHORT ANSWER · SKIM-READY",
      }}
    >
      <Disclosure style={{ marginTop: 32, marginBottom: 28 }} />
      <TopPicks picks={picks.slice(0, 3)} />
    </MoneyHero>
  );

  const byline = (
    <Byline
      author={{
        name: editor.name,
        role: editor.jobTitle,
        meta: "INDEPENDENT · OWNER-REPORT FIRST",
        initials: initials(editor.name),
      }}
      publishedDate={content.publishedDate}
      modifiedDate={content.modifiedDate}
    />
  );

  const toc = {
    items: [
      { href: "#comparison", label: "1 · At-a-glance comparison" },
      { href: "#method", label: "2 · How we chose these six" },
      { href: "#reviews", label: "3 · Full reviews" },
      { href: "#buying-guide", label: "4 · Buying guide" },
      { href: "#faq", label: "5 · FAQ" },
    ],
  };

  const comparisonTable = (
    <ComparisonTable
      eyebrow="At a glance"
      heading="All six robot vacuums side-by-side"
      metaLines={[
        `PRICES · ${formatShortDate(content.modifiedDate).toUpperCase()}`,
        "ALL IN STOCK",
      ]}
      columns={comparisonColumns}
      rows={rows}
      ctaLabel="Check price ↗"
      anchorId="comparison"
    />
  );

  const methodBox = (
    <MethodBox
      eyebrow="How we chose these six"
      title="Automation that actually removes work, not feature theater."
      body="We weight dock upkeep, obstacle handling, mixed-floor performance, app reliability, and hair tangles the way real owners feel them — not the way spec sheets present them. Reviewer scores only move when observed ownership friction moves."
      stats={[
        { value: "24+", label: "Models evaluated" },
        { value: "6", label: "Honest picks shipped" },
        { value: "5", label: "Friction-score axes" },
        { value: "100%", label: "Prices verified" },
      ]}
    />
  );

  const productBlocks = {
    eyebrow: "Full reviews",
    heading: "Our 6 picks, reviewed in detail",
    anchorId: "reviews",
    children: (
      <div style={{ display: "grid", gap: 32 }}>
        {blocks.map((block, i) => {
          const review = content.reviews[block.id];
          return (
            <ProductBlock
              key={block.id}
              product={{
                ...block,
                tcrScore: review?.reviewerScore?.toFixed(1),
                description: review?.body ?? block.description,
                pros: review?.pros ?? block.pros,
                cons: review?.cons ?? block.cons,
                specs: buildCuratedSpecs(
                  content.curatedSpecs[block.id],
                  block.specs,
                ),
                rank: i + 1,
                badge: content.badges[block.id] ?? block.badge,
              }}
            />
          );
        })}
      </div>
    ),
  };

  const buyingGuide = {
    eyebrow: "Buying guide",
    heading: content.buyingGuide.title,
    anchorId: "buying-guide",
    children: (
      <>
        {content.buyingGuide.sections.map((section) => (
          <section key={section.heading} style={{ marginBottom: 28 }}>
            <h3>{section.heading}</h3>
            <p>{section.body}</p>
          </section>
        ))}
      </>
    ),
  };

  const faq = {
    eyebrow: "FAQ",
    heading: "Robot vacuum questions buyers actually ask",
    anchorId: "faq",
    children: (
      <FAQ
        items={content.faqs.map((q) => ({
          question: q.question,
          answer: q.answer,
        }))}
      />
    ),
  };

  const updateLog = (
    <UpdateLog
      entries={[
        {
          date: "2026-04-18",
          change:
            "Guide refreshed to the template-b layout. Friction Score glyphs added per product. Prices and links reverified.",
          tag: "Rebuild",
        },
        {
          date: content.publishedDate,
          change: "Initial publication with six picks and full reviews.",
          tag: "Publish",
        },
      ]}
      footnote={content.lastUpdatedNote}
    />
  );

  const relatedGuides = {
    eyebrow: "Keep reading",
    heading: "More from TheCleaningReport",
    children: (
      <RelatedGuides
        items={[
          {
            kicker: "Methodology",
            title: "How we score cleaning tools",
            meta: "READ NEXT · 4 MIN",
            href: "/how-we-review",
          },
          {
            kicker: "Transparency",
            title: "AI and editorial disclosure",
            meta: "TRUST · 3 MIN",
            href: "/ai-disclosure",
          },
          {
            kicker: "Disclosure",
            title: "Our affiliate policy",
            meta: "REQUIRED READING · 2 MIN",
            href: "/disclosure",
          },
        ]}
      />
    ),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <MoneyPageLayout
        header={header}
        footer={footer}
        hero={hero}
        byline={byline}
        toc={toc}
        comparisonTable={comparisonTable}
        methodBox={methodBox}
        productBlocks={productBlocks}
        buyingGuide={buyingGuide}
        faq={faq}
        updateLog={updateLog}
        relatedGuides={relatedGuides}
      />
    </>
  );
}

function initials(name: string): string {
  const parts = name.replace(/,.*$/, "").trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts[parts.length - 1]?.[0] ?? "";
  return `${first}${last}`.toUpperCase();
}

function formatShortDate(iso: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return iso;
  const [, , month, day] = match;
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${months[Number(month) - 1]} ${Number(day)}`;
}

function buildCuratedSpecs(
  curated: Record<string, string> | undefined,
  fallback: { label: string; value: string }[],
): { label: string; value: string }[] {
  if (curated && Object.keys(curated).length > 0) {
    return Object.entries(curated).map(([label, value]) => ({ label, value }));
  }
  return fallback;
}

import type { Metadata } from "next";

import { HubPage } from "@/components/pages/hub-page";
import { bestMopGuide } from "@/data/content/best-mop";
import { authors } from "@/data/authors";
import { products } from "@/data/products";
import { generatePageMetadata } from "@/lib/metadata";

const guide = bestMopGuide;

export const metadata: Metadata = generatePageMetadata({
  title: guide.title,
  description: guide.description,
  slug: guide.slug,
  type: "article",
  publishedTime: guide.publishedDate,
  modifiedTime: guide.modifiedDate,
});

export default function BestMopPage() {
  const author = authors.find((a) => a.slug === "everyday-cleaning-desk");
  if (!author) {
    throw new Error("Everyday Cleaning Desk author not found in authors.ts");
  }

  const orderedProducts = guide.productOrder
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <HubPage
      title={guide.title}
      description={guide.description}
      slug={guide.slug}
      publishedDate={guide.publishedDate}
      modifiedDate={guide.modifiedDate}
      quickAnswer={guide.quickAnswer}
      author={author}
      productOrder={guide.productOrder}
      orderedProducts={orderedProducts}
      displayNames={guide.displayNames}
      badges={guide.badges}
      curatedSpecs={guide.curatedSpecs}
      comparisonTable={guide.comparisonTable}
      comparisonColumns={guide.comparisonColumns}
      reviews={guide.reviews}
      methodology={guide.methodology}
      failureModes={guide.failureModes}
      divergence={guide.divergence}
      whenNotToBuy={guide.whenNotToBuy}
      buyingGuide={guide.buyingGuide}
      faqs={guide.faqs}
      sourcesFooter={guide.sourcesFooter}
      relatedLinks={guide.relatedLinks}
      breadcrumbLabel={guide.breadcrumbLabel}
      lastUpdatedNote={guide.lastUpdatedNote}
    />
  );
}

import type { Metadata } from "next";

import { HubPage } from "@/components/pages/hub-page";
import { authors } from "@/data/authors";
import { bestRobotVacuumGuide } from "@/data/content/best-robot-vacuum";
import { products } from "@/data/products";
import { generatePageMetadata } from "@/lib/metadata";

const content = bestRobotVacuumGuide;
const author = authors.find((desk) => desk.slug === content.author)!;

export const metadata: Metadata = generatePageMetadata({
  title: content.title,
  description: content.description,
  slug: content.slug,
  publishedTime: content.publishedDate,
  modifiedTime: content.modifiedDate,
  authorName: author.name,
});

export default function BestRobotVacuumPage() {
  const orderedProducts = content.productOrder
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean) as typeof products;

  return (
    <HubPage
      title={content.title}
      description={content.description}
      slug={content.slug}
      publishedDate={content.publishedDate}
      modifiedDate={content.modifiedDate}
      quickAnswer={content.quickAnswer}
      author={author}
      productOrder={content.productOrder}
      orderedProducts={orderedProducts}
      displayNames={content.displayNames}
      badges={content.badges}
      curatedSpecs={content.curatedSpecs}
      comparisonTable={content.comparisonTable}
      comparisonColumns={content.comparisonColumns}
      reviews={content.reviews}
      buyingGuide={content.buyingGuide}
      faqs={content.faqs}
      breadcrumbLabel={content.breadcrumbLabel}
      lastUpdatedNote={content.lastUpdatedNote}
    />
  );
}

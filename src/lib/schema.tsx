/**
 * JSON-LD schema generators for scaffolded affiliate sites.
 *
 * Generates structured data for Google rich results.
 * Schema types: Product, Review, FAQPage, BreadcrumbList, Article, WebSite
 *
 * RULE: Only generate schema for data that ACTUALLY EXISTS on the page.
 * Never fabricate AggregateRating or Review schema without real content.
 */

import { siteConfig } from "@/config/site";
import type { Product } from "@/data/products";

// ─── WebSite Schema (homepage only) ─────────────────────────────

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

// ─── BreadcrumbList Schema ──────────────────────────────────────

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── Article Schema (for hub/spoke/guide pages) ─────────────────

export function articleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName,
  authorUrl,
  imageUrl,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  authorUrl: string;
  imageUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    ...(imageUrl ? { image: imageUrl } : {}),
  };
}

// ─── Product Schema (for individual product mentions) ───────────
// Only use when the product has REAL data shown on the page.

export function webPageSchema({
  title,
  description,
  url,
  type = "WebPage",
}: {
  title: string;
  description: string;
  url: string;
  type?: "WebPage" | "AboutPage" | "CollectionPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function productSchema(product: Product) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    description: product.verdict || `${product.brand} ${product.model}`,
    ...(product.images.length > 0 ? { image: product.images[0].url } : {}),
  };

  // Only add offers if we have a real price
  if (product.price !== null) {
    schema.offers = {
      "@type": "Offer",
      url: product.affiliateLinks[0]?.url || "",
      priceCurrency: product.priceCurrency,
      price: product.price,
      availability:
        product.status === "active"
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: "Amazon",
      },
    };
  }

  return schema;
}

// ─── FAQ Schema ─────────────────────────────────────────────────

export function faqSchema(
  questions: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

// ─── JSON-LD Script Component ───────────────────────────────────

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

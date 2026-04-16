/**
 * Dynamic metadata helpers for scaffolded affiliate sites.
 *
 * Generates page-specific metadata for SEO.
 * Every page needs: unique title (50-60 chars), meta description (150-160 chars), canonical URL.
 */

import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface PageMetadataOptions {
  title: string;
  description: string;
  slug: string;
  type?: "article" | "website";
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
  imageUrl?: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  slug,
  type = "article",
  publishedTime,
  modifiedTime,
  authorName,
  imageUrl,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = `${siteConfig.url}/${slug}`;
  const ogImage = imageUrl || siteConfig.ogImage;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: type === "article" ? "article" : "website",
      url,
      title,
      description,
      siteName: siteConfig.name,
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      ...(authorName ? { authors: [authorName] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}

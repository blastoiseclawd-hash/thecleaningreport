import { Metadata } from "next";
import { authors } from "@/data/authors";
import { howToCleanGroutContent } from "@/data/content/how-to-clean-grout";
import { generatePageMetadata } from "@/lib/metadata";
import { SupportPage } from "@/components/pages/support-page";

const author = authors.find((a) => a.slug === howToCleanGroutContent.authorSlug)!;

export const metadata: Metadata = generatePageMetadata({
  title: howToCleanGroutContent.title,
  description: howToCleanGroutContent.description,
  slug: howToCleanGroutContent.slug,
});

export default function Page() {
  return (
    <SupportPage
      title={howToCleanGroutContent.title}
      description={howToCleanGroutContent.description}
      slug={howToCleanGroutContent.slug}
      publishedDate={howToCleanGroutContent.publishedDate}
      modifiedDate={howToCleanGroutContent.modifiedDate}
      intro={howToCleanGroutContent.intro}
      heroImage={howToCleanGroutContent.heroImage}
      editorialLabel={howToCleanGroutContent.editorialLabel}
      author={author}
      sections={howToCleanGroutContent.sections}
      faqs={howToCleanGroutContent.faqs}
      relatedLinks={howToCleanGroutContent.relatedLinks}
      relatedLinksHeading={howToCleanGroutContent.relatedLinksHeading}
      relatedLinksBlurb={howToCleanGroutContent.relatedLinksBlurb}
      breadcrumbLabel={howToCleanGroutContent.breadcrumbLabel}
      estimatedTime={howToCleanGroutContent.estimatedTime}
      sourcesFooter={howToCleanGroutContent.sourcesFooter}
    />
  );
}

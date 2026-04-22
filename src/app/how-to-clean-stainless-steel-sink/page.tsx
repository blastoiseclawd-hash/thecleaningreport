import { Metadata } from "next";
import { authors } from "@/data/authors";
import { howToCleanStainlessSteelSinkContent } from "@/data/content/how-to-clean-stainless-steel-sink";
import { generatePageMetadata } from "@/lib/metadata";
import { SupportPage } from "@/components/pages/support-page";

const author = authors.find((a) => a.slug === howToCleanStainlessSteelSinkContent.authorSlug)!;

export const metadata: Metadata = generatePageMetadata({
  title: howToCleanStainlessSteelSinkContent.title,
  description: howToCleanStainlessSteelSinkContent.description,
  slug: howToCleanStainlessSteelSinkContent.slug,
});

export default function Page() {
  return (
    <SupportPage
      title={howToCleanStainlessSteelSinkContent.title}
      description={howToCleanStainlessSteelSinkContent.description}
      slug={howToCleanStainlessSteelSinkContent.slug}
      publishedDate={howToCleanStainlessSteelSinkContent.publishedDate}
      modifiedDate={howToCleanStainlessSteelSinkContent.modifiedDate}
      intro={howToCleanStainlessSteelSinkContent.intro}
      heroImage={howToCleanStainlessSteelSinkContent.heroImage}
      editorialLabel={howToCleanStainlessSteelSinkContent.editorialLabel}
      author={author}
      sections={howToCleanStainlessSteelSinkContent.sections}
      faqs={howToCleanStainlessSteelSinkContent.faqs}
      relatedLinks={howToCleanStainlessSteelSinkContent.relatedLinks}
      relatedLinksHeading={howToCleanStainlessSteelSinkContent.relatedLinksHeading}
      relatedLinksBlurb={howToCleanStainlessSteelSinkContent.relatedLinksBlurb}
      breadcrumbLabel={howToCleanStainlessSteelSinkContent.breadcrumbLabel}
      estimatedTime={howToCleanStainlessSteelSinkContent.estimatedTime}
      sourcesFooter={howToCleanStainlessSteelSinkContent.sourcesFooter}
    />
  );
}

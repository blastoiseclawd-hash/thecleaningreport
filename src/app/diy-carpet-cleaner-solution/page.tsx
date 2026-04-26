import { Metadata } from "next";
import { authors } from "@/data/authors";
import { diyCarpetCleanerSolutionContent } from "@/data/content/diy-carpet-cleaner-solution";
import { generatePageMetadata } from "@/lib/metadata";
import { SupportPage } from "@/components/pages/support-page";

const author = authors.find((a) => a.slug === diyCarpetCleanerSolutionContent.authorSlug)!;

export const metadata: Metadata = generatePageMetadata({
  title: diyCarpetCleanerSolutionContent.title,
  description: diyCarpetCleanerSolutionContent.description,
  slug: diyCarpetCleanerSolutionContent.slug,
});

export default function Page() {
  return (
    <SupportPage
      title={diyCarpetCleanerSolutionContent.title}
      description={diyCarpetCleanerSolutionContent.description}
      slug={diyCarpetCleanerSolutionContent.slug}
      publishedDate={diyCarpetCleanerSolutionContent.publishedDate}
      modifiedDate={diyCarpetCleanerSolutionContent.modifiedDate}
      intro={diyCarpetCleanerSolutionContent.intro}
      heroImage={diyCarpetCleanerSolutionContent.heroImage}
      editorialLabel={diyCarpetCleanerSolutionContent.editorialLabel}
      author={author}
      sections={diyCarpetCleanerSolutionContent.sections}
      faqs={diyCarpetCleanerSolutionContent.faqs}
      relatedLinks={diyCarpetCleanerSolutionContent.relatedLinks}
      breadcrumbLabel={diyCarpetCleanerSolutionContent.breadcrumbLabel}
      estimatedTime={diyCarpetCleanerSolutionContent.estimatedTime}
      sourcesFooter={diyCarpetCleanerSolutionContent.sourcesFooter}
      evidenceSummary={diyCarpetCleanerSolutionContent.evidenceSummary}
    />
  );
}

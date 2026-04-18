import { pageTargets } from "@/data/keyword-map";
import { editor, publisher } from "@/data/publisher";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export function GET() {
  const hubs = pageTargets.filter((p) => p.type === "hub");
  const spokes = pageTargets.filter((p) => p.type === "spoke" || p.type === "review");
  const guides = pageTargets.filter((p) => p.type === "guide");

  const lines: string[] = [];
  lines.push(`# ${siteConfig.name}`);
  lines.push("");
  lines.push(`> ${siteConfig.description}`);
  lines.push("");
  lines.push(`Published by ${publisher.name}. Edited by ${editor.name}.`);
  lines.push(`Editor identity: ${editor.sameAs.join(", ")}`);
  lines.push("");
  lines.push("## About");
  lines.push(`- [About](${siteConfig.url}/about): Who we are and how we review`);
  lines.push(`- [AI & Editorial Transparency](${siteConfig.url}/ai-disclosure): Our AI-assisted drafting disclosure`);
  lines.push(`- [Affiliate Disclosure](${siteConfig.url}/disclosure): FTC affiliate disclosure`);
  lines.push("");

  if (hubs.length > 0) {
    lines.push("## Buying guide hubs");
    for (const hub of hubs) {
      lines.push(`- [${hub.title}](${siteConfig.url}/${hub.slug}): Primary keyword "${hub.primaryKeyword}".`);
    }
    lines.push("");
  }

  if (spokes.length > 0) {
    lines.push("## Category guides");
    for (const spoke of spokes) {
      lines.push(`- [${spoke.title}](${siteConfig.url}/${spoke.slug}): Primary keyword "${spoke.primaryKeyword}".`);
    }
    lines.push("");
  }

  if (guides.length > 0) {
    lines.push("## How-to and reference");
    for (const guide of guides) {
      lines.push(`- [${guide.title}](${siteConfig.url}/${guide.slug}): Primary keyword "${guide.primaryKeyword}".`);
    }
    lines.push("");
  }

  lines.push("## Editorial policy");
  lines.push("- Recommendations are customer-first; affiliate commissions are a tiebreaker, never the driver.");
  lines.push("- No fabricated first-party testing language. Product analysis draws from owner-report synthesis, manufacturer spec sheets, and named expert reviews.");
  lines.push("- Every page carries FTC affiliate disclosure and a named-editor byline.");
  lines.push("- AI drafting is assisted and human-edited. See the AI & Editorial Transparency page.");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

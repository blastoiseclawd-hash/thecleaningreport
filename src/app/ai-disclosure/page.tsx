import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `AI Usage Disclosure — ${siteConfig.name}`,
  description: `How ${siteConfig.name} uses AI in research, drafting, and image generation.`,
};

export default function AiDisclosurePage() {
  return (
    <main className="prose prose-lg mx-auto max-w-3xl px-4 py-16">
      <h1>AI Usage Disclosure</h1>
      <p>
        {siteConfig.name} uses AI tools to accelerate research synthesis and
        drafting, always under human editorial review. We do not publish AI
        output that has not been fact-checked against primary sources.
      </p>
      <h2>Where AI assists our process</h2>
      <ul>
        <li>Synthesizing retailer reviews, community threads, and expert coverage into structured buying guides.</li>
        <li>Drafting comparison tables, product summaries, and FAQ sections that a human editor then reviews and revises.</li>
        <li>Generating supporting imagery (diagrams, illustrations) labeled as such in alt text or captions.</li>
      </ul>
      <h2>What AI does NOT do on this site</h2>
      <ul>
        <li>Make final recommendations. A human editor signs off on every guide.</li>
        <li>Fabricate first-party testing, measurements, or hands-on observations.</li>
        <li>Replace credentialed review on YMYL topics.</li>
      </ul>
      <h2>Editorial accountability</h2>
      <p>
        All content is published under the named editor on our{" "}
        <a href="/about">About page</a>. Corrections are welcome — email us
        and we will respond with action or explanation within 7 days.
      </p>
    </main>
  );
}

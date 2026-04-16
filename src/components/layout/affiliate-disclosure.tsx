import { siteConfig } from "@/config/site";

export function AffiliateDisclosure() {
  return (
    <div className="rounded-lg border border-[#d8d6cc] bg-[#f6f2ea] px-4 py-3 text-sm text-[#30414b]">
      <p>{siteConfig.ftcDisclosure}</p>
    </div>
  );
}

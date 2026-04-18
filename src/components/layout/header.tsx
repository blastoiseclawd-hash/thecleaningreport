"use client";

import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d8d4cc] bg-[rgba(247,244,238,0.94)] backdrop-blur-md">
      <div className="site-shell">
        <div className="flex flex-col gap-4 py-4 sm:py-5">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="min-w-0">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-[#d8d4cc] bg-[#fffaf2] p-1">
                  <Image
                    src={siteConfig.brandAssets.icon}
                    alt={`${siteConfig.name} icon`}
                    fill
                    className="object-contain p-1"
                    sizes="48px"
                    priority
                  />
                </div>
                <div className="min-w-0">
                  <Image
                    src={siteConfig.brandAssets.wordmark}
                    alt={siteConfig.name}
                    width={420}
                    height={72}
                    className="h-auto max-w-[16rem] sm:max-w-[19rem]"
                    priority
                  />
                  <p className="mt-1 max-w-[28rem] text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#667361] sm:text-[0.78rem]">
                    {siteConfig.tagline}
                  </p>
                </div>
              </div>
            </Link>

            <nav className="flex flex-wrap gap-5">
              {siteConfig.nav.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[0.98rem] font-medium text-[#4c5760] hover:text-[#182028]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 border-t border-[#e0d9cf] pt-3">
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#6e7a72]">
              Launch guides
            </span>
            {siteConfig.launchGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-full border border-[#d3d8cf] bg-[#fffefb] px-3 py-1.5 text-[0.88rem] font-medium text-[#41505a] hover:border-[#9aaa99] hover:text-[#182028]"
              >
                {guide.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

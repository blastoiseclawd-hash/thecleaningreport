import Link from "next/link";

import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d8d4cc] bg-[rgba(247,244,238,0.94)] backdrop-blur-md">
      <div className="site-shell">
        <div className="flex flex-col gap-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:py-5">
          <Link href="/" className="min-w-0">
            <div>
              <p className="text-[1.35rem] font-bold leading-tight text-[#182028] sm:text-[1.5rem]">
                {siteConfig.name}
              </p>
              <p className="mt-1 max-w-[28rem] text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#667361] sm:text-[0.78rem]">
                {siteConfig.tagline}
              </p>
            </div>
          </Link>

          {siteConfig.nav.main.length > 0 && (
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
          )}
        </div>
      </div>
    </header>
  );
}

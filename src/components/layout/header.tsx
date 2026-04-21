"use client";

import Link from "next/link";
import { useState } from "react";

import { siteConfig } from "@/config/site";

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

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
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {siteConfig.nav.main.map((item) => {
                const hasChildren = Boolean(item.children && item.children.length > 0);
                const isOpen = openMenu === item.label;

                if (!hasChildren && item.href) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-[0.98rem] font-medium text-[#4c5760] hover:text-[#182028]"
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(item.label)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onClick={() => setOpenMenu(isOpen ? null : item.label)}
                      className="inline-flex items-center gap-1 text-[0.98rem] font-medium text-[#4c5760] hover:text-[#182028]"
                    >
                      {item.label}
                      <span className="text-[0.7rem] leading-none" aria-hidden="true">
                        ▾
                      </span>
                    </button>
                    {isOpen && item.children && (
                      <div className="absolute left-0 top-full z-10 mt-2 min-w-[15rem] rounded-md border border-[#d8d4cc] bg-[#f7f4ee] py-2 shadow-lg">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-[0.95rem] text-[#4c5760] hover:bg-[#ece8df] hover:text-[#182028]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

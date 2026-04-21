"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { siteConfig } from "@/config/site";

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimerRef.current = setTimeout(() => setOpenMenu(null), 120);
  };

  const openNow = (label: string) => {
    cancelClose();
    setOpenMenu(label);
  };

  useEffect(() => {
    if (!openMenu) return;
    const handleDocClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("mousedown", handleDocClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleDocClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [openMenu]);

  useEffect(() => () => cancelClose(), []);

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
            <nav
              ref={navRef}
              className="flex flex-wrap items-center gap-x-6 gap-y-2"
            >
              {siteConfig.nav.main.map((item, index) => {
                const hasChildren = Boolean(item.children && item.children.length > 0);
                const isOpen = openMenu === item.label;
                const alignRight = index >= Math.ceil(siteConfig.nav.main.length / 2);

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
                    onMouseEnter={() => openNow(item.label)}
                    onMouseLeave={scheduleClose}
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
                      <div
                        className={`absolute top-full z-[100] ${alignRight ? "right-0" : "left-0"}`}
                        onMouseEnter={cancelClose}
                        onMouseLeave={scheduleClose}
                      >
                        <div className="mt-2 min-w-[15rem] rounded-md border-2 border-[#23150f] bg-white py-2 shadow-[0_20px_50px_rgba(16,32,39,0.35)]">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpenMenu(null)}
                              className="block px-4 py-2 text-[0.95rem] font-medium text-[#23150f] hover:bg-[#2D6B73] hover:text-white"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
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

import Link from "next/link";

import { editor, publisher } from "@/data/publisher";
import { siteConfig } from "@/config/site";

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  heading: string;
  links: FooterLink[];
};

export interface FooterProps {
  /** Optional override column stack. Default: Categories + Guides + About pulled from siteConfig. */
  columns?: FooterColumn[];
  /** Override the brand blurb under the wordmark. */
  blurb?: string;
  /** Override brand display name in the footer header column. */
  brandName?: {
    leading: string;
    italic: string;
  };
  /** Single-letter mark in the brand tile. */
  brandMark?: string;
  /** Override the legal line. Defaults to FTC + operating-entity boilerplate. */
  legalLine?: string;
}

function defaultColumns(): FooterColumn[] {
  const categories: FooterColumn = {
    heading: "Categories",
    links: siteConfig.categories.map((c) => ({
      label: c.name,
      href: `/${c.slug}`,
    })),
  };
  const about: FooterColumn = {
    heading: "About",
    links: siteConfig.nav.footer.map((item) => ({
      label: item.label,
      href: item.href,
    })),
  };
  return [categories, about];
}

function defaultLegalLine(): string {
  const year = new Date().getFullYear();
  return `© ${year} ${publisher.name} · Published by ${editor.displayName}, ${editor.credentials.join(", ")} · ${siteConfig.affiliatePrograms.amazon.disclaimer}`;
}

export function Footer({
  columns,
  blurb = siteConfig.tagline,
  brandName = { leading: "The Cleaning", italic: "Report" },
  brandMark = "C",
  legalLine = defaultLegalLine(),
}: FooterProps = {}) {
  const cols = columns ?? defaultColumns();
  return (
    <footer className="site-footer-tb">
      <div className="shell-wide">
        <div className="grid">
          <div>
            <div className="brand" style={{ marginBottom: 14 }}>
              <span
                className="mark"
                style={{ background: "var(--paper)", color: "var(--ink)" }}
              >
                {brandMark}
              </span>
              <span className="name" style={{ color: "var(--paper)" }}>
                {brandName.leading} <em>{brandName.italic}</em>
              </span>
            </div>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.7,
                color: "#9B9484",
                maxWidth: 340,
              }}
            >
              {blurb}
            </p>
            <div
              className="mono"
              style={{
                marginTop: 14,
                fontSize: 11,
                color: "#9B9484",
                letterSpacing: "0.05em",
              }}
            >
              EDITOR · {editor.displayName.toUpperCase()}, {editor.credentials.join(", ")}
            </div>
          </div>
          {cols.map((col) => (
            <div key={col.heading}>
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={`${col.heading}-${link.href}`}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="legal">{legalLine}</div>
      </div>
    </footer>
  );
}

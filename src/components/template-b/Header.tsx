import Link from "next/link";

export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export type MetaStripItem = {
  text: string;
  /** Show a steam-green pulse dot before the text. */
  dot?: boolean;
};

export interface HeaderProps {
  /** Identifier of the currently active page — marks the matching nav item. */
  currentNavId?: string;
  /** Site-wide nav items. No default — callers must pass what they want. */
  navItems: NavItem[];
  /** Text rows on the left side of the meta-strip, e.g. "PRICES UPDATED DAILY". */
  metaLeft?: MetaStripItem[];
  /** Text rows on the right side of the meta-strip, hidden on mobile per v2. */
  metaRight?: MetaStripItem[];
  /** Chip shown on the far right of the header itself, e.g. "UPDATED DAILY". */
  headerChip?: string;
  /** Brand display name. Italicized portion is in an <em>. */
  brandName?: {
    leading: string;
    italic: string;
  };
  /** Single-letter mark in the square brand tile. */
  brandMark?: string;
}

export function Header({
  currentNavId,
  navItems,
  metaLeft,
  metaRight,
  headerChip,
  brandName = { leading: "The Cleaning", italic: "Report" },
  brandMark = "C",
}: HeaderProps) {
  return (
    <>
      {(metaLeft || metaRight) && (
        <div className="meta-strip">
          <div className="shell-wide">
            {metaLeft && (
              <div className="left">
                {metaLeft.map((item, i) => (
                  <span key={i}>
                    {item.dot && <span className="dot" />}
                    {item.text}
                    {i < metaLeft.length - 1 && <span className="sep"> | </span>}
                  </span>
                ))}
              </div>
            )}
            {metaRight && (
              <div className="right">
                {metaRight.map((item, i) => (
                  <span key={i}>{item.text}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      <header className="site-header">
        <div className="shell-wide inner">
          <Link href="/" className="brand">
            <span className="mark">{brandMark}</span>
            <span className="name">
              {brandName.leading} <em>{brandName.italic}</em>
            </span>
          </Link>
          <nav className="nav-tb">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={currentNavId === item.id ? "active" : ""}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          {headerChip && (
            <div className="header-cta">
              <span className="updated">{headerChip}</span>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

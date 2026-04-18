import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

export interface DisclosureProps {
  /** Inline styles passthrough for placement context (e.g. margin). */
  style?: CSSProperties;
  /** Override the body copy. Default is the FTC-aligned affiliate line. */
  children?: ReactNode;
  /** Route to the methodology / how-we-review page. Default `/how-we-review`. */
  methodologyHref?: string;
  /** Link label for the methodology anchor. Default "Read our methodology". */
  methodologyLabel?: string;
}

export function Disclosure({
  style,
  children,
  methodologyHref = "/how-we-review",
  methodologyLabel = "Read our methodology",
}: DisclosureProps) {
  return (
    <div className="disclosure-tb" style={style}>
      <span aria-hidden="true">ⓘ</span>
      <span>
        {children ?? (
          <>
            <strong>AFFILIATE DISCLOSURE</strong> — We earn a commission when
            you buy through links on this page. It never affects our rankings.{" "}
            <Link
              href={methodologyHref}
              style={{ color: "var(--ink)", textDecoration: "underline" }}
            >
              {methodologyLabel}
            </Link>
            .
          </>
        )}
      </span>
    </div>
  );
}

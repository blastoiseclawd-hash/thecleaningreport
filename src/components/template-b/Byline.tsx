import type { ReactNode } from "react";

export interface BylineAuthor {
  /** Full display name — e.g. "Lee Serel, CPA". */
  name: string;
  /** Role line under the name — e.g. "Floor-Care Desk Editor". */
  role: string;
  /** Small meta line — e.g. "8 YRS FLOOR-CARE TESTING". */
  meta?: string;
  /** Two-letter initials rendered into the avatar tile. */
  initials: string;
}

export interface BylineFactChecker {
  /** Short display form — e.g. "D. PARKER". */
  name: string;
  /** Role line — e.g. "SR. EDITOR". */
  role: string;
}

export interface BylineProps {
  author: BylineAuthor;
  /** ISO date (YYYY-MM-DD). */
  publishedDate: string;
  /** ISO date (YYYY-MM-DD). Omit if same as publishedDate. */
  modifiedDate?: string;
  factChecker?: BylineFactChecker;
  /** Extra slot rendered after the stock columns — e.g. a "Tested X hours" block. */
  extra?: ReactNode;
}

export function Byline({
  author,
  publishedDate,
  modifiedDate,
  factChecker,
  extra,
}: BylineProps) {
  return (
    <div className="byline-tb">
      <div className="avatar" aria-hidden="true">
        {author.initials}
      </div>
      <div>
        <div className="name">
          By {author.name}
          {author.role ? `, ${author.role}` : ""}
        </div>
        {author.meta && (
          <div className="meta-i" style={{ color: "var(--ink-muted)", marginTop: 2 }}>
            {author.meta}
          </div>
        )}
      </div>
      <div className="sep" />
      <div>
        <div className="meta-i">
          PUBLISHED <time dateTime={publishedDate}>{formatIsoDate(publishedDate)}</time>
        </div>
        {modifiedDate && modifiedDate !== publishedDate && (
          <div className="meta-i" style={{ color: "var(--ink-muted)", marginTop: 2 }}>
            UPDATED <time dateTime={modifiedDate}>{formatIsoDate(modifiedDate)}</time>
          </div>
        )}
      </div>
      {factChecker && (
        <>
          <div className="sep" />
          <div>
            <div className="meta-i">FACT-CHECKED BY</div>
            <div className="meta-i" style={{ color: "var(--ink-muted)", marginTop: 2 }}>
              {factChecker.name}, {factChecker.role}
            </div>
          </div>
        </>
      )}
      {extra}
    </div>
  );
}

const MONTHS = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
];

function formatIsoDate(iso: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return iso;
  const [, year, month, day] = match;
  const idx = Number(month) - 1;
  if (idx < 0 || idx > 11) return iso;
  return `${MONTHS[idx]} ${Number(day)}, ${year}`;
}

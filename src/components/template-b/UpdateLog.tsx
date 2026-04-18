import type { ReactNode } from "react";

export type UpdateLogEntry = {
  /** ISO date (YYYY-MM-DD) for structured sitemap + schema consumption. */
  date: string;
  /** One-line description of what changed. Keep specific — "refreshed prices"
   *  is weaker than "Roborock Saros 10R dropped to $1,499; table updated". */
  change: ReactNode;
  /** Optional tag e.g. "Price", "Ranking", "Add", "Remove". */
  tag?: string;
};

export interface UpdateLogProps {
  entries: UpdateLogEntry[];
  /** Section headline. Defaults to "Update log". */
  heading?: string;
  /** Eyebrow above the heading. Defaults to "Freshness". */
  eyebrow?: string;
  /** Optional footnote under the list — e.g. "We re-check prices every 24 hours." */
  footnote?: ReactNode;
  /** Max entries shown inline before a "Show older" expansion. 0 = show all. */
  collapseAfter?: number;
}

export function UpdateLog({
  entries,
  heading = "Update log",
  eyebrow = "Freshness",
  footnote,
  collapseAfter = 0,
}: UpdateLogProps) {
  const shown =
    collapseAfter > 0 ? entries.slice(0, collapseAfter) : entries;

  return (
    <section
      className="update-log"
      style={{
        border: "1px solid var(--rule)",
        borderRadius: 6,
        background: "var(--bg)",
        padding: "22px 24px",
      }}
    >
      <div className="data-label" style={{ marginBottom: 6 }}>
        {eyebrow}
      </div>
      <h3
        style={{
          fontFamily: "var(--serif)",
          fontSize: 20,
          fontWeight: 600,
          letterSpacing: "-0.01em",
          marginTop: 0,
          marginBottom: 16,
        }}
      >
        {heading}
      </h3>
      <ol
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "grid",
          gap: 10,
        }}
      >
        {shown.map((entry, i) => (
          <li
            key={`${entry.date}-${i}`}
            style={{
              display: "grid",
              gridTemplateColumns: "110px auto 1fr",
              gap: 14,
              alignItems: "baseline",
              paddingBottom: 10,
              borderBottom:
                i < shown.length - 1 ? "1px solid var(--rule-soft)" : "none",
            }}
          >
            <time
              className="mono"
              dateTime={entry.date}
              style={{
                fontSize: 11.5,
                color: "var(--ink-subtle)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {formatIsoDate(entry.date)}
            </time>
            {entry.tag ? (
              <span className="pill" style={{ alignSelf: "center" }}>
                {entry.tag}
              </span>
            ) : (
              <span />
            )}
            <div
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                color: "var(--ink-2)",
              }}
            >
              {entry.change}
            </div>
          </li>
        ))}
      </ol>
      {collapseAfter > 0 && entries.length > collapseAfter && (
        <div
          className="mono"
          style={{
            marginTop: 12,
            fontSize: 11,
            color: "var(--ink-muted)",
            letterSpacing: "0.04em",
          }}
        >
          SHOWING {shown.length} OF {entries.length} ENTRIES
        </div>
      )}
      {footnote && (
        <p
          style={{
            marginTop: 16,
            marginBottom: 0,
            fontSize: 12.5,
            color: "var(--ink-muted)",
            lineHeight: 1.6,
          }}
        >
          {footnote}
        </p>
      )}
    </section>
  );
}

const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

function formatIsoDate(iso: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return iso;
  const [, year, month, day] = match;
  const monthIndex = Number(month) - 1;
  if (monthIndex < 0 || monthIndex > 11) return iso;
  return `${MONTHS[monthIndex]} ${Number(day)}, ${year}`;
}

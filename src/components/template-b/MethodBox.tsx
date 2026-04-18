import type { ReactNode } from "react";

export interface MethodStat {
  /** Large numeral display value, e.g. "38" or "2,400". Pre-formatted. */
  value: string;
  /** Small label under the number, e.g. "Models tested". */
  label: string;
}

export interface MethodBoxProps {
  /** Eyebrow above the headline. Default "How we test". */
  eyebrow?: string;
  /** Right-column headline. */
  title: string;
  /** Right-column body copy (paragraph). */
  body: ReactNode;
  /** 4-up stat grid. Keep to 4 for layout rhythm; drop 1 for 3-up. */
  stats: MethodStat[];
}

export function MethodBox({
  eyebrow = "How we test",
  title,
  body,
  stats,
}: MethodBoxProps) {
  return (
    <div className="method-box">
      <div>
        <div className="eyebrow-tb" style={{ marginBottom: 12 }}>
          {eyebrow}
        </div>
        <div className="title">{title}</div>
      </div>
      <div>
        <p
          style={{
            fontSize: 14.5,
            color: "var(--ink-2)",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {body}
        </p>
        <div className="method-stats">
          {stats.map((s, i) => (
            <div key={`${s.label}-${i}`}>
              <div className="n">{s.value}</div>
              <div className="l">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

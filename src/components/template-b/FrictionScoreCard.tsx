import type { FrictionScoreAxes } from "@/data/products";

import {
  DEFAULT_AXIS_LABELS,
  DEFAULT_AXIS_ORDER,
  FrictionGlyph,
  type FrictionAxisKey,
} from "./FrictionGlyph";

export interface FrictionScoreCardProps {
  axes: FrictionScoreAxes;
  /** Override the label shown above the glyph. */
  eyebrow?: string;
  /** Optional headline text. Defaults to the computed overall score + "/ 5 friction score". */
  heading?: string;
  /** Restrict / reorder which axes appear. Must match the same keys on `axes`. */
  axisOrder?: readonly FrictionAxisKey[];
  /** Per-axis label override — e.g. substitute "Dust" for "Clean" on a hardwood guide. */
  axisLabels?: Partial<Record<FrictionAxisKey, string>>;
  /** One-line caption under the scorecard explaining what the axes mean. */
  caption?: string;
}

const MAX_SCORE = 5;

export function FrictionScoreCard({
  axes,
  eyebrow = "Friction Score",
  heading,
  axisOrder = DEFAULT_AXIS_ORDER,
  axisLabels,
  caption = "Lower-friction picks score higher on each axis. 0 = constant babysitting, 5 = genuinely set-and-forget.",
}: FrictionScoreCardProps) {
  const shownAxes = axisOrder.filter((key) => key in axes);
  const overall = shownAxes.length
    ? shownAxes.reduce((sum, k) => sum + axes[k], 0) / shownAxes.length
    : 0;
  const resolvedHeading =
    heading ?? `${overall.toFixed(1)} / ${MAX_SCORE} overall`;

  return (
    <section
      className="friction-scorecard"
      style={{
        border: "1px solid var(--rule)",
        borderRadius: 6,
        padding: "18px 20px",
        background: "var(--bg-panel)",
      }}
    >
      <div className="data-label" style={{ marginBottom: 6 }}>
        {eyebrow}
      </div>
      <div
        style={{
          fontFamily: "var(--serif)",
          fontSize: 22,
          fontWeight: 600,
          letterSpacing: "-0.01em",
          marginBottom: 14,
        }}
      >
        {resolvedHeading}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: 20,
          alignItems: "center",
        }}
      >
        <FrictionGlyph axes={axes} axisOrder={axisOrder} scale="card" ariaHidden />
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "grid",
            gap: 6,
          }}
        >
          {shownAxes.map((key) => {
            const label = axisLabels?.[key] ?? DEFAULT_AXIS_LABELS[key];
            const score = axes[key];
            return (
              <li
                key={key}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px auto 1fr",
                  gap: 10,
                  alignItems: "center",
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  color: "var(--ink-2)",
                }}
              >
                <span
                  style={{
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--ink-subtle)",
                    fontSize: 11,
                  }}
                >
                  {label}
                </span>
                <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                  {score.toFixed(1)}
                </span>
                <span
                  style={{
                    color: "var(--ink-subtle)",
                    fontSize: 11,
                  }}
                >
                  / {MAX_SCORE}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      {caption && (
        <p
          style={{
            marginTop: 14,
            marginBottom: 0,
            fontSize: 12,
            lineHeight: 1.55,
            color: "var(--ink-muted)",
          }}
        >
          {caption}
        </p>
      )}
    </section>
  );
}

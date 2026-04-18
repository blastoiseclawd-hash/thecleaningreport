import type { FrictionScoreAxes } from "@/data/products";

export type FrictionAxisKey = keyof FrictionScoreAxes;

export const DEFAULT_AXIS_ORDER: readonly FrictionAxisKey[] = [
  "clean",
  "nav",
  "dock",
  "noise",
  "routine",
] as const;

export const DEFAULT_AXIS_LABELS: Record<FrictionAxisKey, string> = {
  clean: "Clean",
  nav: "Nav",
  dock: "Dock",
  noise: "Noise",
  routine: "Routine",
};

export interface FrictionGlyphProps {
  axes: FrictionScoreAxes;
  /** Which axes to show and in what order. Defaults to the TCR standard five. */
  axisOrder?: readonly FrictionAxisKey[];
  /** Pixel size of the rendered glyph. Aspect ratio is fixed at 3:1. */
  width?: number;
  /** Visual weight. "inline" fits comparison-table cells; "card" is for product
   *  blocks. The two differ only in bar width and spacing. */
  scale?: "inline" | "card";
  /** Decorative-only — the card wrapper carries the a11y summary. */
  ariaHidden?: boolean;
}

// 0–5 score maps to proportional fill height.
const MAX_SCORE = 5;

const SCALE_SPECS = {
  inline: { barWidth: 6, gap: 5, height: 28, innerPad: 2 },
  card: { barWidth: 10, gap: 8, height: 44, innerPad: 3 },
} as const;

export function FrictionGlyph({
  axes,
  axisOrder = DEFAULT_AXIS_ORDER,
  width,
  scale = "card",
  ariaHidden = false,
}: FrictionGlyphProps) {
  const spec = SCALE_SPECS[scale];
  const barCount = axisOrder.length;
  const contentWidth =
    barCount * spec.barWidth + (barCount - 1) * spec.gap;
  const viewBoxWidth = contentWidth + spec.innerPad * 2;
  const viewBoxHeight = spec.height + spec.innerPad * 2;
  const renderWidth = width ?? viewBoxWidth * 2;

  return (
    <svg
      role={ariaHidden ? undefined : "img"}
      aria-hidden={ariaHidden || undefined}
      aria-label={
        ariaHidden
          ? undefined
          : `Friction score: ${axisOrder
              .map(
                (k) =>
                  `${DEFAULT_AXIS_LABELS[k]} ${axes[k]} of ${MAX_SCORE}`,
              )
              .join(", ")}`
      }
      width={renderWidth}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      className="friction-glyph"
    >
      {axisOrder.map((key, i) => {
        const score = clampScore(axes[key]);
        const x = spec.innerPad + i * (spec.barWidth + spec.gap);
        const fillHeight = (spec.height * score) / MAX_SCORE;
        const fillY = spec.innerPad + (spec.height - fillHeight);
        return (
          <g key={key}>
            <title>{`${DEFAULT_AXIS_LABELS[key]}: ${score} / ${MAX_SCORE}`}</title>
            <rect
              x={x}
              y={spec.innerPad}
              width={spec.barWidth}
              height={spec.height}
              rx={1.5}
              fill="var(--rule-soft)"
            />
            <rect
              x={x}
              y={fillY}
              width={spec.barWidth}
              height={fillHeight}
              rx={1.5}
              fill="var(--amber)"
            />
          </g>
        );
      })}
    </svg>
  );
}

function clampScore(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(MAX_SCORE, value));
}

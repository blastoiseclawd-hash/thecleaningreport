export interface StarsProps {
  /** Rating value 0–5. Supports halves (e.g. 4.5). */
  n: number;
  /** Glyph font-size in px. Default 13. */
  size?: number;
}

export function Stars({ n, size = 13 }: StarsProps) {
  const clamped = Math.max(0, Math.min(5, Number.isFinite(n) ? n : 0));
  const full = Math.floor(clamped);
  const half = clamped - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <span
      className="stars"
      style={{ fontSize: size }}
      aria-label={`${clamped} out of 5 stars`}
    >
      {"★".repeat(full)}
      {half ? "⯨" : ""}
      {"☆".repeat(empty)}
    </span>
  );
}

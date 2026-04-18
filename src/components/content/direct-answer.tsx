/**
 * DirectAnswer — a 40–60 word direct-answer block for GEO.
 *
 * AI answer engines extract self-contained answer paragraphs as citations.
 * The sweet spot is 40–60 words: long enough to be substantive, short enough
 * to be quoted. Under 20 words is too thin; over 120 is too long to be useful
 * to a model deciding what to quote.
 *
 * Behavior:
 *   - 40–60 words: OK, silent
 *   - 20–39 or 61–120 words: dev-mode console.warn, no error
 *   - <20 or >120 words: throws during render (blocks build in CI)
 *
 * Use around the top-of-page quickAnswer paragraph on hubs and guides.
 * Plain <p> is fine on glossary stubs and disclosure pages — don't force
 * DirectAnswer where a short definition is correct.
 */

import type { ReactNode } from "react";

export type DirectAnswerValidationLevel = "ok" | "warn-short" | "warn-long" | "fail-short" | "fail-long";

export interface DirectAnswerValidationResult {
  level: DirectAnswerValidationLevel;
  wordCount: number;
  reason?: string;
}

export function validateDirectAnswerLength(text: string): DirectAnswerValidationResult {
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  if (wordCount < 20) {
    return { level: "fail-short", wordCount, reason: `DirectAnswer is ${wordCount} words; under 20 is too thin to be a citable answer.` };
  }
  if (wordCount > 120) {
    return { level: "fail-long", wordCount, reason: `DirectAnswer is ${wordCount} words; over 120 is too long for AI engines to quote.` };
  }
  if (wordCount < 40) {
    return { level: "warn-short", wordCount, reason: `DirectAnswer is ${wordCount} words; aim for 40–60 for the GEO sweet spot.` };
  }
  if (wordCount > 60) {
    return { level: "warn-long", wordCount, reason: `DirectAnswer is ${wordCount} words; aim for 40–60 for the GEO sweet spot.` };
  }
  return { level: "ok", wordCount };
}

interface DirectAnswerProps {
  children: ReactNode;
  text: string;
  className?: string;
  as?: "p" | "div";
}

export function DirectAnswer({ children, text, className, as = "p" }: DirectAnswerProps) {
  const result = validateDirectAnswerLength(text);

  if (result.level === "fail-short" || result.level === "fail-long") {
    throw new Error(`[DirectAnswer] ${result.reason}`);
  }

  if (process.env.NODE_ENV !== "production" && (result.level === "warn-short" || result.level === "warn-long")) {
    console.warn(`[DirectAnswer] ${result.reason}`);
  }

  const Component = as;
  return (
    <Component
      data-direct-answer="true"
      data-word-count={result.wordCount}
      className={className}
    >
      {children}
    </Component>
  );
}

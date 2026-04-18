import type { ReactNode } from "react";

export interface FAQItem {
  question: string;
  /** Rich content allowed — inline <strong>, links, etc. */
  answer: ReactNode;
}

export interface FAQProps {
  items: FAQItem[];
  /** Zero-based index of the item open on first render. Default 0 (first open). */
  defaultOpenIndex?: number;
}

export function FAQ({ items, defaultOpenIndex = 0 }: FAQProps) {
  return (
    <div>
      {items.map((f, i) => (
        <details
          key={`${f.question}-${i}`}
          className="faq-item"
          open={i === defaultOpenIndex}
        >
          <summary>{f.question}</summary>
          <div className="ans">{f.answer}</div>
        </details>
      ))}
    </div>
  );
}

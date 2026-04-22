import Link from "next/link";
import type { ReactNode } from "react";

// Matches [text](url) OR **bold** OR [N] footnote anchor in a single pass.
// The [N] form is a standalone bracket-wrapped integer NOT followed by `(`,
// used for numbered footnote citations linking to the sources list at page
// bottom (#source-N).
const INLINE_PATTERN = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\[(\d+)\](?!\()/g;

function isInternal(url: string): boolean {
  return url.startsWith("/") && !url.startsWith("//");
}

// Parse a single line of text into React nodes.
// Supports [text](url) and **bold**. Unmatched syntax falls through as-is.
export function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let keyCounter = 0;

  for (const match of text.matchAll(INLINE_PATTERN)) {
    const matchIndex = match.index ?? 0;

    if (matchIndex > lastIndex) {
      nodes.push(text.slice(lastIndex, matchIndex));
    }

    const [, linkText, linkUrl, boldText, footnoteNum] = match;

    if (linkText && linkUrl) {
      if (isInternal(linkUrl)) {
        nodes.push(
          <Link key={`ri-${keyCounter++}`} href={linkUrl} className="underline decoration-current/50 underline-offset-2 hover:decoration-current">
            {linkText}
          </Link>,
        );
      } else {
        nodes.push(
          <a
            key={`ri-${keyCounter++}`}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-current/50 underline-offset-2 hover:decoration-current"
          >
            {linkText}
          </a>,
        );
      }
    } else if (boldText) {
      nodes.push(<strong key={`ri-${keyCounter++}`}>{boldText}</strong>);
    } else if (footnoteNum) {
      nodes.push(
        <sup key={`ri-${keyCounter++}`} className="text-[0.72em] leading-none">
          <a
            href={`#source-${footnoteNum}`}
            className="ml-[1px] font-semibold text-current underline decoration-current/60 underline-offset-2 hover:decoration-current"
            aria-label={`Source ${footnoteNum}`}
          >
            [{footnoteNum}]
          </a>
        </sup>,
      );
    }

    lastIndex = matchIndex + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

// Render a prose block (multi-paragraph) into <p> tags with inline formatting.
export function RichText({
  text,
  className = "",
  paragraphClassName = "",
}: {
  text: string;
  className?: string;
  paragraphClassName?: string;
}) {
  const paragraphs = text.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);
  return (
    <div className={className}>
      {paragraphs.map((paragraph, idx) => (
        <p key={idx} className={paragraphClassName}>
          {renderInline(paragraph)}
        </p>
      ))}
    </div>
  );
}

// Render a single line of inline-formatted text without paragraph wrapping.
export function RichInline({ text }: { text: string }) {
  return <>{renderInline(text)}</>;
}

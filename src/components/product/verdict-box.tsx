import Image from "next/image";
import Link from "next/link";

interface VerdictBoxProps {
  authorName: string;
  authorAvatar: string;
  verdict: string;
  reviewerScore: number;
  readerFit: string;
  productName: string;
  ctaUrl?: string;
  ctaText?: string;
}

function VerdictBox({
  authorName,
  authorAvatar,
  verdict,
  reviewerScore,
  readerFit,
  productName,
  ctaUrl,
  ctaText,
}: VerdictBoxProps) {
  const firstName = authorName.split(" ")[0];

  return (
    <aside
      aria-label={`${firstName} verdict on ${productName}`}
      className="editorial-card border-[#d8c7b5] bg-[#f9f2e9] p-6 sm:p-7"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={authorAvatar}
            alt={authorName}
            width={60}
            height={60}
            className="h-15 w-15 rounded-sm border border-[#d4c2af] object-cover"
          />
          <div>
            <p className="eyebrow">Editor verdict</p>
            <h3 className="mt-2 font-[family-name:var(--font-heading-family)] text-[2rem] font-semibold leading-[1.02] text-[#23150f]">
              {firstName}&rsquo;s verdict
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:min-w-[240px]">
          <div className="rounded-sm border border-[#d8c8b7] bg-[#fffdf9] px-4 py-3">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#8a674e]">
              Our score
            </p>
            <p className="mt-2 text-[2rem] font-semibold text-[#23150f]">{reviewerScore.toFixed(1)}/5</p>
          </div>
          <div className="rounded-sm border border-[#d4e2d5] bg-[#f6fbf5] px-4 py-3">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#8a674e]">
              Best for
            </p>
            <p className="mt-2 text-[0.98rem] font-semibold leading-7 text-[#21442e]">{readerFit}</p>
          </div>
        </div>
      </div>

      <p className="mt-6 max-w-4xl text-[1.08rem] leading-8 text-[#38251b]">{verdict}</p>

      {ctaUrl ? (
        <div className="mt-6">
          <Link
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="button-primary"
          >
            {ctaText ?? `Check ${productName} price`}
          </Link>
        </div>
      ) : null}
    </aside>
  );
}

export { VerdictBox };
export type { VerdictBoxProps };

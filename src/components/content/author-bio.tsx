import Image from "next/image";
import Link from "next/link";

import type { Author } from "@/data/authors";
import { cn } from "@/lib/utils";

interface AuthorBioCardProps {
  author: Author;
  compact?: boolean;
}

function AuthorBioCard({ author, compact = false }: AuthorBioCardProps) {
  return (
    <aside
      aria-label={`About ${author.name}`}
      className={cn(
        "editorial-card-soft",
        compact
          ? "flex items-center gap-3 p-4"
          : "flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:gap-5 sm:p-7",
      )}
    >
      <div className="shrink-0">
        <Image
          src={author.avatar}
          alt={author.name}
          width={compact ? 44 : 64}
          height={compact ? 44 : 64}
          className={cn("rounded-full object-cover", compact ? "h-11 w-11" : "h-16 w-16")}
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div>
          <p className={cn("font-[family-name:var(--font-heading-family)] font-semibold text-[#2C1810]", compact ? "text-base" : "text-xl")}>
            {author.name}
          </p>
          <p className="text-sm text-[#4F7B62]">{author.title}</p>
        </div>

        {!compact ? (
          <>
            <p className="text-sm leading-7 text-[#4e3b31]">{author.bio}</p>
            {author.expertise.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {author.expertise.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#d7d9ce] bg-white px-3 py-1 text-xs font-medium text-[#4F7B62]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ) : null}
            {author.nicheExpertise ? (
              <p className="mt-1 text-xs leading-6 text-[#4F7B62]">{author.nicheExpertise}</p>
            ) : null}
          </>
        ) : null}

        <Link
          href={`/about#${author.slug}`}
          className={cn("button-quiet", compact ? "text-xs" : "mt-1 text-sm")}
        >
          About {author.name}
        </Link>
      </div>
    </aside>
  );
}

export { AuthorBioCard };
export type { AuthorBioCardProps };

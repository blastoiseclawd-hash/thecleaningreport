interface ProsConsProps {
  pros: string[];
  cons: string[];
}

function CheckIcon() {
  return (
    <svg className="mt-1 h-5 w-5 shrink-0 text-[#246842]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="mt-1 h-5 w-5 shrink-0 text-[#b1302c]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg>
  );
}

function ProsConsBox({ pros, cons }: ProsConsProps) {
  return (
    <div role="region" aria-label="Pros and cons" className="grid gap-4 lg:grid-cols-2">
      <div className="editorial-card border-[#c7dfcf] bg-[#f3fbf3] p-6 shadow-[inset_4px_0_0_0_#58a16f]">
        <h4 className="text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-[#246842]">
          What we like
        </h4>
        <ul className="mt-4 space-y-3">
          {pros.map((pro) => (
            <li key={pro} className="flex items-start gap-3 text-[1rem] leading-8 text-[#213528]">
              <CheckIcon />
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="editorial-card border-[#efd1cf] bg-[#fff6f5] p-6 shadow-[inset_4px_0_0_0_#d65a4a]">
        <h4 className="text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-[#a92f2b]">
          What we don&apos;t
        </h4>
        <ul className="mt-4 space-y-3">
          {cons.map((con) => (
            <li key={con} className="flex items-start gap-3 text-[1rem] leading-8 text-[#5f2e2a]">
              <XIcon />
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { ProsConsBox };
export type { ProsConsProps };

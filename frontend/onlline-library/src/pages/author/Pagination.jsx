import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ page, totalPages, onPage, from, to, total }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const btn = "flex h-9 w-9 items-center justify-center rounded-lg text-[13px] transition active:scale-95";

  return (
    <div className="flex flex-col items-center gap-3 px-2 py-2 text-[13px] text-[#424844] sm:flex-row sm:justify-between lg:py-4">
      <span>
        Showing <b className="font-normal text-[#1b1c1a]">{from} – {to}</b> of {total} authors
      </span>
      <div className="flex items-center gap-1.5">
        <button onClick={() => onPage(page - 1)} disabled={page === 1} aria-label="Previous page"
          className={`${btn} bg-white hover:bg-[#eae8e5] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white`}>
          <ChevronLeft className="h-3.5 w-3.5" />
        </button>
        {pages.map((p) => (
          <button key={p} onClick={() => onPage(p)} aria-current={page === p ? "page" : undefined}
            className={`${btn} ${page === p ? "bg-[#07241a] text-white shadow-[0_1px_1px_rgba(0,0,0,0.05)]" : "bg-white text-[#1b1c1a] hover:bg-[#eae8e5]"}`}>
            {p}
          </button>
        ))}
        <button onClick={() => onPage(page + 1)} disabled={page === totalPages} aria-label="Next page"
          className={`${btn} bg-white hover:bg-[#eae8e5] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white`}>
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

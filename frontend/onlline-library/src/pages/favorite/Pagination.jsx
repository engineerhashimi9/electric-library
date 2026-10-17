import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ page, totalPages, onPage, from, to, total }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const btn = "flex h-9 w-9 items-center justify-center rounded-lg text-[13px] transition active:scale-95";

  return (
    <div className="flex items-center justify-between px-2 py-4 text-[13px] text-ink-soft">
      <span>
        Showing <b className="font-normal text-leaf-950">{from} – {to}</b> of {total} bookmarked works
      </span>
      <div className="flex items-center gap-1.5">
        <button
          onClick={() => onPage(page - 1)}
          disabled={page === 1}
          aria-label="Previous page"
          className={`${btn} bg-white hover:bg-leaf-100 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white`}
        >
          <ChevronLeft className="h-3.5 w-3.5" />
        </button>
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => onPage(p)}
            className={`${btn} ${page === p ? "bg-leaf-950 text-white shadow-sm" : "bg-white text-leaf-950 hover:bg-leaf-100"}`}
          >
            {p}
          </button>
        ))}
        <button
          onClick={() => onPage(page + 1)}
          disabled={page === totalPages}
          aria-label="Next page"
          className={`${btn} bg-white hover:bg-leaf-100 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white`}
        >
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

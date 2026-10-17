import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ page, totalPages, onPage, shown, total }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const btn = "flex h-9 w-9 items-center justify-center rounded-lg text-[13px] font-semibold transition active:scale-95";

  return (
    <div className="flex items-center justify-between text-[12px] text-ink-soft">
      <span>Showing {shown} of {total} authors</span>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPage(page - 1)}
          disabled={page === 1}
          aria-label="Previous page"
          className={`${btn} bg-white ring-1 ring-leaf-100 hover:bg-leaf-50 disabled:cursor-not-allowed disabled:opacity-40`}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => onPage(p)}
            className={`${btn} ${page === p ? "bg-leaf-900 text-white" : "bg-white text-leaf-950 ring-1 ring-leaf-100 hover:bg-leaf-50"}`}
          >
            {p}
          </button>
        ))}
        <button
          onClick={() => onPage(page + 1)}
          disabled={page === totalPages}
          aria-label="Next page"
          className={`${btn} bg-white ring-1 ring-leaf-100 hover:bg-leaf-50 disabled:cursor-not-allowed disabled:opacity-40`}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

import { ChevronLeft, ChevronRight } from "lucide-react";

export function CatalogPagination({
  page,
  pageCount,
  onPageChange,
  total,
  start,
  end,
  perPage,
  onPerPageChange,
}) {
  return (
    <section className="flex flex-col items-center justify-between gap-5 py-4 lg:flex-row">
      <p className="text-sm text-[#555c57]">
        Showing <span className="text-[#08271d]">{start}–{end}</span> of{" "}
        <span className="text-[#08271d]">{total}</span> books
      </p>

<nav
        aria-label="Catalog pagination"
        className="flex items-center gap-2 rounded-2xl bg-white p-2 shadow-sm lg:bg-transparent lg:shadow-none"
      >
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
          aria-label="Previous page"
          className="rounded-xl p-3 text-[#08271d] disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronLeft size={18} />
        </button>

{Array.from({ length: pageCount }, (_, index) => index + 1).map(
          (number) => (
            <button
              key={number}
              onClick={() => onPageChange(number)}
              aria-current={page === number ? "page" : undefined}
              className={`h-10 w-10 rounded-xl text-sm font-semibold ${
                page === number
                  ? "bg-[#08271d] text-white"
                  : "bg-white text-[#454b47] hover:bg-[#efeeeb]"
              }`}
            >
              {number}
            </button>
          ),
        )}

<button
          onClick={() => onPageChange(page + 1)}
          disabled={page >= pageCount}
          aria-label="Next page"
          className="rounded-xl p-3 text-[#08271d] disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronRight size={18} />
        </button>
      </nav>

<label className="hidden items-center gap-3 text-xs font-semibold text-[#555c57] lg:flex">
        Per page:
        <select
          value={perPage}
          onChange={(event) => onPerPageChange(Number(event.target.value))}
          className="rounded-lg bg-white px-3 py-2 shadow-sm"
        >
          <option value={6}>6</option>
          <option value={8}>8</option>
          <option value={12}>12</option>
        </select>
      </label>
    </section>
  );
}

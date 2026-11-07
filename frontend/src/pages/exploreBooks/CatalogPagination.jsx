import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CatalogPagination({
  page,
  pageCount,
  onPageChange,
  total,
  start,
  end,
  perPage,
  onPerPageChange,
}) {
  const { t } = useTranslation();

  return (
    <section aria-label="Catalog pagination" className="flex flex-col items-center justify-between gap-4 py-4 lg:flex-row">
      <p className="text-xs sm:text-sm text-[#4A6B68] font-semibold">
        {t("explore.showing", { start, end, total })}
      </p>

      <nav
        aria-label="Pagination"
        className="flex items-center gap-1.5 rounded-2xl bg-[#FFFFFF] border border-[#D0E8E6] p-1.5 shadow-library-sm"
      >
        <button
          type="button"
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
          aria-label="Previous page"
          className="rounded-xl p-2.5 text-[#4A6B68] hover:text-[#0E6760] hover:bg-[#E6F4F3] disabled:cursor-not-allowed disabled:opacity-30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
        >
          <ChevronLeft size={18} className="rtl:rotate-180" />
        </button>

        {Array.from({ length: pageCount }, (_, index) => index + 1).map(
          (number) => (
            <button
              key={number}
              type="button"
              onClick={() => onPageChange(number)}
              aria-current={page === number ? "page" : undefined}
              aria-label={`Page ${number}`}
              className={`h-9 w-9 sm:h-10 sm:w-10 rounded-xl text-xs sm:text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] ${
                page === number
                  ? "bg-[#0E6760] text-[#FFFFFF] shadow-library-sm"
                  : "text-[#4A6B68] hover:bg-[#E6F4F3] hover:text-[#0E6760]"
              }`}
            >
              {number}
            </button>
          ),
        )}

        <button
          type="button"
          onClick={() => onPageChange(page + 1)}
          disabled={page >= pageCount}
          aria-label="Next page"
          className="rounded-xl p-2.5 text-[#4A6B68] hover:text-[#0E6760] hover:bg-[#E6F4F3] disabled:cursor-not-allowed disabled:opacity-30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
        >
          <ChevronRight size={18} className="rtl:rotate-180" />
        </button>
      </nav>

      <label className="hidden items-center gap-2.5 text-xs font-bold text-[#4A6B68] lg:flex">
        <span>{t("explore.perPage")}</span>
        <select
          value={perPage}
          onChange={(event) => onPerPageChange(Number(event.target.value))}
          className="rounded-xl bg-[#FFFFFF] border border-[#D0E8E6] text-[#0A2E2C] px-3 py-1.5 shadow-library-sm outline-none font-bold focus:border-[#17A296] focus:ring-2 focus:ring-[#17A296]/20 transition-all cursor-pointer"
        >
          <option value={6}>6</option>
          <option value={8}>8</option>
          <option value={12}>12</option>
        </select>
      </label>
    </section>
  );
}

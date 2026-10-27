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
    <section className="flex flex-col items-center justify-between gap-5 py-4 lg:flex-row">
      <p className="text-sm text-[#52665E] font-medium">
        {t("explore.showing", { start, end, total })}
      </p>

      <nav
        aria-label="Catalog pagination"
        className="flex items-center gap-2 rounded-2xl bg-[#FFFFFF] border border-[#DDECE6] p-2 shadow-sm lg:bg-transparent lg:border-none lg:shadow-none"
      >
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
          aria-label="Previous page"
          className="rounded-xl p-3 text-[#52665E] hover:text-[#09261C] disabled:cursor-not-allowed disabled:opacity-30 transition-colors"
        >
          <ChevronLeft size={18} className="rtl:rotate-180" />
        </button>

        {Array.from({ length: pageCount }, (_, index) => index + 1).map(
          (number) => (
            <button
              key={number}
              onClick={() => onPageChange(number)}
              aria-current={page === number ? "page" : undefined}
              className={`h-10 w-10 rounded-xl text-sm font-bold transition-colors ${
                page === number
                  ? "bg-[#09261C] text-[#FFFFFF]"
                  : "bg-[#FFFFFF] border border-[#DDECE6] text-[#52665E] hover:bg-[#EAF4F0] hover:text-[#09261C]"
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
          className="rounded-xl p-3 text-[#52665E] hover:text-[#09261C] disabled:cursor-not-allowed disabled:opacity-30 transition-colors"
        >
          <ChevronRight size={18} className="rtl:rotate-180" />
        </button>
      </nav>

      <label className="hidden items-center gap-3 text-xs font-bold text-[#52665E] lg:flex">
        {t("explore.perPage")}
        <select
          value={perPage}
          onChange={(event) => onPerPageChange(Number(event.target.value))}
          className="rounded-lg bg-[#FFFFFF] border border-[#DDECE6] text-[#111C18] px-3 py-2 shadow-sm outline-none font-bold focus:border-[#10B981]"
        >
          <option value={6}>6</option>
          <option value={8}>8</option>
          <option value={12}>12</option>
        </select>
      </label>
    </section>
  );
}

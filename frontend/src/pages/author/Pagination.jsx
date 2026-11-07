import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Pagination({ page, totalPages, onPage, from, to, total }) {
  const { t } = useTranslation();
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const btn = "flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl text-xs sm:text-sm font-bold transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]";

  return (
    <nav
      aria-label="Authors pagination"
      className="flex flex-col items-center gap-3 px-2 py-3 text-xs sm:text-sm text-[#4A6B68] font-semibold sm:flex-row sm:justify-between lg:py-5"
    >
      <span>
        {t("authors.pagination.showing", { from, to, total })}
      </span>
      <div className="flex items-center gap-1.5 rounded-2xl bg-[#FFFFFF] border border-[#D0E8E6] p-1 shadow-library-sm">
        <button
          type="button"
          onClick={() => onPage(page - 1)}
          disabled={page === 1}
          aria-label="Previous page"
          className={`${btn} text-[#4A6B68] hover:bg-[#E6F4F3] hover:text-[#0E6760] disabled:cursor-not-allowed disabled:opacity-30`}
        >
          <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
        </button>
        {pages.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => onPage(p)}
            aria-current={page === p ? "page" : undefined}
            aria-label={`Page ${p}`}
            className={`${btn} ${
              page === p
                ? "bg-[#0E6760] text-[#FFFFFF] shadow-sm"
                : "text-[#4A6B68] hover:bg-[#E6F4F3] hover:text-[#0E6760]"
            }`}
          >
            {p}
          </button>
        ))}
        <button
          type="button"
          onClick={() => onPage(page + 1)}
          disabled={page === totalPages}
          aria-label="Next page"
          className={`${btn} text-[#4A6B68] hover:bg-[#E6F4F3] hover:text-[#0E6760] disabled:cursor-not-allowed disabled:opacity-30`}
        >
          <ChevronRight className="h-4 w-4 rtl:rotate-180" />
        </button>
      </div>
    </nav>
  );
}

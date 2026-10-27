import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Pagination({ page, totalPages, onPage, from, to, total }) {
  const { t } = useTranslation();
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const btn = "flex h-9 w-9 items-center justify-center rounded-lg text-[13px] transition active:scale-95";

  return (
    <div className="flex flex-col items-center gap-3 px-2 py-2 text-[13px] text-[#4A6B68] sm:flex-row sm:justify-between lg:py-4">
      <span>
        {t("favorites.pagination.showing", { from, to, total })}
      </span>
      <div className="flex items-center gap-1.5">
        <button
          onClick={() => onPage(page - 1)}
          disabled={page === 1}
          aria-label="Previous page"
          className={`${btn} bg-[#FFFFFF] border border-[#D0E8E6] text-[#4A6B68] hover:bg-[#E6F4F3] hover:text-[#0E6760] disabled:cursor-not-allowed disabled:opacity-40`}
        >
          <ChevronLeft className="h-3.5 w-3.5 rtl:rotate-180" />
        </button>
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => onPage(p)}
            aria-current={page === p ? "page" : undefined}
            className={`${btn} font-semibold ${
              page === p
                ? "bg-[#0E6760] text-[#FFFFFF] shadow-sm"
                : "bg-[#FFFFFF] border border-[#D0E8E6] text-[#4A6B68] hover:bg-[#E6F4F3] hover:text-[#0E6760]"
            }`}
          >
            {p}
          </button>
        ))}
        <button
          onClick={() => onPage(page + 1)}
          disabled={page === totalPages}
          aria-label="Next page"
          className={`${btn} bg-[#FFFFFF] border border-[#D0E8E6] text-[#4A6B68] hover:bg-[#E6F4F3] hover:text-[#0E6760] disabled:cursor-not-allowed disabled:opacity-40`}
        >
          <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
        </button>
      </div>
    </div>
  );
}

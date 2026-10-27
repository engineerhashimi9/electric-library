import React from "react";
import { Cloud, ChevronDown, LayoutGrid, Rows3, ArrowDownWideNarrow } from "lucide-react";
import { useTranslation } from "react-i18next";
import { sortOptions } from "./favorites";

export default function ShelfToolbar({
  total,
  sort,
  onSort,
  view,
  onView,
  previewEmpty,
  onTogglePreview,
}) {
  const { t, i18n } = useTranslation();
  const isFa = i18n.language === "fa";

  const sortMap = {
    "Recently Added": isFa ? "اخیراً اضافه شده" : t("favorites.sort.recent", "Recently Added"),
    "Highest Rated": isFa ? "بالاترین امتیاز" : t("favorites.sort.rating", "Highest Rated"),
    "Most Reviewed": isFa ? "بیشترین نقد و نظر" : t("favorites.sort.reviews", "Most Reviewed"),
    "Title A–Z": isFa ? "عنوان (الف تا ی)" : t("favorites.sort.title", "Title A–Z"),
  };

  const getSortLabel = (val) => sortMap[val] || val;

  return (
    <>
      {/* Mobile Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 md:hidden">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-[12px] font-bold uppercase leading-[18px] tracking-[0.6px] text-[#52665E]">
            {total} {t("favorites.toolbar.savedWorks", "Saved Works")}
          </p>
          <span className="h-1 w-1 rounded-full bg-[#DDECE6]" />
          <button
            onClick={onTogglePreview}
            className="text-left rtl:text-right text-[12px] font-bold leading-[18px] tracking-[0.5px] text-[#10B981] underline decoration-[#10B981]/40 underline-offset-4"
          >
            {previewEmpty
              ? t("favorites.actions.exitEmpty", "Exit Empty State")
              : t("favorites.toolbar.toggleEmpty", "Toggle Empty State")}
          </button>
        </div>

        <label className="relative flex min-w-[140px] flex-1 sm:flex-none items-center gap-2.5 rounded-xl bg-[#FFFFFF] border border-[#DDECE6] px-3.5 py-2 transition shadow-sm">
          <ArrowDownWideNarrow className="h-4 w-4 shrink-0 text-[#6B9080]" />
          <span className="flex-1 truncate text-[13px] font-semibold leading-[18px] text-[#09261C]">
            {getSortLabel(sort)}
          </span>
          <ChevronDown className="h-4 w-4 shrink-0 text-[#6B9080]" />
          <select
            value={sort}
            onChange={(e) => onSort(e.target.value)}
            aria-label="Sort by"
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          >
            {sortOptions.map((o) => (
              <option key={o} value={o} className="bg-[#FFFFFF] text-[#09261C]">
                {getSortLabel(o)}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Tablet & Desktop Toolbar */}
      <div className="hidden items-center justify-between gap-4 rounded-2xl bg-[#FFFFFF] border border-[#DDECE6] px-5 py-3.5 shadow-sm md:flex">
        <div className="flex min-w-0 items-center gap-3">
          <h2 className="whitespace-nowrap text-[18px] font-bold leading-7 text-[#09261C] lg:text-[20px]">
            {t("favorites.toolbar.worksCataloged", { total, defaultValue: `${total} Works Cataloged` })}
          </h2>
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#DDECE6]" />
          <span className="hidden items-center gap-1.5 whitespace-nowrap text-[13px] text-[#52665E] lg:flex">
            <Cloud className="h-3.5 w-3.5 text-[#10B981]" />
            {t("favorites.toolbar.synced", "Synchronized with Oxford Repository")}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-4">
          <label className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.55px] text-[#52665E]">
              {t("favorites.toolbar.sortBy", "SORT BY:")}
            </span>
            <span className="relative">
              <select
                value={sort}
                onChange={(e) => onSort(e.target.value)}
                className="cursor-pointer appearance-none rounded-lg bg-[#EAF4F0] border border-[#DDECE6] py-1.5 pl-3 pr-8 rtl:pr-3 rtl:pl-8 text-[13px] font-semibold text-[#09261C] outline-none transition hover:bg-[#DDECE6] focus:border-[#10B981]"
              >
                {sortOptions.map((o) => (
                  <option key={o} value={o}>
                    {getSortLabel(o)}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 rtl:right-auto rtl:left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#52665E]" />
            </span>
          </label>

          <span className="h-5 w-px bg-[#DDECE6]" />

          <div className="flex rounded-lg bg-[#EAF4F0] border border-[#DDECE6] p-0.5">
            {[
              ["grid", LayoutGrid],
              ["list", Rows3],
            ].map(([k, Icon]) => (
              <button
                key={k}
                onClick={() => onView(k)}
                aria-label={`${k} view`}
                className={`rounded-md p-1.5 transition ${
                  view === k
                    ? "bg-[#09261C] text-[#FFFFFF] shadow-sm"
                    : "text-[#52665E] hover:text-[#09261C]"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

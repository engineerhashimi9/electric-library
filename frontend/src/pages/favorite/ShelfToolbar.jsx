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
          <p className="text-xs font-bold uppercase tracking-wider text-[#4A6B68]">
            {total} {t("favorites.toolbar.savedWorks", "Saved Works")}
          </p>
          <span className="h-1 w-1 rounded-full bg-[#D0E8E6]" />
          <button
            type="button"
            onClick={onTogglePreview}
            className="text-start text-xs font-bold text-[#17A296] hover:text-[#0E6760] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] rounded"
          >
            {previewEmpty
              ? t("favorites.actions.exitEmpty", "Exit Empty State")
              : t("favorites.toolbar.toggleEmpty", "Toggle Empty State")}
          </button>
        </div>

        <label className="relative flex min-w-[140px] flex-1 sm:flex-none items-center gap-2 rounded-xl bg-[#FFFFFF] border border-[#D0E8E6] px-3.5 py-2.5 shadow-library-sm transition-all focus-within:border-[#17A296]">
          <ArrowDownWideNarrow className="h-4 w-4 shrink-0 text-[#236D64]" aria-hidden="true" />
          <span className="flex-1 truncate text-xs sm:text-sm font-bold text-[#0E6760]">
            {getSortLabel(sort)}
          </span>
          <ChevronDown className="h-4 w-4 shrink-0 text-[#236D64]" aria-hidden="true" />
          <select
            value={sort}
            onChange={(e) => onSort(e.target.value)}
            aria-label="Sort by"
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          >
            {sortOptions.map((o) => (
              <option key={o} value={o} className="bg-[#FFFFFF] text-[#0E6760]">
                {getSortLabel(o)}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Tablet & Desktop Toolbar */}
      <div className="hidden items-center justify-between gap-4 rounded-2xl bg-[#FFFFFF] border border-[#D0E8E6] px-5 py-3.5 shadow-library-sm md:flex">
        <div className="flex min-w-0 items-center gap-3">
          <h2 className="whitespace-nowrap text-base lg:text-lg font-extrabold text-[#0E6760]">
            {t("favorites.toolbar.worksCataloged", { total, defaultValue: `${total} Works Cataloged` })}
          </h2>
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D0E8E6]" />
          <span className="hidden items-center gap-1.5 whitespace-nowrap text-xs sm:text-sm text-[#4A6B68] font-medium lg:flex">
            <Cloud className="h-4 w-4 text-[#17A296]" aria-hidden="true" />
            {t("favorites.toolbar.synced", "Synchronized with Oxford Repository")}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-4">
          <label className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#236D64]">
              {t("favorites.toolbar.sortBy", "SORT BY:")}
            </span>
            <span className="relative">
              <select
                value={sort}
                onChange={(e) => onSort(e.target.value)}
                aria-label="Sort options"
                className="cursor-pointer appearance-none rounded-xl bg-[#E6F4F3] border border-[#D0E8E6] py-2 pl-3.5 pr-9 rtl:pr-3.5 rtl:pl-9 text-xs sm:text-sm font-bold text-[#0E6760] outline-none transition-all hover:border-[#17A296] focus:border-[#17A296] focus:ring-2 focus:ring-[#17A296]/20"
              >
                {sortOptions.map((o) => (
                  <option key={o} value={o}>
                    {getSortLabel(o)}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 rtl:right-auto rtl:left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#236D64]" aria-hidden="true" />
            </span>
          </label>

          <span className="h-6 w-px bg-[#D0E8E6]" />

          <div role="group" aria-label="Layout view switch" className="flex rounded-xl bg-[#E6F4F3] border border-[#D0E8E6] p-1">
            {[
              { val: "grid", Icon: LayoutGrid, label: "Grid layout" },
              { val: "list", Icon: Rows3, label: "List layout" },
            ].map(({ val, Icon, label }) => (
              <button
                key={val}
                type="button"
                onClick={() => onView(val)}
                aria-label={label}
                aria-pressed={view === val}
                className={`rounded-lg p-1.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] ${
                  view === val
                    ? "bg-[#0E6760] text-[#FFFFFF] shadow-sm"
                    : "text-[#4A6B68] hover:text-[#0E6760]"
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

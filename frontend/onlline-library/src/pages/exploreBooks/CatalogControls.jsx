// src/pages/exploreBooks/CatalogControls.jsx
import { SlidersHorizontal } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SearchField } from "./SearchFeild";
import { ViewToggle } from "./ViewToggle";
import { genres } from "./data";
import { getLocalized } from "@/utils/langHelper";

export default function CatalogControls({
  query,
  onQueryChange,
  searchRef,
  sort,
  onSortChange,
  view,
  onViewChange,
  genre,
  onGenreChange,
  onOpenFilters,
  filterCount,
}) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <section className="space-y-4 sm:space-y-5">
      <SearchField
        value={query}
        onChange={onQueryChange}
        inputRef={searchRef}
        placeholder={t("explore.search.placeholder")}
      />

      <div className="flex flex-wrap items-center justify-between gap-2 lg:hidden">
        <div className="flex flex-1 items-center gap-2 min-w-0">
          <select
            aria-label={t("explore.sort.label")}
            value={sort}
            onChange={(event) => onSortChange(event.target.value)}
            className="min-w-0 flex-1 sm:flex-none rounded-full bg-[#FFFFFF] border border-[#DDECE6] px-3 py-2.5 text-xs font-bold text-[#09261C] shadow-sm sm:text-sm outline-none"
          >
            <option value="popular">{t("explore.sort.popular")}</option>
            <option value="rating">{t("explore.sort.rating")}</option>
            <option value="title">{t("explore.sort.title")}</option>
          </select>
          <button
            onClick={onOpenFilters}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#FFFFFF] border border-[#DDECE6] px-3.5 py-2.5 text-xs font-bold text-[#09261C] shadow-sm sm:text-sm"
          >
            <SlidersHorizontal size={16} className="text-[#10B981]" />
            <span>{t("explore.search.filterBtn")}</span>
            {filterCount > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#10B981] text-[10px] text-[#FFFFFF] font-bold">
                {filterCount}
              </span>
            )}
          </button>
        </div>
        <ViewToggle view={view} onChange={onViewChange} />
      </div>

      <div
        className="flex gap-2 sm:gap-3 overflow-x-auto pb-1 lg:flex-wrap"
        aria-label="Genre filters"
      >
        {genres.map((item, idx) => {
          const itemVal = typeof item === "object" ? item.en : item;
          const label = getLocalized(item, lang);
          const isSelected = genre === itemVal || genre === label;

          return (
            <button
              key={idx}
              aria-pressed={isSelected}
              onClick={() => onGenreChange(itemVal)}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold transition sm:text-sm flex items-center gap-1.5 ${
                isSelected
                  ? "bg-[#09261C] border border-[#09261C] text-[#FFFFFF] shadow-sm"
                  : "bg-[#FFFFFF] border border-[#DDECE6] text-[#52665E] hover:bg-[#EAF4F0] hover:text-[#09261C]"
              }`}
            >
              {isSelected && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              )}
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
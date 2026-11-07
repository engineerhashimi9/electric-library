// src/pages/exploreBooks/CatalogControls.jsx
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
        <select
          aria-label={t("explore.sort.label")}
          value={sort}
          onChange={(event) => onSortChange(event.target.value)}
          className="min-w-0 flex-1 sm:flex-none rounded-full bg-[#FFFFFF] border border-[#D0E8E6] px-3.5 py-2.5 text-xs font-bold text-[#0E6760] shadow-sm sm:text-sm outline-none"
        >
          <option value="popular">{t("explore.sort.popular")}</option>
          <option value="rating">{t("explore.sort.rating")}</option>
          <option value="title">{t("explore.sort.title")}</option>
        </select>
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
                  ? "bg-[#0E6760] border border-[#0E6760] text-[#FFFFFF] shadow-sm"
                  : "bg-[#FFFFFF] border border-[#D0E8E6] text-[#4A6B68] hover:bg-[#E6F4F3] hover:text-[#0E6760]"
              }`}
            >
              {isSelected && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#17A296]" />
              )}
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

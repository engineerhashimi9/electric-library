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
    <section aria-label="Catalog Filters and Controls" className="space-y-4 sm:space-y-5">
      <SearchField
        value={query}
        onChange={onQueryChange}
        inputRef={searchRef}
        placeholder={t("explore.search.placeholder")}
      />

      <div className="flex flex-wrap items-center justify-between gap-3 lg:hidden">
        <label className="relative min-w-0 flex-1 sm:flex-none">
          <select
            aria-label={t("explore.sort.label")}
            value={sort}
            onChange={(event) => onSortChange(event.target.value)}
            className="w-full rounded-xl bg-[#FFFFFF] border border-[#D0E8E6] px-3.5 py-2.5 text-xs sm:text-sm font-bold text-[#0E6760] shadow-library-sm outline-none focus:border-[#17A296] focus:ring-2 focus:ring-[#17A296]/20 transition-all"
          >
            <option value="popular">{t("explore.sort.popular")}</option>
            <option value="rating">{t("explore.sort.rating")}</option>
            <option value="title">{t("explore.sort.title")}</option>
          </select>
        </label>
        <ViewToggle view={view} onChange={onViewChange} />
      </div>

      <div
        className="flex gap-2 sm:gap-2.5 overflow-x-auto pb-1.5 lg:flex-wrap no-scrollbar"
        aria-label="Genre filters"
      >
        {genres.map((item, idx) => {
          const itemVal = typeof item === "object" ? item.en : item;
          const label = getLocalized(item, lang);
          const isSelected = genre === itemVal || genre === label;

          return (
            <button
              key={idx}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onGenreChange(itemVal)}
              className={`shrink-0 whitespace-nowrap rounded-xl px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-bold transition-all flex items-center gap-2 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] ${
                isSelected
                  ? "bg-[#0E6760] border border-[#0E6760] text-[#FFFFFF] shadow-library-sm"
                  : "bg-[#FFFFFF] border border-[#D0E8E6] text-[#4A6B68] hover:bg-[#E6F4F3] hover:text-[#0E6760] hover:border-[#17A296]/50"
              }`}
            >
              {isSelected && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#17A296]" aria-hidden="true" />
              )}
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

import React from "react";
import { useTranslation } from "react-i18next";
import { SearchField } from "./SearchField";
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
    <section aria-label="Catalog Filters and Controls" className="catalog-controls-container">
      <SearchField
        value={query}
        onChange={onQueryChange}
        inputRef={searchRef}
        placeholder={t("explore.search.placeholder")}
      />

      <div className="d-flex items-center justify-between gap-3 hidden-desktop">
        <label className="relative" style={{ flex: 1, minWidth: 0 }}>
          <select
            aria-label={t("explore.sort.label")}
            value={sort}
            onChange={(event) => onSortChange(event.target.value)}
            className="select-styled"
            style={{ width: "100%" }}
          >
            <option value="popular">{t("explore.sort.popular")}</option>
            <option value="rating">{t("explore.sort.rating")}</option>
            <option value="title">{t("explore.sort.title")}</option>
          </select>
        </label>
        <ViewToggle view={view} onChange={onViewChange} />
      </div>

      <div className="genre-filter-pills no-scrollbar" aria-label="Genre filters">
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
              className={`chip ${isSelected ? "active" : ""}`}
            >
              {isSelected && (
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "var(--primary-light)",
                  }}
                  aria-hidden="true"
                />
              )}
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

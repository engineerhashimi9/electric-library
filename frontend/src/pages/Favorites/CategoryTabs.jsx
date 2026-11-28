import React from "react";
import { useTranslation } from "react-i18next";

const categoryNamesFa = {
  "All Favorites": "همه علاقه‌مندی‌ها",
  "Dark Academia": "آکادمی تاریک",
  "Contemporary Fiction": "داستان معاصر",
  "Philosophy & Stoicism": "فلسفه و رواقی‌گری",
  "Rare First Editions": "چاپ اول‌های کمیاب",
};

/**
 * Category filter tabs displaying localized collection names and item counts.
 */
export default function CategoryTabs({ categories, counts, active, onChange }) {
  const { i18n } = useTranslation();
  const isFa = i18n.language === "fa";

  return (
    <div
      role="group"
      aria-label="Favorites categories"
      className="d-flex flex-wrap items-center gap-2"
      style={{ paddingTop: "0.5rem" }}
    >
      {categories.map((c) => {
        const isActive = active === c;
        const count = counts[c] ?? 0;
        const label = isFa && categoryNamesFa[c] ? categoryNamesFa[c] : c;

        return (
          <button
            key={c}
            type="button"
            onClick={() => onChange(c)}
            aria-pressed={isActive}
            className={`chip ${isActive ? "active" : ""}`}
          >
            <span>{label}</span>
            <span className="chip-count">{count}</span>
          </button>
        );
      })}
    </div>
  );
}

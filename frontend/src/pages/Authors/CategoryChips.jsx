import React from "react";
import { useTranslation } from "react-i18next";

const categoryNamesFa = {
  "All Authors": "همه نویسندگان",
  "Modernist": "مدرنیست",
  "Magical Realism": "رئالیسم جادویی",
  "Philosophy": "فلسفه",
  "Contemporary": "معاصر",
  "Poetry & Drama": "شعر و نمایشنامه",
};

/**
 * Filterable category pills with dynamic per-category author counts.
 */
export default function CategoryChips({ categories, counts, active, onChange }) {
  const { i18n } = useTranslation();
  const isFa = i18n.language === "fa";

  return (
    <div
      role="group"
      aria-label="Author categories"
      style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem" }}
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
            <span className="chip-count">({count})</span>
          </button>
        );
      })}
    </div>
  );
}

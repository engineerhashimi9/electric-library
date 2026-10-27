import { useTranslation } from "react-i18next";

const categoryNamesFa = {
  "All Favorites": "همه علاقه‌مندی‌ها",
  "Dark Academia": "آکادمی تاریک",
  "Contemporary Fiction": "داستان معاصر",
  "Philosophy & Stoicism": "فلسفه و رواقی‌گری",
  "Rare First Editions": "چاپ اول‌های کمیاب",
};

export default function CategoryTabs({ categories, counts, active, onChange }) {
  const { i18n } = useTranslation();
  const isFa = i18n.language === "fa";

  return (
    <div className="flex flex-wrap items-center gap-2 lg:pt-2">
      {categories.map((c) => {
        const isActive = active === c;
        const count = counts[c] ?? 0;
        const label = isFa && categoryNamesFa[c] ? categoryNamesFa[c] : c;

        return (
          <button
            key={c}
            onClick={() => onChange(c)}
            aria-pressed={isActive}
            className={`flex items-center gap-2 rounded-full px-5 py-3 text-[15px] font-semibold transition active:scale-95 lg:px-4 lg:py-2 lg:text-[13px] lg:font-normal ${
              isActive
                ? "bg-[#0E6760] text-[#FFFFFF] shadow-sm"
                : "bg-[#FFFFFF] border border-[#D0E8E6] text-[#4A6B68] hover:bg-[#E6F4F3] hover:text-[#0E6760]"
            }`}
          >
            {label}
            <span className="lg:hidden">({count})</span>
            <span
              className={`hidden rounded-full px-2 py-0.5 text-[11px] font-bold tracking-[0.66px] lg:inline-block ${
                isActive
                  ? "bg-[#17A296] text-[#FFFFFF]"
                  : "bg-[#E6F4F3] border border-[#D0E8E6] text-[#4A6B68]"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}

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
    <div
      role="group"
      aria-label="Favorites categories"
      className="flex flex-wrap items-center gap-2 lg:pt-2"
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
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] ${
              isActive
                ? "bg-[#0E6760] text-[#FFFFFF] shadow-library-sm"
                : "bg-[#FFFFFF] border border-[#D0E8E6] text-[#4A6B68] hover:bg-[#E6F4F3] hover:text-[#0E6760] hover:border-[#17A296]/40"
            }`}
          >
            <span>{label}</span>
            <span className="lg:hidden text-xs">({count})</span>
            <span
              className={`hidden rounded-full px-2 py-0.5 text-xs font-bold lg:inline-block ${
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

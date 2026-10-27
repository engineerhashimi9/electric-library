import { useTranslation } from "react-i18next";

const categoryNamesFa = {
  "All Authors": "همه نویسندگان",
  "Modernist": "مدرنیست",
  "Magical Realism": "رئالیسم جادویی",
  "Philosophy": "فلسفه",
  "Contemporary": "معاصر",
  "Poetry & Drama": "شعر و نمایشنامه",
};

export default function CategoryChips({ categories, counts, active, onChange }) {
  const { i18n } = useTranslation();
  const isFa = i18n.language === "fa";

  return (
    <div className="flex flex-wrap items-center gap-2">
      {categories.map((c) => {
        const isActive = active === c;
        const count = counts[c] ?? 0;
        const label = isFa && categoryNamesFa[c] ? categoryNamesFa[c] : c;

        return (
          <button
            key={c}
            onClick={() => onChange(c)}
            aria-pressed={isActive}
            className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-[14px] font-semibold transition active:scale-95 lg:py-2 lg:text-[13px] lg:font-normal ${
              isActive
                ? "bg-[#09261C] text-[#FFFFFF] shadow-sm"
                : "bg-[#FFFFFF] border border-[#DDECE6] text-[#52665E] hover:bg-[#EAF4F0] hover:text-[#09261C]"
            }`}
          >
            {label}
            <span className="lg:hidden">({count})</span>
            <span
              className={`hidden rounded-full px-2 py-0.5 text-[11px] font-bold tracking-[0.66px] lg:inline-block ${
                isActive
                  ? "bg-[#10B981] text-[#FFFFFF]"
                  : "bg-[#EAF4F0] border border-[#DDECE6] text-[#52665E]"
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

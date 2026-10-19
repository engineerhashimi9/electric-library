export default function CategoryTabs({ categories, counts, active, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2 lg:pt-2">
      {categories.map((c) => {
        const isActive = active === c;
        const count = counts[c] ?? 0;
        return (
          <button
            key={c}
            onClick={() => onChange(c)}
            aria-pressed={isActive}
            className={`flex items-center gap-2 rounded-full px-5 py-3 text-[15px] font-semibold transition active:scale-95 lg:px-4 lg:py-2 lg:text-[13px] lg:font-normal ${
              isActive
                ? "bg-[#07241a] text-white shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
                : "bg-[#efeeeb] text-[#424844] hover:bg-[#e4e2df] lg:bg-white lg:hover:-translate-y-0.5 lg:hover:shadow-sm"
            }`}
          >
            {c}
            <span className="lg:hidden">({count})</span>
            <span className={`hidden rounded-full px-2 py-0.5 text-[11px] font-bold tracking-[0.66px] lg:inline-block ${isActive ? "bg-white/20 text-white" : "bg-[#eae8e5] text-[#424844]"}`}>
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}

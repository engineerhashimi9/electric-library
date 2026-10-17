export default function CategoryTabs({ categories, counts, active, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2 pt-2">
      {categories.map((c) => {
        const isActive = active === c;
        return (
          <button
            key={c}
            onClick={() => onChange(c)}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-[13px] transition active:scale-95 ${
              isActive
                ? "bg-[#07241A] text-white shadow-sm"
                : "bg-white text-ink-soft hover:-translate-y-0.5 hover:bg-leaf-100 hover:text-leaf-950 hover:shadow-sm"
            }`}
          >
            {c}
            <span className={`rounded-full px-2 py-0.5 text-[11px] font-bold tracking-wide ${isActive ? "bg-white/20 text-white" : "bg-[#EAE8E5] text-ink-soft"}`}>
              {counts[c] ?? 0}
            </span>
          </button>
        );
      })}
    </div>
  );
}

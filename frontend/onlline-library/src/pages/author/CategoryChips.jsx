export default function CategoryChips({ categories, counts, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((c) => {
        const isActive = active === c;
        return (
          <button
            key={c}
            onClick={() => onChange(c)}
            className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-medium transition active:scale-95 ${
              isActive ? "bg-leaf-900 text-white shadow-md shadow-leaf-900/20" : "bg-leaf-100 text-ink-soft hover:bg-leaf-200 hover:text-leaf-950"
            }`}
          >
            {c}
            <span className={`rounded-full px-1.5 text-[10px] font-bold ${isActive ? "bg-white/20" : "bg-white/70"}`}>
              {counts[c] ?? 0}
            </span>
          </button>
        );
      })}
    </div>
  );
}

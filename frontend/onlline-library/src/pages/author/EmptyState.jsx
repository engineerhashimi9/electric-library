import { SearchX } from "lucide-react";

export default function EmptyState({ onReset }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl bg-leaf-50 px-6 py-16 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-leaf-700 shadow-sm">
        <SearchX className="h-5 w-5" />
      </span>
      <h3 className="font-serif text-[20px] text-leaf-950">No authors match your search</h3>
      <p className="text-[13px] text-ink-soft">Try a different name or clear the active filters.</p>
      <button onClick={onReset} className="rounded-lg bg-leaf-800 px-4 py-2 text-[12px] font-semibold text-white transition hover:bg-leaf-700 active:scale-95">
        Reset filters
      </button>
    </div>
  );
}

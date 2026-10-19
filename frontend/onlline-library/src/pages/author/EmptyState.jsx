import { SearchX } from "lucide-react";


export default function EmptyState({ onReset }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-3xl bg-[#f5f3f0] px-6 py-16 text-center md:py-24">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#9a4522] shadow-sm">
        <SearchX className="h-6 w-6" />
      </span>
      <h3 className={`text-[24px] text-[#07241a] md:text-[28px] `}>No authors match your search</h3>
      <p className="text-[14px] text-[#424844]">Try a different name or clear the active filters.</p>
      <button onClick={onReset} className="mt-2 rounded-xl bg-[#07241a] px-5 py-2.5 text-[13px] text-white transition hover:bg-[#1e3a2f] active:scale-95">
        Reset filters
      </button>
    </div>
  );
}

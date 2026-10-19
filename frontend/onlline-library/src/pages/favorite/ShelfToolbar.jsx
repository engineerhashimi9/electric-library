import { Cloud, ChevronDown, LayoutGrid, Rows3, ArrowDownWideNarrow } from "lucide-react";
import { sortOptions } from "./favorites";
// import { serif } from "../../styles/fonts";

export default function ShelfToolbar({ total, sort, onSort, view, onView, previewEmpty, onTogglePreview }) {
  return (
    <>
      {/* موبایل */}
      <div className="flex items-center justify-between gap-3 md:hidden">
        <div className="flex items-center gap-2.5">
          <p className="text-[12px] font-bold uppercase leading-[18px] tracking-[0.6px] text-[#424844]">
            {total} Saved<br />Works
          </p>
          <span className="h-1 w-1 rounded-full bg-[#c1c8c3]" />
          <button onClick={onTogglePreview} className="text-left text-[12px] font-bold leading-[18px] tracking-[0.5px] text-[#9a4522] underline decoration-[#9a4522]/40 underline-offset-4">
            {previewEmpty ? <>Exit Empty<br />State</> : <>Toggle Empty<br />State</>}
          </button>
        </div>

        <label className="relative flex min-w-[150px] items-center gap-3 rounded-xl bg-[#efeeeb] px-4 py-2.5 transition hover:bg-[#e4e2df]">
          <ArrowDownWideNarrow className="h-4 w-4 shrink-0 text-[#424844]" />
          <span className="flex-1 text-[14px] font-semibold leading-[18px] text-[#1b1c1a]">{sort}</span>
          <ChevronDown className="h-4 w-4 shrink-0 text-[#1b1c1a]" />
          <select value={sort} onChange={(e) => onSort(e.target.value)} aria-label="Sort by" className="absolute inset-0 h-full w-full cursor-pointer opacity-0">
            {sortOptions.map((o) => <option key={o}>{o}</option>)}
          </select>
        </label>
      </div>

      {/* تبلت و دسکتاپ */}
      <div className="hidden items-center justify-between gap-4 rounded-2xl bg-white px-5 py-3 shadow-[0_1px_1px_rgba(0,0,0,0.05)] md:flex">
        <div className="flex min-w-0 items-center gap-3">
          <h2 className={`whitespace-nowrap text-[20px] leading-7 text-[#07241a] `}>{total} Works Cataloged</h2>
          <span className="h-1 w-1 shrink-0 rounded-full bg-[#c1c8c3]" />
          <span className="hidden items-center gap-1 whitespace-nowrap text-[13px] text-[#424844] lg:flex">
            <Cloud className="h-3.5 w-3.5 text-[#9a4522]" /> Synchronized with Oxford Repository
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-4">
          <label className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.55px] text-[#424844]">SORT BY:</span>
            <span className="relative">
              <select
                value={sort}
                onChange={(e) => onSort(e.target.value)}
                className="cursor-pointer appearance-none rounded-lg bg-[#f5f3f0] py-1.5 pl-3 pr-9 text-[13px] text-[#1b1c1a] outline-none transition hover:bg-[#eae8e5] focus:ring-2 focus:ring-[#c1c8c3]"
              >
                {sortOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3 w-3 -translate-y-1/2 text-[#424844]" />
            </span>
          </label>
          <span className="h-5 w-px bg-[#e4e2df]" />
          <div className="flex rounded-lg bg-[#f5f3f0] p-0.5">
            {[["grid", LayoutGrid], ["list", Rows3]].map(([k, Icon]) => (
              <button
                key={k}
                onClick={() => onView(k)}
                aria-label={`${k} view`}
                className={`rounded-md p-1.5 transition ${view === k ? "bg-white text-[#07241a] shadow-sm" : "text-[#424844] hover:text-[#07241a]"}`}
              >
                <Icon className="h-3.5 w-3.5" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

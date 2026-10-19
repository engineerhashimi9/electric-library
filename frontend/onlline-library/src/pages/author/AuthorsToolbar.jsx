import { ChevronDown, LayoutGrid, Rows3, ArrowDownWideNarrow, Globe2 } from "lucide-react";
import { sortOptions, regions } from "./authors";


// دکمهٔ ظاهری + select نامرئی روی آن (برای ظاهر یکدست روی موبایل)
const MobileSelect = ({ icon: Icon, value, onChange, options, label }) => (
  <label className="relative flex min-w-0 flex-1 items-center gap-2.5 rounded-xl bg-[#efeeeb] px-3.5 py-2.5 transition hover:bg-[#e4e2df]">
    <Icon className="h-4 w-4 shrink-0 text-[#424844]" />
    <span className="min-w-0 flex-1 truncate text-[13px] font-semibold text-[#1b1c1a]">{value}</span>
    <ChevronDown className="h-4 w-4 shrink-0 text-[#1b1c1a]" />
    <select value={value} onChange={(e) => onChange(e.target.value)} aria-label={label} className="absolute inset-0 h-full w-full cursor-pointer opacity-0">
      {options.map((o) => <option key={o}>{o}</option>)}
    </select>
  </label>
);

const DesktopSelect = ({ label, value, onChange, options }) => (
  <label className="flex items-center gap-2">
    <span className="text-[11px] font-bold uppercase tracking-[0.55px] text-[#424844]">{label}</span>
    <span className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="cursor-pointer appearance-none rounded-lg bg-[#f5f3f0] py-1.5 pl-3 pr-9 text-[13px] text-[#1b1c1a] outline-none transition hover:bg-[#eae8e5] focus:ring-2 focus:ring-[#c1c8c3]"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3 w-3 -translate-y-1/2 text-[#424844]" />
    </span>
  </label>
);

export default function AuthorsToolbar({ shown, total, sort, onSort, region, onRegion, view, onView }) {
  return (
    <>
      {/* موبایل */}
      <div className="space-y-3 md:hidden">
        <p className="text-[12px] font-bold uppercase tracking-[0.6px] text-[#424844]">
          Showing {shown} of {total} authors
        </p>
        <div className="flex gap-2">
          <MobileSelect icon={Globe2} value={region} onChange={onRegion} options={regions} label="Region" />
          <MobileSelect icon={ArrowDownWideNarrow} value={sort} onChange={onSort} options={sortOptions} label="Sort by" />
        </div>
      </div>

      {/* تبلت و دسکتاپ */}
      <div className="hidden items-center justify-between gap-4 rounded-2xl bg-white px-5 py-3 shadow-[0_1px_1px_rgba(0,0,0,0.05)] md:flex">
        <div className="flex min-w-0 items-center gap-3">
          <h2 className={`whitespace-nowrap text-[20px] leading-7 text-[#07241a] `}>{total} Authors Cataloged</h2>
          <span className="h-1 w-1 shrink-0 rounded-full bg-[#c1c8c3]" />
          <span className="hidden whitespace-nowrap text-[13px] text-[#424844] lg:inline">Showing {shown} on this page</span>
        </div>

        <div className="flex shrink-0 items-center gap-4">
          <DesktopSelect label="REGION:" value={region} onChange={onRegion} options={regions} />
          <DesktopSelect label="SORT BY:" value={sort} onChange={onSort} options={sortOptions} />
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

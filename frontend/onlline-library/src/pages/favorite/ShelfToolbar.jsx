import { Cloud, ChevronDown, LayoutGrid, Rows3 } from "lucide-react";
import { sortOptions } from "./favorites";

export default function ShelfToolbar({ total, sort, onSort, view, onView }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white px-5 py-3 shadow-sm">
      <div className="flex items-center gap-3">
        <h2 className="font-serif text-[20px] leading-7 text-leaf-950">{total} Works Cataloged</h2>
        <span className="h-1 w-1 rounded-full bg-leaf-300" />
        <span className="flex items-center gap-1.5 text-[13px] text-ink-soft">
          <Cloud className="h-3.5 w-3.5" /> Synchronized with Oxford Repository
        </span>
      </div>

      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.05em] text-ink-soft">SORT BY:</span>
          <span className="relative">
            <select
              value={sort}
              onChange={(e) => onSort(e.target.value)}
              className="cursor-pointer appearance-none rounded-lg bg-leaf-50 py-1.5 pl-3 pr-9 text-[13px] text-leaf-950 outline-none transition hover:bg-leaf-100 focus:ring-2 focus:ring-leaf-300"
            >
              {sortOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
            <ChevronDown className="pointer-events-none absolute right-2.5 top-2.5 h-3 w-3 text-ink-soft" />
          </span>
        </label>

        <span className="h-5 w-px bg-leaf-100" />

        <div className="flex rounded-lg bg-leaf-50 p-0.5">
          {[["grid", LayoutGrid], ["list", Rows3]].map(([k, Icon]) => (
            <button
              key={k}
              onClick={() => onView(k)}
              aria-label={`${k} view`}
              className={`rounded-md p-1.5 transition ${view === k ? "bg-white text-leaf-950 shadow-sm" : "text-ink-soft hover:text-leaf-950"}`}
            >
              <Icon className="h-3.5 w-3.5" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

import { ChevronDown, LayoutGrid, Rows3 } from "lucide-react";
import { sortOptions } from "./authors";

export default function AuthorsToolbar({ shown, total, sort, onSort, view, onView }) {
  return (
    <div className="flex items-center justify-between text-[12px]">
      <span className="text-ink-soft">
        Showing <b className="text-leaf-950">{shown}</b> of {total} authors
      </span>

      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2 text-ink-soft">
          Sort by
          <span className="relative">
            <select
              value={sort}
              onChange={(e) => onSort(e.target.value)}
              className="cursor-pointer appearance-none rounded-lg bg-white py-2 pl-3 pr-8 font-medium text-leaf-950 ring-1 ring-leaf-100 outline-none transition hover:ring-leaf-300 focus:ring-2 focus:ring-leaf-400"
            >
              {sortOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
            <ChevronDown className="pointer-events-none absolute right-2.5 top-2.5 h-3.5 w-3.5 text-ink-soft" />
          </span>
        </label>

        <div className="flex gap-1 rounded-xl bg-leaf-50 p-1">
          {[["grid", LayoutGrid], ["list", Rows3]].map(([k, Icon]) => (
            <button
              key={k}
              onClick={() => onView(k)}
              aria-label={`${k} view`}
              className={`rounded-lg p-1.5 transition ${view === k ? "bg-white text-leaf-950 shadow-sm" : "text-ink-soft hover:text-leaf-950"}`}
            >
              <Icon className="h-4 w-4" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

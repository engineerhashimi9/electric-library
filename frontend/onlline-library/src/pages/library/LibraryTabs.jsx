import { LayoutGrid, Rows3 } from "lucide-react";
import { tabs } from "./library";

export default function LibraryTabs() {
  return (
    <div className="flex items-center justify-between overflow-auto pb-1">
      <div className="flex items-center gap-1 rounded-xl bg-[#F5F3F0] p-1.5">
        {tabs.map(({ label, count, active }) => (
          <button
            key={label}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-[13px] font-semibold tracking-wide ${
              active ? "bg-[#1E3A2F] text-white shadow-sm" : "text-ink-soft"
            }`}
          >
            {label}
            {count !== undefined && (
              <span
                className={`rounded-full px-1.5 py-0.5 text-[11px] font-bold ${
                  active ? "bg-leaf-950/40 text-white" : "bg-[#E4E2DF] text-ink-soft"
                }`}
              >
                {count}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-1 rounded-xl bg-leaf-50 p-1">
        <button className="rounded-lg bg-white p-1.5 text-leaf-950 shadow-sm"><LayoutGrid className="h-3.5 w-3.5" /></button>
        <button className="rounded-lg p-1.5 text-ink-soft"><Rows3 className="h-3.5 w-3.5" /></button>
      </div>
    </div>
  );
}

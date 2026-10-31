import { LayoutGrid, Rows3 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { tabs } from "./library";
import { getLocalized } from "../../utils/langHelper";

export default function LibraryTabs() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="flex items-center justify-between overflow-auto pb-1">
      <div className="flex items-center gap-1 rounded-xl bg-[#E6F4F3] border border-[#D0E8E6] p-1.5">
        {tabs.map(({ label, count, active }, idx) => {
          const text = getLocalized(label, lang);
          return (
            <button
              key={idx}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-[13px] font-semibold tracking-wide whitespace-nowrap transition-colors ${
                active
                  ? "bg-[#0E6760] text-[#FFFFFF] shadow-sm"
                  : "text-[#4A6B68] hover:text-[#0E6760]"
              }`}
            >
              {text}
              {count !== undefined && (
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[11px] font-bold ${
                    active
                      ? "bg-[#17A296] text-[#FFFFFF]"
                      : "bg-[#FFFFFF] border border-[#D0E8E6] text-[#4A6B68]"
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="hidden sm:flex items-center gap-1 rounded-xl bg-[#FFFFFF] border border-[#D0E8E6] p-1">
        <button className="rounded-lg bg-[#0E6760] p-1.5 text-[#FFFFFF] shadow-sm"><LayoutGrid className="h-3.5 w-3.5" /></button>
        <button className="rounded-lg p-1.5 text-[#4A6B68] hover:text-[#0E6760] transition-colors"><Rows3 className="h-3.5 w-3.5" /></button>
      </div>
    </div>
  );
}

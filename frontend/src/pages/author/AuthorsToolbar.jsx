import { ChevronDown, LayoutGrid, Rows3, ArrowDownWideNarrow, Globe2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { sortOptions, regions } from "./authors";

const regionNames = {
  "All Regions": { en: "All Regions", fa: "همه مناطق" },
  "Europe": { en: "Western Europe", fa: "اروپای غربی" },
  "Latin America": { en: "Latin America", fa: "آمریکای لاتین" },
  "North America": { en: "North America", fa: "آمریکای شمالی" },
  "Asia": { en: "East Asia", fa: "شرق آسیا" },
  "Persian & Afghan": { en: "Persian & Afghan", fa: "فارسی و افغانستانی" },
  "Classical World": { en: "Classical World", fa: "جهان کلاسیک" },
};

const sortNames = {
  "Most Works": { en: "Most Works", fa: "بیشترین آثار" },
  "Most Followed": { en: "Most Followed", fa: "بیشترین دنبال‌کننده" },
  "Name A–Z": { en: "Name A–Z", fa: "نام الف–ی" },
  "Birth Year": { en: "Birth Year", fa: "سال تولد" },
};

const MobileSelect = ({ icon: Icon, value, onChange, options, label, isFa, map }) => (
  <label className="relative flex min-w-0 flex-1 items-center gap-2 rounded-xl bg-[#FFFFFF] border border-[#D0E8E6] px-3 py-2.5 shadow-library-sm transition-all focus-within:border-[#17A296] focus-within:ring-2 focus-within:ring-[#17A296]/20">
    <Icon className="h-4 w-4 shrink-0 text-[#236D64]" aria-hidden="true" />
    <span className="min-w-0 flex-1 truncate text-xs sm:text-sm font-bold text-[#0E6760]">
      {map[value] ? (isFa ? map[value].fa : map[value].en) : value}
    </span>
    <ChevronDown className="h-4 w-4 shrink-0 text-[#236D64]" aria-hidden="true" />
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label={label}
      className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
    >
      {options.map((o) => (
        <option key={o} value={o} className="bg-[#FFFFFF] text-[#0E6760]">
          {map[o] ? (isFa ? map[o].fa : map[o].en) : o}
        </option>
      ))}
    </select>
  </label>
);

const DesktopSelect = ({ label, value, onChange, options, isFa, map }) => (
  <label className="flex items-center gap-2">
    <span className="text-xs font-bold uppercase tracking-wider text-[#236D64]">{label}</span>
    <span className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
        className="cursor-pointer appearance-none rounded-xl bg-[#E6F4F3] border border-[#D0E8E6] py-2 pl-3.5 pr-9 rtl:pr-3.5 rtl:pl-9 text-xs sm:text-sm font-bold text-[#0E6760] outline-none transition-all hover:border-[#17A296] focus:border-[#17A296] focus:ring-2 focus:ring-[#17A296]/20"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#FFFFFF] text-[#0E6760]">
            {map[o] ? (isFa ? map[o].fa : map[o].en) : o}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2.5 rtl:right-auto rtl:left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#236D64]" aria-hidden="true" />
    </span>
  </label>
);

export default function AuthorsToolbar({ shown, total, sort, onSort, region, onRegion, view, onView }) {
  const { t, i18n } = useTranslation();
  const isFa = i18n.language === "fa";

  return (
    <>
      <div className="space-y-3 md:hidden">
        <p className="text-xs font-bold uppercase tracking-wider text-[#4A6B68]">
          {t("authors.toolbar.showing", { shown, total })}
        </p>
        <div className="flex gap-2">
          <MobileSelect icon={Globe2} value={region} onChange={onRegion} options={regions} label="Region" isFa={isFa} map={regionNames} />
          <MobileSelect icon={ArrowDownWideNarrow} value={sort} onChange={onSort} options={sortOptions} label="Sort by" isFa={isFa} map={sortNames} />
        </div>
      </div>

      <div className="hidden items-center justify-between gap-4 rounded-2xl bg-[#FFFFFF] border border-[#D0E8E6] px-5 py-3.5 shadow-library-sm md:flex">
        <div className="flex min-w-0 items-center gap-3">
          <h2 className="whitespace-nowrap text-base lg:text-lg text-[#0E6760] font-extrabold leading-snug">
            {t("authors.toolbar.cataloged", { total })}
          </h2>
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D0E8E6]" />
          <span className="hidden whitespace-nowrap text-xs sm:text-sm text-[#4A6B68] font-medium lg:inline">
            {t("authors.toolbar.showingPage", { shown })}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-4">
          <DesktopSelect label={t("authors.toolbar.region")} value={region} onChange={onRegion} options={regions} isFa={isFa} map={regionNames} />
          <DesktopSelect label={t("authors.toolbar.sortBy")} value={sort} onChange={onSort} options={sortOptions} isFa={isFa} map={sortNames} />
          <span className="h-6 w-px bg-[#D0E8E6]" />
          <div role="group" aria-label="Layout switch" className="flex rounded-xl bg-[#E6F4F3] border border-[#D0E8E6] p-1">
            {[["grid", LayoutGrid, "Grid layout"], ["list", Rows3, "List layout"]].map(([k, Icon, label]) => (
              <button
                key={k}
                type="button"
                onClick={() => onView(k)}
                aria-label={label}
                aria-pressed={view === k}
                className={`rounded-lg p-1.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] ${view === k ? "bg-[#0E6760] text-[#FFFFFF] shadow-sm" : "text-[#4A6B68] hover:text-[#0E6760]"}`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

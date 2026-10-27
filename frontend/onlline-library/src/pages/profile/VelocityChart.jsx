import { useState } from "react";
import { Moon } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionHeading from "@/component/ui/SectionHeading";
import { chartRanges, velocityMeta } from "./profile";

const rangeLabels = {
  "2024 (Annual)": { en: "2024 (Annual)", fa: "۲۰۲۴ (سالانه)" },
  Trimester: { en: "Trimester", fa: "چهارماهه" },
  Weekly: { en: "Weekly", fa: "هفتگی" },
};

const fmt = (v) => (v >= 1000 ? `${(v / 1000).toFixed(1)}k` : v);

function RangeSwitch({ range, onRange, isFa }) {
  return (
    <div className="flex flex-wrap w-fit max-w-full rounded-xl bg-[#EAF4F0] border border-[#DDECE6] p-1 gap-1">
      {chartRanges.map((r) => (
        <button
          key={r}
          onClick={() => onRange(r)}
          aria-pressed={range === r}
          className={`rounded-lg px-2.5 sm:px-3 py-1 text-[11px] sm:text-[12px] transition ${
            range === r
              ? "bg-[#09261C] font-bold text-[#FFFFFF] shadow-sm"
              : "text-[#52665E] hover:text-[#09261C]"
          }`}
        >
          {rangeLabels[r] ? (isFa ? rangeLabels[r].fa : rangeLabels[r].en) : r}
        </button>
      ))}
    </div>
  );
}

export default function VelocityChart({ range, onRange, series = [] }) {
  const { i18n } = useTranslation();
  const isFa = i18n.language === "fa";
  const [hover, setHover] = useState(null);

  const safeSeries = Array.isArray(series) && series.length > 0 ? series : [];
  const max = safeSeries.length > 0 ? Math.max(...safeSeries.map((d) => d.value || 0)) : 1;
  const peak = safeSeries.findIndex((d) => d.value === max);
  const active = hover ?? peak;
  const wide = safeSeries.length <= 7;

  const barColor = (d, i) =>
    i === peak
      ? "bg-[#10B981]"
      : d.state === "current"
        ? "bg-[#09261C]"
        : d.state === "future"
          ? "bg-[#DDECE6]"
          : "bg-[#EAF4F0] hover:bg-[#6B9080]/30";

  return (
    <div className="flex flex-col rounded-2xl bg-white border border-[#DDECE6] p-5 shadow-[0_1px_1px_rgba(0,0,0,0.05)] sm:p-6 lg:col-span-8 lg:p-8">
      <div className="flex flex-col gap-4 pb-6 sm:flex-row sm:items-center sm:justify-between lg:pb-8">
        <SectionHeading
          eyebrow={isFa ? "سرعت مطالعه" : "READING VELOCITY"}
          title={isFa ? "صفحات مطالعه‌شده در طول زمان" : "Pages Ingested Over Time"}
        />
        <RangeSwitch range={range} onRange={onRange} isFa={isFa} />
      </div>

      {/* bars */}
      <div
        className="flex h-[220px] items-stretch gap-1.5 pt-8 sm:h-[300px] sm:gap-2 lg:h-[320px]"
        onMouseLeave={() => setHover(null)}
      >
        {safeSeries.map((d, i) => {
          const pct = Math.max(4, ((d.value || 0) / max) * 100);
          return (
            <div
              key={d.label || i}
              onMouseEnter={() => setHover(i)}
              onFocus={() => setHover(i)}
              tabIndex={0}
              className="group relative flex min-w-0 flex-1 cursor-pointer flex-col outline-none"
            >
              <div className="relative flex flex-1 items-end justify-center">
                <div
                  className={`w-full rounded-t-lg transition-all duration-300 ${wide ? "max-w-[120px]" : "max-w-[52px]"} ${barColor(d, i)}`}
                  style={{ height: `${pct}%` }}
                />
                {active === i && (
                  <span
                    className="pointer-events-none absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#09261C] px-2 py-0.5 text-[12px] text-white shadow-md sm:text-[14px]"
                    style={{ bottom: `calc(${pct}% + 8px)` }}
                  >
                    {fmt(d.value)}
                  </span>
                )}
              </div>
              <span
                className={`mt-2 truncate text-center text-[10px] tracking-[0.5px] sm:text-[11px] ${
                  i === peak || d.state === "current"
                    ? "font-bold text-[#09261C]"
                    : "font-medium text-[#52665E]"
                }`}
              >
                {d.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* footer ribbon */}
      <div className="mt-6 flex flex-col gap-4 rounded-xl bg-[#EAF4F0] border border-[#DDECE6] p-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#10B981] shadow-sm">
            <Moon className="h-5 w-5" />
          </span>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.8px] text-[#6B9080] lg:text-[12px]">
              {isFa ? "ساعات اوج مطالعه" : "PEAK READING WINDOW"}
            </p>
            <p className="text-[14px] font-semibold text-[#09261C] sm:text-[15px] lg:text-[16px]">
              {velocityMeta.peakWindow}
            </p>
          </div>
        </div>

        <div className="w-full lg:max-w-[420px]">
          <div className="mb-1.5 flex flex-wrap items-center justify-between gap-x-3 text-[12px]">
            <span className="font-medium text-[#52665E]">
              {isFa ? "نسبت فرمت‌های مطالعه" : "Format Ingestion Ratio"}
            </span>
            <span className="font-semibold text-[#09261C]">
              {velocityMeta.formats
                .map((f) => `${f.pct}% ${f.label}`)
                .join(" • ")}
            </span>
          </div>
          <div className="flex h-2.5 overflow-hidden rounded-full bg-[#DDECE6]">
            {velocityMeta.formats.map((f) => (
              <div
                key={f.label}
                className="h-full"
                style={{ width: `${f.pct}%`, background: f.color }}
                title={`${f.label} ${f.pct}%`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

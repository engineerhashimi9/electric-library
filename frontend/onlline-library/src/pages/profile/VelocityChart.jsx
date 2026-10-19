import { useState } from "react";
import { Moon } from "lucide-react";
import SectionHeading from "@/component/ui/SectionHeading";
import { chartRanges, velocityMeta } from "./profile";

const fmt = (v) => (v >= 1000 ? `${(v / 1000).toFixed(1)}k` : v);

function RangeSwitch({ range, onRange }) {
  return (
    <div className="flex w-fit rounded-xl bg-[#efeeeb] p-1">
      {chartRanges.map((r) => (
        <button
          key={r}
          onClick={() => onRange(r)}
          aria-pressed={range === r}
          className={`rounded-lg px-3 py-1 text-[12px] transition ${range === r ? "bg-white font-semibold text-[#07241a] shadow-sm" : "text-[#424844] hover:text-[#07241a]"}`}
        >
          {r}
        </button>
      ))}
    </div>
  );
}

export default function VelocityChart({ range, onRange, series }) {
  const [hover, setHover] = useState(null);
  const max = Math.max(...series.map((d) => d.value));
  const peak = series.findIndex((d) => d.value === max);
  const active = hover ?? peak;
  const wide = series.length <= 7;

  const barColor = (d, i) =>
    i === peak
      ? "bg-[#07241a]"
      : d.state === "current"
        ? "bg-[#9a4522]"
        : d.state === "future"
          ? "bg-[#e4e2df]"
          : "bg-[#efeeeb] group-hover:bg-[#d9d6d2]";

  return (
    <div className="flex flex-col rounded-2xl bg-white p-5 shadow-[0_1px_1px_rgba(0,0,0,0.05)] sm:p-6 lg:col-span-8 lg:p-8">
      <div className="flex flex-col gap-4 pb-6 sm:flex-row sm:items-center sm:justify-between lg:pb-8">
        <SectionHeading
          eyebrow="READING VELOCITY"
          title="Pages Ingested Over Time"
        />
        <RangeSwitch range={range} onRange={onRange} />
      </div>

      {/* bars */}
      <div
        className="flex h-[220px] items-stretch gap-1.5 pt-8 sm:h-[300px] sm:gap-2 lg:h-[320px]"
        onMouseLeave={() => setHover(null)}
      >
        {series.map((d, i) => {
          const pct = Math.max(4, (d.value / max) * 100);
          return (
            <div
              key={d.label}
              onMouseEnter={() => setHover(i)}
              onFocus={() => setHover(i)}
              tabIndex={0}
              className="group relative flex min-w-0 flex-1 cursor-pointer flex-col outline-none"
            >
              <div className="relative flex flex-1 items-end justify-center">
                <div
                  className={`w-full rounded-t-lg transition-all duration-500 ${wide ? "max-w-[120px]" : "max-w-[52px]"} ${barColor(d, i)}`}
                  style={{ height: `${pct}%` }}
                />
                {active === i && (
                  <span
                    className="pointer-events-none absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#07241a] px-2 py-0.5 text-[12px] text-white shadow-[0_1px_1px_rgba(0,0,0,0.05)] sm:text-[14px] lg:text-[16px]"
                    style={{ bottom: `calc(${pct}% + 8px)` }}
                  >
                    {fmt(d.value)}
                  </span>
                )}
              </div>
              <span
                className={`mt-2 truncate text-center text-[10px] tracking-[0.66px] sm:text-[11px] ${i === peak || d.state === "current" ? "font-bold text-[#07241a]" : "font-bold text-[#4a5568]"}`}
              >
                {d.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* footer ribbon */}
      <div className="mt-6 flex flex-col gap-4 rounded-xl bg-[#f5f3f0] p-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#9a4522]">
            <Moon className="h-4 w-4" />
          </span>
          <div>
            <p className="text-[11px] uppercase tracking-[0.8px] text-[#727974] lg:text-[12px]">
              PEAK READING WINDOW
            </p>
            <p className="text-[15px] font-semibold tracking-[-0.09px] text-[#07241a] lg:text-[18px] lg:leading-[26px]">
              {velocityMeta.peakWindow}
            </p>
          </div>
        </div>

        <div className="w-full lg:max-w-[429px]">
          <div className="mb-1.5 flex flex-wrap items-center justify-between gap-x-3 text-[12px]">
            <span className="font-medium text-[#424844]">
              Format Ingestion Ratio
            </span>
            <span className="font-semibold text-[#07241a]">
              {velocityMeta.formats
                .map((f) => `${f.pct}% ${f.label}`)
                .join(" • ")}
            </span>
          </div>
          <div className="flex h-2.5 overflow-hidden rounded-full bg-[#e4e2df]">
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

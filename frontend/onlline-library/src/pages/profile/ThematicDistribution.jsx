import { useState } from "react";
import { Layers } from "lucide-react";
import SectionHeading from "@/component/ui/SectionHeading";
import ProgressBar from "@/component/ui/ProgressBar";
import { genres } from "./profile";

export default function ThematicDistribution() {
  const [hover, setHover] = useState(null);
  return (
    <div className="flex flex-col rounded-2xl bg-white p-5 shadow-[0_1px_1px_rgba(0,0,0,0.05)] sm:p-6 lg:col-span-4 lg:p-8">
      <SectionHeading eyebrow="CANON AFFINITY" title="Thematic Distribution" />

      <div className="flex flex-1 flex-col gap-6 pt-6" onMouseLeave={() => setHover(null)}>
        {genres.map((g, i) => (
          <div
            key={g.name}
            onMouseEnter={() => setHover(i)}
            className={`space-y-1 transition-opacity duration-200 ${hover !== null && hover !== i ? "opacity-45" : "opacity-100"}`}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="flex min-w-0 items-center gap-2">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: g.color }} />
                <span className="truncate text-[14px] font-medium text-[#07241a] lg:text-[15px] lg:leading-6">{g.name}</span>
              </span>
              <span className="text-[13px] font-semibold tracking-[0.39px] text-[#07241a]">{g.pct}%</span>
            </div>
            <ProgressBar percent={g.pct} color={g.color} height="h-2" />
            <p className="text-[12px] leading-5 text-[#727974] lg:text-[13px]">{g.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-3 rounded-xl bg-[#f5f3f0] p-4">
        <span className="flex items-center gap-2.5 text-[11px] font-semibold uppercase leading-[14px] tracking-[0.66px] text-[#424844]">
          <Layers className="h-4 w-4 shrink-0 text-[#9a4522]" />
          DIVERSITY<br />INDEX
        </span>
        <span className="text-right text-[13px] font-bold leading-4 tracking-[0.39px] text-[#07241a]">0.86 / 1.0 (High<br />Depth)</span>
      </div>
    </div>
  );
}

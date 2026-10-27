import { useState } from "react";
import { Layers } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionHeading from "@/component/ui/SectionHeading";
import ProgressBar from "@/component/ui/ProgressBar";
import { genres } from "./profile";

const genreNames = {
  "Dark Academia & Gothic": { en: "Dark Academia & Gothic", fa: "آکادمی تاریک و گوتیک" },
  "Literary Fiction": { en: "Literary Fiction", fa: "ادبیات داستانی" },
  "Stoic & Ancient Philosophy": { en: "Stoic & Ancient Philosophy", fa: "فلسفه کهن و رواقی" },
  "Historical Chronicles": { en: "Historical Chronicles", fa: "روایت‌های تاریخی" },
};

export default function ThematicDistribution() {
  const [hover, setHover] = useState(null);
  const { t, i18n } = useTranslation();
  const isFa = i18n.language === "fa";

  return (
    <div className="flex flex-col rounded-2xl bg-[#FFFFFF] border border-[#DDECE6] p-5 shadow-sm sm:p-6 lg:col-span-4 lg:p-8 text-[#111C18]">
      <SectionHeading eyebrow="CANON AFFINITY" title={t("profile.thematic.title")} />

      <div className="flex flex-1 flex-col gap-6 pt-6" onMouseLeave={() => setHover(null)}>
        {genres.map((g, i) => {
          const locName = genreNames[g.name] ? (isFa ? genreNames[g.name].fa : genreNames[g.name].en) : g.name;

          return (
            <div
              key={g.name}
              onMouseEnter={() => setHover(i)}
              className={`space-y-1 transition-opacity duration-200 ${hover !== null && hover !== i ? "opacity-45" : "opacity-100"}`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="flex min-w-0 items-center gap-2">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: g.color }} />
                  <span className="truncate text-[14px] font-medium text-[#09261C] lg:text-[15px] lg:leading-6">{locName}</span>
                </span>
                <span className="text-[13px] font-bold tracking-[0.39px] text-[#09261C]">{g.pct}%</span>
              </div>
              <ProgressBar percent={g.pct} color={g.color} height="h-2" />
              <p className="text-[12px] leading-5 text-[#52665E] lg:text-[13px]">{g.note}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-between gap-3 rounded-xl bg-[#EAF4F0] border border-[#DDECE6] p-4">
        <span className="flex items-center gap-2.5 text-[11px] font-bold uppercase leading-[14px] tracking-[0.66px] text-[#6B9080]">
          <Layers className="h-4 w-4 shrink-0 text-[#10B981]" />
          {t("profile.thematic.diversityIndex")}
        </span>
        <span className="text-right rtl:text-left text-[13px] font-bold leading-4 tracking-[0.39px] text-[#09261C]">
          {t("profile.thematic.diversityScore")}
        </span>
      </div>
    </div>
  );
}

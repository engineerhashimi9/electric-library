import { Hourglass, BookOpen, Flame, PenLine, TrendingUp, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const icons = { hourglass: Hourglass, book: BookOpen, flame: Flame, pen: PenLine, trend: TrendingUp, check: CheckCircle2 };
const tones = { accent: "text-[#10B981] font-bold", dark: "text-[#09261C] font-bold", muted: "text-[#52665E]" };

const statLabels = {
  time: "cumulativeTime",
  vols: "volumesRead",
  streak: "activeStreak",
  notes: "marginaliaNotes",
};

const statFooters = {
  time: "trimesterTrend",
  vols: "pacing",
  streak: "streakAchieved",
  notes: "citationsCross",
};

const statUnits = {
  time: { en: "hrs", fa: "ساعت" },
  vols: { en: "vols", fa: "جلد" },
  streak: { en: "days", fa: "روز" },
  notes: { en: "notes", fa: "یادداشت" },
};

export default function StatCard({ stat }) {
  const { t, i18n } = useTranslation();
  const isFa = i18n.language === "fa";

  const { id, label, icon, value, unit, footer } = stat;
  const Icon = icons[icon];
  const FooterIcon = footer.icon ? icons[footer.icon] : null;

  const locLabel = statLabels[id] ? t(statLabels[id]) : label;
  const locFooterText = statFooters[id] ? t(statFooters[id]) : footer.text;
  const locUnit = statUnits[id] ? (isFa ? statUnits[id].fa : statUnits[id].en) : unit;

  return (
    <div className="flex flex-col  gap-7 rounded-2xl bg-[#FFFFFF] border border-[#E2EFEA]  p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 sm:p-5 lg:h-[199px] lg:p-3 text-[#111C18]">
      <div className="flex items-center justify-between gap-2">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#EAF4F0] border border-[#DDECE6] text-[#10B981] lg:h-9 lg:w-9">
          <Icon className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
        </span>
        <p className="text-[10px] uppercase leading-4 tracking-[1px] text-[#6B9080] font-bold sm:text-[12px] lg:text-[10px] lg:leading-2 lg:tracking-[1.6px]">{locLabel}</p>
      
      </div>

      <div className="flex flex-col gap-2">
        <p className="flex items-baseline gap-2">
            <span className="text-[40px] leading-[44px] tracking-[-0.8px] text-[#09261C] font-bold sm:text-[48px] sm:leading-[52px] lg:text-[40px] lg:leading-[56px] lg:tracking-[-1.12px]">{value}</span>
          <span className="text-[16px] text-[#52665E] lg:text-[20px] lg:leading-7">{locUnit}</span>
        </p>
        <p className={`mt-2 flex items-center gap-1 text-[12px] leading-5 lg:text-[13px] ${tones[footer.tone]}`}>
          {FooterIcon && <FooterIcon className="h-3 w-3 shrink-0" />} {locFooterText}
        </p>
      </div>
    </div>
  );
}

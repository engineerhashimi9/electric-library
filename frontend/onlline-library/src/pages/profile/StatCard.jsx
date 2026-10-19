import { Hourglass, BookOpen, Flame, PenLine, TrendingUp, CheckCircle2 } from "lucide-react";


const icons = { hourglass: Hourglass, book: BookOpen, flame: Flame, pen: PenLine, trend: TrendingUp, check: CheckCircle2 };
const tones = { accent: "text-[#9a4522] font-medium", dark: "text-[#07241a] font-medium", muted: "text-[#4a5568]" };

export default function StatCard({ stat }) {
  const { label, icon, value, unit, footer } = stat;
  const Icon = icons[icon];
  const FooterIcon = footer.icon ? icons[footer.icon] : null;

  return (
    <div className="flex flex-col justify-between gap-4 rounded-2xl bg-white p-4 shadow-[0_1px_1px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#07241a]/5 sm:p-5 lg:h-[199px] lg:p-6">
      <div className="flex items-start justify-between gap-2">
        <p className="text-[10px] uppercase leading-4 tracking-[1px] text-[#424844] sm:text-[12px] lg:text-[16px] lg:leading-6 lg:tracking-[1.6px]">{label}</p>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#efeeeb] text-[#07241a] lg:h-9 lg:w-9">
          <Icon className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
        </span>
      </div>

      <div>
        <p className={`flex items-baseline gap-2 `}>
          <span className="text-[40px] leading-[44px] tracking-[-0.8px] text-[#07241a] sm:text-[48px] sm:leading-[52px] lg:text-[56px] lg:leading-[56px] lg:tracking-[-1.12px]">{value}</span>
          <span className="text-[16px] text-[#424844] lg:text-[20px] lg:leading-7">{unit}</span>
        </p>
        <p className={`mt-2 flex items-center gap-1 text-[12px] leading-5 lg:text-[13px] ${tones[footer.tone]}`}>
          {FooterIcon && <FooterIcon className="h-3 w-3 shrink-0" />} {footer.text}
        </p>
      </div>
    </div>
  );
}

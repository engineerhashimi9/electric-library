import { PenLine, Medal, Moon, Trophy } from "lucide-react";
import ProgressBar from "@/component/ui/ProgressBar";

const icons = { pen: PenLine, medal: Medal, moon: Moon, trophy: Trophy };
const pill = {
  neutral: "bg-[#EAF4F0] border border-[#DDECE6] text-[#0D5C46]",
  rare: "bg-[#09261C] text-[#FFFFFF]",
};
const result = { dark: "text-[#09261C]", accent: "text-[#10B981]" };

export default function HonorCard({ honor }) {
  const { icon, pill: pillText, pillTone, title, desc, date, result: res, resultTone, progress } = honor;
  const Icon = icons[icon];
  return (
    <article className="group flex flex-col rounded-2xl bg-[#FFFFFF] border border-[#E2EFEA] hover:border-[#10B981] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg lg:p-6 text-[#111C18]">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF4F0] border border-[#DDECE6] text-[#10B981] transition group-hover:bg-[#10B981] group-hover:text-[#FFFFFF]">
        <Icon className="h-[18px] w-[18px]" />
      </span>

      <div className="mt-5 flex flex-1 flex-col gap-2.5">
        <span className={`w-fit rounded-full px-2.5 py-0.5 text-[10px] uppercase leading-[15px] tracking-[0.25px] font-semibold ${pill[pillTone]}`}>{pillText}</span>
        <h3 className="text-[20px] leading-7 text-[#09261C] font-sans font-bold">{title}</h3>
        <p className="text-[13px] leading-[21px] text-[#52665E]">{desc}</p>
      </div>

      <div className="mt-5 pt-4">
        {progress ? (
          <div className="space-y-1.5">
            <ProgressBar percent={(progress.value / progress.total) * 100} height="h-1.5" bgColor="#10B981" />
            <div className="flex items-center justify-between text-[12px]">
              <span className="text-[#52665E]">{progress.value} of {progress.total}</span>
              <span className="font-bold text-[#09261C]">{progress.total - progress.value} to go</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-2 text-[12px]">
            <span className="text-[#52665E]">{date}</span>
            <span className={`font-bold ${result[resultTone]}`}>{res}</span>
          </div>
        )}
      </div>
    </article>
  );
}

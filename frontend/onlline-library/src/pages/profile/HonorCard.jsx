import { PenLine, Medal, Moon, Trophy } from "lucide-react";
import ProgressBar from "@/component/ui/ProgressBar";


const icons = { pen: PenLine, medal: Medal, moon: Moon, trophy: Trophy };
const pill = { neutral: "bg-[#eae8e5] text-[#07241a]", rare: "bg-[#ffdbcf] text-[#380d00]" };
const result = { dark: "text-[#07241a]", accent: "text-[#9a4522]" };

export default function HonorCard({ honor }) {
  const { icon, pill: pillText, pillTone, title, desc, date, result: res, resultTone, progress } = honor;
  const Icon = icons[icon];
  return (
    <article className="group flex flex-col rounded-2xl bg-white p-5 shadow-[0_1px_1px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#07241a]/10 lg:p-6">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5f3f0] text-[#07241a] transition group-hover:bg-[#07241a] group-hover:text-white">
        <Icon className="h-[18px] w-[18px]" />
      </span>

      <div className="mt-5 flex flex-1 flex-col gap-2.5">
        <span className={`w-fit rounded-full px-2.5 py-0.5 text-[10px] uppercase leading-[15px] tracking-[0.25px] ${pill[pillTone]}`}>{pillText}</span>
        <h3 className={`text-[20px] leading-7 text-[#07241a] `}>{title}</h3>
        <p className="text-[13px] leading-[21px] text-[#424844]">{desc}</p>
      </div>

      <div className="mt-5 pt-4">
        {progress ? (
          <div className="space-y-1.5">
            <ProgressBar percent={(progress.value / progress.total) * 100} height="h-1.5" />
            <div className="flex items-center justify-between text-[12px]">
              <span className="text-[#4a5568]">{progress.value} of {progress.total}</span>
              <span className="font-bold text-[#07241a]">{progress.total - progress.value} to go</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-2 text-[12px]">
            <span className="text-[#4a5568]">{date}</span>
            <span className={`font-bold ${result[resultTone]}`}>{res}</span>
          </div>
        )}
      </div>
    </article>
  );
}

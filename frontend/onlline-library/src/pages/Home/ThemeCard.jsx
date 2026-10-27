// src/pages/home/ThemeCard.jsx
import { useTranslation } from "react-i18next";
import { getLocalized } from "@/utils/langHelper";

export default function ThemeCard({ theme }) {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="flex flex-col justify-center gap-2.5 rounded-xl items-center p-4 bg-[#FFFFFF] border border-[#E2EFEA] hover:border-[#10B981] hover:bg-[#EAF4F0] w-full min-h-[140px] md:h-[162px] transition-all hover:-translate-y-1 shadow-sm">
      <div className="flex justify-center items-center rounded-xl bg-[#EAF4F0] border border-[#DDECE6] w-11 h-11 md:w-12 md:h-12 shrink-0">
        <img
          className="w-5"
          src={theme.icon}
          alt={getLocalized(theme.name, lang)}
        />
      </div>
      <h5 className="text-[#111C18] font-bold text-xs sm:text-sm text-center line-clamp-1">
        {getLocalized(theme.name, lang)}
      </h5>
      <span className="text-[#52665E] text-[11px] sm:text-xs font-medium text-center">
        {getLocalized(theme.works, lang)}
      </span>
    </div>
  );
}
import { SearchX } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function EmptyState({ onReset }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-3 rounded-3xl bg-[#FFFFFF] border border-[#DDECE6] px-6 py-16 text-center md:py-24 text-[#111C18]">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF4F0] border border-[#DDECE6] text-[#10B981] shadow-sm">
        <SearchX className="h-6 w-6" />
      </span>
      <h3 className="text-[24px] text-[#09261C] font-sans font-bold md:text-[28px]">
        {t("authors.empty.title")}
      </h3>
      <p className="text-[14px] text-[#52665E]">
        {t("authors.empty.desc")}
      </p>
      <button onClick={onReset} className="mt-2 rounded-xl bg-[#10B981] hover:bg-[#09261C] px-5 py-2.5 text-[13px] font-bold text-[#FFFFFF] transition active:scale-95">
        {t("authors.empty.reset")}
      </button>
    </div>
  );
}

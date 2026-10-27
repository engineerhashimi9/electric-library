import { SearchX } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function EmptyState({ onReset }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-3 rounded-3xl bg-[#FFFFFF] border border-[#D0E8E6] px-6 py-16 text-center md:py-24 text-[#0A2E2C]">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E6F4F3] border border-[#D0E8E6] text-[#17A296] shadow-sm">
        <SearchX className="h-6 w-6" />
      </span>
      <h3 className="text-[24px] text-[#0E6760] font-sans font-bold md:text-[28px]">
        {t("authors.empty.title")}
      </h3>
      <p className="text-[14px] text-[#4A6B68]">
        {t("authors.empty.desc")}
      </p>
      <button onClick={onReset} className="mt-2 rounded-xl bg-[#17A296] hover:bg-[#0E6760] px-5 py-2.5 text-[13px] font-bold text-[#FFFFFF] transition active:scale-95">
        {t("authors.empty.reset")}
      </button>
    </div>
  );
}

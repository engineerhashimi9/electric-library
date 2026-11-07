import { SearchX } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function EmptyState({ onReset }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl bg-[#FFFFFF] border border-[#D0E8E6] px-6 py-16 text-center md:py-24 text-[#0A2E2C] shadow-library-sm">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E6F4F3] border border-[#D0E8E6] text-[#17A296] shadow-sm">
        <SearchX className="h-8 w-8" aria-hidden="true" />
      </span>
      <h3 className="text-xl sm:text-2xl lg:text-3xl text-[#0E6760] font-extrabold tracking-tight">
        {t("authors.empty.title")}
      </h3>
      <p className="max-w-md text-xs sm:text-sm leading-relaxed text-[#4A6B68] font-medium">
        {t("authors.empty.desc")}
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-2 rounded-xl bg-[#17A296] hover:bg-[#0E6760] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#FFFFFF] transition-all shadow-library-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
      >
        {t("authors.empty.reset")}
      </button>
    </div>
  );
}

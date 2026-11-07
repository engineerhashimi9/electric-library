import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ActionButton({ onClick, className = "" }) {
  const { i18n, t } = useTranslation();
  const isFa = i18n.language === "fa";

  const label = isFa ? "دانلود کتاب" : t("bookCard.download", "Download");
  const mobileLabel = isFa ? "دانلود" : t("bookCard.download", "Download");

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-xl bg-[#17A296] text-[#FFFFFF] hover:bg-[#0E6760] px-4 py-2.5 text-xs sm:text-sm font-bold transition-all active:scale-95 shadow-library-sm hover:shadow-library focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] ${className}`}
    >
      <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span className="truncate">
        <span className="sm:hidden">{mobileLabel}</span>
        <span className="hidden sm:inline">{label}</span>
      </span>
    </button>
  );
}

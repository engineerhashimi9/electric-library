import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ActionButton({ onClick, className = "" }) {
  const { i18n, t } = useTranslation();
  const isFa = i18n.language === "fa";

  const label = isFa ? "دانلود کتاب" : t("bookCard.download", "Download");
  const mobileLabel = isFa ? "دانلود" : t("bookCard.download", "Download");

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-xl bg-[#17A296] text-[#FFFFFF] hover:bg-[#0E6760] px-3 py-2.5 text-[14px] font-bold transition-all active:scale-95 sm:px-4 sm:text-[13px] sm:font-semibold shadow-sm ${className}`}
    >
      <Download className="h-4 w-4 shrink-0 sm:h-3.5 sm:w-3.5" />
      <span className="truncate">
        <span className="sm:hidden">{mobileLabel}</span>
        <span className="hidden sm:inline">{label}</span>
      </span>
    </button>
  );
}

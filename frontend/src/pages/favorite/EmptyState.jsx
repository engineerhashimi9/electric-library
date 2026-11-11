import { HeartOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function EmptyState({ preview, onExitPreview }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl bg-[#FFFFFF] border border-[#D0E8E6] px-6 py-16 text-center md:py-24 text-[#0A2E2C] shadow-library-sm">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E6F4F3] border border-[#D0E8E6] text-[#17A296] shadow-sm">
        <HeartOff className="h-8 w-8" aria-hidden="true" />
      </span>
      <h3 className="text-xl sm:text-2xl lg:text-3xl text-[#0E6760] font-extrabold tracking-tight">
        {t("favorites.empty.title")}
      </h3>
      <p className="max-w-md text-xs sm:text-sm leading-relaxed text-[#4A6B68] font-medium">
        {t("favorites.empty.desc")}
      </p>
      <div className="flex flex-wrap justify-center gap-3 pt-2">
        <Link
          to="/explorebooks"
          className="rounded-xl bg-[#17A296] hover:bg-[#0E6760] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#FFFFFF] transition-all shadow-library-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
        >
          {t("favorites.empty.exploreBtn")}
        </Link>
        {preview && (
          <button
            type="button"
            onClick={onExitPreview}
            className="rounded-xl bg-[#FFFFFF] border border-[#D0E8E6] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#0E6760] hover:bg-[#E6F4F3] shadow-library-sm transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
          >
            {t("favorites.empty.exitPreview")}
          </button>
        )}
      </div>
    </div>
  );
}

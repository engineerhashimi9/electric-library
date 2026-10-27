import { HeartOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function EmptyState({ preview, onExitPreview }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl bg-[#FFFFFF] border border-[#D0E8E6] px-6 py-16 text-center md:py-24 text-[#0A2E2C]">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E6F4F3] border border-[#D0E8E6] text-[#17A296] shadow-sm md:h-16 md:w-16">
        <HeartOff className="h-6 w-6 md:h-7 md:w-7" />
      </span>
      <h3 className="text-[24px] text-[#0E6760] font-sans font-bold md:text-[28px]">
        {t("favorites.empty.title")}
      </h3>
      <p className="max-w-[420px] text-[14px] leading-relaxed text-[#4A6B68]">
        {t("favorites.empty.desc")}
      </p>
      <div className="flex flex-wrap justify-center gap-3 pt-2">
        <Link to="/explorebooks" className="rounded-xl bg-[#17A296] hover:bg-[#0E6760] px-5 py-2.5 text-[13px] font-bold text-[#FFFFFF] transition active:scale-95">
          {t("favorites.empty.exploreBtn")}
        </Link>
        {preview && (
          <button onClick={onExitPreview} className="rounded-xl bg-[#FFFFFF] border border-[#D0E8E6] px-5 py-2.5 text-[13px] font-semibold text-[#0E6760] hover:bg-[#E6F4F3] shadow-sm transition active:scale-95">
            {t("favorites.empty.exitPreview")}
          </button>
        )}
      </div>
    </div>
  );
}

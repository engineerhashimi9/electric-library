import { HeartOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function EmptyState({ preview, onExitPreview }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl bg-[#FFFFFF] border border-[#DDECE6] px-6 py-16 text-center md:py-24 text-[#111C18]">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF4F0] border border-[#DDECE6] text-[#10B981] shadow-sm md:h-16 md:w-16">
        <HeartOff className="h-6 w-6 md:h-7 md:w-7" />
      </span>
      <h3 className="text-[24px] text-[#09261C] font-sans font-bold md:text-[28px]">
        {t("favorites.empty.title")}
      </h3>
      <p className="max-w-[420px] text-[14px] leading-relaxed text-[#52665E]">
        {t("favorites.empty.desc")}
      </p>
      <div className="flex flex-wrap justify-center gap-3 pt-2">
        <Link to="/explorebooks" className="rounded-xl bg-[#10B981] hover:bg-[#09261C] px-5 py-2.5 text-[13px] font-bold text-[#FFFFFF] transition active:scale-95">
          {t("favorites.empty.exploreBtn")}
        </Link>
        {preview && (
          <button onClick={onExitPreview} className="rounded-xl bg-[#FFFFFF] border border-[#DDECE6] px-5 py-2.5 text-[13px] font-semibold text-[#09261C] hover:bg-[#EAF4F0] shadow-sm transition active:scale-95">
            {t("favorites.empty.exitPreview")}
          </button>
        )}
      </div>
    </div>
  );
}

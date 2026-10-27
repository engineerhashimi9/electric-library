import { Eye, EyeOff, Share2, Quote, BookmarkPlus, Share } from "lucide-react";
import { useTranslation } from "react-i18next";

const ghost =
  "flex items-center gap-2 rounded-xl bg-[#FFFFFF] border border-[#DDECE6] px-4 py-2.5 text-[13px] text-[#09261C] shadow-sm transition hover:bg-[#EAF4F0] hover:border-[#10B981] active:scale-95";

export default function HeroActions({ compact = false, previewEmpty, onTogglePreview, onShare, onExport, onCreateShelf }) {
  const { t } = useTranslation();

  if (compact) {
    return (
      <div className="flex shrink-0 items-center gap-2.5">
        <button onClick={onShare} aria-label={t("favorites.actions.share")} className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFFFFF] border border-[#DDECE6] text-[#09261C] transition hover:bg-[#EAF4F0] active:scale-90">
          <Share className="h-[18px] w-[18px]" />
        </button>
        <button onClick={onCreateShelf} className="flex items-center gap-2 rounded-2xl bg-[#10B981] hover:bg-[#09261C] px-5 py-3 text-[15px] font-bold text-[#FFFFFF] shadow-md transition active:scale-95">
          <BookmarkPlus className="h-[18px] w-[18px]" /> {t("favorites.actions.newShelfMobile")}
        </button>
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-[560px] flex-wrap gap-3">
      <button
        onClick={onTogglePreview}
        aria-pressed={previewEmpty}
        className="flex items-center gap-2 rounded-xl bg-[#FFFFFF] border border-[#DDECE6] px-4 py-2.5 text-[13px] text-[#09261C] shadow-sm transition hover:bg-[#EAF4F0] hover:border-[#10B981] active:scale-95"
      >
        {previewEmpty ? <EyeOff className="h-3.5 w-3.5 text-[#10B981]" /> : <Eye className="h-3.5 w-3.5 text-[#10B981]" />}
        {previewEmpty ? t("favorites.actions.exitEmpty") : t("favorites.actions.previewEmpty")}
      </button>
      <button onClick={onShare} className={ghost}><Share2 className="h-3.5 w-3.5 text-[#10B981]" /> {t("favorites.actions.share")}</button>
      <button onClick={onExport} className={ghost}><Quote className="h-3.5 w-3.5 text-[#10B981]" /> {t("favorites.actions.export")}</button>
      <button
        onClick={onCreateShelf}
        className="flex items-center gap-2 rounded-xl bg-[#10B981] hover:bg-[#09261C] px-5 py-2.5 text-[13px] font-bold text-[#FFFFFF] shadow-md transition hover:shadow-lg active:scale-95"
      >
        <BookmarkPlus className="h-3.5 w-3.5" /> {t("favorites.actions.newShelf")}
      </button>
    </div>
  );
}

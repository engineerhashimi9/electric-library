import { Eye, EyeOff, Share2, Quote, BookmarkPlus, Share } from "lucide-react";
import { useTranslation } from "react-i18next";

const ghostBtn =
  "inline-flex items-center gap-2 rounded-xl bg-[#FFFFFF] border border-[#D0E8E6] px-4 py-2.5 text-xs sm:text-sm font-bold text-[#0E6760] shadow-library-sm transition-all hover:bg-[#E6F4F3] hover:border-[#17A296] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]";

export default function HeroActions({ compact = false, previewEmpty, onTogglePreview, onShare, onExport, onCreateShelf }) {
  const { t } = useTranslation();

  if (compact) {
    return (
      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          onClick={onShare}
          aria-label={t("favorites.actions.share")}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFFFFF] border border-[#D0E8E6] text-[#0E6760] transition-colors hover:bg-[#E6F4F3] active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] shadow-sm"
        >
          <Share className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={onCreateShelf}
          className="flex items-center gap-1.5 rounded-xl bg-[#17A296] hover:bg-[#0E6760] px-4 py-2.5 text-xs sm:text-sm font-bold text-[#FFFFFF] shadow-library-sm transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
        >
          <BookmarkPlus className="h-4 w-4" />
          <span>{t("favorites.actions.newShelfMobile")}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-[560px] flex-wrap gap-2.5 justify-start lg:justify-end">
      <button
        type="button"
        onClick={onTogglePreview}
        aria-pressed={previewEmpty}
        className={ghostBtn}
      >
        {previewEmpty ? <EyeOff className="h-4 w-4 text-[#17A296]" /> : <Eye className="h-4 w-4 text-[#17A296]" />}
        <span>{previewEmpty ? t("favorites.actions.exitEmpty") : t("favorites.actions.previewEmpty")}</span>
      </button>

      <button type="button" onClick={onShare} className={ghostBtn}>
        <Share2 className="h-4 w-4 text-[#17A296]" />
        <span>{t("favorites.actions.share")}</span>
      </button>

      <button type="button" onClick={onExport} className={ghostBtn}>
        <Quote className="h-4 w-4 text-[#17A296]" />
        <span>{t("favorites.actions.export")}</span>
      </button>

      <button
        type="button"
        onClick={onCreateShelf}
        className="inline-flex items-center gap-2 rounded-xl bg-[#17A296] hover:bg-[#0E6760] px-4 py-2.5 text-xs sm:text-sm font-bold text-[#FFFFFF] shadow-library-sm hover:shadow-library transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
      >
        <BookmarkPlus className="h-4 w-4" />
        <span>{t("favorites.actions.newShelf")}</span>
      </button>
    </div>
  );
}

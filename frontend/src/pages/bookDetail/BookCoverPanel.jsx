import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BookOpen, Bookmark, Headphones, Heart, Share2 } from "lucide-react";

/**
 * BookCoverPanel
 * Left column of BookDetail: displays the book cover, format badge,
 * and Favorite / Share buttons.
 */
export default function BookCoverPanel({
  cover,
  title,
  authorName,
  format,
  isFavorite,
  isCopied,
  onToggleFavorite,
  onShare,
}) {
  const { t } = useTranslation();

  // Track if the cover image failed to load
  const [imageError, setImageError] = useState(false);

  return (
    /* Left column wrapper */
    <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center">
      {/* Book cover frame */}
      <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[2/3] rounded-2xl overflow-hidden shadow-library-lg border border-[#D0E8E6] bg-[#E6F4F3] group">
        {imageError ? (
          /* Fallback box shown if the cover image fails to load */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#E6F4F3] text-[#0E6760]">
            <BookOpen size={48} className="text-[#17A296] mb-3 opacity-80" />
            <span className="font-extrabold text-base leading-snug">{title}</span>
            <span className="text-xs text-[#4A6B68] mt-1 font-medium">{authorName}</span>
          </div>
        ) : (
          <img
            src={cover}
            alt={title}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}

        {/* Book format badge (ebook / audio) on top-left of cover */}
        <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 bg-[#0E6760]/90 border border-[#156B6B] text-[#FFFFFF] text-xs font-extrabold px-3 py-1 rounded-lg uppercase tracking-wider backdrop-blur shadow-sm flex items-center gap-1.5">
          {format === "audio" ? (
            <Headphones size={13} className="text-[#9EEFE8]" />
          ) : (
            <BookOpen size={13} className="text-[#9EEFE8]" />
          )}
          <span>{format || "ebook"}</span>
        </div>

        <button
          type="button"
          onClick={onToggleFavorite}
          aria-label={isFavorite ? t("bookDetail.inFavorites") : t("bookDetail.addToFavorites")}
          aria-pressed={isFavorite}
          className="absolute top-3 right-3 rtl:right-auto rtl:left-3 p-2.5 rounded-full bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#0E6760] border border-[#D0E8E6] shadow-library-sm backdrop-blur transition-all active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
        >
          <Heart
            size={18}
            className={
              isFavorite
                ? "fill-[#17A296] text-[#17A296]"
                : "text-[#4A6B68] hover:text-[#0E6760]"
            }
          />
        </button>
      </div>

      {/* Action row below cover: Favorite button and Share button */}
      <div className="w-full max-w-[280px] sm:max-w-[320px] flex items-center gap-2 mt-4">
        <button
          type="button"
          onClick={onToggleFavorite}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border text-xs font-bold transition-all active:scale-95 ${
            isFavorite
              ? "bg-[#E6F4F3] border-[#17A296] text-[#0E6760]"
              : "bg-[#FFFFFF] border-[#D0E8E6] text-[#4A6B68] hover:bg-[#F6FBFA] hover:text-[#0E6760]"
          }`}
        >
          <Bookmark size={15} className={isFavorite ? "fill-[#17A296] text-[#17A296]" : ""} />
          <span className="truncate">
            {isFavorite ? t("bookDetail.inFavorites") : t("bookDetail.addToFavorites")}
          </span>
        </button>

        <button
          type="button"
          onClick={onShare}
          aria-label={t("bookDetail.share")}
          title={t("bookDetail.share")}
          className={`p-2.5 rounded-xl border border-[#D0E8E6] transition-colors shrink-0 active:scale-95 ${
            isCopied
              ? "bg-[#17A296] text-[#FFFFFF] border-[#17A296]"
              : "bg-[#FFFFFF] hover:bg-[#E6F4F3] text-[#0E6760]"
          }`}
        >
          <Share2 size={16} />
        </button>
      </div>
    </div>
  );
}

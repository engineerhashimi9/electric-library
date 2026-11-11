import { Star, BookOpen, Bookmark } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getLocalized } from "@/utils/langHelper";

export default function MobileSpotlightCard({ book }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  if (!book) return null;

  return (
    <article
      aria-label={t("home.spotlight.badge")}
      className="md:hidden bg-[#0E6760] border border-[#156B6B] text-[#FFFFFF] p-4 sm:p-5 rounded-2xl space-y-4 shadow-library-lg relative overflow-hidden"
    >
      <div className="flex items-center justify-between text-xs text-[#B8E2DF]">
        <span className="bg-[#156B6B] border border-[#17A296]/30 text-[#9EEFE8] px-2.5 py-0.5 rounded-md uppercase font-extrabold text-[10px]">
          {t("home.spotlight.badge")}
        </span>
        <span className="flex items-center gap-1 bg-[#0A4B46] px-2 py-0.5 rounded-md">
          <Star size={13} className="fill-[#F59E0B] text-[#F59E0B]" aria-hidden="true" />
          <span className="text-[#FFFFFF] font-bold text-xs">{book.rating}</span>
          <span className="text-[#B8E2DF] text-[11px]">({book.reviews})</span>
        </span>
      </div>

      <div className="flex gap-3.5">
        <img
          src={book.cover}
          alt={getLocalized(book.title, lang)}
          className="w-20 h-28 sm:w-24 sm:h-32 object-cover rounded-xl shadow-md border border-[#156B6B] shrink-0"
        />
        <div className="space-y-1 min-w-0 flex-1">
          <span className="text-[10px] text-[#9EEFE8] uppercase font-bold tracking-wider block">
            {getLocalized(book.genre, lang)}
          </span>
          <h3 className="text-base sm:text-lg leading-tight text-[#FFFFFF] font-extrabold line-clamp-2">
            {getLocalized(book.title, lang)}
          </h3>
          <p className="text-xs text-[#B8E2DF] truncate">{getLocalized(book.author, lang)}</p>
          <p className="text-xs text-[#B8E2DF]/90 line-clamp-2 pt-0.5 leading-relaxed">
            {t("home.spotlight.desc")}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 pt-1">
        <button
          type="button"
          className="flex-1 bg-[#17A296] hover:bg-[#FFFFFF] hover:text-[#0E6760] text-[#FFFFFF] py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9EEFE8]"
        >
          <BookOpen size={15} aria-hidden="true" />
          <span>{t("home.spotlight.readBtn")}</span>
        </button>
        <button
          type="button"
          className="p-2.5 bg-[#156B6B] border border-[#17A296]/30 text-[#B8E2DF] hover:bg-[#17A296] hover:text-[#FFFFFF] rounded-xl transition-colors active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9EEFE8]"
          aria-label={t("favorites.hero.badge", "Bookmark")}
        >
          <Bookmark size={16} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

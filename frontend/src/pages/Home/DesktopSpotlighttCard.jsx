import { Star, BookOpen, Bookmark } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getLocalized } from "@/utils/langHelper";

export default function DesktopSpotlightCard({ book }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  if (!book) return null;

  return (
    <article
      aria-label={t("home.spotlight.badge")}
      className="bg-[#0E6760] border border-[#156B6B] text-[#FFFFFF] p-6 rounded-2xl space-y-5 relative overflow-hidden shadow-library-lg"
    >
      {/* Decorative ambient glow */}
      <div className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 bg-[#17A296]/20 rounded-full blur-2xl" />

      <div className="flex items-center justify-between gap-2 text-xs">
        <span className="bg-[#156B6B] border border-[#17A296]/40 text-[#9EEFE8] px-2.5 py-1 rounded-lg uppercase tracking-wider font-extrabold truncate text-[11px]">
          {t("home.spotlight.badge")}
        </span>
        <span className="flex items-center gap-1.5 shrink-0 bg-[#0A4B46] px-2.5 py-0.5 rounded-lg border border-[#156B6B]">
          <Star size={13} className="fill-[#F59E0B] text-[#F59E0B]" aria-hidden="true" />
          <span className="text-[#FFFFFF] font-bold text-xs">
            {book.rating}
          </span>
          <span className="text-[#B8E2DF] text-[11px]">({book.reviews})</span>
        </span>
      </div>

      <div className="flex gap-4">
        <img
          src={book.cover}
          alt={getLocalized(book.title, lang)}
          className="w-24 h-36 object-cover rounded-xl shadow-md shrink-0 border border-[#156B6B] transition-transform duration-300 hover:scale-105"
        />
        <div className="space-y-1.5 min-w-0 flex-1">
          <span className="text-[11px] text-[#9EEFE8] uppercase tracking-wider font-bold block truncate">
            {getLocalized(book.genre, lang)}
          </span>
          <h3 className="text-base sm:text-lg leading-snug text-[#FFFFFF] font-extrabold line-clamp-2">
            {getLocalized(book.title, lang)}
          </h3>
          <p className="text-xs text-[#B8E2DF] font-medium truncate">
            {getLocalized(book.author, lang)}
          </p>
          <p className="text-xs text-[#B8E2DF]/90 line-clamp-3 pt-1 leading-relaxed">
            {t("home.spotlight.desc")}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2.5 pt-1">
        <button
          type="button"
          className="flex-1 bg-[#17A296] hover:bg-[#FFFFFF] hover:text-[#0E6760] text-[#FFFFFF] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-library-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9EEFE8]"
        >
          <BookOpen size={16} aria-hidden="true" />
          <span>{t("home.spotlight.readBtn")}</span>
        </button>
        <button
          type="button"
          className="p-2.5 bg-[#156B6B] border border-[#17A296]/30 hover:bg-[#17A296] hover:text-[#FFFFFF] rounded-xl text-[#B8E2DF] transition-colors shrink-0 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9EEFE8]"
          aria-label={t("favorites.hero.badge", "Bookmark")}
        >
          <Bookmark size={18} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

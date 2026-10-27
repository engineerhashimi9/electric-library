import { Star, BookOpen, Bookmark } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getLocalized } from "@/utils/langHelper";

export default function DesktopSpotlightCard({ book }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="lg:col-span-5 bg-[#0E6760] border border-[#156B6B] text-[#FFFFFF] p-5 rounded-xl space-y-4 relative overflow-hidden shadow-lg">
      <div className="flex items-center justify-between gap-2 text-[11px] text-[#B8E2DF]">
        <span className="bg-[#156B6B] border border-[#156B6B] text-[#17A296] px-2 py-0.5 rounded uppercase tracking-wider font-bold truncate">
          {t("home.spotlight.badge")}
        </span>
        <span className="flex items-center gap-1 shrink-0">
          <Star size={12} className="fill-[#17A296] text-[#17A296]" />{" "}
          <span className="text-[#B8E2DF] font-semibold">
            {book.rating} ({book.reviews})
          </span>
        </span>
      </div>
      <div className="flex gap-4">
        <img
          src={book.cover}
          alt={getLocalized(book.title, lang)}
          className="w-24 h-36 object-cover rounded shadow-md shrink-0 border border-[#156B6B]"
        />
        <div className="space-y-1.5 min-w-0">
          <span className="text-[10px] text-[#17A296] uppercase tracking-wider font-semibold block truncate">
            {getLocalized(book.genre, lang)}
          </span>
          <h3 className="text-lg leading-snug text-[#FFFFFF] font-bold line-clamp-2">
            {getLocalized(book.title, lang)}
          </h3>
          <p className="text-xs text-[#B8E2DF] truncate">
            {getLocalized(book.author, lang)}
          </p>
          <p className="text-[11px] text-[#B8E2DF]/80 line-clamp-3 pt-1">
            {t("home.spotlight.desc")}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 pt-1">
        <button className="flex-1 bg-[#17A296] hover:bg-[#FFFFFF] hover:text-[#0E6760] text-[#FFFFFF] py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm">
          <BookOpen size={14} />
          <span>{t("home.spotlight.readBtn")}</span>
        </button>
        <button
          className="p-2 bg-[#156B6B] border border-[#156B6B] hover:bg-[#17A296] hover:text-[#FFFFFF] rounded-lg text-[#B8E2DF] transition-colors shrink-0"
          aria-label="Bookmark"
        >
          <Bookmark size={16} />
        </button>
      </div>
    </div>
  );
}
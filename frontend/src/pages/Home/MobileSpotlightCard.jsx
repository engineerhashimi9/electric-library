import { Star, BookOpen, Bookmark } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getLocalized } from "@/utils/langHelper";

export default function MobileSpotlightCard({ book }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="md:hidden bg-[#0E6760] border border-[#156B6B] text-[#FFFFFF] p-4 rounded-xl space-y-3 shadow-lg">
      <div className="flex items-center justify-between text-[10px] text-[#B8E2DF]">
        <span className="bg-[#156B6B] border border-[#156B6B] text-[#17A296] px-2 py-0.5 rounded uppercase font-bold">
          {t("home.spotlight.badge")}
        </span>
        <span className="flex items-center gap-1">
          <Star size={12} className="fill-[#17A296] text-[#17A296]" />{" "}
          <span className="text-[#B8E2DF] font-semibold">{book.rating} ({book.reviews})</span>
        </span>
      </div>
      <div className="flex gap-3">
        <img
          src={book.cover}
          alt={getLocalized(book.title, lang)}
          className="w-20 h-28 object-cover rounded shadow border border-[#156B6B]"
        />
        <div className="space-y-1">
          <span className="text-[9px] text-[#17A296] uppercase font-semibold">
            {getLocalized(book.genre, lang)}
          </span>
          <h3 className="text-base leading-tight text-[#FFFFFF] font-bold">
            {getLocalized(book.title, lang)}
          </h3>
          <p className="text-xs text-[#B8E2DF]">{getLocalized(book.author, lang)}</p>
          <p className="text-[10px] text-[#B8E2DF]/80 line-clamp-2">
            {t("home.spotlight.desc")}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="flex-1 bg-[#17A296] hover:bg-[#FFFFFF] hover:text-[#0E6760] text-[#FFFFFF] py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition-all shadow-sm">
          <BookOpen size={14} />
          <span>{t("home.spotlight.readBtn")}</span>
        </button>
        <button className="p-2 bg-[#156B6B] border border-[#156B6B] text-[#B8E2DF] hover:bg-[#17A296] hover:text-[#FFFFFF] rounded-lg transition-colors" aria-label="Bookmark">
          <Bookmark size={16} />
        </button>
      </div>
    </div>
  );
}

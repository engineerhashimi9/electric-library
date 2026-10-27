import { Star, BookOpen, Bookmark } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getLocalized } from "@/utils/langHelper";

export default function MobileSpotlightCard({ book }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="md:hidden bg-[#09261C] border border-[#163A2E] text-[#FFFFFF] p-4 rounded-xl space-y-3 shadow-lg">
      <div className="flex items-center justify-between text-[10px] text-[#A3C1B5]">
        <span className="bg-[#163A2E] border border-[#163A2E] text-[#10B981] px-2 py-0.5 rounded uppercase font-bold">
          {t("home.spotlight.badge")}
        </span>
        <span className="flex items-center gap-1">
          <Star size={12} className="fill-[#10B981] text-[#10B981]" />{" "}
          <span className="text-[#A3C1B5] font-semibold">{book.rating} ({book.reviews})</span>
        </span>
      </div>
      <div className="flex gap-3">
        <img
          src={book.cover}
          alt={getLocalized(book.title, lang)}
          className="w-20 h-28 object-cover rounded shadow border border-[#163A2E]"
        />
        <div className="space-y-1">
          <span className="text-[9px] text-[#10B981] uppercase font-semibold">
            {getLocalized(book.genre, lang)}
          </span>
          <h3 className="text-base leading-tight text-[#FFFFFF] font-bold">
            {getLocalized(book.title, lang)}
          </h3>
          <p className="text-xs text-[#A3C1B5]">{getLocalized(book.author, lang)}</p>
          <p className="text-[10px] text-[#A3C1B5]/80 line-clamp-2">
            {t("home.spotlight.desc")}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="flex-1 bg-[#10B981] hover:bg-[#FFFFFF] hover:text-[#09261C] text-[#FFFFFF] py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition-all shadow-sm">
          <BookOpen size={14} />
          <span>{t("home.spotlight.readBtn")}</span>
        </button>
        <button className="p-2 bg-[#163A2E] border border-[#163A2E] text-[#A3C1B5] hover:bg-[#10B981] hover:text-[#FFFFFF] rounded-lg transition-colors" aria-label="Bookmark">
          <Bookmark size={16} />
        </button>
      </div>
    </div>
  );
}

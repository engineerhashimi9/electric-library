import { Star, BookOpen, Bookmark } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getLocalized } from "@/utils/langHelper";

export default function DesktopSpotlightCard({ book }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="lg:col-span-5 bg-[#09261C] border border-[#163A2E] text-[#FFFFFF] p-5 rounded-xl space-y-4 relative overflow-hidden shadow-lg">
      <div className="flex items-center justify-between gap-2 text-[11px] text-[#A3C1B5]">
        <span className="bg-[#163A2E] border border-[#163A2E] text-[#10B981] px-2 py-0.5 rounded uppercase tracking-wider font-bold truncate">
          {t("home.spotlight.badge")}
        </span>
        <span className="flex items-center gap-1 shrink-0">
          <Star size={12} className="fill-[#10B981] text-[#10B981]" />{" "}
          <span className="text-[#A3C1B5] font-semibold">
            {book.rating} ({book.reviews})
          </span>
        </span>
      </div>
      <div className="flex gap-4">
        <img
          src={book.cover}
          alt={getLocalized(book.title, lang)}
          className="w-24 h-36 object-cover rounded shadow-md shrink-0 border border-[#163A2E]"
        />
        <div className="space-y-1.5 min-w-0">
          <span className="text-[10px] text-[#10B981] uppercase tracking-wider font-semibold block truncate">
            {getLocalized(book.genre, lang)}
          </span>
          <h3 className="text-lg leading-snug text-[#FFFFFF] font-bold line-clamp-2">
            {getLocalized(book.title, lang)}
          </h3>
          <p className="text-xs text-[#A3C1B5] truncate">
            {getLocalized(book.author, lang)}
          </p>
          <p className="text-[11px] text-[#A3C1B5]/80 line-clamp-3 pt-1">
            {t("home.spotlight.desc")}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 pt-1">
        <button className="flex-1 bg-[#10B981] hover:bg-[#FFFFFF] hover:text-[#09261C] text-[#FFFFFF] py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm">
          <BookOpen size={14} />
          <span>{t("home.spotlight.readBtn")}</span>
        </button>
        <button
          className="p-2 bg-[#163A2E] border border-[#163A2E] hover:bg-[#10B981] hover:text-[#FFFFFF] rounded-lg text-[#A3C1B5] transition-colors shrink-0"
          aria-label="Bookmark"
        >
          <Bookmark size={16} />
        </button>
      </div>
    </div>
  );
}
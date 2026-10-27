// src/pages/home/BookCard.jsx
import { Star, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getLocalized } from "@/utils/langHelper";

export default function BookCard({ book }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="flex flex-col bg-[#FFFFFF] p-2.5 sm:p-3 md:p-4 rounded-[16px] border border-[#E2EFEA] hover:border-[#10B981] space-y-2 relative group hover:-translate-y-1 hover:shadow-[0_12px_24px_-8px_rgba(9,38,28,0.12)] transition-all duration-300">
      <button
        aria-label="Favorite"
        className="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-1.5 bg-[#FFFFFF]/90 border border-[#DDECE6] backdrop-blur rounded-full text-[#6B9081] hover:text-[#10B981] z-10 transition-colors shadow-sm"
      >
        <Heart size={14} />
      </button>
      <div className="relative overflow-hidden rounded-lg bg-[#EAF4F0] aspect-[2/3] w-full">
        <img
          src={book.img}
          alt={getLocalized(book.title, lang)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute bottom-2 left-2 rtl:left-auto rtl:right-2 bg-[#EAF4F0] border border-[#DDECE6] text-[#0D5C46] font-bold text-[9px] px-2.5 py-0.5 rounded-full backdrop-blur">
          {getLocalized(book.tag, lang)}
        </span>
      </div>
      <div className="space-y-0.5 flex-1 min-w-0">
        <div className="flex items-center gap-1 text-[11px] text-[#111C18] font-bold">
          <Star size={10} className="fill-[#10B981] text-[#10B981]" />
          <span>{book.rating}</span>
        </div>
        <h4 className="text-xs sm:text-sm font-bold text-[#111C18] truncate">
          {getLocalized(book.title, lang)}
        </h4>
        <p className="text-[11px] sm:text-xs text-[#52665E] truncate">
          {getLocalized(book.author, lang)}
        </p>
      </div>
      <div className="flex justify-between items-center gap-1 pt-1 mt-auto">
        <span className="text-[10px] text-[#52665E] font-medium truncate">
          {t("bookCard.available")}
        </span>
        <button className="text-[11px] sm:text-[12px] px-2.5 py-1 bg-[#EAF4F0] text-[#09261C] group-hover:bg-[#10B981] group-hover:text-[#FFFFFF] font-bold rounded-lg transition-colors shrink-0">
          {t("bookCard.borrow")}
        </button>
      </div>
    </div>
  );
}
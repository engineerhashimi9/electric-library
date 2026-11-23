import React, { useState } from "react";
import { Star, Heart, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getLocalized } from "@/utils/langHelper";

export default function BookCard({ book }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [isFavorite, setIsFavorite] = useState(false);

  const title = getLocalized(book.title, lang);
  const author = getLocalized(book.author, lang);
  const tag = getLocalized(book.tag, lang);
  const bookId = book.id || "meditations";

  return (
    <article className="flex flex-col bg-[#FFFFFF] p-3 sm:p-4 rounded-2xl border border-[#D0E8E6] space-y-3 relative group hover:-translate-y-1 hover:border-[#17A296] hover:shadow-library-hover transition-all duration-300">
      <button
        type="button"
        onClick={() => setIsFavorite((prev) => !prev)}
        aria-label={isFavorite ? `Remove ${title} from favorites` : `Add ${title} to favorites`}
        aria-pressed={isFavorite}
        className="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-2 bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] border border-[#D0E8E6] backdrop-blur rounded-full text-[#236D64] hover:text-[#17A296] z-10 transition-all shadow-library-sm active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
      >
        <Heart
          size={16}
          className={isFavorite ? "fill-[#17A296] text-[#17A296]" : "text-[#4A6B68]"}
        />
      </button>

      <Link
        to={`/book/${bookId}`}
        aria-label={`${title} ${t("bookCard.detail")}`}
        className="relative overflow-hidden rounded-xl bg-[#E6F4F3] aspect-[2/3] w-full border border-[#D0E8E6]/60 block"
      >
        <img
          src={book.img}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {tag && (
          <span className="absolute bottom-2 left-2 rtl:left-auto rtl:right-2 bg-[#E6F4F3]/95 border border-[#D0E8E6] text-[#236D64] font-bold text-xs px-2.5 py-0.5 rounded-full backdrop-blur shadow-sm">
            {tag}
          </span>
        )}
      </Link>

      <div className="space-y-1 flex-1 min-w-0">
        <div className="flex items-center gap-1.5 text-xs text-[#0A2E2C] font-bold">
          <Star size={12} className="fill-[#17A296] text-[#17A296]" aria-hidden="true" />
          <span>{book.rating}</span>
        </div>
        <Link to={`/book/${bookId}`} className="block">
          <h3 className="text-xs sm:text-sm font-extrabold text-[#0A2E2C] hover:text-[#0E6760] transition-colors truncate leading-snug">
            {title}
          </h3>
        </Link>
        <p className="text-xs text-[#4A6B68] truncate font-medium">
          {author}
        </p>
      </div>

      <div className="flex justify-between items-center gap-2 pt-1 mt-auto border-t border-[#D0E8E6]/50">
        <Link
          to={`/book/${bookId}`}
          className="inline-flex items-center gap-1 text-xs px-2.5 py-1.5 bg-[#E6F4F3] text-[#0E6760] hover:bg-[#17A296] hover:text-[#FFFFFF] font-bold rounded-lg transition-colors shrink-0 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
        >
          <Info size={13} aria-hidden="true" />
          <span>{t("bookCard.detail")}</span>
        </Link>
        <button
          type="button"
          className="text-xs px-3 py-1.5 bg-[#0E6760] text-[#FFFFFF] hover:bg-[#17A296] font-bold rounded-lg transition-colors shrink-0 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
        >
          {t("bookCard.borrow")}
        </button>
      </div>
    </article>
  );
}

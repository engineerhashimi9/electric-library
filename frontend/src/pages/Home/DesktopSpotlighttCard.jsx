import { Star, Bookmark, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getLocalized } from "@/utils/langHelper";
import { useState, useEffect } from "react";
import axios from "axios";
export default function DesktopSpotlightCard({ book }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [bookDetail, setBookDetail] = useState({});
  const [bookCategory, setBookCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/v1/books/get_best_book/`, {
        // headers: {
        //   "Content-Type": "application/json",
        //   authorization: `Bearer ${localStorage.getItem("access_token")}`,
        // },
      })
      .then((response) => {
        setBookDetail(response.data);
        
        if (response.data.category) {
          setBookCategory(response.data.category);
        }
      console.log(response)
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
      });
  }, []);
  if (!book) return null;
  // const bookId = book.id || "shadow-of-the-wind";
  const title = getLocalized(book.title, lang);

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
          <Star
            size={13}
            className="fill-[#F59E0B] text-[#F59E0B]"
            aria-hidden="true"
          />
          <span className="text-[#FFFFFF] font-bold text-xs">
            {bookDetail.score}
          </span>
          <span className="text-[#B8E2DF] text-[11px]">
            ({bookDetail.downloads})
          </span>
        </span>
      </div>

      <div className="flex gap-4">
        <Link to={`/book/${bookDetail.id}`} className="shrink-0 group/cover">
          <img
            src={book.cover}
            alt={title}
            className="w-24 h-36 object-cover rounded-xl shadow-md border border-[#156B6B] transition-transform duration-300 group-hover/cover:scale-105"
          />
        </Link>
        <div className="space-y-1.5 min-w-0 flex-1">
          <span className="text-[11px] text-[#9EEFE8] uppercase tracking-wider font-bold block truncate">
            {bookCategory.map((category) => (
              <div key={category.id}>{getLocalized(category.name, lang)}</div>
            ))}
          </span>
          <Link to={`/book/${bookDetail?.id}`} className="block">
            <h3 className="text-base sm:text-lg leading-snug text-[#FFFFFF] font-extrabold line-clamp-2 hover:text-[#9EEFE8] transition-colors">
              {bookDetail.title ? getLocalized(bookDetail.title, lang) : title}
            </h3>
          </Link>
          <p className="text-xs text-[#B8E2DF] font-medium truncate">
            {bookDetail.author?.name} {bookDetail.author?.last_name}
          </p>
          <p className="text-xs text-[#B8E2DF]/90 line-clamp-3 pt-1 leading-relaxed">
            {bookDetail.description
              ? getLocalized(bookDetail.description, lang)
              : t("home.spotlight.description")}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2.5 pt-1">
        <Link
          to={`/book/${bookDetail.id}`}
          className="flex-1 bg-[#17A296] hover:bg-[#FFFFFF] hover:text-[#0E6760] text-[#FFFFFF] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-library-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9EEFE8]"
        >
          <Info size={16} aria-hidden="true" />
          <span>{t("bookCard.detail")}</span>
        </Link>
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

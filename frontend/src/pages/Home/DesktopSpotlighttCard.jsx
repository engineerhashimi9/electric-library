import { useState, useEffect } from "react";
import { Star, Bookmark, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { API_URL } from "@/api/auth/utils";
import { getLocalized } from "@/utils/langHelper";

/**
 * DesktopSpotlightCard
 * Featured book card shown inside the HeroBanner on desktop screens.
 * Loads the best book from the API, or uses the local `book` prop if offline.
 */
export default function DesktopSpotlightCard({ book }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  // Stores the featured book returned from the backend API
  const [apiBook, setApiBook] = useState(null);

  // Fetch the best book once when the component first loads
  useEffect(() => {
    axios
      .get(`${API_URL}/api/v1/books/get_best_book/`)
      .then((response) => {
        if (response.data) {
          setApiBook(response.data);
        }
      })
      .catch(() => {
        // If API fails, keep using the local fallback book
      });
  }, []);

  // Stop rendering if neither API book nor local book exists
  if (!book && !apiBook) return null;

  // Use API fields first, and fall back to local book fields if missing
  const bookId = apiBook?.id || book?.id || "shadow-of-the-wind";
  const title = getLocalized(apiBook?.title || book?.title, lang);
  const cover = apiBook?.cover || book?.cover;
  const rating = apiBook?.score ?? book?.rating;
  const reviews = apiBook?.downloads ?? book?.reviews;

  // Build genre text (API returns an array of categories, local book has a single genre)
  let genreLabel = getLocalized(book?.genre, lang);
  if (Array.isArray(apiBook?.category) && apiBook.category.length > 0) {
    genreLabel = apiBook.category.map((cat) => getLocalized(cat.name, lang)).join(" • ");
  }

  // Build author name (API returns { name, last_name }, local book has a localized string)
  let authorName = getLocalized(book?.author, lang);
  if (apiBook?.author) {
    authorName = [apiBook.author.name, apiBook.author.last_name].filter(Boolean).join(" ");
  }

  // Build short description
  const description = apiBook?.description
    ? getLocalized(apiBook.description, lang)
    : t("home.spotlight.desc");

  return (
    <article
      aria-label={t("home.spotlight.badge")}
      className="bg-[#0E6760] border border-[#156B6B] text-[#FFFFFF] p-6 rounded-2xl space-y-5 relative overflow-hidden shadow-library-lg"
    >
      {/* Decorative soft background glow */}
      <div className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 bg-[#17A296]/20 rounded-full blur-2xl" />

      {/* Top row: spotlight badge and rating pill */}
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
          <span className="text-[#FFFFFF] font-bold text-xs">{rating}</span>
          <span className="text-[#B8E2DF] text-[11px]">({reviews})</span>
        </span>
      </div>

      {/* Middle row: book cover and text details */}
      <div className="flex gap-4">
        <Link to={`/book/${bookId}`} className="shrink-0 group/cover">
          <img
            src={cover}
            alt={title}
            className="w-24 h-36 object-cover rounded-xl shadow-md border border-[#156B6B] transition-transform duration-300 group-hover/cover:scale-105"
          />
        </Link>

        {/* Book genre, title, author, and description */}
        <div className="space-y-1.5 min-w-0 flex-1">
          <span className="text-[11px] text-[#9EEFE8] uppercase tracking-wider font-bold block truncate">
            {genreLabel}
          </span>
          <Link to={`/book/${bookId}`} className="block">
            <h3 className="text-base sm:text-lg leading-snug text-[#FFFFFF] font-extrabold line-clamp-2 hover:text-[#9EEFE8] transition-colors">
              {title}
            </h3>
          </Link>
          <p className="text-xs text-[#B8E2DF] font-medium truncate">
            {authorName}
          </p>
          <p className="text-xs text-[#B8E2DF]/90 line-clamp-3 pt-1 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom row: Detail link and Bookmark button */}
      <div className="flex items-center gap-2.5 pt-1">
        <Link
          to={`/book/${bookId}`}
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

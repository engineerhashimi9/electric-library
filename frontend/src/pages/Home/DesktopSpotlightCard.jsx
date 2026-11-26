import React, { useState, useEffect } from "react";
import { Star, Bookmark, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getLocalized } from "@/utils/langHelper";
import { useFavoritesContext } from "@/context/FavoritesContext";
import axios from "axios";

export default function DesktopSpotlightCard({ book }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [apiBook, setApiBook] = useState(null);
  const { isFavorite, toggleFavorite } = useFavoritesContext();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/v1/en/books/get_best_book/")
      .then((response) => {
        if (response.data && response.data.id) {
          console.log("Fetched spotlight book from API:", response.data);
          setApiBook(response.data);
        }
      })
      .catch(() => {
        // Fallback to static spotlight book gracefully
      });
  }, []);

  if (!book) return null;

  const currentBook = apiBook || book;
  const bookId = currentBook.id || "meditations";
  const title = getLocalized(currentBook.title, lang);
  const authorName =
    typeof currentBook.author === "object" && currentBook.author !== null
      ? currentBook.author.name
        ? `${currentBook.author.name} ${currentBook.author.last_name || ""}`.trim()
        : getLocalized(currentBook.author, lang)
      : String(currentBook.author || "");
  const coverImg = currentBook.cover_image_url || book.cover || book.img;
  const score = currentBook.score || currentBook.rating || 4.9;
  const downloads = currentBook.downloads || 1420;
  const description = currentBook.description
    ? getLocalized(currentBook.description, lang)
    : t(
        "home.spotlight.desc",
        "A foundational examination of classical thought.",
      );

  const isFav = isFavorite(bookId);

  return (
    <article aria-label={t("home.spotlight.badge")} className="spotlight-card">
      {/* Decorative ambient glow */}
      <div className="spotlight-ambient-glow" />

      <div className="spotlight-header">
        <span className="badge badge-teal">{t("home.spotlight.badge")}</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.35rem",
            backgroundColor: "var(--bg-dark-surface)",
            padding: "0.25rem 0.65rem",
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--border-dark)",
          }}
        >
          <Star size={13} className="star-filled" aria-hidden="true" />
          <span
            style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "0.78rem" }}
          >
            {score}
          </span>
          <span
            style={{ color: "var(--text-inverse-muted)", fontSize: "0.72rem" }}
          >
            ({downloads})
          </span>
        </div>
      </div>

      <div className="spotlight-body">
        <Link to={`/book/${bookId}`} className="spotlight-cover-link">
          <img src={coverImg} alt={title} className="spotlight-cover-img" />
        </Link>
        <div className="spotlight-info">
          <span className="spotlight-category-tag">
            {currentBook.category && Array.isArray(currentBook.category)
              ? currentBook.category
                  .map((c) => getLocalized(c.name, lang))
                  .join(" • ")
              : getLocalized(book.genre || "Philosophy", lang)}
          </span>
          <Link to={`/book/${bookId}`}>
            <h3 className="spotlight-book-title font-serif">{title}</h3>
          </Link>
          <p className="spotlight-author-text">{authorName}</p>
          <p className="spotlight-desc-snippet">{description}</p>
        </div>
      </div>

      <div className="spotlight-actions">
        <Link
          to={`/book/${bookId}`}
          className="btn btn-primary btn-md flex-1"
          style={{ gap: "0.5rem" }}
        >
          <Info size={16} aria-hidden="true" />
          <span>{t("bookCard.detail")}</span>
        </Link>
        <button
          type="button"
          onClick={() => toggleFavorite(currentBook)}
          className={`btn ${isFav ? "btn-secondary" : "btn-dark"} btn-md`}
          style={{ padding: "0.6rem" }}
          aria-label={t("favorites.hero.badge", "Bookmark")}
          title={isFav ? "Remove from favorites" : "Add to favorites"}
        >
          <Bookmark
            size={18}
            aria-hidden="true"
            style={{
              fill: isFav ? "var(--primary)" : "none",
              color: isFav ? "var(--primary)" : "currentColor",
            }}
          />
        </button>
      </div>
    </article>
  );
}

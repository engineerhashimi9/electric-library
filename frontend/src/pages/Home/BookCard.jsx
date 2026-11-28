import React, { useState } from "react";
import { Star, Heart, Info, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getLocalized } from "@/utils/langHelper";
import { useFavoritesContext } from "@/context/FavoritesContext";
import BookExcerptModal from "@/components/common/BookExcerptModal";

export default function BookCard({ book }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const { isFavorite, toggleFavorite } = useFavoritesContext();
  const [isExcerptOpen, setIsExcerptOpen] = useState(false);

  const title = getLocalized(book.title, lang);
  const author = getLocalized(book.author, lang);
  const tag = getLocalized(book.tag, lang);
  const bookId = book.id || "meditations";
  const favoriteActive = isFavorite(bookId);

  return (
    <>
      <BookExcerptModal
        book={book}
        isOpen={isExcerptOpen}
        onClose={() => setIsExcerptOpen(false)}
      />

      <article className="book-card-container">
        <div className="book-cover-wrapper">
          <Link to={`/book/${bookId}`} aria-label={`${title} ${t("bookCard.detail")}`}>
            <img
              src={book.img || book.cover}
              alt={title}
              loading="lazy"
              className="book-cover-image"
            />
            {/* Real book spine effect */}
            <div className="book-spine-depth" />
          </Link>

          {tag && <span className="book-tag-pill">{tag}</span>}

          <button
            type="button"
            onClick={() => toggleFavorite(book)}
            aria-label={favoriteActive ? `Remove ${title} from favorites` : `Add ${title} to favorites`}
            aria-pressed={favoriteActive}
            className={`book-fav-btn ${favoriteActive ? "favorited" : ""}`}
            title={favoriteActive ? "Remove from shelf" : "Add to shelf"}
          >
            <Heart
              size={16}
              style={{
                fill: favoriteActive ? "var(--primary-light)" : "none",
                color: favoriteActive ? "var(--primary-light)" : "var(--text-secondary)",
              }}
            />
          </button>
        </div>

        <div className="book-content-body">
          <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
            <Star size={13} className="star-filled" aria-hidden="true" />
            <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--text-primary)" }}>
              {book.rating}
            </span>
          </div>

          <Link to={`/book/${bookId}`}>
            <h3 className="book-card-title font-serif">{title}</h3>
          </Link>

          <p className="book-card-author">{author}</p>

          <div className="book-card-footer">
            <Link
              to={`/book/${bookId}`}
              className="btn btn-secondary btn-sm"
              style={{ gap: "0.35rem" }}
            >
              <Info size={13} aria-hidden="true" />
              <span>{t("bookCard.detail")}</span>
            </Link>
            <button
              type="button"
              onClick={() => setIsExcerptOpen(true)}
              className="btn btn-primary btn-sm"
              style={{ gap: "0.3rem" }}
              title="Preview volume"
            >
              <BookOpen size={13} />
              <span>{t("bookCard.borrow")}</span>
            </button>
          </div>
        </div>
      </article>
    </>
  );
}

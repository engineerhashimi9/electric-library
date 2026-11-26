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
          onClick={() => setIsFavorite((prev) => !prev)}
          aria-label={isFavorite ? `Remove ${title} from favorites` : `Add ${title} to favorites`}
          aria-pressed={isFavorite}
          className={`book-fav-btn ${isFavorite ? "favorited" : ""}`}
        >
          <Heart
            size={16}
            style={{
              fill: isFavorite ? "var(--primary-light)" : "none",
              color: isFavorite ? "var(--primary-light)" : "var(--text-secondary)",
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
          <h3 className="book-card-title">{title}</h3>
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
          <button type="button" className="btn btn-primary btn-sm">
            {t("bookCard.borrow")}
          </button>
        </div>
      </div>
    </article>
  );
}

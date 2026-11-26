import { BookOpen, Download, Heart, Star, Info } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getLocalized } from "@/utils/langHelper";

export function BookCard({ book, favorite, onToggleFavorite, onAction, view }) {
  const [imageFailed, setImageFailed] = useState(false);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const localizedTitle = getLocalized(book.title, lang);
  const localizedAuthor = getLocalized(book.author, lang);

  const desktopLabel =
    {
      ebook: t("bookCard.ebook"),
      audio: t("bookCard.audio"),
      hardcover: t("bookCard.hardcover"),
    }[book.format] || book.format;

  const bookDetailUrl = `/book/${book.id}`;

  if (view === "list") {
    return (
      <article className="book-list-item-box">
        <Link to={bookDetailUrl} style={{ flexShrink: 0 }}>
          {imageFailed ? (
            <div
              style={{
                width: "90px",
                height: "130px",
                backgroundColor: "var(--bg-secondary)",
                borderRadius: "var(--radius-md)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
                textAlign: "center",
              }}
            >
              <BookOpen size={24} style={{ color: "var(--primary)" }} />
            </div>
          ) : (
            <img
              src={book.cover}
              alt={localizedTitle}
              loading="lazy"
              onError={() => setImageFailed(true)}
              className="book-list-cover"
            />
          )}
        </Link>

        <div style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0, gap: "0.35rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
            <span className="badge badge-sage">{desktopLabel}</span>
            <button
              type="button"
              onClick={() => onToggleFavorite(book.id)}
              aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
              style={{
                padding: "6px",
                borderRadius: "50%",
                backgroundColor: "var(--bg-secondary)",
                color: favorite ? "var(--primary-light)" : "var(--text-secondary)",
              }}
            >
              <Heart size={16} style={{ fill: favorite ? "var(--primary-light)" : "none" }} />
            </button>
          </div>

          <Link to={bookDetailUrl}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-primary)" }}>
              {localizedTitle}
            </h3>
          </Link>
          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{localizedAuthor}</p>

          <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.8rem", marginTop: "2px" }}>
            <Star size={13} className="star-filled" aria-hidden="true" />
            <span style={{ fontWeight: 800 }}>{book.rating}</span>
            <span style={{ color: "var(--text-muted)" }}>({book.reviews})</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginTop: "auto", paddingTop: "0.5rem" }}>
            <Link to={bookDetailUrl} className="btn btn-secondary btn-sm" style={{ gap: "0.35rem" }}>
              <Info size={14} />
              <span>{t("bookCard.detail")}</span>
            </Link>
            <button
              type="button"
              onClick={() => onAction(book)}
              className="btn btn-primary btn-sm"
              style={{ gap: "0.35rem" }}
            >
              <Download size={14} />
              <span>{t("bookCard.download", "Download")}</span>
            </button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="book-card-container">
      <div className="book-cover-wrapper">
        <Link to={bookDetailUrl} style={{ display: "block", width: "100%", height: "100%" }}>
          {imageFailed ? (
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "var(--bg-secondary)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
                textAlign: "center",
                gap: "0.5rem",
              }}
            >
              <BookOpen size={28} style={{ color: "var(--primary)" }} aria-hidden="true" />
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--primary)" }}>
                {localizedTitle}
              </span>
            </div>
          ) : (
            <>
              <img
                src={book.cover}
                alt={`${localizedTitle} book cover`}
                loading="lazy"
                onError={() => setImageFailed(true)}
                className="book-cover-image"
              />
              <div className="book-spine-depth" />
            </>
          )}
        </Link>

        <span className="book-tag-pill">{desktopLabel}</span>

        <button
          type="button"
          onClick={() => onToggleFavorite(book.id)}
          aria-label={
            favorite
              ? `Remove ${localizedTitle} from favorites`
              : `Add ${localizedTitle} to favorites`
          }
          className={`book-fav-btn ${favorite ? "favorited" : ""}`}
        >
          <Heart
            size={16}
            style={{
              fill: favorite ? "var(--primary-light)" : "none",
              color: favorite ? "var(--primary-light)" : "var(--text-secondary)",
            }}
          />
        </button>
      </div>

      <div className="book-content-body">
        <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
          <Star size={13} className="star-filled" aria-hidden="true" />
          <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--text-primary)" }}>
            {book.rating}
          </span>
          <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
            ({book.reviews})
          </span>
        </div>

        <Link to={bookDetailUrl}>
          <h3 className="book-card-title">{localizedTitle}</h3>
        </Link>

        <p className="book-card-author">{localizedAuthor}</p>

        <div className="book-card-footer">
          <Link
            to={bookDetailUrl}
            className="btn btn-secondary btn-sm"
            style={{ gap: "0.35rem" }}
          >
            <Info size={13} aria-hidden="true" />
            <span>{t("bookCard.detail")}</span>
          </Link>
          <button
            type="button"
            onClick={() => onAction(book)}
            className="btn btn-primary btn-sm"
            style={{ gap: "0.35rem" }}
          >
            <Download size={13} aria-hidden="true" />
            <span>{t("bookCard.download", "Download")}</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default BookCard;

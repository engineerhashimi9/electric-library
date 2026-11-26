import React from "react";
import { Star, Bookmark, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getLocalized } from "@/utils/langHelper";

export default function MobileSpotlightCard({ book }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  if (!book) return null;
  const bookId = book.id || "shadow-of-the-wind";
  const title = getLocalized(book.title, lang);

  return (
    <article aria-label={t("home.spotlight.badge")} className="mobile-spotlight-card">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.75rem" }}>
        <span className="badge badge-teal">
          {t("home.spotlight.badge")}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <Star size={13} className="star-filled" aria-hidden="true" />
          <span style={{ fontWeight: 700, color: "#FFFFFF" }}>{book.rating}</span>
          <span style={{ color: "var(--text-inverse-muted)" }}>({book.reviews})</span>
        </div>
      </div>

      <div style={{ display: "flex", gap: "0.85rem" }}>
        <Link to={`/book/${bookId}`} style={{ flexShrink: 0 }}>
          <img
            src={book.cover}
            alt={title}
            style={{
              width: "75px",
              height: "110px",
              objectFit: "cover",
              borderRadius: "var(--radius-md)",
              boxShadow: "var(--shadow-book)",
              border: "1px solid var(--border-dark)",
            }}
          />
        </Link>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", minWidth: 0, flex: 1 }}>
          <span style={{ fontSize: "0.7rem", color: "#9EEFE8", fontWeight: 700, textTransform: "uppercase" }}>
            {getLocalized(book.genre, lang)}
          </span>
          <Link to={`/book/${bookId}`}>
            <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.3 }} className="line-clamp-2">
              {title}
            </h3>
          </Link>
          <p style={{ fontSize: "0.78rem", color: "var(--text-inverse-muted)" }} className="truncate">
            {getLocalized(book.author, lang)}
          </p>
          <p style={{ fontSize: "0.75rem", color: "rgba(184, 226, 223, 0.85)", lineHeight: 1.4 }} className="line-clamp-2">
            {t("home.spotlight.desc")}
          </p>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", paddingTop: "0.25rem" }}>
        <Link
          to={`/book/${bookId}`}
          className="btn btn-primary btn-sm flex-1"
          style={{ gap: "0.35rem" }}
        >
          <Info size={14} aria-hidden="true" />
          <span>{t("bookCard.detail")}</span>
        </Link>
        <button
          type="button"
          className="btn btn-dark btn-sm"
          style={{ padding: "0.5rem" }}
          aria-label={t("favorites.hero.badge", "Bookmark")}
        >
          <Bookmark size={16} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

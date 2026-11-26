import React from "react";
import { Heart, Star, Quote, Headphones, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BookCover from "./BookCover";
import StatusLine from "./StatusLine";
import StatusChip from "./StatusChip";
import ActionButton from "./ActionButton";
import { getLocalized } from "@/utils/langHelper";
import { formatVotes } from "@/utils/formatters";

export default function BookCard({ book, onRemove, onDownload }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const { id, title, author, format, rating, votes, badge, note, status, meta, cover } = book;

  const locTitle = getLocalized(title, lang);
  const locAuthor = getLocalized(author, lang);
  const locFormat = getLocalized(format, lang);
  const locBadge = getLocalized(badge, lang);
  const locNote = getLocalized(note, lang);
  const bookDetailUrl = `/book/${id}`;

  return (
    <article className="book-card-container">
      {/* Cover */}
      <div className="book-cover-wrapper" style={{ height: "240px" }}>
        <Link to={bookDetailUrl} style={{ display: "block", width: "100%", height: "100%" }}>
          <BookCover cover={cover} title={locTitle} className="book-cover-image" />
          <div className="book-spine-depth" />
        </Link>

        {/* Format badge */}
        <span className="book-tag-pill">
          {/AUDIO/.test(locFormat) && <Headphones size={12} style={{ marginRight: "3px" }} />}
          <span>{locFormat}</span>
        </span>

        <button
          type="button"
          onClick={onRemove}
          aria-label={`Remove ${locTitle} from favorites`}
          title="Remove from favorites"
          className="book-fav-btn favorited"
        >
          <Heart size={16} style={{ fill: "var(--primary-light)", color: "var(--primary-light)" }} />
        </button>
      </div>

      {/* Body */}
      <div className="book-content-body">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
            <Star size={13} className="star-filled" aria-hidden="true" />
            <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--text-primary)" }}>
              {rating}
            </span>
            <span style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
              ({formatVotes(votes)})
            </span>
          </div>
          {locBadge && <span className="badge badge-sage">{locBadge}</span>}
        </div>

        <Link to={bookDetailUrl}>
          <h3 className="book-card-title">{locTitle}</h3>
        </Link>
        <p className="book-card-author">{locAuthor}</p>

        {locNote && (
          <p
            className="line-clamp-2"
            style={{
              fontSize: "0.75rem",
              fontStyle: "italic",
              color: "var(--text-secondary)",
              backgroundColor: "var(--bg-secondary)",
              padding: "0.45rem 0.65rem",
              borderRadius: "var(--radius-sm)",
              margin: "0.25rem 0",
            }}
          >
            "{locNote}"
          </p>
        )}

        <div className="book-card-footer" style={{ flexDirection: "column", alignItems: "stretch", gap: "0.5rem" }}>
          <StatusLine status={status} meta={meta} />
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Link
              to={bookDetailUrl}
              className="btn btn-secondary btn-sm"
              title={t("bookCard.detail")}
              style={{ gap: "0.35rem" }}
            >
              <Info size={13} />
              <span>{t("bookCard.detail")}</span>
            </Link>
            <ActionButton
              onClick={() => onDownload && onDownload(book)}
              className="flex-1"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

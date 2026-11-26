import React from "react";
import { Heart, Star, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BookCover from "./BookCover";
import StatusLine from "./StatusLine";
import ActionButton from "./ActionButton";
import { formatVotes } from "@/utils/formatters";
import { getLocalized } from "@/utils/langHelper";

export default function BookListItem({ book, onRemove, onDownload }) {
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
    <article className="book-list-item-box">
      <Link to={bookDetailUrl} style={{ flexShrink: 0 }}>
        <BookCover cover={cover} title={locTitle} className="book-list-cover" />
      </Link>

      <div style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0, gap: "0.35rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
          <span className="badge badge-sage">{locFormat} • {locBadge}</span>
          <button
            type="button"
            onClick={onRemove}
            aria-label={`Remove ${locTitle} from favorites`}
            style={{
              padding: "6px",
              borderRadius: "50%",
              backgroundColor: "var(--bg-secondary)",
              color: "var(--primary-light)",
              cursor: "pointer",
            }}
          >
            <Heart size={16} style={{ fill: "var(--primary-light)" }} />
          </button>
        </div>

        <Link to={bookDetailUrl}>
          <h3 className="font-serif" style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary)" }}>
            {locTitle}
          </h3>
        </Link>
        <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{locAuthor}</p>

        {locNote && (
          <p
            className="line-clamp-1 hidden-mobile"
            style={{ fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-muted)" }}
          >
            "{locNote}"
          </p>
        )}

        <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.8rem" }}>
          <Star size={13} className="star-filled" aria-hidden="true" />
          <span style={{ fontWeight: 800 }}>{rating}</span>
          <span style={{ color: "var(--text-muted)" }}>({formatVotes(votes)})</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginTop: "auto", paddingTop: "0.5rem" }}>
          <StatusLine status={status} meta={meta} />
          <Link to={bookDetailUrl} className="btn btn-secondary btn-sm" style={{ gap: "0.35rem" }}>
            <Info size={14} />
            <span>{t("bookCard.detail")}</span>
          </Link>
          <ActionButton onClick={() => onDownload && onDownload(book)} />
        </div>
      </div>
    </article>
  );
}

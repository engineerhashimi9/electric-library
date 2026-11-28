import React from "react";
import { Eye, EyeOff, Share2, Quote, BookmarkPlus, Share } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function HeroActions({ compact = false, previewEmpty, onTogglePreview, onShare, onExport, onCreateShelf }) {
  const { t } = useTranslation();

  if (compact) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
        <button
          type="button"
          onClick={onShare}
          aria-label={t("favorites.actions.share")}
          className="btn btn-outline btn-sm"
          style={{ padding: "0.5rem" }}
        >
          <Share size={16} />
        </button>
        <button
          type="button"
          onClick={onCreateShelf}
          className="btn btn-primary btn-sm"
        >
          <BookmarkPlus size={16} />
          <span>{t("favorites.actions.newShelfMobile")}</span>
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem", justifyContent: "flex-end" }}>
      <button
        type="button"
        onClick={onTogglePreview}
        aria-pressed={previewEmpty}
        className="btn btn-outline btn-sm"
      >
        {previewEmpty ? <EyeOff size={15} style={{ color: "var(--primary-light)" }} /> : <Eye size={15} style={{ color: "var(--primary-light)" }} />}
        <span>{previewEmpty ? t("favorites.actions.exitEmpty") : t("favorites.actions.previewEmpty")}</span>
      </button>

      <button type="button" onClick={onShare} className="btn btn-outline btn-sm">
        <Share2 size={15} style={{ color: "var(--primary-light)" }} />
        <span>{t("favorites.actions.share")}</span>
      </button>

      <button type="button" onClick={onExport} className="btn btn-outline btn-sm">
        <Quote size={15} style={{ color: "var(--primary-light)" }} />
        <span>{t("favorites.actions.export")}</span>
      </button>

      <button
        type="button"
        onClick={onCreateShelf}
        className="btn btn-primary btn-sm"
      >
        <BookmarkPlus size={15} />
        <span>{t("favorites.actions.newShelf")}</span>
      </button>
    </div>
  );
}

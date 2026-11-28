import React from "react";
import { HeartOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function EmptyState({ preview, onExitPreview }) {
  const { t } = useTranslation();

  return (
    <div
      className="card-surface"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1.5rem",
        textAlign: "center",
        gap: "1rem",
      }}
    >
      <span
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "var(--radius-xl)",
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border-color)",
          color: "var(--primary-light)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HeartOff size={28} aria-hidden="true" />
      </span>
      <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--primary)" }}>
        {t("favorites.empty.title")}
      </h3>
      <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", maxWidth: "26rem", lineHeight: 1.6 }}>
        {t("favorites.empty.desc")}
      </p>
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center", paddingTop: "0.5rem" }}>
        <Link to="/explorebooks" className="btn btn-primary btn-md">
          {t("favorites.empty.exploreBtn")}
        </Link>
        {preview && (
          <button
            type="button"
            onClick={onExitPreview}
            className="btn btn-outline btn-md"
          >
            {t("favorites.empty.exitPreview")}
          </button>
        )}
      </div>
    </div>
  );
}

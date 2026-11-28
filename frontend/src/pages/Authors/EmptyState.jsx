import React from "react";
import { SearchX } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function EmptyState({ onReset }) {
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
        <SearchX size={28} aria-hidden="true" />
      </span>
      <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--primary)" }}>
        {t("authors.empty.title")}
      </h3>
      <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", maxWidth: "26rem", lineHeight: 1.6 }}>
        {t("authors.empty.desc")}
      </p>
      <button
        type="button"
        onClick={onReset}
        className="btn btn-primary btn-md"
      >
        {t("authors.empty.reset")}
      </button>
    </div>
  );
}

import React from "react";
import { Search, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AuthorSearch({ value, onChange }) {
  const { t } = useTranslation();

  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        borderRadius: "var(--radius-xl)",
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border-color)",
        padding: "0.85rem 1.25rem",
        boxShadow: "var(--shadow-sm)",
        transition: "all var(--transition-fast)",
      }}
    >
      <Search size={18} style={{ color: "var(--primary-light)", flexShrink: 0 }} aria-hidden="true" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          minWidth: 0,
          background: "transparent",
          fontSize: "0.9rem",
          color: "var(--text-primary)",
          fontWeight: 500,
        }}
        placeholder={t("authors.searchPlaceholder")}
        aria-label={t("authors.searchPlaceholder")}
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          style={{ padding: "4px", borderRadius: "50%", color: "var(--text-secondary)", cursor: "pointer" }}
        >
          <X size={16} />
        </button>
      )}
    </label>
  );
}

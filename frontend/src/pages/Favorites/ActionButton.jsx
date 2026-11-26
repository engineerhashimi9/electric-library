import React from "react";
import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ActionButton({ onClick, className = "" }) {
  const { i18n, t } = useTranslation();
  const isFa = i18n.language === "fa";

  const label = isFa ? "دانلود کتاب" : t("bookCard.download", "Download");

  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn btn-primary btn-sm ${className}`}
      style={{ gap: "0.35rem" }}
    >
      <Download size={14} aria-hidden="true" />
      <span className="truncate">{label}</span>
    </button>
  );
}

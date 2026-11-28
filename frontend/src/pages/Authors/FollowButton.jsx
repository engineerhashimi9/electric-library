import React from "react";
import { Check, Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function FollowButton({ following, onToggle, variant = "default", className = "" }) {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={following}
      className={`btn ${
        following
          ? "btn-secondary"
          : variant === "onDark"
          ? "btn-primary"
          : "btn-primary"
      } btn-sm ${className}`}
      style={{ gap: "0.35rem" }}
    >
      {following ? (
        <>
          <Check size={14} style={{ color: "var(--primary-light)" }} aria-hidden="true" />
          <span>{t("authors.followBtn.following")}</span>
        </>
      ) : (
        <>
          <Plus size={14} aria-hidden="true" />
          <span>{t("authors.followBtn.follow")}</span>
        </>
      )}
    </button>
  );
}

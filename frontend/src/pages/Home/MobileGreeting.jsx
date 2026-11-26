import React from "react";
import { useTranslation } from "react-i18next";

export default function MobileGreeting({ name = "Clara", streakDays = 14 }) {
  const { t } = useTranslation();

  return (
    <div className="mobile-greeting-banner">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
        <span className="badge badge-sage">
          {name} • {t("home.hero.eyebrow")}
        </span>
        <span
          className="badge badge-gold"
          role="status"
          aria-label={`${streakDays} days reading streak`}
        >
          <span>{streakDays}</span>
          <span aria-hidden="true">🔥</span>
        </span>
      </div>

      <h1 style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--primary)", lineHeight: 1.25 }}>
        {t("home.hero.title")}
      </h1>

      <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
        {t("home.hero.description")}
      </p>
    </div>
  );
}

import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ThemeCard from "./ThemeCard";
import Eyebrow from "@/components/ui/Eyebrow";

export default function BrowseThemes({ themes }) {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="themes-heading" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
          <Eyebrow>{t("home.themes.eyebrow")}</Eyebrow>
          <h2
            id="themes-heading"
            style={{
              fontSize: "1.75rem",
              fontWeight: 800,
              color: "var(--primary)",
              letterSpacing: "-0.02em",
              lineHeight: 1.25,
            }}
          >
            {t("home.themes.title")}
          </h2>
          <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
            {t("home.themes.subtitle")}
          </p>
        </div>
        <Link
          to="/explorebooks"
          style={{
            fontSize: "0.85rem",
            fontWeight: 700,
            color: "var(--primary)",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
          }}
        >
          {t("home.themes.viewAll")}
        </Link>
      </div>

      <div className="themes-grid">
        {themes.map((themeItem, idx) => (
          <ThemeCard key={idx} theme={themeItem} />
        ))}
      </div>
    </section>
  );
}

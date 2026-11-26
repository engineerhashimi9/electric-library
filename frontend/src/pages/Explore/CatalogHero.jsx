import React from "react";
import { BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";
import Eyebrow from "@/components/ui/Eyebrow";

export default function CatalogHero() {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="catalog-hero-title" className="catalog-hero-box">
      <div className="hidden-mobile">
        <Eyebrow>{t("explore.hero.eyebrow")}</Eyebrow>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
        <h1
          id="catalog-hero-title"
          className="font-serif"
          style={{
            fontSize: "2.25rem",
            fontWeight: 800,
            color: "var(--primary)",
            lineHeight: 1.25,
            letterSpacing: "-0.025em",
          }}
        >
          {t("explore.hero.title")}
        </h1>

        <span
          className="hidden-desktop"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "var(--radius-lg)",
            backgroundColor: "var(--bg-secondary)",
            border: "1px solid var(--border-color)",
            color: "var(--primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <BookOpen size={20} aria-hidden="true" />
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6, maxWidth: "42rem" }}>
          {t("explore.hero.desc")}
        </p>

        <div className="hidden-mobile" style={{ display: "flex", gap: "0.65rem" }}>
          <span className="badge badge-sage" style={{ padding: "0.45rem 0.85rem", fontSize: "0.75rem" }}>
            <BookOpen size={14} style={{ color: "var(--primary-light)" }} aria-hidden="true" />
            <span>{t("explore.hero.badge1")}</span>
          </span>

          <span className="badge badge-sage" style={{ padding: "0.45rem 0.85rem", fontSize: "0.75rem" }}>
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "var(--primary-light)",
              }}
              aria-hidden="true"
            />
            <span>{t("explore.hero.badge2")}</span>
          </span>
        </div>
      </div>
    </section>
  );
}

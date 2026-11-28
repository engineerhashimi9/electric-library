import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CollectionSpotlight({ onExplore }) {
  const { t } = useTranslation();

  return (
    <section className="card-dark" style={{ padding: "2.25rem 2rem", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          bottom: "-4rem",
          right: "-4rem",
          width: "14rem",
          height: "14rem",
          background: "var(--primary-glow)",
          borderRadius: "50%",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="badge badge-teal" style={{ alignSelf: "flex-start" }}>
          <Sparkles size={14} aria-hidden="true" />
          <span>{t("explore.spotlight.eyebrow")}</span>
        </div>

        <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text-inverse)", lineHeight: 1.25 }}>
          {t("explore.spotlight.title")}
        </h2>

        <p style={{ fontSize: "0.95rem", color: "var(--text-inverse-muted)", lineHeight: 1.6, maxWidth: "44rem" }}>
          {t("explore.spotlight.desc")}
        </p>

        <button
          type="button"
          onClick={onExplore}
          className="btn btn-primary btn-md"
          style={{ alignSelf: "flex-start", gap: "0.5rem" }}
        >
          <span>{t("explore.spotlight.cta")}</span>
          <ArrowRight size={16} className="rtl-rotate-180" />
        </button>
      </div>
    </section>
  );
}

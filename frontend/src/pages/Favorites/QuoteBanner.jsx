import React from "react";
import { Quote, ArrowRight, BookMarked, Highlighter } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function QuoteBanner() {
  const { t } = useTranslation();

  return (
    <section className="card-dark" style={{ padding: "2.5rem 2rem", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          bottom: "-4rem",
          right: "-4rem",
          width: "16rem",
          height: "16rem",
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
          gap: "1.5rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
          <Quote
            size={28}
            className="hidden-mobile"
            style={{ color: "#9EEFE8", fill: "#9EEFE8", flexShrink: 0, marginTop: "4px" }}
            aria-hidden="true"
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div className="badge badge-teal" style={{ alignSelf: "flex-start" }}>
              <BookMarked size={13} aria-hidden="true" />
              <span>{t("favorites.quote.eyebrow")}</span>
            </div>
            <blockquote
              style={{
                fontSize: "1.5rem",
                fontStyle: "italic",
                lineHeight: 1.5,
                color: "var(--text-inverse)",
                fontWeight: 800,
              }}
            >
              "{t("favorites.quote.text")}"
            </blockquote>
            <p style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem" }}>
              <cite style={{ fontStyle: "normal", fontWeight: 700, color: "#9EEFE8" }}>
                — {t("favorites.quote.author")}
              </cite>
              <span style={{ color: "var(--text-inverse-muted)" }}>•</span>
              <span style={{ color: "var(--text-inverse-muted)" }}>
                {t("favorites.quote.source")}
              </span>
            </p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <div className="hidden-mobile">
            <p style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", color: "#9EEFE8" }}>
              {t("favorites.quote.syncLabel")}
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--text-inverse)" }}>
              {t("favorites.quote.syncDesc")}
            </p>
          </div>
          <a
            href="#highlights"
            className="btn btn-primary btn-md"
            style={{ gap: "0.5rem" }}
          >
            <Highlighter size={16} aria-hidden="true" />
            <span>{t("favorites.quote.cta")}</span>
            <ArrowRight size={16} className="rtl-rotate-180" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

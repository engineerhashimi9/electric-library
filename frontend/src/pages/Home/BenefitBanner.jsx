import React from "react";
import { useTranslation } from "react-i18next";
import { Bookmark, BookOpen, Mic } from "lucide-react";

export default function BenefitsBanner() {
  const { t } = useTranslation();

  const benefits = [
    {
      id: "marginalia",
      icon: Bookmark,
      title: t("home.benefits.b1Title"),
      text: t("home.benefits.b1Desc"),
    },
    {
      id: "scans",
      icon: BookOpen,
      title: t("home.benefits.b2Title"),
      text: t("home.benefits.b2Desc"),
    },
    {
      id: "borrowing",
      icon: Mic,
      title: t("home.benefits.b3Title"),
      text: t("home.benefits.b3Desc"),
    },
  ];

  return (
    <section aria-label="Member Advantages" className="benefit-banner-box">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: "0.75rem",
          fontWeight: 800,
          color: "#9EEFE8",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: "1.5rem",
        }}
      >
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "var(--primary-light)",
          }}
          aria-hidden="true"
        />
        <span>{t("home.benefits.eyebrow")}</span>
      </div>

      <div className="benefit-items-grid">
        {benefits.map(({ id, icon: IconComponent, title, text }) => (
          <div
            key={id}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
              padding: "1.25rem",
              borderRadius: "var(--radius-xl)",
              backgroundColor: "rgba(10, 75, 70, 0.6)",
              border: "1px solid rgba(23, 162, 150, 0.25)",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "var(--radius-lg)",
                backgroundColor: "var(--bg-dark-accent)",
                border: "1px solid rgba(23, 162, 150, 0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#9EEFE8",
                flexShrink: 0,
              }}
            >
              <IconComponent size={20} aria-hidden="true" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-inverse)", lineHeight: 1.3 }}>
                {title}
              </h3>
              <p style={{ fontSize: "0.8rem", color: "var(--text-inverse-muted)", lineHeight: 1.5 }}>
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

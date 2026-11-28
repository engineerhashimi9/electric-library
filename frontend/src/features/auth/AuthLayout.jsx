import React from "react";
import { BookOpen, BookmarkCheck, Globe2, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import BrandLogo from "@/components/ui/BrandLogo";

export const AuthLayout = ({ children }) => {
  const { t } = useTranslation();

  const highlights = [
    { icon: BookOpen, text: t("auth.benefit1") },
    { icon: BookmarkCheck, text: t("auth.benefit2") },
    { icon: Globe2, text: t("auth.benefit3") },
  ];

  return (
    <div className="auth-page-container">
      <div className="auth-split-wrapper">
        {/* Desktop Editorial Sanctuary Showcase */}
        <aside
          aria-label="Library Sanctuary Overview"
          className="auth-sanctuary-aside"
        >
          <div
            style={{
              position: "absolute",
              top: "-5rem",
              right: "-5rem",
              width: "16rem",
              height: "16rem",
              background: "var(--primary-glow)",
              borderRadius: "50%",
              filter: "blur(50px)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem" }}>
              <BrandLogo />
              <span style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-inverse)" }}>
                {t("nav.brand")}
              </span>
            </Link>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "0.5rem" }}>
              <div className="badge badge-teal" style={{ alignSelf: "flex-start" }}>
                <Sparkles size={13} aria-hidden="true" />
                <span>{t("auth.showcaseEyebrow")}</span>
              </div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text-inverse)", lineHeight: 1.25 }}>
                {t("auth.showcaseTitle")}
              </h2>
              <p style={{ fontSize: "0.9rem", color: "var(--text-inverse-muted)", lineHeight: 1.6 }}>
                {t("auth.showcaseDesc")}
              </p>
            </div>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem", marginTop: "0.5rem" }}>
              {highlights.map(({ icon: Icon, text }, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.85rem" }}>
                  <span
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "var(--bg-dark-accent)",
                      border: "1px solid rgba(23, 162, 150, 0.3)",
                      color: "#9EEFE8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} aria-hidden="true" />
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-inverse-muted)", lineHeight: 1.5, paddingTop: "4px" }}>
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              position: "relative",
              marginTop: "2rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--border-dark)",
              display: "flex",
              flexDirection: "column",
              gap: "0.35rem",
            }}
          >
            <p style={{ fontStyle: "italic", fontSize: "0.85rem", color: "var(--text-inverse)", lineHeight: 1.6 }}>
              {t("auth.quote")}
            </p>
            <p style={{ fontSize: "0.75rem", color: "#9EEFE8", fontWeight: 700 }}>
              {t("auth.quoteAuthor")}
            </p>
          </div>
        </aside>

        {/* Form Container */}
        <main style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;

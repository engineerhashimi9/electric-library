import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Sparkles, BookOpen, Users, ShieldCheck } from "lucide-react";
import DesktopSpotlightCard from "./DesktopSpotlightCard";
import Eyebrow from "@/components/ui/Eyebrow";

export default function HeroBanner({ spotlightBook, name }) {
  const { t, i18n } = useTranslation();
  const isFa = i18n.language === "fa";

  return (
    <section aria-label="Hero Spotlight" className="hero-spotlight-banner">
      <div className="hero-text-content">
        <Eyebrow>
          <Sparkles size={13} style={{ color: "var(--accent-gold)" }} />
          <span>{name ? `${name} • ${t("home.hero.eyebrow")}` : t("home.hero.eyebrow")}</span>
        </Eyebrow>

        <h1 className="hero-title font-serif">{t("home.hero.title")}</h1>

        <p className="hero-description">{t("home.hero.description")}</p>

        <div className="hero-actions-row">
          <Link to="/explorebooks" className="btn btn-primary btn-lg">
            {t("home.hero.exploreBtn")}
          </Link>
          <Link to="/favorite" className="btn btn-outline btn-lg">
            {t("home.hero.readingListBtn")}
          </Link>
        </div>

        {/* Live Library Archival Stats Bar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
            paddingTop: "1.25rem",
            marginTop: "0.5rem",
            borderTop: "1px solid var(--border-color)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--primary)" }}>
              14,200+
            </span>
            <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)", fontWeight: 600 }}>
              {isFa ? "آثار خطی و دیجیتال" : "Curated Volumes"}
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--primary)" }}>
              850+
            </span>
            <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)", fontWeight: 600 }}>
              {isFa ? "نویسندگان برجسته" : "Master Authors"}
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--primary)" }}>
              100%
            </span>
            <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)", fontWeight: 600 }}>
              {isFa ? "دسترسی آزاد و عمومی" : "Open Access"}
            </span>
          </div>
        </div>
      </div>

      <div className="hero-card-column">
        <DesktopSpotlightCard book={spotlightBook} />
      </div>
    </section>
  );
}

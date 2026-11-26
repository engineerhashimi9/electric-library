import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import DesktopSpotlightCard from "./DesktopSpotlightCard";
import Eyebrow from "@/components/ui/Eyebrow";

export default function HeroBanner({ spotlightBook, name }) {
  const { t } = useTranslation();

  return (
    <section aria-label="Hero Spotlight" className="hero-spotlight-banner">
      <div className="hero-text-content">
        <Eyebrow>
          {name ? `${name} • ${t("home.hero.eyebrow")}` : t("home.hero.eyebrow")}
        </Eyebrow>

        <h1 className="hero-title">{t("home.hero.title")}</h1>

        <p className="hero-description">{t("home.hero.description")}</p>

        <div className="hero-actions-row">
          <Link to="/explorebooks" className="btn btn-primary btn-lg">
            {t("home.hero.exploreBtn")}
          </Link>
          <Link to="/favorite" className="btn btn-outline btn-lg">
            {t("home.hero.readingListBtn")}
          </Link>
        </div>
      </div>

      <div className="hero-card-column">
        <DesktopSpotlightCard book={spotlightBook} />
      </div>
    </section>
  );
}

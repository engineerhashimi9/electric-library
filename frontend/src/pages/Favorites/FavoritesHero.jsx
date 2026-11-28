import React from "react";
import { BookMarked } from "lucide-react";
import { useTranslation } from "react-i18next";
import HeroActions from "./HeroActions";
import CategoryTabs from "./CategoryTabs";
import Eyebrow from "@/components/ui/Eyebrow";

export default function FavoritesHero({ total, actions, tabs }) {
  const { t } = useTranslation();

  return (
    <section className="catalog-hero-box" style={{ marginTop: "1rem" }}>
      <div className="hidden-mobile">
        <Eyebrow>{t("favorites.hero.badge")}</Eyebrow>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <h1
              className="font-serif"
              style={{
                fontSize: "2.35rem",
                fontWeight: 800,
                color: "var(--primary)",
                lineHeight: 1.25,
                letterSpacing: "-0.025em",
              }}
            >
              {t("favorites.hero.title")}
            </h1>
            <p style={{ fontSize: "1rem", color: "var(--text-secondary)", maxWidth: "34rem" }}>
              {t("favorites.hero.desc", { total })}
            </p>
          </div>
          <div className="hidden-mobile">
            <HeroActions {...actions} />
          </div>
        </div>

        <div className="hidden-desktop">
          <HeroActions compact {...actions} />
        </div>

        <CategoryTabs {...tabs} />
      </div>
    </section>
  );
}

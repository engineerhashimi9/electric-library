import React from "react";
import { Users, BellRing } from "lucide-react";
import { useTranslation } from "react-i18next";
import AuthorSearch from "./AuthorSearch";
import CategoryChips from "./CategoryChips";
import Eyebrow from "@/components/ui/Eyebrow";

export default function AuthorsHero({ total, followedCount, search, chips }) {
  const { t } = useTranslation();

  return (
    <section className="catalog-hero-box" style={{ marginTop: "1rem" }}>
      <div className="hidden-mobile">
        <Eyebrow>{t("authors.hero.badge")}</Eyebrow>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <h1
              style={{
                fontSize: "2.25rem",
                fontWeight: 800,
                color: "var(--primary)",
                lineHeight: 1.25,
                letterSpacing: "-0.025em",
              }}
            >
              {t("authors.hero.title")}
            </h1>
            <p style={{ fontSize: "1rem", color: "var(--text-secondary)", maxWidth: "34rem" }}>
              {t("authors.hero.desc")}
            </p>
          </div>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <span className="badge badge-sage" style={{ padding: "0.45rem 0.85rem", fontSize: "0.78rem" }}>
              <Users size={14} style={{ color: "var(--primary-light)" }} aria-hidden="true" />
              <span>{t("authors.hero.patronsArchived", { total })}</span>
            </span>
            <span className="badge badge-sage" style={{ padding: "0.45rem 0.85rem", fontSize: "0.78rem" }}>
              <BellRing size={14} style={{ color: "var(--primary-light)" }} aria-hidden="true" />
              <span>{t("authors.hero.following", { count: followedCount })}</span>
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <AuthorSearch {...search} />
          <CategoryChips {...chips} />
        </div>
      </div>
    </section>
  );
}

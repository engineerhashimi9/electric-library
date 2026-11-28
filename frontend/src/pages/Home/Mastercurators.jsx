import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AuthorCard from "./AuthorCard";
import Eyebrow from "@/components/ui/Eyebrow";

export default function MasterCurators({ authors }) {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="curators-heading" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
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
          <Eyebrow>{t("home.curators.eyebrow")}</Eyebrow>
          <h2
            id="curators-heading"
            style={{
              fontSize: "1.75rem",
              fontWeight: 800,
              color: "var(--primary)",
              letterSpacing: "-0.02em",
              lineHeight: 1.25,
            }}
          >
            {t("home.curators.title")}
          </h2>
          <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
            {t("home.curators.subtitle")}
          </p>
        </div>
        <Link
          to="/author"
          style={{
            fontSize: "0.85rem",
            fontWeight: 700,
            color: "var(--primary)",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
          }}
        >
          {t("home.curators.viewAll")}
        </Link>
      </div>

      <div className="books-grid">
        {authors.map((author, idx) => (
          <AuthorCard key={idx} author={author} />
        ))}
      </div>
    </section>
  );
}

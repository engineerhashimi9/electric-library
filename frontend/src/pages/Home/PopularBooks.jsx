import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import Eyebrow from "@/components/ui/Eyebrow";

export default function PopularBooks({ books }) {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="popular-heading" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
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
          <Eyebrow>{t("home.popular.eyebrow")}</Eyebrow>
          <h2
            id="popular-heading"
            style={{
              fontSize: "1.75rem",
              fontWeight: 800,
              color: "var(--primary)",
              letterSpacing: "-0.02em",
              lineHeight: 1.25,
            }}
          >
            {t("home.popular.title")}
          </h2>
          <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
            {t("home.popular.subtitle")}
          </p>
        </div>
        <Link
          to="/explorebooks"
          style={{
            fontSize: "0.85rem",
            fontWeight: 700,
            color: "var(--primary)",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
          }}
        >
          {t("home.popular.viewAll")}
        </Link>
      </div>

      <div className="books-grid">
        {books.map((book, idx) => (
          <BookCard key={idx} book={book} />
        ))}
      </div>
    </section>
  );
}

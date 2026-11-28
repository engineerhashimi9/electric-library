import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getLocalized } from "@/utils/langHelper";

export default function AuthorCard({ author }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const name = getLocalized(author.name, lang);
  const title = getLocalized(author.title, lang);
  const description = getLocalized(author.description, lang);
  const works = getLocalized(author.works, lang);

  return (
    <article className="author-card-box">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "0.75rem" }}>
        <img
          src={author.image}
          alt={name}
          className="author-avatar-img"
          style={{ width: "72px", height: "72px" }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", width: "100%" }}>
          <h3 className="author-name-title">{name}</h3>
          <p style={{ fontSize: "0.78rem", color: "var(--primary-light)", fontWeight: 700 }}>
            {title}
          </p>
        </div>
      </div>

      <p className="author-bio-snippet" style={{ textAlign: "center" }}>
        {description}
      </p>

      <div
        style={{
          marginTop: "auto",
          paddingTop: "0.75rem",
          borderTop: "1px solid var(--border-light)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600 }}>
          {works}
        </span>
        <Link
          to="/author"
          className="d-flex items-center gap-1"
          style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--primary)" }}
        >
          <span>{t("authors.featured.explore")}</span>
          <ArrowRight size={13} className="rtl-rotate-180" />
        </Link>
      </div>
    </article>
  );
}

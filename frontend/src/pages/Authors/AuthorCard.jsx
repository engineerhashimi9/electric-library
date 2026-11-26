import React from "react";
import { ArrowRight, BookMarked, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import Avatar from "@/components/ui/Avatar";
import FollowButton from "./FollowButton";
import { formatLife } from "./authors";
import { getLocalized } from "@/utils/langHelper";
import { formatFollowers } from "@/utils/formatters";

export default function AuthorCard({ author, following, onToggleFollow }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const isFa = lang === "fa";

  const { name, role, bio, works, followers, country, categories, photo } = author;

  const locName = getLocalized(name, lang);
  const locRole = getLocalized(role, lang);
  const locBio = getLocalized(bio, lang);
  const locCountry = getLocalized(country, lang);

  return (
    <article className="author-card-box">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.65rem", textAlign: "center" }}>
        <Avatar
          name={locName}
          photo={photo}
          className="author-avatar-img"
          style={{ width: "72px", height: "72px" }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
          <h3 className="author-name-title font-serif">{locName}</h3>
          <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 600 }}>
            {formatLife(author, isFa)} • {locCountry}
          </p>
        </div>
      </div>

      <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--primary-light)", textAlign: "center" }}>
        {locRole}
      </p>

      <p className="author-bio-snippet" style={{ textAlign: "center" }}>
        {locBio}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.35rem" }}>
        {categories.map((c) => (
          <span key={c} className="badge badge-sage">
            {c}
          </span>
        ))}
      </div>

      <div
        style={{
          marginTop: "auto",
          paddingTop: "0.75rem",
          borderTop: "1px solid var(--border-light)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          fontSize: "0.75rem",
          color: "var(--text-secondary)",
          fontWeight: 600,
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
          <BookMarked size={14} style={{ color: "var(--primary-light)" }} aria-hidden="true" />
          <span>{works} {t("authors.card.works")}</span>
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
          <Users size={14} style={{ color: "var(--primary-light)" }} aria-hidden="true" />
          <span>{formatFollowers(followers + (following ? 1 : 0))} {t("authors.card.followers")}</span>
        </span>
      </div>

      <FollowButton
        following={following}
        onToggle={onToggleFollow}
        className="w-full"
      />
    </article>
  );
}

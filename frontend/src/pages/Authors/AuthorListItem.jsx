import React from "react";
import { ArrowRight, BookMarked, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import Avatar from "@/components/ui/Avatar";
import FollowButton from "./FollowButton";
import { formatLife } from "./authors";
import { formatFollowers } from "@/utils/formatters";
import { getLocalized } from "@/utils/langHelper";

export default function AuthorListItem({ author, following, onToggleFollow }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const isFa = lang === "fa";

  const { name, role, bio, works, followers, country, categories, photo } = author;

  const locName = getLocalized(name, lang);
  const locRole = getLocalized(role, lang);
  const locBio = getLocalized(bio, lang);
  const locCountry = getLocalized(country, lang);

  return (
    <article className="book-list-item-box" style={{ alignItems: "center" }}>
      <Avatar
        name={locName}
        photo={photo}
        className="avatar-circle"
        style={{ width: "64px", height: "64px", flexShrink: 0 }}
      />

      <div style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0, gap: "0.25rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "0.5rem" }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--primary)" }}>{locName}</h3>
          <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--primary-light)" }}>{locRole}</span>
        </div>
        <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600 }}>
          {formatLife(author, isFa)} • {locCountry}
        </p>
        <p className="line-clamp-1 hidden-mobile" style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
          {locBio}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", fontSize: "0.75rem", color: "var(--text-secondary)", fontWeight: 600, paddingTop: "2px" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
            <BookMarked size={14} style={{ color: "var(--primary-light)" }} aria-hidden="true" />
            <span>{works} {t("authors.card.works")}</span>
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
            <Users size={14} style={{ color: "var(--primary-light)" }} aria-hidden="true" />
            <span>{formatFollowers(followers + (following ? 1 : 0))} {t("authors.card.followers")}</span>
          </span>
          <span className="hidden-mobile" style={{ display: "flex", gap: "0.35rem" }}>
            {categories.map((c) => (
              <span key={c} className="badge badge-sage">{c}</span>
            ))}
          </span>
        </div>
      </div>

      <FollowButton following={following} onToggle={onToggleFollow} />
    </article>
  );
}

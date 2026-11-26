import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Avatar from "@/components/ui/Avatar";
import FollowButton from "./FollowButton";
import { formatFollowers } from "@/utils/formatters";
import { formatLife } from "./authors";
import { getLocalized } from "@/utils/langHelper";

export default function FeaturedAuthor({ author, following, onToggleFollow }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const isFa = lang === "fa";

  if (!author) return null;

  const { name, role, bio, works, followers, photo } = author;

  const locName = getLocalized(name, lang);
  const locRole = getLocalized(role, lang);
  const locBio = getLocalized(bio, lang);

  return (
    <section className="card-dark" style={{ padding: "2.5rem 2rem", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          bottom: "-4rem",
          right: "-4rem",
          width: "16rem",
          height: "16rem",
          background: "var(--primary-glow)",
          borderRadius: "50%",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
          <Avatar
            name={locName}
            photo={photo}
            className="avatar-circle"
            style={{
              width: "84px",
              height: "84px",
              border: "3px solid var(--primary-light)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem", flex: 1, minWidth: 0 }}>
            <div className="badge badge-teal" style={{ alignSelf: "flex-start" }}>
              <Sparkles size={13} aria-hidden="true" />
              <span>{t("authors.featured.eyebrow")}</span>
            </div>
            <h2 style={{ fontSize: "1.85rem", fontWeight: 800, color: "var(--text-inverse)" }}>
              {locName}
            </h2>
            <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#9EEFE8" }}>
              {locRole} • {formatLife(author, isFa)}
            </p>
          </div>
        </div>

        <p style={{ fontSize: "0.95rem", color: "var(--text-inverse-muted)", lineHeight: 1.6, maxWidth: "44rem" }}>
          {locBio}
        </p>

        <p style={{ fontSize: "0.8rem", color: "var(--text-inverse-muted)", fontWeight: 600 }}>
          {t("authors.featured.preserved", { works })} •{" "}
          {t("authors.featured.followers", {
            count: formatFollowers(followers + (following ? 1 : 0)),
          })}
        </p>

        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", flexWrap: "wrap" }}>
          <FollowButton
            following={following}
            onToggle={onToggleFollow}
            variant="onDark"
          />
          <a
            href="#explore"
            className="btn btn-outline btn-sm"
            style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.3)" }}
          >
            <span>{t("authors.featured.explore")}</span>
            <ArrowRight size={14} className="rtl-rotate-180" />
          </a>
        </div>
      </div>
    </section>
  );
}

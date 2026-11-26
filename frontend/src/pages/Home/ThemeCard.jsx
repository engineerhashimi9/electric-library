import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getLocalized } from "@/utils/langHelper";

export default function ThemeCard({ theme }) {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const name = getLocalized(theme.name, lang);
  const works = getLocalized(theme.works, lang);

  return (
    <Link to="/explorebooks" className="theme-card-box">
      <div className="theme-icon-circle">
        <img
          style={{ width: "24px", height: "24px", objectFit: "contain" }}
          src={theme.icon}
          alt=""
          aria-hidden="true"
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "2px", width: "100%" }}>
        <h3 className="theme-name">{name}</h3>
        <p className="theme-count">{works}</p>
      </div>
    </Link>
  );
}

import React from "react";
import { ChevronDown, LayoutGrid, Rows3 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { sortOptions, regions } from "./authors";

const regionNames = {
  "All Regions": { en: "All Regions", fa: "همه مناطق" },
  "Europe": { en: "Western Europe", fa: "اروپای غربی" },
  "Latin America": { en: "Latin America", fa: "آمریکای لاتین" },
  "North America": { en: "North America", fa: "آمریکای شمالی" },
  "Asia": { en: "East Asia", fa: "شرق آسیا" },
  "Persian & Afghan": { en: "Persian & Afghan", fa: "فارسی و افغانستانی" },
  "Classical World": { en: "Classical World", fa: "جهان کلاسیک" },
};

const sortNames = {
  "Most Works": { en: "Most Works", fa: "بیشترین آثار" },
  "Most Followed": { en: "Most Followed", fa: "بیشترین دنبال‌کننده" },
  "Name A–Z": { en: "Name A–Z", fa: "نام الف–ی" },
  "Birth Year": { en: "Birth Year", fa: "سال تولد" },
};

export default function AuthorsToolbar({ shown, total, sort, onSort, region, onRegion, view, onView }) {
  const { t, i18n } = useTranslation();
  const isFa = i18n.language === "fa";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border-color)",
        borderRadius: "var(--radius-xl)",
        padding: "0.85rem 1.25rem",
        boxShadow: "var(--shadow-xs)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--primary)" }}>
          {t("authors.toolbar.cataloged", { total })}
        </h2>
        <span className="hidden-mobile" style={{ color: "var(--border-color)" }}>•</span>
        <span className="hidden-mobile" style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
          {t("authors.toolbar.showingPage", { shown })}
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
        <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", color: "var(--text-secondary)" }}>
            {t("authors.toolbar.region")}:
          </span>
          <select
            value={region}
            onChange={(e) => onRegion(e.target.value)}
            className="select-styled"
            style={{ padding: "0.4rem 0.75rem", fontSize: "0.8rem" }}
          >
            {regions.map((r) => (
              <option key={r} value={r}>
                {regionNames[r] ? (isFa ? regionNames[r].fa : regionNames[r].en) : r}
              </option>
            ))}
          </select>
        </label>

        <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", color: "var(--text-secondary)" }}>
            {t("authors.toolbar.sortBy")}:
          </span>
          <select
            value={sort}
            onChange={(e) => onSort(e.target.value)}
            className="select-styled"
            style={{ padding: "0.4rem 0.75rem", fontSize: "0.8rem" }}
          >
            {sortOptions.map((s) => (
              <option key={s} value={s}>
                {sortNames[s] ? (isFa ? sortNames[s].fa : sortNames[s].en) : s}
              </option>
            ))}
          </select>
        </label>

        <div
          role="group"
          aria-label="Layout switch"
          style={{
            display: "inline-flex",
            borderRadius: "var(--radius-md)",
            backgroundColor: "var(--bg-secondary)",
            border: "1px solid var(--border-color)",
            padding: "2px",
          }}
        >
          {[
            ["grid", LayoutGrid, "Grid layout"],
            ["list", Rows3, "List layout"],
          ].map(([k, Icon, label]) => (
            <button
              key={k}
              type="button"
              onClick={() => onView(k)}
              aria-label={label}
              aria-pressed={view === k}
              style={{
                borderRadius: "var(--radius-sm)",
                padding: "0.35rem 0.55rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: view === k ? "var(--primary)" : "transparent",
                color: view === k ? "var(--text-inverse)" : "var(--text-secondary)",
                transition: "all var(--transition-fast)",
                cursor: "pointer",
              }}
            >
              <Icon size={16} aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

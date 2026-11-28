import React from "react";
import { Cloud, ChevronDown, LayoutGrid, Rows3 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { sortOptions } from "./favorites";

export default function ShelfToolbar({
  total,
  sort,
  onSort,
  view,
  onView,
  previewEmpty,
  onTogglePreview,
}) {
  const { t, i18n } = useTranslation();
  const isFa = i18n.language === "fa";

  const sortMap = {
    "Recently Added": isFa ? "اخیراً اضافه شده" : t("favorites.sort.recent", "Recently Added"),
    "Highest Rated": isFa ? "بالاترین امتیاز" : t("favorites.sort.rating", "Highest Rated"),
    "Most Reviewed": isFa ? "بیشترین نقد و نظر" : t("favorites.sort.reviews", "Most Reviewed"),
    "Title A–Z": isFa ? "عنوان (الف تا ی)" : t("favorites.sort.title", "Title A–Z"),
  };

  const getSortLabel = (val) => sortMap[val] || val;

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
          {t("favorites.toolbar.worksCataloged", { total, defaultValue: `${total} Works Cataloged` })}
        </h2>
        <span style={{ color: "var(--border-color)" }}>•</span>
        <button
          type="button"
          onClick={onTogglePreview}
          style={{
            fontSize: "0.8rem",
            fontWeight: 700,
            color: "var(--primary-light)",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          {previewEmpty
            ? t("favorites.actions.exitEmpty", "Exit Empty State")
            : t("favorites.toolbar.toggleEmpty", "Toggle Empty State")}
        </button>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", color: "var(--text-secondary)" }}>
            {t("favorites.toolbar.sortBy", "SORT:")}
          </span>
          <select
            value={sort}
            onChange={(e) => onSort(e.target.value)}
            className="select-styled"
            style={{ padding: "0.4rem 0.75rem", fontSize: "0.8rem" }}
          >
            {sortOptions.map((o) => (
              <option key={o} value={o}>
                {getSortLabel(o)}
              </option>
            ))}
          </select>
        </label>

        <div
          role="group"
          aria-label="Layout view switch"
          style={{
            display: "inline-flex",
            borderRadius: "var(--radius-md)",
            backgroundColor: "var(--bg-secondary)",
            border: "1px solid var(--border-color)",
            padding: "2px",
          }}
        >
          {[
            { val: "grid", Icon: LayoutGrid, label: "Grid layout" },
            { val: "list", Icon: Rows3, label: "List layout" },
          ].map(({ val, Icon, label }) => (
            <button
              key={val}
              type="button"
              onClick={() => onView(val)}
              aria-label={label}
              aria-pressed={view === val}
              style={{
                borderRadius: "var(--radius-sm)",
                padding: "0.35rem 0.55rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: view === val ? "var(--primary)" : "transparent",
                color: view === val ? "var(--text-inverse)" : "var(--text-secondary)",
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

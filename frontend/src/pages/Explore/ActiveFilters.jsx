import React from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ViewToggle } from "./ViewToggle";
import { formatOptions } from "./data";

export default function ActiveFilters({
  filters,
  onChange,
  onClear,
  total,
  start,
  end,
  sort,
  onSortChange,
  view,
  onViewChange,
}) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const chips = [];

  if (filters.availableOnly) {
    chips.push({
      label: t("explore.filters.available"),
      remove: () => onChange({ ...filters, availableOnly: false }),
    });
  }
  if (filters.reserveOnly) {
    chips.push({
      label: t("explore.filters.reserve"),
      remove: () => onChange({ ...filters, reserveOnly: false }),
    });
  }
  if (filters.highRating) {
    chips.push({
      label: t("explore.filters.highRating"),
      remove: () => onChange({ ...filters, highRating: false }),
    });
  }
  filters.formats.forEach((format) => {
    const opt = formatOptions.find((option) => option.value === format);
    if (opt) {
      chips.push({
        label: lang === "fa" && opt.labelFa ? opt.labelFa : opt.label,
        remove: () =>
          onChange({
            ...filters,
            formats: filters.formats.filter((item) => item !== format),
          }),
      });
    }
  });
  if (filters.length) {
    chips.push({
      label: `${filters.length} ${t("explore.filters.length")}`,
      remove: () => onChange({ ...filters, length: "" }),
    });
  }
  if (filters.language) {
    chips.push({
      label: filters.language,
      remove: () => onChange({ ...filters, language: "" }),
    });
  }

  return (
    <section className="active-filters-bar">
      <div className="d-flex flex-wrap items-center gap-2">
        {chips.length > 0 && (
          <span
            className="hidden-mobile"
            style={{
              marginInlineEnd: "0.5rem",
              fontSize: "0.82rem",
              fontWeight: 800,
              color: "var(--primary)",
            }}
          >
            {t("explore.filters.active")}
          </span>
        )}
        {chips.map((chip) => (
          <button
            key={chip.label}
            type="button"
            onClick={chip.remove}
            aria-label={`Remove ${chip.label} filter`}
            className="active-filter-chip"
          >
            <span>{chip.label}</span>
            <X size={14} style={{ color: "var(--text-secondary)" }} />
          </button>
        ))}
        {chips.length > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="btn-ghost"
            style={{
              padding: "0.2rem 0.5rem",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "var(--primary-light)",
              border: "none",
              cursor: "pointer",
            }}
          >
            {t("explore.filters.clearAll")}
          </button>
        )}
      </div>

      <div className="d-flex items-center justify-between gap-3">
        <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", fontWeight: 600 }}>
          <span className="hidden-desktop">
            {t("explore.showingMobile", { total })}
          </span>
          <span className="hidden-mobile">
            {t("explore.showing", { start, end, total })}
          </span>
        </p>
        <label className="hidden-mobile relative">
          <select
            aria-label={t("explore.sort.label")}
            value={sort}
            onChange={(event) => onSortChange(event.target.value)}
            className="select-styled"
          >
            <option value="popular">{t("explore.sort.popular")}</option>
            <option value="rating">{t("explore.sort.rating")}</option>
            <option value="title">{t("explore.sort.title")}</option>
          </select>
        </label>
        <div className="hidden-mobile">
          <ViewToggle view={view} onChange={onViewChange} />
        </div>
      </div>
    </section>
  );
}

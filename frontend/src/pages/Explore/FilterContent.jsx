import React from "react";
import { MonitorCheck, SlidersHorizontal } from "lucide-react";
import { useTranslation } from "react-i18next";
import { formatOptions, languages } from "./data";

export function FilterContent({ filters, onChange, onReset }) {
  const { t, i18n } = useTranslation();
  const isFa = i18n.language === "fa";

  function toggleFormat(format) {
    const formats = filters.formats.includes(format)
      ? filters.formats.filter((item) => item !== format)
      : [...filters.formats, format];

    onChange({ ...filters, formats });
  }

  const lengthOptions = [
    { value: "", label: t("explore.filters.allLengths") },
    { value: "short", label: t("explore.filters.short") },
    { value: "standard", label: t("explore.filters.standard") },
    { value: "epic", label: t("explore.filters.epic") },
  ];

  return (
    <div className="filter-content">
      <div className="filter-header">
        <h2 className="filter-title">
          <SlidersHorizontal size={18} style={{ color: "var(--primary-light)" }} aria-hidden="true" />
          <span>{t("explore.filters.title")}</span>
        </h2>

        <button
          type="button"
          onClick={onReset}
          className="btn-ghost"
          style={{
            fontSize: "0.78rem",
            fontWeight: 700,
            color: "var(--primary-light)",
            border: "none",
            cursor: "pointer",
            padding: "0.2rem 0.5rem",
            borderRadius: "var(--radius-sm)",
          }}
        >
          {t("explore.filters.reset")}
        </button>
      </div>

      <fieldset className="filter-group">
        <legend className="filter-legend">{t("explore.filters.format")}</legend>

        <div className="d-flex flex-col gap-2">
          {formatOptions.map((option) => (
            <label key={option.value} className="filter-option-row">
              <input
                type="checkbox"
                checked={filters.formats.includes(option.value)}
                onChange={() => toggleFormat(option.value)}
                style={{
                  width: "16px",
                  height: "16px",
                  accentColor: "var(--primary-light)",
                  cursor: "pointer",
                }}
              />
              <span style={{ flex: 1 }}>{isFa && option.labelFa ? option.labelFa : option.label}</span>
              <span className="badge badge-sage" style={{ fontSize: "0.68rem" }}>
                {option.count}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="filter-group">
        <legend className="filter-legend">
          {t("explore.filters.circulation")}
        </legend>

        <label className="filter-option-row">
          <input
            type="checkbox"
            checked={filters.availableOnly}
            onChange={(event) =>
              onChange({
                ...filters,
                availableOnly: event.target.checked,
              })
            }
            style={{
              width: "16px",
              height: "16px",
              accentColor: "var(--primary-light)",
              cursor: "pointer",
            }}
          />
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "var(--primary-light)",
            }}
            aria-hidden="true"
          />
          <span>{t("explore.filters.available")}</span>
        </label>

        <label className="filter-option-row">
          <input
            type="checkbox"
            checked={filters.reserveOnly}
            onChange={(event) =>
              onChange({
                ...filters,
                reserveOnly: event.target.checked,
              })
            }
            style={{
              width: "16px",
              height: "16px",
              accentColor: "var(--primary)",
              cursor: "pointer",
            }}
          />
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "var(--primary)",
            }}
            aria-hidden="true"
          />
          <span>{t("explore.filters.reserve")}</span>
        </label>
      </fieldset>

      <fieldset className="filter-group">
        <legend className="filter-legend">
          {t("explore.filters.length")}
        </legend>

        <div className="d-flex flex-col gap-2">
          {lengthOptions.map((option) => (
            <label key={option.value} className="filter-option-row">
              <input
                type="radio"
                name="volume-length"
                checked={filters.length === option.value}
                onChange={() => onChange({ ...filters, length: option.value })}
                style={{
                  width: "16px",
                  height: "16px",
                  accentColor: "var(--primary-light)",
                  cursor: "pointer",
                }}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="filter-group">
        <legend className="filter-legend">{t("explore.filters.languages")}</legend>

        <div className="d-flex flex-wrap gap-2">
          {languages.map(({ label, count }) => {
            const isSelected = filters.language === label;
            return (
              <button
                key={label}
                type="button"
                aria-pressed={isSelected}
                onClick={() =>
                  onChange({
                    ...filters,
                    language: isSelected ? "" : label,
                  })
                }
                className={`chip ${isSelected ? "active" : ""}`}
                style={{ fontSize: "0.75rem", padding: "0.3rem 0.75rem" }}
              >
                <span>{label}</span>
                <span className="chip-count">{count}</span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <label className="filter-option-row" style={{ paddingTop: "0.25rem" }}>
        <input
          type="checkbox"
          checked={filters.highRating}
          onChange={(event) =>
            onChange({ ...filters, highRating: event.target.checked })
          }
          style={{
            width: "16px",
            height: "16px",
            accentColor: "var(--primary-light)",
            cursor: "pointer",
          }}
        />
        <span>{t("explore.filters.highRating")}</span>
      </label>

      <div className="filter-info-card">
        <h3
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.45rem",
            fontSize: "0.82rem",
            fontWeight: 800,
            color: "var(--primary)",
          }}
        >
          <MonitorCheck size={16} style={{ color: "var(--primary-light)" }} aria-hidden="true" />
          <span>{t("explore.filters.marginaliaSync")}</span>
        </h3>

        <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
          {t("explore.filters.marginaliaSyncDesc")}
        </p>
      </div>
    </div>
  );
}

export default FilterContent;

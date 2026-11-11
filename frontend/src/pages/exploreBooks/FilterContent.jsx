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
    <div className="space-y-7">
      <div className="flex items-center justify-between gap-3 pb-2 border-b border-[#D0E8E6]">
        <h2 className="flex items-center gap-2 text-lg font-extrabold text-[#0E6760]">
          <SlidersHorizontal size={20} className="text-[#17A296]" aria-hidden="true" />
          <span>{t("explore.filters.title")}</span>
        </h2>

        <button
          type="button"
          onClick={onReset}
          className="shrink-0 text-xs font-bold text-[#17A296] hover:text-[#0E6760] hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] rounded px-1"
        >
          {t("explore.filters.reset")}
        </button>
      </div>

      <fieldset className="space-y-3">
        <legend className="mb-2 text-xs font-bold uppercase tracking-wider text-[#236D64]">{t("explore.filters.format")}</legend>

        <div className="space-y-3">
          {formatOptions.map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-center gap-3 text-xs sm:text-sm text-[#0A2E2C] font-semibold hover:text-[#0E6760] transition-colors"
            >
              <input
                type="checkbox"
                checked={filters.formats.includes(option.value)}
                onChange={() => toggleFormat(option.value)}
                className="h-4 w-4 rounded accent-[#17A296] focus:ring-2 focus:ring-[#17A296]"
              />
              <span className="flex-1">{isFa && option.labelFa ? option.labelFa : option.label}</span>
              <span className="rounded-full bg-[#E6F4F3] border border-[#D0E8E6] px-2 py-0.5 text-[11px] font-bold text-[#4A6B68]">
                {option.count}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="space-y-3 pt-2">
        <legend className="mb-2 text-xs font-bold uppercase tracking-wider text-[#236D64]">
          {t("explore.filters.circulation")}
        </legend>

        <label className="flex cursor-pointer items-center gap-3 text-xs sm:text-sm text-[#0A2E2C] font-semibold hover:text-[#0E6760] transition-colors">
          <input
            type="checkbox"
            checked={filters.availableOnly}
            onChange={(event) =>
              onChange({
                ...filters,
                availableOnly: event.target.checked,
              })
            }
            className="h-4 w-4 rounded accent-[#17A296] focus:ring-2 focus:ring-[#17A296]"
          />
          <span className="h-2 w-2 rounded-full bg-[#17A296]" aria-hidden="true" />
          <span>{t("explore.filters.available")}</span>
        </label>

        <label className="flex cursor-pointer items-center gap-3 text-xs sm:text-sm text-[#0A2E2C] font-semibold hover:text-[#0E6760] transition-colors">
          <input
            type="checkbox"
            checked={filters.reserveOnly}
            onChange={(event) =>
              onChange({
                ...filters,
                reserveOnly: event.target.checked,
              })
            }
            className="h-4 w-4 rounded accent-[#17A296] focus:ring-2 focus:ring-[#17A296]"
          />
          <span className="h-2 w-2 rounded-full bg-[#236D64]" aria-hidden="true" />
          <span>{t("explore.filters.reserve")}</span>
        </label>
      </fieldset>

      <fieldset className="space-y-3 pt-2">
        <legend className="mb-2 text-xs font-bold uppercase tracking-wider text-[#236D64]">
          {t("explore.filters.length")}
        </legend>

        <div className="space-y-2.5">
          {lengthOptions.map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-center gap-3 text-xs sm:text-sm text-[#0A2E2C] font-semibold hover:text-[#0E6760] transition-colors"
            >
              <input
                type="radio"
                name="volume-length"
                checked={filters.length === option.value}
                onChange={() => onChange({ ...filters, length: option.value })}
                className="h-4 w-4 accent-[#17A296] focus:ring-2 focus:ring-[#17A296]"
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="space-y-3 pt-2">
        <legend className="mb-2 text-xs font-bold uppercase tracking-wider text-[#236D64]">{t("explore.filters.languages")}</legend>

        <div className="flex flex-wrap gap-2">
          {languages.map(({ label, count }) => (
            <button
              key={label}
              type="button"
              aria-pressed={filters.language === label}
              onClick={() =>
                onChange({
                  ...filters,
                  language: filters.language === label ? "" : label,
                })
              }
              className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] ${
                filters.language === label
                  ? "bg-[#0E6760] text-[#FFFFFF] shadow-sm"
                  : "bg-[#E6F4F3] border border-[#D0E8E6] text-[#4A6B68] hover:bg-[#D0E8E6] hover:text-[#0E6760]"
              }`}
            >
              {label} ({count})
            </button>
          ))}
        </div>
      </fieldset>

      <label className="flex cursor-pointer items-center gap-3 text-xs sm:text-sm text-[#0A2E2C] font-semibold hover:text-[#0E6760] transition-colors pt-2">
        <input
          type="checkbox"
          checked={filters.highRating}
          onChange={(event) =>
            onChange({ ...filters, highRating: event.target.checked })
          }
          className="h-4 w-4 rounded accent-[#17A296] focus:ring-2 focus:ring-[#17A296]"
        />
        <span>{t("explore.filters.highRating")}</span>
      </label>

      <div className="rounded-2xl bg-[#E6F4F3] border border-[#D0E8E6] p-4 space-y-2">
        <h3 className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0E6760]">
          <MonitorCheck size={18} className="text-[#17A296]" aria-hidden="true" />
          <span>{t("explore.filters.marginaliaSync")}</span>
        </h3>

        <p className="text-xs text-[#4A6B68] leading-relaxed">
          {t("explore.filters.marginaliaSyncDesc")}
        </p>
      </div>
    </div>
  );
}

export default FilterContent;

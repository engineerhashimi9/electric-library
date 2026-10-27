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
    <>
      <div className="mb-8 flex items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-xl font-bold text-[#09261C]">
          <SlidersHorizontal size={21} className="text-[#10B981]" />
          {t("explore.filters.title")}
        </h2>

        <button
          onClick={onReset}
          className="shrink-0 text-xs font-bold text-[#10B981] hover:text-[#09261C] hover:underline"
        >
          {t("explore.filters.reset")}
        </button>
      </div>

      <fieldset className="mb-9">
        <legend className="mb-5 text-xs font-bold uppercase text-[#6B9080]">{t("explore.filters.format")}</legend>

        <div className="space-y-5">
          {formatOptions.map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-center gap-3 text-sm text-[#111C18] font-medium"
            >
              <input
                type="checkbox"
                checked={filters.formats.includes(option.value)}
                onChange={() => toggleFormat(option.value)}
                className="h-4 w-4 accent-[#10B981]"
              />
              <span className="flex-1">{isFa && option.labelFa ? option.labelFa : option.label}</span>
              <span className="rounded-full bg-[#EAF4F0] border border-[#DDECE6] px-2 py-0.5 text-xs font-bold text-[#52665E]">
                {option.count}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mb-9">
        <legend className="mb-5 text-xs font-bold uppercase text-[#6B9080]">
          {t("explore.filters.circulation")}
        </legend>

        <label className="mb-4 flex cursor-pointer items-center gap-3 text-sm text-[#111C18] font-medium">
          <input
            type="checkbox"
            checked={filters.availableOnly}
            onChange={(event) =>
              onChange({
                ...filters,
                availableOnly: event.target.checked,
              })
            }
            className="h-4 w-4 accent-[#10B981]"
          />
          <span className="h-2 w-2 rounded-full bg-[#10B981]" />
          {t("explore.filters.available")}
        </label>

        <label className="flex cursor-pointer items-center gap-3 text-sm text-[#111C18] font-medium">
          <input
            type="checkbox"
            checked={filters.reserveOnly}
            onChange={(event) =>
              onChange({
                ...filters,
                reserveOnly: event.target.checked,
              })
            }
            className="h-4 w-4 accent-[#10B981]"
          />
          <span className="h-2 w-2 rounded-full bg-[#6B9080]" />
          {t("explore.filters.reserve")}
        </label>
      </fieldset>

      <fieldset className="mb-9">
        <legend className="mb-5 text-xs font-bold uppercase text-[#6B9080]">
          {t("explore.filters.length")}
        </legend>

        <div className="space-y-4">
          {lengthOptions.map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-center gap-3 text-sm text-[#111C18] font-medium"
            >
              <input
                type="radio"
                name="volume-length"
                checked={filters.length === option.value}
                onChange={() => onChange({ ...filters, length: option.value })}
                className="h-4 w-4 accent-[#10B981]"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mb-9">
        <legend className="mb-4 text-xs font-bold uppercase text-[#6B9080]">{t("explore.filters.languages")}</legend>

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
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${
                filters.language === label
                  ? "bg-[#09261C] text-[#FFFFFF]"
                  : "bg-[#EAF4F0] border border-[#DDECE6] text-[#52665E] hover:bg-[#DDECE6] hover:text-[#09261C]"
              }`}
            >
              {label} ({count})
            </button>
          ))}
        </div>
      </fieldset>

      <label className="mb-8 flex cursor-pointer items-center gap-3 text-sm text-[#111C18] font-medium">
        <input
          type="checkbox"
          checked={filters.highRating}
          onChange={(event) =>
            onChange({ ...filters, highRating: event.target.checked })
          }
          className="h-4 w-4 accent-[#10B981]"
        />
        {t("explore.filters.highRating")}
      </label>

      <div className="rounded-2xl bg-[#EAF4F0] border border-[#DDECE6] p-4">
        <h3 className="flex items-center gap-2 text-sm font-bold text-[#09261C]">
          <MonitorCheck size={18} className="text-[#10B981]" />
          {t("explore.filters.marginaliaSync")}
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#52665E]">
          {t("explore.filters.marginaliaSyncDesc")}
        </p>
      </div>
    </>
  );
}

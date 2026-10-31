// src/pages/exploreBooks/ActiveFilters.jsx
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
    <section className="flex flex-col gap-3 pb-2 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap items-center gap-2">
        {chips.length > 0 && (
          <span className="mr-1 rtl:mr-0 rtl:ml-1 hidden text-[14px] font-bold text-[#0E6760] lg:inline">
            {t("explore.filters.active")}
          </span>
        )}
        {chips.map((chip) => (
          <button
            key={chip.label}
            onClick={chip.remove}
            aria-label={`Remove ${chip.label} filter`}
            className="inline-flex items-center gap-1 rounded-full bg-[#E6F4F3] border border-[#D0E8E6] hover:bg-[#D0E8E6] px-3 py-1 text-xs font-bold text-[#0E6760] sm:text-sm transition-colors"
          >
            {chip.label}
            <X size={14} className="text-[#4A6B68]" />
          </button>
        ))}
        {chips.length > 0 && (
          <button
            onClick={onClear}
            className="px-2 text-xs font-bold text-[#17A296] hover:text-[#0E6760] hover:underline hover:underline-offset-4"
          >
            {t("explore.filters.clearAll")}
          </button>
        )}
      </div>

      <div className="flex items-center justify-between lg:justify-end gap-4">
        <p className="text-xs text-[#4A6B68] font-medium sm:text-sm">
          <span className="lg:hidden">
            {t("explore.showingMobile", { total })}
          </span>
          <span className="hidden lg:inline">
            {t("explore.showing", { start, end, total })}
          </span>
        </p>
        <select
          aria-label={t("explore.sort.label")}
          value={sort}
          onChange={(event) => onSortChange(event.target.value)}
          className="hidden rounded-xl bg-[#FFFFFF] border border-[#D0E8E6] text-[#0A2E2C] px-4 py-3 text-sm font-bold shadow-sm lg:block outline-none focus:border-[#17A296]"
        >
          <option value="popular">{t("explore.sort.popular")}</option>
          <option value="rating">{t("explore.sort.rating")}</option>
          <option value="title">{t("explore.sort.title")}</option>
        </select>
        <div className="hidden lg:block">
          <ViewToggle view={view} onChange={onViewChange} />
        </div>
      </div>
    </section>
  );
}
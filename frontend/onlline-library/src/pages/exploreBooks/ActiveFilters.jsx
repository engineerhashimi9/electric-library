import { X } from "lucide-react";
import { ViewToggle } from "./ViewToggle";
import { formatOptions } from "./data";

export function ActiveFilters({
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
  const chips = [];

  if (filters.availableOnly) {
    chips.push({
      label: "Available Now",
      remove: () => onChange({ ...filters, availableOnly: false }),
    });
  }

  if (filters.reserveOnly) {
    chips.push({
      label: "Reserve Queue",
      remove: () => onChange({ ...filters, reserveOnly: false }),
    });
  }

  if (filters.highRating) {
    chips.push({
      label: "Rating ★ 4.5+",
      remove: () => onChange({ ...filters, highRating: false }),
    });
  }

  filters.formats.forEach((format) => {
    chips.push({
      label: formatOptions.find((option) => option.value === format).label,
      remove: () =>
        onChange({
          ...filters,
          formats: filters.formats.filter((item) => item !== format),
        }),
    });
  });

  if (filters.length) {
    chips.push({
      label: `${filters.length} length`,
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
    <section className="flex items-center  flex-col pb-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap items-center gap-2">
        {chips.length > 0 && (
          <span className="mr-1 hidden text-[14px] font-bold text-[#555c57] lg:inline">     
            ACTIVE:
          </span>
        )}

        {chips.map((chip) => (
          <button
            key={chip.label}
            onClick={chip.remove}
            aria-label={`Remove ${chip.label} filter`}
            className="inline-flex items-center gap-1 rounded-full bg-[#eae8e5] px-3 p-1 text-[10px] font-semibold sm:text-sm"
          >
            {chip.label}
            <X size={14} />
          </button>
        ))}

        {chips.length > 0 && (
          <button
            onClick={onClear}
            className="px-2 text-xs font-semibold text-[#a04424] hover:underline hover:underline-offset-4"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="flex items-center gap-4">
        <p className="text-xs text-[#555c57] sm:text-sm">
          <span className="lg:hidden">
            Showing <strong className="text-[#08271d]">{total}</strong> curated
            titles
          </span>
          <span className="hidden lg:inline">
            Showing {start}–{end} of {total} curated titles
          </span>
        </p>

        <select
          aria-label="Sort books"
          value={sort}
          onChange={(event) => onSortChange(event.target.value)}
          className="hidden rounded-xl bg-white px-4 py-3 text-sm font-semibold shadow-sm lg:block"
        >
          <option value="popular">Most Popular</option>
          <option value="rating">Highest Rated</option>
          <option value="title">Title A–Z</option>
        </select>

        <div className="hidden lg:block">
          <ViewToggle view={view} onChange={onViewChange} />
        </div>
      </div>
    </section>
  );
}

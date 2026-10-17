import { MonitorCheck, SlidersHorizontal } from "lucide-react";
import { formatOptions, languages } from "./data";

export function FilterContent({ filters, onChange, onReset }) {
  function toggleFormat(format) {
    const formats = filters.formats.includes(format)
      ? filters.formats.filter((item) => item !== format)
      : [...filters.formats, format];

    onChange({ ...filters, formats });
  }

  return (
    <>
      <div className="mb-8 flex items-center justify-between gap-3">
        <h2 className="font-editorial flex items-center gap-2 text-xxl font-semibold text-[#08271d]">
          <SlidersHorizontal size={21} />
          Catalog Filters
        </h2>

        <button
          onClick={onReset}
          className="shrink-0 text-[10px] font-semibold text-[#a04424]"
        >
          Reset All
        </button>
      </div>

      <fieldset className="mb-9">
        <legend className="mb-5 text-xs font-bold uppercase">Format</legend>

        <div className="space-y-5">
          {formatOptions.map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-center gap-3 text-sm"
            >
              <input
                type="checkbox"
                checked={filters.formats.includes(option.value)}
                onChange={() => toggleFormat(option.value)}
                className="h-4 w-4 accent-[#1d392d]"
              />
              <span className="flex-1">{option.label}</span>
              <span className="rounded-full bg-[#efeeeb] px-2 py-0.5 text-xs font-semibold text-[#3c4658]">
                {option.count}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mb-9">
        <legend className="mb-5 text-xs font-bold uppercase">
          Vault Circulation
        </legend>

        <label className="mb-4 flex cursor-pointer items-center gap-3 text-sm">
          <input
            type="checkbox"
            checked={filters.availableOnly}
            onChange={(event) =>
              onChange({
                ...filters,
                availableOnly: event.target.checked,
              })
            }
            className="h-4 w-4 accent-[#1d392d]"
          />
          <span className="h-2 w-2 rounded-full bg-emerald-600" />
          Immediate Access
        </label>

        <label className="flex cursor-pointer items-center gap-3 text-sm">
          <input
            type="checkbox"
            checked={filters.reserveOnly}
            onChange={(event) =>
              onChange({
                ...filters,
                reserveOnly: event.target.checked,
              })
            }
            className="h-4 w-4 accent-[#1d392d]"
          />
          <span className="h-2 w-2 rounded-full bg-amber-500" />
          Reserve Queue
        </label>
      </fieldset>

      <fieldset className="mb-9">
        <legend className="mb-5 text-xs font-bold uppercase">
          Volume Length
        </legend>

        <div className="space-y-4">
          {[
            { value: "", label: "All lengths" },
            { value: "short", label: "Short (< 200 pp)" },
            { value: "standard", label: "Standard (200–400 pp)" },
            { value: "epic", label: "Epic Tomes (400+ pp)" },
          ].map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-center gap-3 text-sm"
            >
              <input
                type="radio"
                name="volume-length"
                checked={filters.length === option.value}
                onChange={() => onChange({ ...filters, length: option.value })}
                className="h-4 w-4 accent-[#1d392d]"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mb-9">
        <legend className="mb-4 text-xs font-bold uppercase">Languages</legend>

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
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${
                filters.language === label
                  ? "bg-[#1d392d] text-white"
                  : "bg-[#efeeeb] text-[#454b47]"
              }`}
            >
              {label} ({count})
            </button>
          ))}
        </div>
      </fieldset>

      <label className="mb-8 flex cursor-pointer items-center gap-3 text-sm">
        <input
          type="checkbox"
          checked={filters.highRating}
          onChange={(event) =>
            onChange({ ...filters, highRating: event.target.checked })
          }
          className="h-4 w-4 accent-[#1d392d]"
        />
        Rating 4.5+
      </label>

      <div className="rounded-2xl bg-[#efeeeb] p-4">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-[#08271d]">
          <MonitorCheck size={18} />
          Offline Marginalia Sync
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#555c57]">
          Downloaded manuscripts preserve handwritten annotations across e-ink
          slates and desktop folios.
        </p>
      </div>
    </>
  );
}

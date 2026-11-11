import { Grid2X2, List } from "lucide-react";

export function ViewToggle({ view, onChange }) {
  return (
    <div
      role="group"
      aria-label="View layout switch"
      className="inline-flex shrink-0 rounded-xl bg-[#FFFFFF] border border-[#D0E8E6] p-1 shadow-library-sm"
    >
      {[
        { value: "grid", Icon: Grid2X2, label: "Grid view" },
        { value: "list", Icon: List, label: "List view" },
      ].map(({ value, Icon, label }) => (
        <button
          key={value}
          type="button"
          aria-label={label}
          aria-pressed={view === value}
          onClick={() => onChange(value)}
          className={`rounded-lg p-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] ${
            view === value
              ? "bg-[#0E6760] text-[#FFFFFF] shadow-sm"
              : "text-[#4A6B68] hover:text-[#0E6760] hover:bg-[#E6F4F3]"
          }`}
        >
          <Icon size={18} aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}

export default ViewToggle;

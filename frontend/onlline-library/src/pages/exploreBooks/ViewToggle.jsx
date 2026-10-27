import { Grid2X2, List } from "lucide-react";

export function ViewToggle({ view, onChange }) {
  return (
    <div className="inline-flex shrink-0 rounded-xl bg-[#FFFFFF] border border-[#D0E8E6] p-1">
      {[
        { value: "grid", Icon: Grid2X2 },
        { value: "list", Icon: List },
      ].map(({ value, Icon }) => (
        <button
          key={value}
          aria-label={`${value} view`}
          aria-pressed={view === value}
          onClick={() => onChange(value)}
          className={`rounded-lg p-2 transition ${
            view === value
              ? "bg-[#0E6760] text-[#FFFFFF] shadow-sm"
              : "text-[#4A6B68] hover:text-[#0E6760]"
          }`}
        >
          <Icon size={21} />
        </button>
      ))}
    </div>
  );
}

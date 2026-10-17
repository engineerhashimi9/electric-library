import { Grid2X2, List } from "lucide-react";

export function ViewToggle({ view, onChange }) {
  return (
    <div className="inline-flex shrink-0 rounded-xl bg-[#eeede9] p-1">
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
              ? "bg-white text-[#08271d] shadow-sm"
              : "text-[#555c57] hover:text-[#08271d]"
          }`}
        >
          <Icon size={21} />
        </button>
      ))}
    </div>
  );
}

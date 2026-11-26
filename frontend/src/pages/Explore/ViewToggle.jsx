import React from "react";
import { Grid2X2, List } from "lucide-react";

export function ViewToggle({ view, onChange }) {
  return (
    <div
      role="group"
      aria-label="View layout switch"
      style={{
        display: "inline-flex",
        flexShrink: 0,
        borderRadius: "var(--radius-md)",
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border-color)",
        padding: "3px",
        boxShadow: "var(--shadow-xs)",
      }}
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
          style={{
            borderRadius: "var(--radius-sm)",
            padding: "0.35rem 0.55rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: view === value ? "var(--primary)" : "transparent",
            color: view === value ? "var(--text-inverse)" : "var(--text-secondary)",
            transition: "all var(--transition-fast)",
            cursor: "pointer",
          }}
        >
          <Icon size={17} aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}

export default ViewToggle;

import React from "react";
import { Mic, Search, X } from "lucide-react";

export function SearchField({
  value,
  onChange,
  inputRef,
  placeholder = "Search titles, authors, translators...",
  compact = false,
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        borderRadius: "var(--radius-xl)",
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border-color)",
        padding: compact ? "0.6rem 0.95rem" : "0.85rem 1.25rem",
        boxShadow: "var(--shadow-sm)",
        transition: "all var(--transition-fast)",
      }}
    >
      <Search
        size={compact ? 18 : 20}
        style={{ color: "var(--primary-light)", flexShrink: 0 }}
        aria-hidden="true"
      />

      <input
        ref={inputRef}
        type="search"
        aria-label={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%",
          minWidth: 0,
          background: "transparent",
          fontSize: "0.9rem",
          color: "var(--text-primary)",
          fontWeight: 500,
        }}
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          style={{
            padding: "4px",
            borderRadius: "50%",
            color: "var(--text-secondary)",
            cursor: "pointer",
          }}
        >
          <X size={16} />
        </button>
      )}

      {!compact && (
        <span
          title="Voice search is not connected"
          aria-hidden="true"
          style={{ opacity: 0.6, display: "flex", alignItems: "center" }}
        >
          <Mic size={18} style={{ color: "var(--text-secondary)" }} />
        </span>
      )}

      <kbd
        className="hidden-mobile"
        style={{
          flexShrink: 0,
          borderRadius: "var(--radius-sm)",
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border-color)",
          padding: "0.2rem 0.55rem",
          fontSize: "0.75rem",
          fontWeight: 800,
          color: "var(--text-secondary)",
        }}
      >
        ⌘ K
      </kbd>
    </div>
  );
}

export default SearchField;

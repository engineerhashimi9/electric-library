import React from "react";

export default function Toggle({ checked, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      style={{
        position: "relative",
        display: "inline-flex",
        height: "24px",
        width: "44px",
        flexShrink: 0,
        cursor: "pointer",
        borderRadius: "var(--radius-full)",
        border: "2px solid transparent",
        backgroundColor: checked ? "var(--primary-light)" : "var(--border-color)",
        transition: "background-color var(--transition-fast)",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          pointerEvents: "none",
          display: "inline-block",
          height: "20px",
          width: "20px",
          borderRadius: "50%",
          backgroundColor: "#FFFFFF",
          boxShadow: "var(--shadow-xs)",
          transform: checked ? "translateX(20px)" : "translateX(0)",
          transition: "transform var(--transition-fast)",
        }}
      />
    </button>
  );
}

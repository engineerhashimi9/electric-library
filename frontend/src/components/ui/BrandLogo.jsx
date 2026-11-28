import React from "react";

export default function BrandLogo({ className = "", withText = false }) {
  return (
    <div className="d-inline-flex items-center gap-2">
      <div
        className={`shrink-0 d-inline-flex items-center justify-center ${className}`}
        style={{
          width: "36px",
          height: "36px",
          backgroundColor: "var(--primary)",
          borderRadius: "var(--radius-md)",
          boxShadow: "var(--shadow-sm)",
          padding: "5px",
        }}
      >
        <svg viewBox="0 0 32 32" width="100%" height="100%" fill="none" aria-hidden="true">
          <rect x="5" y="6" width="9" height="20" rx="2.5" fill="var(--primary-light)" />
          <rect x="18" y="6" width="9" height="20" rx="2.5" fill="var(--bg-secondary)" />
        </svg>
      </div>
      {withText && (
        <span
          style={{
            fontSize: "1.25rem",
            fontWeight: 800,
            color: "var(--primary)",
            letterSpacing: "-0.02em",
          }}
        >
          Bargin
        </span>
      )}
    </div>
  );
}

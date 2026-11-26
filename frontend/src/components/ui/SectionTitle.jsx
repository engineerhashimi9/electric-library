import React from "react";

export default function SectionTitle({ icon: Icon, children, right, className = "" }) {
  return (
    <div
      className={`d-flex items-center justify-between gap-4 ${className}`}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        marginBottom: "1rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
        {Icon && (
          <Icon
            size={20}
            style={{ color: "var(--primary-light)", flexShrink: 0 }}
            aria-hidden="true"
          />
        )}
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 800,
            color: "var(--primary)",
            lineHeight: 1.3,
          }}
        >
          {children}
        </h2>
      </div>
      {right && <div className="shrink-0">{right}</div>}
    </div>
  );
}

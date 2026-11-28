import React from "react";

export default function StatusLine({ status, meta, className = "" }) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "0.5rem",
        fontSize: "0.75rem",
      }}
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.35rem",
          fontWeight: 700,
          color: "var(--primary)",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: "var(--primary-light)",
            flexShrink: 0,
          }}
          aria-hidden="true"
        />
        <span className="truncate">{status?.label || ""}</span>
      </span>
      {meta && (
        <span style={{ whiteSpace: "nowrap", fontWeight: 700, color: "var(--text-muted)" }}>
          {meta}
        </span>
      )}
    </div>
  );
}

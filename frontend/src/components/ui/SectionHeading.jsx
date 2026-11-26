import React from "react";

export default function SectionHeading({ eyebrow, title, right, className = "" }) {
  return (
    <div
      className={`d-flex flex-col gap-3 ${className}`}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {eyebrow && (
            <div className="eyebrow-badge">
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "var(--primary-light)",
                }}
                aria-hidden="true"
              />
              <span>{eyebrow}</span>
            </div>
          )}
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 800,
              color: "var(--primary)",
              letterSpacing: "-0.02em",
              lineHeight: 1.25,
            }}
          >
            {title}
          </h2>
        </div>
        {right && <div className="shrink-0">{right}</div>}
      </div>
    </div>
  );
}

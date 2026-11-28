import React from "react";

export default function Eyebrow({ children, className = "" }) {
  return (
    <div className={`eyebrow-badge ${className}`}>
      <span
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "var(--primary-light)",
        }}
        aria-hidden="true"
      />
      <span>{children}</span>
    </div>
  );
}

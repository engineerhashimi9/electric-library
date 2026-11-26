import React from "react";

export default function ProgressBar({
  percent = 0,
  tone = "primary",
  bgColor,
  color,
  height = "8px",
  label = "Progress",
}) {
  const safePercent = Math.min(100, Math.max(0, Number(percent) || 0));
  const fillColor =
    color || (tone === "accent" ? "var(--primary)" : "var(--primary-light)");

  return (
    <div
      role="progressbar"
      aria-valuenow={safePercent}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
      style={{
        width: "100%",
        height: typeof height === "number" ? `${height}px` : height,
        backgroundColor: "var(--bg-secondary)",
        border: "1px solid var(--border-color)",
        borderRadius: "var(--radius-full)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${safePercent}%`,
          backgroundColor: bgColor || fillColor,
          borderRadius: "var(--radius-full)",
          transition: "width 0.3s ease",
        }}
      />
    </div>
  );
}

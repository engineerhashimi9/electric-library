import React, { useState } from "react";
import { BookOpen } from "lucide-react";

export default function BookCover({ cover, title, className = "" }) {
  const [failed, setFailed] = useState(false);
  const src = cover
    ? cover.startsWith("/") || cover.startsWith("http")
      ? cover
      : `/${cover}`
    : "";

  if (failed || !src) {
    return (
      <div
        className={className}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border-color)",
          padding: "1rem",
          textAlign: "center",
          fontSize: "0.85rem",
          color: "var(--primary)",
          fontWeight: 700,
        }}
      >
        <BookOpen size={24} style={{ color: "var(--primary-light)", opacity: 0.85 }} aria-hidden="true" />
        <span className="line-clamp-2">{typeof title === "string" ? title : "Cover"}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={typeof title === "string" ? title : "Book cover"}
      onError={() => setFailed(true)}
      loading="lazy"
      className={className}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
}

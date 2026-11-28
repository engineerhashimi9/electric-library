import React from "react";
import { BookOpen, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LiteraryLoader() {
  const { t, i18n } = useTranslation();
  const isFa = i18n.language === "fa";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        padding: "2rem",
        textAlign: "center",
        gap: "1.25rem",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "72px",
          height: "72px",
          borderRadius: "50%",
          backgroundColor: "var(--bg-secondary)",
          border: "2px solid var(--border-color)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "var(--shadow-md)",
          animation: "pulseGlow 2s infinite ease-in-out",
        }}
      >
        <BookOpen
          size={32}
          style={{ color: "var(--primary-light)", animation: "float 3s infinite ease-in-out" }}
        />
        <Sparkles
          size={16}
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            color: "var(--accent-gold)",
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", maxWidth: "24rem" }}>
        <p
          style={{
            fontSize: "0.95rem",
            fontWeight: 800,
            color: "var(--primary)",
            letterSpacing: "0.02em",
          }}
        >
          {isFa ? "در حال بازیابی کتاب از آرشیو..." : "Accessing Rare Volume from Archive…"}
        </p>
        <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontStyle: "italic" }}>
          {isFa
            ? "«کتابخانه‌ها دروازه‌های ورود به بی‌نهایت اندیشه‌اند»"
            : "“A library is an infinite labyrinth of preserved human wonder.”"}
        </p>
      </div>
    </div>
  );
}

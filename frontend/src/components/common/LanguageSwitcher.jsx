import React from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { useContext } from "react";
import { GlobalContext } from "@/context/language_context";
export function LanguageSwitcher({ compact = false }) {
  const { t, i18n } = useTranslation();
  const { currentLanguage, setCurrentLanguage } = useContext(GlobalContext);

  const toggleLanguage = () => {
    const nextLang = currentLanguage === "en" ? "fa" : "en";
    i18n.changeLanguage(nextLang);
  };

  if (compact) {
    return (
      <button
        onClick={toggleLanguage}
        title={currentLanguage === "en" ? "تغییر به زبان دری" : "Switch to English"}
        className="btn btn-outline btn-sm"
        style={{
          borderRadius: "var(--radius-md)",
          padding: "0.35rem 0.75rem",
          gap: "0.45rem",
        }}
        aria-label={t("nav.language", "Language")}
      >
        <Globe size={15} style={{ color: "var(--primary-light)", flexShrink: 0 }} aria-hidden="true" />
        <span style={{ fontWeight: 800 }}>{currentLanguage === "en" ? "دری" : "EN"}</span>
      </button>
    );
  }

  return (
    <div
      role="group"
      aria-label={t("nav.language", "Language")}
      style={{
        display: "inline-flex",
        alignItems: "center",
        borderRadius: "var(--radius-md)",
        backgroundColor: "var(--bg-secondary)",
        border: "1px solid var(--border-color)",
        padding: "3px",
        boxShadow: "var(--shadow-xs)",
      }}
    >
      <button
        onClick={() => i18n.changeLanguage("en")}
        aria-pressed={currentLang === "en"}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.35rem",
          padding: "0.35rem 0.75rem",
          fontSize: "0.78rem",
          fontWeight: 700,
          borderRadius: "var(--radius-sm)",
          backgroundColor: currentLang === "en" ? "var(--primary)" : "transparent",
          color: currentLang === "en" ? "var(--text-inverse)" : "var(--text-secondary)",
          transition: "all var(--transition-fast)",
        }}
      >
        <span>English</span>
      </button>
      <button
        onClick={() => i18n.changeLanguage("fa")}
        aria-pressed={currentLang === "fa"}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.35rem",
          padding: "0.35rem 0.75rem",
          fontSize: "0.78rem",
          fontWeight: 700,
          borderRadius: "var(--radius-sm)",
          backgroundColor: currentLang === "fa" ? "var(--primary)" : "transparent",
          color: currentLang === "fa" ? "var(--text-inverse)" : "var(--text-secondary)",
          transition: "all var(--transition-fast)",
        }}
      >
        <span>دری</span>
      </button>
    </div>
  );
}

export default LanguageSwitcher;

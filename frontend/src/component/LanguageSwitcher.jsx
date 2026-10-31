import React from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

export function LanguageSwitcher({ compact = false }) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === "fa" ? "fa" : "en";

  const toggleLanguage = () => {
    const nextLang = currentLang === "en" ? "fa" : "en";
    i18n.changeLanguage(nextLang);
  };

  if (compact) {
    return (
      <button
        onClick={toggleLanguage}
        title={currentLang === "en" ? "تغییر به زبان دری" : "Switch to English"}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#D0E8E6] text-[#0E6760] hover:bg-[#E6F4F3] hover:border-[#17A296] text-xs font-bold transition-colors shadow-sm"
        aria-label="Change language"
      >
        <Globe size={15} className="text-[#17A296]" />
        <span>{currentLang === "en" ? "دری" : "EN"}</span>
      </button>
    );
  }

  return (
    <div className="inline-flex items-center rounded-xl bg-[#E6F4F3] border border-[#D0E8E6] p-0.5 shadow-sm">
      <button
        onClick={() => i18n.changeLanguage("en")}
        aria-pressed={currentLang === "en"}
        className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
          currentLang === "en"
            ? "bg-[#0E6760] text-[#FFFFFF] shadow-sm"
            : "text-[#4A6B68] hover:text-[#0E6760]"
        }`}
      >
        <span>English</span>
      </button>
      <button
        onClick={() => i18n.changeLanguage("fa")}
        aria-pressed={currentLang === "fa"}
        className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
          currentLang === "fa"
            ? "bg-[#0E6760] text-[#FFFFFF] shadow-sm"
            : "text-[#4A6B68] hover:text-[#0E6760]"
        }`}
      >
        <span>دری</span>
      </button>
    </div>
  );
}

export default LanguageSwitcher;

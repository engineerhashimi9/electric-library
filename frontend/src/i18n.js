import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en/translation.json";
import faTranslation from "./locales/fa/translation.json";

const STORAGE_KEY = "library_language";
const savedLanguage = localStorage.getItem(STORAGE_KEY) || "en";

const resources = {
  en: { translation: enTranslation },
  fa: { translation: faTranslation },
};

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: "en",
  supportedLngs: ["en", "fa"],
  interpolation: {
    escapeValue: false,
  },
});

export function updateDirection(lang) {
  const isRtl = lang === "fa";
  document.documentElement.dir = isRtl ? "rtl" : "ltr";
  document.documentElement.lang = lang;
  if (isRtl) {
    document.body.classList.add("rtl");
  } else {
    document.body.classList.remove("rtl");
  }
}

// Apply on initial load
updateDirection(i18n.language);

// Update on language change
i18n.on("languageChanged", (lng) => {
  localStorage.setItem(STORAGE_KEY, lng);
  updateDirection(lng);
});

export default i18n;

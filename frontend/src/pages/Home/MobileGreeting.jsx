import { useTranslation } from "react-i18next";

/**
 * MobileGreeting
 * Compact header shown only on mobile screens with user name and reading streak.
 */
export default function MobileGreeting({ name = "" }) {
  const { t } = useTranslation();

  return (
    /* Mobile-only greeting container */
    <div className="md:hidden space-y-2 pt-2">
      <span className="text-xs font-bold text-[#236D64] uppercase tracking-wider block">
        {name ? `${name} • ${t("home.hero.eyebrow")}` : t("home.hero.eyebrow")}
      </span>

      {/* Title row with reading streak badge */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-xl sm:text-2xl font-extrabold text-[#0E6760] leading-snug">
          {t("home.hero.title")}
        </h1>
      </div>

      <p className="text-xs sm:text-sm text-[#4A6B68] font-medium leading-relaxed">
        {t("home.hero.description")}
      </p>
    </div>
  );
}

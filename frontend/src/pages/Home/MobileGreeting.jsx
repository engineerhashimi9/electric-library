import { useTranslation } from "react-i18next";

export default function MobileGreeting({ name = "Clara", streakDays = 14 }) {
  const { t } = useTranslation();

  return (
    <div className="md:hidden space-y-2 pt-2">
      <span className="text-xs font-bold text-[#236D64] uppercase tracking-wider block">
        {name} • {t("home.hero.eyebrow")}
      </span>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-xl sm:text-2xl font-extrabold text-[#0E6760] leading-snug">
          {t("home.hero.title")}
        </h1>
        <span
          className="px-3 py-1 bg-[#E6F4F3] border border-[#D0E8E6] text-[#236D64] text-xs font-bold rounded-full flex items-center gap-1.5 shrink-0 shadow-sm"
          role="status"
          aria-label={`${streakDays} days reading streak`}
        >
          <span>{streakDays}</span>
          <span aria-hidden="true">🔥</span>
        </span>
      </div>
      <p className="text-xs sm:text-sm text-[#4A6B68] font-medium leading-relaxed">
        {t("home.hero.description")}
      </p>
    </div>
  );
}

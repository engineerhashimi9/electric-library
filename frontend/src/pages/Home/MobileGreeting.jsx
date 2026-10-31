import { useTranslation } from "react-i18next";

export default function MobileGreeting({ streakDays = 14 }) {
  const { t } = useTranslation();

  return (
    <div className="md:hidden space-y-2">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h1 className="text-xl sm:text-2xl font-extrabold text-[#0E6760] leading-snug">
          {t("home.hero.title")}
        </h1>
        <span className="px-2.5 py-1 bg-[#E6F4F3] border border-[#D0E8E6] text-[#236D64] text-[10px] sm:text-[11px] font-bold rounded-full flex items-center gap-1 shrink-0">
          {streakDays ? `${streakDays} 🔥` : t("home.hero.dailyStreak")}
        </span>
      </div>
      <p className="text-xs text-[#4A6B68] font-medium leading-relaxed">
        {t("home.hero.description")}
      </p>
    </div>
  );
}

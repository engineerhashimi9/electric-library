import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ThemeCard from "./ThemeCard";
import Eyebrow from "@/component/ui/Eyebrow";

export default function BrowseThemes({ themes }) {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="themes-heading" className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div className="space-y-1">
          <Eyebrow>{t("home.themes.eyebrow")}</Eyebrow>
          <h2 id="themes-heading" className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0E6760] tracking-tight">
            {t("home.themes.title")}
          </h2>
          <p className="text-xs sm:text-sm text-[#4A6B68] font-medium">
            {t("home.themes.subtitle")}
          </p>
        </div>
        <Link
          to="/explorebooks"
          className="text-xs sm:text-sm text-[#0E6760] hover:text-[#17A296] font-bold transition-colors shrink-0 self-start sm:self-end hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] rounded"
        >
          {t("home.themes.viewAll")}
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
        {themes.map((themeItem, idx) => (
          <ThemeCard key={idx} theme={themeItem} />
        ))}
      </div>
    </section>
  );
}

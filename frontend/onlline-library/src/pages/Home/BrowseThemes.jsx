// src/pages/home/BrowseThemes.jsx
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ThemeCard from "./ThemeCard";

export default function BrowseThemes({ themes }) {
  const { t } = useTranslation();

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-[#6B9080] text-[10px] font-bold uppercase tracking-wider block">
           ~ {t("home.themes.eyebrow")}
          </span>
          <h3 className="text-lg md:text-[28px] text-[#09261C] font-bold">
            {t("home.themes.title")}
          </h3>
        </div>
        <Link
          to="/explorebooks"
          className="text-xs text-[#09261C] hover:text-[#10B981] font-bold transition-colors shrink-0"
        >
          {t("home.themes.viewAll")}
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
        {themes.map((tItem, idx) => (
          <ThemeCard key={idx} theme={tItem} />
        ))}
      </div>
    </div>
  );
}
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import DesktopSpotlightCard from "./DesktopSpotlighttCard";

export default function HeroBanner({ spotlightBook }) {
  const { t } = useTranslation();

  return (
    <div className="hidden md:grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-gradient-to-b from-[#EAF4F0] to-[#F6FBF9] p-6 lg:p-8 rounded-2xl border border-[#DDECE6] shadow-[0_10px_30px_-10px_rgba(9,38,28,0.06)]">
      <div className="lg:col-span-7 space-y-5 lg:space-y-7">
        <span className="text-xs font-bold text-[#6B9080] uppercase tracking-wider block">
          {t("home.hero.eyebrow")}
        </span>
        <h1 className="font-extrabold text-3xl lg:text-4xl text-[#09261C] leading-tight">
          {t("home.hero.title")}
        </h1>
        <p className="text-sm text-[#52665E] leading-relaxed max-w-lg">
          {t("home.hero.description")}
        </p>
        <div className="flex flex-wrap items-center gap-3 lg:gap-4 pt-1">
          <Link
            to="/explorebooks"
            className="px-6 py-2.5 bg-[#10B981] text-[#FFFFFF] hover:bg-[#09261C] text-xs font-bold rounded-lg transition-all shadow-sm"
          >
            {t("home.hero.exploreBtn")}
          </Link>
          <Link
            to="/library"
            className="px-6 py-2.5 bg-[#FFFFFF] border border-[#DDECE6] text-[#09261C] hover:bg-[#EAF4F0] text-xs font-semibold rounded-lg transition-all shadow-sm"
          >
            {t("home.hero.readingListBtn")}
          </Link>
        </div>
      </div>
      <DesktopSpotlightCard book={spotlightBook} />
    </div>
  );
}

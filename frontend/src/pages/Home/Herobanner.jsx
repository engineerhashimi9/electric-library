import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import DesktopSpotlightCard from "./DesktopSpotlighttCard";
import Eyebrow from "@/component/ui/Eyebrow";

export default function HeroBanner({ spotlightBook, name }) {
  const { t } = useTranslation();

  return (
    <section
      aria-label="Hero Spotlight"
      className="hidden md:grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-gradient-to-b from-[#E6F4F3] to-[#F4FAFA] p-6 lg:p-10 rounded-3xl border border-[#D0E8E6] shadow-library transition-all"
    >
      <div className="lg:col-span-7 space-y-5 lg:space-y-6">
        <Eyebrow>{name ? `${name} • ${t("home.hero.eyebrow")}` : t("home.hero.eyebrow")}</Eyebrow>

        <h1 className="font-extrabold text-3xl lg:text-4xl xl:text-5xl text-[#0E6760] leading-tight tracking-tight">
          {t("home.hero.title")}
        </h1>

        <p className="text-sm lg:text-base text-[#4A6B68] leading-relaxed max-w-xl font-medium">
          {t("home.hero.description")}
        </p>

        <div className="flex flex-wrap items-center gap-3.5 pt-2">
          <Link
            to="/explorebooks"
            className="px-6 py-3 bg-[#17A296] text-[#FFFFFF] hover:bg-[#0E6760] text-sm font-bold rounded-xl transition-all shadow-library-sm hover:shadow-library active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
          >
            {t("home.hero.exploreBtn")}
          </Link>
          <Link
            to="/favorite"
            className="px-6 py-3 bg-[#FFFFFF] border border-[#D0E8E6] text-[#0E6760] hover:bg-[#E6F4F3] hover:border-[#17A296] text-sm font-bold rounded-xl transition-all shadow-library-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
          >
            {t("home.hero.readingListBtn")}
          </Link>
        </div>
      </div>

      <div className="lg:col-span-5">
        <DesktopSpotlightCard book={spotlightBook} />
      </div>
    </section>
  );
}

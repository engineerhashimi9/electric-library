import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CollectionSpotlight({ onExplore }) {
  const { t } = useTranslation();

  return (
    <section className="overflow-hidden rounded-2xl bg-[#0E6760] border border-[#156B6B] p-5 lg:rounded-[28px] lg:p-10 lg:shadow-md">
      <div className="flex items-center justify-between gap-4 lg:gap-10">
        <div className="min-w-0 flex-1">
          <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#17A296]">
            <Sparkles size={18} className="text-[#17A296] hidden lg:block" />
            <span className="lg:hidden">{t("explore.spotlight.eyebrowMobile")}</span>
            <span className="hidden lg:inline">{t("explore.spotlight.eyebrow")}</span>
          </p>

          <h2 className="text-xl font-bold leading-tight text-[#FFFFFF] sm:text-2xl lg:text-4xl">
            {t("explore.spotlight.title")}
          </h2>

          <p className="mt-3 text-xs leading-6 text-[#B8E2DF] sm:text-sm lg:mt-5 lg:max-w-[850px] lg:text-base lg:leading-8">
            <span className="lg:hidden">
              {t("explore.spotlight.descMobile")}
            </span>
            <span className="hidden lg:inline">
              {t("explore.spotlight.desc")}
            </span>
          </p>

          <button
            onClick={onExplore}
            className="mt-4 flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[#17A296] hover:text-[#FFFFFF] sm:text-sm lg:hidden transition-colors"
          >
            {t("explore.spotlight.ctaMobile")}
            <ArrowRight size={17} className="rtl:rotate-180" />
          </button>
        </div>

        <img
          src="/images/collection.jpg"
          alt="A collection of antique books"
          className="h-28 w-20 shrink-0 rounded-xl object-cover shadow-md sm:h-36 sm:w-24 border border-[#156B6B] lg:hidden"
        />

        <button
          onClick={onExplore}
          className="hidden shrink-0 rounded-xl bg-[#17A296] hover:bg-[#FFFFFF] hover:text-[#0E6760] px-6 py-4 text-sm font-bold text-[#FFFFFF] transition-colors lg:block"
        >
          {t("explore.spotlight.cta")}
        </button>
      </div>
    </section>
  );
}

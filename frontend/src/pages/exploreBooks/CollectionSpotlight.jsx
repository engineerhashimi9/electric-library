import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CollectionSpotlight({ onExplore }) {
  const { t } = useTranslation();

  return (
    <section className="overflow-hidden rounded-3xl bg-[#0E6760] border border-[#156B6B] p-6 lg:p-10 shadow-library-lg relative">
      <div className="pointer-events-none absolute -bottom-16 -right-16 w-56 h-56 bg-[#17A296]/20 rounded-full blur-3xl" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 lg:gap-10">
        <div className="min-w-0 flex-1 space-y-3">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9EEFE8]">
            <Sparkles size={16} className="text-[#9EEFE8]" aria-hidden="true" />
            <span className="lg:hidden">{t("explore.spotlight.eyebrowMobile")}</span>
            <span className="hidden lg:inline">{t("explore.spotlight.eyebrow")}</span>
          </p>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight text-[#FFFFFF]">
            {t("explore.spotlight.title")}
          </h2>

          <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-[#B8E2DF] max-w-3xl">
            <span className="lg:hidden">
              {t("explore.spotlight.descMobile")}
            </span>
            <span className="hidden lg:inline">
              {t("explore.spotlight.desc")}
            </span>
          </p>

          <button
            type="button"
            onClick={onExplore}
            className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#17A296] text-[#FFFFFF] text-xs sm:text-sm font-bold hover:bg-[#FFFFFF] hover:text-[#0E6760] lg:hidden transition-all shadow-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9EEFE8]"
          >
            <span>{t("explore.spotlight.ctaMobile")}</span>
            <ArrowRight size={15} className="rtl:rotate-180" />
          </button>
        </div>

        <button
          type="button"
          onClick={onExplore}
          className="hidden shrink-0 rounded-xl bg-[#17A296] hover:bg-[#FFFFFF] hover:text-[#0E6760] px-6 py-3.5 text-sm font-bold text-[#FFFFFF] transition-all shadow-library-sm hover:shadow-library active:scale-95 lg:block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9EEFE8]"
        >
          {t("explore.spotlight.cta")}
        </button>
      </div>
    </section>
  );
}

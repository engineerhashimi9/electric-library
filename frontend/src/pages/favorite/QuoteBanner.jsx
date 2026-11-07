import { Quote, ArrowRight, BookMarked, Highlighter } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function QuoteBanner() {
  const { t } = useTranslation();

  return (
    <section className="group relative overflow-hidden rounded-3xl bg-[#0E6760] border border-[#156B6B] p-6 sm:p-8 lg:p-10 shadow-library-lg">
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-60 w-60 rounded-full bg-[#17A296]/20 blur-3xl transition duration-700 group-hover:scale-125 lg:h-80 lg:w-80" />
      <div className="pointer-events-none absolute -top-24 left-1/3 hidden h-60 w-1/4 rounded-full bg-[#236D64]/20 blur-2xl lg:block" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-3xl items-start gap-4 sm:gap-5">
          <Quote className="mt-1 hidden h-6 w-6 shrink-0 fill-[#9EEFE8] text-[#9EEFE8] lg:block" aria-hidden="true" />
          <div className="space-y-3">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9EEFE8] lg:hidden">
              <BookMarked className="h-4 w-4 text-[#9EEFE8]" aria-hidden="true" />
              <span>{t("favorites.quote.eyebrow")}</span>
            </p>
            <blockquote className="text-xl sm:text-2xl lg:text-3xl italic leading-relaxed text-[#FFFFFF] font-extrabold tracking-tight">
              {t("favorites.quote.text")}
            </blockquote>
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm">
              <cite className="font-bold not-italic text-[#9EEFE8]">
                <span className="hidden lg:inline">— </span>{t("favorites.quote.author")}
              </cite>
              <span className="hidden h-1.5 w-1.5 rounded-full bg-[#17A296] lg:block" aria-hidden="true" />
              <span className="text-[#B8E2DF]">
                {t("favorites.quote.source")}
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 lg:justify-end">
          <div className="hidden text-end lg:block">
            <p className="text-xs font-bold uppercase tracking-wider text-[#9EEFE8]">
              {t("favorites.quote.syncLabel")}
            </p>
            <p className="text-xs sm:text-sm text-[#FFFFFF] font-medium">
              {t("favorites.quote.syncDesc")}
            </p>
          </div>
          <a
            href="#highlights"
            className="ms-auto flex items-center gap-2 rounded-xl bg-[#17A296] hover:bg-[#FFFFFF] hover:text-[#0E6760] text-[#FFFFFF] px-4 py-2.5 text-xs sm:text-sm font-bold transition-all active:scale-95 shadow-library-sm lg:ms-0 lg:px-5 lg:py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9EEFE8]"
          >
            <Highlighter className="h-4 w-4 lg:hidden text-current" aria-hidden="true" />
            <span>{t("favorites.quote.cta")}</span>
            <ArrowRight className="hidden h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 lg:block text-current" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

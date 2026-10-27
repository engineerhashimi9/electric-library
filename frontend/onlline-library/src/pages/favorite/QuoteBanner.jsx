import { Quote, ArrowRight, BookMarked, Highlighter } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function QuoteBanner() {
  const { t } = useTranslation();

  return (
    <section className="group relative overflow-hidden rounded-3xl bg-[#09261C] border border-[#163A2E] p-5 shadow-lg md:p-10">
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-60 w-60 rounded-full bg-[#10B981]/10 blur-[32px] transition duration-700 group-hover:scale-125 lg:h-80 lg:w-80" />
      <div className="pointer-events-none absolute -top-24 left-1/3 hidden h-60 w-1/5 rounded-full bg-[#6B9080]/10 blur-[20px] lg:block" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-[768px] items-start gap-5">
          <Quote className="mt-1 hidden h-5 w-6 shrink-0 fill-[#10B981] text-[#10B981] lg:block" />
          <div>
            <p className="mb-3 flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-[#10B981] lg:hidden">
              <BookMarked className="h-4 w-4 text-[#10B981]" /> {t("favorites.quote.eyebrow")}
            </p>
            <blockquote
              className="pb-4 text-[24px] italic leading-9 text-[#FFFFFF] sm:text-[30px] sm:leading-[42px] lg:pb-2 lg:text-[40px] lg:not-italic lg:leading-[50px] lg:tracking-[-1px] font-sans font-bold"
            >
              {t("favorites.quote.text")}
            </blockquote>
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[15px]">
              <cite className="font-semibold not-italic text-[#10B981] lg:font-normal">
                <span className="hidden lg:inline">— </span>{t("favorites.quote.author")}
              </cite>
              <span className="hidden h-1.5 w-1.5 rounded-full bg-[#10B981] lg:block" />
              <span className="text-[#A3C1B5]">
                {t("favorites.quote.source")}
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 lg:justify-end">
          <div className="hidden text-right rtl:text-left lg:block">
            <p className="text-[11px] font-bold uppercase tracking-[0.55px] text-[#A3C1B5]">
              {t("favorites.quote.syncLabel")}
            </p>
            <p className="text-[13px] leading-5 text-[#FFFFFF]">
              {t("favorites.quote.syncDesc")}
            </p>
          </div>
          <a className="ml-auto rtl:ml-0 rtl:mr-auto flex items-center gap-2 rounded-full bg-[#10B981] hover:bg-[#FFFFFF] hover:text-[#09261C] text-[#FFFFFF] px-4 py-2.5 text-[14px] font-bold transition active:scale-95 lg:ml-0 lg:rounded-xl lg:px-5 lg:py-3 lg:text-[13px] shadow-sm cursor-pointer">
            <Highlighter className="h-4 w-4 lg:hidden text-current" />
            <span className="lg:hidden">{t("favorites.quote.cta")}</span>
            <span className="hidden lg:inline">{t("favorites.quote.cta")}</span>
            <ArrowRight className="hidden h-3 w-3 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 lg:block text-current" />
          </a>
        </div>
      </div>
    </section>
  );
}

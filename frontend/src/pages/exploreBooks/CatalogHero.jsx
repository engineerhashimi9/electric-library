import { BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";
import Eyebrow from "@/component/ui/Eyebrow";

export default function CatalogHero() {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="catalog-hero-title" className="relative pt-4 sm:pt-6 lg:pt-8">
      <div className="mb-4 hidden lg:block">
        <Eyebrow>{t("explore.hero.eyebrow")}</Eyebrow>
      </div>

      <div className="flex items-center justify-between gap-3">
        <h1
          id="catalog-hero-title"
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-[#0E6760]"
        >
          {t("explore.hero.title")}
        </h1>

        <span className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E6F4F3] border border-[#D0E8E6] text-[#0E6760] lg:hidden shadow-library-sm">
          <BookOpen size={22} aria-hidden="true" />
        </span>
      </div>

      <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-[#4A6B68] font-medium max-w-2xl">
          {t("explore.hero.desc")}
        </p>

        <div className="hidden flex-wrap gap-2.5 lg:flex">
          <span className="inline-flex items-center gap-2 rounded-xl bg-[#E6F4F3] border border-[#D0E8E6] px-3.5 py-2 text-xs font-bold text-[#0E6760] shadow-sm">
            <BookOpen size={16} className="text-[#17A296]" aria-hidden="true" />
            {t("explore.hero.badge1")}
          </span>

          <span className="inline-flex items-center gap-2 rounded-xl bg-[#E6F4F3] border border-[#D0E8E6] px-3.5 py-2 text-xs font-semibold text-[#0E6760] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#17A296]" aria-hidden="true" />
            {t("explore.hero.badge2")}
          </span>
        </div>
      </div>
    </section>
  );
}

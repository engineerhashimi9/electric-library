import { BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";

export default  function CatalogHero() {
  const { t } = useTranslation();

  return (
    <section className="relative pt-6 lg:pt-8">
      <p className="mb-6 hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#6B9080] lg:flex">
        <span className="h-2 w-2 rounded-full bg-[#10B981]" />
        {t("explore.hero.eyebrow")}
      </p>

      <div className="flex items-center justify-between gap-2">
        <h1 className="text-[clamp(2rem,3vw,2.4rem)] font-extrabold leading-tight tracking-[-0.04em] text-[#09261C]">
          {t("explore.hero.title")}
        </h1>

        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EAF4F0] border border-[#DDECE6] text-[#09261C] lg:hidden shadow-sm">
          <BookOpen size={25} />
        </span>
      </div>

      <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
        <p className="text-sm leading-relaxed text-[#52665E] font-medium sm:text-base lg:hidden">
          {t("explore.hero.desc")}
        </p>

        <p className="hidden max-w-[760px] text-xl leading-relaxed text-[#52665E] font-medium lg:block">
          {t("explore.hero.desc")}
        </p>

        <div className="hidden flex-wrap gap-3 lg:flex">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF4F0] border border-[#DDECE6] px-4 py-2.5 text-sm font-bold text-[#09261C]">
            <BookOpen size={19} className="text-[#10B981]" />
            {t("explore.hero.badge1")}
          </span>

          <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF4F0] border border-[#DDECE6] px-4 py-2.5 text-sm font-semibold text-[#09261C]">
            <span className="h-2 w-2 rounded-full bg-[#10B981]" />
            {t("explore.hero.badge2")}
          </span>
        </div>
      </div>
    </section>
  );
}

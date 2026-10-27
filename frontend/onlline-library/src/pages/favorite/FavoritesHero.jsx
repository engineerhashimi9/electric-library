import { BookMarked } from "lucide-react";
import { useTranslation } from "react-i18next";
import HeroActions from "./HeroActions";
import CategoryTabs from "./CategoryTabs";

export default function FavoritesHero({ total, actions, tabs }) {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EAF4F0] to-[#F6FBF9] border-b border-[#DDECE6] pb-6 pt-5 lg:pb-16 lg:pt-12">
      <div className="pointer-events-none absolute -top-32 right-12 hidden h-96 w-96 rounded-full bg-[#10B981]/10 blur-[32px] lg:block" />
      <div className="pointer-events-none absolute -left-20 top-20 hidden h-80 w-80 rounded-full bg-[#6B9080]/10 blur-[32px] lg:block" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12">
        <div className="mb-4 flex items-center justify-between gap-3 lg:hidden">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF4F0] border border-[#DDECE6] px-3.5 py-2 text-[13px] font-bold uppercase tracking-[0.04em] text-[#0D5C46]">
            <BookMarked className="h-4 w-4 text-[#10B981]" /> <span className="hidden min-[400px]:inline">{t("favorites.hero.badgeMobile")}</span><span className="min-[400px]:hidden">{t("favorites.hero.badgeMobile")}</span>
          </span>
          <HeroActions compact {...actions} />
        </div>

        <div className="flex items-end justify-between gap-8 pb-5 lg:pb-10">
          <div className="max-w-[672px] space-y-2 lg:space-y-3 lg:pt-1">
            <span className="hidden items-center gap-2 rounded-full bg-[#EAF4F0] border border-[#DDECE6] px-3 py-1 text-[11px] font-bold uppercase tracking-[1.1px] text-[#0D5C46] backdrop-blur lg:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" /> {t("favorites.hero.badge")}
            </span>
            <h1 className="font-sans font-extrabold text-[36px] leading-[44px] tracking-[-0.5px] text-[#09261C] sm:text-[44px] sm:leading-[52px] lg:pt-1 lg:text-[56px] lg:leading-[56px] lg:tracking-[-1.4px]">
              {t("favorites.hero.title")}
            </h1>
            <p className="max-w-[520px] text-[15px] leading-[26px] text-[#52665E] font-medium lg:max-w-none lg:text-[20px] lg:leading-8 font-sans">
              {t("favorites.hero.desc", { total })}
            </p>
          </div>
          <div className="hidden w-full max-w-[560px] shrink lg:block">
            <HeroActions {...actions} />
          </div>
        </div>

        <CategoryTabs {...tabs} />
      </div>
    </section>
  );
}

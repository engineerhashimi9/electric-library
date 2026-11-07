import { BookMarked } from "lucide-react";
import { useTranslation } from "react-i18next";
import HeroActions from "./HeroActions";
import CategoryTabs from "./CategoryTabs";
import Eyebrow from "@/component/ui/Eyebrow";

export default function FavoritesHero({ total, actions, tabs }) {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E6F4F3] to-[#F4FAFA] border-b border-[#D0E8E6] pb-6 pt-5 lg:pb-14 lg:pt-12">
      <div className="pointer-events-none absolute -top-32 right-12 hidden h-96 w-96 rounded-full bg-[#17A296]/10 blur-3xl lg:block" />
      <div className="pointer-events-none absolute -left-20 top-20 hidden h-80 w-80 rounded-full bg-[#236D64]/10 blur-3xl lg:block" />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="mb-4 flex items-center justify-between gap-3 lg:hidden">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E6F4F3] border border-[#D0E8E6] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#236D64] shadow-sm">
            <BookMarked className="h-4 w-4 text-[#17A296]" />
            <span>{t("favorites.hero.badgeMobile")}</span>
          </span>
          <HeroActions compact {...actions} />
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 pb-6 lg:pb-10">
          <div className="max-w-2xl space-y-3">
            <div className="hidden lg:block">
              <Eyebrow>{t("favorites.hero.badge")}</Eyebrow>
            </div>
            <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0E6760] tracking-tight leading-tight">
              {t("favorites.hero.title")}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-[#4A6B68] font-medium leading-relaxed max-w-xl">
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

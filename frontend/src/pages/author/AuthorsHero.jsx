import { Users, BellRing } from "lucide-react";
import { useTranslation } from "react-i18next";
import AuthorSearch from "./AuthorSearch";
import CategoryChips from "./CategoryChips";
import Eyebrow from "@/component/ui/Eyebrow";

export default function AuthorsHero({ total, followedCount, search, chips }) {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E6F4F3] to-[#F4FAFA] border-b border-[#D0E8E6] pb-6 pt-5 lg:pb-14 lg:pt-12">
      <div className="pointer-events-none absolute -top-32 right-12 hidden h-96 w-96 rounded-full bg-[#17A296]/10 blur-3xl lg:block" />
      <div className="pointer-events-none absolute -left-20 top-20 hidden h-80 w-80 rounded-full bg-[#236D64]/10 blur-3xl lg:block" />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="flex flex-col gap-5 pb-6 lg:flex-row lg:items-end lg:justify-between lg:pb-8">
          <div className="max-w-2xl space-y-3">
            <div className="hidden lg:block">
              <Eyebrow>{t("authors.hero.badge")}</Eyebrow>
            </div>
            <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0E6760] tracking-tight leading-tight">
              {t("authors.hero.title")}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-[#4A6B68] font-medium leading-relaxed max-w-xl">
              {t("authors.hero.desc")}
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-2.5 lg:gap-3 lg:pb-2">
            <span className="flex items-center gap-2 rounded-xl bg-[#FFFFFF] border border-[#D0E8E6] px-3.5 py-2 text-xs sm:text-sm font-bold text-[#0E6760] shadow-library-sm">
              <Users className="h-4 w-4 text-[#17A296]" aria-hidden="true" />
              <span>{t("authors.hero.patronsArchived", { total })}</span>
            </span>
            <span className="flex items-center gap-2 rounded-xl bg-[#FFFFFF] border border-[#D0E8E6] px-3.5 py-2 text-xs sm:text-sm font-bold text-[#0E6760] shadow-library-sm">
              <BellRing className="h-4 w-4 text-[#17A296]" aria-hidden="true" />
              <span>{t("authors.hero.following", { count: followedCount })}</span>
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <AuthorSearch {...search} />
          <CategoryChips {...chips} />
        </div>
      </div>
    </section>
  );
}

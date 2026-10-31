import { Users, BellRing } from "lucide-react";
import { useTranslation } from "react-i18next";
import AuthorSearch from "./AuthorSearch";
import CategoryChips from "./CategoryChips";

export default function AuthorsHero({ total, followedCount, search, chips }) {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E6F4F3] to-[#F4FAFA] border-b border-[#D0E8E6] pb-6 pt-5 lg:pb-14 lg:pt-12">
      <div className="pointer-events-none absolute -top-32 right-12 hidden h-96 w-96 rounded-full bg-[#17A296]/10 blur-[32px] lg:block" />
      <div className="pointer-events-none absolute -left-20 top-20 hidden h-80 w-80 rounded-full bg-[#236D64]/10 blur-[32px] lg:block" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12">
        <div className="flex flex-col gap-5 pb-6 lg:flex-row lg:items-end lg:justify-between lg:pb-8">
          <div className="max-w-[672px] space-y-2 lg:space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E6F4F3] border border-[#D0E8E6] px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.06em] text-[#236D64] lg:px-3 lg:py-1 lg:tracking-[1.1px]">
              <span className="hidden h-1.5 w-1.5 rounded-full bg-[#17A296] lg:block" />
              {t("authors.hero.badge")}
            </span>
            <h1 className="font-sans font-extrabold text-[34px] leading-[42px] tracking-[-0.5px] text-[#0E6760] sm:text-[44px] sm:leading-[52px] lg:text-[56px] lg:leading-[56px] lg:tracking-[-1.4px]">
              {t("authors.hero.title")}
            </h1>
            <p className="text-[15px] leading-[26px] text-[#4A6B68] font-sans font-medium lg:text-[20px] lg:leading-8">
              {t("authors.hero.desc")}
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-2 lg:gap-3 lg:pb-2">
            <span className="flex items-center gap-2 rounded-full bg-[#FFFFFF] border border-[#D0E8E6] px-4 py-2 text-[12px] font-semibold text-[#0E6760]">
              <Users className="h-3.5 w-3.5 text-[#17A296]" /> {t("authors.hero.patronsArchived", { total })}
            </span>
            <span className="flex items-center gap-2 rounded-full bg-[#FFFFFF] border border-[#D0E8E6] px-4 py-2 text-[12px] font-semibold text-[#0E6760]">
              <BellRing className="h-3.5 w-3.5 text-[#17A296]" /> {t("authors.hero.following", { count: followedCount })}
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

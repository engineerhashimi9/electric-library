import { BookMarked } from "lucide-react";
import HeroActions from "./HeroActions";
import CategoryTabs from "./CategoryTabs";
// import { serif } from "../../styles/fonts";

export default function FavoritesHero({ total, actions, tabs }) {
  return (
    <section className="relative overflow-hidden bg-[#fbf9f6] pb-6 pt-5 lg:bg-[#f5f3f0] lg:pb-16 lg:pt-12">
      <div className="pointer-events-none absolute -top-32 right-12 hidden h-96 w-96 rounded-full bg-[#fd9168]/10 blur-[32px] lg:block" />
      <div className="pointer-events-none absolute -left-20 top-20 hidden h-80 w-80 rounded-full bg-[#1e3a2f]/10 blur-[32px] lg:block" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12">
        {/* موبایل: badge + دکمه‌ها */}
        <div className="mb-4 flex items-center justify-between gap-3 lg:hidden">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#fddcd0] px-3.5 py-2 text-[13px] font-bold uppercase tracking-[0.04em] text-[#9a4522]">
            <BookMarked className="h-4 w-4" /> <span className="hidden min-[400px]:inline">ARCHIVE REPOSITORY</span><span className="min-[400px]:hidden">ARCHIVE</span>
          </span>
          <HeroActions compact {...actions} />
        </div>

        <div className="flex items-end justify-between gap-8 pb-5 lg:pb-10">
          <div className="max-w-[672px] space-y-2 lg:space-y-3 lg:pt-1">
            {/* دسکتاپ: badge */}
            <span className="hidden items-center gap-2 rounded-full bg-[#e4e2df]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[1.1px] text-[#07241a] backdrop-blur lg:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9a4522]" /> ARCHIVE REPOSITORY • SHELF VI
            </span>
            <h1 className={`text-[36px] leading-[44px] tracking-[-0.5px] text-[#07241a] sm:text-[44px] sm:leading-[52px] lg:pt-1 lg:text-[56px] lg:leading-[56px] lg:tracking-[-1.4px] `}>
              Curated Favorites
            </h1>
            <p className={`max-w-[520px] text-[15px] leading-[26px] text-[#424844] lg:max-w-none lg:text-[20px] lg:leading-8 lg:font-normal ${"lg:font-['Newsreader',Georgia,serif]"}`}>
              {total} bookmarked editions and rare manuscripts saved in your private sanctuary.
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

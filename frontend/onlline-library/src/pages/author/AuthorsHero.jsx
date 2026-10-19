import { Users, BellRing } from "lucide-react";
import AuthorSearch from "./AuthorSearch";
import CategoryChips from "./CategoryChips";


export default function AuthorsHero({ total, followedCount, search, chips }) {
  return (
    <section className="relative overflow-hidden bg-[#fbf9f6] pb-6 pt-5 lg:bg-[#f5f3f0] lg:pb-14 lg:pt-12">
      <div className="pointer-events-none absolute -top-32 right-12 hidden h-96 w-96 rounded-full bg-[#fd9168]/10 blur-[32px] lg:block" />
      <div className="pointer-events-none absolute -left-20 top-20 hidden h-80 w-80 rounded-full bg-[#1e3a2f]/10 blur-[32px] lg:block" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12">
        <div className="flex flex-col gap-5 pb-6 lg:flex-row lg:items-end lg:justify-between lg:pb-8">
          <div className="max-w-[672px] space-y-2 lg:space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fddcd0] px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.06em] text-[#9a4522] lg:bg-[#e4e2df]/80 lg:px-3 lg:py-1 lg:tracking-[1.1px] lg:text-[#07241a]">
              <span className="hidden h-1.5 w-1.5 rounded-full bg-[#9a4522] lg:block" />
              Scholarship Retrospectives • Canon of Authors
            </span>
            <h1 className={`text-[34px] leading-[42px] tracking-[-0.5px] text-[#07241a] sm:text-[44px] sm:leading-[52px] lg:text-[56px] lg:leading-[56px] lg:tracking-[-1.4px] `}>
              Master Authors &amp; Curators
            </h1>
            <p className="text-[15px] leading-[26px] text-[#424844] lg:font-['Newsreader',Georgia,serif] lg:text-[20px] lg:leading-8">
              Follow the voices behind the canon — from modernist pioneers to Persian classics — and receive new folios and annotated editions as they join the archive.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-2 lg:gap-3 lg:pb-2">
            <span className="flex items-center gap-2 rounded-full bg-[#efeeeb] px-4 py-2 text-[12px] font-semibold text-[#07241a] lg:bg-white lg:shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
              <Users className="h-3.5 w-3.5 text-[#9a4522]" /> {total} Patrons Archived
            </span>
            <span className="flex items-center gap-2 rounded-full bg-[#07241a] px-4 py-2 text-[12px] font-semibold text-white">
              <BellRing className="h-3.5 w-3.5 text-[#fd9168]" /> Following {followedCount}
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

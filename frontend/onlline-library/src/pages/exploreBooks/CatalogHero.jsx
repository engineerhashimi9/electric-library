import { BookOpen } from "lucide-react";

export function CatalogHero() {
  return (
    <section className="relative  pt-6  lg:pt-8">
      <p className="mb-6 hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#a04424] lg:flex">
        <span className="h-2 w-2 rounded-full bg-[#a04424]" />
        Collegiate Repositories • Division VII
      </p>

      <div className="flex items-center justify-between gap-2">
        <h1 className="font-editorial text-[clamp(2rem,3vw,2.4rem)] font-semibold leading-tight tracking-[-0.04em] text-[#08271d]">
          Explore Library
          <span className="hidden lg:inline"> Catalog</span>
        </h1>

        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#efeeeb] text-[#08271d] lg:hidden">
          <BookOpen size={25} />
        </span>
      </div>

      <div className="mt-3 flex flex-wrap items-end justify-between gap-4 lg:">
        <p className="text-sm leading-relaxed text-[#536075] sm:text-base lg:hidden">
          Browse over 120,000 curated editions
        </p>

        <p className="font-editorial hidden max-w-[760px] text-xl leading-relaxed text-[#3c4658] lg:block">
          Browse over 120,000 curated manuscripts, first editions, and
          unabridged audio recordings preserved across global collegiate
          archives.
        </p>

        <div className="hidden flex-wrap gap-3 lg:flex  ">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#efeeeb] px-4 py-2.5 text-sm font-semibold text-[#08271d]">
            <BookOpen size={19} />
            128,492 Cataloged Works
          </span>

          <span className="inline-flex items-center gap-2 rounded-full bg-[#1d392d] px-4 py-2.5 text-sm text-white">
            <span className="h-2 w-2 rounded-full bg-[#ff906b]" />
            Patron Open Instant Access
          </span>
        </div>
      </div>
    </section>
  );
}

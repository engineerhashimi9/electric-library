import HeroActions from "./HeroActions";
import CategoryTabs from "./CategoryTabs";

export default function FavoritesHero({ total, actions, tabs }) {
  return (
    <section className="relative bg-[#F5F3F0] overflow-hidden bg-leaf-50 pb-16 pt-12">
      <div className="pointer-events-none absolute -top-32 right-12 h-96 w-96 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-leaf-700/10 blur-3xl" />

      <div className="relative mx-auto  max-w-[1440px] px-12">
        <div className="flex  items-end justify-between pb-10">
          <div className="max-w-[672px] space-y-3 pt-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E6E5E2] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-leaf-950 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9A4522]" /> ARCHIVE REPOSITORY • SHELF VI
            </span>
            <h1 className="pt-1 font-serif text-[56px] leading-[56px] tracking-[-1.4px] text-leaf-950">Curated Favorites</h1>
            <p className="font-serif text-[20px] leading-8 text-ink-soft">
              {total} bookmarked editions and rare manuscripts saved in your private sanctuary.
            </p>
          </div>
          <HeroActions {...actions} />
        </div>

        <CategoryTabs {...tabs} />
      </div>
    </section>
  );
}

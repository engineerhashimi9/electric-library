import { ArrowRight, Sparkles } from "lucide-react";

export function CollectionSpotlight({ onExplore }) {
  return (
    <section className="overflow-hidden rounded-2xl bg-[#f2f1ed] p-5 lg:rounded-[28px] lg:bg-[#1d392d] lg:p-10 lg:shadow-lg">
      <div className="flex items-center justify-between gap-4 lg:gap-10">
        <div className="min-w-0 flex-1">
          <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#a04424] lg:text-[#ffd7c4]">
            <Sparkles size={18} className="hidden lg:block" />
            <span className="lg:hidden">Curator&apos;s Salon</span>
            <span className="hidden lg:inline">Archival Spotlight</span>
          </p>

          <h2 className="font-editorial text-xl font-semibold leading-tight text-[#08271d] sm:text-2xl lg:text-4xl lg:text-white">
            <span className="hidden lg:inline">Curator’s Salon: </span>
            Fall Translation Series
          </h2>

          <p className="mt-3 text-xs leading-6 text-[#555c57] sm:text-sm lg:mt-5 lg:max-w-[850px] lg:text-base lg:leading-8 lg:text-[#94afa1]">
            <span className="lg:hidden">
              Seven profound philosophical essays translated into English for
              the modern reader.
            </span>
            <span className="hidden lg:inline">
              Ten newly transcribed folios translated directly from medieval
              Catalan and High Renaissance Italian dialects, illuminated with
              critical apparatus by our Cambridge scholars.
            </span>
          </p>

          <button
            onClick={onExplore}
            className={` mt-4 px-3 py-2 text-xs sm:text-sm lg:hidden`}
          >
            Explore Series
            <ArrowRight size={17} />
          </button>
        </div>

        <img
          src="/images/collection.jpg"
          alt="A collection of antique books"
          className="h-28 w-20 shrink-0 rounded-xl object-cover shadow-md sm:h-36 sm:w-24 lg:hidden"
        />

        <button
          onClick={onExplore}
          className="hidden shrink-0 rounded-xl bg-[#a04424] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#8f3a1f] lg:block"
        >
          Explore Collection
        </button>
      </div>
    </section>
  );
}

import DesktopSpotlightCard from "./DesktopSpotlighttCard";


export default function HeroBanner({ name, spotlightBook }) {
  return (
    <div className="hidden md:grid grid-cols-12 gap-8 items-center bg-[#F4F0E8] p-8 rounded-2xl border border-[#E2E8F0]">
      <div className="col-span-7 space-y-7">
        <span className="text-xs font-semibold text-[#C86D51] uppercase tracking-wider">
          ✦ GOOD EVENING, {name.toUpperCase()}
        </span>
        <h1 className="font-serif font-bold text-4xl text-[#1A202C] leading-tight">
          Immerse in timeless literature & rare editions
        </h1>
        <p className="text-sm text-[#4A5568] leading-relaxed max-w-lg">
          Access over 120,000 carefully conserved volumes, from privately bound
          illuminated folios to critical modern masterpieces. Preserved in
          archival typographic clarity.
        </p>
        <div className="flex items-center space-x-4 pt-2">
          <button className="px-6 py-2.5 bg-[#07241A] text-white text-xs font-medium rounded-lg hover:bg-[#132820]">
            Explore Catalog
          </button>
          <button className="px-6 py-2.5 border border-[#1A362B] text-[#1A362B] text-xs font-medium rounded-lg hover:bg-[#1A362B]/5">
            View Bestsellers
          </button>
        </div>
      </div>

      <DesktopSpotlightCard book={spotlightBook} />
    </div>
  );
}

import { SlidersHorizontal } from "lucide-react";
import { SearchField } from "./SearchFeild";
import { ViewToggle } from "./ViewToggle";
import { genres } from "./data";


export function CatalogControls({
  query,
  onQueryChange,
  searchRef,
  sort,
  onSortChange,
  view,
  onViewChange,
  genre,
  onGenreChange,
  onOpenFilters,
  filterCount,
}) {
  return (
    <section className="space-y-5">
      <SearchField
        value={query}
        onChange={onQueryChange}
        inputRef={searchRef}
        placeholder="Search by title, author, provenance, ISBN or illuminated folio number..."
      />

      <div className="flex items-center justify-between gap-2 lg:hidden">
        <select
          aria-label="Sort books"
          value={sort}
          onChange={(event) => onSortChange(event.target.value)}
          className="min-w-0 rounded-full bg-white px-3 py-3 text-xs font-semibold text-[#08271d] shadow-sm sm:text-sm"
        >
          <option value="popular">Most Popular</option>
          <option value="rating">Highest Rated</option>
          <option value="title">Title A–Z</option>
        </select>

        <button
          onClick={onOpenFilters}
          className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-3 text-xs font-semibold shadow-sm sm:text-sm"
        >
          <SlidersHorizontal size={18} className="text-[#a04424]" />
          Filters
          {filterCount > 0 && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#a04424] text-[10px] text-white">
              {filterCount}
            </span>
          )}
        </button>

        <ViewToggle view={view} onChange={onViewChange} />
      </div>

      <div
        className="flex gap-3 overflow-x-auto pb-1 lg:flex-wrap"
        aria-label="Genre filters"
      >
        {genres.map((item) => (
          <button
            key={item}
            aria-pressed={genre === item}
            onClick={() => onGenreChange(item)}
            className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-semibold transition sm:text-sm ${
              genre === item
                ? "bg-[#1d392d] text-white"
                : "bg-[#efeeeb] text-[#454b47] hover:bg-[#e3e5df]"
            }`}
          >
            <span className="lg:hidden">
              {item === "Literary Fiction" ? "Fiction" : item}
            </span>
            <span className="hidden lg:inline">{item}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

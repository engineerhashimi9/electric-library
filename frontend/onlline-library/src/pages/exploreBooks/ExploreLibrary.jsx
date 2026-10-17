import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { books } from "./data";

import { ActiveFilters } from "./ActiveFilters";
import { BookCard } from "./BookCard";
import { CatalogControls } from "./CatalogControls";
import { CatalogHero } from "./CatalogHero";
import { CatalogPagination } from "./CatalogPagination";
import { CollectionSpotlight } from "./CollectionSpotlight";
import { FilterSidebar } from "./FilterSidebar";
import { MobileFilterDrawer } from "./MobileFilterDrawer";

function createDefaultFilters() {
  return {
    formats: [],
    availableOnly: false,
    reserveOnly: false,
    highRating: true,
    length: "",
    language: "",
  };
}

function createEmptyFilters() {
  return {
    formats: [],
    availableOnly: false,
    reserveOnly: false,
    highRating: false,
    length: "",
    language: "",
  };
}

function useDesktopLayout() {
  const [desktop, setDesktop] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 1024px)").matches
      : false,
  );

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const update = () => setDesktop(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  return desktop;
}

export default function ExploreLibrary() {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [sort, setSort] = useState("popular");
  const [view, setView] = useState("grid");
  const [filters, setFilters] = useState(createDefaultFilters);
  const [favorites, setFavorites] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [desktopPerPage, setDesktopPerPage] = useState(8);
  const [notice, setNotice] = useState("");

  const desktop = useDesktopLayout();
  const searchRef = useRef(null);
  const headerSearchRef = useRef(null);

  const perPage = desktop ? desktopPerPage : 6;

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  useEffect(() => {
    if (desktop) setDrawerOpen(false);
  }, [desktop]);

  useEffect(() => {
    function handleShortcut(event) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();

        if (desktop && headerSearchRef.current) {
          headerSearchRef.current.focus();
        } else {
          searchRef.current?.focus();
        }
      }
    }

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, [desktop]);

  useEffect(() => {
    if (!notice) return;

    const timeout = window.setTimeout(() => setNotice(""), 4000);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  const filteredBooks = useMemo(() => {
    const search = query.trim().toLowerCase();

    const result = books.filter((book) => {
      // The reference changes some formats between desktop and mobile.
      const format = desktop ? book.format : book.mobileFormat;
      const rating = desktop ? book.rating : book.mobileRating || book.rating;

      const searchableText = [book.title, book.author, book.detail, book.genre]
        .join(" ")
        .toLowerCase();

      if (search && !searchableText.includes(search)) return false;

      if (genre !== "All Genres" && book.genre !== genre) return false;

      if (filters.formats.length > 0 && !filters.formats.includes(format)) {
        return false;
      }

      // Selecting both circulation options includes either status.
      if (filters.availableOnly && !filters.reserveOnly && !book.available) {
        return false;
      }

      if (filters.reserveOnly && !filters.availableOnly && book.available) {
        return false;
      }

      if (filters.highRating && rating < 4.5) return false;

      if (filters.language && book.language !== filters.language) {
        return false;
      }

      if (filters.length === "short" && book.pages >= 200) return false;

      if (
        filters.length === "standard" &&
        (book.pages < 200 || book.pages > 400)
      ) {
        return false;
      }

      if (filters.length === "epic" && book.pages <= 400) return false;

      return true;
    });

    if (sort === "rating") {
      result.sort((a, b) => {
        const aRating = desktop ? a.rating : a.mobileRating || a.rating;
        const bRating = desktop ? b.rating : b.mobileRating || b.rating;
        return bRating - aRating;
      });
    }

    if (sort === "title") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    // "Most Popular" uses the curated order of the supplied demo records.
    return result;
  }, [query, genre, filters, sort, desktop]);

  const total = filteredBooks.length;
  const pageCount = Math.max(1, Math.ceil(total / perPage));
  const currentPage = Math.min(page, pageCount);

  const visibleBooks = filteredBooks.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage,
  );

  const start = total === 0 ? 0 : (currentPage - 1) * perPage + 1;
  const end = Math.min(currentPage * perPage, total);

  const filterCount =
    filters.formats.length +
    Number(filters.availableOnly) +
    Number(filters.reserveOnly) +
    Number(filters.highRating) +
    Number(Boolean(filters.length)) +
    Number(Boolean(filters.language));

  function updateQuery(value) {
    setQuery(value);
    setPage(1);
  }

  function updateGenre(value) {
    setGenre(value);
    setPage(1);
  }

  function updateSort(value) {
    setSort(value);
    setPage(1);
  }

  function updateFilters(value) {
    setFilters(value);
    setPage(1);
  }

  function clearFilters() {
    setFilters(createEmptyFilters());
    setGenre("All Genres");
    setPage(1);
  }

  function toggleFavorite(id) {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id],
    );
  }

  function handleBookAction(book, format) {
    const action = !book.available
      ? "Reservation"
      : format === "audio"
        ? "Audio playback"
        : "Borrowing";

    setNotice(
      `${action} for “${book.title}” is a demo action. Connect your library API to enable it.`,
    );
  }

  function handlePageChange(nextPage) {
    setPage(Math.min(Math.max(nextPage, 1), pageCount));
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#232723]">
      <main
        id="catalog"
        className="mx-auto max-w-[1800px] px-5 pb-32 sm:px-8 lg:px-10 lg:pb-12 xl:px-16"
      >
        <CatalogHero />
        <div className="order-1 lg:order-2 lg:mt-12">
          <CatalogControls
            query={query}
            onQueryChange={updateQuery}
            searchRef={searchRef}
            sort={sort}
            onSortChange={updateSort}
            view={view}
            onViewChange={setView}
            genre={genre}
            onGenreChange={updateGenre}
            onOpenFilters={() => setDrawerOpen(true)}
            filterCount={filterCount}
          />

          <div className="mb-4 mt-5 lg:mb-0 lg:mt-8">
            <ActiveFilters
              filters={filters}
              onChange={updateFilters}
              onClear={clearFilters}
              total={total}
              start={start}
              end={end}
              sort={sort}
              onSortChange={updateSort}
              view={view}
              onViewChange={setView}
            />
          </div>
        </div>
        {/* Mobile: controls before cards.
            Desktop: controls below cards, as in the reference. */}
        <div className="flex flex-col">
          <div className="order-2 grid items-stretch gap-7 lg:order-1 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)] xl:gap-8">
            <FilterSidebar
              filters={filters}
              onChange={updateFilters}
              onReset={clearFilters}
            />

            <section aria-label="Library books" className="min-w-0">
              {visibleBooks.length > 0 ? (
                <div
                  className={`grid gap-3 sm:gap-5 lg:gap-x-4 lg:gap-y-7 ${
                    view === "grid"
                      ? "grid-cols-1 lg:grid-cols-3 xl:grid-cols-4"
                      : "grid-cols-1 xl:grid-cols-2"
                  }`}
                >
                  {visibleBooks.map((book) => (
                    <BookCard
                      key={book.id}
                      book={book}
                      favorite={favorites.includes(book.id)}
                      onToggleFavorite={toggleFavorite}
                      onAction={handleBookAction}
                      view={view}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex min-h-72 flex-col items-center justify-center rounded-3xl bg-white p-6 text-center shadow-sm">
                  <h2 className="font-editorial text-2xl text-[#08271d]">
                    No matching books
                  </h2>

                  <p className="mt-2 text-sm text-[#79817b]">
                    Try another search or remove some filters.
                  </p>

                  <button
                    onClick={() => {
                      updateQuery("");
                      clearFilters();
                    }}
                    className="mt-5 rounded-xl bg-[#08271d] px-5 py-3 text-sm font-semibold text-white"
                  >
                    Reset Search
                  </button>
                </div>
              )}
            </section>
          </div>
        </div>

        <div className="mt-6 lg:mt-5">
          <CollectionSpotlight
            onExplore={() => {
              updateGenre("Philosophy");
              setNotice("Showing the philosophy collection.");
            }}
          />
        </div>

        <div className="mt-5 lg:mt-7">
          <CatalogPagination
            page={currentPage}
            pageCount={pageCount}
            onPageChange={handlePageChange}
            total={total}
            start={start}
            end={end}
            perPage={perPage}
            onPerPageChange={(value) => {
              setDesktopPerPage(value);
              setPage(1);
            }}
          />
        </div>
      </main>

      <MobileFilterDrawer
        open={drawerOpen}
        onClose={closeDrawer}
        filters={filters}
        onChange={updateFilters}
        onReset={clearFilters}
      />

      {notice && (
        <div
          role="status"
          className="fixed bottom-24 left-1/2 z-[60] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 rounded-xl bg-[#232723] px-5 py-4 text-sm text-white shadow-xl lg:bottom-6"
        >
          {notice}
        </div>
      )}
    </div>
  );
}

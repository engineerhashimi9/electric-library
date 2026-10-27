import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { books } from "./data";
import { getLocalized } from "@/utils/langHelper";

import ActiveFilters from "./ActiveFilters";
import { BookCard } from "./BookCard";
import CatalogControls from "./CatalogControls";
import CatalogHero from "./CatalogHero";
import CatalogPagination from "./CatalogPagination";
import CollectionSpotlight from "./CollectionSpotlight";
import FilterSidebar from "./FilterSidebar";
import MobileFilterDrawer from "./MobileFilterDrawer";

function createDefaultFilters() {
  return {
    formats: [],
    availableOnly: false,
    reserveOnly: false,
    highRating: false,
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
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

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

  const perPage = desktop ? desktopPerPage : 6;

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  useEffect(() => {
    if (desktop) setDrawerOpen(false);
  }, [desktop]);

  useEffect(() => {
    if (!notice) return;
    const timeout = window.setTimeout(() => setNotice(""), 4000);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  const filteredBooks = useMemo(() => {
    const search = query.trim().toLowerCase();

    const result = books.filter((book) => {
      const format = desktop ? book.format : book.mobileFormat;
      const rating = desktop ? book.rating : (book.mobileRating || book.rating);

      const titleStr = typeof book.title === "object" ? `${book.title.en} ${book.title.fa}` : book.title;
      const authorStr = typeof book.author === "object" ? `${book.author.en} ${book.author.fa}` : book.author;
      const detailStr = typeof book.detail === "object" ? `${book.detail.en} ${book.detail.fa}` : (book.detail || "");

      const searchableText = [titleStr, authorStr, detailStr, book.genre]
        .join(" ")
        .toLowerCase();

      if (search && !searchableText.includes(search)) return false;

      if (genre !== "All Genres" && book.genre !== genre) return false;

      if (filters.formats.length > 0 && !filters.formats.includes(format)) {
        return false;
      }

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
        const aRating = desktop ? a.rating : (a.mobileRating || a.rating);
        const bRating = desktop ? b.rating : (b.mobileRating || b.rating);
        return bRating - aRating;
      });
    }

    if (sort === "title") {
      result.sort((a, b) => {
        const aTitle = getLocalized(a.title, lang);
        const bTitle = getLocalized(b.title, lang);
        return String(aTitle).localeCompare(String(bTitle));
      });
    }

    return result;
  }, [query, genre, filters, sort, desktop, lang]);

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
    const title = getLocalized(book.title, lang);
    const action = !book.available
      ? (lang === "fa" ? "رزرو" : "Reservation")
      : format === "audio"
        ? (lang === "fa" ? "پخش صوتی" : "Audio playback")
        : (lang === "fa" ? "امانت گرفتن" : "Borrowing");

    setNotice(
      lang === "fa"
        ? `عملیات «${action}» برای «${title}» نمایشی است.`
        : `${action} for “${title}” is a demo action. Connect your library API to enable it.`,
    );
  }

  function handlePageChange(nextPage) {
    setPage(Math.min(Math.max(nextPage, 1), pageCount));
  }

  return (
    <div className="min-h-screen bg-[#F6FBF9] text-[#111C18]">
      <main
        id="catalog"
        className="mx-auto max-w-[1800px] px-4 pb-28 sm:px-6 md:px-8 md:pb-12 lg:px-10 xl:px-16"
      >
        <CatalogHero />

        <div className="mt-6 lg:mt-10">
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

          <div className="mb-4 mt-5 lg:mb-6 lg:mt-8">
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

        <div className="flex flex-col">
          <div className="grid items-start gap-6 lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)] xl:gap-8">
            <FilterSidebar
              filters={filters}
              onChange={updateFilters}
              onReset={clearFilters}
            />

            <section aria-label="Library books" className="min-w-0">
              {visibleBooks.length > 0 ? (
                <div
                  className={`grid gap-3 sm:gap-5 lg:gap-x-5 lg:gap-y-7 ${
                    view === "grid"
                      ? "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
                      : "grid-cols-1 md:grid-cols-2"
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
                <div className="flex min-h-72 flex-col items-center justify-center rounded-3xl bg-[#FFFFFF] border border-[#DDECE6] p-6 text-center shadow-sm">
                  <h2 className="text-2xl font-bold text-[#09261C]">
                    {t("explore.empty.title")}
                  </h2>

                  <p className="mt-2 text-sm text-[#52665E]">
                    {t("explore.empty.desc")}
                  </p>

                  <button
                    onClick={() => {
                      updateQuery("");
                      clearFilters();
                    }}
                    className="mt-5 rounded-xl bg-[#10B981] hover:bg-[#09261C] px-5 py-3 text-sm font-bold text-[#FFFFFF] transition-colors shadow-sm"
                  >
                    {t("explore.empty.resetBtn")}
                  </button>
                </div>
              )}
            </section>
          </div>
        </div>

        <div className="mt-8 lg:mt-10">
          <CollectionSpotlight
            onExplore={() => {
              updateGenre("Philosophy");
              setNotice(
                lang === "fa"
                  ? "مجموعه فلسفه نمایش داده شد."
                  : "Showing the philosophy collection.",
              );
            }}
          />
        </div>

        <div className="mt-6 lg:mt-8">
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
          className="fixed bottom-24 left-1/2 z-[60] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 rounded-xl bg-[#09261C] border border-[#163A2E] px-5 py-4 text-sm font-semibold text-[#FFFFFF] shadow-xl lg:bottom-6"
        >
          {notice}
        </div>
      )}
    </div>
  );
}

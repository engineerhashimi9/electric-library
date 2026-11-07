import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { books } from "./data";
import { getLocalized } from "@/utils/langHelper";

import { BookCard } from "./BookCard";
import CatalogControls from "./CatalogControls";
import CatalogHero from "./CatalogHero";
import CatalogPagination from "./CatalogPagination";
import CollectionSpotlight from "./CollectionSpotlight";
import { ViewToggle } from "./ViewToggle";

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
  const [favorites, setFavorites] = useState([]);
  const [page, setPage] = useState(1);
  const [desktopPerPage, setDesktopPerPage] = useState(8);
  const [notice, setNotice] = useState("");

  const desktop = useDesktopLayout();
  const searchRef = useRef(null);

  const perPage = desktop ? desktopPerPage : 6;

  useEffect(() => {
    if (!notice) return;
    const timeout = window.setTimeout(() => setNotice(""), 4000);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  const filteredBooks = useMemo(() => {
    const search = query.trim().toLowerCase();

    const result = books.filter((book) => {
      const titleStr = typeof book.title === "object" ? `${book.title.en} ${book.title.fa}` : book.title;
      const authorStr = typeof book.author === "object" ? `${book.author.en} ${book.author.fa}` : book.author;
      const detailStr = typeof book.detail === "object" ? `${book.detail.en} ${book.detail.fa}` : (book.detail || "");

      const searchableText = [titleStr, authorStr, detailStr, book.genre]
        .join(" ")
        .toLowerCase();

      if (search && !searchableText.includes(search)) return false;

      if (genre !== "All Genres" && book.genre !== genre) return false;

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
  }, [query, genre, sort, desktop, lang]);

  const total = filteredBooks.length;
  const pageCount = Math.max(1, Math.ceil(total / perPage));
  const currentPage = Math.min(page, pageCount);

  const start = total === 0 ? 0 : (currentPage - 1) * perPage + 1;
  const end = Math.min(currentPage * perPage, total);

  const visibleBooks = useMemo(() => {
    const startIndex = (currentPage - 1) * perPage;
    return filteredBooks.slice(startIndex, startIndex + perPage);
  }, [filteredBooks, currentPage, perPage]);

  function updateQuery(value) {
    setQuery(value);
    setPage(1);
  }

  function updateGenre(nextGenre) {
    setGenre(nextGenre);
    setPage(1);
  }

  function updateSort(nextSort) {
    setSort(nextSort);
    setPage(1);
  }

  function toggleFavorite(id) {
    setFavorites((prev) => {
      const isFav = prev.includes(id);
      const next = isFav ? prev.filter((item) => item !== id) : [...prev, id];
      const targetBook = books.find((b) => b.id === id);
      const title = targetBook ? getLocalized(targetBook.title, lang) : "";

      setNotice(
        isFav
          ? (lang === "fa" ? `«${title}» از علاقه‌مندی‌ها حذف شد.` : `Removed “${title}” from favorites.`)
          : (lang === "fa" ? `«${title}» به علاقه‌مندی‌ها اضافه شد.` : `Added “${title}” to favorites.`),
      );

      return next;
    });
  }

  function handleBookAction(book) {
    const title = getLocalized(book.title, lang);
    setNotice(
      lang === "fa"
        ? `دانلود «${title}» آغاز شد.`
        : `Download started for “${title}”.`,
    );
  }

  function handlePageChange(nextPage) {
    setPage(Math.min(Math.max(nextPage, 1), pageCount));
  }

  return (
    <div className="min-h-screen bg-[#F4FAFA] text-[#0A2E2C]">
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
          />

          {/* Catalog Toolbar */}
          <div className="mb-4 mt-6 flex flex-wrap items-center justify-between gap-4 lg:mb-6 lg:mt-8">
            <p className="text-xs text-[#4A6B68] font-bold sm:text-sm">
              <span className="lg:hidden">
                {t("explore.showingMobile", { total })}
              </span>
              <span className="hidden lg:inline">
                {t("explore.showing", { start, end, total })}
              </span>
            </p>

            <div className="hidden lg:flex items-center gap-3">
              <select
                aria-label={t("explore.sort.label")}
                value={sort}
                onChange={(event) => updateSort(event.target.value)}
                className="rounded-xl bg-[#FFFFFF] border border-[#D0E8E6] text-[#0A2E2C] px-4 py-2.5 text-sm font-bold shadow-sm outline-none focus:border-[#17A296]"
              >
                <option value="popular">{t("explore.sort.popular")}</option>
                <option value="rating">{t("explore.sort.rating")}</option>
                <option value="title">{t("explore.sort.title")}</option>
              </select>
              <ViewToggle view={view} onChange={setView} />
            </div>
          </div>
        </div>

        <section aria-label="Library books" className="min-w-0">
          {visibleBooks.length > 0 ? (
            <div
              className={`grid gap-3 sm:gap-5 lg:gap-x-5 lg:gap-y-7 ${
                view === "grid"
                  ? "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4"
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
            <div className="flex min-h-72 flex-col items-center justify-center rounded-3xl bg-[#FFFFFF] border border-[#D0E8E6] p-6 text-center shadow-sm">
              <h2 className="text-2xl font-bold text-[#0E6760]">
                {t("explore.empty.title")}
              </h2>

              <p className="mt-2 text-sm text-[#4A6B68]">
                {t("explore.empty.desc")}
              </p>

              <button
                onClick={() => {
                  updateQuery("");
                  updateGenre("All Genres");
                }}
                className="mt-5 rounded-xl bg-[#17A296] hover:bg-[#0E6760] px-5 py-3 text-sm font-bold text-[#FFFFFF] transition-colors shadow-sm"
              >
                {t("explore.empty.resetBtn")}
              </button>
            </div>
          )}
        </section>

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

      {notice && (
        <div
          role="status"
          className="fixed bottom-24 left-1/2 z-[60] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 rounded-xl bg-[#0E6760] border border-[#156B6B] px-5 py-4 text-sm font-semibold text-[#FFFFFF] shadow-xl lg:bottom-6"
        >
          {notice}
        </div>
      )}
    </div>
  );
}

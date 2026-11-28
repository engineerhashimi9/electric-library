import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { books } from "./data";
import { getLocalized } from "@/utils/langHelper";
import { useFavoritesContext } from "@/context/FavoritesContext";

import { BookCard } from "./BookCard";
import CatalogControls from "./CatalogControls";
import CatalogHero from "./CatalogHero";
import CatalogPagination from "./CatalogPagination";
import CollectionSpotlight from "./CollectionSpotlight";
import { ViewToggle } from "./ViewToggle";
import BookExcerptModal from "@/components/common/BookExcerptModal";
import { CheckCircle2 } from "lucide-react";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const { isFavorite, toggleFavorite } = useFavoritesContext();

  const [query, setQuery] = useState(() => searchParams.get("q") || "");
  const [genre, setGenre] = useState(() => searchParams.get("genre") || "All Genres");
  const [sort, setSort] = useState("popular");
  const [view, setView] = useState("grid");
  const [page, setPage] = useState(1);
  const [desktopPerPage, setDesktopPerPage] = useState(8);
  const [notice, setNotice] = useState("");
  const [previewBook, setPreviewBook] = useState(null);

  const desktop = useDesktopLayout();
  const searchRef = useRef(null);

  const perPage = desktop ? desktopPerPage : 6;

  // Sync state if URL query parameters change (e.g., from ThemeCard click or navbar search)
  useEffect(() => {
    const qParam = searchParams.get("q");
    if (qParam !== null && qParam !== query) {
      setQuery(qParam);
      setPage(1);
    }
    const genreParam = searchParams.get("genre");
    if (genreParam !== null && genreParam !== genre) {
      setGenre(genreParam);
      setPage(1);
    }
  }, [searchParams]);

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
    if (value) {
      setSearchParams({ q: value, ...(genre !== "All Genres" ? { genre } : {}) });
    } else {
      setSearchParams(genre !== "All Genres" ? { genre } : {});
    }
  }

  function updateGenre(nextGenre) {
    setGenre(nextGenre);
    setPage(1);
    if (nextGenre !== "All Genres") {
      setSearchParams({ ...(query ? { q: query } : {}), genre: nextGenre });
    } else {
      setSearchParams(query ? { q: query } : {});
    }
  }

  function updateSort(nextSort) {
    setSort(nextSort);
    setPage(1);
  }

  function handleFavoriteToggle(bookId) {
    const targetBook = books.find((b) => b.id === bookId);
    if (targetBook) {
      toggleFavorite(targetBook);
    }
  }

  function handleBookAction(book) {
    setPreviewBook(book);
  }

  function handlePageChange(nextPage) {
    setPage(Math.min(Math.max(nextPage, 1), pageCount));
  }

  return (
    <div className="page-container">
      <BookExcerptModal
        book={previewBook}
        isOpen={Boolean(previewBook)}
        onClose={() => setPreviewBook(null)}
      />

      <main id="catalog" className="content-container" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <CatalogHero />

        <div>
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              marginTop: "1.5rem",
              marginBottom: "1rem",
            }}
          >
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontWeight: 700 }}>
              <span>{t("explore.showing", { start, end, total })}</span>
            </p>

            <div className="hidden-mobile" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <label className="relative">
                <select
                  aria-label={t("explore.sort.label")}
                  value={sort}
                  onChange={(event) => updateSort(event.target.value)}
                  className="select-styled"
                >
                  <option value="popular">{t("explore.sort.popular")}</option>
                  <option value="rating">{t("explore.sort.rating")}</option>
                  <option value="title">{t("explore.sort.title")}</option>
                </select>
              </label>
              <ViewToggle view={view} onChange={setView} />
            </div>
          </div>
        </div>

        <section aria-label="Library books" style={{ minWidth: 0 }}>
          {visibleBooks.length > 0 ? (
            <div
              className={
                view === "grid"
                  ? "books-grid"
                  : "d-flex flex-col gap-4"
              }
            >
              {visibleBooks.map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                  favorite={isFavorite(book.id)}
                  onToggleFavorite={handleFavoriteToggle}
                  onAction={handleBookAction}
                  view={view}
                />
              ))}
            </div>
          ) : (
            <div
              className="card-surface"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "3rem 1.5rem",
                textAlign: "center",
                gap: "1rem",
              }}
            >
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--primary)" }}>
                {t("explore.empty.title")}
              </h2>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", maxWidth: "26rem" }}>
                {t("explore.empty.desc")}
              </p>
              <button
                type="button"
                onClick={() => {
                  updateQuery("");
                  updateGenre("All Genres");
                }}
                className="btn btn-primary btn-md"
              >
                {t("explore.empty.resetBtn")}
              </button>
            </div>
          )}
        </section>

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
      </main>

      {notice && (
        <aside role="status" aria-live="polite" className="toast-floating">
          <CheckCircle2 size={18} style={{ color: "var(--primary-light)", flexShrink: 0 }} />
          <span>{notice}</span>
        </aside>
      )}
    </div>
  );
}

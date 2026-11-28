import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Sparkles } from "lucide-react";
import { API_URL } from "@/api/auth/utils";
import { getBookById } from "@/data/booksRepository";
import { getLocalized } from "@/utils/langHelper";
import BookBreadcrumbs from "./BookBreadcrumbs";
import BookCoverPanel from "./BookCoverPanel";
import BookInfoPanel from "./BookInfoPanel";

/**
 * Turns the author field into a plain text name.
 * Handles 3 formats: plain string, { en, fa } object, or { name, last_name } from the API.
 */
function getAuthorName(author, lang) {
  if (!author) return "";
  if (typeof author === "string") return author;

  if ("en" in author || "fa" in author) {
    return getLocalized(author, lang);
  }

  return [author.name, author.last_name].filter(Boolean).join(" ");
}

/**
 * BookDetail Page
 * Loads a book by its URL ID and renders BookBreadcrumbs, BookCoverPanel, and BookInfoPanel.
 */
export default function BookDetail() {
  // 1. Read the book ID from the URL (example: /book/meditations)
  const { id: bookId } = useParams();

  // 2. Get translation helper and current language ("en" or "fa")
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const isRtl = lang === "fa";

  // 3. Local book data (used as a fallback if the backend API is offline)
  const localBook = getBookById(bookId);

  // 4. Component states
  const [apiBook, setApiBook] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isBorrowed, setIsBorrowed] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // 5. Scroll to top and reset borrow state whenever the book ID changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsBorrowed(false);
  }, [bookId]);

  // 6. Try to load fresh book data from the backend API
  useEffect(() => {
    axios
      .get(`${API_URL}/api/v1/books/${bookId}/`)
      .then((response) => {
        if (response.data) {
          setApiBook(response.data);
        }
      })
      .catch(() => {
        // If the API fails, keep using the local book data
        setApiBook(null);
      });
  }, [bookId]);

  // Show a temporary notification message at the top of the screen
  function showToast(message) {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage("");
    }, 3200);
  }

  // Add or remove the book from favorites
  function handleToggleFavorite() {
    const nextFavorite = !isFavorite;
    setIsFavorite(nextFavorite);

    if (nextFavorite) {
      showToast(lang === "fa" ? "به علاقه‌مندی‌ها افزوده شد" : "Added to your favorites");
    } else {
      showToast(lang === "fa" ? "از علاقه‌مندی‌ها حذف شد" : "Removed from favorites");
    }
  }

  // Mark the book as borrowed and notify the user
  function handleBorrow() {
    setIsBorrowed(true);
    showToast(t("bookDetail.borrowSuccess"));
  }

  // Copy the current page link to the clipboard
  async function handleShare() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      showToast(t("bookDetail.copied"));
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      showToast(window.location.href);
    }
  }

  // Combine local book data with API data (API data overrides local fields)
  const book = apiBook ? { ...localBook, ...apiBook } : localBook;

  // If no book is found, show a simple "Not Found" message
  if (!book) {
    return (
      <main className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-xl sm:text-2xl font-extrabold text-[#0E6760] mb-2">
          {t("bookDetail.notFound")}
        </h1>
        <Link
          to="/explorebooks"
          className="mt-4 px-5 py-2.5 rounded-xl bg-[#0E6760] text-[#FFFFFF] font-bold text-sm hover:bg-[#17A296] transition-colors"
        >
          {t("bookDetail.returnExplore")}
        </Link>
      </main>
    );
  }

  // Prepare localized text values for child components
  const title = getLocalized(book.title, lang);
  const authorName = getAuthorName(book.author, lang);
  const quote = getLocalized(book.quote, lang);

  const genreLabel = Array.isArray(book.category)
    ? book.category.map((c) => c.name).join(" • ")
    : getLocalized(book.genre, lang);

  return (
    <main className="min-h-screen bg-[#F6FBFA] text-[#0A2E2C] pb-24 pt-4 sm:pt-6">
      {/* Floating toast notification banner */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed top-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#0E6760] text-[#FFFFFF] shadow-library-lg border border-[#17A296] text-xs sm:text-sm font-semibold animate-fade-in"
        >
          <Sparkles size={16} className="text-[#9EEFE8] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main centered page container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {/* Top breadcrumbs and Back button */}
        <BookBreadcrumbs title={title} isRtl={isRtl} />

        {/* Main book details card */}
        <section
          aria-labelledby="book-detail-title"
          className="bg-[#FFFFFF] border border-[#D0E8E6] rounded-3xl p-5 sm:p-8 lg:p-10 shadow-library-md relative overflow-hidden"
        >
          {/* Decorative soft background glow */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 bg-[#17A296]/10 rounded-full blur-3xl" />

          {/* Two-column layout: left side = cover, right side = book info */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
            <BookCoverPanel
              key={bookId}
              cover={book.cover}
              title={title}
              authorName={authorName}
              format={book.format}
              isFavorite={isFavorite}
              isCopied={isCopied}
              onToggleFavorite={handleToggleFavorite}
              onShare={handleShare}
            />

            <BookInfoPanel
              book={book}
              title={title}
              authorName={authorName}
              genreLabel={genreLabel}
              quote={quote}
              lang={lang}
              isBorrowed={isBorrowed}
              onBorrow={handleBorrow}
              onDownload={() => showToast(t("bookDetail.downloadSuccess"))}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

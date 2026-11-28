import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import {
  ArrowLeft,
  ArrowRight,
  Star,
  Heart,
  Share2,
  BookOpen,
  Download,
  CheckCircle2,
  Bookmark,
  Quote,
  Sparkles,
  Headphones,
} from "lucide-react";
import { API_URL } from "@/api/auth/utils";
import { getBookById } from "@/data/booksRepository";
import { getLocalized } from "@/utils/langHelper";

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
 * Shows a single book's cover, title, author, rating, quick specs, quote,
 * and Download / Favorite / Share buttons.
 */
export default function BookDetail() {
  // 1. Read the book ID from the URL (example: /book/meditations)
  const { id: bookId } = useParams();
  const navigate = useNavigate();

  // 2. Get translation helper and current language ("en" or "fa")
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const isRtl = lang === "fa";

  // 3. Local book data (used as a fallback if the backend API is offline)
  const localBook = getBookById(bookId);

  // 4. Component states
  const [apiBook, setApiBook] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [downloadedBookId, setDownloadedBookId] = useState(null);
  const [failedImageId, setFailedImageId] = useState(null);
  const [isCopied, setIsCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const isDownloaded = downloadedBookId === bookId;
  const imageError = failedImageId === bookId;

  // 5. Scroll to top whenever the book ID changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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

  // Mark the book as downloaded and notify the user
  function handleDownload() {
    setDownloadedBookId(bookId);
    showToast(t("bookDetail.downloadSuccess"));
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

  // Prepare localized text values for the UI
  const title = getLocalized(book.title, lang);
  const authorName = getAuthorName(book.author, lang);
  const quote = getLocalized(book.quote, lang);

  const genreLabel = Array.isArray(book.category)
    ? book.category.map((c) => c.name).join(" • ")
    : getLocalized(book.genre, lang);

  const pagesText = book.pages
    ? `${book.pages} ${lang === "fa" ? "صفحه" : "pp"}`
    : book.duration || "—";

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
        {/* Top navigation bar with breadcrumbs and Back button */}
        <nav
          aria-label="Breadcrumbs"
          className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-[#4A6B68]"
        >
          {/* Breadcrumb links (Home / Explore / Book Title) */}
          <div className="flex items-center gap-2 flex-wrap">
            <Link to="/" className="hover:text-[#0E6760] transition-colors font-medium">
              {t("bookDetail.breadcrumbHome")}
            </Link>
            <span className="text-[#D0E8E6] font-bold">/</span>
            <Link to="/explorebooks" className="hover:text-[#0E6760] transition-colors font-medium">
              {t("bookDetail.breadcrumbExplore")}
            </Link>
            <span className="text-[#D0E8E6] font-bold">/</span>
            <span className="text-[#0E6760] font-bold truncate max-w-[200px] sm:max-w-xs">
              {title}
            </span>
          </div>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#D0E8E6] bg-[#FFFFFF] hover:bg-[#E6F4F3] text-[#0E6760] font-bold text-xs transition-colors shadow-library-sm active:scale-95"
          >
            {isRtl ? <ArrowRight size={14} aria-hidden="true" /> : <ArrowLeft size={14} aria-hidden="true" />}
            <span>{t("bookDetail.back")}</span>
          </button>
        </nav>

        {/* Main book details card */}
        <section
          aria-labelledby="book-detail-title"
          className="bg-[#FFFFFF] border border-[#D0E8E6] rounded-3xl p-5 sm:p-8 lg:p-10 shadow-library-md relative overflow-hidden"
        >
          {/* Decorative soft background glow */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 bg-[#17A296]/10 rounded-full blur-3xl" />

          {/* Two-column layout: left side = cover, right side = book info */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
            {/* Left column: book cover image and Favorite / Share buttons */}
            <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center">
              {/* Book cover frame */}
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[2/3] rounded-2xl overflow-hidden shadow-library-lg border border-[#D0E8E6] bg-[#E6F4F3] group">
                {imageError ? (
                  /* Fallback box shown if the cover image fails to load */
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#E6F4F3] text-[#0E6760]">
                    <BookOpen size={48} className="text-[#17A296] mb-3 opacity-80" />
                    <span className="font-extrabold text-base leading-snug">{title}</span>
                    <span className="text-xs text-[#4A6B68] mt-1 font-medium">{authorName}</span>
                  </div>
                ) : (
                  <img
                    src={book.cover}
                    alt={title}
                    onError={() => setFailedImageId(bookId)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}

                {/* Book format badge (ebook / audio) on top-left of cover */}
                <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 bg-[#0E6760]/90 border border-[#156B6B] text-[#FFFFFF] text-xs font-extrabold px-3 py-1 rounded-lg uppercase tracking-wider backdrop-blur shadow-sm flex items-center gap-1.5">
                  {book.format === "audio" ? (
                    <Headphones size={13} className="text-[#9EEFE8]" />
                  ) : (
                    <BookOpen size={13} className="text-[#9EEFE8]" />
                  )}
                  <span>{book.format || "ebook"}</span>
                </div>

                <button
                  type="button"
                  onClick={handleToggleFavorite}
                  aria-label={isFavorite ? t("bookDetail.inFavorites") : t("bookDetail.addToFavorites")}
                  aria-pressed={isFavorite}
                  className="absolute top-3 right-3 rtl:right-auto rtl:left-3 p-2.5 rounded-full bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#0E6760] border border-[#D0E8E6] shadow-library-sm backdrop-blur transition-all active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
                >
                  <Heart
                    size={18}
                    className={
                      isFavorite
                        ? "fill-[#17A296] text-[#17A296]"
                        : "text-[#4A6B68] hover:text-[#0E6760]"
                    }
                  />
                </button>
              </div>

              {/* Action row below cover: Favorite button and Share button */}
              <div className="w-full max-w-[280px] sm:max-w-[320px] flex items-center gap-2 mt-4">
                <button
                  type="button"
                  onClick={handleToggleFavorite}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border text-xs font-bold transition-all active:scale-95 ${
                    isFavorite
                      ? "bg-[#E6F4F3] border-[#17A296] text-[#0E6760]"
                      : "bg-[#FFFFFF] border-[#D0E8E6] text-[#4A6B68] hover:bg-[#F6FBFA] hover:text-[#0E6760]"
                  }`}
                >
                  <Bookmark size={15} className={isFavorite ? "fill-[#17A296] text-[#17A296]" : ""} />
                  <span className="truncate">
                    {isFavorite ? t("bookDetail.inFavorites") : t("bookDetail.addToFavorites")}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleShare}
                  aria-label={t("bookDetail.share")}
                  title={t("bookDetail.share")}
                  className={`p-2.5 rounded-xl border border-[#D0E8E6] transition-colors shrink-0 active:scale-95 ${
                    isCopied
                      ? "bg-[#17A296] text-[#FFFFFF] border-[#17A296]"
                      : "bg-[#FFFFFF] hover:bg-[#E6F4F3] text-[#0E6760]"
                  }`}
                >
                  <Share2 size={16} />
                </button>
              </div>
            </div>

            {/* Right column: genre, title, rating, info cards, quote, and Borrow / Download */}
            <div className="md:col-span-7 lg:col-span-8 space-y-5 sm:space-y-6">
              {/* Genre and availability badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                {genreLabel && (
                  <span className="bg-[#E6F4F3] border border-[#D0E8E6] text-[#0E6760] text-xs font-extrabold px-3 py-1 rounded-full">
                    {genreLabel}
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5 bg-[#E6F4F3] border border-[#D0E8E6] text-[#236D64] text-xs font-bold px-3 py-1 rounded-full">
                  <span className="h-2 w-2 rounded-full bg-[#17A296] animate-pulse" />
                  <span>{t("bookDetail.available")}</span>
                </span>
              </div>

              {/* Book title and author link */}
              <div className="space-y-2">
                <h1
                  id="book-detail-title"
                  className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0E6760] tracking-tight leading-tight"
                >
                  {title}
                </h1>
                <p className="text-base sm:text-lg text-[#4A6B68] font-semibold">
                  {lang === "fa" ? "اثر: " : "By "}
                  <Link
                    to="/author"
                    className="text-[#0E6760] hover:text-[#17A296] hover:underline underline-offset-4 transition-colors"
                  >
                    {authorName}
                  </Link>
                </p>
              </div>

              {/* Rating, review count, and shelf location */}
              <div className="flex flex-wrap items-center gap-3 py-2 border-y border-[#D0E8E6]/60">
                {/* Star rating value */}
                <div className="flex items-center gap-1 text-sm font-extrabold text-[#0A2E2C]">
                  <Star size={16} className="fill-[#F59E0B] text-[#F59E0B]" />
                  <span>{book.rating}</span>
                  <span className="text-xs text-[#4A6B68] font-medium">/ 5.0</span>
                </div>
                <span className="text-[#D0E8E6] font-bold">•</span>
                <span className="text-xs sm:text-sm text-[#4A6B68] font-medium">
                  {book.reviews} {t("bookCard.reviews")}
                </span>
                <span className="text-[#D0E8E6] font-bold">•</span>
                <span className="text-xs text-[#236D64] font-bold bg-[#E6F4F3] px-2.5 py-0.5 rounded-lg border border-[#D0E8E6]">
                  {book.shelf}
                </span>
              </div>

              {/* 4 quick info boxes: Pages, Format, Published Year, File Size */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* Pages count box */}
                <div className="bg-[#F6FBFA] border border-[#D0E8E6] rounded-2xl p-3 text-center sm:text-start">
                  <span className="text-[11px] font-bold text-[#4A6B68] uppercase tracking-wider block">
                    {t("bookDetail.pages")}
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-[#0E6760] mt-0.5 block">
                    {pagesText}
                  </span>
                </div>

                {/* Format box */}
                <div className="bg-[#F6FBFA] border border-[#D0E8E6] rounded-2xl p-3 text-center sm:text-start">
                  <span className="text-[11px] font-bold text-[#4A6B68] uppercase tracking-wider block">
                    {t("bookDetail.format")}
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-[#0E6760] mt-0.5 block uppercase">
                    {book.format || "ebook"}
                  </span>
                </div>

                {/* Published year box */}
                <div className="bg-[#F6FBFA] border border-[#D0E8E6] rounded-2xl p-3 text-center sm:text-start">
                  <span className="text-[11px] font-bold text-[#4A6B68] uppercase tracking-wider block">
                    {t("bookDetail.published")}
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-[#0E6760] mt-0.5 block">
                    {book.publishedYear}
                  </span>
                </div>

                {/* File size box */}
                <div className="bg-[#F6FBFA] border border-[#D0E8E6] rounded-2xl p-3 text-center sm:text-start">
                  <span className="text-[11px] font-bold text-[#4A6B68] uppercase tracking-wider block">
                    {t("bookDetail.fileSize")}
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-[#0E6760] mt-0.5 block truncate">
                    {book.fileSize || "12.4 MB"}
                  </span>
                </div>
              </div>

              {/* Highlighted book quote box */}
              {quote && (
                <div className="relative rounded-2xl bg-[#E6F4F3]/70 border border-[#D0E8E6] p-4 sm:p-5">
                  <Quote
                    size={22}
                    className="absolute top-3 right-3 rtl:right-auto rtl:left-3 text-[#17A296]/40"
                    aria-hidden="true"
                  />
                  <p className="text-xs sm:text-sm italic font-medium text-[#0E6760] leading-relaxed pr-6 rtl:pr-0 rtl:pl-6">
                    &ldquo;{quote}&rdquo;
                  </p>
                </div>
              )}

              {/* Primary action button: Download Book */}
              <div className="flex items-center pt-2">
                <button
                  type="button"
                  onClick={handleDownload}
                  className={`w-full sm:w-auto sm:min-w-[240px] flex items-center justify-center gap-2 py-3 px-6 rounded-2xl font-extrabold text-sm sm:text-base transition-all shadow-library-md active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] ${
                    isDownloaded
                      ? "bg-[#236D64] text-[#FFFFFF]"
                      : "bg-[#0E6760] hover:bg-[#17A296] text-[#FFFFFF]"
                  }`}
                >
                  {isDownloaded ? (
                    <>
                      <CheckCircle2 size={18} aria-hidden="true" />
                      <span>{t("bookDetail.downloaded")}</span>
                    </>
                  ) : (
                    <>
                      <Download size={18} aria-hidden="true" />
                      <span>{t("bookDetail.downloadBook")}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

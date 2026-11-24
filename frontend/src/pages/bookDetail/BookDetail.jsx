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
  Calendar,
  Layers,
  Globe2,
  Building2,
  FolderTree,
  FileText,
  Quote,
  Sparkles,
  Info,
  Headphones,
} from "lucide-react";
import { getBookById, getRelatedBooks } from "@/data/booksRepository";
import { getLocalized } from "@/utils/langHelper";

export default function BookDetail() {
  const { bookId } = useParams().id;
  console.log(useParams());

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const isRtl = lang === "fa";
  const [bookDetail, setBookDetail] = useState({});

  const [activeTab, setActiveTab] = useState("overview"); // "overview" | "specs" | "reviews"

  const [isFavorite, setIsFavorite] = useState(false);

  const [borrowedBookId, setBorrowedBookId] = useState(null);

  const [failedImageId, setFailedImageId] = useState(null);
  const [isCopied, setIsCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const isBorrowed = borrowedBookId === bookId;
  const imageError = failedImageId === bookId;

  useEffect(() => {
    console.log(bookId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [bookId]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/v1/books/${book}/`)
      .then((response) => {
        setBookDetail(response.data);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
      });
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 3200);
  };

  const handleToggleFavorite = () => {
    setIsFavorite((prev) => {
      const next = !prev;
      showToast(
        next
          ? lang === "fa"
            ? "به علاقه‌مندی‌ها افزوده شد"
            : "Added to your favorites"
          : lang === "fa"
            ? "از علاقه‌مندی‌ها حذف شد"
            : "Removed from favorites",
      );
      return next;
    });
  };

  const handleBorrow = () => {
    setBorrowedBookId(id);
    showToast(t("bookDetail.borrowSuccess"));
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      showToast(t("bookDetail.copied"));
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      showToast(window.location.href);
    }
  };

  if (!bookDetail) {
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

  const relatedBooks = getRelatedBooks(book.id, 4);

  return (
    <main className="min-h-screen bg-[#F6FBFA] text-[#0A2E2C] pb-24 pt-4 sm:pt-6">
      {/* Toast notification banner */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {/* Navigation & Breadcrumbs */}
        <nav
          aria-label="Breadcrumbs"
          className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-[#4A6B68]"
        >
          <div className="flex items-center gap-2 flex-wrap">
            <Link
              to="/"
              className="hover:text-[#0E6760] transition-colors font-medium"
            >
              {t("bookDetail.breadcrumbHome")}
            </Link>
            <span className="text-[#D0E8E6] font-bold">/</span>
            <Link
              to="/explorebooks"
              className="hover:text-[#0E6760] transition-colors font-medium"
            >
              {t("bookDetail.breadcrumbExplore")}
            </Link>
            <span className="text-[#D0E8E6] font-bold">/</span>
            <span className="text-[#0E6760] font-bold truncate max-w-[200px] sm:max-w-xs">
              {bookDetail.title}
            </span>
          </div>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#D0E8E6] bg-[#FFFFFF] hover:bg-[#E6F4F3] text-[#0E6760] font-bold text-xs transition-colors shadow-library-sm active:scale-95"
          >
            {isRtl ? (
              <ArrowRight size={14} aria-hidden="true" />
            ) : (
              <ArrowLeft size={14} aria-hidden="true" />
            )}
            <span>{t("bookDetail.back")}</span>
          </button>
        </nav>

        {/* Hero Book Section */}
        <section
          aria-labelledby="book-detail-title"
          className="bg-[#FFFFFF] border border-[#D0E8E6] rounded-3xl p-5 sm:p-8 lg:p-10 shadow-library-md relative overflow-hidden"
        >
          {/* Subtle decorative glow */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 bg-[#17A296]/10 rounded-full blur-3xl" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
            {/* Left Column: Book Cover & Quick Meta */}
            <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[2/3] rounded-2xl overflow-hidden shadow-library-lg border border-[#D0E8E6] bg-[#E6F4F3] group">
                {imageError ? (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#E6F4F3] text-[#0E6760]">
                    <BookOpen
                      size={48}
                      className="text-[#17A296] mb-3 opacity-80"
                    />
                    <span className="font-extrabold text-base leading-snug">
                      {bookDetail.title}
                    </span>
                    <span className="text-xs text-[#4A6B68] mt-1 font-medium">
                      {bookDetail.author}
                    </span>
                  </div>
                ) : (
                  <img
                    src={bookDetail.cover}
                    alt={bookDetail.title}
                    onError={() => setFailedImageId(bookDetail.id)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}

                {/* Format pill badge */}
                <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 bg-[#0E6760]/90 border border-[#156B6B] text-[#FFFFFF] text-xs font-extrabold px-3 py-1 rounded-lg uppercase tracking-wider backdrop-blur shadow-sm flex items-center gap-1.5">
                  {bookDetail.format === "audio" ? (
                    <Headphones size={13} className="text-[#9EEFE8]" />
                  ) : (
                    <BookOpen size={13} className="text-[#9EEFE8]" />
                  )}
                  <span>{bookDetail.format}</span>
                </div>

                {/* Favorite Heart Button */}
                <button
                  type="button"
                  onClick={handleToggleFavorite}
                  aria-label={
                    isFavorite
                      ? t("bookDetail.inFavorites")
                      : t("bookDetail.addToFavorites")
                  }
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

              {/* Action Buttons Below Cover */}
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
                  <Bookmark
                    size={15}
                    className={
                      isFavorite ? "fill-[#17A296] text-[#17A296]" : ""
                    }
                  />
                  <span className="truncate">
                    {isFavorite
                      ? t("bookDetail.inFavorites")
                      : t("bookDetail.addToFavorites")}
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

            {/* Right Column: Book Details & Actions */}
            <div className="md:col-span-7 lg:col-span-8 space-y-5 sm:space-y-6">
              {/* Genre & Availability Badge */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="bg-[#E6F4F3] border border-[#D0E8E6] text-[#0E6760] text-xs font-extrabold px-3 py-1 rounded-full">
                  {bookDetail.category?.map((category) => (
                    <span key={category.id}>{category.name}</span>
                  ))}
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#E6F4F3] border border-[#D0E8E6] text-[#236D64] text-xs font-bold px-3 py-1 rounded-full">
                  <span className="h-2 w-2 rounded-full bg-[#17A296] animate-pulse" />
                  <span>{t("bookDetail.available")}</span>
                </span>
              </div>

              {/* Title & Author */}
              <div className="space-y-2">
                <h1
                  id="book-detail-title"
                  className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0E6760] tracking-tight leading-tight"
                >
                  {bookDetail.title}
                </h1>
                <p className="text-base sm:text-lg text-[#4A6B68] font-semibold">
                  {lang === "fa" ? "اثر: " : "By "}
                  <Link
                    to="/author"
                    className="text-[#0E6760] hover:text-[#17A296] hover:underline underline-offset-4 transition-colors"
                  >
                    {bookDetail.author?.name} {bookDetail.author?.last_name}
                  </Link>
                </p>
              </div>

              {/* Rating & Reviews Bar */}
              <div className="flex flex-wrap items-center gap-3 py-2 border-y border-[#D0E8E6]/60">
                <div className="flex items-center gap-1 text-sm font-extrabold text-[#0A2E2C]">
                  <Star size={16} className="fill-[#F59E0B] text-[#F59E0B]" />
                  <span>{book.rating}</span>
                  <span className="text-xs text-[#4A6B68] font-medium">
                    / 5.0
                  </span>
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

              {/* Key Specs Quick Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-[#F6FBFA] border border-[#D0E8E6] rounded-2xl p-3 text-center sm:text-start">
                  <span className="text-[11px] font-bold text-[#4A6B68] uppercase tracking-wider block">
                    {t("bookDetail.pages")}
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-[#0E6760] mt-0.5 block">
                    {book.pages
                      ? `${book.pages} ${lang === "fa" ? "صفحه" : "pp"}`
                      : book.duration || "—"}
                  </span>
                </div>

                <div className="bg-[#F6FBFA] border border-[#D0E8E6] rounded-2xl p-3 text-center sm:text-start">
                  <span className="text-[11px] font-bold text-[#4A6B68] uppercase tracking-wider block">
                    {t("bookDetail.format")}
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-[#0E6760] mt-0.5 block uppercase">
                    {book.format}
                  </span>
                </div>

                <div className="bg-[#F6FBFA] border border-[#D0E8E6] rounded-2xl p-3 text-center sm:text-start">
                  <span className="text-[11px] font-bold text-[#4A6B68] uppercase tracking-wider block">
                    {t("bookDetail.published")}
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-[#0E6760] mt-0.5 block">
                    {book.publishedYear}
                  </span>
                </div>

                <div className="bg-[#F6FBFA] border border-[#D0E8E6] rounded-2xl p-3 text-center sm:text-start">
                  <span className="text-[11px] font-bold text-[#4A6B68] uppercase tracking-wider block">
                    {t("bookDetail.fileSize")}
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-[#0E6760] mt-0.5 block truncate">
                    {book.fileSize || "12.4 MB"}
                  </span>
                </div>
              </div>

              {/* Notable Excerpt Callout */}
              {bookDetail.quote && (
                <div className="relative rounded-2xl bg-[#E6F4F3]/70 border border-[#D0E8E6] p-4 sm:p-5">
                  <Quote
                    size={22}
                    className="absolute top-3 right-3 rtl:right-auto rtl:left-3 text-[#17A296]/40"
                    aria-hidden="true"
                  />
                  <p className="text-xs sm:text-sm italic font-medium text-[#0E6760] leading-relaxed pr-6 rtl:pr-0 rtl:pl-6">
                    &ldquo;{bookDetail.quote}&rdquo;
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleBorrow}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-2xl font-extrabold text-sm sm:text-base transition-all shadow-library-md active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] ${
                    isBorrowed
                      ? "bg-[#236D64] text-[#FFFFFF]"
                      : "bg-[#0E6760] hover:bg-[#17A296] text-[#FFFFFF]"
                  }`}
                >
                  {isBorrowed ? (
                    <>
                      <CheckCircle2 size={18} />
                      <span>
                        {lang === "fa"
                          ? "امانت گرفته شد"
                          : "Borrowed (Active Loan)"}
                      </span>
                    </>
                  ) : (
                    <>
                      <BookOpen size={18} />
                      <span>{t("bookDetail.borrow")}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    showToast(t("bookDetail.downloadSuccess"));
                  }}
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-[#E6F4F3] hover:bg-[#D0E8E6] border border-[#D0E8E6] text-[#0E6760] font-extrabold text-sm sm:text-base transition-colors active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
                >
                  <Download size={18} />
                  <span>{t("bookDetail.download")}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Navigation Tabs */}
        <section aria-label="Book In-Depth Information" className="space-y-6">
          <div className="flex items-center gap-2 border-b border-[#D0E8E6] pb-2 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all shrink-0 flex items-center gap-2 ${
                activeTab === "overview"
                  ? "bg-[#0E6760] text-[#FFFFFF] shadow-library-sm"
                  : "bg-transparent text-[#4A6B68] hover:text-[#0E6760] hover:bg-[#E6F4F3]"
              }`}
            >
              <FileText size={15} />
              <span>{t("bookDetail.overview")}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("specs")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all shrink-0 flex items-center gap-2 ${
                activeTab === "specs"
                  ? "bg-[#0E6760] text-[#FFFFFF] shadow-library-sm"
                  : "bg-transparent text-[#4A6B68] hover:text-[#0E6760] hover:bg-[#E6F4F3]"
              }`}
            >
              <Layers size={15} />
              <span>{t("bookDetail.specifications")}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("reviews")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all shrink-0 flex items-center gap-2 ${
                activeTab === "reviews"
                  ? "bg-[#0E6760] text-[#FFFFFF] shadow-library-sm"
                  : "bg-transparent text-[#4A6B68] hover:text-[#0E6760] hover:bg-[#E6F4F3]"
              }`}
            >
              <Star size={15} />
              <span>{t("bookDetail.reviews")}</span>
            </button>
          </div>

          {/* Tab 1: Overview & Synopsis */}
          {activeTab === "overview" && (
            <div className="bg-[#FFFFFF] border border-[#D0E8E6] rounded-3xl p-6 sm:p-8 space-y-6 shadow-library-sm animate-fade-in">
              <div className="space-y-3">
                <h2 className="text-lg sm:text-xl font-extrabold text-[#0E6760] flex items-center gap-2">
                  <BookOpen size={18} className="text-[#17A296]" />
                  <span>{t("bookDetail.overview")}</span>
                </h2>
                <p className="text-sm sm:text-base text-[#4A6B68] leading-relaxed font-normal">
                  {bookDetail.description}
                </p>
              </div>

              {bookDetail.quote && (
                <div className="border-t border-[#D0E8E6]/60 pt-5 space-y-2">
                  <h3 className="text-xs sm:text-sm font-extrabold text-[#236D64] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles size={14} className="text-[#17A296]" />
                    <span>{t("bookDetail.curatorNote")}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A6B68] italic font-medium leading-relaxed bg-[#F6FBFA] border border-[#D0E8E6] p-4 rounded-2xl">
                    {bookDetail.quote}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Specifications & Archival Info */}
          {activeTab === "specs" && (
            <div className="bg-[#FFFFFF] border border-[#D0E8E6] rounded-3xl p-6 sm:p-8 shadow-library-sm animate-fade-in">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#0E6760] mb-5 flex items-center gap-2">
                <Layers size={18} className="text-[#17A296]" />
                <span>{t("bookDetail.specifications")}</span>
              </h2>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F6FBFA] border border-[#D0E8E6]">
                  <BarcodeIcon className="text-[#17A296] shrink-0" />
                  <div>
                    <dt className="text-[#4A6B68] font-bold text-[11px] uppercase tracking-wider">
                      {t("bookDetail.isbn")}
                    </dt>
                    <dd className="font-extrabold text-[#0A2E2C] mt-0.5">
                      {book.isbn}
                    </dd>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F6FBFA] border border-[#D0E8E6]">
                  <Building2 className="text-[#17A296] shrink-0" size={18} />
                  <div>
                    <dt className="text-[#4A6B68] font-bold text-[11px] uppercase tracking-wider">
                      {t("bookDetail.publisher")}
                    </dt>
                    <dd className="font-extrabold text-[#0A2E2C] mt-0.5">
                      {bookDetail.publisher}
                    </dd>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F6FBFA] border border-[#D0E8E6]">
                  <Calendar className="text-[#17A296] shrink-0" size={18} />
                  <div>
                    <dt className="text-[#4A6B68] font-bold text-[11px] uppercase tracking-wider">
                      {t("bookDetail.published")}
                    </dt>
                    <dd className="font-extrabold text-[#0A2E2C] mt-0.5">
                      {book.publishedYear}
                    </dd>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F6FBFA] border border-[#D0E8E6]">
                  <Globe2 className="text-[#17A296] shrink-0" size={18} />
                  <div>
                    <dt className="text-[#4A6B68] font-bold text-[11px] uppercase tracking-wider">
                      {t("bookDetail.language")}
                    </dt>
                    <dd className="font-extrabold text-[#0A2E2C] mt-0.5">
                      {getLocalized(book.language, lang)}
                    </dd>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F6FBFA] border border-[#D0E8E6]">
                  <FolderTree className="text-[#17A296] shrink-0" size={18} />
                  <div>
                    <dt className="text-[#4A6B68] font-bold text-[11px] uppercase tracking-wider">
                      {t("bookDetail.shelfLocation")}
                    </dt>
                    <dd className="font-extrabold text-[#0A2E2C] mt-0.5">
                      {book.shelf}
                    </dd>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F6FBFA] border border-[#D0E8E6]">
                  <Info className="text-[#17A296] shrink-0" size={18} />
                  <div>
                    <dt className="text-[#4A6B68] font-bold text-[11px] uppercase tracking-wider">
                      {t("bookDetail.availableCopies")}
                    </dt>
                    <dd className="font-extrabold text-[#236D64] mt-0.5">
                      {t("bookDetail.available")}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          )}

          {/* Tab 3: Reader Reviews */}
          {activeTab === "reviews" && (
            <div className="bg-[#FFFFFF] border border-[#D0E8E6] rounded-3xl p-6 sm:p-8 space-y-6 shadow-library-sm animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D0E8E6]/60 pb-6">
                <div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-[#0E6760] flex items-center gap-2">
                    <Star size={18} className="text-[#F59E0B] fill-[#F59E0B]" />
                    <span>{t("bookDetail.reviews")}</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-[#4A6B68] mt-1 font-medium">
                    {book.reviews} {t("bookCard.reviews")} •{" "}
                    {lang === "fa" ? "میانگین نمره: " : "Average rating: "}{" "}
                    {book.rating} / 5.0
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    showToast(
                      lang === "fa"
                        ? "بخش ثبت نظر در حال حاضر برای اعضای رسمی فعال است."
                        : "Review submission is open to verified scholars.",
                    )
                  }
                  className="px-4 py-2 rounded-xl bg-[#0E6760] hover:bg-[#17A296] text-[#FFFFFF] text-xs font-bold transition-colors shrink-0"
                >
                  {lang === "fa"
                    ? "ثبت دیدگاه یا یادداشت"
                    : "Write a Reflection"}
                </button>
              </div>

              {/* Sample scholarly reviews */}
              <div className="space-y-4">
                <article className="p-4 sm:p-5 rounded-2xl bg-[#F6FBFA] border border-[#D0E8E6] space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#0E6760] text-[#FFFFFF] flex items-center justify-center font-bold text-xs">
                        EA
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-extrabold text-[#0A2E2C]">
                          Eleanor Vance
                        </h4>
                        <span className="text-[11px] text-[#4A6B68]">
                          {lang === "fa"
                            ? "عضو پیوسته بایگانی • ۲ هفته قبل"
                            : "Curator Fellow • 2 weeks ago"}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#F59E0B]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="fill-[#F59E0B]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A6B68] leading-relaxed pt-1">
                    {lang === "fa"
                      ? "یکی از غنی‌ترین و ماندگارترین متونی که تاکنون در آرشیو کتابخانه مطالعه کرده‌ام. نگارش، ساختار روایی و عمق اندیشه در بالاترین سطح قرار دارد."
                      : "A monumental achievement in literary form. The cadence of the language and emotional clarity render this an indispensable volume for any serious reader."}
                  </p>
                </article>

                <article className="p-4 sm:p-5 rounded-2xl bg-[#F6FBFA] border border-[#D0E8E6] space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#17A296] text-[#FFFFFF] flex items-center justify-center font-bold text-xs">
                        TH
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-extrabold text-[#0A2E2C]">
                          Tariq Haidari
                        </h4>
                        <span className="text-[11px] text-[#4A6B68]">
                          {lang === "fa"
                            ? "پژوهشگر فلسفه و ادبیات • ۱ ماه قبل"
                            : "Literature Scholar • 1 month ago"}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#F59E0B]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="fill-[#F59E0B]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A6B68] leading-relaxed pt-1">
                    {lang === "fa"
                      ? "کیفیت ترجمه، دقت در جزئیات تاریخی و ساختار فلسفی اثر بی‌نظیر است. خواندن آن را به همه پژوهشگران توصیه می‌کنم."
                      : "Remarkable precision and philosophical insight. The annotations and editorial rigor make this digital edition particularly pleasurable to examine."}
                  </p>
                </article>
              </div>
            </div>
          )}
        </section>

        {/* Related Books Section */}
        {relatedBooks.length > 0 && (
          <section aria-labelledby="related-heading" className="space-y-4 pt-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#17A296] uppercase tracking-wider block">
                {t("bookDetail.relatedTitle")}
              </span>
              <h2
                id="related-heading"
                className="text-xl sm:text-2xl font-extrabold text-[#0E6760] tracking-tight"
              >
                {t("bookDetail.relatedSubtitle")}
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedBooks.map((relBook) => {
                const relTitle = getLocalized(relBook.title, lang);
                const relAuthor = getLocalized(relBook.author, lang);
                return (
                  <article
                    key={relBook.id}
                    className="flex flex-col bg-[#FFFFFF] p-3 sm:p-4 rounded-2xl border border-[#D0E8E6] space-y-3 relative group hover:-translate-y-1 hover:border-[#17A296] hover:shadow-library-hover transition-all duration-300"
                  >
                    <Link
                      to={`/book/${relBook.id}`}
                      className="relative overflow-hidden rounded-xl bg-[#E6F4F3] aspect-[2/3] w-full border border-[#D0E8E6]/60 block"
                    >
                      <img
                        src={relBook.cover}
                        alt={relTitle}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>

                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 text-xs text-[#0A2E2C] font-bold">
                        <Star
                          size={12}
                          className="fill-[#17A296] text-[#17A296]"
                          aria-hidden="true"
                        />
                        <span>{relBook.rating}</span>
                      </div>
                      <Link to={`/book/${relBook.id}`} className="block">
                        <h3 className="text-xs sm:text-sm font-extrabold text-[#0A2E2C] truncate leading-snug hover:text-[#0E6760]">
                          {relTitle}
                        </h3>
                      </Link>
                      <p className="text-xs text-[#4A6B68] truncate font-medium">
                        {relAuthor}
                      </p>
                    </div>

                    <div className="pt-1 mt-auto border-t border-[#D0E8E6]/50">
                      <Link
                        to={`/book/${relBook.id}`}
                        className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl bg-[#E6F4F3] hover:bg-[#0E6760] text-[#0E6760] hover:text-[#FFFFFF] text-xs font-bold transition-colors active:scale-95"
                      >
                        <Info size={13} />
                        <span>{t("bookCard.detail")}</span>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

function getIconData(params) {
  return (
    <svg
      {...props}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 5v14" />
      <path d="M8 5v14" />
      <path d="M12 5v14" />
      <path d="M17 5v14" />
      <path d="M21 5v14" />
    </svg>
  );
}

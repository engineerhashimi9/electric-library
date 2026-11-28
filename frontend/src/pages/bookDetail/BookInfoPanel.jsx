  import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BookOpen, CheckCircle2, Download, Quote, Star } from "lucide-react";

/**
 * BookInfoPanel
 * Right column of BookDetail: displays genre, title, author, rating,
 * 4 quick info boxes, quote, and Borrow / Download buttons.
 */
export default function BookInfoPanel({
  book,
  title,
  authorName,
  genreLabel,
  quote,
  lang,
  isBorrowed,
  onBorrow,
  onDownload,
}) {
  const { t } = useTranslation();

  // Format page count or audio duration
  const pagesText = book.pages
    ? `${book.pages} ${lang === "fa" ? "صفحه" : "pp"}`
    : book.duration || "—";

  return (
    /* Right column wrapper */
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

      {/* Primary action buttons: Borrow and Download */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
        <button
          type="button"
          onClick={onBorrow}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-2xl font-extrabold text-sm sm:text-base transition-all shadow-library-md active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] ${
            isBorrowed
              ? "bg-[#236D64] text-[#FFFFFF]"
              : "bg-[#0E6760] hover:bg-[#17A296] text-[#FFFFFF]"
          }`}
        >
          {isBorrowed ? (
            <>
              <CheckCircle2 size={18} />
              <span>{lang === "fa" ? "امانت گرفته شد" : "Borrowed (Active Loan)"}</span>
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
          onClick={onDownload}
          className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-[#E6F4F3] hover:bg-[#D0E8E6] border border-[#D0E8E6] text-[#0E6760] font-extrabold text-sm sm:text-base transition-colors active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
        >
          <Download size={18} />
          <span>{t("bookDetail.download")}</span>
        </button>
      </div>
    </div>
  );
}

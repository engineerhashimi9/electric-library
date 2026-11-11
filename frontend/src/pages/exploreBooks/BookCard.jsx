import {
  BookOpen,
  Download,
  Heart,
  Star,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { getLocalized } from "../../utils/langHelper";

export function BookCard({ book, favorite, onToggleFavorite, onAction, view }) {
  const [imageFailed, setImageFailed] = useState(false);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const localizedTitle = getLocalized(book.title, lang);
  const localizedAuthor = getLocalized(book.author, lang);
  const localizedMobileTitle = getLocalized(
    book.mobileTitle || book.title,
    lang
  );

  const desktopLabel =
    {
      ebook: t("bookCard.ebook"),
      audio: t("bookCard.audio"),
      hardcover: t("bookCard.hardcover"),
    }[book.format] || book.format;

  const mobileLabel =
    {
      ebook: t("bookCard.ebook"),
      audio: t("bookCard.audio"),
      hardcover: t("bookCard.hardcover"),
    }[book.mobileFormat] || book.mobileFormat;

  return (
    <article
      className={`group flex w-full rounded-2xl bg-[#FFFFFF] border border-[#D0E8E6] hover:border-[#17A296] hover:-translate-y-1 hover:shadow-library-hover p-3 sm:p-4 shadow-library-sm transition-all duration-300 ${
        view === "list" ? "flex-row gap-4 items-stretch" : "h-full flex-col"
      }`}
    >
      <div
        className={`relative shrink-0 overflow-hidden rounded-xl bg-[#E6F4F3] border border-[#D0E8E6] ${
          view === "list"
            ? "w-28 sm:w-36 md:w-40"
            : "w-full"
        }`}
      >
        {imageFailed ? (
          <div className="flex aspect-[2/3] h-full w-full flex-col items-center justify-center gap-3 bg-[#E6F4F3] p-3 text-center">
            <BookOpen size={28} className="text-[#236D64]" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-bold text-[#0E6760] line-clamp-2">
              {localizedTitle}
            </span>
          </div>
        ) : (
          <picture>
            <source
              media="(max-width: 1023px)"
              srcSet={book.mobileCover || book.cover}
            />
            <img
              src={book.cover}
              alt={`${localizedTitle} book cover`}
              loading="lazy"
              onError={() => setImageFailed(true)}
              className="aspect-[2/3] h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </picture>
        )}

        <span className="absolute left-2.5 top-2.5 rtl:left-auto rtl:right-2.5 rounded-lg px-2.5 py-1 text-xs font-bold text-[#236D64] bg-[#E6F4F3]/95 border border-[#D0E8E6] backdrop-blur max-w-[70%] truncate shadow-sm">
          <span className="lg:hidden">{mobileLabel}</span>
          <span className="hidden lg:inline">{desktopLabel}</span>
        </span>

        <button
          type="button"
          onClick={() => onToggleFavorite(book.id)}
          aria-label={
            favorite
              ? `Remove ${localizedTitle} from favorites`
              : `Add ${localizedTitle} to favorites`
          }
          aria-pressed={favorite}
          className="absolute right-2.5 top-2.5 rtl:right-auto rtl:left-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] border border-[#D0E8E6] text-[#0E6760] shadow-library-sm backdrop-blur transition-all active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
        >
          <Heart
            size={16}
            className={
              favorite
                ? "fill-[#17A296] text-[#17A296]"
                : "text-[#4A6B68] hover:text-[#0E6760]"
            }
          />
        </button>
      </div>

      <div
        className={`flex min-w-0 flex-1 flex-col ${
          view === "list" ? "py-1" : "pt-3"
        }`}
      >
        <div className="mb-1.5 hidden items-center gap-1.5 text-xs sm:text-sm lg:flex">
          <Star size={14} className="fill-[#17A296] text-[#17A296]" aria-hidden="true" />
          <span className="font-extrabold text-[#0A2E2C]">{book.rating}</span>
          <span className="text-[#4A6B68]">({book.reviews})</span>
        </div>

        <h3 className="truncate text-sm sm:text-base font-extrabold leading-snug text-[#0A2E2C]">
          <span className="lg:hidden">{localizedMobileTitle}</span>
          <span className="hidden lg:inline">{localizedTitle}</span>
        </h3>

        <p className="mt-1 truncate text-xs sm:text-sm text-[#4A6B68] font-medium">
          {localizedAuthor}
        </p>

        <div className="mt-1.5 flex items-center gap-1 text-xs lg:hidden">
          <Star size={13} className="fill-[#17A296] text-[#17A296]" aria-hidden="true" />
          <span className="font-extrabold text-[#0A2E2C]">
            {book.mobileRating || book.rating}
          </span>
          <span className="text-[#4A6B68]">
            ({book.mobileReviews})
          </span>
        </div>

        <p className="mt-1.5 hidden min-h-[38px] text-xs font-medium leading-relaxed text-[#4A6B68] lg:block">
          {book.duration ||
            (book.pages
              ? `${book.pages} ${lang === "fa" ? "صفحه" : "pages"}`
              : "")}{" "}
          {book.detail && (
            <>
              <span className="px-1 text-[#236D64]">•</span>{" "}
              {getLocalized(book.detail, lang)}
            </>
          )}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-3 lg:hidden">
          <span className="rounded-full px-2.5 py-1 text-xs font-bold bg-[#E6F4F3] border border-[#D0E8E6] text-[#236D64] truncate">
            {book.available
              ? t("bookCard.available")
              : t("bookCard.onHold", { count: book.holds })}
          </span>
          <button
            type="button"
            onClick={() => onAction(book)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#17A296] text-[#FFFFFF] hover:bg-[#0E6760] text-xs font-bold transition-all shadow-library-sm shrink-0 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
          >
            <Download size={14} aria-hidden="true" />
            <span>{t("bookCard.download", "Download")}</span>
          </button>
        </div>

        <button
          type="button"
          onClick={() => onAction(book)}
          className="mt-auto hidden w-full items-center justify-center gap-2 rounded-xl bg-[#17A296] text-[#FFFFFF] hover:bg-[#0E6760] px-4 py-2.5 text-xs sm:text-sm font-bold transition-all shadow-library-sm active:scale-95 lg:flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
        >
          <Download size={16} aria-hidden="true" />
          <span>{t("bookCard.download", "Download")}</span>
        </button>
      </div>
    </article>
  );
}

export default BookCard;

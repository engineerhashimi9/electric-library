import {
  ArrowRight,
  Bookmark,
  BookOpen,
  BookOpenCheck,
  Clock3,
  Headphones,
  Heart,
  PlayCircle,
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

  const ActionIcon = !book.available
    ? Clock3
    : book.format === "audio"
      ? Headphones
      : BookOpenCheck;

  const desktopAction = !book.available
    ? t("bookCard.reserve")
    : book.format === "audio"
      ? t("bookCard.listen")
      : t("bookCard.borrow");

  const mobileAction = !book.available
    ? t("bookCard.reserveShort")
    : book.mobileFormat === "audio"
      ? t("bookCard.listenShort")
      : t("bookCard.borrow");

  return (
    <article
      className={`group flex w-full rounded-2xl bg-[#FFFFFF] border border-[#E2EFEA] hover:border-[#10B981] hover:-translate-y-1 hover:shadow-lg p-2.5 sm:p-4 shadow-sm transition-all duration-300 lg:rounded-3xl ${
        view === "list" ? "flex-row gap-3 sm:gap-4 items-stretch" : "h-full flex-col"
      }`}
    >
      <div
        className={`relative shrink-0 overflow-hidden rounded-xl bg-[#EAF4F0] border border-[#DDECE6] ${
          view === "list"
            ? "w-28 sm:w-36 md:w-40"
            : "w-full"
        }`}
      >
        {imageFailed ? (
          <div className="flex aspect-[2/3] h-full w-full flex-col items-center justify-center gap-3 bg-[#EAF4F0] p-3 text-center">
            <BookOpen size={28} className="text-[#6B9080]" />
            <span className="text-xs sm:text-sm font-bold text-[#09261C] line-clamp-2">
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
              className="aspect-[2/3] h-full w-full object-cover"
            />
          </picture>
        )}
        <span className="absolute left-2 top-2 rtl:left-auto rtl:right-2 rounded-md px-2 py-1 text-[9px] font-bold text-[#0D5C46] bg-[#EAF4F0] border border-[#DDECE6] backdrop-blur sm:text-xs max-w-[70%] truncate">
          <span className="lg:hidden">{mobileLabel}</span>
          <span className="hidden lg:inline">{desktopLabel}</span>
        </span>
        <button
          onClick={() => onToggleFavorite(book.id)}
          aria-label={
            favorite
              ? `Remove ${localizedTitle} from favorites`
              : `Add ${localizedTitle} to favorites`
          }
          aria-pressed={favorite}
          className="absolute right-2 top-2 rtl:right-auto rtl:left-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] border border-[#DDECE6] text-[#09261C] shadow-sm backdrop-blur sm:h-9 sm:w-9 transition-colors"
        >
          <Heart
            size={16}
            className={
              favorite
                ? "fill-[#10B981] text-[#10B981]"
                : "text-[#52665E] hover:text-[#09261C]"
            }
          />
        </button>
      </div>

      <div
        className={`flex min-w-0 flex-1 flex-col ${
          view === "list" ? "py-1" : "pt-3"
        }`}
      >
        <div className="mb-1.5 hidden items-center gap-1.5 text-sm lg:flex">
          <Star size={15} className="fill-[#10B981] text-[#10B981]" />
          <span className="font-bold text-[#111C18]">{book.rating}</span>
          <span className="text-[#52665E]">({book.reviews})</span>
        </div>

        <h3 className="truncate text-sm sm:text-base font-bold leading-snug text-[#111C18] lg:text-lg">
          <span className="lg:hidden">{localizedMobileTitle}</span>
          <span className="hidden lg:inline">{localizedTitle}</span>
        </h3>

        <p className="mt-1 truncate text-xs text-[#52665E] font-medium sm:text-sm">
          {localizedAuthor}
        </p>

        <div className="mt-2 flex items-center gap-1 text-xs sm:text-sm lg:hidden">
          <Star size={13} className="fill-[#10B981] text-[#10B981]" />
          <span className="font-bold text-[#111C18]">
            {book.mobileRating || book.rating}
          </span>
          <span className="text-[10px] text-[#52665E] sm:text-xs">
            ({book.mobileReviews})
          </span>
        </div>

        <p className="mt-1 hidden min-h-10 text-xs font-medium leading-5 tracking-wide text-[#52665E] lg:block">
          {book.duration ||
            (book.pages
              ? `${book.pages} ${lang === "fa" ? "صفحه" : "pages"}`
              : "")}{" "}
          {book.detail && (
            <>
              <span className="px-1 text-[#6B9080]">•</span>{" "}
              {getLocalized(book.detail, lang)}
            </>
          )}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-1.5 pt-3 lg:hidden">
          <span className="rounded-full px-2.5 py-1 text-[9px] font-bold bg-[#EAF4F0] border border-[#DDECE6] text-[#0D5C46] sm:text-xs truncate">
            {book.available
              ? t("bookCard.available")
              : t("bookCard.onHold", { count: book.holds })}
          </span>
          <button
            onClick={() => onAction(book, book.mobileFormat)}
            className="inline-flex items-center gap-1 text-[10px] font-bold text-[#09261C] hover:text-[#10B981] sm:text-xs transition-colors shrink-0"
          >
            {mobileAction}
            {!book.available ? (
              <Bookmark size={14} />
            ) : book.mobileFormat === "audio" ? (
              <PlayCircle size={14} />
            ) : (
              <ArrowRight size={14} className="rtl:rotate-180" />
            )}
          </button>
        </div>

        <button
          onClick={() => onAction(book, book.format)}
          className={`mt-auto hidden w-full items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-bold transition lg:flex ${
            !book.available
              ? "bg-[#EAF4F0] border border-[#DDECE6] text-[#09261C] hover:bg-[#DDECE6]"
              : "bg-[#10B981] text-[#FFFFFF] hover:bg-[#09261C]"
          }`}
        >
          <ActionIcon size={18} />
          {desktopAction}
        </button>
      </div>
    </article>
  );
}
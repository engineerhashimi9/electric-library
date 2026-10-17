import { ArrowRight, Bookmark, BookOpen, BookOpenCheck, Clock3, Headphones, Heart, PlayCircle, Star } from "lucide-react";
import { useState } from "react";

export function BookCard({ book, favorite, onToggleFavorite, onAction, view }) {
  const [imageFailed, setImageFailed] = useState(false);

  const desktopLabel = {
    ebook: "E-BOOK",
    audio: "AUDIO",
    hardcover: "HARDCOVER",
  }[book.format];

  const mobileLabel = {
    ebook: "E-BOOK",
    audio: "AUDIOBOOK",
    hardcover: "HARDCOVER",
  }[book.mobileFormat];

  const ActionIcon = !book.available
    ? Clock3
    : book.format === "audio"
      ? Headphones
      : BookOpenCheck;

  const desktopAction = !book.available
    ? "Reserve Copy"
    : book.format === "audio"
      ? "Listen Now"
      : "Borrow";

  const mobileAction = !book.available
    ? "Reserve"
    : book.mobileFormat === "audio"
      ? "Listen"
      : "Borrow";

  return (
    <article
      className={`flex max-w-60 rounded-2xl bg-white p-3 shadow-sm transition hover:shadow-md sm:p-4 lg:rounded-3xl ${
        view === "list" ? "flex-row gap-4" : "h-full flex-col"
      }`}
    >
      <div
        className={`relative shrink-0 overflow-hidden rounded-xl bg-[#eeede7] ${
          view === "list" ? "w-[32%] max-w-[150px]" : "w-full"
        }`}
      >
        {imageFailed ? (
          <div className="flex aspect-[2/3] flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#dbe4dc] to-[#f1eee4] p-4 text-center">
            <BookOpen size={32} className="text-[#1d392d]" />
            <span className="font-editorial text-lg text-[#08271d]">
              {book.title}
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
              alt={`${book.title} book cover`}
              loading="lazy"
              onError={() => setImageFailed(true)}
              className="aspect-[2/3] w-full object-cover"
            />
          </picture>
        )}

        <span
          className={`absolute left-2 top-2 rounded-md px-2 py-2 text-[9px] font-medium text-white sm:text-xs lg:bg-white lg:py-1.5 lg:text-[#08271d] ${
            book.mobileFormat === "audio" ? "bg-[#704b25]" : "bg-[#344e43]"
          }`}
        >
          <span className="lg:hidden">{mobileLabel}</span>
          <span className="hidden lg:inline">{desktopLabel}</span>
        </span>

        <button
          onClick={() => onToggleFavorite(book.id)}
          aria-label={
            favorite
              ? `Remove ${book.title} from favorites`
              : `Add ${book.title} to favorites`
          }
          aria-pressed={favorite}
          className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 text-[#454b47] shadow-sm sm:h-9 sm:w-9"
        >
          <Heart
            size={19}
            className={favorite ? "fill-[#a04424] text-[#a04424]" : ""}
          />
        </button>
      </div>

      <div className="flex min-w-0 flex-1 flex-col pt-3">
        <div className="mb-2 hidden items-center gap-1.5 text-sm lg:flex">
          <Star size={15} className="fill-[#ef9b05] text-[#ef9b05]" />
          <span className="font-semibold">{book.rating}</span>
          <span className="text-[#79817b]">({book.reviews})</span>
        </div>

        <h3 className="font-editorial truncate text-[clamp(1rem,2.7vw,1.4rem)] font-semibold leading-snug text-[#08271d] lg:text-xl">
          <span className="lg:hidden">{book.mobileTitle || book.title}</span>
          <span className="hidden lg:inline">{book.title}</span>
        </h3>

        <p className="mt-2 truncate text-xs text-[#536075] sm:text-sm lg:text-[#454b47]">
          {book.author}
        </p>

        <div className="mt-4 flex items-center gap-1 text-xs sm:text-sm lg:hidden">
          <Star size={15} className="fill-[#ffad80] text-[#ffad80]" />
          <span className="font-semibold">
            {book.mobileRating || book.rating}
          </span>
          <span className="text-[10px] text-[#79817b] sm:text-xs">
            ({book.mobileReviews})
          </span>
        </div>

        <p className="mt-1 hidden min-h-10 text-xs font-semibold leading-5 tracking-wide text-[#79817b] lg:block">
          {book.duration || `${book.pages} pages`}{" "}
          <span className="px-1">•</span> {book.detail}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-6 lg:hidden">
          <span
            className={`rounded-full px-3 py-2 text-[10px] font-semibold sm:text-xs ${
              book.available
                ? "bg-[#c8eadc] text-[#365247]"
                : "bg-[#e4e2df] text-[#555c57]"
            }`}
          >
            {book.available ? "Available" : `${book.holds} on hold`}
          </span>

          <button
            onClick={() => onAction(book, book.mobileFormat)}
            className={`inline-flex items-center gap-1 text-[10px] font-semibold sm:text-xs ${
              book.available ? "text-[#08271d]" : "text-[#a04424]"
            }`}
          >
            {mobileAction}
            {!book.available ? (
              <Bookmark size={15} />
            ) : book.mobileFormat === "audio" ? (
              <PlayCircle size={15} />
            ) : (
              <ArrowRight size={15} />
            )}
          </button>
        </div>

        <button
          onClick={() => onAction(book, book.format)}
          className={`mt-auto hidden w-full items-center justify-center gap-2 rounded-xl px-2 py-2 text-sm font-semibold transition hover:opacity-90 lg:flex ${
            !book.available
              ? "bg-[#efeeeb] text-[#08271d]"
              : book.format === "audio"
                ? "bg-[#a04424] text-white"
                : "bg-[#08271d] text-white"
          }`}
        >
          <ActionIcon size={18} />
          {desktopAction}
        </button>
      </div>
    </article>
  );
}

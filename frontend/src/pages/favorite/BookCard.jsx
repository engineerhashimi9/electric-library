import { Heart, Star, Quote, Headphones, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BookCover from "./BookCover";

import StatusChip from "./StatusChip";
import ActionButton from "./ActionButton";
import { getLocalized } from "@/utils/langHelper";
import { formatVotes } from "@/utils/formatters";

/**
 * Grid card for a favorited book with Detail page link, remove toggle,
 * rating overlay, curator quote excerpt, and download button.
 */
export default function BookCard({ book, onRemove, onDownload }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const {
    id,
    title,
    author,
    format,
    rating,
    votes,
    badge,
    note,
    status,
    meta,
    cover,
  } = book;

  const locTitle = getLocalized(title, lang);
  const locAuthor = getLocalized(author, lang);
  const locFormat = getLocalized(format, lang);
  const locBadge = getLocalized(badge, lang);
  const locNote = getLocalized(note, lang);
  const bookDetailUrl = `/book/${id}`;

  return (
    <article className="group flex flex-col rounded-2xl bg-[#FFFFFF] border border-[#D0E8E6] hover:border-[#17A296] p-3 sm:p-4 shadow-library-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-library-hover text-[#0A2E2C]">
      {/* Cover */}

      <div className="relative mb-3 h-[190px] overflow-hidden rounded-xl bg-[#E6F4F3] border border-[#D0E8E6] sm:mb-4 sm:h-[260px] xl:h-[310px]">
        <Link to={bookDetailUrl} className="block h-full w-full">
          <BookCover
            cover={cover}
            title={locTitle}
            className="h-full w-full transition duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-[#0E6760]/85 via-transparent via-50% to-transparent sm:block" />

        {/* Format badge: mobile bottom-left | desktop top-left */}
        <span className="absolute bottom-2 left-2 rtl:left-auto rtl:right-2 flex max-w-[80%] items-center gap-1.5 truncate rounded-lg bg-[#0E6760]/95 border border-[#156B6B] text-[#FFFFFF] px-2.5 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur sm:hidden shadow-sm pointer-events-none">
          {/AUDIO/.test(locFormat) && (
            <Headphones className="h-3.5 w-3.5 shrink-0 text-[#17A296]" />
          )}
          <span className="truncate">{locFormat}</span>
        </span>

        <button
          type="button"
          onClick={onRemove}
          aria-label={`Remove ${locTitle} from favorites`}
          title="Remove from favorites"
          className="absolute right-2 top-2 rtl:right-auto rtl:left-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] border border-[#D0E8E6] shadow-library-sm backdrop-blur transition-all hover:scale-110 active:scale-90 sm:right-3 sm:top-3 rtl:sm:right-auto rtl:sm:left-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
        >
          <Heart className="h-4 w-4 fill-[#17A296] text-[#17A296]" />
        </button>

        {/* Desktop overlay */}
        <div className="absolute bottom-3 left-3 right-3 hidden items-center justify-between gap-2 sm:flex">
          {/* book Rating  */}
          <span className="flex items-center gap-1.5 rounded-lg bg-[#0E6760]/90 border border-[#156B6B] px-2.5 py-1 text-xs font-bold text-[#FFFFFF] shadow-sm">
            <Star
              className="h-3 w-3 fill-[#F59E0B] text-[#F59E0B]"
              aria-hidden="true"
            />{" "}
            {rating} ({formatVotes(votes)})
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col">
        <p className="mb-1.5 flex items-center gap-1.5 text-xs sm:hidden">
          <Star
            className="h-3.5 w-3.5 fill-[#17A296] text-[#17A296]"
            aria-hidden="true"
          />
          <b className="text-[#0A2E2C] font-extrabold">{rating}</b>{" "}
          <span className="text-[#4A6B68]">({formatVotes(votes)})</span>
        </p>

        {/* book title */}
        <Link to={bookDetailUrl} className="block group/title">
          <h3 className="line-clamp-2 min-h-[44px] text-sm sm:text-base font-extrabold text-[#0A2E2C] group-hover/title:text-[#0E6760] transition-colors leading-snug sm:min-h-[52px] sm:pb-1">
            {locTitle}
          </h3>
        </Link>
        {/* author Name */}
        <p className="pb-3 text-xs sm:text-sm text-[#4A6B68] font-medium truncate">
          {locAuthor}
        </p>

        {/* Mobile status chip */}
        <div className="sm:hidden mb-2">
          <StatusChip status={status} badge={locBadge} />
        </div>

        {/* Desktop quote note */}

        <div className="mt-auto space-y-2 sm:pt-2">
          <div className="flex items-center gap-2">
            <Link
              to={bookDetailUrl}
              className="inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl bg-[#E6F4F3] hover:bg-[#17A296] hover:text-[#FFFFFF] border border-[#D0E8E6] text-[#0E6760] font-bold text-xs transition-colors shrink-0"
              title={t("bookCard.detail")}
            >
              <Info size={14} />
              <span className="hidden sm:inline">{t("bookCard.detail")}</span>
            </Link>
            <ActionButton
              onClick={() => onDownload && onDownload(book)}
              className="flex-1"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

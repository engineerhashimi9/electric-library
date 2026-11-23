import { Heart, Star, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BookCover from "./BookCover";
import StatusLine from "./StatusLine";
import ActionButton from "./ActionButton";
import { formatVotes } from "../../utils/formatters";
import { getLocalized } from "../../utils/langHelper";

export default function BookListItem({ book, onRemove, onDownload }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const { id, title, author, format, rating, votes, badge, note, status, meta, cover } = book;

  const locTitle = getLocalized(title, lang);
  const locAuthor = getLocalized(author, lang);
  const locFormat = getLocalized(format, lang);
  const locBadge = getLocalized(badge, lang);
  const locNote = getLocalized(note, lang);
  const bookDetailUrl = `/book/${id}`;

  return (
    <article className="group flex flex-wrap items-center gap-3 sm:gap-5 rounded-2xl bg-[#FFFFFF] border border-[#D0E8E6] hover:border-[#17A296] p-3 sm:p-4 shadow-library-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-library-hover lg:flex-nowrap text-[#0A2E2C]">
      <Link to={bookDetailUrl} className="h-24 w-16 sm:h-28 sm:w-20 shrink-0 overflow-hidden rounded-xl bg-[#E6F4F3] border border-[#D0E8E6] shadow-sm block">
        <BookCover cover={cover} title={locTitle} className="h-full w-full transition duration-500 group-hover:scale-105" />
      </Link>

      <div className="min-w-0 flex-1 space-y-1">
        <p className="truncate text-xs font-bold uppercase tracking-wider text-[#236D64]">{locFormat} • {locBadge}</p>
        <Link to={bookDetailUrl} className="block group/title">
          <h3 className="truncate text-base sm:text-lg text-[#0A2E2C] group-hover/title:text-[#0E6760] font-extrabold leading-snug transition-colors">
            {locTitle}
          </h3>
        </Link>
        <p className="text-xs sm:text-sm text-[#4A6B68] font-medium">{locAuthor}</p>
        <p className="line-clamp-1 hidden text-xs italic text-[#4A6B68] sm:block">{locNote}</p>
        <p className="flex items-center gap-1.5 text-xs font-bold text-[#0A2E2C] lg:hidden">
          <Star className="h-3.5 w-3.5 fill-[#17A296] text-[#17A296]" aria-hidden="true" /> {rating} <span className="font-normal text-[#4A6B68]">({formatVotes(votes)})</span>
        </p>
      </div>

      <button
        type="button"
        onClick={onRemove}
        aria-label={`Remove ${locTitle} from favorites`}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E6F4F3] border border-[#D0E8E6] text-[#0E6760] transition-all hover:bg-[#D0E8E6] hover:scale-110 active:scale-90 lg:order-last focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
      >
        <Heart className="h-4 w-4 fill-[#17A296] text-[#17A296]" />
      </button>

      <div className="hidden w-[190px] shrink-0 flex-col gap-2.5 lg:flex">
        <span className="flex items-center gap-1.5 self-end text-xs font-bold text-[#0A2E2C]">
          <Star className="h-3.5 w-3.5 fill-[#17A296] text-[#17A296]" aria-hidden="true" /> {rating} <span className="font-normal text-[#4A6B68]">({formatVotes(votes)})</span>
        </span>
        <StatusLine status={status} meta={meta} />
      </div>

      <div className="flex items-center gap-2 w-full sm:w-auto">
        <Link
          to={bookDetailUrl}
          className="inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl bg-[#E6F4F3] hover:bg-[#17A296] hover:text-[#FFFFFF] border border-[#D0E8E6] text-[#0E6760] font-bold text-xs transition-colors shrink-0"
          title={t("bookCard.detail")}
        >
          <Info size={14} />
          <span>{t("bookCard.detail")}</span>
        </Link>
        <ActionButton onClick={() => onDownload && onDownload(book)} className="flex-1 sm:w-[130px] sm:shrink-0" />
      </div>
    </article>
  );
}

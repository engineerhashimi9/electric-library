import { Heart, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import BookCover from "./BookCover";
import StatusLine from "./StatusLine";
import ActionButton from "./ActionButton";
import { formatVotes } from "../../utils/formatters";
import { getLocalized } from "../../utils/langHelper";

export default function BookListItem({ book, onRemove }) {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const { title, author, format, rating, votes, badge, note, status, meta, action, cover } = book;

  const locTitle = getLocalized(title, lang);
  const locAuthor = getLocalized(author, lang);
  const locFormat = getLocalized(format, lang);
  const locBadge = getLocalized(badge, lang);
  const locNote = getLocalized(note, lang);

  return (
    <article className="group flex flex-wrap items-center gap-3 rounded-2xl bg-[#FFFFFF] border border-[#E2EFEA] hover:border-[#10B981] p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:gap-5 sm:p-4 lg:flex-nowrap text-[#111C18]">
      <div className="h-24 w-16 shrink-0 overflow-hidden rounded-lg bg-[#EAF4F0] border border-[#DDECE6] shadow-sm sm:h-28 sm:w-20">
        <BookCover cover={cover} title={locTitle} className="h-full w-full transition duration-500 group-hover:scale-105" />
      </div>

      <div className="min-w-0 flex-1 space-y-1">
        <p className="truncate text-[11px] font-bold uppercase tracking-[0.55px] text-[#6B9080]">{locFormat} • {locBadge}</p>
        <h3 className="truncate text-[18px] leading-6 text-[#111C18] font-sans font-bold sm:text-[20px] sm:leading-7">{locTitle}</h3>
        <p className="text-[13px] text-[#52665E]">{locAuthor}</p>
        <p className="line-clamp-1 hidden text-[12px] italic text-[#52665E] sm:block">{locNote}</p>
        <p className="flex items-center gap-1 text-[12px] font-bold text-[#111C18] lg:hidden">
          <Star className="h-3 w-3 fill-[#10B981] text-[#10B981]" /> {rating} <span className="font-normal text-[#52665E]">({formatVotes(votes)})</span>
        </p>
      </div>

      <button
        onClick={onRemove}
        aria-label={`Remove ${locTitle} from favorites`}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EAF4F0] border border-[#DDECE6] text-[#09261C] transition hover:bg-[#DDECE6] hover:scale-110 active:scale-90 lg:order-last"
      >
        <Heart className="h-4 w-4 fill-[#10B981] text-[#10B981]" />
      </button>

      <div className="hidden w-[190px] shrink-0 flex-col gap-3 lg:flex">
        <span className="flex items-center gap-1 self-end text-[12px] font-bold text-[#111C18]">
          <Star className="h-3 w-3 fill-[#10B981] text-[#10B981]" /> {rating} <span className="font-normal text-[#52665E]">({formatVotes(votes)})</span>
        </span>
        <StatusLine status={status} meta={meta} />
      </div>

      <ActionButton action={action} className="w-full sm:w-[160px] sm:shrink-0" />
    </article>
  );
}

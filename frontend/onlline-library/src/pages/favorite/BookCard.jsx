import { Heart, Star, Quote, Headphones } from "lucide-react";
import { useTranslation } from "react-i18next";
import BookCover from "./BookCover";
import StatusLine from "./StatusLine";
import StatusChip from "./StatusChip";
import ActionButton from "./ActionButton";
import { getLocalized } from "../../utils/langHelper";
import { formatVotes } from "../../utils/formatters";

export default function BookCard({ book, onRemove }) {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const { title, author, format, rating, votes, badge, note, status, meta, action, cover } = book;

  const locTitle = getLocalized(title, lang);
  const locAuthor = getLocalized(author, lang);
  const locFormat = getLocalized(format, lang);
  const locBadge = getLocalized(badge, lang);
  const locNote = getLocalized(note, lang);

  return (
    <article className="group flex flex-col rounded-2xl bg-[#FFFFFF] border border-[#E2EFEA] hover:border-[#10B981] p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-4 text-[#111C18]">
      {/* Cover */}
      <div className="relative mb-3 h-[190px] overflow-hidden rounded-xl bg-[#EAF4F0] border border-[#DDECE6] sm:mb-4 sm:h-[270px] xl:h-[328px]">
        <BookCover cover={cover} title={locTitle} className="h-full w-full transition duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-[#09261C]/80 via-transparent via-50% to-transparent sm:block" />

        {/* Format badge: mobile bottom-left | desktop top-left */}
        <span className="absolute bottom-2 left-2 rtl:left-auto rtl:right-2 flex max-w-[80%] items-center gap-1 truncate rounded-lg bg-[#09261C]/90 border border-[#163A2E] text-[#FFFFFF] px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.3px] backdrop-blur sm:hidden">
          {/AUDIO/.test(locFormat) && <Headphones className="h-3 w-3 shrink-0 text-[#10B981]" />}
          <span className="truncate">{locFormat}</span>
        </span>
        <span className="absolute left-3 top-3 rtl:left-auto rtl:right-3 hidden max-w-[70%] truncate rounded-md bg-[#09261C]/90 border border-[#163A2E] text-[#FFFFFF] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.55px] backdrop-blur sm:block">
          {locFormat}
        </span>

        <button
          onClick={onRemove}
          aria-label={`Remove ${locTitle} from favorites`}
          title="Remove from favorites"
          className="absolute right-2 top-2 rtl:right-auto rtl:left-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] border border-[#DDECE6] shadow-sm backdrop-blur transition hover:scale-110 active:scale-90 sm:right-3 sm:top-3 rtl:sm:right-auto rtl:sm:left-3"
        >
          <Heart className="h-3.5 w-3.5 fill-[#10B981] text-[#10B981]" />
        </button>

        {/* Desktop overlay */}
        <div className="absolute bottom-3 left-3 right-3 hidden items-center justify-between gap-2 sm:flex">
          <span className="flex items-center gap-1 rounded bg-[#09261C]/85 border border-[#163A2E] px-2 py-0.5 text-[11px] font-bold tracking-[0.66px] text-[#FFFFFF]">
            <Star className="h-2.5 w-2.5 fill-[#10B981] text-[#10B981]" /> {rating} ({formatVotes(votes)})
          </span>
          <span className="truncate rounded bg-[#09261C]/80 border border-[#163A2E] px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.55px] text-[#A3C1B5]">{locBadge}</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col">
        <p className="mb-1 flex items-center gap-1.5 text-[13px] sm:hidden">
          <Star className="h-3.5 w-3.5 fill-[#10B981] text-[#10B981]" />
          <b className="text-[#111C18]">{rating}</b> <span className="text-[#52665E]">({formatVotes(votes)})</span>
        </p>

        <h3 className="line-clamp-2 min-h-[44px] text-[18px] leading-[22px] text-[#111C18] font-sans font-bold sm:min-h-[60px] sm:pb-1 sm:text-[20px] sm:leading-[27.5px]">{locTitle}</h3>
        <p className="pb-3 text-[13px] text-[#52665E]">{locAuthor}</p>

        {/* Mobile status chip */}
        <div className="sm:hidden"><StatusChip status={status} badge={locBadge} /></div>

        {/* Desktop quote note */}
        <p className="mb-4 hidden items-start gap-2 rounded-xl bg-[#EAF4F0] border border-[#DDECE6] p-2.5 text-[13px] italic leading-5 text-[#52665E] sm:flex">
          <Quote className="mt-0.5 h-3 w-3 shrink-0 text-[#10B981]" />
          <span className="line-clamp-2">{locNote}</span>
        </p>

        <div className="mt-auto space-y-3 sm:pt-3">
          <StatusLine status={status} meta={meta} className="hidden sm:flex" />
          <ActionButton action={action} className="w-full" />
        </div>
      </div>
    </article>
  );
}

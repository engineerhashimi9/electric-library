import { Heart, Star } from "lucide-react";
import BookCover from "./BookCover";
import StatusLine from "./StatusLine";
import ActionButton from "./ActionButton";
import { formatVotes } from "./BookCard";
// import { serif } from "../../styles/fonts";

export default function BookListItem({ book, onRemove }) {
  const { title, author, format, rating, votes, badge, note, status, meta, action, cover } = book;
  return (
    <article className="group flex flex-wrap items-center gap-3 rounded-2xl bg-white p-3 shadow-[0_1px_1px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:gap-5 sm:p-4 lg:flex-nowrap">
      <div className="h-24 w-16 shrink-0 overflow-hidden rounded-lg bg-[#efeeeb] shadow-sm sm:h-28 sm:w-20">
        <BookCover cover={cover} title={title} className="h-full w-full transition duration-500 group-hover:scale-105" />
      </div>

      <div className="min-w-0 flex-1 space-y-1">
        <p className="truncate text-[11px] font-bold uppercase tracking-[0.55px] text-[#424844]">{format} • {badge}</p>
        <h3 className={`truncate text-[18px] leading-6 text-[#07241a] sm:text-[20px] sm:leading-7 `}>{title}</h3>
        <p className="text-[13px] text-[#424844]">{author}</p>
        <p className="line-clamp-1 hidden text-[12px] italic text-[#727974] sm:block">{note}</p>
        <p className="flex items-center gap-1 text-[12px] font-bold text-[#1b1c1a] lg:hidden">
          <Star className="h-3 w-3 fill-[#e9831a] text-[#e9831a]" /> {rating} <span className="font-normal text-[#727974]">({formatVotes(votes)})</span>
        </p>
      </div>

      <button
        onClick={onRemove}
        aria-label={`Remove ${title} from favorites`}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5f3f0] transition hover:scale-110 hover:bg-[#eae8e5] active:scale-90 lg:order-last"
      >
        <Heart className="h-4 w-4 fill-[#9a4522] text-[#9a4522]" />
      </button>

      <div className="hidden w-[190px] shrink-0 flex-col gap-3 lg:flex">
        <span className="flex items-center gap-1 self-end text-[12px] font-bold text-[#1b1c1a]">
          <Star className="h-3 w-3 fill-[#e9831a] text-[#e9831a]" /> {rating} <span className="font-normal text-[#727974]">({formatVotes(votes)})</span>
        </span>
        <StatusLine status={status} meta={meta} />
      </div>

      <ActionButton action={action} className="w-full sm:w-[160px] sm:shrink-0" />
    </article>
  );
}

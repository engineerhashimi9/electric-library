import { Heart, Star, Quote, Headphones } from "lucide-react";
import BookCover from "./BookCover";
import StatusLine from "./StatusLine";
import StatusChip from "./StatusChip";
import ActionButton from "./ActionButton";
// import { serif } from "../../styles/fonts";

export const formatVotes = (n) => (n >= 1000 ? `${(n / 1000).toFixed(1)}k` : n);

// رنگ بج فرمت روی موبایل: audio = ترکوتا، e-book = روشن، بقیه = تیره
const mobileBadge = (format) =>
  /AUDIO/.test(format) ? "bg-[#9a4522] text-white" : /E-BOOK/.test(format) ? "bg-white/90 text-[#1b1c1a]" : "bg-[#07241a]/80 text-white";

export default function BookCard({ book, onRemove }) {
  const { title, author, format, rating, votes, badge, note, status, meta, action, cover } = book;
  return (
    <article className="group flex flex-col rounded-2xl bg-white p-3 shadow-[0_1px_1px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#07241a]/10 sm:p-4">
      {/* Cover */}
      <div className="relative mb-3 h-[190px] overflow-hidden rounded-xl bg-[#efeeeb] shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] sm:mb-4 sm:h-[270px] xl:h-[328px]">
        <BookCover cover={cover} title={title} className="h-full w-full transition duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-black/60 via-transparent via-50% to-transparent sm:block" />

        {/* بج فرمت: موبایل پایین-چپ  |  دسکتاپ بالا-چپ */}
        <span className={`absolute bottom-2 left-2 flex max-w-[80%] items-center gap-1 truncate rounded-lg px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.3px] backdrop-blur sm:hidden ${mobileBadge(format)}`}>
          {/AUDIO/.test(format) && <Headphones className="h-3 w-3 shrink-0" />}
          <span className="truncate">{format}</span>
        </span>
        <span className="absolute left-3 top-3 hidden max-w-[70%] truncate rounded-md bg-[#fbf9f6]/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.55px] text-[#07241a] backdrop-blur sm:block">
          {format}
        </span>

        <button
          onClick={onRemove}
          aria-label={`Remove ${title} from favorites`}
          title="Remove from favorites"
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#fbf9f6]/90 shadow-sm backdrop-blur transition hover:scale-110 hover:bg-white active:scale-90 sm:right-3 sm:top-3"
        >
          <Heart className="h-3.5 w-3.5 fill-[#9a4522] text-[#9a4522]" />
        </button>

        {/* overlay (دسکتاپ) */}
        <div className="absolute bottom-3 left-3 right-3 hidden items-center justify-between gap-2 sm:flex">
          <span className="flex items-center gap-1 rounded bg-[#1e3a2f]/85 px-2 py-0.5 text-[11px] font-bold tracking-[0.66px] text-[#fbf9f6]">
            <Star className="h-2.5 w-2.5 fill-[#fd9168] text-[#fd9168]" /> {rating} ({formatVotes(votes)})
          </span>
          <span className="truncate rounded bg-[#1e3a2f]/80 px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.55px] text-[#caeada]">{badge}</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col">
        <p className="mb-1 flex items-center gap-1.5 text-[13px] sm:hidden">
          <Star className="h-3.5 w-3.5 fill-[#e9831a] text-[#e9831a]" />
          <b className="text-[#1b1c1a]">{rating}</b> <span className="text-[#424844]">({formatVotes(votes)})</span>
        </p>

        <h3 className={`line-clamp-2 min-h-[44px] text-[18px] leading-[22px] text-[#07241a] sm:min-h-[60px] sm:pb-1 sm:text-[20px] sm:leading-[27.5px] `}>{title}</h3>
        <p className="pb-3 text-[13px] text-[#424844]">{author}</p>

        {/* موبایل: چیپ وضعیت */}
        <div className="sm:hidden"><StatusChip status={status} badge={badge} /></div>

        {/* دسکتاپ: یادداشت */}
        <p className="mb-4 hidden items-start gap-2 rounded-xl bg-[#f5f3f0] p-2.5 text-[13px] italic leading-5 text-[#1b1c1a] sm:flex">
          <Quote className="mt-0.5 h-3 w-3 shrink-0 text-[#9a4522]" />
          <span className="line-clamp-2">{note}</span>
        </p>

        <div className="mt-auto space-y-3 sm:pt-3">
          <StatusLine status={status} meta={meta} className="hidden sm:flex" />
          <ActionButton action={action} className="w-full" />
        </div>
      </div>
    </article>
  );
}

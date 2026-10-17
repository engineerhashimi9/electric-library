import { Heart, Star } from "lucide-react";
import BookCover from "./BookCover";
import StatusLine from "./StatusLine";
import ActionButton from "./ActionButton";
import { formatVotes } from "./BookCard";

export default function BookListItem({ book, onRemove }) {
  const { title, author, format, rating, votes, badge, note, status, meta, action, cover } = book;
  return (
    <article className="group flex items-center gap-5 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-transparent transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:ring-leaf-200">
      <div className="h-28 w-20 shrink-0 overflow-hidden rounded-lg bg-leaf-50 shadow-sm">
        <BookCover cover={cover} title={title} className="h-full w-full transition duration-500 group-hover:scale-105" />
      </div>

      <div className="min-w-0 flex-1 space-y-1">
        <p className="text-[11px] font-bold uppercase tracking-[0.05em] text-ink-soft">{format} • {badge}</p>
        <h3 className="truncate font-serif text-[20px] leading-7 text-leaf-950">{title}</h3>
        <p className="text-[13px] text-ink-soft">{author}</p>
        <p className="line-clamp-1 text-[12px] italic text-ink-mute">{note}</p>
      </div>

      <div className="flex w-[180px] shrink-0 flex-col gap-3">
        <span className="flex items-center gap-1 self-end text-[12px] font-bold text-leaf-950">
          <Star className="h-3 w-3 fill-leaf-400 text-leaf-400" /> {rating} <span className="font-normal text-ink-mute">({formatVotes(votes)})</span>
        </span>
        <StatusLine status={status} meta={meta} />
      </div>

      <ActionButton action={action} className="w-[150px] shrink-0" />
      <button
        onClick={onRemove}
        aria-label={`Remove ${title} from favorites`}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-leaf-50 transition hover:scale-110 hover:bg-leaf-100 active:scale-90"
      >
        <Heart className="h-4 w-4 fill-leaf-600 text-leaf-600" />
      </button>
    </article>
  );
}

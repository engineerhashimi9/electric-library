import { Heart, Star, Quote } from "lucide-react";
import BookCover from "./BookCover";
import StatusLine from "./StatusLine";
import ActionButton from "./ActionButton";

export const formatVotes = (n) => (n >= 1000 ? `${(n / 1000).toFixed(1)}k` : n);

export default function BookCard({ book, onRemove }) {
  const { title, author, format, rating, votes, badge, note, status, meta, action, cover } = book;
  return (
    <article className="group flex flex-col rounded-2xl bg-white p-4 shadow-sm ring-1 ring-transparent transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-leaf-900/10 hover:ring-leaf-200">
      <div className="relative mb-4 h-[328px] overflow-hidden rounded-xl bg-leaf-50 shadow-inner">
        <BookCover cover={cover} title={title} className="h-full w-full transition duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <span className="absolute left-3 top-3 rounded-md bg-paper/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.05em] text-leaf-950 backdrop-blur">
          {format}
        </span>

        <button
          onClick={onRemove}
          aria-label={`Remove ${title} from favorites`}
          title="Remove from favorites"
          className="group/heart absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-paper/90 shadow-sm backdrop-blur transition hover:scale-110 hover:bg-white active:scale-90"
        >
          <Heart className="h-3.5 w-3.5 fill-leaf-600 text-leaf-600 transition group-hover/heart:fill-transparent" />
        </button>

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="flex items-center gap-1 rounded bg-leaf-800/85 px-2 py-0.5 text-[11px] font-bold tracking-wide text-paper">
            <Star className="h-2.5 w-2.5 fill-leaf-300 text-leaf-300" /> {rating} ({formatVotes(votes)})
          </span>
          <span className="rounded bg-leaf-800/80 px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.05em] text-leaf-100">{badge}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="line-clamp-2 min-h-[60px] pb-1 font-serif text-[20px] leading-[27px] text-leaf-950">{title}</h3>
        <p className="pb-3 text-[13px] text-ink-soft">{author}</p>

        <p className="mb-4 flex items-start gap-2 rounded-xl bg-leaf-50 p-2.5 text-[13px] italic leading-5 text-leaf-950 transition group-hover:bg-leaf-100/70">
          <Quote className="mt-0.5 h-3 w-3 shrink-0 text-leaf-500" />
          <span className="line-clamp-2">{note}</span>
        </p>

        <div className="mt-auto space-y-3 pt-3">
          <StatusLine status={status} meta={meta} />
          <ActionButton action={action} className="w-full" />
        </div>
      </div>
    </article>
  );
}

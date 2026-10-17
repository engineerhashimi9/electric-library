import { BookOpenCheck } from "lucide-react";
import StarRating from "@/component/ui/StarRating";
import { img } from "./library";

export default function CompletedItem({ item }) {
  const { finished, title, author, rating, annotations, cover } = item;
  return (
    <article className="flex items-center justify-between gap-6 rounded-xl bg-white p-4 shadow-sm">
      <div className="flex items-center gap-4">
        <img src={img(cover)} alt={title} className="h-24 w-16 shrink-0 rounded-lg object-cover shadow-sm" />
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-[0.05em] text-ink-soft">{finished}</p>
          <h4 className="font-serif text-[20px] leading-7 text-leaf-950">{title}</h4>
          <p className="text-[13px] text-ink-soft">{author}</p>
          <div className="pt-1"><StarRating value={rating} /></div>
        </div>
      </div>

      <div className="flex shrink-0 flex-col items-end gap-2">
        <a href="#" className="flex items-center gap-1 text-[13px] font-semibold tracking-wide text-leaf-950">
          Marginalia <BookOpenCheck className="h-3 w-3" />
        </a>
        <span className="text-[11px] font-bold tracking-wide text-ink-mute">{annotations}</span>
      </div>
    </article>
  );
}

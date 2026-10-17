import { Copy, MessageSquare } from "lucide-react";

export default function AnnotationCard({ item }) {
  const { ref, when, quote, note } = item;
  return (
    <article className="space-y-2 rounded-xl bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="rounded bg-leaf-100 px-2 py-0.5 text-[11px] font-bold tracking-wide text-leaf-950">{ref}</span>
          <span className="text-[11px] font-bold tracking-wide text-ink-mute">{when}</span>
        </div>
        <button aria-label="Copy" className="text-ink-soft"><Copy className="h-3.5 w-3.5" /></button>
      </div>

      <blockquote className="font-serif text-[20px] italic leading-[32.5px] text-leaf-950">{quote}</blockquote>

      <div className="flex items-center  justify-between pt-1">
        <div className="flex items-center gap-3">
          <MessageSquare className="h-3 w-3 shrink-0 text-ink-soft" />
          <span className="text-[13px] leading-5 text-ink-soft">
            Patron
            <br />
            Annotation:
          </span>
          <em className="max-w-[360px] text-[13px] leading-5 text-ink-soft">{note}</em>
        </div>
        <button className="text-[11px] font-bold tracking-wide text-leaf-950">Edit</button>
      </div>
    </article>
  );
}

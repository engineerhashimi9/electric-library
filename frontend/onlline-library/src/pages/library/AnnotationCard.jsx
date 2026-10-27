// src/pages/library/AnnotationCard.jsx
import { Copy, MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getLocalized } from "../../utils/langHelper";

export default function AnnotationCard({ item }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const { ref, when, quote, note } = item;

  const locRef = getLocalized(ref, lang);
  const locWhen = getLocalized(when, lang);
  const locQuote = getLocalized(quote, lang);
  const locNote = getLocalized(note, lang);

  return (
    <article className="space-y-3 rounded-xl bg-[#FFFFFF] border border-[#E2EFEA] hover:border-[#10B981] p-4 sm:p-6 shadow-sm text-[#111C18] transition-all">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded bg-[#EAF4F0] border border-[#DDECE6] px-2 py-0.5 text-[11px] font-bold tracking-wide text-[#0D5C46]">
            {locRef}
          </span>
          <span className="text-[11px] font-bold tracking-wide text-[#52665E]">
            {locWhen}
          </span>
        </div>
        <button
          aria-label="Copy"
          className="text-[#6B9080] hover:text-[#09261C] transition-colors shrink-0"
        >
          <Copy className="h-3.5 w-3.5" />
        </button>
      </div>
      <blockquote className="font-sans text-base sm:text-[19px] italic leading-relaxed text-[#09261C]">
        {locQuote}
      </blockquote>
      <div className="flex flex-wrap items-start justify-between gap-3 pt-1">
        <div className="flex flex-wrap items-center gap-2 min-w-0 flex-1">
          <MessageSquare className="h-3.5 w-3.5 shrink-0 text-[#10B981]" />
          <span className="text-[12px] sm:text-[13px] font-semibold text-[#52665E]">
            {t("library.actions.patronAnnotation")}
          </span>
          <em className="text-[12px] sm:text-[13px] leading-5 text-[#111C18] not-italic">
            {locNote}
          </em>
        </div>
        <button className="text-[11px] font-bold tracking-wide text-[#10B981] hover:underline transition-colors shrink-0">
          {t("library.actions.edit")}
        </button>
      </div>
    </article>
  );
}
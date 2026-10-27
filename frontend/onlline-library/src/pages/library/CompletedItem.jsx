// src/pages/library/CompletedItem.jsx
import { BookOpenCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import StarRating from "@/component/ui/star1";
import { img } from "./library";
import { getLocalized } from "../../utils/langHelper";

export default function CompletedItem({ item }) {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const { finished, title, author, rating, annotations, cover } = item;

  const locTitle = getLocalized(title, lang);
  const locAuthor = getLocalized(author, lang);
  const locFinished = getLocalized(finished, lang);
  const locAnnotations = getLocalized(annotations, lang);

  return (
    <article className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl bg-[#FFFFFF] border border-[#D0E8E6] hover:border-[#17A296] p-4 shadow-sm text-[#0A2E2C] transition-all">
      <div className="flex items-center gap-4 min-w-0">
        <img
          src={img(cover)}
          alt={locTitle}
          className="h-24 w-16 shrink-0 rounded-lg object-cover shadow-sm border border-[#D0E8E6] bg-[#E6F4F3]"
        />
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.05em] text-[#236D64] truncate">
            {locFinished}
          </p>
          <h4 className="font-sans text-base sm:text-[18px] leading-snug text-[#0A2E2C] font-bold line-clamp-2">
            {locTitle}
          </h4>
          <p className="text-[13px] text-[#4A6B68] truncate">{locAuthor}</p>
          <div className="pt-1">
            <StarRating value={rating} />
          </div>
        </div>
      </div>
      <div className="flex sm:shrink-0 flex-row sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 border-[#D0E8E6] pt-3 sm:pt-0 gap-2">
        <a
          href="#"
          className="flex items-center gap-1 text-[13px] font-semibold tracking-wide text-[#17A296] hover:text-[#0E6760] transition-colors"
        >
          {lang === "fa" ? "حاشیه‌نویسی‌ها" : "Marginalia"}{" "}
          <BookOpenCheck className="h-3.5 w-3.5" />
        </a>
        <span className="text-[11px] font-bold tracking-wide text-[#4A6B68]">
          {locAnnotations}
        </span>
      </div>
    </article>
  );
}
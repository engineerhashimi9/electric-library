// src/pages/library/ReadingCard.jsx
import {
  NotebookText,
  AlarmClock,
  Gauge,
  BookOpen,
  Play,
  Headphones,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import ProgressBar from "@/component/ui/ProgressBar";
import { img } from "./library";
import { getLocalized } from "../../utils/langHelper";

const variants = {
  ebook: {
    badge: "bg-[#EAF4F0] border border-[#DDECE6] text-[#0D5C46]",
    genre: "text-[#6B9080]",
    infoIcon: NotebookText,
    infoTone: "text-[#52665E]",
    bar: "primary",
    button: "bg-[#10B981] hover:bg-[#09261C] text-[#FFFFFF]",
    ctaIcon: BookOpen,
  },
  loan: {
    badge: "bg-[#09261C] text-[#FFFFFF]",
    genre: "text-[#6B9080]",
    infoIcon: AlarmClock,
    infoTone: "text-[#52665E]",
    bar: "accent",
    button: "bg-[#10B981] hover:bg-[#09261C] text-[#FFFFFF]",
    ctaIcon: BookOpen,
  },
  audio: {
    badge: "bg-[#EAF4F0] border border-[#DDECE6] text-[#0D5C46]",
    genre: "text-[#6B9080]",
    infoIcon: Gauge,
    infoTone: "text-[#52665E]",
    bar: "primary",
    button: "bg-[#10B981] hover:bg-[#09261C] text-[#FFFFFF]",
    ctaIcon: Play,
  },
};

export default function ReadingCard({ book }) {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const {
    type,
    badge,
    genre,
    title,
    author,
    infoPrimary,
    infoSecondary,
    progressLabel,
    percent,
    cta,
    cover,
  } = book;

  const locTitle = getLocalized(title, lang);
  const locAuthor = getLocalized(author, lang);
  const locBadge = getLocalized(badge, lang);
  const locGenre = getLocalized(genre, lang);
  const locInfoPrimary = getLocalized(infoPrimary, lang);
  const locInfoSecondary = getLocalized(infoSecondary, lang);
  const locProgress = getLocalized(progressLabel, lang);
  const locCta = getLocalized(cta, lang);

  const v = variants[type] || variants.ebook;
  const InfoIcon = v.infoIcon;
  const CtaIcon = v.ctaIcon;

  return (
    <article className="group flex w-full flex-col justify-between rounded-xl bg-[#FFFFFF] border border-[#E2EFEA] hover:border-[#10B981] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 p-4 shadow-sm text-[#111C18]">
      <div className="space-y-4">
        <div className="flex gap-3.5 sm:gap-4">
          <div className="relative h-32 w-24 sm:h-36 sm:w-28 overflow-hidden rounded-lg shadow-md border border-[#DDECE6] bg-[#EAF4F0] shrink-0">
            <img
              src={img(cover)}
              alt={locTitle}
              className="h-full w-full object-cover"
            />
            <span
              className={`absolute left-2 top-2 rtl:left-auto rtl:right-2 flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] sm:text-[11px] font-bold tracking-wide ${v.badge}`}
            >
              {type === "audio" && <Headphones className="h-2.5 w-2.5" />}
              {locBadge}
            </span>
          </div>
          <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
            <div className="space-y-1">
              <p
                className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.05em] truncate ${v.genre}`}
              >
                {locGenre}
              </p>
              <h3 className="font-sans text-base sm:text-[20px] font-bold leading-snug text-[#111C18] line-clamp-2">
                {locTitle}
              </h3>
              <p className="text-xs sm:text-[13px] text-[#52665E] truncate">
                {locAuthor}
              </p>
            </div>
            <div className="space-y-1 pt-2">
              <p
                className={`flex items-center gap-1.5 text-[11px] font-bold tracking-wide ${v.infoTone}`}
              >
                <InfoIcon className="h-3 w-3 shrink-0 text-[#10B981]" />{" "}
                <span className="truncate">{locInfoPrimary}</span>
              </p>
              <p className="text-[11px] font-medium tracking-wide text-[#52665E] truncate">
                {locInfoSecondary}
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] tracking-wide">
            <span className="font-bold text-[#52665E]">{locProgress}</span>
            <span className="font-semibold text-[#09261C]">{percent}%</span>
          </div>
          <ProgressBar percent={percent} tone={v.bar} bgColor="#10B981" />
        </div>
      </div>
      <div className="pt-5">
        <button
          className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-[13px] font-semibold tracking-wide transition-colors ${v.button}`}
        >
          <CtaIcon className="h-3.5 w-3.5" /> {locCta}
        </button>
      </div>
    </article>
  );
}
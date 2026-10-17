import {
  NotebookText,
  AlarmClock,
  Gauge,
  BookOpen,
  Play,
  Headphones,
} from "lucide-react";
import ProgressBar from "@/component/ui/ProgressBar";
import { img } from "./library";

const variants = {
  ebook: {
    badge: "bg-white/90 text-leaf-950 backdrop-blur",
    genre: "text-leaf-500",
    infoIcon: NotebookText,
    infoTone: "text-ink-soft",
    bar: "primary",
    button: "bg-leaf-800 hover:bg-leaf-700",
    ctaIcon: BookOpen,
  },
  loan: {
    badge: "bg-leaf-300 text-leaf-950",
    genre: "text-leaf-600",
    infoIcon: AlarmClock,
    infoTone: "text-leaf-600",
    bar: "accent",
    button: "bg-leaf-800 hover:bg-leaf-700",
    ctaIcon: BookOpen,
  },
  audio: {
    badge: "bg-leaf-800 text-white",
    genre: "text-leaf-500",
    infoIcon: Gauge,
    infoTone: "text-ink-soft",
    bar: "primary",
    button: "bg-leaf-600 hover:bg-leaf-700",
    ctaIcon: Play,
  },
};

export default function ReadingCard({ book }) {
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
  const v = variants[type];
  const InfoIcon = v.infoIcon;
  const CtaIcon = v.ctaIcon;

  return (
    <article className="flex w-[378px] flex-col  rounded-xl bg-white p-4 shadow-sm">
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className=" h-35 w-28   rounded-lg shadow-md">
            <img
              src={img(cover)}
              alt={title}
              className="h-full w-full object-cover"
            />
            <span
              className={`absolute left-2 top-2 flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold tracking-wide ${v.badge}`}
            >
              {type === "audio" && <Headphones className="h-2.5 w-2.5" />}
              {badge}
            </span>
          </div>

          <div className="flex flex-1 flex-col justify-between py-0.5">
            <div className="space-y-1">
              <p
                className={`text-[11px] font-bold uppercase text-[#9A4522] tracking-[0.05em] ${v.genre}`}
              >
                {genre}
              </p>
              <h3 className="font-serif text-[20px] font-bold leading-[25px] text-leaf-950">
                {title}
              </h3>
              <p className="text-[13px] text-ink-soft">{author}</p>
            </div>
            <div className="space-y-1">
              <p
                className={`flex items-center text-[#9A4522] gap-1.5 text-[11px] font-bold tracking-wide ${v.infoTone}`}
              >
                <InfoIcon className="h-3 w-3" /> {infoPrimary}
              </p>
              <p className="text-[11px] font-medium tracking-wide text-ink-mute">
                {infoSecondary}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] tracking-wide">
            <span className="font-bold text-ink-soft">{progressLabel}</span>
            <span className="font-semibold text-leaf-950">{percent}%</span>
          </div>
          <ProgressBar bgColor="#1E3A2F" percent={percent} tone={v.bar} />
        </div>
      </div>

      <div className="pt-6">
        <button
          className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-[13px] ${cta === "Resume Reading" ? "bg-[#1E3A2F]" : "bg-[#9A4522]"} font-semibold tracking-wide text-white ${v.button}`}
        >
          <CtaIcon className="h-3.5 w-3.5  " /> {cta}
        </button>
      </div>
    </article>
  );
}

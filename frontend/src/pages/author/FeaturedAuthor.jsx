import { Sparkles, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Avatar from "@/component/ui/Avatar";
import FollowButton from "./FollowButton";
import { formatFollowers } from "../../utils/formatters";
import { formatLife } from "./authors";
import { getLocalized } from "../../utils/langHelper";

export default function FeaturedAuthor({ author, following, onToggleFollow }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const isFa = lang === "fa";

  const { name, role, bio, works, followers, photo } = author;

  const locName = getLocalized(name, lang);
  const locRole = getLocalized(role, lang);
  const locBio = getLocalized(bio, lang);

  return (
    <section className="group relative overflow-hidden rounded-3xl bg-[#0E6760] border border-[#156B6B] p-5 shadow-lg md:p-10">
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-60 w-60 rounded-full bg-[#17A296]/10 blur-[32px] transition duration-700 group-hover:scale-125 lg:h-80 lg:w-80" />
      <div className="pointer-events-none absolute -top-24 left-1/3 hidden h-60 w-1/5 rounded-full bg-[#236D64]/10 blur-[20px] lg:block" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">
        <div className="flex items-center gap-4 lg:block">
          <div className="shrink-0 overflow-hidden rounded-full ring-4 ring-[#17A296] transition group-hover:ring-[#FFFFFF]">
            <Avatar name={locName} photo={photo} className="h-20 w-20 lg:h-28 lg:w-28" />
          </div>
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[#17A296] lg:hidden">
            <Sparkles className="h-3.5 w-3.5 text-[#17A296]" /> {t("authors.featured.eyebrow")}
          </p>
        </div>

        <div className="flex-1 space-y-2">
          <p className="hidden items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[#17A296] lg:flex">
            <Sparkles className="h-3.5 w-3.5 text-[#17A296]" /> {t("authors.featured.eyebrow")}
          </p>
          <h2 className="text-[28px] leading-9 text-[#FFFFFF] font-sans font-bold md:text-[34px] md:leading-[42px]">{locName}</h2>
          <p className="text-[13px] font-semibold text-[#17A296]">{locRole} • {formatLife(author, isFa)}</p>
          <p className="max-w-[560px] text-[14px] leading-relaxed text-[#B8E2DF]">{locBio}</p>
          <p className="text-[12px] text-[#B8E2DF]">
            {t("authors.featured.preserved", { works })} • {t("authors.featured.followers", { count: formatFollowers(followers + (following ? 1 : 0)) })}
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
          <FollowButton following={following} onToggle={onToggleFollow} variant="onDark" className="!px-6 !py-3 sm:flex-1 lg:flex-none" />
          <a href="#" className="flex items-center justify-center gap-1 text-[13px] font-semibold text-[#FFFFFF] transition hover:text-[#17A296] sm:flex-1 lg:flex-none">
            {t("authors.featured.explore")} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
          </a>
        </div>
      </div>
    </section>
  );
}

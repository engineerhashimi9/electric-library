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

  if (!author) return null;

  const { name, role, bio, works, followers, photo } = author;

  const locName = getLocalized(name, lang);
  const locRole = getLocalized(role, lang);
  const locBio = getLocalized(bio, lang);

  return (
    <section className="group relative overflow-hidden rounded-3xl bg-[#0E6760] border border-[#156B6B] p-6 sm:p-8 lg:p-10 shadow-library-lg">
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-[#17A296]/20 blur-3xl transition duration-700 group-hover:scale-125 lg:h-80 lg:w-80" />
      <div className="pointer-events-none absolute -top-24 left-1/3 hidden h-60 w-1/4 rounded-full bg-[#236D64]/20 blur-2xl lg:block" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">
        <div className="flex items-center gap-4 lg:block">
          <div className="shrink-0 overflow-hidden rounded-full ring-4 ring-[#17A296] transition-all group-hover:ring-[#FFFFFF] shadow-library">
            <Avatar name={locName} photo={photo} className="h-20 w-20 lg:h-28 lg:w-28" />
          </div>
          <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#9EEFE8] lg:hidden">
            <Sparkles className="h-3.5 w-3.5 text-[#9EEFE8]" aria-hidden="true" />
            <span>{t("authors.featured.eyebrow")}</span>
          </p>
        </div>

        <div className="flex-1 space-y-2">
          <p className="hidden items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9EEFE8] lg:flex">
            <Sparkles className="h-3.5 w-3.5 text-[#9EEFE8]" aria-hidden="true" />
            <span>{t("authors.featured.eyebrow")}</span>
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#FFFFFF] font-extrabold leading-tight">{locName}</h2>
          <p className="text-xs sm:text-sm font-bold text-[#9EEFE8]">{locRole} • {formatLife(author, isFa)}</p>
          <p className="max-w-xl text-xs sm:text-sm leading-relaxed text-[#B8E2DF]">{locBio}</p>
          <p className="text-xs text-[#B8E2DF] font-semibold pt-1">
            {t("authors.featured.preserved", { works })} • {t("authors.featured.followers", { count: formatFollowers(followers + (following ? 1 : 0)) })}
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
          <FollowButton following={following} onToggle={onToggleFollow} variant="onDark" className="!px-6 !py-3 sm:flex-1 lg:flex-none" />
          <a
            href="#explore"
            className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold text-[#FFFFFF] transition-colors hover:text-[#9EEFE8] sm:flex-1 lg:flex-none p-2 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9EEFE8]"
          >
            <span>{t("authors.featured.explore")}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
          </a>
        </div>
      </div>
    </section>
  );
}

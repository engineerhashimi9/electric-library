import { ArrowRight, BookMarked, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import Avatar from "@/component/ui/Avatar";
import FollowButton from "./FollowButton";
import { formatLife } from "./authors";
import { formatFollowers } from "../../utils/formatters";
import { getLocalized } from "../../utils/langHelper";

export default function AuthorListItem({ author, following, onToggleFollow }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const isFa = lang === "fa";

  const { name, role, bio, works, followers, country, categories, photo } = author;

  const locName = getLocalized(name, lang);
  const locRole = getLocalized(role, lang);
  const locBio = getLocalized(bio, lang);
  const locCountry = getLocalized(country, lang);

  return (
    <article className="group flex flex-wrap items-center gap-3 sm:gap-5 rounded-2xl bg-[#FFFFFF] border border-[#D0E8E6] hover:border-[#17A296] p-3 sm:p-4 shadow-library-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-library-hover lg:flex-nowrap text-[#0A2E2C]">
      <div className="shrink-0 overflow-hidden rounded-full ring-4 ring-[#E6F4F3] transition-all group-hover:ring-[#17A296]">
        <Avatar name={locName} photo={photo} className="h-14 w-14 sm:h-16 sm:w-16 transition duration-500 group-hover:scale-105" />
      </div>

      <div className="min-w-0 flex-1 space-y-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
          <h3 className="text-base sm:text-lg text-[#0E6760] font-extrabold leading-snug">{locName}</h3>
          <span className="text-xs font-bold text-[#17A296]">{locRole}</span>
        </div>
        <p className="text-xs text-[#4A6B68] font-medium">{formatLife(author, isFa)} • {locCountry}</p>
        <p className="line-clamp-1 hidden text-xs leading-relaxed text-[#4A6B68] sm:block">{locBio}</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#4A6B68] font-semibold pt-0.5">
          <span className="flex items-center gap-1.5"><BookMarked className="h-3.5 w-3.5 text-[#17A296]" aria-hidden="true" /> {works} {t("authors.card.works")}</span>
          <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-[#17A296]" aria-hidden="true" /> {formatFollowers(followers + (following ? 1 : 0))} {t("authors.card.followers")}</span>
          <span className="hidden gap-1.5 md:flex">
            {categories.map((c) => <span key={c} className="rounded-full bg-[#E6F4F3] border border-[#D0E8E6] px-2 py-0.5 text-xs text-[#236D64] font-bold">{c}</span>)}
          </span>
        </div>
      </div>

      <FollowButton following={following} onToggle={onToggleFollow} className="w-full sm:w-[130px] sm:shrink-0" />
      <a
        href="#explore"
        className="hidden shrink-0 items-center gap-1 text-xs font-bold text-[#0E6760] transition-colors hover:text-[#17A296] lg:flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] rounded p-1"
      >
        <span>{t("authors.card.explore")}</span>
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
      </a>
    </article>
  );
}

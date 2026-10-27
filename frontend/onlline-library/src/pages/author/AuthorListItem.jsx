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
    <article className="group flex flex-wrap items-center gap-3 rounded-2xl bg-[#FFFFFF] border border-[#D0E8E6] hover:border-[#17A296] p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:gap-5 sm:p-4 lg:flex-nowrap text-[#0A2E2C]">
      <div className="shrink-0 overflow-hidden rounded-full ring-4 ring-[#E6F4F3] transition group-hover:ring-[#17A296]">
        <Avatar name={locName} photo={photo} className="h-14 w-14 transition duration-500 group-hover:scale-110 sm:h-16 sm:w-16" />
      </div>

      <div className="min-w-0 flex-1 space-y-1">
        <div className="flex flex-wrap items-baseline gap-x-3">
          <h3 className="text-[18px] leading-6 text-[#0E6760] font-sans font-bold sm:text-[20px]">{locName}</h3>
          <span className="text-[11px] font-bold text-[#17A296]">{locRole}</span>
        </div>
        <p className="text-[11px] text-[#4A6B68]">{formatLife(author, isFa)} • {locCountry}</p>
        <p className="line-clamp-1 hidden text-[12px] text-[#4A6B68] sm:block">{locBio}</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[#4A6B68]">
          <span className="flex items-center gap-1"><BookMarked className="h-3 w-3 text-[#17A296]" /> {works} {t("authors.card.works")}</span>
          <span className="flex items-center gap-1"><Users className="h-3 w-3 text-[#17A296]" /> {formatFollowers(followers + (following ? 1 : 0))} {t("authors.card.followers")}</span>
          <span className="hidden gap-1.5 md:flex">
            {categories.map((c) => <span key={c} className="rounded-full bg-[#E6F4F3] border border-[#D0E8E6] px-2 py-0.5 text-[10px] text-[#236D64] font-bold">{c}</span>)}
          </span>
        </div>
      </div>

      <FollowButton following={following} onToggle={onToggleFollow} className="w-full sm:w-[130px] sm:shrink-0" />
      <a href="#" className="hidden shrink-0 items-center gap-1 text-[12px] font-semibold text-[#0E6760] transition hover:text-[#17A296] lg:flex">
        {t("authors.card.explore")} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
      </a>
    </article>
  );
}

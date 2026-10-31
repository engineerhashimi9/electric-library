import { ArrowRight, BookMarked, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import Avatar from "@/component/ui/Avatar";
import FollowButton from "./FollowButton";
import { formatLife } from "./authors";
import { getLocalized } from "../../utils/langHelper";
import { formatFollowers } from "../../utils/formatters";

export default function AuthorCard({ author, following, onToggleFollow }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const isFa = lang === "fa";

  const { name, role, bio, works, followers, country, categories, photo } = author;

  const locName = getLocalized(name, lang);
  const locRole = getLocalized(role, lang);
  const locBio = getLocalized(bio, lang);
  const locCountry = getLocalized(country, lang);

  return (
    <article className="group flex flex-col items-center gap-2 rounded-2xl bg-[#FFFFFF] border border-[#D0E8E6] p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#17A296] hover:shadow-lg sm:gap-3 sm:p-6 text-[#0A2E2C]">
      <div className="overflow-hidden rounded-full ring-4 ring-[#E6F4F3] transition duration-300 group-hover:ring-[#17A296]">
        <Avatar
          name={locName}
          photo={photo}
          className="h-16 w-16 transition duration-500 group-hover:scale-110 sm:h-20 sm:w-20"
        />
      </div>

      <div className="space-y-0.5">
        <h3
          className="text-[17px] leading-[22px] text-[#0E6760] font-sans font-bold sm:text-[20px] sm:leading-[26px]"
        >
          {locName}
        </h3>
        <p className="text-[11px] tracking-[0.3px] text-[#4A6B68]">
          {formatLife(author, isFa)} • {locCountry}
        </p>
      </div>
      <p className="min-h-[28px] text-[11px] font-bold leading-[14px] text-[#17A296] sm:text-[12px]">
        {locRole}
      </p>

      <p className="line-clamp-3 hidden text-[12px] leading-relaxed text-[#4A6B68] sm:block">
        {locBio}
      </p>

      <div className="hidden flex-wrap justify-center gap-1.5 sm:flex">
        {categories.map((c) => (
          <span
            key={c}
            className="rounded-full bg-[#E6F4F3] border border-[#D0E8E6] px-2.5 py-0.5 text-[10px] font-bold text-[#236D64]"
          >
            {c}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-1 pt-1 text-[11px] text-[#4A6B68]">
        <span className="flex items-center gap-1">
          <BookMarked className="h-3 w-3 text-[#17A296]" /> {works} {t("authors.card.works")}
        </span>
        <span className="flex items-center gap-1">
          <Users className="h-3 w-3 text-[#17A296]" />{" "}
          {formatFollowers(followers + (following ? 1 : 0))} {t("authors.card.followers")}
        </span>
      </div>

      <FollowButton
        following={following}
        onToggle={onToggleFollow}
        className="w-full"
      />

      <a
        href="#"
        className="hidden items-center gap-1 text-[12px] font-semibold text-[#0E6760] transition hover:text-[#17A296] sm:flex"
      >
        {t("authors.card.explore")}{" "}
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
      </a>
    </article>
  );
}

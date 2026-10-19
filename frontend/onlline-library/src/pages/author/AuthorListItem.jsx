import { ArrowRight, BookMarked, Users } from "lucide-react";
import Avatar from "@/component/ui/Avatar";
import FollowButton from "./FollowButton";
import { formatLife } from "./authors";
import { formatFollowers } from "./AuthorCard";


export default function AuthorListItem({ author, following, onToggleFollow }) {
  const { name, role, bio, works, followers, country, categories, photo } = author;
  return (
    <article className="group flex flex-wrap items-center gap-3 rounded-2xl bg-white p-3 shadow-[0_1px_1px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:gap-5 sm:p-4 lg:flex-nowrap">
      <div className="shrink-0 overflow-hidden rounded-full ring-4 ring-[#f5f3f0] transition group-hover:ring-[#fd9168]/50">
        <Avatar name={name} photo={photo} className="h-14 w-14 transition duration-500 group-hover:scale-110 sm:h-16 sm:w-16" />
      </div>

      <div className="min-w-0 flex-1 space-y-1">
        <div className="flex flex-wrap items-baseline gap-x-3">
          <h3 className={`text-[18px] leading-6 text-[#07241a] sm:text-[20px] `}>{name}</h3>
          <span className="text-[11px] font-semibold text-[#9a4522]">{role}</span>
        </div>
        <p className="text-[11px] text-[#727974]">{formatLife(author)} • {country}</p>
        <p className="line-clamp-1 hidden text-[12px] text-[#424844] sm:block">{bio}</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[#727974]">
          <span className="flex items-center gap-1"><BookMarked className="h-3 w-3" /> {works} Works</span>
          <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {formatFollowers(followers + (following ? 1 : 0))}</span>
          <span className="hidden gap-1.5 md:flex">
            {categories.map((c) => <span key={c} className="rounded-full bg-[#f5f3f0] px-2 py-0.5">{c}</span>)}
          </span>
        </div>
      </div>

      <FollowButton following={following} onToggle={onToggleFollow} className="w-full sm:w-[130px] sm:shrink-0" />
      <a href="#" className="hidden shrink-0 items-center gap-1 text-[12px] font-semibold text-[#07241a] transition hover:text-[#9a4522] lg:flex">
        Explore Canon <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </a>
    </article>
  );
}

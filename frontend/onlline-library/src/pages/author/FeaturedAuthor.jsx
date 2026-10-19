import { Sparkles, ArrowRight } from "lucide-react";
import Avatar from "@/component/ui/Avatar";
import FollowButton from "./FollowButton";
import { formatFollowers } from "./AuthorCard";
import { formatLife } from "./authors";


export default function FeaturedAuthor({ author, following, onToggleFollow }) {
  const { name, role, bio, works, followers, photo } = author;
  return (
    <section className="group relative overflow-hidden rounded-3xl bg-[#07241a] p-5 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] md:p-10">
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-60 w-60 rounded-full bg-[#fd9168]/20 blur-[32px] transition duration-700 group-hover:scale-125 lg:h-80 lg:w-80" />
      <div className="pointer-events-none absolute -top-24 left-1/3 hidden h-60 w-1/5 rounded-full bg-[#1e3a2f] blur-[20px] lg:block" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">
        <div className="flex items-center gap-4 lg:block">
          <div className="shrink-0 overflow-hidden rounded-full ring-4 ring-[#fd9168]/40 transition group-hover:ring-[#fd9168]">
            <Avatar name={name} photo={photo} className="h-20 w-20 lg:h-28 lg:w-28" />
          </div>
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[#fd9168] lg:hidden">
            <Sparkles className="h-3.5 w-3.5" /> Most Followed This Season
          </p>
        </div>

        <div className="flex-1 space-y-2">
          <p className="hidden items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[#fd9168] lg:flex">
            <Sparkles className="h-3.5 w-3.5" /> Most Followed This Season
          </p>
          <h2 className={`text-[28px] leading-9 text-[#fbf9f6] md:text-[34px] md:leading-[42px] `}>{name}</h2>
          <p className="text-[13px] font-semibold text-[#caeada]">{role} • {formatLife(author)}</p>
          <p className="max-w-[560px] text-[14px] leading-relaxed text-[#86a496]">{bio}</p>
          <p className="text-[12px] text-[#86a496]">
            {works} works preserved • {formatFollowers(followers + (following ? 1 : 0))} followers
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
          <FollowButton following={following} onToggle={onToggleFollow} variant="onDark" className="!px-6 !py-3 sm:flex-1 lg:flex-none" />
          <a href="#" className="flex items-center justify-center gap-1 text-[13px] font-semibold text-[#caeada] transition hover:text-white sm:flex-1 lg:flex-none">
            Explore Canon <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

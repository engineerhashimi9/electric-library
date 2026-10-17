import { Sparkles, ArrowRight } from "lucide-react";
import Avatar from "@/component/ui/Avatar";
import FollowButton from "./FollowButton";
import { formatFollowers } from "./AuthorCard";

export default function FeaturedAuthor({ author, following, onToggleFollow }) {
  const { name, role, bio, works, followers, photo } = author;
  return (
    <section className="group relative overflow-hidden rounded-3xl bg-leaf-900 px-10 py-9 text-white shadow-xl shadow-leaf-900/20">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-leaf-500/20 blur-3xl transition duration-700 group-hover:scale-125" />
      <div className="relative flex items-center gap-8">
        <div className="shrink-0 overflow-hidden rounded-full ring-4 ring-leaf-400/40 transition group-hover:ring-leaf-300">
          <Avatar name={name} photo={photo} className="h-28 w-28" />
        </div>

        <div className="flex-1 space-y-2">
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-leaf-200">
            <Sparkles className="h-3.5 w-3.5" /> Most Followed This Season
          </p>
          <h2 className="font-serif text-[34px] font-medium leading-tight">{name}</h2>
          <p className="text-[13px] font-semibold text-leaf-300">{role}</p>
          <p className="max-w-[560px] text-[14px] leading-relaxed text-leaf-100/70">{bio}</p>
          <p className="text-[12px] text-leaf-200/70">
            {works} works preserved • {formatFollowers(followers + (following ? 1 : 0))} followers
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3">
          <FollowButton following={following} onToggle={onToggleFollow} className="!px-6 !py-3 !text-[13px]" />
          <a href="#" className="flex items-center justify-center gap-1 text-[12px] font-semibold text-leaf-100 transition hover:text-white">
            Explore Canon <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

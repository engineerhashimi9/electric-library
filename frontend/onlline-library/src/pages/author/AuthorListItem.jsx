import { ArrowRight, BookMarked, Users } from "lucide-react";
import Avatar from "@/component/ui/Avatar";
import FollowButton from "./FollowButton";
import { formatFollowers } from "./AuthorCard";

export default function AuthorListItem({ author, following, onToggleFollow }) {
  const { name, role, bio, works, followers, categories, photo } = author;
  return (
    <article className="group flex items-center gap-5 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-leaf-100 transition duration-300 hover:-translate-y-0.5 hover:bg-leaf-50/40 hover:shadow-lg hover:ring-leaf-300">
      <div className="shrink-0 overflow-hidden rounded-full ring-4 ring-leaf-100 transition group-hover:ring-leaf-400">
        <Avatar name={name} photo={photo} className="h-16 w-16 transition duration-500 group-hover:scale-110" />
      </div>

      <div className="min-w-0 flex-1 space-y-1">
        <div className="flex items-center gap-3">
          <h3 className="font-serif text-[18px] font-semibold text-leaf-950">{name}</h3>
          <span className="text-[11px] font-semibold text-leaf-600">{role}</span>
        </div>
        <p className="line-clamp-1 text-[12px] text-ink-soft">{bio}</p>
        <div className="flex items-center gap-4 text-[11px] text-ink-mute">
          <span className="flex items-center gap-1"><BookMarked className="h-3 w-3" /> {works} Works</span>
          <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {formatFollowers(followers + (following ? 1 : 0))}</span>
          {categories.map((c) => <span key={c} className="rounded-full bg-leaf-50 px-2 py-0.5">{c}</span>)}
        </div>
      </div>

      <FollowButton following={following} onToggle={onToggleFollow} className="w-[120px] shrink-0" />
      <a href="#" className="flex shrink-0 items-center gap-1 text-[12px] font-semibold text-leaf-950 transition hover:text-leaf-600">
        Explore Canon <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </a>
    </article>
  );
}

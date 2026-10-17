import { ArrowRight, BookMarked, Users } from "lucide-react";
import Avatar from "@/component/ui/Avatar";
import FollowButton from "./FollowButton";

export const formatFollowers = (n) => (n >= 1000 ? `${(n / 1000).toFixed(1)}k` : n);

export default function AuthorCard({ author, following, onToggleFollow }) {
  const { name, role, bio, works, followers, categories, photo } = author;
  return (
    <article className="group flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-leaf-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-leaf-900/10 hover:ring-leaf-300">
      <div className="overflow-hidden rounded-full ring-4 ring-leaf-100 transition duration-300 group-hover:ring-leaf-400">
        <Avatar name={name} photo={photo} className="h-20 w-20 transition duration-500 group-hover:scale-110" />
      </div>

      <h3 className="font-serif text-[18px] font-semibold leading-snug text-leaf-950">{name}</h3>
      <p className="text-[11px] font-semibold text-leaf-600">{role}</p>
      <p className="line-clamp-3 text-[12px] leading-relaxed text-ink-soft">{bio}</p>

      <div className="flex flex-wrap justify-center gap-1.5">
        {categories.map((c) => (
          <span key={c} className="rounded-full bg-leaf-50 px-2 py-0.5 text-[10px] font-medium text-ink-soft">{c}</span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-3 text-[11px] text-ink-mute">
        <span className="flex items-center gap-1"><BookMarked className="h-3 w-3" /> {works} Works Preserved</span>
        <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {formatFollowers(followers + (following ? 1 : 0))}</span>
      </div>

      <FollowButton following={following} onToggle={onToggleFollow} className="w-full" />

      <a href="#" className="flex items-center gap-1 text-[12px] font-semibold text-leaf-950 transition hover:text-leaf-600">
        Explore Canon <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </a>
    </article>
  );
}

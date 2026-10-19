import { ArrowRight, BookMarked, Users } from "lucide-react";
import Avatar from "@/component/ui/Avatar";
import FollowButton from "./FollowButton";
import { formatLife } from "./authors";

export const formatFollowers = (n) =>
  n >= 1000 ? `${(n / 1000).toFixed(1)}k` : n;

export default function AuthorCard({ author, following, onToggleFollow }) {
  const { name, role, bio, works, followers, country, categories, photo } =
    author;
  return (
    <article className="group flex flex-col items-center gap-2 rounded-2xl bg-white p-4 text-center shadow-[0_1px_1px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#07241a]/10 sm:gap-3 sm:p-6">
      <div className="overflow-hidden rounded-full ring-4 ring-[#f5f3f0] transition duration-300 group-hover:ring-[#fd9168]/50">
        <Avatar
          name={name}
          photo={photo}
          className="h-16 w-16 transition duration-500 group-hover:scale-110 sm:h-20 sm:w-20"
        />
      </div>

      <div className="space-y-0.5">
        <h3
          className={`text-[17px] leading-[22px] text-[#07241a] sm:text-[20px] sm:leading-[26px] `}
        >
          {name}
        </h3>
        <p className="text-[11px] tracking-[0.3px] text-[#727974]">
          {formatLife(author)} • {country}
        </p>
      </div>
      <p className="min-h-[28px] text-[11px] font-semibold leading-[14px] text-[#9a4522] sm:text-[12px]">
        {role}
      </p>

      <p className="line-clamp-3 hidden text-[12px] leading-relaxed text-[#424844] sm:block">
        {bio}
      </p>

      <div className="hidden flex-wrap justify-center gap-1.5 sm:flex">
        {categories.map((c) => (
          <span
            key={c}
            className="rounded-full bg-[#f5f3f0] px-2.5 py-0.5 text-[10px] font-medium text-[#424844]"
          >
            {c}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-1 pt-1 text-[11px] text-[#727974]">
        <span className="flex items-center gap-1">
          <BookMarked className="h-3 w-3" /> {works} Works
        </span>
        <span className="flex items-center gap-1">
          <Users className="h-3 w-3" />{" "}
          {formatFollowers(followers + (following ? 1 : 0))}
        </span>
      </div>

      <FollowButton
        following={following}
        onToggle={onToggleFollow}
        className="w-full"
      />

      <a
        href="#"
        className="hidden items-center gap-1 text-[12px] font-semibold text-[#07241a] transition hover:text-[#9a4522] sm:flex"
      >
        Explore Canon{" "}
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </a>
    </article>
  );
}

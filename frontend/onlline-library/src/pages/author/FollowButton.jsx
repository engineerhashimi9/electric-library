import { Check, Plus } from "lucide-react";

// variant: default (روی پس‌زمینه روشن) | onDark (روی بنر تیره)
export default function FollowButton({ following, onToggle, variant = "default", className = "" }) {
  const styles =
    variant === "onDark"
      ? following
        ? "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20"
        : "bg-white text-[#07241a] hover:bg-[#f5f3f0]"
      : following
      ? "bg-[#eae8e5] text-[#07241a] hover:bg-[#e0ddd9]"
      : "bg-[#07241a] text-white hover:bg-[#1e3a2f]";

  return (
    <button
      onClick={onToggle}
      aria-pressed={following}
      className={`group/follow flex items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-[13px] font-semibold transition active:scale-95 ${styles} ${className}`}
    >
      {following ? (
        <>
          <Check className="h-3.5 w-3.5 group-hover/follow:hidden" />
          <Plus className="hidden h-3.5 w-3.5 rotate-45 group-hover/follow:block" />
          <span className="group-hover/follow:hidden">Following</span>
          <span className="hidden group-hover/follow:inline">Unfollow</span>
        </>
      ) : (
        <>
          <Plus className="h-3.5 w-3.5" /> Follow
        </>
      )}
    </button>
  );
}

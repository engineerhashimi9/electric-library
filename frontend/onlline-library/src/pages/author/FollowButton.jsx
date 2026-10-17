import { Check, Plus } from "lucide-react";

export default function FollowButton({ following, onToggle, className = "" }) {
  return (
    <button
      onClick={onToggle}
      aria-pressed={following}
      className={`group/follow flex items-center justify-center gap-1.5 rounded-lg px-4 py-2 text-[12px] font-semibold transition active:scale-95 ${
        following
          ? "bg-leaf-100 text-leaf-900 hover:bg-leaf-200"
          : "bg-leaf-800 text-white hover:bg-leaf-700"
      } ${className}`}
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

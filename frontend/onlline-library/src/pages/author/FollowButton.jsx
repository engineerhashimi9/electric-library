import { Check, Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function FollowButton({ following, onToggle, variant = "default", className = "" }) {
  const { t } = useTranslation();

  const styles = following
    ? variant === "onDark"
      ? "bg-[#163A2E] border border-[#163A2E] text-[#FFFFFF] hover:bg-[#DDECE6] hover:text-[#09261C]"
      : "bg-[#EAF4F0] border border-[#DDECE6] text-[#09261C] hover:bg-[#DDECE6] hover:text-[#09261C]"
    : variant === "onDark"
      ? "bg-[#10B981] hover:bg-[#FFFFFF] hover:text-[#09261C] text-[#FFFFFF] font-bold"
      : "bg-[#10B981] hover:bg-[#09261C] text-[#FFFFFF] font-bold";

  return (
    <button
      onClick={onToggle}
      aria-pressed={following}
      className={`group/follow flex items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-[13px] font-semibold transition active:scale-95 ${styles} ${className}`}
    >
      {following ? (
        <>
          <Check className="h-3.5 w-3.5 group-hover/follow:hidden text-[#10B981]" />
          <Plus className="hidden h-3.5 w-3.5 rotate-45 group-hover/follow:block" />
          <span className="group-hover/follow:hidden">{t("authors.followBtn.following")}</span>
          <span className="hidden group-hover/follow:inline">{t("authors.followBtn.unfollow")}</span>
        </>
      ) : (
        <>
          <Plus className="h-3.5 w-3.5" /> {t("authors.followBtn.follow")}
        </>
      )}
    </button>
  );
}

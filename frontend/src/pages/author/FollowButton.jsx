import { Check, Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function FollowButton({ following, onToggle, variant = "default", className = "" }) {
  const { t } = useTranslation();

  const styles = following
    ? variant === "onDark"
      ? "bg-[#156B6B] border border-[#156B6B] text-[#FFFFFF] hover:bg-[#D0E8E6] hover:text-[#0E6760]"
      : "bg-[#E6F4F3] border border-[#D0E8E6] text-[#0E6760] hover:bg-[#D0E8E6] hover:text-[#0E6760]"
    : variant === "onDark"
      ? "bg-[#17A296] hover:bg-[#FFFFFF] hover:text-[#0E6760] text-[#FFFFFF] font-bold"
      : "bg-[#17A296] hover:bg-[#0E6760] text-[#FFFFFF] font-bold";

  return (
    <button
      onClick={onToggle}
      aria-pressed={following}
      className={`group/follow flex items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-[13px] font-semibold transition active:scale-95 ${styles} ${className}`}
    >
      {following ? (
        <>
          <Check className="h-3.5 w-3.5 group-hover/follow:hidden text-[#17A296]" />
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

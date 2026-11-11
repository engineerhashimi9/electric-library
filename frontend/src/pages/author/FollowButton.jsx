import { Check, Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function FollowButton({ following, onToggle, variant = "default", className = "" }) {
  const { t } = useTranslation();

  const styles = following
    ? variant === "onDark"
      ? "bg-[#156B6B] border border-[#17A296]/40 text-[#FFFFFF] hover:bg-[#D0E8E6] hover:text-[#0E6760]"
      : "bg-[#E6F4F3] border border-[#D0E8E6] text-[#0E6760] hover:bg-[#D0E8E6]"
    : variant === "onDark"
      ? "bg-[#17A296] hover:bg-[#FFFFFF] hover:text-[#0E6760] text-[#FFFFFF] font-bold shadow-library-sm"
      : "bg-[#17A296] hover:bg-[#0E6760] text-[#FFFFFF] font-bold shadow-library-sm";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={following}
      className={`group/follow inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] ${styles} ${className}`}
    >
      {following ? (
        <>
          <Check className="h-4 w-4 text-[#17A296] group-hover/follow:hidden" aria-hidden="true" />
          <Plus className="hidden h-4 w-4 rotate-45 group-hover/follow:block" aria-hidden="true" />
          <span className="group-hover/follow:hidden">{t("authors.followBtn.following")}</span>
          <span className="hidden group-hover/follow:inline">{t("authors.followBtn.unfollow")}</span>
        </>
      ) : (
        <>
          <Plus className="h-4 w-4" aria-hidden="true" />
          <span>{t("authors.followBtn.follow")}</span>
        </>
      )}
    </button>
  );
}

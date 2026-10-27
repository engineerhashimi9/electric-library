import { Library } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function WishlistCard() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl bg-[#EAF4F0] border border-[#DDECE6] p-4 text-[#111C18]">
      <div className="flex items-center gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFFFFF] border border-[#DDECE6] text-[#10B981]">
          <Library className="h-5 w-5" />
        </span>
        <div>
          <h4 className="font-sans text-[18px] sm:text-[20px] leading-7 text-[#09261C] font-bold">
            {t("library.actions.wishlistTitle")}
          </h4>
          <p className="text-[13px] leading-5 text-[#52665E]">
            {t("library.actions.wishlistDesc")}
          </p>
        </div>
      </div>
      <button className="shrink-0 rounded-lg bg-[#FFFFFF] border border-[#DDECE6] px-4 py-2 text-[13px] font-semibold tracking-wide text-[#09261C] hover:bg-[#10B981] hover:text-[#FFFFFF] shadow-sm transition-colors">
        {t("library.actions.viewShelf")}
      </button>
    </div>
  );
}

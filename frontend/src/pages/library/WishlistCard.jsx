import { Library } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function WishlistCard() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl bg-[#E6F4F3] border border-[#D0E8E6] p-4 text-[#0A2E2C]">
      <div className="flex items-center gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFFFFF] border border-[#D0E8E6] text-[#17A296]">
          <Library className="h-5 w-5" />
        </span>
        <div>
          <h4 className="font-sans text-[18px] sm:text-[20px] leading-7 text-[#0E6760] font-bold">
            {t("library.actions.wishlistTitle")}
          </h4>
          <p className="text-[13px] leading-5 text-[#4A6B68]">
            {t("library.actions.wishlistDesc")}
          </p>
        </div>
      </div>
      <button className="shrink-0 rounded-lg bg-[#FFFFFF] border border-[#D0E8E6] px-4 py-2 text-[13px] font-semibold tracking-wide text-[#0E6760] hover:bg-[#17A296] hover:text-[#FFFFFF] shadow-sm transition-colors">
        {t("library.actions.viewShelf")}
      </button>
    </div>
  );
}

// src/pages/profile/DossierHeader.jsx
import { useTranslation } from "react-i18next";
import { profile } from "./profile";

export default function DossierHeader({ lastArchived, onSync }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-3 pt-1 lg:min-h-[70px] lg:flex-row lg:items-center lg:justify-between lg:pb-4 lg:pt-2">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="h-2 w-2 shrink-0 rounded-full bg-[#10B981]" />
        <span className="text-[11px] uppercase tracking-[1.1px] text-[#09261C] font-bold lg:text-[16px] lg:leading-6 lg:tracking-[1.6px]">
          {t("profile.header.dossier")}
        </span>
        <span className="hidden text-[11px] text-[#52665E] sm:inline lg:text-[16px]">
          /
        </span>
        <span className="hidden text-[11px] uppercase tracking-[1.1px] text-[#52665E] sm:inline lg:text-[16px] lg:leading-6 lg:tracking-[1.6px]">
          {profile.folio}
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-3 lg:gap-4">
        <button
          onClick={onSync}
          title="Synchronize archive"
          className="flex items-center gap-1.5 rounded-full bg-[#FFFFFF] border border-[#DDECE6] px-3.5 py-1 text-[12px] font-semibold text-[#09261C] hover:bg-[#EAF4F0] transition active:scale-95"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />{" "}
          {t("profile.header.sync")}
        </button>
        <span className="text-[12px] text-[#52665E]">
          {t("profile.header.lastArchived", { time: lastArchived })}
        </span>
      </div>
    </div>
  );
}
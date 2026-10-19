import { profile } from "./profile";

export default function DossierHeader({ lastArchived, onSync }) {
  return (
    <div className="flex flex-col gap-3 pt-1 lg:h-[70px] lg:flex-row lg:items-center lg:justify-between lg:pb-6 lg:pt-4">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="h-2 w-2 shrink-0 rounded-full bg-[#9a4522]" />
        <span className="text-[11px] uppercase tracking-[1.1px] text-[#e9831a] lg:text-[16px] lg:leading-6 lg:tracking-[1.6px]">Curatorial Profile Dossier</span>
        <span className="hidden text-[11px] text-[#e4e2df] sm:inline lg:text-[16px]">/</span>
        <span className="hidden text-[11px] uppercase tracking-[1.1px] text-[#727974] sm:inline lg:text-[16px] lg:leading-6 lg:tracking-[1.6px]">{profile.folio}</span>
      </div>

      <div className="flex items-center gap-3 lg:gap-4">
        <button
          onClick={onSync}
          title="Synchronize archive"
          className="flex items-center gap-1.5 rounded-full bg-[#eae8e5] px-3 py-1 text-[12px] font-medium text-[#07241a] transition hover:bg-[#e0ddd9] active:scale-95"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#07241a]" /> Archive Online Sync
        </button>
        <span className="text-[12px] text-[#727974]">Last archived: {lastArchived}</span>
      </div>
    </div>
  );
}

import { Pencil, Settings, Download, ShieldCheck, GraduationCap } from "lucide-react";
import Avatar from "@/component/ui/Avatar";
import { profile } from "./profile";


const soft =
  "flex items-center justify-center gap-2 rounded-xl bg-[#eae8e5] px-5 py-3 text-[14px] text-[#1b1c1a] transition hover:bg-[#e0ddd9] active:scale-95 lg:text-[16px]";

export default function ProfileHero({ name, onEdit, onSettings, onExport }) {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.05)] lg:p-10">
      <div className="pointer-events-none absolute -right-14 -top-24 h-96 w-[342px] rounded-full bg-[#07241a]/5 blur-[32px]" />
      <div className="pointer-events-none absolute -bottom-24 left-[40%] right-[33%] hidden h-80 rounded-full bg-[#fd9168]/10 blur-[20px] lg:block" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Identity */}
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="relative shrink-0">
            <div className="h-24 w-24 overflow-hidden rounded-2xl bg-[#efeeeb] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] lg:h-32 lg:w-32">
              <Avatar name={name} photo={profile.photo} className="h-full w-full" />
            </div>
            <span className="absolute -bottom-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#07241a] text-white ring-2 ring-white">
              <ShieldCheck className="h-3.5 w-3.5" />
            </span>
          </div>

          <div className="min-w-0 space-y-2 lg:px-6">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h1 className={`text-[30px] leading-9 tracking-[-0.8px] text-[#07241a] sm:text-[36px] lg:text-[40px] lg:leading-[48px] lg:tracking-[-1px] `}>{name}</h1>
              <span className="rounded-full bg-[#1e3a2f] px-3 py-1 text-[11px] uppercase tracking-[0.8px] text-white sm:text-[13px] lg:text-[16px] lg:leading-6">
                {profile.tier}
              </span>
            </div>
            <p className="flex max-w-[421px] items-start gap-2 text-[13px] leading-6 text-[#424844] lg:text-[15px]">
              <GraduationCap className="mt-1 h-3.5 w-3.5 shrink-0 text-[#9a4522]" />
              <span>{profile.fellowship}</span>
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3 lg:flex lg:w-[370px] lg:flex-wrap">
          <button onClick={onEdit} className={soft}><Pencil className="h-3 w-3" /> Edit Profile</button>
          <button onClick={onSettings} className={soft}><Settings className="h-3.5 w-3.5" /> Account Settings</button>
          <button
            onClick={onExport}
            className="col-span-2 flex items-center justify-center gap-3 rounded-xl bg-[#07241a] px-6 py-3 text-[14px] text-white shadow-[0_1px_1px_rgba(0,0,0,0.05)] transition hover:bg-[#1e3a2f] active:scale-95 lg:w-full lg:text-[16px]"
          >
            <Download className="h-3 w-3" /> Export Scholarly Dossier
          </button>
        </div>
      </div>
    </section>
  );
}

import { Cloud, CreditCard, ShieldCheck, Trash2 } from "lucide-react";
import Toggle from "@/component/ui/Toggle";
import ProgressBar from "@/component/ui/ProgressBar";
import { privacyOptions, STORAGE_TOTAL_GB } from "./profile";


const ColTitle = ({ icon: Icon, children }) => (
  <h3 className="flex items-center gap-2 text-[17px] font-semibold tracking-[-0.09px] text-[#07241a] lg:text-[18px] lg:leading-[26px]">
    <Icon className="h-[18px] w-[18px] text-[#9a4522]" /> {children}
  </h3>
);

function StorageColumn({ cacheGb, autoSync, onAutoSync, onPurge }) {
  return (
    <div className="space-y-5">
      <ColTitle icon={Cloud}>Offline Folio Storage</ColTitle>

      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[13px] font-medium text-[#424844]">Cached Reading Volumes</span>
          <span className="text-[13px] font-bold tracking-[0.39px] text-[#07241a]">{cacheGb.toFixed(1)} GB / {STORAGE_TOTAL_GB.toFixed(1)} GB</span>
        </div>
        <ProgressBar percent={(cacheGb / STORAGE_TOTAL_GB) * 100} />
        <p className="text-[13px] leading-5 text-[#727974]">42 books available offline with annotated vector margins.</p>
      </div>

      <div className="flex items-center justify-between gap-3 rounded-xl bg-[#f5f3f0] p-4">
        <div className="min-w-0">
          <p className="text-[13px] font-semibold tracking-[0.39px] text-[#07241a]">Marginalia Cloud Auto-Sync</p>
          <p className="text-[13px] leading-5 text-[#727974]">Real-time sync to Oxford Vault</p>
        </div>
        <Toggle checked={autoSync} onChange={onAutoSync} label="Marginalia Cloud Auto-Sync" />
      </div>

      <button onClick={onPurge} className="flex items-center gap-1 text-[12px] text-[#9a4522] transition hover:text-[#7a361a] hover:underline active:scale-95">
        <Trash2 className="h-3 w-3" /> Purge Local Cached Data (Non-annotated)
      </button>
    </div>
  );
}

function MembershipColumn({ onBilling }) {
  return (
    <div className="space-y-4">
      <ColTitle icon={CreditCard}>Membership &amp; Grant</ColTitle>

      <div className="space-y-3 rounded-xl bg-[#07241a] p-5">
        <div className="flex items-center justify-between">
          <span className="text-[12px] uppercase tracking-[1.6px] text-[#aecebe] lg:text-[14px]">TIER GRADE</span>
          <span className="rounded bg-[#1e3a2f] px-2 py-0.5 text-[13px] text-[#caeada] lg:text-[14px]">Subsidized</span>
        </div>
        <p className={`text-[20px] leading-7 text-white `}>Endowed Scholar Tier</p>
        <p className="text-[13px] leading-5 text-[#aecebe]">
          Standard $12.00/mo fee sponsored via University Bodleian Library Research Grant #BO-7719.
        </p>
      </div>

      <div className="flex items-center justify-between py-1">
        <span className="text-[14px] text-[#424844]">Next Annual Review:</span>
        <span className="text-[13px] font-semibold tracking-[0.39px] text-[#07241a]">October 14, 2025</span>
      </div>

      <button onClick={onBilling} className="w-full rounded-xl bg-[#eae8e5] px-4 py-2.5 text-[15px] text-[#07241a] transition hover:bg-[#e0ddd9] active:scale-95 lg:text-[16px]">
        Manage Fellowship Billing
      </button>
    </div>
  );
}

function PrivacyColumn({ settings, onToggle }) {
  return (
    <div className="space-y-5">
      <ColTitle icon={ShieldCheck}>Privacy &amp; Scholarly Sharing</ColTitle>

      <div className="space-y-4">
        {privacyOptions.map(({ key, title, desc }) => (
          <div key={key} className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[13px] font-semibold tracking-[0.39px] text-[#07241a]">{title}</p>
              <p className="text-[13px] leading-5 text-[#727974]">{desc}</p>
            </div>
            <div className="pt-1"><Toggle checked={settings[key]} onChange={() => onToggle(key)} label={title} /></div>
          </div>
        ))}
      </div>

      <a href="#" className="block text-[12px] text-[#727974] underline underline-offset-2 transition hover:text-[#07241a]">
        Review Lumina Institutional Custody Charter
      </a>
    </div>
  );
}

export default function SettingsPanel({ settings, onToggle, cacheGb, onPurge, onBilling }) {
  return (
    <section id="account-settings" className="scroll-mt-24 rounded-2xl bg-white p-5 shadow-[0_1px_1px_rgba(0,0,0,0.05)] sm:p-8 lg:px-10 lg:pb-10 lg:pt-14">
      <div className="flex flex-col gap-3 pb-6 sm:flex-row sm:items-center sm:justify-between lg:pb-8">
        <div className="space-y-1">
          <p className="text-[12px] font-semibold uppercase tracking-[1.2px] text-[#e9831a] lg:text-[16px] lg:tracking-[1.6px]">CUSTODIANSHIP &amp; SUBSCRIPTION</p>
          <h2 className={`text-[24px] leading-8 tracking-[-0.28px] text-[#07241a] lg:text-[28px] lg:leading-9 `}>Archival Storage &amp; Member Privileges</h2>
        </div>
        <span className="flex items-center gap-2 text-[13px] font-semibold tracking-[0.39px] text-[#07241a]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#07241a]" /> Active Patronage Status
        </span>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[360fr_402fr_347fr] lg:gap-10">
        <StorageColumn cacheGb={cacheGb} autoSync={settings.autoSync} onAutoSync={() => onToggle("autoSync")} onPurge={onPurge} />
        <MembershipColumn onBilling={onBilling} />
        <div className="md:col-span-2 lg:col-span-1"><PrivacyColumn settings={settings} onToggle={onToggle} /></div>
      </div>
    </section>
  );
}

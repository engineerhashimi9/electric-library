import { Cloud, CreditCard, ShieldCheck, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import Toggle from "@/component/ui/Toggle";
import ProgressBar from "@/component/ui/ProgressBar";
import { privacyOptions, STORAGE_TOTAL_GB } from "./profile";

const privacyLabels = {
  publicFolio: {
    title: { en: "Public Scholar Folio", fa: "برگه عمومی پژوهشگر" },
    desc: { en: "Allow other registered archive scholars to view reading shelves", fa: "امکان مشاهده قفسه‌های مطالعه توسط سایر پژوهشگران آرشیو" },
  },
  communalLayer: {
    title: { en: "Marginalia Communal Layer", fa: "لایه عمومی حاشیه‌نویسی" },
    desc: { en: "Make annotated chapter notes discoverable in public monographs", fa: "قابل کشف ساختن یادداشت‌های فصول در رساله‌های پژوهشی همگانی" },
  },
  analyticsSharing: {
    title: { en: "Pacing Analytics Sharing", fa: "اشتراک‌گذاری آمار سرعت مطالعه" },
    desc: { en: "Share anonymous reading metrics with archive research studies", fa: "به اشتراک‌گذاری داده‌های آماری ناشناس برای پژوهش‌های کتابخانه‌ای" },
  },
};

const ColTitle = ({ icon: Icon, children }) => (
  <h3 className="flex items-center gap-2 text-[17px] font-bold tracking-[-0.09px] text-[#0E6760] lg:text-[18px] lg:leading-[26px]">
    <Icon className="h-[18px] w-[18px] text-[#17A296]" /> {children}
  </h3>
);

function StorageColumn({ cacheGb, autoSync, onAutoSync, onPurge }) {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <ColTitle icon={Cloud}>{t("profile.settings.storageTitle")}</ColTitle>

      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[13px] font-medium text-[#4A6B68]">Cached Reading Volumes</span>
          <span className="text-[13px] font-bold tracking-[0.39px] text-[#0E6760]">{cacheGb.toFixed(1)} GB / {STORAGE_TOTAL_GB.toFixed(1)} GB</span>
        </div>
        <ProgressBar percent={(cacheGb / STORAGE_TOTAL_GB) * 100} bgColor="#17A296" />
        <p className="text-[13px] leading-5 text-[#4A6B68]">{t("profile.settings.storageDesc")}</p>
      </div>

      <div className="flex items-center justify-between gap-3 rounded-xl bg-[#E6F4F3] border border-[#D0E8E6] p-4">
        <div className="min-w-0">
          <p className="text-[13px] font-bold tracking-[0.39px] text-[#0E6760]">{t("profile.settings.autoSync")}</p>
          <p className="text-[13px] leading-5 text-[#4A6B68]">Real-time sync to Oxford Vault</p>
        </div>
        <Toggle checked={autoSync} onChange={onAutoSync} label={t("profile.settings.autoSync")} />
      </div>

      <button onClick={onPurge} className="flex items-center gap-1 text-[12px] font-semibold text-[#4A6B68] hover:text-[#0E6760] transition hover:underline active:scale-95">
        <Trash2 className="h-3 w-3" /> {t("profile.settings.purge")}
      </button>
    </div>
  );
}

function MembershipColumn({ onBilling }) {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <ColTitle icon={CreditCard}>{t("profile.settings.grantTitle")}</ColTitle>

      <div className="space-y-3 rounded-xl bg-[#E6F4F3] border border-[#D0E8E6] p-5">
        <div className="flex items-center justify-between">
          <span className="text-[12px] uppercase tracking-[1.6px] text-[#236D64] lg:text-[14px]">TIER GRADE</span>
          <span className="rounded bg-[#FFFFFF] border border-[#D0E8E6] px-2 py-0.5 text-[13px] text-[#236D64] font-bold lg:text-[14px]">Subsidized</span>
        </div>
        <p className="text-[20px] leading-7 text-[#0E6760] font-sans font-bold">{t("activeFellowship")}</p>
        <p className="text-[13px] leading-5 text-[#4A6B68]">
          {t("profile.settings.grantDesc")}
        </p>
      </div>

      <div className="flex items-center justify-between py-1">
        <span className="text-[14px] text-[#4A6B68]">Next Annual Review:</span>
        <span className="text-[13px] font-bold tracking-[0.39px] text-[#0E6760]">{t("profile.settings.reviewDate")}</span>
      </div>

      <button onClick={onBilling} className="w-full rounded-xl bg-[#17A296] hover:bg-[#0E6760] px-4 py-2.5 text-[15px] font-bold text-[#FFFFFF] transition active:scale-95 lg:text-[16px]">
        {t("profile.settings.manageBilling")}
      </button>
    </div>
  );
}

function PrivacyColumn({ settings, onToggle }) {
  const { t, i18n } = useTranslation();
  const isFa = i18n.language === "fa";

  return (
    <div className="space-y-5">
      <ColTitle icon={ShieldCheck}>{t("profile.settings.privacyTitle")}</ColTitle>

      <div className="space-y-4">
        {privacyOptions.map(({ key, title, desc }) => {
          const locTitle = privacyLabels[key] ? (isFa ? privacyLabels[key].title.fa : privacyLabels[key].title.en) : title;
          const locDesc = privacyLabels[key] ? (isFa ? privacyLabels[key].desc.fa : privacyLabels[key].desc.en) : desc;

          return (
            <div key={key} className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[13px] font-bold tracking-[0.39px] text-[#0E6760]">{locTitle}</p>
                <p className="text-[13px] leading-5 text-[#4A6B68]">{locDesc}</p>
              </div>
              <div className="pt-1"><Toggle checked={settings[key]} onChange={() => onToggle(key)} label={locTitle} /></div>
            </div>
          );
        })}
      </div>

      <a href="#" className="block text-[12px] text-[#17A296] underline underline-offset-2 transition hover:text-[#0E6760]">
        {t("profile.settings.charter")}
      </a>
    </div>
  );
}

export default function SettingsPanel({ settings, onToggle, cacheGb, onPurge, onBilling }) {
  const { t } = useTranslation();

  return (
    <section id="account-settings" className="scroll-mt-24 rounded-2xl bg-[#FFFFFF] border border-[#D0E8E6] p-5 shadow-sm sm:p-8 lg:px-10 lg:pb-10 lg:pt-14 text-[#0A2E2C]">
      <div className="flex flex-col gap-3 pb-6 sm:flex-row sm:items-center sm:justify-between lg:pb-8">
        <div className="space-y-1">
          <p className="text-[12px] font-bold uppercase tracking-[1.2px] text-[#236D64] lg:text-[16px] lg:tracking-[1.6px]">CUSTODIANSHIP &amp; SUBSCRIPTION</p>
          <h2 className="text-[24px] leading-8 tracking-[-0.28px] text-[#0E6760] font-sans font-bold lg:text-[28px] lg:leading-9">
            {t("profile.settings.title")}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        <StorageColumn cacheGb={cacheGb} autoSync={settings.autoSync} onAutoSync={() => onToggle("autoSync")} onPurge={onPurge} />
        <MembershipColumn onBilling={onBilling} />
        <PrivacyColumn settings={settings} onToggle={onToggle} />
      </div>
    </section>
  );
}

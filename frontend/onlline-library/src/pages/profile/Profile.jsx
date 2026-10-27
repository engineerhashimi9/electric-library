// src/pages/profile/Profile.jsx
import DossierHeader from "./DossierHeader";
import ProfileHero from "./ProfileHero";
import StatsGrid from "./StatsGrid";
import AnalyticsSection from "./AnalyticsSection";
import HonorsSection from "./HonorsSection";
import SettingsPanel from "./SettingsPanel";
import EditProfileModal from "./EditProfileModal";
import Toast from "@/component/ui/Toast";
import useProfile from "@/hooks/useProfile";

export default function Profile() {
  const p = useProfile();

  return (
    <div className="min-h-screen bg-[#F4FAFA] pb-24 text-[#0A2E2C] md:pb-0">
      <main className="mx-auto flex max-w-[1440px] flex-col gap-6 px-4 pb-12 pt-4 sm:px-6 md:px-8 lg:gap-8 lg:py-8 xl:px-12">
        <DossierHeader lastArchived={p.lastArchived} onSync={p.syncArchive} />
        <ProfileHero
          name={p.name}
          onEdit={p.openEdit}
          onSettings={p.openAccountSettings}
          onExport={p.exportData}
        />
        <StatsGrid />
        <AnalyticsSection
          range={p.range}
          onRange={p.setRange}
          series={p.series}
        />
        <HonorsSection />
        <SettingsPanel
          settings={p.settings}
          onToggle={p.toggleSetting}
          cacheGb={p.cacheGb}
          onPurge={p.purgeCache}
          onBilling={p.manageBilling}
        />
      </main>
      <EditProfileModal
        open={p.editing}
        name={p.name}
        onClose={p.closeEdit}
        onSave={p.saveName}
      />
      <Toast toast={p.toast} onClose={p.closeToast} onUndo={() => {}} />
    </div>
  );
}
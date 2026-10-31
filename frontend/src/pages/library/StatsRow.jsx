import { TrendingUp, Flame, Timer, BookOpen, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import StatCard from "./StatCard";
import ProgressBar from "@/component/ui/ProgressBar";

const SplitFooter = ({ left, right }) => (
  <div className="flex items-center justify-between text-[11px] tracking-wide">
    <span className="font-bold text-[#4A6B68]">{left}</span>
    <span className="font-semibold text-[#0E6760]">{right}</span>
  </div>
);

export default function StatsRow() {
  const { t } = useTranslation();

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        label={t("library.stats.journey")}
        badge={t("library.stats.journeyGoal")}
        value="28"
        unit={t("library.stats.journeyUnit")}
        footer={
          <div className="space-y-1.5">
            <ProgressBar percent={80} bgColor="#17A296" />
            <p className="flex items-center gap-1 text-[11px] font-bold tracking-wide text-[#4A6B68]">
              <TrendingUp className="h-3 w-3 text-[#17A296]" /> {t("library.stats.journeyPace")}
            </p>
          </div>
        }
      />
      <StatCard
        label={t("library.stats.streak")}
        icon={Flame}
        value="14"
        unit={t("library.stats.streakUnit")}
        footer={
          <SplitFooter
            left={t("library.stats.historicalApex")}
            right={t("library.stats.historicalApexVal")}
          />
        }
      />
      <StatCard
        label={t("library.stats.immersion")}
        icon={Timer}
        value="142"
        unit={t("library.stats.immersionUnit")}
        footer={
          <p className="flex items-center gap-1 text-[11px] font-bold tracking-wide text-[#4A6B68]">
            <Clock className="h-3 w-3 text-[#17A296]" /> {t("library.stats.immersionAccrued")}
          </p>
        }
      />
      <StatCard
        label={t("library.stats.folios")}
        icon={BookOpen}
        value="18,450"
        unit={t("library.stats.foliosUnit")}
        footer={
          <SplitFooter
            left={t("library.stats.marginaliaInscribed")}
            right={t("library.stats.marginaliaInscribedVal")}
          />
        }
      />
    </section>
  );
}

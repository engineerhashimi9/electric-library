import { TrendingUp, Flame, Timer, BookOpen, Clock } from "lucide-react";
import StatCard from "./StatCard";
import ProgressBar from "@/component/ui/ProgressBar";

const SplitFooter = ({ left, right }) => (
  <div className="flex items-center justify-between text-[11px] tracking-wide">
    <span className="font-bold text-ink-soft">{left}</span>
    <span className="font-semibold text-leaf-950">{right}</span>
  </div>
);

export default function StatsRow() {
  return (
    <section className="flex gap-4">
      <StatCard
        label="2024 ARCHIVAL JOURNEY"
        badge="Goal 35"
        value="28"
        textColor="#07241A"
        unit="/ 35 titles (80%)"
        footer={
          <div className="space-y-1.5">
            <ProgressBar bgColor="#1E3A2F" percent={80} />
            <p className="flex items-center gap-1 text-[11px] font-bold tracking-wide text-leaf-950">
              <TrendingUp className="h-3 w-3" /> 2 books ahead of cadence
            </p>
          </div>
        }
      />
      <StatCard
        label="DIALECTICAL STREAK"
        icon={Flame}
        value="14"
        iconColor="#9A4522"
        textColor="#9A4522"
        valueTone="text-leaf-600"
        unit="Consecutive Days"
        footer={<SplitFooter left="Historical Apex" right="31 Days" />}
      />
      <StatCard
        label="ARCHIVAL IMMERSION"
        icon={Timer}
        value="142"
        unit="Hours Total"
        textColor="#07241A"
        footer={
          <p className="flex items-center gap-1 text-[11px] font-bold tracking-wide text-leaf-700">
            <Clock className="h-3 w-3" /> +18.5h accrued this month
          </p>
        }
      />
      <StatCard
        label="ENGAGED FOLIOS"
        icon={BookOpen}
        value="18,450"
        textColor="#07241A"
        unit="Pages"
        footer={<SplitFooter left="Marginalia Inscribed" right="246 Glosses" />}
      />
    </section>
  );
}

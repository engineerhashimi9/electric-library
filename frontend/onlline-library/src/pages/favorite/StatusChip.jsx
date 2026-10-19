import { CheckCircle2, Archive, Clock } from "lucide-react";

const tones = {
  available: { box: "bg-[#e6f2ea] text-[#304c41]", icon: CheckCircle2 },
  low: { box: "bg-[#fdeee8] text-[#9a4522]", icon: Archive },
  audio: { box: "bg-[#f5f3f0] text-[#1b1c1a]", icon: Clock },
};

export default function StatusChip({ status, badge }) {
  const { box, icon: Icon } = tones[status.type];
  const label = status.type === "audio" ? `${badge} • ${status.label}` : status.label;
  return (
    <p className={`mb-3 flex items-center gap-2 rounded-xl px-2.5 py-2.5 text-[12px] leading-4 ${box}`}>
      <Icon className="h-3.5 w-3.5 shrink-0" />
      <span className="line-clamp-2">{label}</span>
    </p>
  );
}

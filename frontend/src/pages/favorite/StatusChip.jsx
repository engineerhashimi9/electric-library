import { CheckCircle2, Archive, Clock } from "lucide-react";

const tones = {
  available: { box: "bg-[#E6F4F3] border border-[#D0E8E6] text-[#236D64]", icon: CheckCircle2 },
  low: { box: "bg-[#E6F4F3] border border-[#D0E8E6] text-[#4A6B68]", icon: Archive },
  audio: { box: "bg-[#E6F4F3] border border-[#D0E8E6] text-[#236D64]", icon: Clock },
};

export default function StatusChip({ status, badge }) {
  const { box, icon: Icon } = (status && tones[status.type]) || tones.available;
  const label = status?.type === "audio" ? `${badge || ""} • ${status?.label || ""}` : (status?.label || "");
  return (
    <p className={`mb-3 flex items-center gap-2 rounded-xl px-2.5 py-2.5 text-[12px] leading-4 ${box}`}>
      <Icon className="h-3.5 w-3.5 shrink-0" />
      <span className="line-clamp-2">{label}</span>
    </p>
  );
}

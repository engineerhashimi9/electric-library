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
    <p className={`flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold leading-normal ${box}`}>
      <Icon className="h-4 w-4 shrink-0 text-[#17A296]" aria-hidden="true" />
      <span className="line-clamp-2">{label}</span>
    </p>
  );
}

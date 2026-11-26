import React from "react";
import { CheckCircle2, Archive, Clock } from "lucide-react";

const tones = {
  available: { icon: CheckCircle2 },
  low: { icon: Archive },
  audio: { icon: Clock },
};

export default function StatusChip({ status, badge }) {
  const { icon: Icon } = (status && tones[status.type]) || tones.available;
  const label = status?.type === "audio" ? `${badge || ""} • ${status?.label || ""}` : (status?.label || "");

  return (
    <span className="badge badge-sage" style={{ textTransform: "none", letterSpacing: "normal" }}>
      <Icon size={13} style={{ color: "var(--primary-light)" }} aria-hidden="true" />
      <span className="truncate">{label}</span>
    </span>
  );
}

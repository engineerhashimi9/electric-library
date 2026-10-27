const tones = {
  available: { dot: "bg-[#10B981]", text: "text-[#0D5C46] font-bold" },
  audio: { dot: "bg-[#6B9080]", text: "text-[#52665E] font-bold" },
  low: { dot: "bg-[#10B981]", text: "text-[#0D5C46] font-semibold" },
};

export default function StatusLine({ status, meta, className = "" }) {
  const t = (status && tones[status.type]) || tones.available;
  return (
    <div className={`flex items-center justify-between gap-2 text-[11px] tracking-[0.66px] ${className}`}>
      <span className={`flex items-center gap-1.5 ${t.text}`}>
        <span className={`h-2 w-2 shrink-0 rounded-full ${t.dot}`} /> {status?.label || ""}
      </span>
      <span className="whitespace-nowrap font-bold text-[#52665E]">{meta}</span>
    </div>
  );
}

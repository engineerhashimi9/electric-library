const tones = {
  available: { dot: "bg-[#17A296]", text: "text-[#236D64] font-bold" },
  audio: { dot: "bg-[#236D64]", text: "text-[#4A6B68] font-bold" },
  low: { dot: "bg-[#17A296]", text: "text-[#236D64] font-semibold" },
};

export default function StatusLine({ status, meta, className = "" }) {
  const t = (status && tones[status.type]) || tones.available;
  return (
    <div className={`flex items-center justify-between gap-2 text-[11px] tracking-[0.66px] ${className}`}>
      <span className={`flex items-center gap-1.5 ${t.text}`}>
        <span className={`h-2 w-2 shrink-0 rounded-full ${t.dot}`} /> {status?.label || ""}
      </span>
      <span className="whitespace-nowrap font-bold text-[#4A6B68]">{meta}</span>
    </div>
  );
}

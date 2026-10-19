const tones = {
  available: { dot: "bg-[#304c41]", text: "text-[#304c41] font-bold" },
  audio: { dot: "bg-[#304c41]", text: "text-[#304c41] font-bold" },
  low: { dot: "bg-[#9a4522]", text: "text-[#9a4522] font-semibold" },
};

export default function StatusLine({ status, meta, className = "" }) {
  const t = tones[status.type];
  return (
    <div className={`flex items-center justify-between gap-2 text-[11px] tracking-[0.66px] ${className}`}>
      <span className={`flex items-center gap-1.5 ${t.text}`}>
        <span className={`h-2 w-2 shrink-0 rounded-full ${t.dot}`} /> {status.label}
      </span>
      <span className="whitespace-nowrap font-bold text-[#727974]">{meta}</span>
    </div>
  );
}

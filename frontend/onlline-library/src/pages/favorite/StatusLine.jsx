const tones = {
  available: { dot: "bg-leaf-700", text: "text-leaf-700 font-bold" },
  audio: { dot: "bg-leaf-700", text: "text-leaf-700 font-bold" },
  low: { dot: "bg-leaf-500", text: "text-leaf-600 font-semibold" },
};

export default function StatusLine({ status, meta }) {
  const t = tones[status.type];
  return (
    <div className="flex items-center justify-between text-[11px] tracking-wide">
      <span className={`flex items-center gap-1.5 ${t.text}`}>
        <span className={`h-2 w-2 rounded-full ${t.dot}`} /> {status.label}
      </span>
      <span className="font-bold text-ink-mute">{meta}</span>
    </div>
  );
}

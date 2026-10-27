export default function ProgressBar({ percent, tone = "primary", bgColor, color, height = "h-1.5" }) {
  const fillColor = color || (tone === "accent" ? "#6B9080" : "#10B981");
  return (
    <div className={`${height} w-full bg-[#EAF4F0] border border-[#DDECE6] overflow-hidden rounded-full`}>
      <div
        className="h-full rounded-full transition-all duration-300"
        style={{
          width: `${percent}%`,
          backgroundColor: bgColor || fillColor,
        }}
      />
    </div>
  );
}

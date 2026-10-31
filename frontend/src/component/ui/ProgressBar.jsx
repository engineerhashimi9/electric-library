export default function ProgressBar({ percent, tone = "primary", bgColor, color, height = "h-1.5" }) {
  const fillColor = color || (tone === "accent" ? "#236D64" : "#17A296");
  return (
    <div className={`${height} w-full bg-[#E6F4F3] border border-[#D0E8E6] overflow-hidden rounded-full`}>
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

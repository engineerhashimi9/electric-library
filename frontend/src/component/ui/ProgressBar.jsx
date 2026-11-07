export default function ProgressBar({
  percent = 0,
  tone = "primary",
  bgColor,
  color,
  height = "h-2",
  label = "Progress",
}) {
  const safePercent = Math.min(100, Math.max(0, Number(percent) || 0));
  const fillColor = color || (tone === "accent" ? "#236D64" : "#17A296");

  return (
    <div
      role="progressbar"
      aria-valuenow={safePercent}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
      className={`${height} w-full bg-[#E6F4F3] border border-[#D0E8E6] overflow-hidden rounded-full`}
    >
      <div
        className="h-full rounded-full transition-all duration-300"
        style={{
          width: `${safePercent}%`,
          backgroundColor: bgColor || fillColor,
        }}
      />
    </div>
  );
}

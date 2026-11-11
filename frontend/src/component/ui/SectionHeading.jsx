export default function SectionHeading({ eyebrow, title, right, className = "" }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between ${className}`}>
      <div className="space-y-1.5">
        {eyebrow && (
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-[#236D64]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#17A296] shrink-0" aria-hidden="true" />
            {eyebrow}
          </p>
        )}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#0E6760] leading-snug">
          {title}
        </h2>
      </div>
      {right && <div className="shrink-0">{right}</div>}
    </div>
  );
}

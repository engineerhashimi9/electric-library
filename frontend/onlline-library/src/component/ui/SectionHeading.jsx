

// eyebrow نارنجی + تیتر Newsreader (مثل Figma)
export default function SectionHeading({ eyebrow, title, right }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div className="space-y-1">
        <p className="text-[12px] font-semibold uppercase tracking-[1.2px] text-[#e9831a] lg:text-[16px] lg:tracking-[1.6px]">{eyebrow}</p>
        <h2 className={`text-[24px] leading-8 tracking-[-0.28px] text-[#07241a] lg:text-[28px] lg:leading-9 `}>{title}</h2>
      </div>
      {right}
    </div>
  );
}

export default function SectionHeading({ eyebrow, title, right }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div className="space-y-1">
        <p className="text-[12px] font-bold uppercase tracking-[1.2px] text-[#6B9080] lg:text-[14px] lg:tracking-[1.6px]">{eyebrow}</p>
        <h2 className="text-[24px] font-bold leading-8 tracking-[-0.28px] text-[#09261C] lg:text-[28px] lg:leading-9">{title}</h2>
      </div>
      {right}
    </div>
  );
}

export default function SectionTitle({ icon: Icon, children, right }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-[#10B981]" />
        <h2 className="text-[20px] font-bold leading-7 text-[#09261C]">{children}</h2>
      </div>
      {right}
    </div>
  );
}

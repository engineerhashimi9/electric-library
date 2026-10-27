export default function StatCard({ label, badge, icon: Icon, value, unit, footer }) {
  return (
    <div className="flex min-h-[124px] flex-1 flex-col justify-between rounded-xl bg-[#FFFFFF] border border-[#E2EFEA] p-4 shadow-sm text-[#111C18]">
      <div className="flex items-start justify-between">
        <p className="text-[11px] font-bold uppercase tracking-[0.05em] text-[#6B9080]">{label}</p>
        {badge && (
          <span className="rounded-full bg-[#EAF4F0] border border-[#DDECE6] px-2 py-0.5 text-[11px] font-bold tracking-wide text-[#0D5C46]">{badge}</span>
        )}
        {Icon && <Icon className="h-4 w-4 text-[#10B981]" />}
      </div>

      <p className="flex items-baseline gap-2 py-2">
        <span className="text-[27px] leading-9 tracking-tight font-bold text-[#09261C]">{value}</span>
        <span className="text-[14px] text-[#52665E]">{unit}</span>
      </p>

      {footer}
    </div>
  );
}

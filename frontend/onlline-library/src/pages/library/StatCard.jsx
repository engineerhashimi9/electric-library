export default function StatCard({ label, badge, icon: Icon, value, unit, footer }) {
  return (
    <div className="flex min-h-[124px] flex-1 flex-col justify-between rounded-xl bg-[#FFFFFF] border border-[#D0E8E6] p-4 shadow-sm text-[#0A2E2C]">
      <div className="flex items-start justify-between">
        <p className="text-[11px] font-bold uppercase tracking-[0.05em] text-[#236D64]">{label}</p>
        {badge && (
          <span className="rounded-full bg-[#E6F4F3] border border-[#D0E8E6] px-2 py-0.5 text-[11px] font-bold tracking-wide text-[#236D64]">{badge}</span>
        )}
        {Icon && <Icon className="h-4 w-4 text-[#17A296]" />}
      </div>

      <p className="flex items-baseline gap-2 py-2">
        <span className="text-[27px] leading-9 tracking-tight font-bold text-[#0E6760]">{value}</span>
        <span className="text-[14px] text-[#4A6B68]">{unit}</span>
      </p>

      {footer}
    </div>
  );
}

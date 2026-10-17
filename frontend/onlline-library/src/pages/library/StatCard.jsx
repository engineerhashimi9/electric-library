export default function StatCard({ label, iconColor,textColor,badge, icon: Icon, value, valueTone = "text-leaf-950", unit, footer }) {
  return (
    <div className="flex min-h-[124px] flex-1 flex-col justify-between rounded-xl bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <p className="text-[11px] font-bold uppercase text-[#424844] tracking-[0.05em] text-ink-soft">{label}</p>
        {badge && (
          <span className="rounded-full bg-[#EAE8E5] px-2 py-0.5 text-[11px] font-bold tracking-wide text-leaf-950">{badge}</span>
        )}
        {Icon && <Icon className={`h-4 w-4 text-ink-soft text-[${iconColor}]`} />}
      </div>

      <p className="flex items-baseline gap-2 py-2">
        <span className={`text-[${textColor}]  text-[27px] leading-9 tracking-tight ${valueTone}`}>{value}</span>
        <span className="text-[17px] text-ink-soft">{unit}</span>
      </p>

      {footer}
    </div>
  );
}

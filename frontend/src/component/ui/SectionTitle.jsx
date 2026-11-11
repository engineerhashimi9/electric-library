export default function SectionTitle({ icon: Icon, children, right, className = "" }) {
  return (
    <div className={`flex items-center justify-between gap-4 ${className}`}>
      <div className="flex items-center gap-2.5">
        {Icon && <Icon className="h-5 w-5 text-[#17A296] shrink-0" aria-hidden="true" />}
        <h2 className="text-lg sm:text-xl font-extrabold leading-snug text-[#0E6760]">{children}</h2>
      </div>
      {right && <div className="shrink-0">{right}</div>}
    </div>
  );
}

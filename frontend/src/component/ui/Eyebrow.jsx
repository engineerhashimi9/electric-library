export default function Eyebrow({ children, className = "" }) {
  return (
    <p className={`flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-[#236D64] ${className}`}>
      <span className="h-2 w-2 rounded-full bg-[#17A296] shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}

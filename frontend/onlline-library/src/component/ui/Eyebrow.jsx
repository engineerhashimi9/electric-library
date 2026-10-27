export default function Eyebrow({ children }) {
  return (
    <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[#6B9080]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" /> {children}
    </p>
  );
}

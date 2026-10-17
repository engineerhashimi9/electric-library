export default function Eyebrow({ children }) {
  return (
    <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-leaf-600">
      <span className="h-1.5 w-1.5 rounded-full bg-leaf-600" /> {children}
    </p>
  );
}

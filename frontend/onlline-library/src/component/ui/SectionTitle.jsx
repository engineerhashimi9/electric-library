export default function SectionTitle({ icon: Icon, children, right }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-leaf-950" />
        <h2 className="font-serif text-[20px] leading-7 text-leaf-950">{children}</h2>
      </div>
      {right}
    </div>
  );
}

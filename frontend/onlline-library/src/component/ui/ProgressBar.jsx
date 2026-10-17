export default function ProgressBar({ percent, tone = "primary",bgColor }) {
  const fill = tone === "accent" ? "bg-leaf-600" : "bg-leaf-800";
  return (
    <div className="h-1.5 w-full bg-[#EAE8E5] overflow-hidden rounded-full  ">
      <div className={`h-full rounded-full bg-[${bgColor}] ${fill}`} style={{ width: `${percent}%` }} />
    </div>
  );
}

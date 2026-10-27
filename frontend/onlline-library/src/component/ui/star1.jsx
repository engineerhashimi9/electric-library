import { Star } from "lucide-react";

export default function StarRating({ value, max = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={`h-3 w-3 ${i < value ? "fill-[#10B981] text-[#10B981]" : "fill-transparent text-[#DDECE6]"}`}
        />
      ))}
      <span className="pl-1 text-[11px] font-bold tracking-wide text-[#111C18]">{value.toFixed(1)}</span>
    </div>
  );
}

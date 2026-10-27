import { Star } from "lucide-react";

export default function StarRating({ value, max = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={`h-3 w-3 ${i < value ? "fill-[#17A296] text-[#17A296]" : "fill-transparent text-[#D0E8E6]"}`}
        />
      ))}
      <span className="pl-1 text-[11px] font-bold tracking-wide text-[#0A2E2C]">{value.toFixed(1)}</span>
    </div>
  );
}

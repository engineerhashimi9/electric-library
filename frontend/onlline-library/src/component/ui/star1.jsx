import { Star } from "lucide-react";

export default function StarRating({ value, max = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={`h-3 w-3 ${i < value ? "fill-[#E9831A] " : "fill-leaf-100 "}`}
        />
      ))}
      <span className="pl-1 text-[11px] font-semibold tracking-wide text-leaf-950">{value.toFixed(1)}</span>
    </div>
  );
}

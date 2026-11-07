import { Star } from "lucide-react";

export default function StarDisplay({ value = 0, max = 5, size = 13, showValue = true, className = "" }) {
  const numValue = Number(value) || 0;

  return (
    <div
      role="img"
      aria-label={`Rating: ${numValue.toFixed(1)} out of ${max} stars`}
      className={`inline-flex items-center gap-1 ${className}`}
    >
      <div className="flex items-center gap-0.5">
        {Array.from({ length: max }).map((_, i) => (
          <Star
            key={i}
            size={size}
            className={
              i < Math.round(numValue)
                ? "fill-[#17A296] text-[#17A296]"
                : "fill-transparent text-[#D0E8E6]"
            }
          />
        ))}
      </div>
      {showValue && (
        <span className="ps-1 text-xs font-bold text-[#0A2E2C]">
          {numValue.toFixed(1)}
        </span>
      )}
    </div>
  );
}

export { StarDisplay as StarRating };

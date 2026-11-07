import { useState } from "react";
import { Star } from "lucide-react";

export default function StarRating({
  maxRating = 5,
  value,
  onChange,
  readOnly = false,
  size = 20,
  className = "",
}) {
  const [internalValue, setInternalValue] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const currentRating = value !== undefined ? value : internalValue;
  const activeRating = hoverRating || currentRating;

  const handleClick = (rating) => {
    if (readOnly) return;
    if (onChange) onChange(rating);
    else setInternalValue(rating);
  };

  const handleKeyDown = (e, rating) => {
    if (readOnly) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick(rating);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleClick(Math.min(maxRating, currentRating + 1));
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      handleClick(Math.max(1, currentRating - 1));
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label="Rating"
      className={`inline-flex items-center gap-2 ${className}`}
    >
      <div className="flex items-center gap-1">
        {Array.from({ length: maxRating }, (_, i) => {
          const starValue = i + 1;
          const isFilled = starValue <= activeRating;

          return (
            <button
              key={i}
              type="button"
              role="radio"
              aria-checked={currentRating === starValue}
              aria-label={`${starValue} star${starValue > 1 ? "s" : ""}`}
              tabIndex={readOnly ? -1 : 0}
              disabled={readOnly}
              onMouseEnter={() => !readOnly && setHoverRating(starValue)}
              onMouseLeave={() => !readOnly && setHoverRating(0)}
              onClick={() => handleClick(starValue)}
              onKeyDown={(e) => handleKeyDown(e, starValue)}
              className="p-0.5 rounded transition hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] disabled:pointer-events-none"
            >
              <Star
                size={size}
                className={
                  isFilled
                    ? "fill-[#17A296] text-[#17A296]"
                    : "fill-transparent text-[#D0E8E6]"
                }
              />
            </button>
          );
        })}
      </div>
      <span className="text-xs sm:text-sm font-bold text-[#0A2E2C]">
        {activeRating} / {maxRating}
      </span>
    </div>
  );
}

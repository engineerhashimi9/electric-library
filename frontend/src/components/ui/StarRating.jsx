import { useState } from "react";
import { Star } from "lucide-react";

export default function StarRating({
  maxRating = 5,
  max,
  value = 0,
  onChange,
  readOnly = false,
  size = 16,
  showValue = true,
  className = "",
}) {
  const [internalValue, setInternalValue] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const effectiveMax = max || maxRating || 5;
  const currentRating = value !== undefined ? Number(value) : internalValue;
  const activeRating = hoverRating || currentRating;
  const isInteractive = !readOnly && typeof onChange === "function";

  const handleClick = (rating) => {
    if (!isInteractive) return;
    onChange(rating);
  };

  return (
    <div
      role={isInteractive ? "radiogroup" : "img"}
      aria-label={`Rating: ${Number(currentRating).toFixed(1)} out of ${effectiveMax} stars`}
      className={`star-rating-group ${className}`}
    >
      <div className="star-rating-stars">
        {Array.from({ length: effectiveMax }, (_, i) => {
          const starValue = i + 1;
          const isFilled = starValue <= Math.round(activeRating);

          if (!isInteractive) {
            return (
              <Star
                key={i}
                size={size}
                className={isFilled ? "star-filled" : "star-empty"}
              />
            );
          }

          return (
            <button
              key={i}
              type="button"
              role="radio"
              aria-checked={currentRating === starValue}
              aria-label={`${starValue} star${starValue > 1 ? "s" : ""}`}
              tabIndex={0}
              onMouseEnter={() => setHoverRating(starValue)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => handleClick(starValue)}
              className="star-button"
            >
              <Star
                size={size}
                className={isFilled ? "star-filled" : "star-empty"}
              />
            </button>
          );
        })}
      </div>
      {showValue && (
        <span className="star-score-text">
          {Number(currentRating).toFixed(1)}
        </span>
      )}
    </div>
  );
}

export { StarRating as StarDisplay };

import { useState } from "react";

export default function Star({ maxRating = 5 }) {
  const [countStar, setCountStar] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const star = Array.from({ length: maxRating }, (_, i) => {
    const rating = hoverRating || countStar;
    const isFilled = i < rating;

    return (
      <span
        onMouseEnter={() => setHoverRating(i + 1)}
        onMouseLeave={() => setHoverRating(0)}
        className="cursor-pointer"
        role="button"
        key={i}
      >
        {isFilled ? (
          <svg
            onClick={() => setCountStar(i + 1)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className={`w-5 h-5 fill-[#fcc419] `}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ) : (
          <svg
            onClick={() => setCountStar(i + 1)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-[#fcc419] w-5 h-5  "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        )}
      </span>
    );
  });
  return (
    <div className="">
      <div className="flex gap-2    ">
        <div className="flex items-center  ">{star} </div>
        <p className={` text-[#1B1C1A]`}>{hoverRating || countStar}</p>
      </div>
    </div>
  );
}

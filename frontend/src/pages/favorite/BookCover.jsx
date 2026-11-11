import { useState } from "react";
import { BookOpen } from "lucide-react";

export default function BookCover({ cover, title, className = "" }) {
  const [failed, setFailed] = useState(false);
  const src = cover
    ? cover.startsWith("/") || cover.startsWith("http")
      ? cover
      : `/${cover}`
    : "";

  if (failed || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-[#E6F4F3] border border-[#D0E8E6] p-4 text-center text-xs sm:text-sm text-[#0E6760] font-bold ${className}`}
      >
        <BookOpen className="h-6 w-6 text-[#17A296] opacity-80" aria-hidden="true" />
        <span className="line-clamp-2">{typeof title === "string" ? title : "Cover"}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={typeof title === "string" ? title : "Book cover"}
      onError={() => setFailed(true)}
      loading="lazy"
      className={`h-full w-full object-cover ${className}`}
    />
  );
}

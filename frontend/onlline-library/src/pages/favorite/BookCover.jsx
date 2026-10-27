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
        className={`flex flex-col items-center justify-center gap-2 bg-[#EAF4F0] border border-[#DDECE6] p-4 text-center text-[14px] text-[#09261C] font-sans font-bold ${className}`}
      >
        <BookOpen className="h-6 w-6 text-[#10B981] opacity-70" />
        <span className="line-clamp-3">{title}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={typeof title === "string" ? title : "Book cover"}
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}

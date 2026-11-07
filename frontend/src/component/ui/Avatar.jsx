import { useState } from "react";
import { getLocalized } from "@/utils/langHelper";

const getInitials = (name) => {
  const str = typeof name === "object" ? getLocalized(name) : String(name || "");
  if (!str.trim()) return "A";
  const parts = str.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return str.slice(0, 2).toUpperCase();
};

export default function Avatar({ name, photo, className = "h-10 w-10" }) {
  const [failed, setFailed] = useState(false);
  const displayName = typeof name === "object" ? getLocalized(name) : (name || "Avatar");

  const src = photo
    ? photo.startsWith("/") || photo.startsWith("http")
      ? photo
      : `/${photo}`
    : "";

  if (failed || !src) {
    return (
      <span
        role="img"
        aria-label={displayName}
        className={`flex items-center justify-center bg-[#E6F4F3] border border-[#D0E8E6] font-bold text-[#0E6760] select-none rounded-full ${className}`}
      >
        {getInitials(name)}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={displayName}
      onError={() => setFailed(true)}
      className={`object-cover rounded-full ${className}`}
    />
  );
}

import { useState } from "react";

const getInitials = (name) => {
  if (!name || typeof name !== "string") return "A";
  return name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
};

export default function Avatar({ name, photo, className = "" }) {
  const [failed, setFailed] = useState(false);
  const src = photo
    ? photo.startsWith("/") || photo.startsWith("http")
      ? photo
      : `/${photo}`
    : "";

  if (failed || !src) {
    return (
      <span
        className={`flex items-center justify-center bg-[#E6F4F3] border border-[#D0E8E6] font-bold text-[#0E6760] ${className}`}
      >
        {getInitials(name)}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={typeof name === "string" ? name : "Avatar"}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}

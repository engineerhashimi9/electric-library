import { useState } from "react";


const initials = (name) => name.split(" ").map((w) => w[0]).slice(0, 2).join("");

// اگر عکس لود نشد، حروف اول اسم نمایش داده می‌شود
export default function Avatar({ name, photo, className = "" }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <span className={`flex items-center justify-center bg-leaf-200 font-serif font-semibold text-leaf-900 ${className}`}>
      {initials(name)}
    </span>
  ) : (
    // <img src={img(photo)} alt={name} onError={() => setFailed(true)} className={`object-cover ${className}`} />
    ""
  );
}

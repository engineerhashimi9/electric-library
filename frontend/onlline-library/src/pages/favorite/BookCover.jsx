import { useState } from "react";
// import { img } from "../../data/img";

// اگر عکس لود نشد، یک کاور ساده با عنوان کتاب نمایش داده می‌شود
export default function BookCover({ cover, title, className = "" }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className={`flex items-center justify-center bg-gradient-to-br from-leaf-200 to-leaf-400 p-4 text-center font-serif text-[16px] text-leaf-950 ${className}`}>
      {title}
    </div>
  ) : (
    // <img src={img(cover)} alt={title} onError={() => setFailed(true)} className={`object-cover ${className}`} />
    ""
  );
}

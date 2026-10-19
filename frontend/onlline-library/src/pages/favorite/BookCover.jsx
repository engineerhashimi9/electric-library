import { useState } from "react";
// import { img } from "../../data/img";
// import { serif } from "../../styles/fonts";

// اگر عکس لود نشد، یک کاور ساده با عنوان نمایش داده می‌شود
export default function BookCover({ cover, title, className = "" }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className={`flex items-center justify-center bg-gradient-to-br from-[#1e3a2f] to-[#07241a] p-4 text-center text-[16px] text-[#fbf9f6]  ${className}`}>
      {title}
    </div>
  ) : (
    // <img src={img(cover)} alt={title} onError={() => setFailed(true)} className={`object-cover ${className}`} />
    ""
  );
}

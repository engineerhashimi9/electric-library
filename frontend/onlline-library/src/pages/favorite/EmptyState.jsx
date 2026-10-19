import { HeartOff } from "lucide-react";
import { Link } from "react-router-dom";
// import { serif } from "../../styles/fonts";

export default function EmptyState({ preview, onExitPreview }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl bg-[#f5f3f0] px-6 py-16 text-center md:py-24">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#9a4522] shadow-sm md:h-16 md:w-16">
        <HeartOff className="h-6 w-6 md:h-7 md:w-7" />
      </span>
      <h3 className={`text-[24px] text-[#07241a] md:text-[28px] `}>Your sanctuary is empty</h3>
      <p className="max-w-[420px] text-[14px] leading-relaxed text-[#424844]">
        Bookmark editions and manuscripts from the catalog and they will be preserved here, synchronized across your devices.
      </p>
      <div className="flex flex-wrap justify-center gap-3 pt-2">
        <Link to="/explore" className="rounded-xl bg-[#07241a] px-5 py-2.5 text-[13px] text-white transition hover:bg-[#1e3a2f] active:scale-95">Explore Books</Link>
        {preview && (
          <button onClick={onExitPreview} className="rounded-xl bg-white px-5 py-2.5 text-[13px] text-[#07241a] shadow-sm transition hover:bg-[#eae8e5] active:scale-95">Exit preview</button>
        )}
      </div>
    </div>
  );
}

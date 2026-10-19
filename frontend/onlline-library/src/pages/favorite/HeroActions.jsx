import { Eye, EyeOff, Share2, Quote, BookmarkPlus, Share } from "lucide-react";

const ghost =
  "flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-[13px] text-[#1b1c1a] shadow-[0_1px_1px_rgba(0,0,0,0.05)] transition hover:-translate-y-0.5 hover:shadow-md active:scale-95";

export default function HeroActions({ compact = false, previewEmpty, onTogglePreview, onShare, onExport, onCreateShelf }) {
  // موبایل/تبلت: مثل فریم موبایل Figma
  if (compact) {
    return (
      <div className="flex shrink-0 items-center gap-2.5">
        <button onClick={onShare} aria-label="Share shelf" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#efeeeb] text-[#07241a] transition hover:bg-[#e4e2df] active:scale-90">
          <Share className="h-[18px] w-[18px]" />
        </button>
        <button onClick={onCreateShelf} className="flex items-center gap-2 rounded-2xl bg-[#07241a] px-5 py-3 text-[15px] font-semibold text-white shadow-md transition hover:bg-[#1e3a2f] active:scale-95">
          <BookmarkPlus className="h-[18px] w-[18px]" /> New Shelf
        </button>
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-[560px] flex-wrap gap-3">
      <button
        onClick={onTogglePreview}
        aria-pressed={previewEmpty}
        className="flex items-center gap-2 rounded-xl bg-[#efeeeb] px-4 py-2.5 text-[13px] text-[#1b1c1a] shadow-[0_1px_1px_rgba(0,0,0,0.05)] transition hover:-translate-y-0.5 hover:bg-[#e4e2df] hover:shadow-md active:scale-95"
      >
        {previewEmpty ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
        {previewEmpty ? "Exit Empty Preview" : "Preview Empty State"}
      </button>
      <button onClick={onShare} className={ghost}><Share2 className="h-3.5 w-3.5" /> Share Shelf</button>
      <button onClick={onExport} className={ghost}><Quote className="h-3.5 w-3.5" /> Export Citations</button>
      <button
        onClick={onCreateShelf}
        className="flex items-center gap-2 rounded-xl bg-[#07241a] px-5 py-2.5 text-[13px] text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#1e3a2f] hover:shadow-lg active:scale-95"
      >
        <BookmarkPlus className="h-3.5 w-3.5" /> + Create Custom Shelf
      </button>
    </div>
  );
}

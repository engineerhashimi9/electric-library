import { Eye, EyeOff, Share2, Quote, BookmarkPlus } from "lucide-react";

const ghost = "flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-[13px] text-leaf-950 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:scale-95";

export default function HeroActions({ previewEmpty, onTogglePreview, onShare, onExport, onCreateShelf }) {
  return (
    <div className="flex w-[560px] flex-wrap gap-3">
      <button
        onClick={onTogglePreview}
        aria-pressed={previewEmpty}
        className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-[13px] text-leaf-950 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:scale-95 ${
          previewEmpty ? "bg-leaf-200" : "bg-leaf-100 hover:bg-leaf-200"
        }`}
      >
        {previewEmpty ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
        {previewEmpty ? "Exit Empty Preview" : "Preview Empty State"}
      </button>
      <button onClick={onShare} className={ghost}><Share2 className="h-3.5 w-3.5" /> Share Shelf</button>
      <button onClick={onExport} className={ghost}><Quote className="h-3.5 w-3.5" /> Export Citations</button>
      <button
        onClick={onCreateShelf}
        className="flex items-center gap-2 rounded-xl bg-[#07241A] px-5 py-2.5 text-[13px] text-white shadow-md transition hover:-translate-y-0.5 hover:bg-leaf-800 hover:shadow-lg active:scale-95"
      >
        <BookmarkPlus className="h-3.5 w-3.5" /> + Create Custom Shelf
      </button>
    </div>
  );
}

import { HeartOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmptyState({ preview, onExitPreview }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl bg-leaf-50 px-6 py-24 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-leaf-600 shadow-sm">
        <HeartOff className="h-7 w-7" />
      </span>
      <h3 className="font-serif text-[28px] text-leaf-950">Your sanctuary is empty</h3>
      <p className="max-w-[420px] text-[14px] leading-relaxed text-ink-soft">
        Bookmark editions and manuscripts from the catalog and they will be preserved here, synchronized across your devices.
      </p>
      <div className="flex gap-3 pt-2">
        <Link to="/explore" className="rounded-xl bg-leaf-950 px-5 py-2.5 text-[13px] text-white transition hover:bg-leaf-800 active:scale-95">
          Explore Books
        </Link>
        {preview && (
          <button onClick={onExitPreview} className="rounded-xl bg-white px-5 py-2.5 text-[13px] text-leaf-950 shadow-sm transition hover:bg-leaf-100 active:scale-95">
            Exit preview
          </button>
        )}
      </div>
    </div>
  );
}

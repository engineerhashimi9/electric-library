import { useEffect } from "react";
import { X } from "lucide-react";

export default function Toast({ toast, onClose, onUndo }) {
  // با تغییر id، تایمر دوباره شروع می‌شود
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(onClose, 5000);
    return () => clearTimeout(t);
  }, [toast?.id]);

  if (!toast) return null;
  return (
    <div role="status" className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-4 rounded-xl bg-leaf-950 px-5 py-3 text-[13px] text-white shadow-2xl shadow-leaf-950/30">
      <span>{toast.message}</span>
      {toast.undo && (
        <button onClick={onUndo} className="font-semibold text-leaf-300 transition hover:text-white">Undo</button>
      )}
      <button onClick={onClose} aria-label="Dismiss" className="text-leaf-200/70 transition hover:text-white"><X className="h-3.5 w-3.5" /></button>
    </div>
  );
}

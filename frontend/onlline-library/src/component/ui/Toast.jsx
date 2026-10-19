import { useEffect } from "react";
import { X } from "lucide-react";

export default function Toast({ toast, onClose, onUndo }) {
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(onClose, 5000);
    return () => clearTimeout(t);
  }, [toast?.id]);

  if (!toast) return null;
  return (
    <div role="status" className="fixed bottom-28 left-1/2 z-50 flex w-max max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center gap-4 rounded-xl bg-[#07241a] px-5 py-3 text-[13px] text-white shadow-2xl lg:bottom-6">
      <span className="min-w-0 truncate">{toast.message}</span>
      {toast.undo && <button onClick={onUndo} className="shrink-0 font-semibold text-[#fd9168] transition hover:text-white">Undo</button>}
      <button onClick={onClose} aria-label="Dismiss" className="shrink-0 text-white/60 transition hover:text-white"><X className="h-3.5 w-3.5" /></button>
    </div>
  );
}

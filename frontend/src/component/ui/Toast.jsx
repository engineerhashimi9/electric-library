import { useEffect } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Toast({ toast, onClose, onUndo }) {
  const { t } = useTranslation();

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <aside
      role="status"
      aria-live="polite"
      className="fixed bottom-24 left-1/2 z-[70] flex w-auto max-w-[calc(100vw-2rem)] sm:max-w-md -translate-x-1/2 items-center gap-3 rounded-2xl bg-[#0E6760] border border-[#156B6B] px-4 py-3 text-xs sm:text-sm text-[#FFFFFF] shadow-library-lg md:bottom-8 animate-in fade-in slide-in-from-bottom-3 duration-200"
    >
      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#17A296]" />
      <span className="min-w-0 flex-1 leading-snug break-words">
        {toast.message}
      </span>
      {toast.undo && (
        <button
          onClick={onUndo}
          className="shrink-0 font-bold text-[#17A296] hover:text-[#FFFFFF] transition-colors underline underline-offset-2 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] rounded"
        >
          {t("common.undo", "Undo")}
        </button>
      )}
      <button
        onClick={onClose}
        aria-label={t("common.close", "Close")}
        className="shrink-0 p-1 rounded-lg text-[#B8E2DF] hover:text-[#FFFFFF] hover:bg-[#156B6B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
      >
        <X className="h-4 w-4" />
      </button>
    </aside>
  );
}

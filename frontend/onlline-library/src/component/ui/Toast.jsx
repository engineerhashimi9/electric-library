import { useEffect } from "react";
import { X } from "lucide-react";
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
    <div
      role="status"
      className="fixed bottom-28 left-1/2 z-50 flex w-max max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center gap-4 rounded-xl bg-[#09261C] border border-[#163A2E] px-5 py-3 text-[13px] text-[#FFFFFF] shadow-2xl lg:bottom-6"
    >
      <span className="min-w-0 truncate">{toast.message}</span>
      {toast.undo && (
        <button
          onClick={onUndo}
          className="shrink-0 font-bold text-[#10B981] transition hover:underline"
        >
          {t("common.undo")}
        </button>
      )}
      <button
        onClick={onClose}
        aria-label={t("common.close")}
        className="shrink-0 text-[#A3C1B5] transition hover:text-[#FFFFFF]"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

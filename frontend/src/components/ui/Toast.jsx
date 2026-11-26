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
    <aside role="status" aria-live="polite" className="toast-floating">
      <CheckCircle2
        size={18}
        style={{ color: "var(--primary-light)", flexShrink: 0 }}
      />
      <span style={{ flex: 1, minWidth: 0, wordBreak: "break-word" }}>
        {toast.message}
      </span>
      {toast.undo && (
        <button
          onClick={onUndo}
          style={{
            fontWeight: 700,
            color: "var(--primary-light)",
            textDecoration: "underline",
            padding: "0 4px",
            cursor: "pointer",
          }}
        >
          {t("common.undo", "Undo")}
        </button>
      )}
      <button
        onClick={onClose}
        aria-label={t("common.close", "Close")}
        style={{
          color: "var(--text-inverse-muted)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "4px",
          borderRadius: "var(--radius-sm)",
          cursor: "pointer",
        }}
      >
        <X size={16} />
      </button>
    </aside>
  );
}

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function EditProfileModal({ open, name, onClose, onSave }) {
  const [value, setValue] = useState(name);
  const [prevOpen, setPrevOpen] = useState(open);
  const { t } = useTranslation();

  if (open !== prevOpen) {
    setPrevOpen(open);
    if (open) {
      setValue(name);
    }
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#0E6760]/60 p-4 backdrop-blur-sm sm:items-center" onClick={onClose}>
      <form
        role="dialog"
        aria-modal="true"
        aria-label="Edit profile"
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => { e.preventDefault(); onSave(value); }}
        className="w-full max-w-[420px] space-y-5 rounded-2xl bg-[#FFFFFF] border border-[#D0E8E6] p-6 shadow-2xl text-[#0A2E2C]"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-[24px] text-[#0E6760] font-sans font-bold">{t("profile.modal.title")}</h2>
          <button type="button" onClick={onClose} aria-label="Close" className="rounded-full p-1.5 text-[#4A6B68] transition hover:text-[#0E6760]"><X className="h-4 w-4" /></button>
        </div>
        <label className="block space-y-1.5">
          <span className="text-[11px] font-bold uppercase tracking-[0.66px] text-[#236D64]">{t("profile.modal.nameLabel")}</span>
          <input
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full rounded-xl bg-[#FFFFFF] border border-[#D0E8E6] px-4 py-3 text-[15px] text-[#0A2E2C] outline-none transition focus:border-[#17A296]"
          />
        </label>
        <div className="flex justify-end gap-2">
          <button type="button" onClick={onClose} className="rounded-xl bg-[#FFFFFF] border border-[#D0E8E6] px-5 py-2.5 text-[14px] text-[#4A6B68] hover:bg-[#E6F4F3] hover:text-[#0E6760] transition active:scale-95">{t("profile.modal.cancel")}</button>
          <button type="submit" disabled={!value.trim()} className="rounded-xl bg-[#17A296] hover:bg-[#0E6760] px-5 py-2.5 text-[14px] font-bold text-[#FFFFFF] transition active:scale-95 disabled:opacity-40">{t("profile.modal.save")}</button>
        </div>
      </form>
    </div>
  );
}

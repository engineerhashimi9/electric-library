import { useEffect, useState } from "react";
import { X } from "lucide-react";


export default function EditProfileModal({ open, name, onClose, onSave }) {
  const [value, setValue] = useState(name);

  useEffect(() => {
    if (!open) return;
    setValue(name);
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#07241a]/50 p-4 backdrop-blur-sm sm:items-center" onClick={onClose}>
      <form
        role="dialog"
        aria-modal="true"
        aria-label="Edit profile"
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => { e.preventDefault(); onSave(value); }}
        className="w-full max-w-[420px] space-y-5 rounded-2xl bg-white p-6 shadow-2xl"
      >
        <div className="flex items-center justify-between">
          <h2 className={`text-[24px] text-[#07241a] `}>Edit Profile</h2>
          <button type="button" onClick={onClose} aria-label="Close" className="rounded-full p-1.5 text-[#424844] transition hover:bg-[#eae8e5]"><X className="h-4 w-4" /></button>
        </div>
        <label className="block space-y-1.5">
          <span className="text-[11px] font-bold uppercase tracking-[0.66px] text-[#424844]">Display name</span>
          <input
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full rounded-xl bg-[#f5f3f0] px-4 py-3 text-[15px] text-[#1b1c1a] outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-2 focus:ring-[#07241a]/30"
          />
        </label>
        <div className="flex justify-end gap-2">
          <button type="button" onClick={onClose} className="rounded-xl bg-[#eae8e5] px-5 py-2.5 text-[14px] text-[#1b1c1a] transition hover:bg-[#e0ddd9] active:scale-95">Cancel</button>
          <button type="submit" disabled={!value.trim()} className="rounded-xl bg-[#07241a] px-5 py-2.5 text-[14px] text-white transition hover:bg-[#1e3a2f] active:scale-95 disabled:opacity-40">Save</button>
        </div>
      </form>
    </div>
  );
}

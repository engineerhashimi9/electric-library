import { X } from "lucide-react";
import { useEffect } from "react";
import { FilterContent } from "./FilterContent";

export function MobileFilterDrawer({ open, onClose, ...props }) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKey(event) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        aria-label="Close filters"
        className="absolute inset-0 bg-black/35"
        onClick={onClose}
      />

      <section
        role="dialog"
        aria-modal="true"
        aria-label="Catalog filters"
        className="absolute bottom-0 right-0 top-0 w-[min(90vw,400px)] overflow-y-auto bg-white p-6 shadow-xl"
      >
        <button
          autoFocus
          onClick={onClose}
          aria-label="Close filters"
          className="mb-5 ml-auto block rounded-lg bg-[#efeeeb] p-2"
        >
          <X size={20} />
        </button>

        <FilterContent {...props} />

        <button onClick={onClose} className={` mt-6 w-full`}>
          Show Results
        </button>
      </section>
    </div>
  );
}

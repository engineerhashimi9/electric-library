import { X } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FilterContent } from "./FilterContent";

export default function MobileFilterDrawer({ open, onClose, ...props }) {
  const { t } = useTranslation();

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
        className="absolute inset-0 bg-[#0E6760]/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <section
        role="dialog"
        aria-modal="true"
        aria-label="Catalog filters"
        className="absolute bottom-0 right-0 rtl:right-auto rtl:left-0 top-0 w-[min(90vw,400px)] overflow-y-auto bg-[#FFFFFF] border-l rtl:border-l-0 rtl:border-r border-[#D0E8E6] p-6 text-[#0A2E2C] shadow-xl"
      >
        <button
          autoFocus
          onClick={onClose}
          aria-label="Close filters"
          className="mb-5 ml-auto rtl:ml-0 rtl:mr-auto block rounded-lg bg-[#E6F4F3] border border-[#D0E8E6] text-[#4A6B68] hover:bg-[#D0E8E6] hover:text-[#0E6760] p-2 transition-colors"
        >
          <X size={20} />
        </button>

        <FilterContent {...props} />

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-xl bg-[#17A296] hover:bg-[#0E6760] py-3 text-sm font-bold text-[#FFFFFF] transition-colors"
        >
          {t("explore.filters.showResults")}
        </button>
      </section>
    </div>
  );
}

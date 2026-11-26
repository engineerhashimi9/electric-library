import React, { useEffect } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import FilterContent from "./FilterContent";

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
    <div className="filter-drawer-overlay">
      <button
        type="button"
        aria-label="Close filters backdrop"
        className="filter-drawer-backdrop"
        onClick={onClose}
      />

      <section
        role="dialog"
        aria-modal="true"
        aria-label="Catalog filters"
        className="filter-drawer-panel"
      >
        <button
          type="button"
          autoFocus
          onClick={onClose}
          aria-label="Close filters"
          style={{
            marginBottom: "1.25rem",
            marginInlineStart: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "var(--bg-secondary)",
            border: "1px solid var(--border-color)",
            borderRadius: "var(--radius-md)",
            padding: "0.4rem",
            cursor: "pointer",
            color: "var(--text-secondary)",
          }}
        >
          <X size={20} />
        </button>

        <FilterContent {...props} />

        <button
          type="button"
          onClick={onClose}
          className="btn btn-primary btn-md btn-full"
          style={{ marginTop: "1.5rem" }}
        >
          {t("explore.filters.apply") || "Apply Filters"}
        </button>
      </section>
    </div>
  );
}

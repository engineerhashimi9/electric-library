import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Pagination({ page, totalPages, onPage, from, to, total }) {
  const { t } = useTranslation();
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Favorites pagination" className="pagination-wrapper">
      <span className="pagination-info-text">
        {t("favorites.pagination.showing", { from, to, total })}
      </span>
      <div className="pagination-pages-group">
        <button
          type="button"
          onClick={() => onPage(page - 1)}
          disabled={page === 1}
          aria-label="Previous page"
          className="pagination-page-btn"
        >
          <ChevronLeft size={18} className="rtl-rotate-180" />
        </button>
        {pages.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => onPage(p)}
            aria-current={page === p ? "page" : undefined}
            aria-label={`Page ${p}`}
            className={`pagination-page-btn ${page === p ? "active" : ""}`}
          >
            {p}
          </button>
        ))}
        <button
          type="button"
          onClick={() => onPage(page + 1)}
          disabled={page === totalPages}
          aria-label="Next page"
          className="pagination-page-btn"
        >
          <ChevronRight size={18} className="rtl-rotate-180" />
        </button>
      </div>
    </nav>
  );
}

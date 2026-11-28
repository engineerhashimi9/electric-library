import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CatalogPagination({
  page,
  pageCount,
  onPageChange,
  total,
  start,
  end,
  perPage,
  onPerPageChange,
}) {
  const { t } = useTranslation();

  return (
    <section aria-label="Catalog pagination" className="pagination-wrapper">
      <p className="pagination-info-text">
        {t("explore.showing", { start, end, total })}
      </p>

      <nav aria-label="Pagination" className="pagination-pages-group">
        <button
          type="button"
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
          aria-label="Previous page"
          className="pagination-page-btn"
        >
          <ChevronLeft size={18} className="rtl-rotate-180" />
        </button>

        {Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => (
          <button
            key={number}
            type="button"
            onClick={() => onPageChange(number)}
            aria-current={page === number ? "page" : undefined}
            aria-label={`Page ${number}`}
            className={`pagination-page-btn ${page === number ? "active" : ""}`}
          >
            {number}
          </button>
        ))}

        <button
          type="button"
          onClick={() => onPageChange(page + 1)}
          disabled={page >= pageCount}
          aria-label="Next page"
          className="pagination-page-btn"
        >
          <ChevronRight size={18} className="rtl-rotate-180" />
        </button>
      </nav>

      <label className="pagination-info-text hidden-mobile" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <span>{t("explore.perPage")}</span>
        <select
          value={perPage}
          onChange={(event) => onPerPageChange(Number(event.target.value))}
          className="select-styled"
          style={{ padding: "0.35rem 0.65rem", fontSize: "0.78rem" }}
        >
          <option value={6}>6</option>
          <option value={8}>8</option>
          <option value={12}>12</option>
        </select>
      </label>
    </section>
  );
}

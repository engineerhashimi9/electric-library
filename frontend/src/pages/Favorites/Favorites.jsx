import React from "react";
import FavoritesHero from "./FavoritesHero";
import ShelfToolbar from "./ShelfToolbar";
import BookGrid from "./BookGrid";
import EmptyState from "./EmptyState";
import QuoteBanner from "./QuoteBanner";
import Pagination from "./Pagination";
import Toast from "@/components/ui/Toast";
import useFavorites, { PER_PAGE } from "@/hooks/useFavorites";
import { categories } from "./favorites";

export default function Favorites() {
  const f = useFavorites();
  const isEmpty = f.previewEmpty || f.visible.length === 0;
  const from = f.filtered.length === 0 ? 0 : (f.page - 1) * PER_PAGE + 1;
  const to = (f.page - 1) * PER_PAGE + f.visible.length;

  return (
    <div className="page-container">
      <div className="content-container">
        <FavoritesHero
          total={f.items.length}
          actions={{
            previewEmpty: f.previewEmpty,
            onTogglePreview: f.togglePreview,
            onShare: f.shareShelf,
            onExport: f.downloadCitations,
            onCreateShelf: () => {},
          }}
          tabs={{
            categories,
            counts: f.categoryCounts,
            active: f.category,
            onChange: f.setCategory,
          }}
        />
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            paddingTop: "2rem",
            paddingBottom: "3rem",
          }}
        >
          <ShelfToolbar
            total={f.items.length}
            sort={f.sort}
            onSort={f.setSort}
            view={f.view}
            onView={f.setView}
            previewEmpty={f.previewEmpty}
            onTogglePreview={f.togglePreview}
          />
          {isEmpty ? (
            <EmptyState
              preview={f.previewEmpty}
              onExitPreview={f.togglePreview}
            />
          ) : (
            <BookGrid
              books={f.visible}
              view={f.view}
              onRemove={f.removeFavorite}
              onDownload={f.downloadBook}
            />
          )}
          <QuoteBanner />
          {!isEmpty && (
            <Pagination
              page={f.page}
              totalPages={f.totalPages}
              onPage={f.setPage}
              from={from}
              to={to}
              total={f.filtered.length}
            />
          )}
        </main>
        <Toast toast={f.toast} onClose={f.closeToast} onUndo={f.undoRemove} />
      </div>
    </div>
  );
}

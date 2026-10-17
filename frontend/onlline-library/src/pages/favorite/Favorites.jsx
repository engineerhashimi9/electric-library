import FavoritesHero from "./FavoritesHero";
import ShelfToolbar from "./ShelfToolbar";
import BookGrid from "./BookGrid";
import EmptyState from "./EmptyState";
import QuoteBanner from "./QuoteBanner";
import Pagination from "./Pagination";
import Toast from "@/component/ui/Toast";
import useFavorites, { PER_PAGE } from "@/hooks/useFavorites";
import { categories } from "./favorites";

export default function Favorites() {
  const f = useFavorites();
  const isEmpty = f.previewEmpty || f.visible.length === 0;
  const from = f.filtered.length === 0 ? 0 : (f.page - 1) * PER_PAGE + 1;
  const to = (f.page - 1) * PER_PAGE + f.visible.length;

  return (
    <div className="min-h-screen bg-paper font-sans text-leaf-950">
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

      <main className="mx-auto flex max-w-[1440px] flex-col gap-8 px-12 pb-16 pt-8">
        <ShelfToolbar
          total={f.items.length}
          sort={f.sort}
          onSort={f.setSort}
          view={f.view}
          onView={f.setView}
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
  );
}

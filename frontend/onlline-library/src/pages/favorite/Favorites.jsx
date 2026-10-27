// src/pages/favorite/Favorites.jsx
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
    <div className="min-h-screen bg-[#F6FBF9] pb-24 text-[#111C18] md:pb-0">
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
      <main className="mx-auto flex max-w-[1440px] flex-col gap-5 px-4 sm:px-5 pb-10 pt-5 md:px-8 lg:gap-8 lg:pb-16 lg:pt-8 xl:px-12">
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
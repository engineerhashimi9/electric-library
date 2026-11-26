import { useMemo, useState } from "react";
import exportCitations from "@/utils/exportCitations";
import { useFavoritesContext } from "@/context/FavoritesContext";

export const PER_PAGE = 8;

export default function useFavorites() {
  const {
    favorites: items,
    removeFavorite: contextRemoveFavorite,
    undoRemove: contextUndoRemove,
    toast,
    closeToast,
    showToast,
  } = useFavoritesContext();

  const [category, setCategoryState] = useState("All Favorites");
  const [sort, setSortState] = useState("Recently Added");
  const [view, setView] = useState("grid");
  const [page, setPage] = useState(1);
  const [previewEmpty, setPreviewEmpty] = useState(false);

  const setCategory = (v) => {
    setCategoryState(v);
    setPage(1);
  };

  const setSort = (v) => {
    setSortState(v);
    setPage(1);
  };

  const categoryCounts = useMemo(() => {
    const counts = { "All Favorites": items.length };
    items.forEach((b) => {
      const cat = b.category || "General";
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  }, [items]);

  const filtered = useMemo(() => {
    let list = category === "All Favorites" ? items : items.filter((b) => b.category === category);
    if (sort === "Recently Added") list = [...list].sort((a, b) => (b.addedAt || 0) - (a.addedAt || 0));
    if (sort === "Highest Rated") list = [...list].sort((a, b) => (b.rating || 0) - (a.rating || 0));
    if (sort === "Most Reviewed") list = [...list].sort((a, b) => (b.votes || 0) - (a.votes || 0));
    if (sort === "Title A–Z") {
      list = [...list].sort((a, b) => {
        const aTitle = typeof a.title === "object" ? (a.title.fa || a.title.en) : a.title;
        const bTitle = typeof b.title === "object" ? (b.title.fa || b.title.en) : b.title;
        return String(aTitle || "").localeCompare(String(bTitle || ""));
      });
    }
    return list;
  }, [items, category, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const visible = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  const removeFavorite = (id) => {
    contextRemoveFavorite(id);
  };

  const undoRemove = () => {
    contextUndoRemove();
  };

  const shareShelf = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast("Shelf link copied to clipboard");
    } catch {
      showToast("Couldn't copy the link — copy it from the address bar");
    }
  };

  const downloadCitations = () => {
    if (items.length === 0) return showToast("Nothing to export yet");
    exportCitations(items);
    showToast(`Exported ${items.length} citations`);
  };

  const downloadBook = (book) => {
    const title = typeof book?.title === "object" ? (book.title.fa || book.title.en) : (book?.title || "");
    showToast(`دانلود «${title}» آغاز شد.`);
  };

  return {
    items,
    filtered,
    visible,
    categoryCounts,
    category,
    setCategory,
    sort,
    setSort,
    view,
    setView,
    page: safePage,
    setPage,
    totalPages,
    removeFavorite,
    undoRemove,
    downloadBook,
    previewEmpty,
    togglePreview: () => setPreviewEmpty((v) => !v),
    shareShelf,
    downloadCitations,
    toast,
    closeToast,
  };
}

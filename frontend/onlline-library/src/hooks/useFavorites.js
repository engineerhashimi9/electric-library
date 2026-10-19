import { useMemo, useState } from "react";
import { favorites as initialFavorites } from "../pages/favorite/favorites";
import exportCitations from "@/utils/exportCitations";

export const PER_PAGE = 8;

export default function useFavorites() {
  const [items, setItems] = useState(initialFavorites);
  const [category, setCategoryState] = useState("All Favorites");
  const [sort, setSortState] = useState("Recently Added");
  const [view, setView] = useState("grid");
  const [page, setPage] = useState(1);
  const [previewEmpty, setPreviewEmpty] = useState(false);
  const [toast, setToast] = useState(null); // { id, message, undo? }
  const [lastRemoved, setLastRemoved] = useState(null); // { item, index }

  const setCategory = (v) => { setCategoryState(v); setPage(1); };
  const setSort = (v) => { setSortState(v); setPage(1); };

  const notify = (message, undo = false) => setToast({ id: Date.now(), message, undo });
  const closeToast = () => setToast(null);

  const categoryCounts = useMemo(() => {
    const counts = { "All Favorites": items.length };
    items.forEach((b) => { counts[b.category] = (counts[b.category] || 0) + 1; });
    return counts;
  }, [items]);

  const filtered = useMemo(() => {
    let list = category === "All Favorites" ? items : items.filter((b) => b.category === category);
    if (sort === "Recently Added") list = [...list].sort((a, b) => b.addedAt - a.addedAt);
    if (sort === "Highest Rated") list = [...list].sort((a, b) => b.rating - a.rating);
    if (sort === "Most Reviewed") list = [...list].sort((a, b) => b.votes - a.votes);
    if (sort === "Title A–Z") list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    return list;
  }, [items, category, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const visible = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  const removeFavorite = (id) => {
    const index = items.findIndex((b) => b.id === id);
    if (index === -1) return;
    setLastRemoved({ item: items[index], index });
    setItems((list) => list.filter((b) => b.id !== id));
    notify(`Removed “${items[index].title}” from favorites`, true);
  };

  const undoRemove = () => {
    if (!lastRemoved) return;
    setItems((list) => {
      const next = [...list];
      next.splice(lastRemoved.index, 0, lastRemoved.item);
      return next;
    });
    setLastRemoved(null);
    closeToast();
  };

  const shareShelf = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      notify("Shelf link copied to clipboard");
    } catch {
      notify("Couldn't copy the link — copy it from the address bar");
    }
  };

  const downloadCitations = () => {
    if (items.length === 0) return notify("Nothing to export yet");
    exportCitations(items);
    notify(`Exported ${items.length} citations`);
  };

  return {
    items, filtered, visible, categoryCounts,
    category, setCategory, sort, setSort, view, setView,
    page: safePage, setPage, totalPages,
    removeFavorite, undoRemove,
    previewEmpty, togglePreview: () => setPreviewEmpty((v) => !v),
    shareShelf, downloadCitations,
    toast, closeToast,
  };
}

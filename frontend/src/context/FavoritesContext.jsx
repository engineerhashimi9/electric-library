import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
import { favorites as initialFavorites } from "@/pages/Favorites/favorites";

const FavoritesContext = createContext(null);
const STORAGE_KEY = "bargin_library_favorites";
const STATUS_KEY = "bargin_reading_status";
const PROGRESS_KEY = "bargin_reading_progress";

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // Ignore parse errors and use initial
    }
    return initialFavorites;
  });

  const [readingStatus, setReadingStatusState] = useState(() => {
    try {
      const saved = localStorage.getItem(STATUS_KEY);
      return saved ? JSON.parse(saved) : { 1: "reading", 2: "completed", 3: "want_to_read" };
    } catch {
      return {};
    }
  });

  const [readingProgress, setReadingProgressState] = useState(() => {
    try {
      const saved = localStorage.getItem(PROGRESS_KEY);
      return saved ? JSON.parse(saved) : { 1: 68, 2: 100, 3: 24 };
    } catch {
      return {};
    }
  });

  const [lastRemoved, setLastRemoved] = useState(null);
  const [toast, setToast] = useState(null);

  // Synchronize to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch {
      // Storage error safeguard
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem(STATUS_KEY, JSON.stringify(readingStatus));
    } catch {
      // Storage error safeguard
    }
  }, [readingStatus]);

  useEffect(() => {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(readingProgress));
    } catch {
      // Storage error safeguard
    }
  }, [readingProgress]);

  const showToast = useCallback((message, action = null) => {
    setToast({ id: Date.now(), message, action });
  }, []);

  const closeToast = useCallback(() => {
    setToast(null);
  }, []);

  const isFavorite = useCallback(
    (id) => {
      if (id === undefined || id === null) return false;
      const idStr = String(id);
      return favorites.some(
        (b) => String(b.id) === idStr || String(b.numericId) === idStr
      );
    },
    [favorites]
  );

  const toggleFavorite = useCallback(
    (book) => {
      if (!book) return { favorited: false };
      const bookId = book.id || book.numericId;
      const idStr = String(bookId);

      const existingIndex = favorites.findIndex(
        (b) => String(b.id) === idStr || String(b.numericId) === idStr
      );

      const title =
        typeof book.title === "object"
          ? book.title.en || book.title.fa
          : String(book.title || "Book");

      if (existingIndex >= 0) {
        // Remove
        const removed = favorites[existingIndex];
        setLastRemoved({ item: removed, index: existingIndex });
        setFavorites((prev) => prev.filter((_, idx) => idx !== existingIndex));
        showToast(`Removed “${title}” from your shelf.`);
        return { favorited: false, title };
      } else {
        // Add
        const newFav = {
          id: book.id || Date.now(),
          numericId: book.numericId || Date.now(),
          addedAt: Date.now(),
          title: book.title,
          author: book.author,
          format: book.format || "HARDCOVER",
          rating: book.rating || 4.8,
          votes: book.reviews ? parseInt(String(book.reviews).replace(/\D/g, "")) || 1400 : 1200,
          badge: book.tag ? (typeof book.tag === "object" ? book.tag.en : book.tag) : "LIBRARY PICK",
          note: book.description
            ? typeof book.description === "object"
              ? book.description.en.slice(0, 70) + "…"
              : String(book.description).slice(0, 70) + "…"
            : "Curated addition to your personal sanctuary.",
          status: { type: "available", label: "Available in Library" },
          meta: book.pages ? `${book.pages} pages` : "Complete Volume",
          action: "read",
          category: book.genre
            ? typeof book.genre === "object"
              ? book.genre.en
              : book.genre
            : "Contemporary Fiction",
          cover: book.cover || book.img || "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300",
        };
        setFavorites((prev) => [newFav, ...prev]);
        showToast(`Added “${title}” to your shelf!`);
        return { favorited: true, title };
      }
    },
    [favorites, showToast]
  );

  const removeFavorite = useCallback(
    (id) => {
      const idStr = String(id);
      const index = favorites.findIndex(
        (b) => String(b.id) === idStr || String(b.numericId) === idStr
      );
      if (index === -1) return;

      const removed = favorites[index];
      setLastRemoved({ item: removed, index });
      setFavorites((prev) => prev.filter((_, idx) => idx !== index));
      const title =
        typeof removed.title === "object"
          ? removed.title.en || removed.title.fa
          : String(removed.title || "Book");

      showToast(`Removed “${title}” from your shelf.`);
    },
    [favorites, showToast]
  );

  const undoRemove = useCallback(() => {
    if (!lastRemoved) return;
    setFavorites((prev) => {
      const copy = [...prev];
      copy.splice(lastRemoved.index, 0, lastRemoved.item);
      return copy;
    });
    setLastRemoved(null);
    closeToast();
  }, [lastRemoved, closeToast]);

  const setStatus = useCallback((id, status) => {
    setReadingStatusState((prev) => ({ ...prev, [id]: status }));
  }, []);

  const setProgress = useCallback((id, progress) => {
    setReadingProgressState((prev) => ({ ...prev, [id]: Math.min(100, Math.max(0, progress)) }));
  }, []);

  const value = useMemo(
    () => ({
      favorites,
      favoritesCount: favorites.length,
      isFavorite,
      toggleFavorite,
      removeFavorite,
      undoRemove,
      readingStatus,
      setStatus,
      readingProgress,
      setProgress,
      toast,
      showToast,
      closeToast,
    }),
    [
      favorites,
      isFavorite,
      toggleFavorite,
      removeFavorite,
      undoRemove,
      readingStatus,
      setStatus,
      readingProgress,
      setProgress,
      toast,
      showToast,
      closeToast,
    ]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoritesContext() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavoritesContext must be used within a FavoritesProvider");
  }
  return context;
}

export default FavoritesContext;

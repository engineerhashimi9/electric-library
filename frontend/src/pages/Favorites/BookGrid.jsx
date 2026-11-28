import React from "react";
import BookCard from "./BookCard";
import BookListItem from "./BookListItem";

/**
 * Renders saved favorites in either Grid or List layout.
 */
export default function BookGrid({ books, view, onRemove, onDownload }) {
  const Item = view === "grid" ? BookCard : BookListItem;

  return (
    <div className={view === "grid" ? "books-grid" : "d-flex flex-col gap-4"}>
      {books.map((b) => (
        <Item
          key={b.id}
          book={b}
          onRemove={() => onRemove(b.id)}
          onDownload={onDownload}
        />
      ))}
    </div>
  );
}

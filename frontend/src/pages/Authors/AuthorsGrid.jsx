import React from "react";
import AuthorCard from "./AuthorCard";
import AuthorListItem from "./AuthorListItem";
import EmptyState from "./EmptyState";

export default function AuthorsGrid({ authors, view, followed, onToggleFollow, onReset }) {
  if (authors.length === 0) {
    return <EmptyState onReset={onReset} />;
  }

  const Item = view === "grid" ? AuthorCard : AuthorListItem;

  return (
    <div className={view === "grid" ? "authors-grid" : "d-flex flex-col gap-4"}>
      {authors.map((a) => (
        <Item
          key={a.id}
          author={a}
          following={followed.includes(a.id)}
          onToggleFollow={() => onToggleFollow(a.id)}
        />
      ))}
    </div>
  );
}

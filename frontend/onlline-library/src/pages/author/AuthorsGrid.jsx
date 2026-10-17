import AuthorCard from "./AuthorCard";
import AuthorListItem from "./AuthorListItem";
import EmptyState from "./EmptyState";

export default function AuthorsGrid({ authors, view, followed, onToggleFollow, onReset }) {
  if (authors.length === 0) return <EmptyState onReset={onReset} />;

  const Item = view === "grid" ? AuthorCard : AuthorListItem;
  return (
    <div className={view === "grid" ? "grid grid-cols-4 gap-5" : "flex flex-col gap-3"}>
      {authors.map((a) => (
        <Item key={a.id} author={a} following={followed.includes(a.id)} onToggleFollow={() => onToggleFollow(a.id)} />
      ))}
    </div>
  );
}

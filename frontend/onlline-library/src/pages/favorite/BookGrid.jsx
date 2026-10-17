import BookCard from "./BookCard";
import BookListItem from "./BookListItem";

export default function BookGrid({ books, view, onRemove }) {
  const Item = view === "grid" ? BookCard : BookListItem;
  return (
    <div className={view === "grid" ? "grid grid-cols-4 gap-6" : "flex flex-col gap-3"}>
      {books.map((b) => <Item key={b.id} book={b} onRemove={() => onRemove(b.id)} />)}
    </div>
  );
}

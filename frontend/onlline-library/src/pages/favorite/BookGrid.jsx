import BookCard from "./BookCard";
import BookListItem from "./BookListItem";

// موبایل ۲ ستون (مثل Figma)، تبلت ۲→۳ ستون، xl: ۴ ستون
export default function BookGrid({ books, view, onRemove }) {
  const Item = view === "grid" ? BookCard : BookListItem;
  return (
    <div className={view === "grid" ? "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4 xl:gap-6" : "flex flex-col gap-3"}>
      {books.map((b) => <Item key={b.id} book={b} onRemove={() => onRemove(b.id)} />)}
    </div>
  );
}

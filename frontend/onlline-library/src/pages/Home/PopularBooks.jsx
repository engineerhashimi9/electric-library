import BookCard from "./BookCard";

export default function PopularBooks({ books }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-serif text-lg md:text-xl text-[#1A202C]">
            Popular This Week
          </h2>
          <p className="text-[14px] text-[#424844]">
            Most circulated volumes across the scholarly fellowship
          </p>
        </div>
        <a
          href="#all"
          className="text-[11px] text-[#C86D51]  hover:underline"
        >
          View All 48 Ttiles
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {books.map((book) => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>
    </div>
  );
}

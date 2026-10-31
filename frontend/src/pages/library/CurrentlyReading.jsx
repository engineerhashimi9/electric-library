// src/pages/library/CurrentlyReading.jsx
import ReadingCard from "./ReadingCard";
import { reading } from "./library";

export default function CurrentlyReading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
      {reading.map((b, idx) => (
        <ReadingCard key={idx} book={b} />
      ))}
    </div>
  );
}
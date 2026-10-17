import ReadingCard from "./ReadingCard";
import { reading } from "./library";

export default function CurrentlyReading() {
  return (
    <div className="flex justify-center gap-6">
      {reading.map((b) => <ReadingCard key={b.title} book={b} />)}
    </div>
  );
}

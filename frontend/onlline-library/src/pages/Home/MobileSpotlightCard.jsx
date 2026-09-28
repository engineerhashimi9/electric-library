import { Star, BookOpen, Bookmark } from "lucide-react";


export default function MobileSpotlightCard({ book }) {
  return (
    <div className="md:hidden bg-[#1A362B] text-white p-4 rounded-xl space-y-3">
      <div className="flex items-center justify-between text-[10px] text-emerald-200">
        <span className="bg-white/10 px-2 py-0.5 rounded uppercase">
          SPOTLIGHT SELECTION
        </span>
        <span className="flex items-center gap-1">
          <Star size={12} className="fill-amber-400 text-amber-400" />{" "}
          {book.rating} ({book.reviews})
        </span>
      </div>
      <div className="flex gap-3">
        <img
          src={book.cover}
          alt="Book Cover"
          className="w-20 h-28 object-cover rounded shadow"
        />
        <div className="space-y-1">
          <span className="text-[9px] text-amber-300 uppercase">
            {book.genre}
          </span>
          <h3 className="font-serif text-base leading-tight">{book.title}</h3>
          <p className="text-xs text-emerald-100">{book.author}</p>
          <p className="text-[10px] text-emerald-200/80 line-clamp-2">
            A secret library containing forgotten volumes...
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button className="flex-1 bg-[#C86D51] text-white py-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1">
          <BookOpen size={14} />
          <span>Start Reading</span>
        </button>
        <button className="p-2 bg-white/10 rounded-lg">
          <Bookmark size={16} />
        </button>
      </div>
    </div>
  );
}

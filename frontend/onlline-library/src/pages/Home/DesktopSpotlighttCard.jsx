import { Star, BookOpen, Bookmark } from "lucide-react";


export default function DesktopSpotlightCard({ book }) {
  return (
    <div className="col-span-5 bg-[#1A362B] text-white p-5 rounded-xl space-y-4 relative overflow-hidden">
      <div className="flex items-center justify-between text-[11px] text-emerald-200">
        <span className="bg-white/10 px-2 py-0.5 rounded uppercase tracking-wider">
          SPOTLIGHT SELECTION
        </span>
        <span className="flex items-center gap-1">
          <Star size={12} className="fill-amber-400 text-amber-400" />{" "}
          {book.rating} ({book.reviews})
        </span>
      </div>

      <div className="flex gap-4">
        <img
          src={book.cover}
          alt={book.title}
          className="w-24 h-36 object-cover rounded shadow-md shrink-0"
        />
        <div className="space-y-1.5">
          <span className="text-[10px] text-amber-300 uppercase tracking-wider">
            {book.genre}
          </span>
          <h3 className="font-serif text-lg leading-snug">{book.title}</h3>
          <p className="text-xs text-emerald-100">{book.author}</p>
          <p className="text-[11px] text-emerald-200/80 line-clamp-3 pt-1">
            "A secret library containing forgotten volumes preserved to touch
            the heart of..."
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-2 pt-1">
        <button className="flex-1 bg-[#C86D51] hover:bg-[#B25C42] text-white py-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5">
          <BookOpen size={14} />
          <span>Start Reading</span>
        </button>
        <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white">
          <Bookmark size={16} />
        </button>
      </div>
    </div>
  );
}

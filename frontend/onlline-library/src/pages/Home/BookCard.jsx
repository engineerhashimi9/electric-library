import { Star, Heart } from "lucide-react";

export default function BookCard({ book }) {
  return (
    <div className="bg-white p-3 md:p-4 rounded-xl border border-[#E2E8F0] space-y-2 relative group hover:shadow-md transition-all">
      <button className="absolute top-5 right-5 p-1.5 bg-white/80 backdrop-blur rounded-full text-gray-600 hover:text-red-500 z-10">
        <Heart size={14} />
      </button>
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={book.img}
          alt={book.title}
          className="w-full h-40 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute bottom-2 left-2 bg-black/60 text-white text-[9px] px-2 py-0.5 rounded backdrop-blur">
          {book.tag}
        </span>
      </div>
      <div className="space-y-0.5">
        <div className="flex items-center gap-1 text-[11px] text-amber-600 font-semibold">
          <Star size={10} className="fill-amber-500 text-amber-500" />
          <span>{book.rating}</span>
        </div>
        <h4 className="font-serif text-sm font-semibold text-[#1A202C] truncate">
          {book.title}
        </h4>
        <p className="text-xs text-[#424844] truncate">{book.author}</p>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-[10px] text-[#424844]">Available Now</span>
        <button className="text-[12px] px-2 py-1 bg-[#1E3A2F] md:px-2 md:py-1 text-white rounded-lg">
          Borrow
        </button>
      </div>
    </div>
  );
}

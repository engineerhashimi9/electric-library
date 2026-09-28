// یک کارت نویسنده
export default function AuthorCard({ author }) {
  return (
    <div className="bg-white p-3 md:p-4 rounded-xl border border-[#E2E8F0] text-center space-y-2 hover:border-[#1A362B] transition-colors">
      <img
        src={author.img}
        alt={author.name}
        className="w-14 h-14 md:w-20 md:h-20 rounded-full object-cover mx-auto"
      />
      <div>
        <h4 className="font-serif text-xs md:text-sm font-semibold text-[#1A202C] truncate">
          {author.name}
        </h4>
        <p className="text-[10px] text-[#718096]">{author.works}</p>
      </div>
    </div>
  );
}

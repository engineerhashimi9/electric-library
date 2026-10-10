// یک کارت نویسنده
export default function AuthorCard({ author }) {
  return (
    <div className="bg-white p-3 md:p-4 rounded-xl border border-[#E2E8F0] text-center space-y-2 hover:border-[#1A362B] transition-colors">
      <img
        src={author.image}
        alt={author.name}
        className="w-14 h-14 md:w-20 md:h-20 rounded-full object-cover mx-auto"
      />
      <div className="flex flex-col gap-2">
        <h4 className="font-serif text-xs md:text-[16px] font-semibold text-[#1A202C] truncate">
          {author.name}
        </h4>
        <p className="hidden md:block text-[10px] text-[#9A4522]">{author.title}</p>
        <p className="hidden md:block text-[14px] text-[#424844]">{author.description}</p>
        <p className="text-[10px] text-[#718096]">{author.works}</p>
      <div className="hidden md:flex items-center justify-center gap-2 ">
          <p>Explore Canon </p>
          <img className="w-3 h-3" src="./arrow.png" alt="" />
      </div>
      </div>
    </div>
  );
}

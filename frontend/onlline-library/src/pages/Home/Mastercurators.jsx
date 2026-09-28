import AuthorCard from "./AuthorCard";

    export default function MasterCurators({ authors }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-lg md:text-xl text-[#1A202C]">
          Master Curators
        </h2>
        <a href="#archived" className="text-xs text-[#718096] hover:underline">
          Archived Catalog
        </a>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-6">
        {authors.map((a) => (
          <AuthorCard key={a.name} author={a} />
        ))}
      </div>
    </div>
  );
}

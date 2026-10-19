import { Search, X } from "lucide-react";

export default function AuthorSearch({ value, onChange }) {
  return (
    <label className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5 shadow-[0_1px_1px_rgba(0,0,0,0.05)] ring-1 ring-transparent transition focus-within:ring-2 focus-within:ring-[#c1c8c3] hover:ring-[#e4e2df] lg:px-5 lg:py-4">
      <Search className="h-4 w-4 shrink-0 text-[#07241a]" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-w-0 flex-1 bg-transparent text-[14px] outline-none placeholder:text-[#727974]"
        placeholder="Search authors by name, discipline, country..."
      />
      {value && (
        <button onClick={() => onChange("")} aria-label="Clear search" className="rounded-full p-1 text-[#424844] transition hover:bg-[#eae8e5] hover:text-[#07241a]">
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </label>
  );
}

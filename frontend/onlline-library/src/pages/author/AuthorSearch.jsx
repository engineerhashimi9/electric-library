import { Search, X } from "lucide-react";

export default function AuthorSearch({ value, onChange }) {
  return (
    <label className="group flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-md shadow-leaf-900/5 ring-1 ring-leaf-100 transition focus-within:ring-2 focus-within:ring-leaf-400 hover:ring-leaf-300">
      <Search className="h-4 w-4 text-leaf-950" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-transparent text-[14px] outline-none placeholder:text-ink-mute"
        placeholder="Search authors by name, discipline, or style..."
      />
      {value && (
        <button onClick={() => onChange("")} aria-label="Clear search" className="rounded-full p-1 text-ink-soft transition hover:bg-leaf-100 hover:text-leaf-950">
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </label>
  );
}

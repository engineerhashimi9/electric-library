import { Mic, Search } from "lucide-react";

export function SearchField({
  value,
  onChange,
  inputRef,
  placeholder = "Search titles, authors, translators...",
  compact = false,
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl bg-white shadow-sm ${
        compact ? "px-4 py-3" : "px-4 py-4 lg:px-6 lg:py-5"
      }`}
    >
      <Search size={compact ? 19 : 24} className="shrink-0 text-[#424b46]" />

      <input
        ref={inputRef}
        type="search"
        aria-label="Search library catalog"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full min-w-0 bg-transparent text-sm text-[#242925] placeholder:text-[#9ba49e] lg:text-base focus:outline-none"  
      />

      {!compact && (
        <span title="Voice search is not connected" aria-hidden="true">
          <Mic size={21} className="text-[#454b47]" />
        </span>
      )}

      <kbd className="hidden shrink-0 rounded-md bg-[#efeeeb] px-2 py-1 text-xs text-[#454b47] lg:block">
        ⌘ K
      </kbd>
    </div>
  );
}

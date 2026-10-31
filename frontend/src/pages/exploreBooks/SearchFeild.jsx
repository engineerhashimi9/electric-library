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
      className={`flex items-center gap-3 rounded-2xl bg-[#FFFFFF] border border-[#D0E8E6] focus-within:border-[#17A296] shadow-[0_10px_30px_-10px_rgba(14, 103, 96,0.08)] transition-all ${
        compact ? "px-4 py-3" : "px-4 py-4 lg:px-6 lg:py-5"
      }`}
    >
      <Search size={compact ? 19 : 24} className="shrink-0 text-[#236D64]" />

      <input
        ref={inputRef}
        type="search"
        aria-label="Search library catalog"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full min-w-0 bg-transparent text-sm text-[#0A2E2C] placeholder:text-[#4A6B68]/70 font-medium lg:text-base focus:outline-none"
      />

      {!compact && (
        <span title="Voice search is not connected" aria-hidden="true">
          <Mic size={21} className="text-[#236D64]" />
        </span>
      )}

      <kbd className="hidden shrink-0 rounded-md bg-[#E6F4F3] border border-[#D0E8E6] px-2 py-1 text-xs font-bold text-[#4A6B68] lg:block">
        ⌘ K
      </kbd>
    </div>
  );
}

import { Mic, Search, X } from "lucide-react";

export function SearchField({
  value,
  onChange,
  inputRef,
  placeholder = "Search titles, authors, translators...",
  compact = false,
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl bg-[#FFFFFF] border border-[#D0E8E6] focus-within:border-[#17A296] focus-within:ring-2 focus-within:ring-[#17A296]/20 shadow-library transition-all ${
        compact ? "px-3.5 py-2.5" : "px-4 py-3.5 lg:px-5 lg:py-4"
      }`}
    >
      <Search size={compact ? 18 : 22} className="shrink-0 text-[#236D64]" aria-hidden="true" />

      <input
        ref={inputRef}
        type="search"
        aria-label={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full min-w-0 bg-transparent text-xs sm:text-sm text-[#0A2E2C] placeholder:text-[#4A6B68]/70 font-medium focus:outline-none"
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="p-1 rounded-full text-[#4A6B68] hover:text-[#0E6760] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
        >
          <X size={16} />
        </button>
      )}

      {!compact && (
        <span title="Voice search is not connected" aria-hidden="true" className="opacity-60">
          <Mic size={20} className="text-[#236D64]" />
        </span>
      )}

      <kbd className="hidden shrink-0 rounded-lg bg-[#E6F4F3] border border-[#D0E8E6] px-2.5 py-1 text-xs font-bold text-[#4A6B68] lg:block shadow-sm">
        ⌘ K
      </kbd>
    </div>
  );
}

export default SearchField;

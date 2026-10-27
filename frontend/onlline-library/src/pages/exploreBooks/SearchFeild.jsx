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
      className={`flex items-center gap-3 rounded-2xl bg-[#FFFFFF] border border-[#DDECE6] focus-within:border-[#10B981] shadow-[0_10px_30px_-10px_rgba(9,38,28,0.08)] transition-all ${
        compact ? "px-4 py-3" : "px-4 py-4 lg:px-6 lg:py-5"
      }`}
    >
      <Search size={compact ? 19 : 24} className="shrink-0 text-[#6B9080]" />

      <input
        ref={inputRef}
        type="search"
        aria-label="Search library catalog"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full min-w-0 bg-transparent text-sm text-[#111C18] placeholder:text-[#52665E]/70 font-medium lg:text-base focus:outline-none"
      />

      {!compact && (
        <span title="Voice search is not connected" aria-hidden="true">
          <Mic size={21} className="text-[#6B9080]" />
        </span>
      )}

      <kbd className="hidden shrink-0 rounded-md bg-[#EAF4F0] border border-[#DDECE6] px-2 py-1 text-xs font-bold text-[#52665E] lg:block">
        ⌘ K
      </kbd>
    </div>
  );
}

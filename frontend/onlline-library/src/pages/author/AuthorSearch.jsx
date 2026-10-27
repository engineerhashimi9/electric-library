import { Search, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AuthorSearch({ value, onChange }) {
  const { t } = useTranslation();

  return (
    <label className="flex items-center gap-3 rounded-2xl bg-[#FFFFFF] border border-[#DDECE6] px-4 py-3.5 shadow-sm transition focus-within:border-[#10B981] lg:px-5 lg:py-4">
      <Search className="h-4 w-4 shrink-0 text-[#6B9080]" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-w-0 flex-1 bg-transparent text-[14px] text-[#111C18] outline-none placeholder:text-[#52665E]/70"
        placeholder={t("authors.searchPlaceholder")}
      />
      {value && (
        <button onClick={() => onChange("")} aria-label="Clear search" className="rounded-full p-1 text-[#52665E] transition hover:text-[#09261C]">
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </label>
  );
}

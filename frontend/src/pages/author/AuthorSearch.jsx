import { Search, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AuthorSearch({ value, onChange }) {
  const { t } = useTranslation();

  return (
    <label className="flex items-center gap-3 rounded-2xl bg-[#FFFFFF] border border-[#D0E8E6] px-4 py-3.5 shadow-library transition-all  focus-within:ring-2  lg:px-5 lg:py-4">
      <Search className="h-4 w-4 shrink-0 text-[#236D64]" aria-hidden="true" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-w-0 flex-1 bg-transparent text-xs sm:text-sm text-[#0A2E2C]  outline-none placeholder:text-[#4A6B68]/70 font-medium"
        placeholder={t("authors.searchPlaceholder")}
        aria-label={t("authors.searchPlaceholder")}
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="rounded-full p-1 text-[#4A6B68] transition-colors hover:text-[#0E6760] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </label>
  );
}

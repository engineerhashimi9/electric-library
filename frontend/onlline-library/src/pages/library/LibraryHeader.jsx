import { Search, SlidersHorizontal, Download } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LibraryHeader() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-[672px] space-y-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E6F4F3] border border-[#D0E8E6] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[#236D64]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#17A296]" />
          {t("library.header.tierBadge")}
        </span>
        <h1 className="font-sans font-bold text-[32px] sm:text-[40px] leading-tight tracking-[-1px] text-[#0E6760]">
          {t("library.header.title")}
        </h1>
        <p className="text-[15px] leading-[24px] text-[#4A6B68]">
          {t("library.header.desc")}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <label className="flex w-full sm:w-[288px] items-center gap-2 rounded-xl bg-[#FFFFFF] border border-[#D0E8E6] focus-within:border-[#17A296] px-3 py-2 shadow-sm transition-colors">
          <Search className="h-3.5 w-3.5 text-[#236D64]" />
          <input
            className="flex-1 bg-transparent text-[13px] text-[#0A2E2C] outline-none placeholder:text-[#4A6B68]/70"
            placeholder={t("library.header.searchPlaceholder")}
          />
          <SlidersHorizontal className="h-3.5 w-3.5 text-[#236D64]" />
        </label>
        <button className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-[13px] font-semibold bg-[#FFFFFF] border border-[#D0E8E6] text-[#0E6760] hover:bg-[#E6F4F3] hover:border-[#17A296] tracking-wide shadow-sm transition-colors">
          <Download className="h-3 w-3 text-[#17A296]" /> {t("library.header.ledgerBtn")}
        </button>
      </div>
    </section>
  );
}

import { Search, SlidersHorizontal, Download } from "lucide-react";

export default function LibraryHeader() {
  return (
    <section className="flex items-end justify-between">
      <div className="max-w-[672px] space-y-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-[EAE8E5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-leaf-950">
          <span className="h-1.5 w-1.5 rounded-full bg-[#9A4522] bg-leaf-600" />
          PATRON CODEX NO. 4082 • ENDOWED SCHOLAR TIER
        </span>
        <h1 className="font-serif text-[40px] leading-[48px] tracking-[-1px] text-leaf-950">My Library &amp; Archive</h1>
        <p className="text-[15px] leading-[24px] text-[#424844]">
          Manage your active digital volumes, synchronized scholarly marginalia, and long-term reading tenure across the
          Lumina federation.
        </p>
      </div>

      <div className="flex items-center gap-2">
        <label className="flex w-[288px] items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm">
          <Search className="h-3.5 w-3.5 text-ink-soft" />
          <input
            className="flex-1 bg-transparent text-[13px] outline-none placeholder:text-leaf-300"
            placeholder="Filter title, author, or shelf..."
          />
          <SlidersHorizontal className="h-3.5 w-3.5 text-ink-soft" />
        </label>
        <button className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-[13px] font-semibold bg-[#EAE8E5] tracking-wide text-leaf-950 shadow-sm">
          <Download className="h-3 w-3" /> Ledger
        </button>
      </div>
    </section>
  );
}

import { PenLine, FileDown } from "lucide-react";
import SectionTitle from "@/component/ui/SectionTitle";
import AnnotationCard from "./AnnotationCard";
import { annotations } from "./library";

export default function IlluminatedMarginalia() {
  return (
    <div className="space-y-6 ">
      <SectionTitle
        icon={PenLine}
        right={
          <span className="rounded-full bg-leaf-100 px-2 py-0.5 text-[11px] font-bold tracking-wide text-leaf-950">
            42 Synchronized
          </span>
        }
      >
        Illuminated Marginalia
      </SectionTitle>

      <div className="space-y-4 ">
        {annotations.map((a) => <AnnotationCard key={a.ref} item={a} />)}

        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-leaf-100 py-3 text-[13px] bg-[#EAE8E5] font-semibold tracking-wide text-leaf-950 shadow-sm">
          <FileDown className="h-3.5 w-3.5" /> Export annotations as Markdown or Obsidian Vault
        </button>
      </div>
    </div>
  );
}

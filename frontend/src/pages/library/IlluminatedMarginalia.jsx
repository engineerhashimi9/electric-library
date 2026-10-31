import { PenLine, FileDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/component/ui/SectionTitle";
import AnnotationCard from "./AnnotationCard";
import { annotations } from "./library";

export default function IlluminatedMarginalia() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <SectionTitle
        icon={PenLine}
        right={
          <span className="rounded-full bg-[#E6F4F3] border border-[#D0E8E6] px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-[#236D64]">
            {t("library.actions.synchronized", { count: 42 })}
          </span>
        }
      >
        {t("library.tabs.annotations")}
      </SectionTitle>

      <div className="space-y-4">
        {annotations.map((a, idx) => (
          <AnnotationCard key={idx} item={a} />
        ))}

        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FFFFFF] border border-[#D0E8E6] py-3 text-[13px] font-semibold tracking-wide text-[#0E6760] hover:bg-[#E6F4F3] hover:border-[#17A296] shadow-sm transition-colors">
          <FileDown className="h-3.5 w-3.5 text-[#17A296]" /> {t("library.actions.exportNotes")}
        </button>
      </div>
    </div>
  );
}

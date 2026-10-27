import { BookCheck, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/component/ui/SectionTitle";
import CompletedItem from "./CompletedItem";
import WishlistCard from "./WishlistCard";
import { completed } from "./library";

export default function CompletedRecently() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <SectionTitle
        icon={BookCheck}
        right={
          <a href="#" className="flex items-center gap-1 text-[13px] font-semibold tracking-wide text-[#10B981] hover:text-[#09261C] transition-colors">
            {t("library.actions.archiveIndex")} <ArrowRight className="h-3 w-3 rtl:rotate-180" />
          </a>
        }
      >
        {t("library.actions.completed")}
      </SectionTitle>

      <div className="space-y-4">
        {completed.map((c, idx) => (
          <CompletedItem key={idx} item={c} />
        ))}
      </div>

      <WishlistCard />
    </div>
  );
}

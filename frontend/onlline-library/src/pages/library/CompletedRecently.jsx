import { BookCheck, ArrowRight } from "lucide-react";
import SectionTitle from "@/component/ui/SectionTitle";
import CompletedItem from "./CompletedItem";
import WishlistCard from "./WishlistCard";
import { completed } from "./library";

export default function CompletedRecently() {
  return (
    <div className="space-y-6">
      <SectionTitle
        icon={BookCheck}
        right={
          <a href="#" className="flex items-center gap-1 text-[13px] font-semibold tracking-wide text-leaf-600">
            Archive index <ArrowRight className="h-3 w-3" />
          </a>
        }
      >
        Completed Recently
      </SectionTitle>

      <div className="space-y-4">
        {completed.map((c) => <CompletedItem key={c.title} item={c} />)}
      </div>

      <WishlistCard />
    </div>
  );
}

import { ArrowRight } from "lucide-react";
import SectionHeading from "@/component/ui/SectionHeading";
import HonorCard from "./HonorCard";
import { honors } from "./profile";

export default function HonorsSection() {
  return (
    <section className="space-y-5 lg:space-y-6 lg:pt-4">
      <SectionHeading
        eyebrow="CURATORIAL DISTINCTIONS"
        title="Patron Badges & Fellowship Honors"
        right={
          <a href="#" className="group flex items-center gap-1 text-[13px] font-semibold tracking-[0.39px] text-[#9a4522] transition hover:text-[#7a361a]">
            View All Guild Achievements (18) <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
          </a>
        }
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">
        {honors.map((h) => <HonorCard key={h.id} honor={h} />)}
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionHeading from "@/component/ui/SectionHeading";
import HonorCard from "./HonorCard";
import { honors } from "./profile";

export default function HonorsSection() {
  const { t } = useTranslation();

  return (
    <section className="space-y-5 lg:space-y-6 lg:pt-4">
      <SectionHeading
        eyebrow="CURATORIAL DISTINCTIONS"
        title={t("profile.honors.title")}
        right={
          <a href="#" className="group flex items-center gap-1 text-[13px] font-semibold tracking-[0.39px] text-[#17A296] transition hover:text-[#0E6760]">
            {t("profile.honors.viewAll")} <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
          </a>
        }
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">
        {honors.map((h) => <HonorCard key={h.id} honor={h} />)}
      </div>
    </section>
  );
}

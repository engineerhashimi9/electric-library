import { useTranslation } from "react-i18next";
import { Bookmark, BookOpen, Mic } from "lucide-react";

export default function BenefitsBanner() {
  const { t } = useTranslation();

  const benefits = [
    {
      id: "marginalia",
      icon: Bookmark,
      title: t("home.benefits.b1Title"),
      text: t("home.benefits.b1Desc"),
    },
    {
      id: "scans",
      icon: BookOpen,
      title: t("home.benefits.b2Title"),
      text: t("home.benefits.b2Desc"),
    },
    {
      id: "borrowing",
      icon: Mic,
      title: t("home.benefits.b3Title"),
      text: t("home.benefits.b3Desc"),
    },
  ];

  return (
    <section
      aria-label="Member Advantages"
      className="bg-[#0E6760] border border-[#156B6B] p-6 sm:p-8 lg:p-10 rounded-3xl space-y-6 shadow-library-lg text-[#FFFFFF] relative overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-24 -left-24 w-64 h-64 bg-[#17A296]/20 rounded-full blur-3xl" />

      <div className="flex items-center gap-2 text-xs font-bold text-[#9EEFE8] uppercase tracking-wider">
        <span className="w-2 h-2 rounded-full bg-[#17A296]" aria-hidden="true" />
        <span>{t("home.benefits.eyebrow")}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map(({ id, icon: IconComponent, title, text }) => (
          <div
            key={id}
            className="flex items-start gap-4 p-4 rounded-2xl bg-[#0A4B46]/60 border border-[#17A296]/20 hover:border-[#17A296]/40 transition-colors"
          >
            <div className="flex justify-center items-center rounded-xl bg-[#156B6B] border border-[#17A296]/30 h-11 w-11 shrink-0 text-[#9EEFE8] shadow-sm">
              <IconComponent size={20} aria-hidden="true" />
            </div>
            <div className="space-y-1 min-w-0">
              <h3 className="font-bold text-sm sm:text-base text-[#FFFFFF] leading-snug">
                {title}
              </h3>
              <p className="text-xs text-[#B8E2DF] leading-relaxed">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

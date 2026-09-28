import { Download, BookOpen, Volume2, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Download,
    title: "Offline Sync Enabled",
    text: "Save manuscripts to read on flights or transit.",
  },
  {
    icon: BookOpen,
    title: "120,000+ Unabridged Titles",
    text: "Unlimited access to the entire archival collection.",
  },
  {
    icon: Volume2,
    title: "Curated Audio Editions",
    text: "Masterfully narrated by archival voice actors.",
  },
];

// بخش ۷: بنر مزایای عضویت (Fellowship)
export default function BenefitsBanner() {
  return (
    <div className="bg-[#F3F4F6] p-5 md:p-8 rounded-2xl space-y-4">
      <div className="flex items-center gap-2 text-xs font-semibold text-[#C86D51]">
        <ShieldCheck size={16} />
        <span>Lumina Fellowship Benefits</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        {benefits.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-gray-100"
          >
            <Icon size={18} className="text-[#1A362B] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#1A202C]">{title}</p>
              <p className="text-[11px] text-[#718096]">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

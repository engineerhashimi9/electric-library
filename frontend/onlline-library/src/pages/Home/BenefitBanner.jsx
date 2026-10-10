import { Download, BookOpen, Volume2, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: "./mark.png",
    title: "256-bit Offline Sync",
    text: "Download unbounded reading folios locally on desktop or e-ink slate. Annotate marginalia securely with zero distraction.",
  },
  {
    icon: "./book.png",
    title: "120,000+ Archival Volumes",
    text: "Transcribed in typographic purity with customizable kerning, paper tint, and original woodblock illustrations.",
  },
  {
    icon: "./mic.png",
    title: "Stage & Audio Editions",
    text: "Lossless studio readings performed by members of the Royal Shakespeare Company and venerable literary dramatists.",
  },
];

export default function BenefitsBanner() {
  return (
    <div className="bg-[#EAE8E5] p-5 md:p-8 rounded-2xl space-y-4">
      <div className="flex items-center gap-2 text-xs font-semibold text-[#C86D51]">
        <span>Lumina Fellowship Benefits</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        {benefits.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="flex items-start gap-3 p-3.5"
          >
            <div className="flex  gap-2">
              <div className="flex justify-center items-center rounded-lg  bg-white h-3 px-2   py-4 ">
                <img className="w-7 " src={Icon} alt="" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-[#07241A]">{title}</p>
                <p className="text-[11px] text-[#424844]">{text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useTranslation } from "react-i18next";

export default function BenefitsBanner() {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: "./mark.png",
      title: t("home.benefits.b1Title"),
      text: t("home.benefits.b1Desc"),
    },
    {
      icon: "./book.png",
      title: t("home.benefits.b2Title"),
      text: t("home.benefits.b2Desc"),
    },
    {
      icon: "./mic.png",
      title: t("home.benefits.b3Title"),
      text: t("home.benefits.b3Desc"),
    },
  ];

  return (
    <div className="bg-[#0E6760] border border-[#156B6B] p-5 md:p-8 rounded-3xl space-y-4 shadow-lg text-[#FFFFFF]">
      <div className="flex items-center gap-2 text-xs font-bold text-[#17A296] uppercase tracking-wider">
        <span>{t("home.benefits.eyebrow")}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        {benefits.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="flex items-start gap-3 p-3.5"
          >
            <div className="flex gap-2">
              <div className="flex justify-center items-center rounded-lg bg-[#156B6B] border border-[#156B6B] h-9 w-9 p-2 shrink-0">
                <img className="w-5" src={Icon} alt="" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-[#FFFFFF]">{title}</p>
                <p className="text-[11px] text-[#B8E2DF] leading-relaxed">{text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

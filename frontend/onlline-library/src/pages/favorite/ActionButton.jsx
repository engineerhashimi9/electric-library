import { BookOpen, Tablet, Hand, Headphones } from "lucide-react";
import { useTranslation } from "react-i18next";

const dark = "bg-[#17A296] text-[#FFFFFF] hover:bg-[#0E6760]";
const soft = "bg-[#E6F4F3] border border-[#D0E8E6] text-[#0E6760] hover:bg-[#D0E8E6]";

export default function ActionButton({ action, className = "" }) {
  const { i18n } = useTranslation();
  const isFa = i18n.language === "fa";

  const config = {
    read: {
      label: isFa ? "خواندن اکنون" : "Read Now",
      icon: BookOpen,
      style: dark,
    },
    digital: {
      label: isFa ? "مطالعه دیجیتال" : "Read Digital",
      icon: Tablet,
      style: dark,
    },
    borrow: {
      label: isFa ? "امانت کتاب" : "Borrow Volume",
      mobileLabel: isFa ? "امانت" : "Borrow",
      icon: Hand,
      style: `${soft} sm:bg-[#17A296] sm:text-[#FFFFFF] sm:hover:bg-[#0E6760] sm:border-transparent`,
    },
    listen: {
      label: isFa ? "شنیدن کتاب" : "Listen Now",
      icon: Headphones,
      style: soft,
    },
  };

  const item = config[action] || config.read;
  const { label, icon: Icon, style, mobileLabel } = item;

  return (
    <button className={`flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-[14px] font-bold transition active:scale-95 sm:px-4 sm:text-[13px] sm:font-semibold ${style} ${className}`}>
      <Icon className="h-4 w-4 shrink-0 sm:h-3.5 sm:w-3.5" />
      <span className="truncate">
        {mobileLabel ? (<><span className="sm:hidden">{mobileLabel}</span><span className="hidden sm:inline">{label}</span></>) : label}
      </span>
    </button>
  );
}

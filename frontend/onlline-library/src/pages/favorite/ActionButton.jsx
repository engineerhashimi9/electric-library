import { BookOpen, Tablet, Hand, Headphones } from "lucide-react";

const dark = "bg-[#07241a] text-white hover:bg-[#1e3a2f]";
const accent = "bg-[#9a4522] text-white hover:bg-[#82391b]";
const soft = "bg-[#eae8e5] text-[#07241a] hover:bg-[#e0ddd9]";

// موبایل: Borrow/Listen به‌صورت خاکستری (مثل Figma)  |  sm+: رنگ‌های دسکتاپ
const config = {
  read: { label: "Read Now", icon: BookOpen, style: dark },
  digital: { label: "Read Digital", icon: Tablet, style: dark },
  borrow: { label: "Borrow Volume", icon: Hand, style: `${soft} sm:bg-[#9a4522] sm:text-white sm:hover:bg-[#82391b]`, mobileLabel: "Borrow" },
  listen: { label: "Listen Now", icon: Headphones, style: soft },
};

export default function ActionButton({ action, className = "" }) {
  const { label, icon: Icon, style, mobileLabel } = config[action];
  return (
    <button className={`flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-[14px] font-bold transition active:scale-95 sm:px-4 sm:text-[13px] sm:font-normal ${style} ${className}`}>
      <Icon className="h-4 w-4 shrink-0 sm:h-3.5 sm:w-3.5" />
      <span className="truncate">
        {mobileLabel ? (<><span className="sm:hidden">{mobileLabel}</span><span className="hidden sm:inline">{label}</span></>) : label}
      </span>
    </button>
  );
}

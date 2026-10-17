import { BookOpen, Tablet, Hand, Headphones } from "lucide-react";

const config = {
  read: { label: "Read Now", icon: BookOpen, style: "bg-leaf-950 text-white hover:bg-leaf-800" },
  digital: { label: "Read Digital", icon: Tablet, style: "bg-leaf-950 text-white hover:bg-leaf-800" },
  borrow: { label: "Borrow Volume", icon: Hand, style: "bg-leaf-600 text-white hover:bg-leaf-700" },
  listen: { label: "Listen Now", icon: Headphones, style: "bg-leaf-100 text-leaf-950 hover:bg-leaf-200" },
};

export default function ActionButton({ action, className = "" }) {
  const { label, icon: Icon, style } = config[action];
  return (
    <button className={`flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-[13px] transition active:scale-95 ${style} ${className}`}>
      <Icon className="h-3.5 w-3.5" /> {label}
    </button>
  );
}

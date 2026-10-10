import { Search, Bookmark, BookOpen, Heart } from "lucide-react";

const items = [
  { icon: BookOpen, label: "Home", active: true },
  { icon: Search, label: "Explore" },
  { icon: Bookmark, label: "Library" },
  { icon: Heart, label: "Favorites" },
];

// بخش ۸: نوار پایین — فقط موبایل
export default function MobileBottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#FBF9F5] border-t border-[#E2E8F0] px-6 py-2 flex justify-between items-center z-50">
      {items.map(({ icon: Icon, label, active }) =>
        active ? (
          <button
            key={label}
            className="flex flex-col items-center text-[#1A362B]"
          >
            <Icon size={20} />
            <span className="text-[10px] font-semibold mt-1">{label}</span>
            <span className="w-1 h-1 bg-[#C86D51] rounded-full mt-0.5"></span>
          </button>
        ) : (
          <button
            key={label}
            className="flex flex-col items-center text-gray-400 hover:text-[#1A362B]"
          >
            <Icon size={20} />
            <span className="text-[10px] mt-1">{label}</span>
          </button>
        ),
      )}
      <button className="flex flex-col items-center text-gray-400 hover:text-[#1A362B]">
        <div className="w-5 h-5 rounded-full bg-gray-300 border border-gray-400" />
        <span className="text-[10px] mt-1">Profile</span>
      </button>
    </div>
  );
}

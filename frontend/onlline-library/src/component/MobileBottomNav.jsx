import { Search, Bookmark, BookOpen, Heart, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function MobileBottomNav() {
  const { t } = useTranslation();

  const items = [
    { icon: BookOpen, label: t("bottomNav.home"), path: "/" },
    { icon: Search, label: t("bottomNav.explore"), path: "/explorebooks" },
    { icon: Bookmark, label: t("bottomNav.library"), path: "/library" },
    { icon: Heart, label: t("bottomNav.favorites"), path: "/favorite" },
    { icon: User, label: t("bottomNav.profile"), path: "/profile" },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#F4FAFA]/95 backdrop-blur-md border-t border-[#D0E8E6] px-2 sm:px-6 py-2 flex justify-around items-center z-50">
      {items.map(({ icon: Icon, label, path }) => (
        <NavLink
          key={path}
          to={path}
          end={path === "/"}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center min-w-[56px] py-0.5 transition-colors ${
              isActive
                ? "text-[#0E6760]"
                : "text-[#4A6B68] hover:text-[#17A296]"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Icon size={20} />
              <span
                className={`text-[10px] mt-1 truncate max-w-[68px] ${
                  isActive ? "font-bold" : "font-medium"
                }`}
              >
                {label}
              </span>
              {isActive && (
                <span className="w-1 h-1 bg-[#17A296] rounded-full mt-0.5" />
              )}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
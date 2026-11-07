import { Search, BookOpen, Heart, Users } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function MobileBottomNav() {
  const { t } = useTranslation();

  const items = [
    { icon: BookOpen, label: t("bottomNav.home", "Home"), path: "/" },
    { icon: Search, label: t("bottomNav.explore", "Explore"), path: "/explorebooks" },
    { icon: Heart, label: t("bottomNav.favorites", "Favorites"), path: "/favorite" },
    { icon: Users, label: t("bottomNav.authors", t("nav.authors", "Authors")), path: "/author" },
  ];

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 bg-[#F4FAFA]/95 backdrop-blur-lg border-t border-[#D0E8E6] px-2 sm:px-6 py-1.5 flex justify-around items-center z-50 shadow-library-lg"
    >
      {items.map(({ icon: Icon, label, path }) => (
        <NavLink
          key={path}
          to={path}
          end={path === "/"}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center min-w-[60px] min-h-[48px] py-1 rounded-xl transition-all ${
              isActive
                ? "text-[#0E6760]"
                : "text-[#4A6B68] hover:text-[#17A296]"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Icon size={20} className={isActive ? "text-[#0E6760]" : "text-[#4A6B68]"} aria-hidden="true" />
              <span
                className={`text-[11px] sm:text-xs mt-0.5 truncate max-w-[72px] ${
                  isActive ? "font-extrabold text-[#0E6760]" : "font-semibold"
                }`}
              >
                {label}
              </span>
              {isActive && (
                <span className="w-1.5 h-1.5 bg-[#17A296] rounded-full mt-0.5" aria-hidden="true" />
              )}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

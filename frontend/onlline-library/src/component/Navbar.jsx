import React from "react";
import { Search, Heart } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useTranslation();

  const navItems = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.explore"), to: "/explorebooks" },
    { label: t("nav.library"), to: "/library" },
    { label: t("nav.favorite"), to: "/favorite" },
    { label: t("nav.authors"), to: "/author" },
  ];

  return (
    <>
      <header className="hidden md:flex items-center justify-between gap-4 px-4 lg:px-8 py-4.5 border-b border-[#D0E8E6] bg-[#F4FAFA]/85 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4 lg:gap-8 min-w-0">
          <NavLink to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-[#0E6760] rounded flex items-center justify-center text-[#FFFFFF] font-bold">
              B
            </div>
            <span className="text-lg lg:text-xl font-bold tracking-tight text-[#0E6760]">
              {t("nav.brand")}
            </span>
          </NavLink>

          <nav className="flex items-center gap-1 lg:gap-3 text-xs font-semibold overflow-x-auto no-scrollbar">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `px-2.5 py-1.5 rounded-[6px] whitespace-nowrap transition-colors ${
                    isActive
                      ? "bg-[#E6F4F3] text-[#0E6760] font-bold"
                      : "text-[#4A6B68] hover:text-[#17A296]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2.5 lg:gap-4 shrink-0">
          <div className="flex items-center gap-2.5 lg:gap-3">
            <div className="relative w-36 lg:w-56 xl:w-64">
              <Search
                className="absolute left-3 rtl:left-auto rtl:right-3 top-2.5 text-[#236D64]"
                size={15}
              />
              <input
                type="text"
                placeholder={t("nav.searchPlaceholder")}
                className="w-full bg-[#FFFFFF] border border-[#D0E8E6] text-[#0A2E2C] placeholder-[#4A6B68]/70 text-xs pl-9 pr-3 rtl:pl-3 rtl:pr-9 py-2 rounded-lg focus:outline-none focus:border-[#17A296] shadow-sm transition-colors"
              />
            </div>

            <NavLink to="/favorite" className="hidden sm:inline-flex">
              <Heart
                size={16}
                className="text-[#236D64] hover:text-[#17A296] cursor-pointer transition-colors"
              />
            </NavLink>
            <img
              className="w-3.5 opacity-90 hidden lg:block"
              src="./noticification.png"
              alt={t("nav.notifications")}
            />
          </div>

          <LanguageSwitcher compact />

          <NavLink
            to="/profile"
            className="flex items-center gap-2.5 border-l rtl:border-l-0 rtl:border-r border-[#D0E8E6] pl-3 rtl:pl-0 rtl:pr-3"
          >
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
              alt="User Avatar"
              className="w-8 h-8 rounded-full object-cover border border-[#D0E8E6] shrink-0"
            />
            <div className="hidden xl:block text-left rtl:text-right">
              <p className="text-xs font-bold text-[#0E6760] leading-tight">
                {t("nav.userName")}
              </p>
              <p className="text-[10px] text-[#4A6B68] font-medium">
                {t("nav.userRole")}
              </p>
            </div>
          </NavLink>
        </div>
      </header>

      <header className="md:hidden sticky top-0 z-50 flex items-center justify-between px-4 py-3.5 bg-[#F4FAFA]/90 backdrop-blur-md border-b border-[#D0E8E6]">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#0E6760] rounded flex items-center justify-center text-[#FFFFFF] font-bold text-sm">
            B
          </div>
          <span className="text-lg font-bold text-[#0E6760]">
            {t("nav.brand")}
          </span>
        </NavLink>
        <div className="flex items-center gap-2">
          <LanguageSwitcher compact />
          <NavLink
            to="/explorebooks"
            className="p-1.5 bg-[#FFFFFF] border border-[#D0E8E6] rounded-lg text-[#0E6760]"
            aria-label="Search"
          >
            <Search size={18} />
          </NavLink>
          <NavLink to="/profile">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
              alt="User Avatar"
              className="w-7 h-7 rounded-full object-cover border border-[#D0E8E6]"
            />
          </NavLink>
        </div>
      </header>
    </>
  );
}
import React from "react";
import { Search, Heart, LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/hooks/useAuth";
import Avatar from "./ui/Avatar";
import LanguageSwitcher from "./LanguageSwitcher";
import BrandLogo from "./ui/BrandLogo";

export default function Navbar() {
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  const navItems = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.explore"), to: "/explorebooks" },
    { label: t("nav.favorite"), to: "/favorite" },
    { label: t("nav.authors"), to: "/author" },
  ];

  return (
    <>
      {/* Desktop & Tablet Header */}
      <header className="hidden md:flex items-center justify-between gap-4 px-5 lg:px-8 py-3.5 border-b border-[#D0E8E6] bg-[#F4FAFA]/90 backdrop-blur-md sticky top-0 z-50 transition-all">
        <div className="flex items-center gap-6 lg:gap-8 min-w-0">
          <NavLink
            to="/"
            className="flex items-center gap-2.5 shrink-0 group rounded-xl p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
          >
            <BrandLogo className="w-8 h-8 rounded-xl transition-transform group-hover:scale-105" />
            <span className="text-xl font-extrabold tracking-tight text-[#0E6760] transition-colors group-hover:text-[#17A296]">
              {t("nav.brand")}
            </span>
          </NavLink>

          <nav
            aria-label="Main Navigation"
            className="flex items-center gap-1.5 lg:gap-2 text-xs lg:text-sm font-bold overflow-x-auto no-scrollbar"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] ${
                    isActive
                      ? "bg-[#E6F4F3] text-[#0E6760] shadow-library-sm font-extrabold"
                      : "text-[#4A6B68] hover:text-[#0E6760] hover:bg-[#E6F4F3]/50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3 lg:gap-4 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="relative w-40 lg:w-60 xl:w-72">
              <Search
                className="absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 text-[#236D64] pointer-events-none"
                size={16}
                aria-hidden="true"
              />
              <input
                type="search"
                aria-label={t("nav.searchPlaceholder")}
                placeholder={t("nav.searchPlaceholder")}
                className="w-full bg-[#FFFFFF] border border-[#D0E8E6] text-[#0A2E2C] placeholder-[#4A6B68]/70 text-xs sm:text-sm pl-10 pr-3 rtl:pl-3 rtl:pr-10 py-2 rounded-xl focus-visible:outline-none focus:border-[#17A296] focus:ring-2 focus:ring-[#17A296]/20 shadow-library-sm transition-all"
              />
            </div>

            <NavLink
              to="/favorite"
              aria-label={t("nav.favorite")}
              className="p-2 rounded-xl text-[#236D64] hover:text-[#17A296] hover:bg-[#E6F4F3] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
            >
              <Heart size={18} />
            </NavLink>

            <button
              type="button"
              aria-label={t("nav.notifications")}
              className="p-2 rounded-xl text-[#236D64] hover:text-[#17A296] hover:bg-[#E6F4F3] transition-colors hidden lg:inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
            >
              <img
                className="w-4 h-4 opacity-80"
                src="./noticification.png"
                alt=""
                aria-hidden="true"
              />
            </button>
          </div>

          <LanguageSwitcher compact />

          {user ? (
            <div className="flex items-center gap-2.5 border-l rtl:border-l-0 rtl:border-r border-[#D0E8E6] pl-3 rtl:pl-0 rtl:pr-3">
              <Avatar
                name={user.name}
                className="w-9 h-9 text-xs border-2 border-[#D0E8E6] shrink-0 shadow-library-sm"
              />
              <div className="hidden xl:block text-start max-w-[140px]">
                <p className="text-xs font-bold text-[#0E6760] leading-tight truncate">
                  {user.name}
                </p>
                <p className="text-[11px] text-[#4A6B68] font-medium truncate">
                  {t("nav.userRole")}
                </p>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                title={t("nav.signIn")}
                aria-label="Sign out"
                className="p-2 rounded-xl text-[#4A6B68] hover:text-[#0E6760] hover:bg-[#E6F4F3] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
              >
                <LogOut size={16} aria-hidden="true" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2 border-l rtl:border-l-0 rtl:border-r border-[#D0E8E6] pl-3 rtl:pl-0 rtl:pr-3">
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] ${
                    isActive
                      ? "bg-[#E6F4F3] text-[#0E6760]"
                      : "text-[#0E6760] hover:bg-[#E6F4F3]"
                  }`
                }
              >
                {t("nav.signIn")}
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shadow-library-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] ${
                    isActive
                      ? "bg-[#0E6760] text-[#FFFFFF]"
                      : "bg-[#17A296] hover:bg-[#0E6760] text-[#FFFFFF]"
                  }`
                }
              >
                {t("nav.signUp")}
              </NavLink>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Top Header */}
      <header className="md:hidden sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-[#F4FAFA]/95 backdrop-blur-md border-b border-[#D0E8E6]">
        <NavLink
          to="/"
          className="flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
        >
          <BrandLogo className="w-7 h-7 rounded-lg" />
          <span className="text-lg font-extrabold text-[#0E6760]">
            {t("nav.brand")}
          </span>
        </NavLink>

        <div className="flex items-center gap-2">
          <LanguageSwitcher compact />
          <NavLink
            to="/explorebooks"
            className="p-2 bg-[#FFFFFF] border border-[#D0E8E6] rounded-xl text-[#0E6760] shadow-library-sm hover:bg-[#E6F4F3] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
            aria-label={t("nav.explore")}
          >
            <Search size={18} />
          </NavLink>
          {user ? (
            <div className="flex items-center gap-1.5">
              <Avatar
                name={user.name}
                className="w-8 h-8 text-xs border border-[#D0E8E6] shadow-library-sm"
              />
              <button
                type="button"
                onClick={handleLogout}
                aria-label="Sign out"
                className="p-2 bg-[#FFFFFF] border border-[#D0E8E6] rounded-xl text-[#4A6B68] hover:text-[#0E6760] hover:bg-[#E6F4F3] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
              >
                <LogOut size={16} aria-hidden="true" />
              </button>
            </div>
          ) : (
            <NavLink
              to="/signin"
              className="px-3 py-1.5 bg-[#17A296] hover:bg-[#0E6760] text-[#FFFFFF] text-xs font-bold rounded-xl shadow-library-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
            >
              {t("nav.signIn")}
            </NavLink>
          )}
        </div>
      </header>
    </>
  );
}

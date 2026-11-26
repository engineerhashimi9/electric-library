import React from "react";
import { Search, Heart, LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/hooks/useAuth";
import Avatar from "../ui/Avatar";
import LanguageSwitcher from "../common/LanguageSwitcher";
import BrandLogo from "../ui/BrandLogo";

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
      <header className="app-header">
        <div className="nav-brand-group">
          <NavLink to="/" className="nav-brand-link">
            <BrandLogo />
            <span className="nav-brand-title">{t("nav.brand")}</span>
          </NavLink>

          <nav aria-label="Main Navigation" className="nav-links">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="nav-actions-group">
          <div className="nav-search-wrapper">
            <Search className="nav-search-icon" size={16} aria-hidden="true" />
            <input
              type="search"
              aria-label={t("nav.searchPlaceholder")}
              placeholder={t("nav.searchPlaceholder")}
              className="nav-search-input"
            />
          </div>

          <NavLink
            to="/favorite"
            aria-label={t("nav.favorite")}
            className="nav-icon-button"
          >
            <Heart size={18} />
          </NavLink>

          <LanguageSwitcher compact />

          {user ? (
            <div className="nav-user-badge">
              <Avatar
                name={user.name}
                className="w-9 h-9"
              />
              <div className="nav-user-info">
                <p className="nav-user-name">{user.name}</p>
                <p className="nav-user-role">{t("nav.userRole")}</p>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                title="Sign out"
                aria-label="Sign out"
                className="nav-icon-button"
              >
                <LogOut size={16} aria-hidden="true" />
              </button>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                borderLeft: "1px solid var(--border-color)",
                paddingLeft: "0.75rem",
              }}
            >
              <NavLink to="/signin" className="btn btn-ghost btn-sm">
                {t("nav.signIn")}
              </NavLink>
              <NavLink to="/signup" className="btn btn-primary btn-sm">
                {t("nav.signUp")}
              </NavLink>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Top Header */}
      <header className="mobile-header">
        <NavLink to="/" className="d-flex items-center gap-2">
          <BrandLogo />
          <span
            style={{
              fontSize: "1.2rem",
              fontWeight: 800,
              color: "var(--primary)",
            }}
          >
            {t("nav.brand")}
          </span>
        </NavLink>

        <div className="mobile-header-actions">
          <LanguageSwitcher compact />
          <NavLink
            to="/explorebooks"
            className="btn btn-outline btn-sm"
            style={{ padding: "0.4rem 0.6rem" }}
            aria-label={t("nav.explore")}
          >
            <Search size={16} />
          </NavLink>
          {user ? (
            <div className="d-flex items-center gap-2">
              <Avatar name={user.name} className="w-8 h-8" />
              <button
                type="button"
                onClick={handleLogout}
                aria-label="Sign out"
                className="btn btn-outline btn-sm"
                style={{ padding: "0.4rem 0.6rem" }}
              >
                <LogOut size={15} />
              </button>
            </div>
          ) : (
            <NavLink to="/signin" className="btn btn-primary btn-sm">
              {t("nav.signIn")}
            </NavLink>
          )}
        </div>
      </header>
    </>
  );
}

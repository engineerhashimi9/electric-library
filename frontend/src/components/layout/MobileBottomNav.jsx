import React from "react";
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
    <nav aria-label="Mobile Bottom Navigation" className="mobile-bottom-nav">
      {items.map(({ icon: Icon, label, path }) => (
        <NavLink
          key={path}
          to={path}
          end={path === "/"}
          className={({ isActive }) =>
            `mobile-nav-link ${isActive ? "active" : ""}`
          }
        >
          {({ isActive }) => (
            <>
              <Icon
                size={20}
                style={{
                  color: isActive ? "var(--primary)" : "var(--text-secondary)",
                }}
                aria-hidden="true"
              />
              <span className="mobile-nav-label">{label}</span>
              {isActive && <span className="mobile-nav-indicator" aria-hidden="true" />}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

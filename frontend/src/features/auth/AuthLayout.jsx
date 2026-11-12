import React from "react";
import { BookOpen, BookmarkCheck, Globe2, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import BrandLogo from "@/component/ui/BrandLogo";

export const AuthLayout = ({ children }) => {
  const { t } = useTranslation();

  const highlights = [
    { icon: BookOpen, text: t("auth.benefit1") },
    { icon: BookmarkCheck, text: t("auth.benefit2") },
    { icon: Globe2, text: t("auth.benefit3") },
  ];

  return (
    <div className="min-h-screen bg-[#F4FAFA] text-[#0A2E2C] flex items-center justify-center py-6 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Desktop Editorial Sanctuary Showcase */}
        <aside
          aria-label="Library Sanctuary Overview"
          className="hidden lg:flex lg:col-span-5 flex-col justify-between bg-[#0E6760] border border-[#156B6B] rounded-3xl p-8 text-[#FFFFFF] shadow-library-lg relative overflow-hidden"
        >
          <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 bg-[#17A296]/20 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 w-64 h-64 bg-[#236D64]/30 rounded-full blur-3xl" />

          <div className="relative space-y-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9EEFE8] rounded-xl p-1"
            >
              <BrandLogo className="w-9 h-9 rounded-xl shadow-sm" />
              <span className="text-xl font-extrabold tracking-tight text-[#FFFFFF]">
                {t("nav.brand")}
              </span>
            </Link>

            <div className="space-y-3 pt-2">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9EEFE8]">
                <Sparkles size={14} aria-hidden="true" />
                <span>{t("auth.showcaseEyebrow")}</span>
              </p>
              <h2 className="text-2xl xl:text-3xl font-extrabold leading-snug text-[#FFFFFF]">
                {t("auth.showcaseTitle")}
              </h2>
              <p className="text-sm text-[#B8E2DF] leading-relaxed">
                {t("auth.showcaseDesc")}
              </p>
            </div>

            <ul className="space-y-3.5 pt-2">
              {highlights.map(({ icon: Icon, text }, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#156B6B] border border-[#17A296]/30 text-[#9EEFE8]">
                    <Icon size={16} aria-hidden="true" />
                  </span>
                  <span className="text-xs xl:text-sm text-[#E6F4F3] font-medium leading-relaxed pt-1">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mt-8 pt-6 border-t border-[#156B6B] space-y-1.5">
            <p className="italic text-xs xl:text-sm text-[#FFFFFF] leading-relaxed">
              {t("auth.quote")}
            </p>
            <p className="text-xs text-[#9EEFE8] font-bold">
              {t("auth.quoteAuthor")}
            </p>
          </div>
        </aside>

        {/* Form Container */}
        <main className="lg:col-span-7 flex items-center justify-center">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;

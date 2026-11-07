import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck, Info } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Input } from "@/component/ui/Input";
import { Button } from "@/component/ui/Button";
import { Checkbox } from "@/component/ui/Checkbox";
import LanguageSwitcher from "@/component/LanguageSwitcher";

export const SignInForm = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("clara.vane@lumina.org");
  const [password, setPassword] = useState("archival-scholar-2024");

  return (
    <div className="w-full max-w-md mx-auto p-5 sm:p-8 space-y-6 bg-[#FFFFFF] border border-[#D0E8E6] rounded-3xl shadow-library-lg text-[#0A2E2C]">
      {/* Banner / Top Badge */}
      <div className="flex items-center justify-between text-xs text-[#4A6B68]">
        <span className="px-3 py-1 bg-[#E6F4F3] border border-[#D0E8E6] rounded-full text-[#236D64] font-bold">
          {t("auth.desk")}
        </span>
        <LanguageSwitcher compact />
      </div>

      {/* Main Heading */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-[#236D64] tracking-wider uppercase block">
          {t("nav.brand")} {t("library.header.tierBadge", "Fellowship")}
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0E6760] leading-snug">
          {t("auth.welcome")}
        </h1>
        <p className="text-xs sm:text-sm text-[#4A6B68] leading-relaxed">
          {t("auth.desc")}
        </p>
      </div>

      {/* Status Alert Card */}
      <div className="bg-[#E6F4F3] border border-[#D0E8E6] p-4 rounded-2xl flex items-start gap-3 text-xs sm:text-sm text-[#0E6760]">
        <ShieldCheck className="text-[#17A296] shrink-0 mt-0.5" size={20} aria-hidden="true" />
        <div className="space-y-0.5">
          <p className="font-bold text-[#0E6760]">{t("auth.cloudActive")}</p>
          <p className="text-xs text-[#4A6B68] leading-relaxed">
            {t("auth.cloudDesc")}
          </p>
        </div>
      </div>

      {/* Input Fields */}
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <Input
          label={t("auth.emailLabel")}
          type="email"
          placeholder="clara.vane@lumina.org"
          icon={Mail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="relative">
          <Input
            label={t("auth.passLabel")}
            type={showPassword ? "text" : "password"}
            placeholder="••••••••••••"
            icon={Lock}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-3.5 rtl:right-auto rtl:left-3.5 top-[38px] text-[#236D64] hover:text-[#0E6760] transition-colors p-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <div className="flex items-center justify-between pt-1">
          <Checkbox
            id="keep-active"
            label={t("auth.keepActive")}
            defaultChecked
          />
          <button
            type="button"
            title={t("auth.terms")}
            aria-label="Information"
            className="text-[#236D64] hover:text-[#0E6760] p-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
          >
            <Info size={16} />
          </button>
        </div>

        <Button
          type="submit"
          variant="primary"
          fullWidth
          size="lg"
          className="mt-3 font-bold flex items-center justify-center gap-2"
        >
          <span>{t("auth.submit")}</span>
          <ArrowRight size={18} className="rtl:rotate-180" />
        </Button>
      </form>

      {/* Social / SSO Logins */}
      <div className="space-y-3 pt-2">
        <div className="relative flex items-center justify-center">
          <div className="border-t border-[#D0E8E6] w-full" />
          <span className="bg-[#FFFFFF] px-3 text-[11px] text-[#4A6B68] font-bold uppercase tracking-wider absolute">
            {t("auth.orContinue")}
          </span>
        </div>

        <div className="space-y-2.5 pt-3">
          <Button
            variant="outline"
            fullWidth
            className="justify-between text-xs sm:text-sm font-semibold"
          >
            <span className="bg-[#E6F4F3] border border-[#D0E8E6] text-[#236D64] text-xs px-2 py-0.5 rounded-lg font-bold">
              EduID
            </span>
            <span>{t("auth.sso")}</span>
          </Button>
          <Button
            variant="outline"
            fullWidth
            className="justify-between text-xs sm:text-sm font-semibold"
          >
            <span className="text-[#17A296] font-extrabold text-sm">G</span>
            <span>{t("auth.google")}</span>
          </Button>
          <Button
            variant="outline"
            fullWidth
            className="justify-between text-xs sm:text-sm font-semibold"
          >
            <span className="text-[#0E6760] font-extrabold text-sm"></span>
            <span>{t("auth.apple")}</span>
          </Button>
        </div>
      </div>

      {/* Quote Banner */}
      <div className="bg-[#0E6760] border border-[#156B6B] p-4 rounded-2xl text-center space-y-1 shadow-library-sm">
        <p className="italic text-xs sm:text-sm text-[#FFFFFF] leading-relaxed">
          {t("auth.quote")}
        </p>
        <p className="text-xs text-[#17A296] font-bold">{t("auth.quoteAuthor")}</p>
      </div>

      {/* Footer Links */}
      <div className="text-center space-y-2 pt-2 text-xs sm:text-sm">
        <p className="text-[#4A6B68]">
          {t("auth.newMember")}{" "}
          <a
            href="#request"
            className="text-[#17A296] font-bold hover:underline underline-offset-2"
          >
            {t("auth.request")}
          </a>
        </p>
        <div className="text-xs text-[#4A6B68] flex items-center justify-center gap-2">
          <span>{t("auth.encryption")}</span>
          <span>•</span>
          <a href="#terms" className="hover:text-[#0E6760] hover:underline">
            {t("auth.terms")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;

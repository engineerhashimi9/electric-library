import React from "react";
import { Mail, Lock, Eye, ArrowRight, ShieldCheck, Info } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Input } from "@/component/ui/Input";
import { Button } from "@/component/ui/Button";
import { Checkbox } from "@/component/ui/Checkbox";
import { LanguageSwitcher } from "../../component/LanguageSwitcher";

export const SignInForm = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-md mx-auto p-4 space-y-6 text-[#111C18]">
      {/* Banner / Top Badge */}
      <div className="flex items-center justify-between text-xs text-[#52665E]">
        <span className="px-2.5 py-1 bg-[#EAF4F0] border border-[#DDECE6] rounded-full text-[#0D5C46] font-bold">
          {t("auth.desk")}
        </span>
        <LanguageSwitcher />
      </div>

      {/* Main Heading */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-[#6B9080] tracking-wider uppercase">
          Bargin Fellowship
        </span>
        <h1 className="text-2xl font-sans text-[#09261C] font-extrabold">
          {t("auth.welcome")}
        </h1>
        <p className="text-xs text-[#52665E] leading-relaxed">
          {t("auth.desc")}
        </p>
      </div>

      {/* Status Alert Card */}
      <div className="bg-[#EAF4F0] border border-[#DDECE6] p-3.5 rounded-xl flex items-start gap-3 text-xs text-[#09261C]">
        <ShieldCheck className="text-[#10B981] shrink-0 mt-0.5" size={18} />
        <div className="space-y-0.5">
          <p className="font-bold text-[#09261C]">{t("auth.cloudActive")}</p>
          <p className="text-[#52665E]">
            {t("auth.cloudDesc")}
          </p>
        </div>
      </div>

      {/* Input Fields */}
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <Input
          label={t("auth.emailLabel")}
          helperText="e.g. #LUM-8842"
          placeholder="clara.vane@lumina.org"
          icon={Mail}
          defaultValue="clara.vane@lumina.org"
        />

        <Input
          label={t("auth.passLabel")}
          helperText={t("auth.forgotKey")}
          type="password"
          placeholder="••••••••••••"
          icon={Lock}
          rightIcon={Eye}
          defaultValue="archival-scholar-2024"
        />

        <div className="flex items-center justify-between pt-1">
          <Checkbox
            id="keep-active"
            label={t("auth.keepActive")}
            defaultChecked
          />
          <Info size={14} className="text-[#6B9080]" />
        </div>

        <Button variant="primary" fullWidth className="mt-2 font-bold flex items-center justify-center gap-2">
          <span>{t("auth.submit")}</span>
          <ArrowRight size={16} className="rtl:rotate-180" />
        </Button>
      </form>

      {/* Social / SSO Logins */}
      <div className="space-y-3 pt-2">
        <div className="relative flex items-center justify-center">
          <div className="border-t border-[#DDECE6] w-full" />
          <span className="bg-[#F6FBF9] px-3 text-[10px] text-[#52665E] uppercase tracking-wider absolute">
            {t("auth.orContinue")}
          </span>
        </div>

        <div className="space-y-2 pt-2">
          <Button
            variant="outline"
            fullWidth
            className="justify-between text-xs"
          >
            <span className="bg-[#EAF4F0] border border-[#DDECE6] text-[#0D5C46] text-[10px] px-1.5 py-0.5 rounded font-bold">
              EduID
            </span>
            <span>{t("auth.sso")}</span>
          </Button>
          <Button
            variant="outline"
            fullWidth
            className="justify-between text-xs"
          >
            <span className="text-[#10B981] font-bold">›</span>
            <span>{t("auth.google")}</span>
          </Button>
          <Button
            variant="outline"
            fullWidth
            className="justify-between text-xs"
          >
            <span className="text-[#10B981] font-bold">›</span>
            <span>{t("auth.apple")}</span>
          </Button>
        </div>
      </div>

      {/* Quote Banner */}
      <div className="bg-[#09261C] border border-[#163A2E] p-4 rounded-xl text-center space-y-1">
        <p className="font-sans italic text-xs text-[#FFFFFF]">
          {t("auth.quote")}
        </p>
        <p className="text-[10px] text-[#10B981]">{t("auth.quoteAuthor")}</p>
      </div>

      {/* Footer Links */}
      <div className="text-center space-y-2 pt-2 text-xs">
        <p className="text-[#52665E]">
          {t("auth.newMember")}{" "}
          <a
            href="#request"
            className="text-[#10B981] font-bold hover:underline"
          >
            {t("auth.request")}
          </a>
        </p>
        <div className="text-[10px] text-[#52665E] flex items-center justify-center gap-2">
          <span>{t("auth.encryption")}</span>
          <span>•</span>
          <a href="#terms" className="hover:text-[#09261C] hover:underline">
            {t("auth.terms")}
          </a>
        </div>
      </div>
    </div>
  );
};

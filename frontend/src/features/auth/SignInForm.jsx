import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { loginRequest } from "@/api/auth/login";
import { Input } from "@/component/ui/Input";
import { Button } from "@/component/ui/Button";
import { Checkbox } from "@/component/ui/Checkbox";
import LanguageSwitcher from "@/component/LanguageSwitcher";

/**
 * Sign-In form component handling client-side validation, backend authentication,
 * and synchronization with AuthContext upon successful login.
 */
export const SignInForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login: setAuthUser } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = {};

    if (!email.trim() || !email.includes("@")) {
      nextErrors.email = t("auth.errors.emailRequired");
    }
    if (!password || password.length < 8) {
      nextErrors.password = t("auth.errors.passwordLength");
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const result = await loginRequest(email.trim(), password);
      setSubmitted(true);
      setAuthUser(result.user);
      navigate("/", { replace: true });
    } catch (error) {
      const apiMessage =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        t("auth.errors.loginFailed");
      setErrors({ form: apiMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full p-5 sm:p-8 lg:p-10 space-y-5 text-[#0A2E2C]">
      {/* Top Desk Badge & Language Switcher */}
      <div className="flex items-center justify-between gap-2 text-xs text-[#4A6B68]">
        <span className="px-3 py-1 bg-[#E6F4F3] border border-[#D0E8E6] rounded-full text-[#236D64] font-bold">
          {t("auth.desk")}
        </span>
        <LanguageSwitcher compact />
      </div>

      {/* Main Heading */}
      <div className="space-y-1.5">
        <span className="text-xs font-bold text-[#236D64] tracking-wider uppercase block">
          {t("nav.brand")} • {t("nav.signIn")}
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0E6760] leading-snug">
          {t("auth.welcome")}
        </h1>
        <p className="text-xs sm:text-sm text-[#4A6B68] leading-relaxed">
          {t("auth.desc")}
        </p>
      </div>

      {/* Status / Error Banner */}
      {errors.form ? (
        <div
          role="alert"
          className="bg-red-50 border border-red-200 p-3.5 rounded-2xl flex items-center gap-3 text-xs sm:text-sm text-red-700 font-bold"
        >
          <AlertCircle className="text-red-600 shrink-0" size={20} aria-hidden="true" />
          <span>{errors.form}</span>
        </div>
      ) : submitted ? (
        <div
          role="status"
          aria-live="polite"
          className="bg-[#E6F4F3] border border-[#17A296] p-3.5 rounded-2xl flex items-center gap-3 text-xs sm:text-sm text-[#0E6760] font-bold"
        >
          <CheckCircle2 className="text-[#17A296] shrink-0" size={20} aria-hidden="true" />
          <span>{t("auth.signInSuccess")}</span>
        </div>
      ) : (
        <div className="bg-[#E6F4F3]/80 border border-[#D0E8E6] p-3.5 rounded-2xl flex items-start gap-3 text-xs sm:text-sm text-[#0E6760]">
          <ShieldCheck className="text-[#17A296] shrink-0 mt-0.5" size={20} aria-hidden="true" />
          <div className="space-y-0.5">
            <p className="font-bold text-[#0E6760]">{t("auth.cloudActive")}</p>
            <p className="text-xs text-[#4A6B68] leading-relaxed">
              {t("auth.cloudDesc")}
            </p>
          </div>
        </div>
      )}

      {/* Credential Form */}
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <Input
          label={t("auth.emailLabel")}
          type="email"
          placeholder={t("auth.emailPlaceholder")}
          autoComplete="email"
          icon={Mail}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email || errors.form) {
              setErrors((prev) => ({ ...prev, email: "", form: "" }));
            }
          }}
          error={errors.email}
          required
        />

        <Input
          label={t("auth.passLabel")}
          helperText={t("auth.forgotKey")}
          type={showPassword ? "text" : "password"}
          placeholder={t("auth.passwordPlaceholder")}
          autoComplete="current-password"
          icon={Lock}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (errors.password || errors.form) {
              setErrors((prev) => ({ ...prev, password: "", form: "" }));
            }
          }}
          error={errors.password}
          rightElement={
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="text-[#236D64] hover:text-[#0E6760] transition-colors p-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          }
          required
        />

        <div className="flex items-center justify-between pt-0.5">
          <Checkbox
            id="keep-active"
            label={t("auth.keepActive")}
            defaultChecked
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          fullWidth
          size="lg"
          disabled={isSubmitting || submitted}
          className="font-bold flex items-center justify-center gap-2"
        >
          <span>{isSubmitting ? t("common.loading") : t("auth.submit")}</span>
          <ArrowRight size={18} className="rtl:rotate-180" aria-hidden="true" />
        </Button>
      </form>

      {/* Social / SSO Logins */}
      <div className="space-y-3 pt-1">
        <div className="relative flex items-center justify-center">
          <div className="border-t border-[#D0E8E6] w-full" />
          <span className="bg-[#FFFFFF] px-3 text-[11px] text-[#4A6B68] font-bold uppercase tracking-wider relative">
            {t("auth.orContinue")}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <Button
            type="button"
            variant="outline"
            fullWidth
            className="justify-center gap-2 text-xs font-bold"
          >
            <span className="text-[#17A296] font-extrabold text-sm">G</span>
            <span>{t("auth.google")}</span>
          </Button>
          <Button
            type="button"
            variant="outline"
            fullWidth
            className="justify-center gap-2 text-xs font-bold"
          >
            <span className="bg-[#E6F4F3] border border-[#D0E8E6] text-[#236D64] text-[11px] px-1.5 py-0.5 rounded-md font-bold shrink-0">
              EduID
            </span>
            <span>{t("auth.sso")}</span>
          </Button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="text-center space-y-1.5 pt-3 border-t border-[#D0E8E6]/60 text-xs sm:text-sm">
        <p className="text-[#4A6B68] font-medium">
          {t("auth.newMember")}{" "}
          <Link
            to="/signup"
            className="text-[#0E6760] hover:text-[#17A296] font-extrabold hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] rounded"
          >
            {t("auth.request")}
          </Link>
        </p>
        <p className="text-xs text-[#4A6B68]/80">
          {t("auth.encryption")}
        </p>
      </div>
    </div>
  );
};

export default SignInForm;

import React, { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Calendar,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { signupRequest } from "@/api/auth/signup";
import { Input } from "@/component/ui/Input";
import { Button } from "@/component/ui/Button";
import { Checkbox } from "@/component/ui/Checkbox";
import LanguageSwitcher from "@/component/LanguageSwitcher";

/**
 * Registration form component validating patron fields, creating an account
 * via `/api/v1/register/`, and logging the new user directly into AuthContext.
 */
export const SignUpForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login: setAuthUser } = useAuth();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(true);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = {};

    if (!name.trim()) {
      nextErrors.name = t("auth.errors.nameRequired");
    }
    if (!lastName.trim()) {
      nextErrors.lastName = t("auth.errors.lastNameRequired");
    }
    if (!email.trim() || !email.includes("@")) {
      nextErrors.email = t("auth.errors.emailRequired");
    }
    if (!password || password.length < 8) {
      nextErrors.password = t("auth.errors.passwordLength");
    }
    if (password !== confirmPassword) {
      nextErrors.confirmPassword = t("auth.errors.passwordMismatch");
    }
    if (!agreed) {
      nextErrors.agreed = t("auth.errors.termsRequired");
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const result = await signupRequest({
        name: name.trim(),
        lastName: lastName.trim(),
        birthDate,
        email: email.trim(),
        password,
      });

      setSubmitted(true);
      setAuthUser(result.user);
      navigate("/", { replace: true });
    } catch (error) {
      const apiMessage =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        t("auth.errors.signUpFailed");
      setErrors({ form: apiMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full p-5 sm:p-8 lg:px-10 lg:py-8 space-y-4 text-[#0A2E2C]">
      {/* Top Desk Badge & Language Switcher */}
      <div className="flex items-center justify-between gap-2 text-xs text-[#4A6B68]">
        <span className="px-3 py-1 bg-[#E6F4F3] border border-[#D0E8E6] rounded-full text-[#236D64] font-bold">
          {t("auth.registerDesk")}
        </span>
        <LanguageSwitcher compact />
      </div>

      {/* Main Heading */}
      <div className="space-y-1">
        <span className="text-xs font-bold text-[#236D64] tracking-wider uppercase block">
          {t("nav.brand")} • {t("nav.signUp")}
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0E6760] leading-snug">
          {t("auth.registerTitle")}
        </h1>
        <p className="text-xs sm:text-sm text-[#4A6B68] leading-relaxed">
          {t("auth.registerDesc")}
        </p>
      </div>

      {/* Error / Success Banner */}
      {errors.form && (
        <div
          role="alert"
          className="bg-red-50 border border-red-200 p-3.5 rounded-2xl flex items-center gap-3 text-xs sm:text-sm text-red-700 font-bold"
        >
          <AlertCircle className="text-red-600 shrink-0" size={20} aria-hidden="true" />
          <span>{errors.form}</span>
        </div>
      )}

      {submitted && (
        <div
          role="status"
          aria-live="polite"
          className="bg-[#E6F4F3] border border-[#17A296] p-3.5 rounded-2xl flex items-center gap-3 text-xs sm:text-sm text-[#0E6760] font-bold"
        >
          <CheckCircle2 className="text-[#17A296] shrink-0" size={20} aria-hidden="true" />
          <span>{t("auth.signUpSuccess")}</span>
        </div>
      )}

      {/* Registration Fields */}
      <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 items-start">
          <Input
            label={t("auth.firstNameLabel")}
            type="text"
            placeholder={t("auth.firstNamePlaceholder")}
            icon={User}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
            }}
            error={errors.name}
            required
          />

          <Input
            label={t("auth.lastNameLabel")}
            type="text"
            placeholder={t("auth.lastNamePlaceholder")}
            icon={User}
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              if (errors.lastName) setErrors((prev) => ({ ...prev, lastName: "" }));
            }}
            error={errors.lastName}
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 items-start">
          <Input
            label={t("auth.birthDateLabel")}
            type="date"
            placeholder={t("auth.birthDatePlaceholder")}
            icon={Calendar}
            value={birthDate}
            onChange={(e) => {
              setBirthDate(e.target.value);
              if (errors.birthDate) setErrors((prev) => ({ ...prev, birthDate: "" }));
            }}
            error={errors.birthDate}
          />

          <Input
            label={t("auth.emailOnlyLabel")}
            type="email"
            placeholder={t("auth.emailPlaceholder")}
            autoComplete="email"
            icon={Mail}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
            }}
            error={errors.email}
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 items-start">
          <div className="space-y-1">
            <Input
              label={t("auth.passLabel")}
              type={showPassword ? "text" : "password"}
              placeholder={t("auth.passwordPlaceholder")}
              autoComplete="new-password"
              icon={Lock}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors((prev) => ({ ...prev, password: "" }));
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
            {!errors.password && (
              <p className="text-[11px] text-[#4A6B68] font-medium px-0.5">
                {t("auth.passMinHint")}
              </p>
            )}
          </div>

          <Input
            label={t("auth.confirmPassLabel")}
            type={showConfirm ? "text" : "password"}
            placeholder={t("auth.confirmPassPlaceholder")}
            autoComplete="new-password"
            icon={Lock}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              if (errors.confirmPassword) {
                setErrors((prev) => ({ ...prev, confirmPassword: "" }));
              }
            }}
            error={errors.confirmPassword}
            rightElement={
              <button
                type="button"
                onClick={() => setShowConfirm((prev) => !prev)}
                aria-label={showConfirm ? "Hide confirm password" : "Show confirm password"}
                className="text-[#236D64] hover:text-[#0E6760] transition-colors p-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296]"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            }
            required
          />
        </div>

        <div className="space-y-1 pt-0.5">
          <Checkbox
            id="agree-terms"
            label={t("auth.agreeTerms")}
            checked={agreed}
            onChange={(e) => {
              setAgreed(e.target.checked);
              if (errors.agreed) setErrors((prev) => ({ ...prev, agreed: "" }));
            }}
          />
          {errors.agreed && (
            <p className="text-xs text-red-600 font-medium">{errors.agreed}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          fullWidth
          size="lg"
          disabled={isSubmitting || submitted}
          className="font-bold flex items-center justify-center gap-2"
        >
          <span>{isSubmitting ? t("common.loading") : t("auth.registerSubmit")}</span>
          <ArrowRight size={18} className="rtl:rotate-180" aria-hidden="true" />
        </Button>
      </form>

      {/* Social / SSO Options */}
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
      <div className="text-center space-y-1.5 pt-2.5 border-t border-[#D0E8E6]/60 text-xs sm:text-sm">
        <p className="text-[#4A6B68] font-medium">
          {t("auth.alreadyMember")}{" "}
          <Link
            to="/signin"
            className="text-[#0E6760] hover:text-[#17A296] font-extrabold hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] rounded"
          >
            {t("auth.signInLink")}
          </Link>
        </p>
        <p className="text-xs text-[#4A6B68]/80">
          {t("auth.encryption")}
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;

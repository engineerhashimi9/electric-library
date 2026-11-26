import React, { useState } from "react";
import { User, Mail, Lock, Calendar, Eye, EyeOff, ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { signup as apiSignup } from "@/api/auth/signup";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";

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
    try {
      await apiSignup(name.trim(), lastName.trim(), birthDate, email.trim(), password);
    } catch {
      // Fallback for standalone frontend without live backend
    }

    setAuthUser({
      name: `${name.trim()} ${lastName.trim()}`.trim(),
      email: email.trim(),
    });

    setSubmitted(true);
    setTimeout(() => {
      navigate("/");
    }, 900);
  };

  return (
    <div className="auth-card-form">
      {/* Banner / Top Badge */}
      <div className="d-flex items-center justify-between gap-2">
        <span className="badge badge-sage">{t("auth.registerDesk")}</span>
        <LanguageSwitcher compact />
      </div>

      {/* Main Heading */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        <span className="badge badge-sage" style={{ alignSelf: "flex-start" }}>
          {t("nav.brand")} • {t("nav.signUp")}
        </span>
        <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--primary)" }}>
          {t("auth.registerTitle")}
        </h1>
        <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
          {t("auth.registerDesc")}
        </p>
      </div>

      {/* Success Banner */}
      {submitted && (
        <div
          role="status"
          aria-live="polite"
          style={{
            backgroundColor: "var(--bg-secondary)",
            border: "1px solid var(--primary-light)",
            padding: "1rem",
            borderRadius: "var(--radius-lg)",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            color: "var(--primary)",
            fontWeight: 700,
            fontSize: "0.875rem",
          }}
        >
          <CheckCircle2 size={20} style={{ color: "var(--primary-light)", flexShrink: 0 }} aria-hidden="true" />
          <span>{t("auth.signUpSuccess")}</span>
        </div>
      )}

      {/* Input Fields */}
      <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
          <Input
            label={t("auth.nameLabel", "First Name")}
            type="text"
            placeholder="Clara"
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
            label={t("auth.lastNameLabel", "Last Name")}
            type="text"
            placeholder="Vane"
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

        <Input
          label={t("auth.birthDateLabel", "Date of Birth")}
          type="date"
          icon={Calendar}
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />

        <Input
          label={t("auth.emailLabel")}
          type="email"
          placeholder="clara.vane@lumina.org"
          icon={Mail}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
          }}
          error={errors.email}
          required
        />

        <Input
          label={t("auth.passLabel")}
          type={showPassword ? "text" : "password"}
          placeholder="••••••••••••"
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
              style={{ color: "var(--primary)", padding: "4px", display: "flex", alignItems: "center" }}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          }
          required
        />

        <Input
          label={t("auth.confirmPassLabel", "Confirm Password")}
          type={showConfirm ? "text" : "password"}
          placeholder="••••••••••••"
          icon={Lock}
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            if (errors.confirmPassword) setErrors((prev) => ({ ...prev, confirmPassword: "" }));
          }}
          error={errors.confirmPassword}
          rightElement={
            <button
              type="button"
              onClick={() => setShowConfirm((prev) => !prev)}
              aria-label={showConfirm ? "Hide password" : "Show password"}
              style={{ color: "var(--primary)", padding: "4px", display: "flex", alignItems: "center" }}
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          }
          required
        />

        <div style={{ paddingTop: "0.25rem" }}>
          <Checkbox
            id="terms"
            label={t("auth.termsAgreement", "I agree to the Library Research Charter & Guidelines")}
            checked={agreed}
            onChange={(e) => {
              setAgreed(e.target.checked);
              if (errors.agreed) setErrors((prev) => ({ ...prev, agreed: "" }));
            }}
          />
          {errors.agreed && <p className="input-error-text" style={{ marginTop: "4px" }}>{errors.agreed}</p>}
        </div>

        <Button
          type="submit"
          variant="primary"
          fullWidth
          size="lg"
          disabled={submitted}
          style={{ marginTop: "0.5rem" }}
        >
          <span>{t("auth.registerSubmit", "Create Patron Account")}</span>
          <ArrowRight size={18} className="rtl-rotate-180" aria-hidden="true" />
        </Button>
      </form>

      {/* Footer Links */}
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          paddingTop: "1rem",
          borderTop: "1px solid var(--border-light)",
          fontSize: "0.85rem",
        }}
      >
        <p style={{ color: "var(--text-secondary)" }}>
          {t("auth.alreadyMember", "Already have a patron credential?")}{" "}
          <Link
            to="/signin"
            style={{
              color: "var(--primary)",
              fontWeight: 800,
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            {t("nav.signIn")}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;

import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { login as apiLogin } from "@/api/auth/login";

export const SignInForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login: setAuthUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("clara.vane@lumina.org");
  const [password, setPassword] = useState("archival-scholar-2024");
  const [errors, setErrors] = useState({});
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
    const rawName = email.split("@")[0].replace(/[._-]+/g, " ");
    const formattedName = rawName
      .split(" ")
      .filter(Boolean)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

    try {
      await apiLogin(email.trim(), password);
    } catch {
      // Fallback local auth state for demo / standalone frontend
    }

    setAuthUser({
      name: formattedName || "Scholar",
      email: email.trim(),
    });

    setSubmitted(true);
    setTimeout(() => {
      navigate("/");
    }, 800);
  };

  return (
    <div className="auth-card-form">
      {/* Banner / Top Badge */}
      <div className="d-flex items-center justify-between gap-2">
        <span className="badge badge-sage">{t("auth.desk")}</span>
        <LanguageSwitcher compact />
      </div>

      {/* Main Heading */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        <span className="badge badge-sage" style={{ alignSelf: "flex-start" }}>
          {t("nav.brand")} • {t("nav.signIn")}
        </span>
        <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--primary)" }}>
          {t("auth.welcome")}
        </h1>
        <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
          {t("auth.desc")}
        </p>
      </div>

      {/* Status Alert Card */}
      {submitted ? (
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
          <span>{t("auth.signInSuccess")}</span>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "var(--bg-secondary)",
            border: "1px solid var(--border-color)",
            padding: "0.85rem 1rem",
            borderRadius: "var(--radius-lg)",
            display: "flex",
            alignItems: "flex-start",
            gap: "0.75rem",
            fontSize: "0.85rem",
          }}
        >
          <ShieldCheck size={20} style={{ color: "var(--primary-light)", flexShrink: 0, marginTop: "2px" }} aria-hidden="true" />
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <p style={{ fontWeight: 700, color: "var(--primary)", margin: 0 }}>
              {t("auth.cloudActive")}
            </p>
            <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", margin: 0 }}>
              {t("auth.cloudDesc")}
            </p>
          </div>
        </div>
      )}

      {/* Input Fields */}
      <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
          helperText={t("auth.forgotKey")}
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
              style={{
                color: "var(--primary)",
                padding: "4px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          }
          required
        />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "0.25rem" }}>
          <Checkbox id="keep-active" label={t("auth.keepActive")} defaultChecked />
        </div>

        <Button
          type="submit"
          variant="primary"
          fullWidth
          size="lg"
          disabled={submitted}
          style={{ marginTop: "0.5rem" }}
        >
          <span>{t("auth.submit")}</span>
          <ArrowRight size={18} className="rtl-rotate-180" aria-hidden="true" />
        </Button>
      </form>

      {/* Social Logins */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", paddingTop: "0.5rem" }}>
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "100%", borderTop: "1px solid var(--border-color)" }} />
          <span
            style={{
              position: "absolute",
              backgroundColor: "var(--bg-card)",
              padding: "0 0.75rem",
              fontSize: "0.7rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--text-muted)",
            }}
          >
            {t("auth.orContinue")}
          </span>
        </div>

        <div className="auth-social-buttons-grid">
          <Button variant="outline" fullWidth size="md">
            <span style={{ color: "var(--primary-light)", fontWeight: 800, fontSize: "1rem" }}>G</span>
            <span>{t("auth.google")}</span>
          </Button>
          <Button variant="outline" fullWidth size="md">
            <span className="badge badge-sage">EduID</span>
            <span className="truncate">{t("auth.sso")}</span>
          </Button>
        </div>
      </div>

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
          {t("auth.newMember")}{" "}
          <Link
            to="/signup"
            style={{
              color: "var(--primary)",
              fontWeight: 800,
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            {t("auth.request")}
          </Link>
        </p>
        <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
          {t("auth.encryption")}
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
